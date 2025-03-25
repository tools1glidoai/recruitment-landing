"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface FadeAnimationProps {
  words: string[]
  transitionSpeed?: number
  delayBetweenWords?: number
  className?: string
  isMobile?: boolean
}

export function FadeAnimation({
  words,
  transitionSpeed = 0.7,
  delayBetweenWords = 3000,
  className = "",
  isMobile = false,
}: FadeAnimationProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length)
    }, delayBetweenWords)

    return () => clearInterval(interval)
  }, [words, delayBetweenWords])

  return (
    <div
      className={`inline-block ${isMobile ? "w-full" : "min-w-[160px]"} ${className}`}
      style={{ display: "inline-block" }}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={currentWordIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: transitionSpeed }}
          className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-amber-300 font-medium"
        >
          {words[currentWordIndex]}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}

