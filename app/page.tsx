import Link from "next/link"
import { Calendar, MapPin, Users, Award, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg text-white section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-xl text-purple-200 max-w-lg">
                Empowering women leaders in engineering and technology. Join us in Amman, Jordan for three days of
                inspiration, networking, and professional development.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/program" className="btn-secondary">
                  View Program
                </Link>
                <Link
                  href="/register"
                  className="border-2 border-white text-white hover:bg-white hover:text-purple-800 px-6 py-3 rounded-lg font-semibold transition-all duration-200"
                >
                  Register Now
                </Link>
              </div>

              {/* Event Details */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8">
                <div className="flex items-center space-x-2">
                  <Calendar className="text-yellow-400" size={20} />
                  <div>
                    <p className="font-semibold">December 6-8</p>
                    <p className="text-sm text-purple-200">2025</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="text-yellow-400" size={20} />
                  <div>
                    <p className="font-semibold">Bristol Hotel</p>
                    <p className="text-sm text-purple-200">Amman, Jordan</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="text-yellow-400" size={20} />
                  <div>
                    <p className="font-semibold">300+</p>
                    <p className="text-sm text-purple-200">Participants</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="relative w-full h-48">
                  <Image
                    src="/images/wie-logo.png"
                    alt="IEEE WIE International Leadership Summit 2025 Jordan"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="text-center mt-6">
                  <h3 className="text-2xl font-heading font-bold mb-2">December 6-8, 2025</h3>
                  <p className="text-purple-200">Amman, Jordan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-purple-800 mb-4">About the Summit</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The IEEE WIE International Leadership Summit brings together women engineers and technologists from around
              the world to share knowledge, build networks, and advance leadership in STEM fields.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-hover bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">Networking</h3>
              <p className="text-gray-600">
                Connect with like-minded professionals and build lasting relationships that will advance your career.
              </p>
            </div>

            <div className="card-hover bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">Leadership</h3>
              <p className="text-gray-600">
                Develop essential leadership skills through workshops, panels, and interactive sessions with industry
                experts.
              </p>
            </div>

            <div className="card-hover bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">
                Explore cutting-edge technologies and innovative solutions shaping the future of engineering.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/about" className="btn-primary">
              Learn More About IEEE WIE
            </Link>
          </div>
        </div>
      </section>

      {/* Program Preview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-purple-800 mb-4">
              Three Days of Excellence
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join us for an intensive program featuring keynote speakers, technical sessions, workshops, and networking
              opportunities designed to advance women in engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-800">
              <h3 className="text-xl font-heading font-semibold mb-2 text-purple-800">Day 1 - December 6</h3>
              <p className="text-gray-600 mb-4">Opening Ceremony</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Exhibitors & Coffee Break </li>
                <li>• Keynote Address </li>
                <li>• Workshops</li>
                <li>• and more...</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-yellow-400">
              <h3 className="text-xl font-heading font-semibold mb-2 text-purple-800">Day 2 - December 7</h3>
              <p className="text-gray-600 mb-4"> Morning Enegizer & Recap</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Speech by IEEE-Jordan</li>
                <li>• Panel Discussions</li>
                <li>• A WIE Star workshop</li>
                <li>• and more...</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-400">
              <h3 className="text-xl font-heading font-semibold mb-2 text-purple-800">Day 3 - December 8</h3>
              <p className="text-gray-600 mb-4">Group Depature to Petra</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Cultural Tour around the city of Amman</li>
                <li>• Lunch in Downtown Amman</li>
                <li>• Transfer to Roman Theater</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/program" className="btn-primary">
              View Full Program
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-bg text-white section-padding">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Ready to Join Us?</h2>
          <p className="text-xl text-purple-200 mb-8 max-w-2xl mx-auto">
            Don't miss this opportunity to connect, learn, and grow with women leaders in engineering from around the
            world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register" className="btn-secondary">
              Register Now
            </Link>
            <Link
              href="/sponsorship"
              className="border-2 border-white text-white hover:bg-white hover:text-purple-800 px-6 py-3 rounded-lg font-semibold transition-all duration-200"
            >
              Become a Sponsor
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
