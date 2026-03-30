export default function LoadingArticle() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="pt-16">
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="h-4 w-24 rounded bg-muted/60" />
          <div className="mt-8 space-y-4">
            <div className="h-7 w-3/4 rounded bg-muted/60" />
            <div className="h-7 w-2/3 rounded bg-muted/60" />
            <div className="mt-6 h-4 w-1/3 rounded bg-muted/50" />
          </div>
          <div className="mt-10 space-y-3">
            <div className="h-4 w-full rounded bg-muted/40" />
            <div className="h-4 w-11/12 rounded bg-muted/40" />
            <div className="h-4 w-10/12 rounded bg-muted/40" />
            <div className="h-4 w-9/12 rounded bg-muted/40" />
          </div>
        </div>
      </div>
    </div>
  )
}

