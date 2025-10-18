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
  },
  {
    slug: "amani-al-azzam",
    name: "Amani Mohamed Al Azzam",
    title: "Secretary General, Ministry of Energy and Mineral Resources",
    imageUrl: "https://dweiri.b-cdn.net/WIE/ramy.jpeg",
    bio: "Amani Al Azzam is the Secretary General of the Ministry of Energy and Mineral Resources (MEMR) of Jordan and serves as the Vice Chairwoman of the National Electric Power Company (NEPCO). She represents Jordan on the Board of Trustees of the Regional Center for Renewable Energy and Energy Efficiency (RECREE) and is a member of the Executive Board of the Eastern Mediterranean Gas Forum (EMGF). With over 34 years of experience in the Jordanian energy sector, Amani began her career at NEPCO after earning her degree in electrical engineering. She focused on grid planning and technical studies, particularly in electrical and gas interconnection projects. Since her appointment as Secretary General in 2016, Amani has been deeply involved in advancing the renewable energy, gas, oil, and mineral resources sectors in Jordan. "
  },
  {
    slug: "Rasha-Abu-Marar",
    name: "Rasha Abu-Marar",
    title: "Focal Point for Women’s Empowerment at the Ministry of Energy and Mineral",
    imageUrl: "https://dweiri.b-cdn.net/WIE/PHOTO-2025-10-03-20-27-40.jpg",
    bio: "Rasha Abu-Marar is the Focal Point for Women’s Empowerment at the Ministry of Energy and Mineral Resources in Jordan and the Regional Coordinator of the RENEW MENA Jordan Chapter. She has extensive experience in planning, international cooperation, and leading initiatives that strengthen women’s participation and leadership in the energy sector. Rasha played a pivotal role in establishing and coordinating the Jordan Chapter of RENEW MENA, fostering partnerships that promote inclusive and sustainable development. Beyond her contributions in energy, she has been actively engaged in initiatives advancing human rights, empowering youth, and advocating for persons with disabilities, reflecting her holistic approach to social empowerment. She has also played a key role in national and regional platforms such as She Leads: From Stories to Shaping Solutions and Women on the Green Path, creating spaces for dialogue, mentorship, and collaboration. Through her leadership, Rasha continues to drive meaningful change towards greater participation, equity, and empowerment across sectors in Jordan and the wider MENA region."
  },
  {
    slug: "prof-ismael-al-hinti",
    name: "Prof. Ismael Al-Hinti",
    title: "Professor of IT; Director, Center for Women’s Studies, HU",
    imageUrl: "https://dweiri.b-cdn.net/WIE/PHOTO-2025-10-06-19-07-28.jpg",
    bio: "RProfessor Ismael Al-Hinti is the President of Al-Hussein Technical University — an initiative of the Crown Prince Foundation — where he is leading a transformation in higher and technical education in Jordan through innovation, project-based learning, and strong industry partnerships. A passionate educator, academic leader, and accomplished entrepreneur, he brings over 23 years of diverse experience across Jordan and the MENA region. Professor Al-Hinti holds a Ph.D. in Mechanical Engineering from Queen’s University Belfast (2002) and a B.Sc. from the University of Jordan (1999). He is a professor of mechanical engineering and a renowned energy expert, as well as the founder and former CEO of ETA-max Energy & Environmental Solutions, having managed more than 300 energy efficiency and solar projects across Jordan, Kuwait, and Saudi Arabia. His contributions have earned him multiple national and international awards. In addition to his academic and entrepreneurial pursuits, he serves as a member of the National Cyber Security Council, the Board of Trustees of the King Abdullah II Award for Innovation, the Jordan Renewable Energy and Energy Efficiency Fund, the Industrial Scientific Research and Development Fund, and Intaj. He also serves on the Engineering and Technology Committee for the Great Arab Minds Award in Dubai, and is a certified trainer and life member of the Association of Energy Engineers (USA). A proud father of three boys, Professor Al-Hinti continues to champion education that bridges academia and employability."
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
