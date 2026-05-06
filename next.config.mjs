/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.supabase.co",
      },
      {
        protocol: "https",
        hostname: "**.supabase.in",
      },
    ],
  },
  trailingSlash: false,
  // Permanent (308) redirects are treated as 301 by Google. Use these to
  // collapse known alias paths and prevent crawlers from seeing 302s.
  async redirects() {
    return [
      // Collapse plural "/usecase" → singular "/usecases" detail listing.
      { source: "/use-case", destination: "/usecases", permanent: true },
      { source: "/use-cases", destination: "/usecases", permanent: true },
      { source: "/cases", destination: "/usecases", permanent: true },
      // Common skill aliases.
      { source: "/skill", destination: "/skills", permanent: true },
      { source: "/skill/:path*", destination: "/skills/:path*", permanent: true },
      { source: "/guide", destination: "/skills-guide", permanent: true },
      { source: "/guides", destination: "/skills-guide", permanent: true },
      { source: "/tutorial", destination: "/skills-guide", permanent: true },
      { source: "/tutorials", destination: "/skills-guide", permanent: true },
      { source: "/docs", destination: "/skills-guide", permanent: true },
      // Blog & changelog aliases.
      { source: "/posts", destination: "/blog", permanent: true },
      { source: "/posts/:slug", destination: "/blog/:slug", permanent: true },
      { source: "/article/:slug", destination: "/blog/:slug", permanent: true },
      { source: "/articles/:slug", destination: "/blog/:slug", permanent: true },
      { source: "/news/:slug", destination: "/blog/:slug", permanent: true },
      { source: "/release", destination: "/changelog", permanent: true },
      { source: "/releases", destination: "/changelog", permanent: true },
      { source: "/releases/:slug", destination: "/changelog/:slug", permanent: true },
      // Install/setup aliases.
      { source: "/setup", destination: "/install", permanent: true },
      { source: "/getting-started", destination: "/install", permanent: true },
      { source: "/download", destination: "/install", permanent: true },
      // API recommendation aliases.
      { source: "/api", destination: "/api-recommend", permanent: true },
      { source: "/apis", destination: "/api-recommend", permanent: true },
      { source: "/api-recommendation", destination: "/api-recommend", permanent: true },
      // Misc.
      { source: "/home", destination: "/", permanent: true },
      { source: "/index", destination: "/", permanent: true },
      { source: "/index.html", destination: "/", permanent: true },
    ]
  },
}

export default nextConfig
