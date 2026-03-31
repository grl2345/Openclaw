import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ArticleLoading() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-16">
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
          {/* 返回 */}
          <div className="mb-8 h-4 w-20 animate-pulse rounded bg-muted/40" />

          {/* 文章元信息 */}
          <header className="mb-8">
            {/* 分类 + 标签 */}
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <div className="h-6 w-12 animate-pulse rounded-md bg-primary/10" />
              <div className="h-5 w-16 animate-pulse rounded-md bg-muted/30" />
              <div className="h-5 w-14 animate-pulse rounded-md bg-muted/30" />
            </div>

            {/* 标题 */}
            <div className="mb-4 space-y-2">
              <div className="h-8 w-full animate-pulse rounded bg-muted/40" />
              <div className="h-8 w-3/4 animate-pulse rounded bg-muted/40" />
            </div>

            {/* 摘要 */}
            <div className="mb-6 space-y-1.5">
              <div className="h-4 w-full animate-pulse rounded bg-muted/30" />
              <div className="h-4 w-5/6 animate-pulse rounded bg-muted/30" />
            </div>

            {/* 作者、日期 */}
            <div className="flex flex-wrap items-center gap-4 border-b border-border/50 pb-6">
              <div className="h-4 w-24 animate-pulse rounded bg-muted/30" />
              <div className="h-4 w-20 animate-pulse rounded bg-muted/30" />
              <div className="h-4 w-16 animate-pulse rounded bg-muted/30" />
              <div className="h-4 w-12 animate-pulse rounded bg-muted/30" />
            </div>
          </header>

          {/* 正文骨架 */}
          <div className="min-h-32 space-y-4">
            <div className="h-4 w-full animate-pulse rounded bg-muted/30" />
            <div className="h-4 w-full animate-pulse rounded bg-muted/30" />
            <div className="h-4 w-5/6 animate-pulse rounded bg-muted/30" />
            <div className="h-4 w-full animate-pulse rounded bg-muted/30" />
            <div className="h-4 w-3/4 animate-pulse rounded bg-muted/30" />
            <div className="mt-6 h-64 w-full animate-pulse rounded-xl bg-muted/20" />
            <div className="h-4 w-full animate-pulse rounded bg-muted/30" />
            <div className="h-4 w-full animate-pulse rounded bg-muted/30" />
            <div className="h-4 w-2/3 animate-pulse rounded bg-muted/30" />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
