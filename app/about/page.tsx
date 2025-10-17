import { Users, Globe, Award, Target } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg text-white section-padding">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">About IEEE WIE ILS 2025</h1>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Empowering women in engineering through leadership, innovation, and collaboration
          </p>
        </div>
      </section>

      {/* About IEEE */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-heading font-bold text-purple-800 mb-6">About IEEE</h2>
              <p className="text-gray-600 mb-4">
                The Institute of Electrical and Electronics Engineers (IEEE) is the world's largest technical
                professional organization dedicated to advancing technology for the benefit of humanity.
              </p>
              <p className="text-gray-600 mb-4">
                IEEE and its members inspire a global community to innovate for a better tomorrow through highly cited
                publications, conferences, technology standards, and professional and educational activities.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-800">400,000+</div>
                  <div className="text-sm text-gray-600">Members Worldwide</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-800">160+</div>
                  <div className="text-sm text-gray-600">Countries</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <img
                src="/images/wie-logo.png"
                alt="IEEE Global Network"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About IEEE WIE */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-purple-800 mb-4">About IEEE Women in Engineering</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              IEEE Women in Engineering (WIE) is one of the largest international professional organizations dedicated
              to promoting women engineers and scientists.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center bg-white p-6 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-purple-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="font-heading font-semibold mb-2">Community</h3>
              <p className="text-sm text-gray-600">Building a global community of women in engineering</p>
            </div>

            <div className="text-center bg-white p-6 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-purple-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="text-white" size={32} />
              </div>
              <h3 className="font-heading font-semibold mb-2">Global Reach</h3>
              <p className="text-sm text-gray-600">Operating in over 100 countries worldwide</p>
            </div>

            <div className="text-center bg-white p-6 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-purple-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="font-heading font-semibold mb-2">Recognition</h3>
              <p className="text-sm text-gray-600">Celebrating achievements of women in engineering</p>
            </div>

            <div className="text-center bg-white p-6 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-purple-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="text-white" size={32} />
              </div>
              <h3 className="font-heading font-semibold mb-2">Mission</h3>
              <p className="text-sm text-gray-600">Inspiring, engaging, encouraging, and empowering</p>
            </div>
          </div>
        </div>
      </section>

      {/* About ILS Jordan 2025 */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-purple-800 mb-4">About ILS Jordan 2025</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The IEEE WIE International Leadership Summit 2025 in Jordan represents a milestone in advancing women's
              leadership in engineering across the Middle East and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-heading font-semibold text-purple-800 mb-3">Our Vision</h3>
                <p className="text-gray-600">
                  To create a platform where women engineers from diverse backgrounds can come together to share
                  experiences, learn from each other, and build the leadership skills necessary to drive innovation in
                  their fields.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-heading font-semibold text-purple-800 mb-3">Why Jordan?</h3>
                <p className="text-gray-600">
                  Jordan serves as a bridge between cultures and continents, making it the perfect location for an
                  international summit. The country's commitment to education and technology, combined with its rich
                  cultural heritage, provides an inspiring backdrop for leadership development.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-heading font-semibold text-purple-800 mb-3">Expected Impact</h3>
                <p className="text-gray-600">
                  This summit will bring together over 300 participants from around the world, creating lasting networks
                  and partnerships that will continue to benefit the global engineering community long after the event
                  concludes.
                </p>
              </div>
            </div>

            <div className="bg-purple-800 text-white rounded-2xl p-8">
              <h3 className="text-2xl font-heading font-bold mb-6">Summit Highlights</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Keynote speeches from industry leaders</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Interactive workshops on leadership development</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Panel discussions on current industry trends</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Networking opportunities with global professionals</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Cultural experiences showcasing Jordan's heritage</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Awards ceremony recognizing outstanding achievements</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
