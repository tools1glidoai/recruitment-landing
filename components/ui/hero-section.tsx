import * as React from "react"
import { cn } from "@/lib/utils"
import { ChevronRight } from "lucide-react"

interface HeroSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  subtitle?: {
    regular: string
    gradient: string
  }
  description?: string
  ctaText?: string
  ctaHref?: string
  showPill?: boolean
  pillText?: string
  customButton?: React.ReactNode
}

const HeroSection = React.forwardRef<HTMLDivElement, HeroSectionProps>(
  (
    {
      className,
      title = "Transform your ideas into",
      subtitle = {
        regular: "",
        gradient: "beautiful digital experiences",
      },
      description = "Transform your ideas into reality with our comprehensive suite of development tools and resources.",
      ctaText = "Get Started",
      ctaHref = "#",
      showPill = true,
      pillText = "Welcome to Our Platform",
      customButton,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        className={cn(
          "relative min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-gradient-to-b from-slate-950 to-slate-900",
          className,
        )}
        ref={ref}
        {...props}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(120,119,198,0.15),transparent_70%)]" />

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
          {showPill && (
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-slate-700 bg-slate-800/50 text-slate-300 text-sm mb-6">
              {pillText} <ChevronRight className="ml-1 h-4 w-4" />
            </div>
          )}

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white">
            {title}{" "}
            <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-amber-300">
              {subtitle.gradient}
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-slate-300 text-lg">{description}</p>

          {customButton ? (
            <div className="mt-8">{customButton}</div>
          ) : (
            <div className="mt-8">
              <a
                href={ctaHref}
                className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-slate-700 bg-slate-800/50 text-white hover:bg-slate-800 transition-colors"
              >
                {ctaText}
              </a>
            </div>
          )}
        </div>
      </div>
    )
  },
)
HeroSection.displayName = "HeroSection"

export { HeroSection }

