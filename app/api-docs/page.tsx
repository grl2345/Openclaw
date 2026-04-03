import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ApiDocsClient } from "./api-docs-client"

export const metadata: Metadata = {
  title: "API 文档 | API Documentation - OpenClaw Hub",
  description:
    "OpenClaw API 完整参考文档，包含 REST API、Webhook、SDK 使用指南与代码示例。Complete OpenClaw API reference with REST endpoints, webhooks, SDK guides and code examples.",
}

export default function ApiDocsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-16">
        <ApiDocsClient />
      </main>
      <Footer />
    </div>
  )
}
