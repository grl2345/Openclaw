type HtmlToMarkdownImage = {
  placeholder: string
  src: string
  alt: string
}

export type HtmlToMarkdownResult = {
  markdown: string
  images: HtmlToMarkdownImage[]
}

function normalizeText(s: string) {
  return s
    .replace(/\u00a0/g, " ")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n[ \t]+/g, "\n")
    .replace(/[ \t]{2,}/g, " ")
}

function escapeMdText(s: string) {
  // Keep it conservative; primarily avoid breaking links/brackets
  return s.replace(/\[/g, "\\[").replace(/\]/g, "\\]")
}

function nodeText(node: Node): string {
  if (node.nodeType === Node.TEXT_NODE) return (node.nodeValue ?? "")
  if (node.nodeType !== Node.ELEMENT_NODE) return ""
  const el = node as Element
  return el.textContent ?? ""
}

export function htmlToMarkdown(html: string): HtmlToMarkdownResult {
  const doc = new DOMParser().parseFromString(html, "text/html")
  const images: HtmlToMarkdownImage[] = []
  let imgIndex = 0

  const walkInline = (node: Node): string => {
    if (node.nodeType === Node.TEXT_NODE) return node.nodeValue ?? ""
    if (node.nodeType !== Node.ELEMENT_NODE) return ""
    const el = node as HTMLElement
    const tag = el.tagName.toLowerCase()

    if (tag === "br") return "\n"

    if (tag === "strong" || tag === "b") {
      const inner = Array.from(el.childNodes).map(walkInline).join("")
      return `**${inner}**`
    }

    if (tag === "em" || tag === "i") {
      const inner = Array.from(el.childNodes).map(walkInline).join("")
      return `*${inner}*`
    }

    if (tag === "code") {
      const t = (el.textContent ?? "").replace(/\n+/g, " ").trim()
      return t ? `\`${t}\`` : ""
    }

    if (tag === "a") {
      const href = el.getAttribute("href") || ""
      const text = (Array.from(el.childNodes).map(walkInline).join("") || el.textContent || href).trim()
      if (!href) return text
      return `[${escapeMdText(text)}](${href})`
    }

    if (tag === "img") {
      const src =
        el.getAttribute("data-src") ||
        el.getAttribute("data-original") ||
        el.getAttribute("data-actualsrc") ||
        el.getAttribute("data-url") ||
        el.getAttribute("src") ||
        ""
      const alt = el.getAttribute("alt") || ""
      if (!src) return ""
      const placeholder = `__IMG_${imgIndex++}__`
      images.push({ placeholder, src, alt })
      return `![${escapeMdText(alt || "image")}](${placeholder})`
    }

    // ignore styling wrappers like span
    return Array.from(el.childNodes).map(walkInline).join("")
  }

  const walkBlock = (node: Node): string => {
    if (node.nodeType === Node.TEXT_NODE) {
      const t = (node.nodeValue ?? "").trim()
      return t ? t : ""
    }
    if (node.nodeType !== Node.ELEMENT_NODE) return ""
    const el = node as HTMLElement
    const tag = el.tagName.toLowerCase()

    if (tag === "pre") {
      const code = (el.textContent ?? "").replace(/\n$/, "")
      return `\n\`\`\`\n${code}\n\`\`\`\n`
    }

    if (/^h[1-6]$/.test(tag)) {
      const level = Math.min(6, Math.max(1, Number(tag.slice(1))))
      const hashes = "#".repeat(level + 1) // start from ## to fit existing toolbar convention
      const text = normalizeText(nodeText(el)).trim()
      return text ? `\n${hashes} ${text}\n` : ""
    }

    if (tag === "blockquote") {
      const t = normalizeText(Array.from(el.childNodes).map(walkInline).join("")).trim()
      if (!t) return ""
      const lines = t.split("\n").map((l) => `> ${l}`).join("\n")
      return `\n${lines}\n`
    }

    if (tag === "ul") {
      const items = Array.from(el.querySelectorAll(":scope > li"))
        .map((li) => normalizeText(Array.from(li.childNodes).map(walkInline).join("")).trim())
        .filter(Boolean)
        .map((t) => `- ${t}`)
        .join("\n")
      return items ? `\n${items}\n` : ""
    }

    if (tag === "ol") {
      const items = Array.from(el.querySelectorAll(":scope > li"))
        .map((li) => normalizeText(Array.from(li.childNodes).map(walkInline).join("")).trim())
        .filter(Boolean)
      const out = items.map((t, i) => `${i + 1}. ${t}`).join("\n")
      return out ? `\n${out}\n` : ""
    }

    if (tag === "hr") return "\n---\n"

    // Treat common containers as paragraph-ish blocks
    if (tag === "p" || tag === "div" || tag === "section" || tag === "article") {
      const t = normalizeText(Array.from(el.childNodes).map(walkInline).join("")).trim()
      return t ? `\n${t}\n` : ""
    }

    // Default: recurse into children
    const inner = Array.from(el.childNodes).map(walkBlock).join("")
    return inner
  }

  const md = normalizeText(Array.from(doc.body.childNodes).map(walkBlock).join(""))
    .replace(/\n{3,}/g, "\n\n")
    .trim()

  return { markdown: md, images }
}

