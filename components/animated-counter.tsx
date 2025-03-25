"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedCounterProps {
  end: number
  duration?: number
  suffix?: string
  prefix?: string
  decimals?: number
  className?: string
}

export function AnimatedCounter({
  end,
  duration = 2,
  suffix = "",
  prefix = "",
  decimals = 0,
  className,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView && !hasAnimated) {
      let startTimestamp: number | null = null
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1)
        const currentCount = progress * end

        setCount(currentCount)

        if (progress < 1) {
          window.requestAnimationFrame(step)
        } else {
          setHasAnimated(true)
        }
      }

      window.requestAnimationFrame(step)
    }
  }, [isInView, end, duration, hasAnimated])

  const formattedCount = count.toFixed(decimals)

  return (
    <div
      ref={ref}
      className={cn(
        "text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-amber-300",
        className,
      )}
    >
      {prefix}
      {formattedCount}
      {suffix}
    </div>
  )
}

