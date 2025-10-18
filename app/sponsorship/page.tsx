import { Check, Users, MapPin, Calendar, Mail, Phone, Star, Trophy, Award, Crown } from "lucide-react"
import Image from "next/image"

const sponsorshipPackages = [
  {
    name: "Platinum",
    price: "$8,500",
    icon: <Crown className="text-yellow-400" size={32} />,
    color: "border-yellow-400",
    bgColor: "bg-gradient-to-br from-yellow-50 to-yellow-100",
    textColor: "text-yellow-600",
    benefits: [
      "Premium branding throughout event",
      "Speaking opportunity (keynote/panel)",
      "VIP dinner invitation",
      "Exhibition booth (premium location)",
      "Media coverage and press mentions",
      "4 delegate passes included",
      "Logo on all marketing materials",
      "Social media promotion",
      "Post-event networking access",
    ],
    featured: true,
  },
  {
    name: "Gold",
    price: "$5,700",
    icon: <Trophy className="text-yellow-500" size={32} />,
    color: "border-yellow-500",
    bgColor: "bg-gradient-to-br from-yellow-25 to-orange-50",
    textColor: "text-yellow-700",
    benefits: [
      "Logo on website + materials",
      "Exhibition booth",
      "2 delegate passes included",
      "Recognition in opening ceremony",
      "Digital marketing inclusion",
      "Networking session access",
      "Certificate of appreciation",
    ],
  },
  {
    name: "Silver",
    price: "$3,600",
    icon: <Award className="text-gray-500" size={32} />,
    color: "border-gray-400",
    bgColor: "bg-gradient-to-br from-gray-50 to-gray-100",
    textColor: "text-gray-600",
    benefits: [
      "Logo on digital assets",
      "1 delegate pass included",
      "Website acknowledgment",
      "Social media mentions",
      "Digital program listing",
      "Networking opportunities",
    ],
  },
  {
    name: "Bronze",
    price: "$1,200",
    icon: <Star className="text-orange-600" size={32} />,
    color: "border-orange-400",
    bgColor: "bg-gradient-to-br from-orange-50 to-orange-100",
    textColor: "text-orange-600",
    benefits: [
      "Acknowledgment on website",
      "Recognition in opening ceremony",
      "Digital program listing",
      "Basic networking access",
    ],
  },
]

const attendeeTypes = [
  "Engineers (female & male) from around the world",
  "WIE student branches from all Jordanian universities",
  "Engineering faculty members",
  "Professionals from tech & industrial sectors",
  "Business leaders and entrepreneurs",
  "Government and non-profit representatives",
]

const whySponsorReasons = [
  "Gain nationwide visibility through digital campaigns, live branding, and on-site presence",
  "Engage directly with over 200 professionals, academics, entrepreneurs, and students",
  "Be recognized as a champion of women's leadership, diversity, and STEM empowerment",
  "Connect with university chapters, companies, NGOs, and government representatives",
  "Access exhibition spaces, speaking opportunities, and networking sessions",
]

export default function SponsorshipPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg text-white section-padding">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">Become a Sponsor</h1>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Partner with us to empower the next generation of women leaders in engineering and technology
          </p>
        </div>
      </section>

      {/* Why Sponsor Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-purple-800 mb-4">
              Why Sponsor the WIE International Leadership Summit 2025?
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Sponsoring the WIE International Leadership Summit (ILS) 2025 is more than just brand exposure—it's a
              meaningful investment in the future of innovation, diversity, and leadership in STEM.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-heading font-semibold text-purple-800 mb-4">
                As a sponsor, your organization will:
              </h3>
              <div className="space-y-4">
                {whySponsorReasons.map((reason, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="text-white" size={16} />
                    </div>
                    <p className="text-gray-700">{reason}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-purple-800 text-white rounded-2xl p-8">
              <h3 className="text-2xl font-heading font-bold mb-6 flex items-center">
                <Users className="mr-3 text-yellow-400" size={28} />
                Who Will Attend?
              </h3>
              <ul className="space-y-3">
                {attendeeTypes.map((type, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-purple-100">{type}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-4 bg-white/10 rounded-lg">
                <p className="text-center">
                  <span className="text-2xl font-bold text-yellow-400">200+</span>
                  <br />
                  <span className="text-purple-200">High-impact individuals</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsorship Packages */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-purple-800 mb-4">Sponsorship Packages</h2>
            <p className="text-lg text-gray-600">
              Choose the sponsorship level that best fits your organization's goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sponsorshipPackages.map((pkg, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg overflow-hidden border-2 ${pkg.color} ${
                  pkg.featured ? "transform scale-105 shadow-2xl" : ""
                } card-hover`}
              >
                {pkg.featured && (
                  <div className="bg-yellow-400 text-purple-800 text-center py-2 font-semibold text-sm">
                    MOST POPULAR
                  </div>
                )}

                <div className={`${pkg.bgColor} p-6 text-center`}>
                  <div className="flex justify-center mb-4">{pkg.icon}</div>
                  <h3 className="text-2xl font-heading font-bold text-purple-800 mb-2">{pkg.name}</h3>
                  <div className="text-3xl font-bold text-purple-800 mb-2">{pkg.price}</div>
                  <p className="text-sm text-gray-600">USD</p>
                </div>

                <div className="p-6">
                  <ul className="space-y-3">
                    {pkg.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start space-x-2">
                        <Check className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                        <span className="text-sm text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <button className="w-full mt-6 btn-primary">Choose {pkg.name}</button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 italic">*Full list of benefits available upon request.</p>
          </div>
        </div>
      </section>

      {/* Our Sponsors */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-purple-800 mb-4">Our Sponsors</h2>
            <p className="text-lg text-gray-600">
              Thank you to our valued sponsors who make this summit possible
            </p>
          </div>

          {/* Silver Sponsors */}
          <div className="mb-16">
            <h3 className="text-2xl font-heading font-bold text-purple-800 mb-8 text-center">Silver Sponsors</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-40 h-32 mx-auto mb-4 bg-white rounded-lg flex items-center justify-center shadow-md">
                  <Image
                    src="/sponsors/edco-logo.svg"
                    alt="EDCO Logo"
                    width={160}
                    height={96}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h4 className="text-lg font-semibold text-purple-800 mb-2">Electricity Distribution Company</h4>
                <p className="text-gray-600 text-sm">Leading Jordan's electricity distribution sector</p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-40 h-32 mx-auto mb-4 bg-white rounded-lg flex items-center justify-center shadow-md">
                  <Image
                    src="/sponsors/ieee-jordan-logo.svg"
                    alt="IEEE Jordan Section Logo"
                    width={160}
                    height={96}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h4 className="text-lg font-semibold text-purple-800 mb-2">IEEE Jordan Section</h4>
                <p className="text-gray-600 text-sm">Advancing technology for humanity in Jordan</p>
              </div>
            </div>
          </div>

          {/* Bronze Sponsors */}
          <div>
            <h3 className="text-2xl font-heading font-bold text-purple-800 mb-8 text-center">Bronze Sponsors</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <div className="bg-orange-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-28 h-28 mx-auto mb-4 bg-white rounded-lg flex items-center justify-center shadow-md">
                  <Image
                    src="/sponsors/ieee-global-wie-logo.svg"
                    alt="IEEE Global WIE Logo"
                    width={112}
                    height={112}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h4 className="text-sm font-semibold text-purple-800 mb-1">IEEE Global WIE</h4>
                <p className="text-gray-600 text-xs">Women in Engineering globally</p>
              </div>

              <div className="bg-orange-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-28 h-28 mx-auto mb-4 bg-white rounded-lg flex items-center justify-center shadow-md">
                  <Image
                    src="/sponsors/ieee-r8-ias-logo.svg"
                    alt="IEEE Region 8 IAS Logo"
                    width={112}
                    height={112}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h4 className="text-sm font-semibold text-purple-800 mb-1">IEEE Region 8 IAS</h4>
                <p className="text-gray-600 text-xs">Industry Applications Society</p>
              </div>

              <div className="bg-orange-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-28 h-28 mx-auto mb-4 bg-white rounded-lg flex items-center justify-center shadow-md">
                  <Image
                    src="/sponsors/ieee-r8-yp-logo.svg"
                    alt="IEEE Region 8 YP Logo"
                    width={112}
                    height={112}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h4 className="text-sm font-semibold text-purple-800 mb-1">IEEE Region 8 YP</h4>
                <p className="text-gray-600 text-xs">Young Professionals</p>
              </div>

              <div className="bg-orange-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-28 h-28 mx-auto mb-4 bg-white rounded-lg flex items-center justify-center shadow-md">
                  <Image
                    src="/sponsors/ieee-r8-wie-logo.svg"
                    alt="IEEE Region 8 WIE Logo"
                    width={112}
                    height={112}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h4 className="text-sm font-semibold text-purple-800 mb-1">IEEE Region 8 WIE</h4>
                <p className="text-gray-600 text-xs">Women in Engineering</p>
              </div>

              <div className="bg-orange-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-28 h-28 mx-auto mb-4 bg-white rounded-lg flex items-center justify-center shadow-md">
                  <Image
                    src="/sponsors/ieee-r8-sac-logo.svg"
                    alt="IEEE Region 8 SAC Logo"
                    width={112}
                    height={112}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h4 className="text-sm font-semibold text-purple-800 mb-1">IEEE Region 8 SAC</h4>
                <p className="text-gray-600 text-xs">Student Activities Committee</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Overview */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-purple-800 mb-4">Event Overview</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center bg-white p-6 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-purple-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">Location</h3>
              <p className="text-gray-600">Amman, Jordan</p>
            </div>

            <div className="text-center bg-white p-6 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">Date</h3>
              <p className="text-gray-600">December 6–8, 2025</p>
            </div>

            <div className="text-center bg-white p-6 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">Venues</h3>
              <p className="text-gray-600">Bristol Hotel</p>
            </div>

            <div className="text-center bg-white p-6 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">Themes</h3>
              <p className="text-gray-600">Leadership, Mentorship, Diversity, Inclusion</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="gradient-bg text-white section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Contact for Sponsorship</h2>
            <p className="text-xl text-purple-200">
              Ready to partner with us? Get in touch to discuss sponsorship opportunities
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-white" size={40} />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-2">Dr. Yusra Obeidat</h3>
                <p className="text-purple-200 mb-1">Chair, IEEE WIE Jordan</p>
                <p className="text-purple-200">Chair, WIE ILS 2025</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-3">
                  <Mail className="text-yellow-400" size={20} />
                  <a
                    href="mailto:yusra.obeidat@yu.edu.jo"
                    className="text-white hover:text-yellow-400 transition-colors"
                  >
                    yusra.obeidat@yu.edu.jo
                  </a>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Phone className="text-yellow-400" size={20} />
                  <a href="tel:+962795961458" className="text-white hover:text-yellow-400 transition-colors">
                    +962 7 9596 1458
                  </a>
                </div>
              </div>

              <div className="text-center mt-8">
                <a
                  href="mailto:yusra.obeidat@yu.edu.jo?subject=Sponsorship Inquiry - WIE ILS 2025"
                  className="btn-secondary"
                >
                  Contact for Sponsorship
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
