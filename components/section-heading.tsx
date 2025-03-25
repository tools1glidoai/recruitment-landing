import type { ReactNode } from "react"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  centered?: boolean
  children?: ReactNode
}

export function SectionHeading({ title, subtitle, centered = false, children }: SectionHeadingProps) {
  return (
    <div className={`mb-6 sm:mb-8 md:mb-12 ${centered ? "text-center" : ""}`}>
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium tracking-tight text-white mb-2 sm:mb-3">
        {title}
      </h2>

      {subtitle && (
        <p
          className={`text-slate-300 text-xs sm:text-sm md:text-base mb-3 sm:mb-4 md:mb-6 ${centered ? "mx-auto max-w-3xl" : "max-w-3xl"}`}
        >
          {subtitle}
        </p>
      )}

      {children}
    </div>
  )
}

