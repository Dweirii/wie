import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-purple-800 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <p className="text-purple-200 mb-4 max-w-md">
              Join us for the IEEE Women in Engineering International Leadership Summit 2025 in Amman, Jordan.
              Empowering women leaders in engineering and technology.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin size={16} className="text-yellow-400" />
                <span className="text-sm">Amman, Jordan</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-yellow-400" />
                <span className="text-sm">info@wie-ils-jordan.org</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-yellow-400" />
                <span className="text-sm">+962 7 9596 1458</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-purple-200 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/program" className="text-purple-200 hover:text-white transition-colors">
                  Program
                </Link>
              </li>
              <li>
                <Link href="/speakers" className="text-purple-200 hover:text-white transition-colors">
                  Speakers
                </Link>
              </li>
              <li>
                <Link href="/register" className="text-purple-200 hover:text-white transition-colors">
                  Register
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/sponsorship" className="text-purple-200 hover:text-white transition-colors">
                  Sponsorship
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-purple-200 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-purple-600 mt-8 pt-8 text-center">
          <p className="text-purple-200">© 2025 IEEE Women in Engineering - Jordan Section. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
