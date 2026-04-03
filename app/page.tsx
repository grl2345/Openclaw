"use client"

import dynamic from "next/dynamic"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { QuickStart } from "@/components/quickstart"
import { Footer } from "@/components/footer"

const LatestNews = dynamic(() => import("@/components/latest-news").then(m => ({ default: m.LatestNews })), {
  loading: () => <div className="py-16 sm:py-20" />,
})

const LatestChangelog = dynamic(() => import("@/components/latest-changelog").then(m => ({ default: m.LatestChangelog })), {
  loading: () => <div className="py-16 sm:py-20" />,
})

const FeaturedSkills = dynamic(() => import("@/components/featured-skills").then(m => ({ default: m.FeaturedSkills })), {
  loading: () => <div className="py-16 sm:py-20" />,
})

const FeaturedUseCases = dynamic(() => import("@/components/featured-usecases").then(m => ({ default: m.FeaturedUseCases })), {
  loading: () => <div className="py-16 sm:py-20" />,
})

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <QuickStart />
        <LatestNews />
        <LatestChangelog />
        <FeaturedSkills />
        <FeaturedUseCases />
      </main>
      <Footer />
    </div>
  )
}
