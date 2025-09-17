"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Send, User } from "lucide-react"

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Contact form submitted:", formData)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", subject: "", message: "" })
    }, 3000)
  }

  const isFormValid = formData.name && formData.email && formData.subject && formData.message

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg text-white section-padding">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Get in touch with us for any questions about the IEEE WIE International Leadership Summit 2025
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-heading font-bold text-purple-800 mb-6">Get in Touch</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Have questions about the summit? We're here to help! Reach out to our organizing committee for any
                  inquiries about registration, accommodation, program details, or sponsorship opportunities.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-800">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-800 rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-semibold text-purple-800 mb-2">Dr. Yusra Obeidat</h3>
                      <p className="text-gray-600 mb-3">Chair, IEEE WIE Jordan</p>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Mail size={16} className="text-purple-600" />
                          <a
                            href="mailto:yusra.obeidat@yu.edu.jo"
                            className="text-purple-600 hover:text-purple-800 transition-colors"
                          >
                            yusra.obeidat@yu.edu.jo
                          </a>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Phone size={16} className="text-purple-600" />
                          <a
                            href="tel:+96279596145"
                            className="text-purple-600 hover:text-purple-800 transition-colors"
                          >
                            +962 7 9596 1458
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-yellow-400">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-semibold text-purple-800 mb-2">Event Location</h3>
                      <p className="text-gray-600 mb-3">Summit Venue</p>
                      <p className="text-gray-700">
                        Movenpick Hotel, Amman
                        <br />
                        December 6-8, 2025
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Map Placeholder */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-heading font-semibold text-purple-800 mb-4">Find Us</h3>
                <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="mx-auto mb-2 text-purple-600" size={48} />
                    <p className="text-gray-600">Google Maps Integration</p>
                    <p className="text-sm text-gray-500">Amman, Jordan</p>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-3 mt-4">
                  <Phone className="text-yellow-400" size={20} />
                  <a href="tel:+962795961458" className="text-white hover:text-yellow-400 transition-colors">
                    +962 7 9596 1458
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-heading font-bold text-purple-800 mb-6">Send us a Message</h2>

              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="text-green-600" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-green-600 mb-2">Message Sent!</h3>
                  <p className="text-gray-600">Thank you for your message. We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-800 focus:border-transparent transition-colors"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-800 focus:border-transparent transition-colors"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject *
                    </label>
                    <input
                      id="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-800 focus:border-transparent transition-colors"
                      placeholder="What is this regarding?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-800 focus:border-transparent transition-colors resize-vertical"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={!isFormValid}
                    className={`w-full flex items-center justify-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                      isFormValid
                        ? "bg-purple-800 hover:bg-purple-900 text-white"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                  >
                    <Send size={20} />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
