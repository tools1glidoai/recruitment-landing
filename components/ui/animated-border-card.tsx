"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface AnimatedBorderCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
  containerClassName?: string
  borderClassName?: string
}

export const AnimatedBorderCard = React.forwardRef<HTMLDivElement, AnimatedBorderCardProps>(
  ({ children, className, containerClassName, borderClassName, ...props }, ref) => {
    return (
      <div className={cn("relative group h-full w-full", containerClassName)}>
        <div
          className={cn(
            "absolute -inset-0.5 rounded-lg bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 opacity-20 sm:opacity-30 blur-[2px] sm:blur-sm transition duration-1000 group-hover:opacity-70 sm:group-hover:opacity-80 group-hover:blur-[3px] sm:group-hover:blur-md",
            "animate-[gradient_4s_ease_infinite]",
            borderClassName,
          )}
        />
        <div
          ref={ref}
          className={cn("relative rounded-lg bg-slate-800/90 p-3 sm:p-5 h-full flex flex-col", className)}
          {...props}
        >
          {children}
        </div>
      </div>
    )
  },
)

AnimatedBorderCard.displayName = "AnimatedBorderCard"

