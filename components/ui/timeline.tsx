"use client"
import { useScroll, useTransform, motion } from "framer-motion"
import type React from "react"
import { useEffect, useRef, useState } from "react"
import { useMediaQuery } from "@/hooks/use-media-query"

interface TimelineEntry {
  title: string
  content: React.ReactNode
  icon?: React.ReactNode
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)
  const isMobile = useMediaQuery("(max-width: 768px)")

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect()
      setHeight(rect.height)
    }
  }, [ref])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end 80%"],
  })

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height])
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1])

  return (
    <div className="w-full bg-transparent font-sans" ref={containerRef}>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-16">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start pt-8 md:pt-24 md:gap-8">
            <div
              className={`sticky flex flex-col md:flex-row z-40 items-center ${isMobile ? "top-16" : "top-32"} self-start max-w-xs lg:max-w-sm md:w-full`}
            >
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-slate-800/90 border border-slate-700/50 flex items-center justify-center text-white">
                {item.icon}
              </div>
              <h3 className="hidden md:block text-lg md:pl-16 md:text-xl font-bold text-white">{item.title}</h3>
            </div>

            <div className="relative pl-16 pr-3 md:pl-4 w-full">
              <h3 className="md:hidden block text-base sm:text-lg mb-3 text-left font-bold text-white">{item.title}</h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-slate-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-pink-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  )
}

