"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
  href?: string
}

export const AnimatedButton = React.forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ children, className, href, ...props }, ref) => {
    const ButtonTag = href ? ("a" as any) : "button"
    const buttonProps = href ? { href, ...props } : props

    return (
      <span className="relative inline-block overflow-hidden rounded-full p-[1.5px]">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <ButtonTag
          ref={ref}
          className={cn(
            "relative inline-flex h-full w-full items-center justify-center rounded-full bg-slate-950 px-4 sm:px-6 md:px-8 py-2 sm:py-3 text-white transition-all hover:bg-slate-900 text-xs sm:text-sm md:text-base",
            className,
          )}
          {...buttonProps}
        >
          {children}
        </ButtonTag>
      </span>
    )
  },
)

AnimatedButton.displayName = "AnimatedButton"

