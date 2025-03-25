import { HeroSection } from "@/components/ui/hero-section"

function HeroSectionDemo() {
  return (
    <HeroSection
      title="Welcome to TalentAssist"
      subtitle={{
        regular: "Find the best talent ",
        gradient: "in half the time",
      }}
      description="Our AI-driven recruitment assistance automates hiring, shortlists top candidates, and ensures you hire elite talent with ease."
      ctaText="Get Started"
      ctaHref="#"
      bottomImage={{
        light: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop",
        dark: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop",
      }}
      gridOptions={{
        angle: 65,
        opacity: 0.4,
        cellSize: 50,
        lightLineColor: "#4a4a4a",
        darkLineColor: "#2a2a2a",
      }}
    />
  )
}

export { HeroSectionDemo }

