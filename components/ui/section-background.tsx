"use client"

import type React from "react"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Squares } from "./squares"

interface SectionBackgroundProps {
  className?: string
  children?: React.ReactNode
  variant?: "primary" | "secondary" | "tertiary"
  withSquares?: boolean
}

// Enhanced moving gradient backgrounds
const MovingGradients = ({ variant = "primary" }: { variant?: "primary" | "secondary" | "tertiary" }) => {
  const colors = {
    primary: {
      first: "rgba(147, 51, 234, 0.15)",
      second: "rgba(236, 72, 153, 0.15)",
      third: "rgba(251, 191, 36, 0.1)",
    },
    secondary: {
      first: "rgba(147, 51, 234, 0.15)",
      second: "rgba(236, 72, 153, 0.15)",
      third: "rgba(251, 191, 36, 0.1)",
    },
    tertiary: {
      first: "rgba(147, 51, 234, 0.15)",
      second: "rgba(236, 72, 153, 0.15)",
      third: "rgba(251, 191, 36, 0.15)",
    },
  }

  const currentColors = colors[variant]

  return (
    <>
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            `radial-gradient(circle at 20% 30%, ${currentColors.first} 0%, transparent 70%)`,
            `radial-gradient(circle at 30% 40%, ${currentColors.first} 0%, transparent 70%)`,
            `radial-gradient(circle at 40% 50%, ${currentColors.first} 0%, transparent 70%)`,
            `radial-gradient(circle at 30% 40%, ${currentColors.first} 0%, transparent 70%)`,
            `radial-gradient(circle at 20% 30%, ${currentColors.first} 0%, transparent 70%)`,
          ],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            `radial-gradient(circle at 70% 60%, ${currentColors.second} 0%, transparent 70%)`,
            `radial-gradient(circle at 80% 70%, ${currentColors.second} 0%, transparent 70%)`,
            `radial-gradient(circle at 90% 80%, ${currentColors.second} 0%, transparent 70%)`,
            `radial-gradient(circle at 80% 70%, ${currentColors.second} 0%, transparent 70%)`,
            `radial-gradient(circle at 70% 60%, ${currentColors.second} 0%, transparent 70%)`,
          ],
        }}
        transition={{
          duration: 18,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute inset-0 opacity-15"
        animate={{
          background: [
            `radial-gradient(circle at 40% 80%, ${currentColors.third} 0%, transparent 70%)`,
            `radial-gradient(circle at 50% 70%, ${currentColors.third} 0%, transparent 70%)`,
            `radial-gradient(circle at 60% 60%, ${currentColors.third} 0%, transparent 70%)`,
            `radial-gradient(circle at 50% 70%, ${currentColors.third} 0%, transparent 70%)`,
            `radial-gradient(circle at 40% 80%, ${currentColors.third} 0%, transparent 70%)`,
          ],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
    </>
  )
}

const AnimatedGrid = () => (
  <motion.div
    className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)]"
    animate={{
      backgroundPosition: ["0% 0%", "100% 100%"],
    }}
    transition={{
      duration: 40,
      repeat: Number.POSITIVE_INFINITY,
      ease: "linear",
    }}
  >
    <div className="h-full w-full [background-image:repeating-linear-gradient(100deg,#64748B_0%,#64748B_1px,transparent_1px,transparent_4%)] opacity-10" />
  </motion.div>
)

export function SectionBackground({
  className,
  children,
  variant = "primary",
  withSquares = true,
}: SectionBackgroundProps) {
  return (
    <div
      className={cn(
        "relative w-full py-6",
        "bg-gradient-to-br from-slate-950 to-slate-900", // Match hero gradient
        className,
      )}
    >
      {/* Squares background - consistent with hero */}
      {withSquares && (
        <div className="absolute inset-0 opacity-40">
          <Squares
            direction="diagonal"
            speed={0.3}
            squareSize={50}
            borderColor="#444"
            hoverFillColor="rgba(147, 51, 234, 0.2)"
          />
        </div>
      )}

      <AnimatedGrid />
      <MovingGradients variant={variant} />

      <div className="absolute inset-0 [mask-image:radial-gradient(90%_60%_at_50%_50%,#000_40%,transparent)]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#9333EA/30%,transparent_70%)] blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#EC4899/15%,transparent)] blur-[80px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#FCD34D/10%,transparent)] blur-[100px]" />
      </div>

      {/* Add a subtle top shadow for better section separation */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-slate-950/50 to-transparent"></div>

      {/* Add a subtle bottom shadow for better section separation */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-slate-950/50 to-transparent"></div>

      <div className="relative z-10">{children}</div>
    </div>
  )
}

