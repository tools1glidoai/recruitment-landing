"use client"
import { Timeline } from "@/components/ui/timeline"
import { FileText, Award, PhoneCall, BarChart3, CheckCircle, CheckSquare } from "lucide-react"
import { motion } from "framer-motion"
import { SectionHeading } from "./section-heading"
import { useMediaQuery } from "@/hooks/use-media-query"

export function HiringProcessTimeline() {
  const isMobile = useMediaQuery("(max-width: 768px)")

  const data = [
    {
      title: "Share Your Recruitment Requirements",
      icon: <FileText className="w-6 h-6" />,
      content: (
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-3 sm:p-6 border border-slate-700/50 mb-4">
          <p className="text-slate-300 text-xs sm:text-sm md:text-base font-normal mb-3">
            Simply provide your job requirements and let our AI take over. No micromanagement needed—just share your
            criteria and watch our system work.
          </p>
          <div className="space-y-1.5 mb-3">
            <div className="flex gap-2 items-start text-slate-300 text-xs">
              <CheckCircle className="w-3.5 h-3.5 text-green-400 flex-shrink-0 mt-0.5" />
              <span>Simple form to capture all essential job requirements</span>
            </div>
            <div className="flex gap-2 items-start text-slate-300 text-xs">
              <CheckCircle className="w-3.5 h-3.5 text-green-400 flex-shrink-0 mt-0.5" />
              <span>AI analyzes and optimizes your requirements for best results</span>
            </div>
            <div className="flex gap-2 items-start text-slate-300 text-xs">
              <CheckCircle className="w-3.5 h-3.5 text-green-400 flex-shrink-0 mt-0.5" />
              <span>Hands-off process after initial setup</span>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-slate-900/70 rounded-lg p-3 border border-slate-800/50"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="p-1.5 rounded-full bg-purple-900/50 text-purple-400">
                <FileText className="w-4 h-4" />
              </div>
              <h4 className="text-white text-xs sm:text-sm font-medium">Job Requirement Form</h4>
            </div>
            <div className="space-y-2">
              <div className="relative">
                <label className="text-slate-400 text-[10px] mb-0.5 block">Job Title</label>
                <div className="bg-slate-800/70 p-1.5 rounded border border-slate-700/50 text-white text-[10px] sm:text-xs">
                  Social Media Content Creator
                </div>
              </div>
              <div className="relative">
                <label className="text-slate-400 text-[10px] mb-0.5 block">Department</label>
                <div className="bg-slate-800/70 p-1.5 rounded border border-slate-700/50 text-white text-[10px] sm:text-xs">
                  Marketing
                </div>
              </div>
              <div className="relative">
                <label className="text-slate-400 text-[10px] mb-0.5 block">Required Skills</label>
                <div className="flex flex-wrap gap-1 mb-0.5">
                  <span className="px-1.5 py-0.5 bg-purple-900/30 text-purple-400 rounded-full text-[8px]">
                    Content Creation
                  </span>
                  <span className="px-1.5 py-0.5 bg-purple-900/30 text-purple-400 rounded-full text-[8px]">
                    Social Media
                  </span>
                  <span className="px-1.5 py-0.5 bg-purple-900/30 text-purple-400 rounded-full text-[8px]">
                    Graphic Design
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-2">
                <button className="px-2 py-1 rounded bg-slate-800/70 text-slate-300 text-[10px] border border-slate-700/50">
                  Save Draft
                </button>
                <button className="px-2 py-1 rounded bg-gradient-to-r from-purple-500 to-pink-500 text-white text-[10px]">
                  Submit Requirements
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      ),
    },
    {
      title: "AI-Powered Resume & LinkedIn Analysis",
      icon: <FileText className="w-6 h-6" />,
      content: (
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-3 sm:p-6 border border-slate-700/50 mb-4">
          <p className="text-slate-300 text-xs sm:text-sm md:text-base font-normal mb-3">
            Our AI instantly extracts and analyzes data from resumes and LinkedIn profiles, identifying relevant skills
            and experience with 93% accuracy.
          </p>
          <div className="space-y-1.5 mb-3">
            <div className="flex gap-2 items-start text-slate-300 text-xs">
              <CheckCircle className="w-3.5 h-3.5 text-green-400 flex-shrink-0 mt-0.5" />
              <span>Automated data extraction saves hours of manual review</span>
            </div>
            <div className="flex gap-2 items-start text-slate-300 text-xs">
              <CheckCircle className="w-3.5 h-3.5 text-green-400 flex-shrink-0 mt-0.5" />
              <span>Identifies relevant skills and experience based on job requirements</span>
            </div>
            <div className="flex gap-2 items-start text-slate-300 text-xs">
              <CheckCircle className="w-3.5 h-3.5 text-green-400 flex-shrink-0 mt-0.5" />
              <span>Analyzes career progression and job stability</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-slate-900/70 rounded-lg p-3 border border-slate-800/50 h-20 flex items-center justify-center"
            >
              <div className="text-center">
                <div className="text-purple-400 text-xl font-bold">85%</div>
                <div className="text-slate-400 text-[10px]">Faster Screening</div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-900/70 rounded-lg p-3 border border-slate-800/50 h-20 flex items-center justify-center"
            >
              <div className="text-center">
                <div className="text-pink-400 text-xl font-bold">93%</div>
                <div className="text-slate-400 text-[10px]">Accuracy Rate</div>
              </div>
            </motion.div>
          </div>
        </div>
      ),
    },
    {
      title: "AI-Based Candidate Scoring & Shortlisting",
      icon: <Award className="w-6 h-6" />,
      content: (
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-3 sm:p-6 border border-slate-700/50 mb-4">
          <p className="text-slate-300 text-xs sm:text-sm md:text-base font-normal mb-3">
            Candidates receive precise scores based on 15+ parameters, including skill-match and experience relevance,
            creating an objective ranking system.
          </p>
          <div className="space-y-1.5 mb-3">
            <div className="flex gap-2 items-start text-slate-300 text-xs">
              <CheckCircle className="w-3.5 h-3.5 text-green-400 flex-shrink-0 mt-0.5" />
              <span>Multi-dimensional scoring across 15+ parameters</span>
            </div>
            <div className="flex gap-2 items-start text-slate-300 text-xs">
              <CheckCircle className="w-3.5 h-3.5 text-green-400 flex-shrink-0 mt-0.5" />
              <span>Customizable weighting based on position requirements</span>
            </div>
            <div className="flex gap-2 items-start text-slate-300 text-xs">
              <CheckCircle className="w-3.5 h-3.5 text-green-400 flex-shrink-0 mt-0.5" />
              <span>Automatic shortlisting of top candidates</span>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-slate-900/70 rounded-lg p-3 border border-slate-800/50"
          >
            <div className="flex items-center justify-between mb-1">
              <div className="text-slate-300 text-xs">Technical Skills</div>
              <div className="text-green-400 text-xs">92%</div>
            </div>
            <div className="w-full bg-slate-700/30 rounded-full h-1.5 mb-2">
              <div
                className="bg-gradient-to-r from-purple-500 to-pink-500 h-1.5 rounded-full"
                style={{ width: "92%" }}
              ></div>
            </div>

            <div className="flex items-center justify-between mb-1">
              <div className="text-slate-300 text-xs">Experience Match</div>
              <div className="text-green-400 text-xs">85%</div>
            </div>
            <div className="w-full bg-slate-700/30 rounded-full h-1.5 mb-2">
              <div
                className="bg-gradient-to-r from-purple-500 to-pink-500 h-1.5 rounded-full"
                style={{ width: "85%" }}
              ></div>
            </div>

            <div className="flex items-center justify-between mb-1">
              <div className="text-slate-300 text-xs">Cultural Fit</div>
              <div className="text-amber-400 text-xs">78%</div>
            </div>
            <div className="w-full bg-slate-700/30 rounded-full h-1.5">
              <div
                className="bg-gradient-to-r from-purple-500 to-pink-500 h-1.5 rounded-full"
                style={{ width: "78%" }}
              ></div>
            </div>
          </motion.div>
        </div>
      ),
    },
    {
      title: "AI-Driven Interview Calls & Analysis",
      icon: <PhoneCall className="w-6 h-6" />,
      content: (
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-3 sm:p-6 border border-slate-700/50 mb-4">
          <p className="text-slate-300 text-xs sm:text-sm md:text-base font-normal mb-3">
            AI schedules and conducts structured interviews with top candidates, evaluating responses for technical
            knowledge and communication skills with 24/7 availability.
          </p>
          <div className="space-y-1.5 mb-3">
            <div className="flex gap-2 items-start text-slate-300 text-xs">
              <CheckCircle className="w-3.5 h-3.5 text-green-400 flex-shrink-0 mt-0.5" />
              <span>Automated scheduling eliminates back-and-forth emails</span>
            </div>
            <div className="flex gap-2 items-start text-slate-300 text-xs">
              <CheckCircle className="w-3.5 h-3.5 text-green-400 flex-shrink-0 mt-0.5" />
              <span>Standardized questions ensure fair comparison</span>
            </div>
            <div className="flex gap-2 items-start text-slate-300 text-xs">
              <CheckCircle className="w-3.5 h-3.5 text-green-400 flex-shrink-0 mt-0.5" />
              <span>AI transcription and analysis of responses</span>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-slate-900/70 rounded-lg p-3 border border-slate-800/50"
          >
            <div className="grid grid-cols-3 gap-2">
              <div className="text-center p-2 border border-slate-800/50 rounded-lg">
                <div className="text-purple-400 text-lg mb-0.5">60%</div>
                <div className="text-slate-300 text-[10px]">Reduced Interview Time</div>
              </div>
              <div className="text-center p-2 border border-slate-800/50 rounded-lg">
                <div className="text-pink-400 text-lg mb-0.5">90%</div>
                <div className="text-slate-300 text-[10px]">Candidate Satisfaction</div>
              </div>
              <div className="text-center p-2 border border-slate-800/50 rounded-lg">
                <div className="text-amber-300 text-lg mb-0.5">24/7</div>
                <div className="text-slate-300 text-[10px]">Interview Availability</div>
              </div>
            </div>
          </motion.div>
        </div>
      ),
    },
    {
      title: "Final Report & AI Dashboard",
      icon: <BarChart3 className="w-6 h-6" />,
      content: (
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-3 sm:p-6 border border-slate-700/50 mb-4">
          <p className="text-slate-300 text-xs sm:text-sm md:text-base font-normal mb-3">
            All candidate data is compiled into an intuitive dashboard with side-by-side comparisons and AI-generated
            recommendations for immediate decision-making.
          </p>
          <div className="space-y-1.5 mb-3">
            <div className="flex gap-2 items-start text-slate-300 text-xs">
              <CheckCircle className="w-3.5 h-3.5 text-green-400 flex-shrink-0 mt-0.5" />
              <span>Comprehensive candidate comparison</span>
            </div>
            <div className="flex gap-2 items-start text-slate-300 text-xs">
              <CheckCircle className="w-3.5 h-3.5 text-green-400 flex-shrink-0 mt-0.5" />
              <span>Detailed analytics on candidate pool quality</span>
            </div>
            <div className="flex gap-2 items-start text-slate-300 text-xs">
              <CheckCircle className="w-3.5 h-3.5 text-green-400 flex-shrink-0 mt-0.5" />
              <span>AI-generated hiring recommendations</span>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-slate-900/70 rounded-lg p-3 border border-slate-800/50"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="p-1.5 rounded-full bg-green-900/50 text-green-400">
                <CheckSquare className="w-4 h-4" />
              </div>
              <h4 className="text-white text-xs font-medium">Final Decision Dashboard</h4>
            </div>

            {/* Replace the horizontal scrollable candidate cards with a grid */}
            <div className="grid grid-cols-2 gap-2 mb-3">
              <div className="bg-slate-800/70 p-2 rounded-lg border border-purple-500/50 flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mb-1 flex items-center justify-center text-white font-bold text-xs">
                  P
                </div>
                <div className="text-center">
                  <div className="text-white text-xs">Priya Sharma</div>
                  <div className="text-green-400 text-[10px]">96% Match</div>
                </div>
              </div>
              <div className="bg-slate-800/70 p-2 rounded-lg border border-slate-700/50 flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mb-1 flex items-center justify-center text-white font-bold text-xs">
                  N
                </div>
                <div className="text-center">
                  <div className="text-white text-xs">Neha Gupta</div>
                  <div className="text-green-400 text-[10px]">91% Match</div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/70 p-2 rounded-lg border border-slate-700/50 mt-3 mb-3">
              <div className="flex justify-between items-center mb-2">
                <h5 className="text-white text-[10px] font-medium">Candidate Comparison</h5>
                <span className="text-[8px] text-slate-400">4 shortlisted from 59 applicants</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <div className="flex justify-between mb-0.5">
                    <span className="text-slate-400 text-[8px]">Content Creation</span>
                    <span className="text-green-400 text-[8px]">Priya (9.0)</span>
                  </div>
                  <div className="w-full bg-slate-900/50 rounded-full h-1">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-1 rounded-full w-[90%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-0.5">
                    <span className="text-slate-400 text-[8px]">Technical Skills</span>
                    <span className="text-green-400 text-[8px]">Neha (8.8)</span>
                  </div>
                  <div className="w-full bg-slate-900/50 rounded-full h-1">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-1 rounded-full w-[88%]"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="px-3 py-1.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white text-xs">
                Hire Selected Candidate
              </div>
            </div>
          </motion.div>
        </div>
      ),
    },
    {
      title: "Review Top Shortlisted Talent & Make the Final Call",
      icon: <CheckSquare className="w-6 h-6" />,
      content: (
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-3 sm:p-6 border border-slate-700/50 mb-4">
          <p className="text-slate-300 text-xs sm:text-sm md:text-base font-normal mb-3">
            Make your final selection with complete confidence. Every candidate in your shortlist has been thoroughly
            vetted by AI, with all relevant data accessible in one central location.
          </p>
          <div className="space-y-1.5 mb-3">
            <div className="flex gap-2 items-start text-slate-300 text-xs">
              <CheckCircle className="w-3.5 h-3.5 text-green-400 flex-shrink-0 mt-0.5" />
              <span>Complete candidate profiles in one convenient location</span>
            </div>
            <div className="flex gap-2 items-start text-slate-300 text-xs">
              <CheckCircle className="w-3.5 h-3.5 text-green-400 flex-shrink-0 mt-0.5" />
              <span>Side-by-side comparison of top candidates</span>
            </div>
            <div className="flex gap-2 items-start text-slate-300 text-xs">
              <CheckCircle className="w-3.5 h-3.5 text-green-400 flex-shrink-0 mt-0.5" />
              <span>AI-recommended best fit with supporting evidence</span>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-slate-900/70 rounded-lg p-3 border border-slate-800/50"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="p-1.5 rounded-full bg-green-900/50 text-green-400">
                <CheckSquare className="w-4 h-4" />
              </div>
              <h4 className="text-white text-xs font-medium">Final Decision Dashboard</h4>
            </div>

            {/* Replace horizontal scrollable candidate cards with a grid */}
            <div className="grid grid-cols-3 gap-2 mb-3">
              <div className="bg-slate-800/70 p-2 rounded-lg border border-slate-700/50 flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mb-1 flex items-center justify-center text-white font-bold text-xs">
                  A
                </div>
                <div className="text-center">
                  <div className="text-white text-xs">Candidate A</div>
                  <div className="text-green-400 text-[10px]">98% Match</div>
                </div>
              </div>
              <div className="bg-slate-800/70 p-2 rounded-lg border border-purple-500/50 flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mb-1 flex items-center justify-center text-white font-bold text-xs">
                  B
                </div>
                <div className="text-center">
                  <div className="text-white text-xs">Candidate B</div>
                  <div className="text-green-400 text-[10px]">96% Match</div>
                </div>
              </div>
              <div className="bg-slate-800/70 p-2 rounded-lg border border-slate-700/50 flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mb-1 flex items-center justify-center text-white font-bold text-xs">
                  C
                </div>
                <div className="text-center">
                  <div className="text-white text-xs">Candidate C</div>
                  <div className="text-amber-400 text-[10px]">92% Match</div>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-3">
              <div className="px-3 py-1.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white text-xs">
                Hire Selected Candidate
              </div>
            </div>
          </motion.div>
        </div>
      ),
    },
  ]

  return (
    <div className="w-full">
      <SectionHeading
        title={`How AI Transforms Hiring in ${isMobile ? "5" : "Five"} Simple Steps`}
        subtitle="Our AI-powered platform streamlines the entire recruitment process, saving you time and ensuring you find the best candidates."
        centered
      />
      <Timeline data={data} />
    </div>
  )
}

