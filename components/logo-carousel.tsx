"use client"
import { useEffect, useRef } from "react"
import { motion, useAnimationControls } from "framer-motion"
import { useMediaQuery } from "@/hooks/use-media-query"

export function LogoCarousel() {
  const isMobile = useMediaQuery("(max-width: 768px)")
  const controls = useAnimationControls()
  const containerRef = useRef<HTMLDivElement>(null)

  // Define logos with the new URLs
  const logos = [
    {
      name: "M.D.I.P.L. Building Trust",
      imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-2anWbS03A35fGkqcfuOsFIqZN9xWow.png",
      containerWidth: "w-[70%]",
    },
    {
      name: "JMK Research & Analytics",
      imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-UcunAr4w7i6Vfr9sAm19cPuRGfjrWV.png",
      containerWidth: "w-full",
    },
    {
      name: "Northflo Consulting",
      imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-Z1PFBUbaGlhKBUE4uoyPbjuKWi5mC8.png",
      containerWidth: "w-[85%]",
    },
    {
      name: "Sure Energy Systems",
      imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-dXqr7cIOGcg9Jx7bw8Vh2ZEfibZc3J.png",
      containerWidth: "w-[70%]",
    },
  ]

  // Create a duplicated array for seamless infinite animation
  const duplicatedLogos = [...logos, ...logos]

  useEffect(() => {
    const startAnimation = async () => {
      // Get container width to determine animation distance
      if (!containerRef.current) return

      const containerWidth = containerRef.current.offsetWidth
      const logoWidth = containerWidth / (isMobile ? 2 : 4)
      const totalDistance = logoWidth * logos.length

      // Start the animation
      await controls.start({
        x: -totalDistance,
        transition: {
          duration: 20,
          ease: "linear",
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
        },
      })
    }

    startAnimation()

    // Restart animation on window resize
    const handleResize = () => startAnimation()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [controls, isMobile, logos.length])

  return (
    <div
      className="w-full overflow-hidden bg-transparent py-6 rounded-xl border border-slate-800/30"
      ref={containerRef}
    >
      <div className="relative">
        <motion.div className="flex items-center gap-4 px-2" animate={controls} initial={{ x: 0 }}>
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className={`flex-shrink-0 ${isMobile ? "w-1/3" : "w-1/5"} flex items-center justify-center`}
            >
              <div className="h-32 flex items-center justify-center">
                <img
                  src={logo.imageUrl || "/placeholder.svg"}
                  alt={logo.name}
                  className="max-h-28 max-w-full object-contain"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

