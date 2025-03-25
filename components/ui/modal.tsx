"use client"

import * as React from "react"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
  className?: string
}

export function Modal({ isOpen, onClose, title, children, className }: ModalProps) {
  // Close on escape key
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
    }
  }, [isOpen, onClose])

  // Close when clicking outside the modal
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-x-0 top-16 bottom-0 z-50 flex items-start justify-center bg-black/50 backdrop-blur-sm"
          onClick={handleBackdropClick}
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className={cn(
              "relative bg-slate-900 border border-slate-800 rounded-xl shadow-xl w-full max-w-4xl flex flex-col mt-4",
              "max-h-[calc(100vh-5rem)]",
              className,
            )}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex-none border-b border-slate-800 bg-slate-900 rounded-t-xl">
              <div className="relative flex items-center justify-between p-4">
                {title && <h2 className="text-xl font-medium text-white pr-10">{title}</h2>}
                <button
                  onClick={onClose}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto p-6 min-h-0">{children}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

