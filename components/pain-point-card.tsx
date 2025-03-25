"use client"

import { motion } from "framer-motion"
import { AnimatedCounter } from "./animated-counter"
import { AnimatedBorderCard } from "@/components/ui/animated-border-card"

interface PainPointCardProps {
  statValue: number
  statSuffix?: string
  statPrefix?: string
  statSubtext?: string
  description: string
  delay?: number
  smallSuffix?: string
}

export function PainPointCard({
  statValue,
  statSuffix = "",
  statPrefix = "",
  statSubtext = "",
  description,
  delay = 0,
  smallSuffix = "",
}: PainPointCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, amount: 0.3 }}
      className="h-full"
    >
      <AnimatedBorderCard className="flex flex-col items-center text-center h-[180px] sm:h-[220px] p-2 sm:p-4 md:p-6">
        <div className="h-[100px] sm:h-[120px] flex flex-col items-center justify-center">
          <div className="h-[60px] sm:h-[80px] flex items-center">
            <div className="inline-flex items-baseline">
              <AnimatedCounter
                end={statValue}
                suffix={statSuffix}
                prefix={statPrefix}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-amber-300"
              />
              {smallSuffix && (
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-amber-300 text-lg sm:text-xl md:text-2xl ml-1">
                  {smallSuffix}
                </span>
              )}
            </div>
          </div>
          {statSubtext && <div className="text-white text-xs sm:text-sm md:text-base mt-2">{statSubtext}</div>}
        </div>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: delay + 0.3 }}
          viewport={{ once: true }}
          className="text-[10px] sm:text-xs md:text-sm text-slate-300 max-w-[220px] mx-auto line-clamp-3 sm:line-clamp-none"
        >
          {description}
        </motion.p>
      </AnimatedBorderCard>
    </motion.div>
  )
}

