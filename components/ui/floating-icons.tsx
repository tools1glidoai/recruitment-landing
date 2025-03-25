"use client"

import type React from "react"

import { motion } from "framer-motion"
import {
  UserSearch,
  FileSearch,
  BrainCircuit,
  FileCheck,
  Users,
  Briefcase,
  Award,
  LineChart,
  CheckCircle,
  Clock,
  Cpu,
  Database,
  Search,
  UserPlus,
  FileText,
  BarChart,
  PieChart,
  Zap,
  Star,
  Medal,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

interface FloatingIcon {
  id: number
  icon: React.ReactNode
  x: number
  y: number
  size: number
  opacity: number
  duration: number
  delay: number
  rotate: number
}

interface FloatingIconsProps {
  count?: number
  className?: string
}

const icons = [
  UserSearch,
  FileSearch,
  BrainCircuit,
  FileCheck,
  Users,
  Briefcase,
  Award,
  LineChart,
  CheckCircle,
  Clock,
  Cpu,
  Database,
  Search,
  UserPlus,
  FileText,
  BarChart,
  PieChart,
  Zap,
  Star,
  Medal,
]

export function FloatingIcons({ count = 15, className }: FloatingIconsProps) {
  const [floatingIcons, setFloatingIcons] = useState<FloatingIcon[]>([])
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    const generateIcons = () => {
      const newIcons: FloatingIcon[] = []

      for (let i = 0; i < count; i++) {
        const IconComponent = icons[Math.floor(Math.random() * icons.length)]
        const size = Math.random() * 30 + 16 // 16-46px
        const opacity = Math.random() * 0.25 + 0.1 // 0.1-0.35
        const rotate = Math.random() * 360 // 0-360 degrees

        newIcons.push({
          id: i,
          icon: <IconComponent size={size} />,
          x: Math.random() * 100, // 0-100%
          y: Math.random() * 100, // 0-100%
          size,
          opacity,
          duration: Math.random() * 20 + 10, // 10-30s
          delay: Math.random() * 5, // 0-5s
          rotate,
        })
      }

      setFloatingIcons(newIcons)
    }

    generateIcons()

    // Clean up
    return () => {
      setIsMounted(false)
    }
  }, [count])

  if (!isMounted) return null

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {floatingIcons.map((item) => (
        <motion.div
          key={item.id}
          className="absolute text-white"
          style={{
            left: `${item.x}%`,
            top: `${item.y}%`,
            rotate: `${item.rotate}deg`,
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: [0, item.opacity, item.opacity, 0],
            scale: [0.5, 1, 1, 0.5],
            y: [0, -20, -40, -60],
          }}
          transition={{
            duration: item.duration,
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: Math.random() * 10,
            delay: item.delay,
            ease: "easeInOut",
            times: [0, 0.3, 0.7, 1],
          }}
        >
          {item.icon}
        </motion.div>
      ))}
    </div>
  )
}

