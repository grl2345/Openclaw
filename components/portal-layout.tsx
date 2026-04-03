"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LeftSidebar } from "@/components/left-sidebar"
import { RightSidebar } from "@/components/right-sidebar"
import { Breadcrumb } from "@/components/breadcrumb"

interface PortalLayoutProps {
  children: React.ReactNode
  /** Hide left sidebar (e.g. on homepage hero) */
  hideLeftSidebar?: boolean
  /** Hide right sidebar (e.g. on wide pages like skills) */
  hideRightSidebar?: boolean
  /** Hide breadcrumb (e.g. on homepage) */
  hideBreadcrumb?: boolean
}

export function PortalLayout({
  children,
  hideLeftSidebar = false,
  hideRightSidebar = false,
  hideBreadcrumb = false,
}: PortalLayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <div className="mx-auto max-w-[1400px] px-4 pt-16 sm:px-6 lg:px-8">
        {!hideBreadcrumb && <Breadcrumb />}
        <div className="flex gap-6">
          {/* Left Sidebar */}
          {!hideLeftSidebar && <LeftSidebar />}

          {/* Main Content */}
          <main className="min-w-0 flex-1">
            {children}
          </main>

          {/* Right Sidebar */}
          {!hideRightSidebar && <RightSidebar />}
        </div>
      </div>
      <Footer />
    </div>
  )
}
