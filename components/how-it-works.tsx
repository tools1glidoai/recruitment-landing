"use client"

import { SectionHeading } from "./section-heading"
import { StepCard } from "./step-card"
import { motion } from "framer-motion"
import { FileText, Award, PhoneCall, BarChart3 } from "lucide-react"

export function HowItWorks() {
  return (
    <div className="container mx-auto px-4">
      <SectionHeading
        title="How AI Transforms Hiring in Four Simple Steps"
        subtitle="Our AI-powered platform streamlines the entire recruitment process, saving you time and ensuring you find the best candidates."
        centered
      />

      <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
        <div className="space-y-10">
          <StepCard
            number={1}
            title="AI-Powered Resume & LinkedIn Analysis"
            description="AI extracts data from LinkedIn & resumes to assess candidate experience, skills, and job relevance."
            icon={<FileText className="w-8 h-8" />}
            delay={0.1}
          />

          <StepCard
            number={2}
            title="AI-Based Candidate Scoring & Shortlisting"
            description="AI assigns a score based on skill-match, experience, and recruiter criteria."
            icon={<Award className="w-8 h-8" />}
            delay={0.2}
          />

          <StepCard
            number={3}
            title="AI-Driven Interview Calls & Analysis"
            description="Shortlisted candidates receive AI-scheduled interview calls. AI conducts structured interviews and evaluates responses."
            icon={<PhoneCall className="w-8 h-8" />}
            delay={0.3}
          />

          <StepCard
            number={4}
            title="Final Report & AI Dashboard"
            description="AI compiles all insights into a dashboard. Recruiters receive a final shortlist with deep insights."
            icon={<BarChart3 className="w-8 h-8" />}
            delay={0.4}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative"
        >
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/50">
            <div className="bg-slate-800 p-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <div className="h-6 w-3/4 bg-slate-700/50 rounded mb-2"></div>
                <div className="h-6 w-1/2 bg-slate-700/50 rounded"></div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="h-24 bg-purple-900/30 rounded"></div>
                <div className="h-24 bg-blue-900/30 rounded"></div>
              </div>

              <div className="space-y-2 mb-6">
                <div className="h-4 bg-slate-700/50 rounded w-full"></div>
                <div className="h-4 bg-slate-700/50 rounded w-5/6"></div>
                <div className="h-4 bg-slate-700/50 rounded w-4/6"></div>
              </div>

              <div className="flex gap-2">
                <div className="h-10 w-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                <div className="h-10 w-24 bg-slate-700/50 rounded-full"></div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 blur-xl"></div>
          <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 blur-xl"></div>
        </motion.div>
      </div>
    </div>
  )
}

