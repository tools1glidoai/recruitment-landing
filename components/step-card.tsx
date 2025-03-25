"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface StepCardProps {
  number: number
  title: string
  description: string
  icon: ReactNode
  delay?: number
}

export function StepCard({ number, title, description, icon, delay = 0 }: StepCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true, amount: 0.3 }}
      className="flex gap-6 items-start"
    >
      <div className="flex-shrink-0">
        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-slate-800/80 border border-slate-700/50 text-white">
          <span className="text-2xl font-bold">{number}</span>
        </div>
      </div>

      <div>
        <div className="mb-2 text-gradient">{icon}</div>
        <h3 className="text-xl font-medium mb-2 text-white">{title}</h3>
        <p className="text-slate-300">{description}</p>
      </div>
    </motion.div>
  )
}

