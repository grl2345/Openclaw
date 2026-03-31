import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

function SkeletonCard() {
  return (
    <div className="flex flex-col rounded-xl border border-border/50 bg-card/60">
      {/* 封面图骨架 */}
      <div className="h-44 w-full animate-pulse rounded-t-xl bg-muted/40" />
      <div className="flex flex-1 flex-col p-5">
        {/* 分类 + 阅读量 */}
        <div className="mb-2.5 flex items-center justify-between">
          <div className="h-5 w-12 animate-pulse rounded-md bg-muted/40" />
          <div className="h-4 w-8 animate-pulse rounded bg-muted/30" />
        </div>
        {/* 标题 */}
        <div className="mb-2 space-y-1.5">
          <div className="h-4 w-full animate-pulse rounded bg-muted/40" />
          <div className="h-4 w-3/4 animate-pulse rounded bg-muted/40" />
        </div>
        {/* 摘要 */}
        <div className="mb-4 flex-1 space-y-1.5">
          <div className="h-3 w-full animate-pulse rounded bg-muted/30" />
          <div className="h-3 w-full animate-pulse rounded bg-muted/30" />
          <div className="h-3 w-2/3 animate-pulse rounded bg-muted/30" />
        </div>
        {/* 标签 */}
        <div className="mb-3 flex gap-1">
          <div className="h-4 w-14 animate-pulse rounded border border-border/50 bg-muted/30" />
          <div className="h-4 w-16 animate-pulse rounded border border-border/50 bg-muted/30" />
        </div>
        {/* 日期 */}
        <div className="flex items-center justify-between border-t border-border/30 pt-3">
          <div className="h-3 w-20 animate-pulse rounded bg-muted/30" />
          <div className="h-3 w-10 animate-pulse rounded bg-muted/30" />
        </div>
      </div>
    </div>
  )
}

export default function BlogLoading() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-16">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          {/* 页头 */}
          <header className="mb-10 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
              原创内容
            </div>
            <h1 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">
              博客 &amp; 教程
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              OpenClaw Hub 原创技术博客与实战教程，帮你更快掌握 AI 助理
            </p>
          </header>

          {/* 搜索框骨架 */}
          <div className="mb-6">
            <div className="h-12 w-full animate-pulse rounded-xl border border-border/60 bg-muted/20" />
          </div>

          {/* 分类筛选骨架 */}
          <div className="mb-8 flex flex-wrap gap-2">
            {["全部", "教程", "指南", "博客", "技巧", "更新"].map((label) => (
              <div
                key={label}
                className="rounded-full bg-muted px-4 py-1.5 text-sm font-medium text-muted-foreground"
              >
                {label}
              </div>
            ))}
          </div>

          {/* 文章卡片骨架 */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
