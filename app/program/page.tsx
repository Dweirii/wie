"use client"

import { useState } from "react"
import { Calendar, MapPin, Clock, User, Coffee, Users } from "lucide-react"

interface Session {
  time: string
  title: string
  speaker?: string
  type: "keynote" | "panel" | "workshop" | "talk" | "ceremony" | "showcase" | "tour" | "networking"
}

interface Day {
  date: string
  theme: string
  venue: string
  sessions: Session[]
}

const programData: Day[] = [
  {
    date: "December 6, 2025",
    theme: "Empowering Leadership and Mentorship",
    venue: "Movenpick Hotel, Amman",
    sessions: [
      {
        time: "08:00 – 09:00",
        title: "Registration",
        type: "ceremony",
      },
      // Opening Ceremony block (broken down by items as in official agenda)
      {
        time: "09:00 – 09:15",
        title: "Welcoming & Introductory Remarks",
        speaker: "Summit Chair: Dr. Yusra Obeidat – Chair, IEEE WIE Jordan",
        type: "ceremony",
      },
      {
        time: "09:15 – 09:30",
        title: "Remarks by IEEE WIE Global Chairwoman",
        speaker: "Dr. Winnie N. Ye",
        type: "ceremony",
      },
      {
        time: "09:30 – 09:45",
        title: "Distinguished Speech by the Minister of Digital Economy & Entrepreneurship (MoDEE) – Jordan",
        type: "ceremony",
      },
      {
        time: "09:45 – 10:00",
        title: "Speech by the Patron of the Ceremony",
        type: "ceremony",
      },
      {
        time: "10:00 – 10:30",
        title: "Live Music and Jordanian Dabka",
        type: "ceremony",
      },
      {
        time: "10:30 – 11:30",
        title: "Exhibitors* & Coffee Break",
        speaker:
          "Booths from WIE-Jordan & WIE AGs (all Jordanian universities), IEEE-Jordan Section, industries, crafts & artwork, Sight Group, and YP booth",
        type: "networking",
      },
      {
        time: "11:30 – 12:30",
        title: 'Panel Discussion: "Uniting Strengths: The Global Impact of Women in Engineering"',
        speaker:
          "Moderator: Dr. Esraa Alsharoa. Panelists: Dr. Yusra Obeidat, Prof. Ala Khalifah, Dr. Celia Shahnaz, Dr. Nadine Abbas",
        type: "panel",
      },
      {
        time: "12:30 – 13:00",
        title: 'Keynote Address: "Empowering Women Engineers to Lead Change"',
        speaker:
          "Dr. Ruba Khasawneh, CEO of Nexiom Company (semiconductors technology & embedded systems)",
        type: "keynote",
      },
      {
        time: "13:00 – 14:00",
        title: 'Panel Discussion: "Strategies for Effective Leadership"',
        speaker:
          "Panelists: Prof. Rowaida Al-Maaitah, Prof. Fadia Mayyas, Prof. Muwafaq Otoom, Prof. Ismail Henti",
        type: "panel",
      },
      {
        time: "14:00 – 15:00",
        title: "Lunch",
        type: "networking",
      },
      {
        time: "15:00 – 16:00",
        title: 'Workshop: "Building Your Leadership Brand"',
        speaker: "Facilitators: Eng. Hani Al-Betsh, Eng. Ramy Al-Damati",
        type: "workshop",
      },
      {
        time: "16:00 – 16:30",
        title: "Workshop: The R8 YP Opportunities and Activities",
        speaker: "By YP Region 8 Chair and YP-Jordan Chair",
        type: "workshop",
      },
      {
        time: "16:30 – 17:00",
        title: "WIE Mentorship Program Showcase: Stories from mentees in the WIE-Jordan Program",
        type: "showcase",
      },
    ],
  },
  {
    date: "December 7, 2025",
    theme: "Innovation, Diversity, and Inclusion",
    venue: "Movenpick Hotel, Amman",
    sessions: [
      {
        time: "09:00 – 09:15",
        title: "Morning Energizer & Recap",
        speaker: "Facilitated by WIE volunteers",
        type: "ceremony",
      },
      {
        time: "09:15 – 09:30",
        title: "Speech by IEEE-Jordan Section Chair",
        speaker: "Dr. Mousa Alakhras",
        type: "ceremony",
      },
      {
        time: "09:30 – 10:30",
        title: 'Keynote Address: "Innovating with Inclusion"',
        speaker: "Senior Engineer from Synopsys global tech company: Dr. Fadi Obeidat",
        type: "keynote",
      },
      {
        time: "10:30 – 11:00",
        title:
          "Workshop: Empowering Leadership – Insights and Journeys from IEEE Life Members",
        speaker: "Speakers: IEEE-Jordan Life Members",
        type: "workshop",
      },
      {
        time: "11:00 – 11:30",
        title:
          "Explore, Engage, Empower: A WIE STAR Workshop for Schoolgirls",
        speaker: "Facilitated by WIE volunteers",
        type: "workshop",
      },
      {
        time: "11:30 – 12:30",
        title: "Exhibitors, Coffee Break & Networking",
        type: "networking",
      },
      {
        time: "12:30 – 13:30",
        title: 'Panel Discussion: "Driving Policy for Women in STEM"',
        speaker:
          "Panelists: HE Eng. Muthana Gharaibeh, HE Eng. Amani Azzam, Manager of Golden Electronics, Eng. Maleeka Zakarneh",
        type: "panel",
      },
      {
        time: "13:30 – 14:30",
        title:
          'From Pixels to Presence: AR/VR and the Evolving World of Interactive Gaming',
        speaker: "Interactive workshop and videos",
        type: "workshop",
      },
      {
        time: "14:30 – 15:30",
        title: "Lunch",
        type: "networking",
      },
      {
        time: "15:30 – 16:00",
        title:
          "Securing the Future: Women Pioneers in Cyber Defense",
        speaker: "Dr. Eman Hammad",
        type: "talk",
      },
      {
        time: "16:00 – 16:30",
        title:
          "Women Leading the Future: Breakthroughs in AI & ML Research",
        speaker: "Prof. Hiam Quraan",
        type: "talk",
      },
      {
        time: "16:00 – 16:30",
        title: 'Coffee Talk: "Breaking Barriers in the Workplace"',
        speaker: "Facilitated by WIE volunteers",
        type: "talk",
      },
      {
        time: "15:30 – 16:30",
        title:
          'Roundtable Panel: "The Business Case for Diversity"',
        speaker:
          "Panelists: HR executives from leading Jordanian companies (Hikma, JODDB, Arab Bank, MARS Robotics)",
        type: "panel",
      },
      {
        time: "16:30 – 17:00",
        title:
          'Panel Discussion: EmpowerHER – Navigating the Challenges and Embracing the Opportunities',
        speaker: "Panelists: HE Saja Majali, Dr. Batoul Muheisen, Dr. Sahar Idwan",
        type: "panel",
      },
      {
        time: "17:00 – 18:00",
        title:
          "Keynote Speech: Humanitarian Technologies (HT) Consortium Programs",
        type: "keynote",
      },
      {
        time: "19:00 – 21:00",
        title:
          "Gala Dinner & Speaker Recognition Ceremony + ILS Hackathon Winners Announcement",
        speaker:
          "Entertainment & networking with honored guests and speakers; cultural booths, traditional clothing, songs, and dabka",
        type: "networking",
      },
    ],
  },
  {
    date: "December 8, 2025",
    theme: "Cultural Exploration",
    venue: "Amman",
    sessions: [
      {
        time: "07:00 – 09:30",
        title: "Group Departure",
        type: "tour",
      },
      {
        time: "09:30 – 13:00",
        title: "Cultural Tour around the city of Amman",
        speaker: "Guided by a local female heritage expert",
        type: "tour",
      },
      {
        time: "13:00 – 14:00",
        title: "Lunch in Downtown Amman",
        speaker: "Traditional Jordanian meal with cultural performance",
        type: "networking",
      },
      {
        time: "14:00 – 17:30",
        title: "Transfer to Roman Theater",
        speaker: "Networking & Reflection Session",
        type: "networking",
      },
      {
        time: "17:30",
        title: "Return to hotel",
        type: "tour",
      },
    ],
  },
]

const getSessionIcon = (type: string) => {
  switch (type) {
    case "keynote":
      return <User className="text-purple-600" size={20} />
    case "panel":
      return <Users className="text-blue-600" size={20} />
    case "workshop":
      return <Calendar className="text-green-600" size={20} />
    case "talk":
      return <Coffee className="text-orange-600" size={20} />
    case "ceremony":
      return <MapPin className="text-red-600" size={20} />
    case "showcase":
      return <Users className="text-indigo-600" size={20} />
    case "tour":
      return <MapPin className="text-teal-600" size={20} />
    case "networking":
      return <Users className="text-pink-600" size={20} />
    default:
      return <Clock className="text-gray-600" size={20} />
  }
}

export default function ProgramPage() {
  const [activeDay, setActiveDay] = useState(0)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg text-white section-padding">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">Program Schedule</h1>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Three days of inspiring sessions, workshops, and cultural experiences designed to empower women leaders in
            engineering
          </p>
        </div>
      </section>

      {/* Program Content */}
      <section className="section-padding">
        <div className="container-custom">
          {/* Tabs */}
          <div className="flex flex-col md:flex-row justify-center mb-12">
            <div className="flex flex-col md:flex-row bg-gray-100 rounded-lg p-1 space-y-1 md:space-y-0 md:space-x-1">
              {programData.map((day, index) => (
                <button
                  key={index}
                  onClick={() => setActiveDay(index)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                    activeDay === index ? "bg-purple-800 text-white shadow-lg" : "text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <div className="text-center">
                    <div className="font-bold">Day {index + 1}</div>
                    <div className="text-sm opacity-75">Dec {6 + index}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Active Day Content */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-heading font-bold text-purple-800 mb-2">
                  Day {activeDay + 1} - {programData[activeDay].date}
                </h2>
                <p className="text-xl text-gray-600 mb-2">{programData[activeDay].theme}</p>
                <div className="flex items-center justify-center space-x-2 text-gray-500">
                  <MapPin size={16} />
                  <span>{programData[activeDay].venue}</span>
                </div>
              </div>

              {/* Sessions */}
              <div className="space-y-4">
                {programData[activeDay].sessions.map((session, sessionIndex) => (
                  <div
                    key={sessionIndex}
                    className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          {getSessionIcon(session.type)}
                          <span className="text-sm font-semibold text-purple-800 bg-purple-100 px-3 py-1 rounded-full">
                            {session.time}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">{session.title}</h3>
                        {session.speaker && <p className="text-gray-600">{session.speaker}</p>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Program Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center bg-white p-6 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-purple-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">Expert Speakers</h3>
              <p className="text-gray-600">Learn from industry leaders and pioneering women in engineering</p>
            </div>

            <div className="text-center bg-white p-6 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">Interactive Workshops</h3>
              <p className="text-gray-600">Hands-on sessions to develop your leadership and technical skills</p>
            </div>

            <div className="text-center bg-white p-6 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">Cultural Experience</h3>
              <p className="text-gray-600">Explore Jordan's rich heritage at Petra and Wadi Rum</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}