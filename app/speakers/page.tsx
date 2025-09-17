import SpeakerCard from "@/components/SpeakerCard"

const speakers = [
  {
    name: "Dr. Yusra Obeidat",
    title: "Chair, IEEE WIE Jordan",
    affiliation: "Ministry of Digital Economy and Entrepreneurship",
    bio: "Leading expert in digital transformation and women's empowerment in engineering. Passionate advocate for diversity in STEM fields.",
    email: "yusra.obeidat@yu.edu.jo",
  },
  {
    name: "Prof. Rowaida Al-Maaitah",
    title: "Leadership Development Expert",
    affiliation: "University of Jordan",
    bio: "Renowned professor specializing in leadership strategies and organizational behavior. Expert panelist on effective leadership methodologies.",
  },
  {
    name: "Eng. Amani Al-Azzam",
    title: "Deputy Minister of Energy",
    affiliation: "Ministry of Energy and Mineral Resources",
    bio: "Senior government official driving policy changes for women in STEM. Champion of sustainable energy initiatives and gender inclusion.",
  },
  {
    name: "Eng. Maleeka Zakarneh",
    title: "Senior Technical Lead",
    affiliation: "Technology Innovation Hub",
    bio: "Inspiring speaker known for engaging coffee talks. Expert in technical leadership and mentorship programs for emerging engineers.",
  },
  {
    name: "Senior Engineer",
    title: "Principal Engineer",
    affiliation: "Synopsis",
    bio: "Keynote speaker specializing in innovation and inclusion. Leading expert in semiconductor design and fostering diverse engineering teams.",
  },
  {
    name: "Google Techmaker Representative",
    title: "Women Techmakers Lead",
    affiliation: "Google",
    bio: "Workshop leader focused on digital tools for career growth. Advocate for women in technology and inclusive workplace cultures.",
  },
]

export default function SpeakersPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg text-white section-padding">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">Our Speakers</h1>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Meet the inspiring women leaders who will share their expertise, insights, and experiences at the summit
          </p>
        </div>
      </section>

      {/* Speakers Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-purple-800 mb-4">Featured Speakers</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our distinguished speakers bring decades of experience from industry, academia, and government,
              representing the forefront of innovation in engineering and technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {speakers.map((speaker, index) => (
              <SpeakerCard key={index} speaker={speaker} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="bg-purple-800 text-white rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-heading font-bold mb-4">Want to Hear More?</h2>
            <p className="text-xl text-purple-200 mb-8 max-w-2xl mx-auto">
              Don't miss the opportunity to learn from these incredible speakers. Register now to secure your spot at
              the summit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/register"
                className="bg-yellow-400 text-purple-800 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors duration-200"
              >
                Register Now
              </a>
              <a
                href="/program"
                className="border-2 border-white text-white hover:bg-white hover:text-purple-800 px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                View Program
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
