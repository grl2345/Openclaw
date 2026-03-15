import { OFFICIAL_LINKS } from "@/lib/official-links"

export type NewsCategory =
  | "all"
  | "official"
  | "research"
  | "programming"
  | "data"
  | "design"
  | "productivity"

export type SortType = "latest" | "hot"

export interface FeedItem {
  id: string
  source: string
  author: string
  date: string | null
  titleZh: string
  titleEn: string
  descriptionZh: string
  descriptionEn: string
  tags: string[]
  viewCount: number | null
  url: string
  category: NewsCategory
}

const OFFICIAL_CATEGORY: NewsCategory = "official"

/** 将官方链接转为统一的 Feed 卡片数据，便于与后续社区内容一起展示 */
export function getOfficialFeedItems(): FeedItem[] {
  return OFFICIAL_LINKS.map((item) => ({
    id: item.id,
    source: "official",
    author: "OpenClaw",
    date: null,
    titleZh: item.titleZh,
    titleEn: item.titleEn,
    descriptionZh: item.introZh,
    descriptionEn: item.introEn,
    tags: ["official"],
    viewCount: null,
    url: item.url,
    category: OFFICIAL_CATEGORY,
  }))
}

/** 后续社区收录可 push 到此数组，与官方合并后展示 */
export const COMMUNITY_FEED_ITEMS: FeedItem[] = []

export function getAllFeedItems(): FeedItem[] {
  return [...getOfficialFeedItems(), ...COMMUNITY_FEED_ITEMS]
}

export function filterByCategory(items: FeedItem[], category: NewsCategory): FeedItem[] {
  if (category === "all") return items
  return items.filter((i) => i.category === category)
}

export function filterBySearch(
  items: FeedItem[],
  query: string,
  isZh: boolean
): FeedItem[] {
  if (!query.trim()) return items
  const lower = query.trim().toLowerCase()
  return items.filter((item) => {
    const title = (isZh ? item.titleZh : item.titleEn).toLowerCase()
    const desc = (isZh ? item.descriptionZh : item.descriptionEn).toLowerCase()
    const text = [item.titleZh, item.titleEn, item.descriptionZh, item.descriptionEn].join(" ").toLowerCase()
    return text.includes(lower)
  })
}

export function sortFeedItems(items: FeedItem[], sort: SortType): FeedItem[] {
  if (sort === "latest") {
    return [...items].sort((a, b) => {
      const da = a.date ? new Date(a.date).getTime() : 0
      const db = b.date ? new Date(b.date).getTime() : 0
      return db - da
    })
  }
  // 最热：按 viewCount 降序，无数据的排后
  return [...items].sort((a, b) => {
    const va = a.viewCount ?? 0
    const vb = b.viewCount ?? 0
    return vb - va
  })
}
