"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface WordFadeAnimationProps {
  words: string[]
  delay?: number
  className?: string
}

export function WordFadeAnimation({ words, delay = 2500, className = "" }: WordFadeAnimationProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length)
    }, delay)

    return () => clearInterval(interval)
  }, [words, delay])

  return (
    <div className={`relative inline-block min-w-[140px] ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="absolute left-0 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-amber-400"
        >
          {words[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}

