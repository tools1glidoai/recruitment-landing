"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface TypingAnimationProps {
  words: string[]
  transitionSpeed?: number
  delayBetweenWords?: number
  className?: string
}

export function TypingAnimation({
  words,
  transitionSpeed = 0.5,
  delayBetweenWords = 2000,
  className = "",
}: TypingAnimationProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length)
    }, delayBetweenWords)

    return () => clearInterval(interval)
  }, [words, delayBetweenWords])

  return (
    <div className={`inline-block min-w-[120px] text-left ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentWordIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: transitionSpeed }}
          className="inline-block"
        >
          {words[currentWordIndex]}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}

