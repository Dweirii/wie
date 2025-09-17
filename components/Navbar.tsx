"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/program", label: "Program" },
    { href: "/speakers", label: "Speakers" },
    { href: "/sponsorship", label: "Sponsorship" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-4">
            <div className="relative w-48 h-16 sm:w-56 sm:h-20">
              <Image
                src="/images/wie-logo.png"
                alt="IEEE WIE International Leadership Summit 2025 Jordan"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-purple-800 font-medium transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/register" className="btn-primary">
              Register Now
            </Link>
            <Link href="/upload-receipt" className="text-gray-700 hover:text-purple-800 font-medium transition-colors duration-200">
              Upload Receipt
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-800"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2 text-gray-700 hover:text-purple-800 font-medium transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/register" className="mx-3 mt-2 btn-primary text-center" onClick={() => setIsOpen(false)}>
                Register Now
              </Link>
              <Link href="/upload-receipt" className="px-3 py-2 text-gray-700 hover:text-purple-800 font-medium transition-colors duration-200" onClick={() => setIsOpen(false)}>
                Upload Receipt
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
