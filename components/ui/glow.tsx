import React from "react"
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const glowVariants = cva("absolute w-full", {
  variants: {
    variant: {
      top: "top-0",
      above: "-top-[128px]",
      bottom: "bottom-0",
      below: "-bottom-[128px]",
      center: "top-[50%]",
    },
  },
  defaultVariants: {
    variant: "top",
  },
})

const Glow = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof glowVariants>>(
  ({ className, variant, ...props }, ref) => (
    <div ref={ref} className={cn(glowVariants({ variant }), className)} {...props}>
      <div
        className={cn(
          "absolute left-1/2 h-[256px] w-[60%] -translate-x-1/2 scale-[2] rounded-[50%] bg-[radial-gradient(ellipse_at_center,_hsla(221.2,83.2%,53.3%,0.15)_10%,_hsla(221.2,83.2%,53.3%,0)_70%)] sm:h-[512px]",
          variant === "center" && "-translate-y-1/2",
        )}
      />
      <div
        className={cn(
          "absolute left-1/2 h-[128px] w-[40%] -translate-x-1/2 scale-[1.5] rounded-[50%] bg-[radial-gradient(ellipse_at_center,_hsla(250,83.2%,53.3%,0.1)_10%,_hsla(250,83.2%,53.3%,0)_70%)] sm:h-[256px]",
          variant === "center" && "-translate-y-1/2",
        )}
      />
    </div>
  ),
)
Glow.displayName = "Glow"

export { Glow }

