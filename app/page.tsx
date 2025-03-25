"use client"
import { PainPointCard } from "@/components/pain-point-card"
import { SectionHeading } from "@/components/section-heading"
import { HiringProcessTimeline } from "@/components/hiring-process-timeline"
import { CaseStudy } from "@/components/case-study"
import { AnimatedButton } from "@/components/ui/animated-button"
import { BackgroundCircles } from "@/components/ui/background-circles"
import { SectionBackground } from "@/components/ui/section-background"
import { LogoCarousel } from "@/components/logo-carousel"
import { ComparisonTable } from "@/components/comparison-table"
import { useState } from "react"
import { ContactForm } from "@/components/contact-form"
import { HeroSection } from "@/components/hero-section"

export default function Home() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false)

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 to-slate-900 text-white pt-14">
      {/* Sticky header with only logo and button fixed */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-3 sm:px-6 py-2 sm:py-3 bg-slate-950/90 backdrop-blur-sm border-b border-slate-800/50">
        <div className="relative inline-block overflow-hidden rounded-full p-[1.5px]">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <div className="relative inline-flex h-full w-full items-center justify-center rounded-full bg-slate-950 px-4 sm:px-6 py-2 text-white">
            <div className="text-base sm:text-xl font-medium">Talent Assist</div>
          </div>
        </div>

        <div className="py-1.5 sm:py-2 px-4 sm:px-6 bg-purple-600 hover:bg-purple-700 transition-colors rounded-full">
          <button className="text-white font-medium text-sm sm:text-base" onClick={() => setIsContactFormOpen(true)}>
            Start Hiring Now
          </button>
        </div>
      </div>

      {/* Hero Section with Background Circles */}
      <BackgroundCircles isHeroSection variant="primary">
        <HeroSection onContactClick={() => setIsContactFormOpen(true)} />
      </BackgroundCircles>

      {/* Logo Carousel Section - transparent to show hero glow */}
      <div className="relative z-10 py-0 -mt-10 sm:-mt-16 bg-transparent">
        <div className="container mx-auto px-4 py-2 sm:py-4 border-b border-slate-800/50 bg-transparent">
          <h3 className="text-xl sm:text-2xl font-medium text-center text-white mb-3 sm:mb-5">Trusted By</h3>
          <LogoCarousel />
        </div>
      </div>

      {/* Pain Points Section */}
      <SectionBackground variant="primary" className="py-0">
        <div className="container mx-auto px-4 border-b border-slate-800/50 pt-2">
          <SectionHeading
            title="Hiring Challenges Slowing You Down?"
            subtitle="Traditional hiring processes are outdated and inefficient. See why companies are switching to AI-powered recruitment."
            centered
          />

          <div className="grid gap-2 sm:gap-4 md:gap-6 grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 max-w-7xl mx-auto pb-6 sm:pb-12 overflow-x-hidden">
            <PainPointCard
              statValue={69}
              statSuffix="%"
              description="of recruiters struggle to find qualified candidates in 2025, making hiring more challenging than ever."
              delay={0.1}
            />

            <PainPointCard
              statValue={42}
              smallSuffix="d"
              description="The average time required to fill a position, delaying productivity and business growth."
              delay={0.2}
            />

            <PainPointCard
              statValue={30}
              statSuffix="%"
              description="of an employee's annual salary is the estimated financial loss from a poor hiring decision."
              delay={0.3}
            />

            <PainPointCard
              statValue={100}
              statSuffix="+"
              description="Resumes received per role, 75% irrelevant, adding unnecessary workload for recruiters."
              delay={0.4}
            />

            <PainPointCard
              statValue={50}
              statSuffix="%"
              description="of candidates ghost scheduled interviews, wasting valuable time and resources."
              delay={0.5}
            />

            <PainPointCard
              statValue={86}
              statSuffix="%"
              description="of top candidates leave the market within 10 days, demanding faster hiring decisions."
              delay={0.6}
            />
          </div>
        </div>
      </SectionBackground>

      {/* Comparison Table Section */}
      <SectionBackground variant="primary">
        <div className="container mx-auto px-4 border-b border-slate-800/50 py-12 sm:py-16">
          <SectionHeading
            title="AI-First Approach Stage"
            subtitle="See how Talent Assist transforms every stage of the hiring process compared to traditional methods."
            centered
          />
          <ComparisonTable />
        </div>
      </SectionBackground>

      {/* How It Works Section with Timeline */}
      <SectionBackground variant="secondary">
        <HiringProcessTimeline />
      </SectionBackground>

      {/* Case Study Section */}
      <SectionBackground variant="tertiary">
        <CaseStudy />
      </SectionBackground>

      {/* Final CTA Section */}
      <SectionBackground variant="primary">
        <div className="container mx-auto px-4 py-12 sm:py-16">
          <div className="flex flex-col md:flex-row md:items-center gap-6 sm:gap-8 max-w-5xl mx-auto">
            <div className="md:w-1/2">
              <h3 className="text-2xl sm:text-3xl font-medium text-white mb-4">Talent Assist</h3>
              <p className="text-slate-300 text-sm sm:text-base mb-6">
                AI-powered recruitment platform that helps you find, evaluate, and hire the best talent faster. We
                leverage cutting-edge AI technology to streamline every step of your hiring process, saving you time and
                ensuring you make the best hiring decisions.
              </p>
            </div>

            <div className="md:w-1/2 flex flex-col sm:flex-row justify-center gap-4">
              <AnimatedButton
                className="text-white font-medium text-sm sm:text-base w-full sm:w-auto"
                onClick={() => setIsContactFormOpen(true)}
              >
                Start Hiring Now
              </AnimatedButton>
              <button
                onClick={() => setIsContactFormOpen(true)}
                className="inline-flex items-center justify-center px-6 sm:px-8 py-2 sm:py-3 rounded-full border border-slate-700 bg-slate-800/50 text-white hover:bg-slate-800 transition-colors text-sm sm:text-base w-full sm:w-auto"
              >
                Have Questions? Let's Talk
              </button>
            </div>
          </div>
        </div>
      </SectionBackground>

      {/* Simplified footer */}
      <footer className="bg-slate-950 py-8 px-4 text-center">
        <div className="container mx-auto">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} Talent Assist. All rights reserved.</p>
        </div>
      </footer>

      {/* Contact Form Modal */}
      <ContactForm isOpen={isContactFormOpen} onClose={() => setIsContactFormOpen(false)} title="Start Hiring Now" />
    </main>
  )
}

