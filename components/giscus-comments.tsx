"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

interface GiscusCommentsProps {
  /** Used as the discussion mapping term (e.g. article slug or page path) */
  term: string
}

/**
 * Giscus comment widget — powered by GitHub Discussions.
 *
 * To enable:
 * 1. Enable GitHub Discussions on your repo (grl2345/Openclaw)
 * 2. Install the Giscus app: https://github.com/apps/giscus
 * 3. Set the env vars below (or hard-code for a single repo):
 *    - NEXT_PUBLIC_GISCUS_REPO        = "grl2345/Openclaw"
 *    - NEXT_PUBLIC_GISCUS_REPO_ID     = (from https://giscus.app)
 *    - NEXT_PUBLIC_GISCUS_CATEGORY    = "Comments"
 *    - NEXT_PUBLIC_GISCUS_CATEGORY_ID = (from https://giscus.app)
 */
export function GiscusComments({ term }: GiscusCommentsProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { theme } = useTheme()

  const repo = process.env.NEXT_PUBLIC_GISCUS_REPO || "grl2345/Openclaw"
  const repoId = process.env.NEXT_PUBLIC_GISCUS_REPO_ID || ""
  const category = process.env.NEXT_PUBLIC_GISCUS_CATEGORY || "Comments"
  const categoryId = process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID || ""

  useEffect(() => {
    if (!ref.current || !repoId || !categoryId) return

    // Remove existing iframe if re-rendering
    const existing = ref.current.querySelector("iframe.giscus-frame")
    if (existing) existing.remove()

    const script = document.createElement("script")
    script.src = "https://giscus.app/client.js"
    script.setAttribute("data-repo", repo)
    script.setAttribute("data-repo-id", repoId)
    script.setAttribute("data-category", category)
    script.setAttribute("data-category-id", categoryId)
    script.setAttribute("data-mapping", "specific")
    script.setAttribute("data-term", term)
    script.setAttribute("data-strict", "0")
    script.setAttribute("data-reactions-enabled", "1")
    script.setAttribute("data-emit-metadata", "0")
    script.setAttribute("data-input-position", "top")
    script.setAttribute("data-theme", theme === "dark" ? "dark" : "light")
    script.setAttribute("data-lang", "zh-CN")
    script.setAttribute("data-loading", "lazy")
    script.crossOrigin = "anonymous"
    script.async = true

    ref.current.appendChild(script)

    return () => {
      script.remove()
    }
  }, [term, theme, repo, repoId, category, categoryId])

  // If Giscus is not configured, show a placeholder
  if (!repoId || !categoryId) {
    return (
      <div className="mt-12 rounded-xl border border-dashed border-border/60 bg-muted/20 p-8 text-center">
        <p className="text-sm text-muted-foreground">
          评论系统配置中…请在环境变量中设置 Giscus 参数以启用评论。
        </p>
        <p className="mt-2 text-xs text-muted-foreground">
          Visit{" "}
          <a
            href="https://giscus.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline"
          >
            giscus.app
          </a>
          {" "}to configure.
        </p>
      </div>
    )
  }

  return (
    <div className="mt-12 border-t border-border/50 pt-8">
      <h3 className="mb-4 text-lg font-semibold">评论</h3>
      <div ref={ref} />
    </div>
  )
}
