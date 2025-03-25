"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { SectionHeading } from "./section-heading"
import { DashboardTab } from "./dashboard-tab"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Maximize2,
  FileText,
  User,
  Clock,
  CheckCircle,
  XCircle,
  ExternalLink,
  Briefcase,
  Award,
  Star,
  Users,
  AlertCircle,
  ChevronDown,
  ChevronUp,
  BarChart,
  PieChart,
  BarChart2,
  Zap,
  Target,
  TrendingUp,
  MessageSquare,
  Mail,
  Phone,
} from "lucide-react"
import { Chart } from "@/components/ui/chart"
import { Modal } from "@/components/ui/modal"
import { useMediaQuery } from "@/hooks/use-media-query"
import { AudioPlayer } from "@/components/ui/audio-player"
import { fetchCandidateData, processCandidateData } from "@/utils/parse-csv"
import { processedCandidates } from "@/data/candidates"

// Replace the initialCandidateData with our processed candidates
const initialCandidateData = processedCandidates

export function CaseStudy() {
  const [activeTab, setActiveTab] = useState("performance")
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalContent, setModalContent] = useState<{
    title: string
    content: React.ReactNode
  }>({ title: "", content: null })
  const [isFullScreenMode, setIsFullScreenMode] = useState(false)
  const isMobile = useMediaQuery("(max-width: 768px)")
  const [candidateData, setCandidateData] = useState(initialCandidateData)
  const [isLoading, setIsLoading] = useState(true)
  const [expandedCandidate, setExpandedCandidate] = useState<string | null>(null)
  const [activeAnalysisTab, setActiveAnalysisTab] = useState<string>("resume")
  const [modalExpandedCandidate, setModalExpandedCandidate] = useState<string | null>(null)
  const [modalActiveAnalysisTab, setModalActiveAnalysisTab] = useState<string>("resume")

  // Fetch candidate data from CSV
  useEffect(() => {
    async function loadCandidateData() {
      try {
        setIsLoading(true)
        const rawData = await fetchCandidateData()
        if (rawData && rawData.length > 0) {
          const processedData = processCandidateData(rawData)
          setCandidateData(processedData)
        }
      } catch (error) {
        console.error("Error loading candidate data:", error)
      } finally {
        setIsLoading(false)
      }
    }

    loadCandidateData()
  }, [])

  const tabs = [
    { id: "performance", label: isMobile ? "Performance" : "Hiring Performance" },
    { id: "evaluation", label: isMobile ? "Evaluation" : "Candidate Evaluation" },
    { id: "shortlisted", label: isMobile ? "Shortlisted" : "Shortlisted Candidates" },
  ]

  const openModal = (title: string, content: React.ReactNode, fullScreen = false) => {
    setModalContent({ title, content })
    setIsModalOpen(true)
    setIsFullScreenMode(fullScreen)
  }

  // Calculate metrics based on the candidate data
  const calculateMetrics = () => {
    // The actual total from the CSV data
    const totalCandidates = candidateData.length
    // Count shortlisted candidates
    const shortlistedCandidates = candidateData.filter((c) => c.status === "Shortlisted").length
    const inReviewCandidates = candidateData.filter((c) => c.status === "In Review").length
    const rejectedCandidates = candidateData.filter((c) => c.status === "Rejected").length

    const shortlistRate = (shortlistedCandidates / totalCandidates) * 100
    const rejectionRate = (rejectedCandidates / totalCandidates) * 100

    const avgResumeScore = candidateData.reduce((sum, c) => sum + c.resumeScore, 0) / candidateData.length
    const avgLinkedinScore = candidateData.reduce((sum, c) => sum + c.linkedinScore, 0) / candidateData.length
    const avgAiMatch = candidateData.reduce((sum, c) => sum + c.aiMatch, 0) / candidateData.length

    // Calculate time to shortlist (in days) - keep at 7 days as requested
    const timeToShortlist = 7

    // Get top 3 candidates by AI match score
    const topCandidates = [...candidateData]
      .sort((a, b) => b.aiMatch - a.aiMatch)
      .slice(0, 3)
      .map((c) => c.name)

    return {
      totalCandidates,
      shortlistedCandidates,
      inReviewCandidates,
      rejectedCandidates,
      shortlistRate,
      rejectionRate,
      avgResumeScore,
      avgLinkedinScore,
      avgAiMatch,
      timeToShortlist,
      topCandidates,
    }
  }

  const metrics = calculateMetrics()

  // Generate hiring metrics data based on actual candidate data
  const hiringMetricsData = [
    { month: "Jan", timeToHire: 42, qualityOfHire: 78 },
    { month: "Feb", timeToHire: 38, qualityOfHire: 80 },
    { month: "Mar", timeToHire: 35, qualityOfHire: 82 },
    { month: "Apr", timeToHire: 30, qualityOfHire: 85 },
    { month: "May", timeToHire: 25, qualityOfHire: 87 },
    { month: "Jun", timeToHire: 15, qualityOfHire: 90 },
    { month: "Jul", timeToHire: 10, qualityOfHire: 92 },
    { month: "Aug", timeToHire: 7, qualityOfHire: Math.round(metrics.avgAiMatch * 10) },
  ]

  // Candidate status distribution
  const statusDistributionData = [
    { name: "Shortlisted", value: metrics.shortlistedCandidates },
    { name: "In Review", value: metrics.inReviewCandidates },
    { name: "Rejected", value: metrics.rejectedCandidates },
  ]

  // Skill distribution data based on candidate skills
  const generateSkillDistribution = () => {
    const skillCounts: Record<string, number> = {}

    candidateData.forEach((candidate) => {
      candidate.skills.forEach((skill) => {
        if (skillCounts[skill]) {
          skillCounts[skill]++
        } else {
          skillCounts[skill] = 1
        }
      })
    })

    // Convert to array and sort by count
    return Object.entries(skillCounts)
      .map(([name, count]) => ({ name, value: count }))
      .sort((a, b) => b.value - a.value)
      .slice(0, 6) // Take top 6 skills
  }

  const skillDistributionData = generateSkillDistribution()

  // Score distribution data
  const scoreDistributionData = [
    { name: "Resume Score", value: metrics.avgResumeScore },
    { name: "LinkedIn Score", value: metrics.avgLinkedinScore },
    { name: "AI Match", value: metrics.avgAiMatch },
    {
      name: "Interview Score",
      value: candidateData.reduce((sum, c) => sum + c.interviewScore, 0) / candidateData.length,
    },
  ]

  // Top candidates by score
  const topCandidatesData = candidateData
    .sort((a, b) => b.aiMatch - a.aiMatch)
    .slice(0, 5)
    .map((candidate) => ({
      name: candidate.name,
      match: candidate.aiMatch,
      resume: candidate.resumeScore,
      linkedin: candidate.linkedinScore,
      creativity: candidate.creativityScore,
      technical: candidate.technicalSkills,
    }))

  // Candidate score comparison data
  const candidateScoreComparisonData = topCandidatesData.map((candidate) => ({
    name: candidate.name,
    "Resume Score": candidate.resume,
    "LinkedIn Score": candidate.linkedin,
    Creativity: candidate.creativity,
    "Technical Skills": candidate.technical,
    "AI Match": candidate.match,
  }))

  // Time saved metrics
  const timeSavedData = [
    { name: "Traditional", value: 42 },
    { name: "AI-Powered", value: 7 },
  ]

  // Candidate quality improvement data
  const qualityImprovementData = hiringMetricsData.map((item) => ({
    month: item.month,
    quality: item.qualityOfHire,
  }))

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4">
      <SectionHeading
        title="Proven Results: AI-Powered Hiring in Action"
        subtitle="Real-world case studies showing how our AI transforms recruitment processes and outcomes."
        centered
      >
        <div className="h-1 w-32 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mx-auto"></div>
      </SectionHeading>

      {/* Case Study Introduction */}
      <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-3 md:p-6 max-w-5xl mx-auto border border-slate-700/50 mb-6">
        <h3 className="text-lg font-medium text-white text-center mb-3">
          Case Study: Social Media Content Creator Role
        </h3>

        {/* Challenge and Solution cards - side by side on mobile */}
        <div className="flex flex-row gap-3 mb-3 overflow-x-auto hide-scrollbar pb-1">
          <div className="bg-slate-900/70 p-3 rounded-lg border border-slate-800/50 min-w-[200px] flex-1">
            <h4 className="text-white font-medium mb-2 flex items-center text-sm">
              <AlertCircle className="mr-2 h-4 w-4 text-amber-400 flex-shrink-0" /> Challenge
            </h4>
            <p className="text-slate-300 text-xs leading-tight">
              The recruitment team struggled with unqualified applicants with surface-level knowledge. The hiring
              process was inefficient, with candidates lacking specific creative and technical skills needed.
            </p>
          </div>

          <div className="bg-slate-900/70 p-3 rounded-lg border border-slate-800/50 min-w-[200px] flex-1">
            <h4 className="text-white font-medium mb-2 flex items-center text-sm">
              <CheckCircle className="mr-2 h-4 w-4 text-green-400 flex-shrink-0" /> Solution
            </h4>
            <p className="text-slate-300 text-xs leading-tight">
              Our AI-driven system analyzed resumes, LinkedIn profiles, and conducted structured interviews. This
              streamlined process identified qualified candidates, reducing time to hire from weeks to 7 days.
            </p>
          </div>
        </div>

        <div className="flex gap-2 justify-between">
          <div className="bg-slate-900/70 p-2 rounded-lg border border-slate-800/50 text-center flex-1">
            <div className="text-green-400 text-base font-bold">83%</div>
            <div className="text-slate-300 text-[10px]">Time Saved</div>
          </div>
          <div className="bg-slate-900/70 p-2 rounded-lg border border-slate-800/50 text-center flex-1">
            <div className="text-purple-400 text-base font-bold">7 Days</div>
            <div className="text-slate-300 text-[10px]">Time to Hire</div>
          </div>
          <div className="bg-slate-900/70 p-2 rounded-lg border border-slate-800/50 text-center flex-1">
            <div className="text-pink-400 text-base font-bold">95%</div>
            <div className="text-slate-300 text-[10px]">Match Accuracy</div>
          </div>
        </div>
      </div>

      <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-3 md:p-8 max-w-5xl mx-auto border border-slate-700/50">
        <div className="grid md:grid-cols-4 gap-3 md:gap-6">
          {/* Tabs - Horizontal for mobile, Vertical for desktop */}
          <div className="md:col-span-1">
            {isMobile ? (
              <div className="flex overflow-x-auto pb-2 space-x-1 mb-3 hide-scrollbar">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-2 py-1.5 whitespace-nowrap rounded-lg text-center transition-all text-xs ${
                      activeTab === tab.id
                        ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                        : "bg-slate-900/50 hover:bg-slate-900/70 text-slate-300 border border-slate-800/50"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            ) : (
              <DashboardTab tabs={tabs} defaultTab="performance" onChange={setActiveTab} />
            )}
          </div>

          {/* Right Side: Content */}
          <div className="md:col-span-3">
            {activeTab === "performance" && (
              <PerformanceTab
                openModal={openModal}
                isMobile={isMobile}
                metrics={metrics}
                hiringMetricsData={hiringMetricsData}
                statusDistributionData={statusDistributionData}
                skillDistributionData={skillDistributionData}
                scoreDistributionData={scoreDistributionData}
                topCandidatesData={topCandidatesData}
                candidateScoreComparisonData={candidateScoreComparisonData}
                timeSavedData={timeSavedData}
                qualityImprovementData={qualityImprovementData}
              />
            )}

            {activeTab === "evaluation" && (
              <EvaluationTab
                openModal={openModal}
                isMobile={isMobile}
                candidateData={candidateData}
                expandedCandidate={expandedCandidate}
                setExpandedCandidate={setExpandedCandidate}
                activeAnalysisTab={activeAnalysisTab}
                setActiveAnalysisTab={setActiveAnalysisTab}
                modalExpandedCandidate={modalExpandedCandidate}
                setModalExpandedCandidate={setModalExpandedCandidate}
                modalActiveAnalysisTab={modalActiveAnalysisTab}
                setModalActiveAnalysisTab={setModalActiveAnalysisTab}
              />
            )}

            {activeTab === "shortlisted" && (
              <ShortlistedTab
                openModal={openModal}
                isMobile={isMobile}
                candidateData={candidateData}
                topCandidates={metrics.topCandidates}
              />
            )}
          </div>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={modalContent.title}
        className={`z-[100] ${isFullScreenMode ? "max-w-[95vw] w-full h-[90vh] max-h-[90vh]" : ""}`}
      >
        {modalContent.content}
      </Modal>
    </div>
  )
}

function PerformanceTab({
  openModal,
  isMobile,
  metrics,
  hiringMetricsData,
  statusDistributionData,
  skillDistributionData,
  scoreDistributionData,
  topCandidatesData,
  candidateScoreComparisonData,
  timeSavedData,
  qualityImprovementData,
}: {
  openModal: (title: string, content: React.ReactNode, fullScreen?: boolean) => void
  isMobile: boolean
  metrics: any
  hiringMetricsData: any[]
  statusDistributionData: any[]
  skillDistributionData: any[]
  scoreDistributionData: any[]
  topCandidatesData: any[]
  candidateScoreComparisonData: any[]
  timeSavedData: any[]
  qualityImprovementData: any[]
}) {
  const fullHiringMetricsChart = (
    <div className="space-y-6">
      <p className="text-slate-300 text-sm sm:text-base">
        This dashboard shows the improvement in key hiring metrics after implementing AI-powered recruitment. Time to
        hire decreased by 83%, and quality of hire increased by 16%.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-slate-900/70 rounded-lg p-6 border border-slate-800/50 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
          <h3 className="text-white text-lg mb-4 font-medium flex items-center">
            <Clock className="w-5 h-5 mr-2 text-purple-400" /> Time to Hire Comparison
          </h3>
          <div className="relative group">
            <Chart
              data={timeSavedData}
              type="bar"
              xKey="name"
              yKeys={[{ key: "value", name: "Days", color: "#8884d8" }]}
              height={300}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>
          <div className="mt-4 text-center bg-slate-800/50 p-3 rounded-lg border border-slate-700/30">
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">
              -83%
            </div>
            <p className="text-slate-300 text-sm">Reduction in hiring time</p>
          </div>
        </div>

        <div className="bg-slate-900/70 rounded-lg p-6 border border-slate-800/50 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
          <h3 className="text-white text-lg mb-4 font-medium flex items-center">
            <TrendingUp className="w-5 h-5 mr-2 text-green-400" /> Quality of Hire Improvement
          </h3>
          <div className="relative group">
            <Chart
              data={qualityImprovementData}
              type="line"
              xKey="month"
              yKeys={[{ key: "quality", name: "Quality Score", color: "#82ca9d" }]}
              height={300}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>
          <div className="mt-4 text-center bg-slate-800/50 p-3 rounded-lg border border-slate-700/30">
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">
              +16%
            </div>
            <p className="text-slate-300 text-sm">Improvement in hire quality</p>
          </div>
        </div>
      </div>

      <div className="bg-slate-900/70 rounded-lg p-6 border border-slate-800/50 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
        <h3 className="text-white text-lg mb-4 font-medium flex items-center">
          <Users className="w-5 h-5 mr-2 text-blue-400" /> Top 3 Shortlisted Candidates
        </h3>
        <div className="relative group">
          <Chart
            data={candidateScoreComparisonData.slice(0, 3)}
            type="bar"
            xKey="name"
            yKeys={[
              { key: "AI Match", name: "AI Match", color: "#0088fe" },
              { key: "Resume Score", name: "Resume Score", color: "#8884d8" },
              { key: "LinkedIn Score", name: "LinkedIn Score", color: "#82ca9d" },
              { key: "Creativity", name: "Creativity", color: "#ffc658" },
              { key: "Technical Skills", name: "Technical Skills", color: "#ff8042" },
            ]}
            height={400}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-4">
          {candidateScoreComparisonData.slice(0, 3).map((candidate, index) => (
            <div
              key={index}
              className="bg-slate-800/70 p-4 rounded-lg border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-lg font-bold">
                  {candidate.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white text-sm font-medium">{candidate.name}</h4>
                  <div className="flex items-center mt-1">
                    <span className="px-1.5 py-0.5 text-[10px] rounded-full bg-green-900/30 text-green-400">
                      {index === 0 ? "Top Match" : index === 1 ? "2nd Place" : "3rd Place"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-slate-400 text-xs">AI Match</span>
                    <span className="text-green-400 text-xs font-bold">{candidate["AI Match"].toFixed(1)}/10</span>
                  </div>
                  <div className="w-full bg-slate-700/30 rounded-full h-1.5">
                    <div
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-1.5 rounded-full"
                      style={{ width: `${candidate["AI Match"] * 10}%` }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-slate-400 text-xs">Resume</span>
                    <span className="text-blue-400 text-xs">{candidate["Resume Score"].toFixed(1)}/10</span>
                  </div>
                  <div className="w-full bg-slate-700/30 rounded-full h-1.5">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-cyan-500 h-1.5 rounded-full"
                      style={{ width: `${candidate["Resume Score"] * 10}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-slate-900/70 rounded-lg p-6 border border-slate-800/50 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
          <h3 className="text-white text-lg mb-4 font-medium flex items-center">
            <PieChart className="w-5 h-5 mr-2 text-pink-400" /> Candidate Status Distribution
          </h3>
          <div className="relative group">
            <Chart
              data={statusDistributionData}
              type="pie"
              xKey="name"
              yKeys={[{ key: "value", name: "Count", color: "#82ca9d" }]}
              height={300}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2">
            {statusDistributionData.map((item, index) => (
              <div key={index} className="bg-slate-800/50 p-2 rounded-lg text-center">
                <div
                  className="text-sm font-medium"
                  style={{ color: index === 0 ? "#4ade80" : index === 1 ? "#60a5fa" : "#f87171" }}
                >
                  {item.value}
                </div>
                <div className="text-xs text-slate-400">{item.name}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-900/70 rounded-lg p-6 border border-slate-800/50 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
          <h3 className="text-white text-lg mb-4 font-medium flex items-center">
            <BarChart className="w-5 h-5 mr-2 text-amber-400" /> Top Skills Distribution
          </h3>
          <div className="relative group">
            <Chart
              data={skillDistributionData.slice(0, 5)}
              type="bar"
              xKey="name"
              yKeys={[{ key: "value", name: "Count", color: "#8884d8" }]}
              height={300}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>
        </div>
      </div>

      <div className="bg-slate-900/70 rounded-lg p-4 border border-slate-800/50 mt-6">
        <h4 className="text-white text-lg mb-4">Hiring Efficiency Metrics</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h5 className="text-slate-300 mb-2 text-sm">Application to Screening Ratio</h5>
            <div className="flex items-center gap-3">
              <div className="w-full bg-slate-700/30 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                  style={{ width: "100%" }}
                ></div>
              </div>
              <span className="text-white text-sm">100%</span>
            </div>
            <p className="text-xs text-slate-400 mt-1">All applications are screened by AI</p>
          </div>

          <div>
            <h5 className="text-slate-300 mb-2 text-sm">Shortlisting Accuracy</h5>
            <div className="flex items-center gap-3">
              <div className="w-full bg-slate-700/30 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                  style={{ width: `${((metrics.shortlistedCandidates / metrics.totalCandidates) * 100).toFixed(0)}%` }}
                ></div>
              </div>
              <span className="text-white text-sm">
                {((metrics.shortlistedCandidates / metrics.totalCandidates) * 100).toFixed(0)}%
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              {((metrics.shortlistedCandidates / metrics.totalCandidates) * 100).toFixed(0)}% of candidates were
              shortlisted
            </p>
          </div>

          <div>
            <h5 className="text-slate-300 mb-2 text-sm">Time in Screening Phase</h5>
            <div className="flex items-center gap-3">
              <div className="w-full bg-slate-700/30 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                  style={{ width: "83%" }}
                ></div>
              </div>
              <span className="text-white text-sm">-83%</span>
            </div>
            <p className="text-xs text-slate-400 mt-1">83% reduction in screening time</p>
          </div>

          <div>
            <h5 className="text-slate-300 mb-2 text-sm">AI Match Accuracy</h5>
            <div className="flex items-center gap-3">
              <div className="w-full bg-slate-700/30 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                  style={{ width: "95%" }}
                ></div>
              </div>
              <span className="text-white text-sm">95%</span>
            </div>
            <p className="text-xs text-slate-400 mt-1">95% accuracy in candidate matching</p>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="space-y-4">
      <div className="bg-slate-800/80 rounded-lg p-3 sm:p-4 border border-slate-700/50">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-base sm:text-lg font-medium mb-1 text-white">Overall Hiring Performance</h3>
            <p className="text-slate-300 text-[10px] sm:text-xs mb-2">
              Visualized metrics from AI-powered hiring processes showing significant improvements.
            </p>
          </div>
          <button
            onClick={() => openModal("Detailed Hiring Performance", fullHiringMetricsChart, true)}
            className="p-1.5 rounded-lg bg-slate-700/50 hover:bg-slate-700 transition-colors text-slate-300 hover:text-white"
          >
            <Maximize2 size={16} />
          </button>
        </div>

        <div className="grid grid-cols-4 gap-2 mb-4">
          <div className="bg-slate-900/70 rounded-lg p-2 flex flex-col items-center border border-slate-800/50">
            <div className="text-blue-400 mb-1">
              <Users className="w-4 h-4" />
            </div>
            <div className="text-center">
              <div className="text-slate-400 text-[10px]">Applicants</div>
              <div className="text-white text-sm font-bold">{metrics.totalCandidates}</div>
            </div>
          </div>

          <div className="bg-slate-900/70 rounded-lg p-2 flex flex-col items-center border border-slate-800/50">
            <div className="text-green-400 mb-1">
              <Award className="w-4 h-4" />
            </div>
            <div className="text-center">
              <div className="text-slate-400 text-[10px]">Shortlisted</div>
              <div className="text-white text-sm font-bold">{metrics.shortlistedCandidates}</div>
            </div>
          </div>

          <div className="bg-slate-900/70 rounded-lg p-2 flex flex-col items-center border border-slate-800/50">
            <div className="text-purple-400 mb-1">
              <Clock className="w-4 h-4" />
            </div>
            <div className="text-center">
              <div className="text-slate-400 text-[10px]">Time Saved</div>
              <div className="text-white text-sm font-bold">83%</div>
            </div>
          </div>

          <div className="bg-slate-900/70 rounded-lg p-2 flex flex-col items-center border border-slate-800/50">
            <div className="text-pink-400 mb-1">
              <Star className="w-4 h-4" />
            </div>
            <div className="text-center">
              <div className="text-slate-400 text-[10px]">Quality</div>
              <div className="text-white text-sm font-bold">{metrics.avgAiMatch.toFixed(1)}</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
          <div className="bg-slate-900/70 rounded-lg p-3 border border-slate-800/50 hover:border-purple-500/30 transition-all duration-300">
            <h4 className="text-sm font-medium text-white mb-2 flex items-center">
              <Clock className="w-4 h-4 mr-1 text-purple-400" /> Time to Hire Reduction
            </h4>
            <div className="relative">
              <Chart
                data={timeSavedData}
                type="bar"
                xKey="name"
                yKeys={[{ key: "value", name: "Days", color: "#8884d8" }]}
                height={isMobile ? 180 : 200}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
            <div className="mt-2 text-center bg-slate-800/50 p-2 rounded-lg">
              <div className="text-green-400 text-sm font-bold">83% Faster</div>
              <p className="text-slate-400 text-xs">From 42 to 7 days</p>
            </div>
          </div>

          <div className="bg-slate-900/70 rounded-lg p-3 border border-slate-800/50 hover:border-purple-500/30 transition-all duration-300">
            <h4 className="text-sm font-medium text-white mb-2 flex items-center">
              <TrendingUp className="w-4 h-4 mr-1 text-green-400" /> Quality of Hire Improvement
            </h4>
            <div className="relative">
              <Chart
                data={qualityImprovementData}
                type="line"
                xKey="month"
                yKeys={[{ key: "quality", name: "Quality", color: "#82ca9d" }]}
                height={isMobile ? 180 : 200}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
            <div className="mt-2 text-center bg-slate-800/50 p-2 rounded-lg">
              <div className="text-green-400 text-sm font-bold">16% Better</div>
              <p className="text-slate-400 text-xs">From 78% to 92% quality</p>
            </div>
          </div>
        </div>

        <div className="bg-slate-900/70 rounded-lg p-3 border border-slate-800/50 mb-4">
          <h4 className="text-sm font-medium text-white mb-2 flex items-center">
            <BarChart2 className="w-4 h-4 mr-1 text-blue-400" /> Top 3 Shortlisted Candidates
          </h4>
          <div className="overflow-x-auto -mx-3 px-3 pb-2 hide-scrollbar">
            <div className="min-w-[500px]">
              <Chart
                data={candidateScoreComparisonData.slice(0, 3)}
                type="bar"
                xKey="name"
                yKeys={[
                  { key: "AI Match", name: "AI Match", color: "#0088fe" },
                  { key: "Resume Score", name: "Resume", color: "#8884d8" },
                  { key: "LinkedIn Score", name: "LinkedIn", color: "#82ca9d" },
                ]}
                height={isMobile ? 180 : 220}
              />
            </div>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {candidateScoreComparisonData.slice(0, 3).map((candidate, index) => (
              <div key={index} className="bg-slate-800/70 p-2 rounded-lg border border-slate-700/50 text-center">
                <div className="w-8 h-8 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-xs font-bold mb-1">
                  {candidate.name.charAt(0)}
                </div>
                <div className="text-white text-xs font-medium truncate">{candidate.name}</div>
                <div className="text-green-400 text-xs font-bold">{candidate["AI Match"].toFixed(1)}/10</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-3">
          <div className="bg-slate-900/70 rounded-lg p-3 border border-slate-800/50">
            <h4 className="text-sm font-medium text-white mb-2 flex items-center">
              <PieChart className="w-4 h-4 mr-1 text-pink-400" /> Candidate Status
            </h4>
            <Chart
              data={statusDistributionData}
              type="pie"
              xKey="name"
              yKeys={[{ key: "value", name: "Count", color: "#82ca9d" }]}
              height={140}
            />
          </div>

          <div className="bg-slate-900/70 rounded-lg p-3 border border-slate-800/50">
            <h4 className="text-sm font-medium text-white mb-2 flex items-center">
              <BarChart className="w-4 h-4 mr-1 text-amber-400" /> Assessment Scores
            </h4>
            <Chart
              data={scoreDistributionData.slice(0, 3)}
              type="bar"
              xKey="name"
              yKeys={[{ key: "value", name: "Score", color: "#8884d8" }]}
              height={140}
            />
          </div>
        </div>

        <button
          onClick={() => openModal("Detailed Hiring Performance", fullHiringMetricsChart, true)}
          className="flex items-center text-blue-400 hover:text-blue-300 bg-transparent hover:bg-slate-800/80 border-none mt-2 text-xs"
        >
          View detailed analytics <ArrowRight className="ml-1 h-3 w-3" />
        </button>
      </div>
    </motion.div>
  )
}

function EvaluationTab({
  openModal,
  isMobile,
  candidateData,
  expandedCandidate,
  setExpandedCandidate,
  activeAnalysisTab,
  setActiveAnalysisTab,
  modalExpandedCandidate,
  setModalExpandedCandidate,
  modalActiveAnalysisTab,
  setModalActiveAnalysisTab,
}: {
  openModal: (title: string, content: React.ReactNode, fullScreen?: boolean) => void
  isMobile: boolean
  candidateData: any[]
  expandedCandidate: string | null
  setExpandedCandidate: (id: string | null) => void
  activeAnalysisTab: string
  setActiveAnalysisTab: (tab: string) => void
  modalExpandedCandidate: string | null
  setModalExpandedCandidate: (id: string | null) => void
  modalActiveAnalysisTab: string
  setModalActiveAnalysisTab: (tab: string) => void
}) {
  // Filter out Ravinder Singh as requested
  const filteredCandidateData = candidateData.filter((candidate) => candidate.name !== "Ravinder Singh")

  // Define columns for the data table based on CSV structure
  const columns = [
    { header: "Name", accessor: "name" },
    {
      header: "Resume",
      accessor: (row: any) => <span className={getScoreColor(row.resumeScore)}>{row.resumeScore.toFixed(1)}</span>,
      sortable: true,
    },
    {
      header: "LinkedIn",
      accessor: (row: any) => <span className={getScoreColor(row.linkedinScore)}>{row.linkedinScore.toFixed(1)}</span>,
      sortable: true,
    },
    { header: "Experience", accessor: "experience" },
    {
      header: "Creativity",
      accessor: (row: any) => (
        <span className={getScoreColor(row.creativityScore)}>{row.creativityScore.toFixed(1)}</span>
      ),
      sortable: true,
    },
    {
      header: "Technical",
      accessor: (row: any) => (
        <span className={getScoreColor(row.technicalSkills)}>{row.technicalSkills.toFixed(1)}</span>
      ),
      sortable: true,
    },
    {
      header: "Match",
      accessor: (row: any) => <span className={getScoreColor(row.aiMatch)}>{row.aiMatch.toFixed(1)}</span>,
      sortable: true,
    },
    {
      header: "Status",
      accessor: (row: any) => (
        <span className={`px-2 py-1 rounded-full text-xs bg-${row.statusColor}-900/60 text-${row.statusColor}-300`}>
          {row.status}
        </span>
      ),
    },
  ]

  // Mobile optimized columns - add creativity score
  const mobileColumns = [
    {
      header: "Name",
      accessor: "name",
      className: "max-w-[120px] truncate",
    },
    {
      header: "Match",
      accessor: (row: any) => <span className={getScoreColor(row.aiMatch)}>{row.aiMatch.toFixed(1)}</span>,
      sortable: true,
      className: "w-16 text-center",
    },
    {
      header: "Status",
      accessor: (row: any) => (
        <span
          className={`px-1 py-0.5 rounded-full text-[10px] bg-${row.statusColor}-900/60 text-${row.statusColor}-300 whitespace-nowrap`}
        >
          {row.status}
        </span>
      ),
      className: "w-20 text-center",
    },
  ]

  function getScoreColor(score: number) {
    if (score >= 9) return "text-green-400 font-bold"
    if (score >= 8) return "text-green-400"
    if (score >= 7) return "text-yellow-400"
    return "text-red-400"
  }

  const handleCandidateClick = (candidate: any) => {
    if (expandedCandidate === candidate.id) {
      setExpandedCandidate(null)
    } else {
      setExpandedCandidate(candidate.id)
    }
  }

  const renderCandidateDetails = (candidate: any, isModal = false) => {
    const currentActiveTab = isModal ? modalActiveAnalysisTab : activeAnalysisTab
    const setCurrentActiveTab = isModal ? setModalActiveAnalysisTab : setActiveAnalysisTab

    return (
      <div className="bg-slate-900/80 rounded-lg p-4 border border-slate-800/50 mt-2">
        <div className="flex flex-col space-y-2">
          {/* Tab navigation */}
          <div className="flex space-x-2 mb-4">
            <button
              onClick={() => setCurrentActiveTab("resume")}
              className={`px-3 py-1.5 text-xs rounded-md ${
                currentActiveTab === "resume"
                  ? "bg-purple-500 text-white"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`}
            >
              Resume Analysis
            </button>
            <button
              onClick={() => setCurrentActiveTab("linkedin")}
              className={`px-3 py-1.5 text-xs rounded-md ${
                currentActiveTab === "linkedin"
                  ? "bg-purple-500 text-white"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`}
            >
              LinkedIn Analysis
            </button>
            <button
              onClick={() => setCurrentActiveTab("profile")}
              className={`px-3 py-1.5 text-xs rounded-md ${
                currentActiveTab === "profile"
                  ? "bg-purple-500 text-white"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`}
            >
              Profile Details
            </button>
          </div>

          {/* Content based on active tab */}
          {currentActiveTab === "resume" && (
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                  {candidate.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-white font-medium">{candidate.name}</h3>
                  <p className="text-slate-400 text-sm">{candidate.position}</p>
                  <div className="flex items-center mt-1">
                    <span className="text-slate-300 text-xs mr-2">Resume Score:</span>
                    <span className={`${getScoreColor(candidate.resumeScore)} text-sm font-medium`}>
                      {candidate.resumeScore.toFixed(1)}/10
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-white text-sm font-medium mb-2 flex items-center">
                    <Briefcase className="w-4 h-4 mr-1 text-purple-400" /> Professional Experience
                  </h4>
                  <p className="text-slate-300 text-xs">
                    Solid foundation in social media management. Demonstrated campaign success.
                  </p>
                </div>
                <div>
                  <h4 className="text-white text-sm font-medium mb-2 flex items-center">
                    <Zap className="w-4 h-4 mr-1 text-blue-400" /> Technical Skills
                  </h4>
                  <p className="text-slate-300 text-xs">
                    Strong digital marketing capabilities. Proficient in analytics tools.
                  </p>
                </div>
                <div>
                  <h4 className="text-white text-sm font-medium mb-2 flex items-center">
                    <Target className="w-4 h-4 mr-1 text-green-400" /> Campaign Success
                  </h4>
                  <p className="text-slate-300 text-xs">
                    Consistent performance improvements. Effective strategy implementation.
                  </p>
                </div>
                <div>
                  <h4 className="text-white text-sm font-medium mb-2 flex items-center">
                    <TrendingUp className="w-4 h-4 mr-1 text-pink-400" /> Content Strategy
                  </h4>
                  <p className="text-slate-300 text-xs">Creative content development. Strong audience engagement.</p>
                </div>
              </div>

              <div className="flex justify-between items-center mt-2">
                <a
                  href={candidate.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 flex items-center text-xs"
                >
                  View Full Resume <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </div>
            </div>
          )}

          {currentActiveTab === "linkedin" && (
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-medium">{candidate.name}</h3>
                  <p className="text-slate-400 text-sm">{candidate.position}</p>
                  <div className="flex items-center mt-1">
                    <span className="text-slate-300 text-xs mr-2">LinkedIn Score:</span>
                    <span className={`${getScoreColor(candidate.linkedinScore)} text-sm font-medium`}>
                      {candidate.linkedinScore.toFixed(1)}/10
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <h4 className="text-white text-sm font-medium mb-2">Profile Strength</h4>
                  <div className="flex justify-between mb-1">
                    <span className="text-slate-300 text-xs">Profile Completeness</span>
                    <span className="text-green-400 text-xs">{(candidate.linkedinScore * 10).toFixed(0)}%</span>
                  </div>
                  <div className="w-full bg-slate-700/30 rounded-full h-1.5">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-cyan-500 h-1.5 rounded-full"
                      style={{ width: `${candidate.linkedinScore * 10}%` }}
                    ></div>
                  </div>
                </div>

                <div>
                  <h4 className="text-white text-sm font-medium mb-2">Key Insights</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-green-400 h-4 w-4 shrink-0 mt-0.5" />
                      <span className="text-slate-300 text-xs">Professional headline and photo present</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-green-400 h-4 w-4 shrink-0 mt-0.5" />
                      <span className="text-slate-300 text-xs">Experience details match resume information</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="text-amber-400 h-4 w-4 shrink-0 mt-0.5" />
                      <span className="text-slate-300 text-xs">Limited endorsements for key skills</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex justify-between items-center mt-2">
                <a
                  href={candidate.linkedinProfile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 flex items-center text-xs"
                >
                  View LinkedIn Profile <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </div>
            </div>
          )}

          {currentActiveTab === "profile" && (
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-medium">{candidate.name}</h3>
                  <p className="text-slate-400 text-sm">{candidate.position}</p>
                  <div className="flex items-center mt-1">
                    <span className="text-slate-300 text-xs mr-2">AI Match:</span>
                    <span className={`${getScoreColor(candidate.aiMatch)} text-sm font-medium`}>
                      {candidate.aiMatch.toFixed(1)}/10
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <h4 className="text-white text-xs font-medium mb-1">Location</h4>
                  <p className="text-slate-300 text-xs">{candidate.location}</p>
                </div>
                <div>
                  <h4 className="text-white text-xs font-medium mb-1">Experience</h4>
                  <p className="text-slate-300 text-xs">{candidate.experience}</p>
                </div>
                <div>
                  <h4 className="text-white text-xs font-medium mb-1">Availability</h4>
                  <p className="text-slate-300 text-xs">{candidate.availability}</p>
                </div>
                <div>
                  <h4 className="text-white text-xs font-medium mb-1">Contact Details</h4>
                  <div className="flex flex-col space-y-1">
                    {candidate.email && (
                      <div className="flex items-center text-slate-300 text-xs">
                        <Mail className="w-3 h-3 mr-1 text-blue-400" />
                        <span>{candidate.email}</span>
                      </div>
                    )}
                    {candidate.phone && (
                      <div className="flex items-center text-slate-300 text-xs">
                        <Phone className="w-3 h-3 mr-1 text-green-400" />
                        <span>{candidate.phone}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-white text-sm font-medium mb-2">Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {candidate.skills.map((skill: string, index: number) => (
                    <span key={index} className="px-2 py-1 bg-slate-800 rounded-full text-slate-300 text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-white text-sm font-medium mb-2 flex items-center">
                  <MessageSquare className="w-4 h-4 mr-1 text-purple-400" /> AI Recommendation
                </h4>
                <div
                  className={`p-2 rounded-lg bg-${candidate.statusColor}-900/20 border border-${candidate.statusColor}-900/30`}
                >
                  <p className="text-slate-300 text-xs">
                    {candidate.aiMatch >= 7.5
                      ? "Strong candidate with excellent skills match. Recommended for interview."
                      : candidate.aiMatch >= 6.5
                        ? "Good potential with relevant experience. Consider for further evaluation."
                        : "Not a strong match for this position. Consider for other roles."}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="space-y-4">
      <div className="bg-slate-800/80 rounded-lg p-3 sm:p-4 border border-slate-700/50">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-base sm:text-lg font-medium mb-1 text-white">AI-Driven Candidate Evaluation</h3>
            <p className="text-slate-300 text-[10px] sm:text-xs mb-2">
              Structured database showing AI-powered candidate assessments. Click on a candidate to view details.
            </p>
          </div>
        </div>

        <div className="space-y-3">
          {filteredCandidateData.slice(0, 5).map((candidate) => (
            <div key={candidate.id} className="w-full">
              <div
                className="bg-slate-900/70 rounded-lg p-3 border border-slate-800/50 cursor-pointer hover:border-purple-500/50 transition-colors"
                onClick={() => handleCandidateClick(candidate)}
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-lg font-bold">
                      {candidate.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-white font-medium text-sm">{candidate.name}</h3>
                      <p className="text-slate-400 text-xs">{candidate.position}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span
                      className={`px-2 py-1 rounded-full text-xs bg-${candidate.statusColor}-900/60 text-${candidate.statusColor}-300 mr-3`}
                    >
                      {candidate.status}
                    </span>
                    {expandedCandidate === candidate.id ? (
                      <ChevronUp className="w-4 h-4 text-slate-400" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400" />
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-6 gap-2 mt-3">
                  <div>
                    <div className="text-slate-400 text-[10px]">Resume</div>
                    <div className={`${getScoreColor(candidate.resumeScore)} text-sm font-medium`}>
                      {candidate.resumeScore.toFixed(1)}
                    </div>
                  </div>
                  <div>
                    <div className="text-slate-400 text-[10px]">LinkedIn</div>
                    <div className={`${getScoreColor(candidate.linkedinScore)} text-sm font-medium`}>
                      {candidate.linkedinScore.toFixed(1)}
                    </div>
                  </div>
                  <div>
                    <div className="text-slate-400 text-[10px]">Experience</div>
                    <div className="text-white text-sm">{candidate.experience}</div>
                  </div>
                  <div>
                    <div className="text-slate-400 text-[10px]">Creativity</div>
                    <div className={`${getScoreColor(candidate.creativityScore)} text-sm font-medium`}>
                      {candidate.creativityScore.toFixed(1)}
                    </div>
                  </div>
                  <div>
                    <div className="text-slate-400 text-[10px]">Technical</div>
                    <div className={`${getScoreColor(candidate.technicalSkills)} text-sm font-medium`}>
                      {candidate.technicalSkills.toFixed(1)}
                    </div>
                  </div>
                  <div>
                    <div className="text-slate-400 text-[10px]">Match</div>
                    <div className={`${getScoreColor(candidate.aiMatch)} text-sm font-medium`}>
                      {candidate.aiMatch.toFixed(1)}
                    </div>
                  </div>
                </div>
              </div>

              {expandedCandidate === candidate.id && renderCandidateDetails(candidate)}
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={() =>
              openModal(
                "All Candidates",
                <div className="space-y-4">
                  <p className="text-slate-300 text-sm">Click on a candidate to view their detailed profile.</p>
                  {filteredCandidateData.map((candidate) => (
                    <div key={candidate.id} className="w-full">
                      <div
                        className="bg-slate-900/70 rounded-lg p-3 border border-slate-800/50 cursor-pointer hover:border-purple-500/50 transition-colors"
                        onClick={() => {
                          setModalExpandedCandidate(modalExpandedCandidate === candidate.id ? null : candidate.id)
                        }}
                      >
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-lg font-bold">
                              {candidate.name.charAt(0)}
                            </div>
                            <div>
                              <h3 className="text-white font-medium text-sm">{candidate.name}</h3>
                              <p className="text-slate-400 text-xs">{candidate.position}</p>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <span
                              className={`px-2 py-1 rounded-full text-xs bg-${candidate.statusColor}-900/60 text-${candidate.statusColor}-300 mr-3`}
                            >
                              {candidate.status}
                            </span>
                            {modalExpandedCandidate === candidate.id ? (
                              <ChevronUp className="w-4 h-4 text-slate-400" />
                            ) : (
                              <ChevronDown className="w-4 h-4 text-slate-400" />
                            )}
                          </div>
                        </div>

                        <div className="grid grid-cols-6 gap-2 mt-3">
                          <div>
                            <div className="text-slate-400 text-[10px]">Resume</div>
                            <div className={`${getScoreColor(candidate.resumeScore)} text-sm font-medium`}>
                              {candidate.resumeScore.toFixed(1)}
                            </div>
                          </div>
                          <div>
                            <div className="text-slate-400 text-[10px]">LinkedIn</div>
                            <div className={`${getScoreColor(candidate.linkedinScore)} text-sm font-medium`}>
                              {candidate.linkedinScore.toFixed(1)}
                            </div>
                          </div>
                          <div>
                            <div className="text-slate-400 text-[10px]">Experience</div>
                            <div className="text-white text-sm">{candidate.experience}</div>
                          </div>
                          <div>
                            <div className="text-slate-400 text-[10px]">Creativity</div>
                            <div className={`${getScoreColor(candidate.creativityScore)} text-sm font-medium`}>
                              {candidate.creativityScore.toFixed(1)}
                            </div>
                          </div>
                          <div>
                            <div className="text-slate-400 text-[10px]">Technical</div>
                            <div className={`${getScoreColor(candidate.technicalSkills)} text-sm font-medium`}>
                              {candidate.technicalSkills.toFixed(1)}
                            </div>
                          </div>
                          <div>
                            <div className="text-slate-400 text-[10px]">Match</div>
                            <div className={`${getScoreColor(candidate.aiMatch)} text-sm font-medium`}>
                              {candidate.aiMatch.toFixed(1)}
                            </div>
                          </div>
                        </div>
                      </div>

                      {modalExpandedCandidate === candidate.id && renderCandidateDetails(candidate, true)}
                    </div>
                  ))}
                </div>,
                true,
              )
            }
            className="inline-flex items-center justify-center px-4 py-2 rounded-full border border-slate-700 bg-slate-800/50 text-white hover:bg-slate-800 transition-colors text-sm"
          >
            View All Candidates
          </button>
        </div>
      </div>
    </motion.div>
  )
}

function ShortlistedTab({
  openModal,
  isMobile,
  candidateData,
  topCandidates,
}: {
  openModal: (title: string, content: React.ReactNode, fullScreen?: boolean) => void
  isMobile: boolean
  candidateData: any[]
  topCandidates: string[]
}) {
  // Filter shortlisted candidates and sort by AI match score
  const shortlistedCandidates = candidateData
    .filter((candidate) => candidate.status === "Shortlisted" && candidate.name !== "Ravinder Singh")
    .sort((a, b) => b.aiMatch - a.aiMatch)
    // Only show top 3 candidates
    .slice(0, 3)

  const [selectedCandidate, setSelectedCandidate] = useState(shortlistedCandidates[0] || null)
  const [activeTab, setActiveTab] = useState("overview")

  const candidateDetailedView = (candidate: any) => (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row items-center gap-4 mb-4 sm:mb-6">
        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl sm:text-3xl font-bold">
          {candidate.name.charAt(0)}
        </div>
        <div className="text-center sm:text-left">
          <h3 className="text-xl sm:text-2xl font-medium text-white">{candidate.name}</h3>
          <p className="text-slate-400 text-sm sm:text-base">{candidate.position}</p>
          <div className="flex items-center justify-center sm:justify-start gap-2 mt-2">
            <span className="px-2 py-1 rounded-full text-xs bg-green-900/60 text-green-300">Top Candidate</span>
            <span className="px-2 py-1 rounded-full text-xs bg-purple-900/60 text-purple-300">AI Recommended</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <div className="space-y-4">
          <div className="bg-slate-800/70 rounded-lg p-4 border border-slate-700/50">
            <h4 className="text-white font-medium mb-3">AI Match Score</h4>
            <div className="flex items-center gap-3 mb-3">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                {candidate.aiMatch.toFixed(1)}/10
              </div>
              <div className="text-green-400 text-sm px-2 py-1 rounded bg-green-900/30">Top 5%</div>
            </div>
            <p className="text-slate-300 text-sm">
              This candidate is an exceptional match for the Social Media Content Creator position, with strong creative
              skills and relevant experience.
            </p>
          </div>

          <div className="bg-slate-800/70 rounded-lg p-4 border border-slate-700/50">
            <h4 className="text-white font-medium mb-3">Skills Assessment</h4>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-slate-300 text-sm">Content Creation</span>
                  <span className="text-green-400 text-sm">{candidate.creativityScore.toFixed(1)}/10</span>
                </div>
                <div className="w-full bg-slate-700/30 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                    style={{ width: `${candidate.creativityScore * 10}%` }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-slate-300 text-sm">Social Media Management</span>
                  <span className="text-green-400 text-sm">{candidate.technicalSkills.toFixed(1)}/10</span>
                </div>
                <div className="w-full bg-slate-700/30 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                    style={{ width: `${candidate.technicalSkills * 10}%` }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-slate-300 text-sm">Communication</span>
                  <span className="text-green-400 text-sm">{candidate.communicationSkills.toFixed(1)}/10</span>
                </div>
                <div className="w-full bg-slate-700/30 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                    style={{ width: `${candidate.communicationSkills * 10}%` }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-slate-300 text-sm">Analytics</span>
                  <span className="text-yellow-400 text-sm">{candidate.analyticalSkills.toFixed(1)}/10</span>
                </div>
                <div className="w-full bg-slate-700/30 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                    style={{ width: `${candidate.analyticalSkills * 10}%` }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-slate-300 text-sm">Cultural Fit</span>
                  <span className="text-green-400 text-sm">
                    {typeof candidate.cultureFit === "number" ? candidate.cultureFit.toFixed(1) : candidate.cultureFit}
                    /10
                  </span>
                </div>
                <div className="w-full bg-slate-700/30 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                    style={{
                      width: `${typeof candidate.cultureFit === "number" ? candidate.cultureFit * 10 : Number.parseFloat(candidate.cultureFit) * 10}%`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/70 rounded-lg p-4 border border-slate-700/50">
            <h4 className="text-white font-medium mb-3">Resume Highlights</h4>
            <div className="space-y-3">
              <div className="bg-slate-900/70 p-3 rounded-lg border border-slate-800/50">
                <h5 className="text-white text-sm font-medium mb-2">Experience</h5>
                <ul className="text-slate-300 text-sm space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-purple-500 mt-2"></div>
                    <span>Over {candidate.experience} of content creation experience</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-purple-500 mt-2"></div>
                    <span>Led social media campaigns for multiple brands</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-purple-500 mt-2"></div>
                    <span>Increased engagement by 45% in previous role</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-900/70 p-3 rounded-lg border border-slate-800/50">
                <h5 className="text-white text-sm font-medium mb-2">Education</h5>
                <p className="text-slate-300 text-sm">{candidate.education}</p>
              </div>

              <div className="bg-slate-900/70 p-3 rounded-lg border border-slate-800/50">
                <h5 className="text-white text-sm font-medium mb-2">Key Skills</h5>
                <div className="flex flex-wrap gap-2">
                  {candidate.skills.map((skill: string, index: number) => (
                    <span key={index} className="px-2 py-1 bg-slate-800 rounded-full text-slate-300 text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-4 flex justify-between items-center">
              <span className="text-slate-300 text-sm">Resume Link:</span>
              <a
                href={candidate.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 flex items-center text-sm"
              >
                View Resume <ExternalLink className="ml-1 h-3 w-3" />
              </a>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-slate-800/70 rounded-lg p-4 border border-slate-700/50">
            <h4 className="text-white font-medium mb-3">Interview Analysis</h4>
            <div className="mb-3">
              <div className="flex justify-between mb-1">
                <span className="text-slate-300 text-sm">Overall Score</span>
                <span className="text-green-400 text-sm">{candidate.interviewScore.toFixed(1)}/10</span>
              </div>
              <div className="w-full bg-slate-700/30 rounded-full h-2 mb-3">
                <div
                  className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                  style={{ width: `${candidate.interviewScore * 10}%` }}
                ></div>
              </div>
            </div>

            <div className="bg-slate-900/70 p-4 rounded text-sm text-slate-300 border border-slate-800/50 mb-4">
              "Excellent understanding of social media trends, confident answers to technical questions, and clear
              communication skills. Demonstrated creativity with practical examples from previous work."
            </div>

            <h5 className="text-white font-medium mt-4 mb-2">Interview Recording</h5>
            <AudioPlayer src={candidate.audioUrl} />

            <h5 className="text-white font-medium mt-4 mb-2">Interview Transcript</h5>
            <div className="bg-slate-900/70 p-4 rounded text-sm text-slate-300 border border-slate-800/50 max-h-60 overflow-y-auto">
              <p className="leading-relaxed">
                "I've been working with social media content creation for about {candidate.experience}. My experience
                spans from small business accounts to large corporate campaigns. What sets me apart is my approach to
                audience engagement - I believe in creating content that not only looks good but drives meaningful
                interactions. For example, in my last role, I developed a content strategy that increased engagement by
                45% in just three months.
                <br />
                <br />
                I'm particularly interested in this role because of your focus on innovative solutions, which I'm
                passionate about. I believe there's a great opportunity to tell compelling stories about how your
                products are making a difference in people's lives and for the environment.
                <br />
                <br />
                When it comes to content challenges, I've faced several situations where we needed to explain complex
                technical concepts in an engaging way. One that stands out was a campaign for a technical product where
                we used short-form video content with simple animations to break down the benefits, which later became
                one of our most successful content series.
                <br />
                <br />I believe my combination of creative skills and strategic thinking would be valuable for your
                team, especially as you expand your social media presence to reach new audiences."
              </p>
            </div>
          </div>

          <div className="bg-slate-800/70 rounded-lg p-4 border border-slate-700/50">
            <h4 className="text-white font-medium mb-3">LinkedIn Profile Analysis</h4>
            <div className="bg-slate-900/70 p-4 rounded text-sm text-slate-300 border border-slate-800/50 mb-4">
              <div className="flex items-start gap-3 mb-3">
                <User className="text-blue-400 h-5 w-5 shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-white text-sm font-medium">Profile Completeness</h5>
                  <p className="text-xs text-slate-400 mt-1">
                    Well-structured profile with comprehensive work history and skills section.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 mb-3">
                <Award className="text-blue-400 h-5 w-5 shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-white text-sm font-medium">Endorsements & Recommendations</h5>
                  <p className="text-xs text-slate-400 mt-1">
                    Strong endorsements for key skills relevant to the role.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Briefcase className="text-blue-400 h-5 w-5 shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-white text-sm font-medium">Activity & Engagement</h5>
                  <p className="text-xs text-slate-400 mt-1">
                    Regular posting of relevant content and industry engagement.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 flex justify-between items-center">
              <span className="text-slate-300 text-sm">LinkedIn Profile:</span>
              <a
                href={candidate.linkedinProfile}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 flex items-center text-sm"
              >
                View Profile <ExternalLink className="ml-1 h-3 w-3" />
              </a>
            </div>
          </div>

          <div className="bg-slate-800/70 rounded-lg p-4 border border-slate-700/50">
            <h4 className="text-white font-medium mb-3">Contact Information</h4>
            <div className="space-y-3">
              {candidate.email && (
                <div className="flex items-center gap-2">
                  <Mail className="text-blue-400 h-5 w-5 shrink-0" />
                  <div>
                    <h5 className="text-white text-sm font-medium">Email</h5>
                    <p className="text-slate-300 text-sm">{candidate.email}</p>
                  </div>
                </div>
              )}

              {candidate.phone && (
                <div className="flex items-center gap-2">
                  <Phone className="text-green-400 h-5 w-5 shrink-0" />
                  <div>
                    <h5 className="text-white text-sm font-medium">Phone</h5>
                    <p className="text-slate-300 text-sm">{candidate.phone}</p>
                  </div>
                </div>
              )}

              <div className="flex items-center gap-2">
                <Briefcase className="text-purple-400 h-5 w-5 shrink-0" />
                <div>
                  <h5 className="text-white text-sm font-medium">Availability</h5>
                  <p className="text-slate-300 text-sm">{candidate.availability}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/70 rounded-lg p-4 border border-slate-700/50">
            <h4 className="text-white font-medium mb-3">AI Recommendation</h4>
            <div className="p-4 bg-green-900/20 border border-green-900/30 rounded-lg mb-4">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="text-green-400 h-5 w-5" />
                <span className="text-green-400 font-medium">Highly Recommended for Hire</span>
              </div>
              <p className="text-slate-300 text-sm">
                Based on comprehensive analysis of resume, LinkedIn profile, and interview performance, this candidate
                is an exceptional match for the Social Media Content Creator position with a{" "}
                {candidate.aiMatch.toFixed(1)}/10 compatibility score.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <CheckCircle className="text-green-400 h-5 w-5 shrink-0 mt-0.5" />
                <span className="text-slate-300 text-sm">
                  Content creation expertise aligns perfectly with role requirements
                </span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="text-green-400 h-5 w-5 shrink-0 mt-0.5" />
                <span className="text-slate-300 text-sm">Demonstrated creativity and strategic thinking</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="text-green-400 h-5 w-5 shrink-0 mt-0.5" />
                <span className="text-slate-300 text-sm">Strong communication skills with practical examples</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="text-green-400 h-5 w-5 shrink-0 mt-0.5" />
                <span className="text-slate-300 text-sm">Cultural values align with company's mission</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  if (!selectedCandidate) {
    return (
      <div className="bg-slate-800/80 rounded-lg p-4 sm:p-6 border border-slate-700/50">
        <p className="text-center text-slate-300">No shortlisted candidates available.</p>
      </div>
    )
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="space-y-4">
      <div className="bg-slate-800/80 rounded-lg p-3 sm:p-4 border border-slate-700/50">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-base sm:text-lg font-medium mb-1 text-white">Top 3 Shortlisted Candidates</h3>
            <p className="text-slate-300 text-[10px] sm:text-xs mb-2">
              Detailed profile breakdown of top candidates selected by our AI.
            </p>
          </div>
          <button
            onClick={() => openModal("Candidate Profile", candidateDetailedView(selectedCandidate), true)}
            className="p-1.5 rounded-lg bg-slate-700/50 hover:bg-slate-700 transition-colors text-slate-300 hover:text-white"
          >
            <Maximize2 size={16} />
          </button>
        </div>

        {/* Candidate Cards - Improved Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {shortlistedCandidates.map((candidate, index) => (
            <div
              key={candidate.id}
              className={`bg-slate-900/70 rounded-lg p-4 border transition-all cursor-pointer hover:shadow-lg ${
                selectedCandidate.id === candidate.id
                  ? "border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.15)]"
                  : "border-slate-800/50 hover:border-slate-700"
              }`}
              onClick={() => setSelectedCandidate(candidate)}
            >
              <div className="flex flex-col items-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-xl font-bold mb-2">
                  {candidate.name.charAt(0)}
                </div>
                <h3 className="text-white font-medium text-center">{candidate.name}</h3>
                <div className="flex items-center mt-1">
                  <span className="px-2 py-0.5 rounded-full text-xs bg-green-900/30 text-green-400">
                    {index === 0 ? "Top Match" : index === 1 ? "2nd Place" : "3rd Place"}
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-slate-400 text-xs">AI Match Score</span>
                    <span className="text-green-400 text-sm font-bold">{candidate.aiMatch.toFixed(1)}/10</span>
                  </div>
                  <div className="w-full bg-slate-700/30 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                      style={{ width: `${candidate.aiMatch * 10}%` }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-slate-400 text-xs">Creativity</span>
                    <span className="text-green-400 text-sm">{candidate.creativityScore.toFixed(1)}/10</span>
                  </div>
                  <div className="w-full bg-slate-700/30 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                      style={{ width: `${candidate.creativityScore * 10}%` }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-slate-400 text-xs">Technical Skills</span>
                    <span className="text-green-400 text-sm">{candidate.technicalSkills.toFixed(1)}/10</span>
                  </div>
                  <div className="w-full bg-slate-700/30 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                      style={{ width: `${candidate.technicalSkills * 10}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between mt-4">
                <a
                  href={candidate.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-2 py-1 rounded-md bg-slate-800 border border-slate-700 text-blue-400 hover:bg-slate-700 transition-colors text-xs"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FileText className="w-3 h-3 mr-1" /> Resume
                </a>
                <a
                  href={candidate.linkedinProfile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-2 py-1 rounded-md bg-slate-800 border border-slate-700 text-blue-400 hover:bg-slate-700 transition-colors text-xs"
                  onClick={(e) => e.stopPropagation()}
                >
                  <User className="w-3 h-3 mr-1" /> LinkedIn
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Selected Candidate Details */}
        <div className="bg-slate-900/80 rounded-lg p-4 border border-slate-800/50">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
              {selectedCandidate.name.charAt(0)}
            </div>
            <div>
              <h3 className="text-white font-medium">{selectedCandidate.name}</h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-slate-300 text-xs">AI Match:</span>
                <span className="text-green-400 text-sm font-bold">{selectedCandidate.aiMatch.toFixed(1)}/10</span>
              </div>
            </div>
          </div>

          {/* Tabs for candidate details */}
          <div className="flex space-x-2 mb-4 overflow-x-auto hide-scrollbar">
            <button
              onClick={() => setActiveTab("overview")}
              className={`px-3 py-1.5 text-xs rounded-md whitespace-nowrap ${
                activeTab === "overview" ? "bg-purple-500 text-white" : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab("skills")}
              className={`px-3 py-1.5 text-xs rounded-md whitespace-nowrap ${
                activeTab === "skills" ? "bg-purple-500 text-white" : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`}
            >
              Skills Assessment
            </button>
            <button
              onClick={() => setActiveTab("interview")}
              className={`px-3 py-1.5 text-xs rounded-md whitespace-nowrap ${
                activeTab === "interview"
                  ? "bg-purple-500 text-white"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`}
            >
              Interview Analysis
            </button>
            <button
              onClick={() => setActiveTab("recommendation")}
              className={`px-3 py-1.5 text-xs rounded-md whitespace-nowrap ${
                activeTab === "recommendation"
                  ? "bg-purple-500 text-white"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`}
            >
              AI Recommendation
            </button>
          </div>

          {/* Tab content */}
          <div className="mt-4">
            {activeTab === "overview" && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-800/70 p-3 rounded-lg border border-slate-700/50">
                    <h4 className="text-white text-sm font-medium mb-2 flex items-center">
                      <Briefcase className="w-4 h-4 mr-1 text-purple-400" /> Professional Experience
                    </h4>
                    <p className="text-slate-300 text-xs">
                      {selectedCandidate.experience} of progressive experience in social media content creation and
                      management.
                    </p>
                  </div>
                  <div className="bg-slate-800/70 p-3 rounded-lg border border-slate-700/50">
                    <h4 className="text-white text-sm font-medium mb-2 flex items-center">
                      <Award className="w-4 h-4 mr-1 text-blue-400" /> Education
                    </h4>
                    <p className="text-slate-300 text-xs">{selectedCandidate.education}</p>
                  </div>
                </div>

                <div className="bg-slate-800/70 p-3 rounded-lg border border-slate-700/50">
                  <h4 className="text-white text-sm font-medium mb-2">Key Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCandidate.skills.map((skill: string, index: number) => (
                      <span key={index} className="px-2 py-1 bg-slate-900/70 rounded-full text-slate-300 text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-800/70 p-3 rounded-lg border border-slate-700/50">
                  <h4 className="text-white text-sm font-medium mb-2 flex items-center">
                    <Mail className="w-4 h-4 mr-1 text-blue-400" /> Contact Information
                  </h4>
                  <div className="space-y-2">
                    {selectedCandidate.email && (
                      <div className="flex items-center gap-2">
                        <Mail className="text-blue-400 h-4 w-4 shrink-0" />
                        <span className="text-slate-300 text-xs">{selectedCandidate.email}</span>
                      </div>
                    )}
                    {selectedCandidate.phone && (
                      <div className="flex items-center gap-2">
                        <Phone className="text-green-400 h-4 w-4 shrink-0" />
                        <span className="text-slate-300 text-xs">{selectedCandidate.phone}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex justify-center mt-2">
                  <button
                    onClick={() => openModal("Candidate Profile", candidateDetailedView(selectedCandidate), true)}
                    className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90 transition-opacity text-xs"
                  >
                    View Full Profile
                  </button>
                </div>
              </div>
            )}

            {activeTab === "skills" && (
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-slate-300 text-sm">Content Creation</span>
                    <span className="text-green-400 text-sm">{selectedCandidate.creativityScore.toFixed(1)}/10</span>
                  </div>
                  <div className="w-full bg-slate-700/30 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                      style={{ width: `${selectedCandidate.creativityScore * 10}%` }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-slate-300 text-sm">Social Media Management</span>
                    <span className="text-green-400 text-sm">{selectedCandidate.technicalSkills.toFixed(1)}/10</span>
                  </div>
                  <div className="w-full bg-slate-700/30 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                      style={{ width: `${selectedCandidate.technicalSkills * 10}%` }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-slate-300 text-sm">Communication</span>
                    <span className="text-green-400 text-sm">
                      {selectedCandidate.communicationSkills.toFixed(1)}/10
                    </span>
                  </div>
                  <div className="w-full bg-slate-700/30 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                      style={{ width: `${selectedCandidate.communicationSkills * 10}%` }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-slate-300 text-sm">Analytics</span>
                    <span className="text-yellow-400 text-sm">{selectedCandidate.analyticalSkills.toFixed(1)}/10</span>
                  </div>
                  <div className="w-full bg-slate-700/30 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                      style={{ width: `${selectedCandidate.analyticalSkills * 10}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "interview" && (
              <div className="space-y-4">
                <div className="mb-3">
                  <div className="flex justify-between mb-1">
                    <span className="text-slate-300 text-sm">Interview Score</span>
                    <span className="text-green-400 text-sm">{selectedCandidate.interviewScore.toFixed(1)}/10</span>
                  </div>
                  <div className="w-full bg-slate-700/30 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                      style={{ width: `${selectedCandidate.interviewScore * 10}%` }}
                    ></div>
                  </div>
                </div>

                <div className="bg-slate-900/70 p-3 rounded-lg border border-slate-800/50">
                  <h5 className="text-white text-sm font-medium mb-2">Key Insights</h5>
                  <p className="text-slate-300 text-xs">
                    "Excellent understanding of social media trends, confident answers to technical questions, and clear
                    communication skills. Demonstrated creativity with practical examples from previous work."
                  </p>
                </div>

                <AudioPlayer src={selectedCandidate.audioUrl} />
              </div>
            )}

            {activeTab === "recommendation" && (
              <div className="space-y-4">
                <div className="p-3 bg-green-900/20 border border-green-900/30 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="text-green-400 h-5 w-5" />
                    <span className="text-green-400 font-medium">Highly Recommended for Hire</span>
                  </div>
                  <p className="text-slate-300 text-xs">
                    Based on comprehensive analysis of resume, LinkedIn profile, and interview performance, this
                    candidate is an exceptional match for the Social Media Content Creator position with a{" "}
                    {selectedCandidate.aiMatch.toFixed(1)}/10 compatibility score.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="text-green-400 h-4 w-4 shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-xs">
                      Content creation expertise aligns perfectly with role requirements
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="text-green-400 h-4 w-4 shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-xs">Demonstrated creativity and strategic thinking</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="text-green-400 h-4 w-4 shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-xs">Strong communication skills with practical examples</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

