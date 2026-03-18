"use client"

import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { QuickStart } from "@/components/quickstart"
import { FeaturedUseCases } from "@/components/featured-usecases"
import { FeaturedSkills } from "@/components/featured-skills"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <QuickStart />
        <FeaturedSkills />
        <FeaturedUseCases />
      </main>
      <Footer />
    </div>
  )
}
