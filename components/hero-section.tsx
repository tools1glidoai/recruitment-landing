"use client"

import { useState, useEffect } from "react"
import { FadeAnimation } from "./fade-animation"
import { AnimatedButton } from "@/components/ui/animated-button"
import { useMediaQuery } from "@/hooks/use-media-query"

interface HeroSectionProps {
  onContactClick: () => void
}

export function HeroSection({ onContactClick }: HeroSectionProps) {
  const animatedWords = ["Find", "Evaluate", "Shortlist", "Simplify"]
  const isMobile = useMediaQuery("(max-width: 640px)")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // Return a placeholder with the same height to prevent layout shift
    return <div className="min-h-screen" />
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-20 pt-24">
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
        {/* Main heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white">
          Seamless Hiring with AI Agents
        </h1>

        {/* Desktop version - hidden on mobile */}
        {!isMobile && (
          <div className="flex items-center justify-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl space-x-4">
            <span>We</span>
            <FadeAnimation words={animatedWords} delayBetweenWords={3000} className="mx-2" />
            <span>&</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-amber-300 ml-2">
              You Make the Final Call
            </span>
          </div>
        )}

        {/* Mobile version - hidden on desktop */}
        {isMobile && (
          <div className="flex flex-col items-center justify-center text-2xl space-y-3">
            <div className="flex items-center justify-center">
              <span className="mr-2">We</span>
              <FadeAnimation words={animatedWords} delayBetweenWords={3000} isMobile={true} />
            </div>
            <span>&</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-amber-300">
              You Make the Final Call
            </span>
          </div>
        )}

        {/* Description */}
        <p className="max-w-2xl mx-auto text-slate-300 text-sm sm:text-base md:text-lg mt-6">
          At Talent Assist, we leverage AI at every stage—from sourcing and screening to shortlisting—so you secure top
          talent faster and with complete confidence.
        </p>

        {/* CTA Button */}
        <div className="mt-8">
          <AnimatedButton
            className="text-white font-medium text-sm sm:text-base py-3 px-6 sm:px-8"
            onClick={onContactClick}
          >
            Hire Smarter, Not Harder - Start Hiring Now!
          </AnimatedButton>
        </div>
      </div>
    </div>
  )
}

