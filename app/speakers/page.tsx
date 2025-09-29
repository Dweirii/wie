import SpeakerCard from "@/components/SpeakerCard"
// src/data/speakers.ts
export type Speaker = {
  slug: string;          // kebab-case unique id
  name: string;
  title?: string;        // role/affiliation short line (optional)
  bio: string;           // 2–5 sentences
  imageUrl: string;
  featured?: boolean;    // optional flag
};

export const speakers = [
  {
    slug: "nadine-abbas",
    name: "Dr. Nadine Abbas",
    title: "Assistant Professor & Director, Software Institute, LAU",
    imageUrl: "https://dweiri.b-cdn.net/WIE/dr%20nadin.jpeg",
    bio: "Assistant Professor of Computer Science and Director of the Software Institute at the Lebanese American University. PhD in ECE (AUB). Research spans mobile edge computing, wireless/5G–6G, IoT, and UAV systems. IEEE Senior Member, Women Techmakers Ambassador, and regional WIE leader recognized with multiple research and innovation awards."
  },
  {
    slug: "fadia-mayyas",
    name: "Prof. Fadia Mayyas",
    title: "VP for Strategic Planning, Quality & Research, Yarmouk University",
    imageUrl: "https://dweiri.b-cdn.net/WIE/fadia.jpeg",
    bio: "Professor of Clinical Pharmacy & Experimental Therapeutics. PhD in Translational Molecular Medicine (CWRU/Cleveland Clinic). 50+ publications on cardiovascular mechanisms and therapeutics. Former Dean of Pharmacy (YU), Vice Dean for Graduate Studies (JUST), leading accreditation, experiential training, and AI/digital competencies initiatives."
  },
  {
    slug: "lana-al-adaileh",
    name: "Eng. Lana Mustafa Al Adaileh",
    title: "Head of Projects Dept., Greater Amman Municipality",
    imageUrl: "https://dweiri.b-cdn.net/WIE/lana.jpeg",
    bio: "Computer engineer and PMP-certified leader in digital transformation and advanced technical projects at GAM. PMI-JO 2024 awardee; named among top women in IT by ITU & GovTech. Mentor in the Women in GovTech Challenge, driving impactful public-sector innovation."
  },
  {
    slug: "maha-ali",
    name: "H.E. Eng. Maha A. Ali",
    title: "Secretary General, Jordanian National Commission for Women",
    imageUrl: "https://dweiri.b-cdn.net/WIE/maha.jpeg",
    bio: "Former two-time Minister of Industry, Trade & Supply and ex-Secretary General of the Ministry. Industrial engineer with an MBA (GJU) and professor of practice (HTU/GJU). Brings deep policy, trade, and leadership experience to national development and women’s empowerment."
  },
  {
    slug: "maleeka-zakarneh",
    name: "Eng. Maleeka Zakarneh",
    title: "Founder, Jadara Electronics",
    imageUrl: "https://dweiri.b-cdn.net/WIE/maleka.jpeg",
    bio: "Founder of Jordan’s first factory for engineering and vocational training equipment. Expanded into solar EPC and a TVET-certified vocational academy. Electronics Engineering (Yarmouk). Active with BPWA, UN Women, SHE Entrepreneur, and Vital Voices."
  },
  {
    slug: "marina-maayah",
    name: "Marina Maayah, MSc",
    title: "Data Scientist & Big Data Administrator",
    imageUrl: "https://dweiri.b-cdn.net/WIE/marina.jpeg",
    bio: "Leads AI/ML and cybersecurity programs including Cloudera CDP administration, SOC automation, and advanced threat detection. Publishes in AI & threat detection and mentors future technology leaders."
  },
  {
    slug: "mwaffaq-otoom",
    name: "Prof. Mwaffaq N. Otoom",
    title: "VP, Institutional Development & Rankings, Yarmouk University",
    imageUrl: "https://dweiri.b-cdn.net/WIE/mufaq.jpeg",
    bio: "Professor of Computer Engineering; Founding Dean of the Faculty of Technology (YU). PhD (Virginia Tech). Focus on embedded systems, assistive tech, IoT, and AI-driven health tools. Leads Erasmus+/DAAD projects, builds innovation labs, and advances international collaboration."
  },
  {
    slug: "mustafa-aqrabawe",
    name: "Eng. Mustafa Aqrabawe",
    title: "O&M Engineer, SEPCO3; Chair, IEEE YP Jordan",
    imageUrl: "https://dweiri.b-cdn.net/WIE/mustafa.jpeg",
    bio: "Electrical Power Engineer operating utility-scale PV plants (>33 MWp). 7+ years IEEE volunteer; IEEE R8 Young Professionals Exceptional Volunteer Award (2023). Active on regional committees and youth empowerment."
  },
  {
    slug: "nawar-obeidat",
    name: "Dr. Nawar Obeidat",
    title: "Software & Embedded Systems Engineer",
    imageUrl: "https://dweiri.b-cdn.net/WIE/nawar.jpeg",
    bio: "PhD & MS (Univ. of Cincinnati). Specializes in software reliability, embedded systems, and formal verification. Contributed to Blue Origin’s New Shepard spacecraft program. Advocate and role model for women in STEM."
  },
  {
    slug: "ramy-aldamati",
    name: "Ramy AlDamati",
    title: "AI & Metaverse Strategist, MetaServ ME",
    imageUrl: "https://dweiri.b-cdn.net/WIE/ramy.jpeg",
    bio: "Entrepreneur with 25+ years across cybersecurity, blockchain, Web3, FinTech, AI, and metaverse. Advisor to governments and enterprises; founder, mentor, and trainer enabling digital-era readiness."
  },
  {
    slug: "reem-hamdan",
    name: "Eng. Reem Hamdan",
    title: "CEO, Electricity Distribution Company (Jordan)",
    imageUrl: "https://dweiri.b-cdn.net/WIE/reem.jpeg",
    bio: "Leads 1,500+ employees serving Amman and the southern districts. 33+ years in energy; 2024 Best CEO Award at International Safety Awards. Board roles include Jordan Cyber Security Council; national advocate for gender equity in STEM."
  },
  {
    slug: "sahar-idwan",
    name: "Prof. Sahar Idwan",
    title: "Professor of IT; Director, Center for Women’s Studies, HU",
    imageUrl: "https://dweiri.b-cdn.net/WIE/sahar.jpeg",
    bio: "Researcher in applied algorithms, ML, IoT, e-learning, and disaster management. Bridges theory and practice through national/international initiatives promoting women’s participation in education, research, and the labor market."
  }
];

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
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-purple-800 mb-6">Our Distinguished Speakers</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Meet the inspiring women leaders who will share their expertise, insights, and experiences at the summit.
              Our distinguished speakers bring decades of experience from industry, academia, and government,
              representing the forefront of innovation in engineering and technology.
            </p>
            <div className="mt-8 flex justify-center">
              <div className="bg-purple-100 text-purple-800 px-6 py-3 rounded-full text-sm font-semibold">
                {speakers.length} Inspiring Speakers
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
            {speakers.map((speaker, index) => (
              <SpeakerCard key={speaker.slug} speaker={speaker} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900">
        <div className="container-custom">
          <div className="bg-white/10 backdrop-blur-sm text-white rounded-3xl p-8 md:p-16 text-center border border-white/20">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Ready to Be Inspired?</h2>
            <p className="text-xl md:text-2xl text-purple-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Don't miss the opportunity to learn from these incredible speakers and connect with fellow professionals.
              Register now to secure your spot at the summit and be part of this transformative experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="/register"
                className="bg-yellow-400 text-purple-800 px-10 py-4 rounded-xl font-bold text-lg hover:bg-yellow-500 hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Register Now
              </a>
              <a
                href="/program"
                className="border-2 border-white/50 text-white hover:bg-white hover:text-purple-800 px-10 py-4 rounded-xl font-bold text-lg transition-all duration-200 hover:scale-105"
              >
                View Program
              </a>
            </div>
            <div className="mt-8 text-purple-200 text-sm">
              Limited seats available • Early bird pricing ends soon
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
