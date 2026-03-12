"use client"

import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Categories } from "@/components/categories"
import { FeaturedUseCases } from "@/components/featured-usecases"
import { AllUseCases } from "@/components/all-usecases"
import { FeaturedSkills } from "@/components/featured-skills"
import { Features } from "@/components/features"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Categories />
        <FeaturedUseCases />
        <AllUseCases />
        <FeaturedSkills />
        <Features />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
