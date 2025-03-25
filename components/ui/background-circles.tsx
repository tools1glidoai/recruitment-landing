"use client"

import type React from "react"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Squares } from "./squares"
import { FloatingIcons } from "./floating-icons"

interface BackgroundCirclesProps {
  title?: string
  description?: string
  className?: string
  variant?: keyof typeof COLOR_VARIANTS
  children?: React.ReactNode
  isHeroSection?: boolean
}

const COLOR_VARIANTS = {
  primary: {
    border: ["border-purple-500/70", "border-pink-400/60", "border-amber-300/50"],
    gradient: "bg-gradient-to-r from-purple-500/40 via-pink-500/40 to-amber-300/40",
  },
  secondary: {
    border: ["border-violet-500/60", "border-fuchsia-400/50", "border-slate-600/30"],
    gradient: "from-violet-500/30",
  },
  tertiary: {
    border: ["border-pink-500/60", "border-amber-400/50", "border-slate-600/30"],
    gradient: "from-pink-500/30",
  },
} as const

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

// Enhanced moving gradient backgrounds
const MovingGradients = () => (
  <>
    <motion.div
      className="absolute inset-0 opacity-30"
      animate={{
        background: [
          "radial-gradient(circle at 20% 30%, rgba(147, 51, 234, 0.2) 0%, transparent 70%)",
          "radial-gradient(circle at 30% 40%, rgba(147, 51, 234, 0.2) 0%, transparent 70%)",
          "radial-gradient(circle at 40% 50%, rgba(147, 51, 234, 0.2) 0%, transparent 70%)",
          "radial-gradient(circle at 30% 40%, rgba(147, 51, 234, 0.2) 0%, transparent 70%)",
          "radial-gradient(circle at 20% 30%, rgba(147, 51, 234, 0.2) 0%, transparent 70%)",
        ],
      }}
      transition={{
        duration: 15,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
    />
    <motion.div
      className="absolute inset-0 opacity-30"
      animate={{
        background: [
          "radial-gradient(circle at 70% 60%, rgba(236, 72, 153, 0.2) 0%, transparent 70%)",
          "radial-gradient(circle at 80% 70%, rgba(236, 72, 153, 0.2) 0%, transparent 70%)",
          "radial-gradient(circle at 90% 80%, rgba(236, 72, 153, 0.2) 0%, transparent 70%)",
          "radial-gradient(circle at 80% 70%, rgba(236, 72, 153, 0.2) 0%, transparent 70%)",
          "radial-gradient(circle at 70% 60%, rgba(236, 72, 153, 0.2) 0%, transparent 70%)",
        ],
      }}
      transition={{
        duration: 18,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
    />
    <motion.div
      className="absolute inset-0 opacity-20"
      animate={{
        background: [
          "radial-gradient(circle at 40% 80%, rgba(251, 191, 36, 0.15) 0%, transparent 70%)",
          "radial-gradient(circle at 50% 70%, rgba(251, 191, 36, 0.15) 0%, transparent 70%)",
          "radial-gradient(circle at 60% 60%, rgba(251, 191, 36, 0.15) 0%, transparent 70%)",
          "radial-gradient(circle at 50% 70%, rgba(251, 191, 36, 0.15) 0%, transparent 70%)",
          "radial-gradient(circle at 40% 80%, rgba(251, 191, 36, 0.15) 0%, transparent 70%)",
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

export function BackgroundCircles({
  title = "Background Circles",
  description = "Optional Description",
  className,
  variant = "primary",
  children,
  isHeroSection = false,
}: BackgroundCirclesProps) {
  const variantStyles = COLOR_VARIANTS[variant]

  return (
    <div className={cn("relative flex min-h-screen w-full flex-col", "bg-slate-950", className)}>
      {/* Squares background */}
      <div className="absolute inset-0 opacity-40">
        <Squares
          direction="diagonal"
          speed={0.3}
          squareSize={50}
          borderColor="#444"
          hoverFillColor="rgba(147, 51, 234, 0.2)"
        />
      </div>

      <AnimatedGrid />
      <MovingGradients />
      <FloatingIcons count={30} />

      {/* Glow circles removed as requested */}

      <div className="relative z-20 flex-1">{children}</div>

      <div className="absolute inset-0 [mask-image:radial-gradient(90%_60%_at_50%_50%,#000_40%,transparent)]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#9333EA/30%,transparent_70%)] blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#EC4899/15%,transparent)] blur-[80px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#FCD34D/10%,transparent)] blur-[100px]" />
      </div>
    </div>
  )
}

