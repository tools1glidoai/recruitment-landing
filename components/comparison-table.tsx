"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Check, X, Clock, Users, Filter, Calendar, MessageSquare, BarChart2, Scale } from "lucide-react"
import { useState } from "react"
import { useMediaQuery } from "@/hooks/use-media-query"

interface ComparisonItem {
  key: string
  aspect: string
  icon: React.ReactNode
  traditional: {
    text: string
    highlight?: string
    isNegative: boolean
  }
  aiFirst: {
    text: string
    highlight?: string
    isPositive: boolean
  }
}

const comparisonData: ComparisonItem[] = [
  {
    key: "speed",
    aspect: "Speed & Time to Hire",
    icon: <Clock className="w-5 h-5" />,
    traditional: {
      text: "Can stretch 6–8 weeks",
      highlight: " or more due to manual procedures",
      isNegative: true,
    },
    aiFirst: {
      text: "Achieve results in days or weeks",
      highlight: ", thanks to automated steps",
      isPositive: true,
    },
  },
  {
    key: "sourcing",
    aspect: "Candidate Sourcing",
    icon: <Users className="w-5 h-5" />,
    traditional: {
      text: "Manual outreach",
      highlight: " (job boards, referrals) with limited scope",
      isNegative: true,
    },
    aiFirst: {
      text: "AI-Driven search pulls",
      highlight: " from multiple platforms and talent networks",
      isPositive: true,
    },
  },
  {
    key: "screening",
    aspect: "Screening & Shortlisting",
    icon: <Filter className="w-5 h-5" />,
    traditional: {
      text: "Lengthy, subjective filtering",
      highlight: ", often reliant on gut feelings",
      isNegative: true,
    },
    aiFirst: {
      text: "Automated Scoring",
      highlight: " uses resume/LinkedIn data and AI insights",
      isPositive: true,
    },
  },
  {
    key: "interviews",
    aspect: "Initial Interviews",
    icon: <Calendar className="w-5 h-5" />,
    traditional: {
      text: "Typically unstructured",
      highlight: ", many scheduling conflicts",
      isNegative: true,
    },
    aiFirst: {
      text: "AI-Assisted calls",
      highlight: " ensure prompt scheduling and efficient screenings",
      isPositive: true,
    },
  },
  {
    key: "experience",
    aspect: "Candidate Experience",
    icon: <MessageSquare className="w-5 h-5" />,
    traditional: {
      text: "Slow follow-ups",
      highlight: ", minimal feedback during long processes",
      isNegative: true,
    },
    aiFirst: {
      text: "Streamlined Updates",
      highlight: " and faster responses boost candidate engagement",
      isPositive: true,
    },
  },
  {
    key: "accuracy",
    aspect: "Hiring Accuracy",
    icon: <BarChart2 className="w-5 h-5" />,
    traditional: {
      text: "Relies mostly on human judgment",
      highlight: ", risk of unconscious bias",
      isNegative: true,
    },
    aiFirst: {
      text: "Data-Driven evaluations",
      highlight: " reduce bias and deliver reliable matches",
      isPositive: true,
    },
  },
  {
    key: "scalability",
    aspect: "Scalability",
    icon: <Scale className="w-5 h-5" />,
    traditional: {
      text: "Difficult",
      highlight: " to handle high applicant volumes manually",
      isNegative: true,
    },
    aiFirst: {
      text: "Effortlessly",
      highlight: " scales to analyze hundreds of resumes in real time",
      isPositive: true,
    },
  },
]

export function ComparisonTable() {
  const [hoveredRow, setHoveredRow] = useState<string | null>(null)
  const isMobile = useMediaQuery("(max-width: 768px)")

  // Mobile optimized table view
  if (isMobile) {
    return (
      <div className="w-full max-w-6xl mx-auto">
        <div className="overflow-hidden rounded-xl border border-slate-700/50 bg-slate-900/50 backdrop-blur-sm">
          <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 p-4 text-center">
            <h3 className="text-lg font-medium text-white">Traditional vs. Talent Assist</h3>
            <div className="h-1 w-32 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mx-auto mt-3"></div>
          </div>

          <div>
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700/50">
                  <th className="p-3 text-left text-slate-300 font-medium text-xs">Aspect</th>
                  <th className="p-3 text-left text-slate-300 font-medium text-xs">Traditional</th>
                  <th className="p-3 text-left text-slate-300 font-medium text-xs">AI-First</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((item, index) => (
                  <motion.tr
                    key={item.key}
                    className="border-b border-slate-700/30 hover:bg-slate-800/30 transition-colors"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <td className="p-3">
                      <div className="flex items-center gap-2">
                        <div className="bg-slate-800 p-1.5 rounded-full text-purple-400">{item.icon}</div>
                        <span className="font-medium text-white text-xs">{item.aspect}</span>
                      </div>
                    </td>
                    <td className="p-3">
                      <div className="flex items-start gap-1">
                        <div className="mt-0.5 text-red-400 flex-shrink-0">
                          <X size={12} />
                        </div>
                        <div className="text-xs">
                          <span className="text-slate-300">{item.traditional.text}</span>
                        </div>
                      </div>
                    </td>
                    <td className="p-3">
                      <div className="flex items-start gap-1">
                        <div className="mt-0.5 text-green-400 flex-shrink-0">
                          <Check size={12} />
                        </div>
                        <div className="text-xs">
                          <span className="text-gradient font-medium">{item.aiFirst.text}</span>
                        </div>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }

  // Desktop table view
  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="overflow-hidden rounded-xl border border-slate-700/50 bg-slate-900/50 backdrop-blur-sm">
        <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 p-4 text-center">
          <h3 className="text-xl md:text-2xl font-medium text-white">Traditional Recruiter vs. Talent Assist</h3>
          <div className="h-1 w-32 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mx-auto mt-3"></div>
        </div>

        <div>
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-700/50">
                <th className="p-4 text-left text-slate-300 font-medium">Key Aspect</th>
                <th className="p-4 text-left text-slate-300 font-medium">Traditional Recruitment</th>
                <th className="p-4 text-left text-slate-300 font-medium">AI-First Recruitment</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((item, index) => (
                <motion.tr
                  key={item.key}
                  className={`border-b border-slate-700/30 ${
                    hoveredRow === item.key ? "bg-slate-800/50" : "hover:bg-slate-800/30"
                  } transition-colors`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  onMouseEnter={() => setHoveredRow(item.key)}
                  onMouseLeave={() => setHoveredRow(null)}
                >
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <div className="bg-slate-800 p-2 rounded-full text-purple-400">{item.icon}</div>
                      <span className="font-medium text-white">{item.aspect}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-start gap-2">
                      <div className="mt-1 text-red-400 flex-shrink-0">
                        <X size={16} />
                      </div>
                      <div>
                        <span className="text-slate-300">{item.traditional.text}</span>
                        <span className="text-slate-400">{item.traditional.highlight}</span>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-start gap-2">
                      <div className="mt-1 text-green-400 flex-shrink-0">
                        <Check size={16} />
                      </div>
                      <div>
                        <span className="text-gradient font-medium">{item.aiFirst.text}</span>
                        <span className="text-slate-300">{item.aiFirst.highlight}</span>
                      </div>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

