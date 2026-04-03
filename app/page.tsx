"use client"

import dynamic from "next/dynamic"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LeftSidebar } from "@/components/left-sidebar"
import { RightSidebar } from "@/components/right-sidebar"
import { Hero } from "@/components/hero"
import { QuickStart } from "@/components/quickstart"
import { AdSlot } from "@/components/ad-slot"

const LatestNews = dynamic(() => import("@/components/latest-news").then(m => ({ default: m.LatestNews })), {
  loading: () => <div className="py-12" />,
})

const LatestChangelog = dynamic(() => import("@/components/latest-changelog").then(m => ({ default: m.LatestChangelog })), {
  loading: () => <div className="py-12" />,
})

const FeaturedSkills = dynamic(() => import("@/components/featured-skills").then(m => ({ default: m.FeaturedSkills })), {
  loading: () => <div className="py-12" />,
})

const FeaturedUseCases = dynamic(() => import("@/components/featured-usecases").then(m => ({ default: m.FeaturedUseCases })), {
  loading: () => <div className="py-12" />,
})

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero - full width */}
      <div className="pt-14">
        <Hero />
      </div>

      {/* Portal 3-column layout */}
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="flex gap-6">
          {/* Left Sidebar */}
          <LeftSidebar />

          {/* Main Content */}
          <main className="min-w-0 flex-1">
            <LatestNews />
            {/* Ad — content inline (between news and changelog) */}
            <AdSlot slot="content-inline" className="my-6" />
            <LatestChangelog />
            <FeaturedSkills />
            <FeaturedUseCases />
          </main>

          {/* Right Sidebar */}
          <RightSidebar />
        </div>
      </div>

      <Footer />
    </div>
  )
}
