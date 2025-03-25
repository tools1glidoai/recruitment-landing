"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle } from "lucide-react"
import { Modal } from "@/components/ui/modal"

// Country codes data
const countryCodes = [
  { code: "+91", country: "India" },
  { code: "+1", country: "United States" },
  { code: "+44", country: "United Kingdom" },
  { code: "+61", country: "Australia" },
  { code: "+86", country: "China" },
  { code: "+49", country: "Germany" },
  { code: "+33", country: "France" },
  { code: "+81", country: "Japan" },
  { code: "+7", country: "Russia" },
  { code: "+55", country: "Brazil" },
  { code: "+52", country: "Mexico" },
  { code: "+39", country: "Italy" },
  { code: "+34", country: "Spain" },
  { code: "+82", country: "South Korea" },
  { code: "+65", country: "Singapore" },
  { code: "+971", country: "UAE" },
  { code: "+966", country: "Saudi Arabia" },
  { code: "+27", country: "South Africa" },
  { code: "+60", country: "Malaysia" },
  { code: "+64", country: "New Zealand" },
]

interface ContactFormProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  subtitle?: string
}

export function ContactForm({
  isOpen,
  onClose,
  title = "Start Hiring Now",
  subtitle = "Fill out the form below to get started with Talent Assist",
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    countryCode: "+91",
    phone: "",
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company name is required"
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required"
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid 10-digit phone number"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "") // Remove non-digits
    setFormData((prev) => ({ ...prev, phone: value }))

    if (errors.phone) {
      setErrors((prev) => ({ ...prev, phone: "" }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      // Here you would typically send the data to your backend or API
      // For now, we'll simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Reset form and show success message
      setIsSubmitted(true)

      // Store data in localStorage for now (in production, you'd send to a server)
      const submissions = JSON.parse(localStorage.getItem("formSubmissions") || "[]")
      submissions.push({
        ...formData,
        submittedAt: new Date().toISOString(),
      })
      localStorage.setItem("formSubmissions", JSON.stringify(submissions))

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          name: "",
          email: "",
          company: "",
          countryCode: "+91",
          phone: "",
        })
        onClose()
      }, 3000)
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title}>
      {!isSubmitted ? (
        <>
          <p className="text-slate-300 text-sm mb-6">{subtitle}</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name" className="text-white">
                Full Name
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className={`bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-400 ${errors.name ? "border-red-500" : ""}`}
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>

            <div>
              <Label htmlFor="company" className="text-white">
                Company Name
              </Label>
              <Input
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your Company"
                className={`bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-400 ${errors.company ? "border-red-500" : ""}`}
              />
              {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company}</p>}
            </div>

            <div>
              <Label htmlFor="email" className="text-white">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@company.com"
                className={`bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-400 ${errors.email ? "border-red-500" : ""}`}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

            <div>
              <Label htmlFor="phone" className="text-white">
                Phone Number
              </Label>
              <div className="grid grid-cols-4 gap-2">
                <div>
                  <Select
                    value={formData.countryCode}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, countryCode: value }))}
                  >
                    <SelectTrigger className="bg-slate-800/50 border-slate-700 text-white">
                      <SelectValue placeholder="+91" />
                    </SelectTrigger>
                    <SelectContent className="max-h-[200px]">
                      {countryCodes.map((country) => (
                        <SelectItem key={country.code} value={country.code}>
                          {country.code} ({country.country})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="col-span-3">
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    placeholder="Phone Number"
                    maxLength={10}
                    className={`bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-400 ${errors.phone ? "border-red-500" : ""}`}
                  />
                </div>
              </div>
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-6 text-lg"
            >
              {isSubmitting ? "Submitting..." : "START HIRING NOW"}
            </Button>
          </form>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center py-8">
          <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
            <CheckCircle className="w-8 h-8 text-green-500" />
          </div>
          <h3 className="text-xl font-medium text-white mb-2">Thank You!</h3>
          <p className="text-slate-300 text-center mb-6">
            Your information has been submitted successfully. Our team will get in touch with you shortly.
          </p>
        </div>
      )}
    </Modal>
  )
}

