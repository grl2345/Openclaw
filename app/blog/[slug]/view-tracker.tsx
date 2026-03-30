"use client"

import { useEffect } from "react"

export function ViewTracker({ slug }: { slug: string }) {
  useEffect(() => {
    // Fire-and-forget: increment view count via existing API
    fetch(`/api/blog/articles/${slug}`).catch(() => {})
  }, [slug])

  return null
}
