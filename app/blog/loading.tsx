export default function LoadingBlog() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="pt-16">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <div className="mx-auto h-6 w-40 rounded bg-muted/60" />
            <div className="mt-4 h-10 w-80 rounded bg-muted/60 mx-auto" />
            <div className="mt-3 h-5 w-96 rounded bg-muted/40 mx-auto" />
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="rounded-xl border border-border/50 bg-card/60">
                <div className="h-44 w-full rounded-t-xl bg-muted/40" />
                <div className="p-5 space-y-3">
                  <div className="h-4 w-20 rounded bg-muted/40" />
                  <div className="h-5 w-5/6 rounded bg-muted/50" />
                  <div className="h-5 w-4/6 rounded bg-muted/50" />
                  <div className="h-4 w-full rounded bg-muted/30" />
                  <div className="h-4 w-11/12 rounded bg-muted/30" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

