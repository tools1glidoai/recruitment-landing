"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

interface DashboardTabProps {
  tabs: {
    id: string
    label: string
  }[]
  defaultTab?: string
  onChange?: (tabId: string) => void
}

export function DashboardTab({ tabs, defaultTab, onChange }: DashboardTabProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0].id)

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId)
    if (onChange) {
      onChange(tabId)
    }
  }

  return (
    <div className="mb-8 flex gap-2 overflow-x-auto md:flex-col md:overflow-visible pb-2 md:pb-0">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => handleTabChange(tab.id)}
          className={cn(
            "px-4 py-3 md:py-4 rounded-lg text-left transition-all whitespace-nowrap md:whitespace-normal text-sm",
            activeTab === tab.id
              ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
              : "bg-slate-900/50 hover:bg-slate-900/70 text-slate-300 border border-slate-800/50",
          )}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}

