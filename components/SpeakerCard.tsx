import Image from "next/image"
import { User, Building, Mail } from "lucide-react"

interface Speaker {
  name: string
  title: string
  affiliation: string
  bio: string
  image?: string
  email?: string
}

interface SpeakerCardProps {
  speaker: Speaker
}

export default function SpeakerCard({ speaker }: SpeakerCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden card-hover group">
      <div className="relative h-64 bg-gradient-to-br from-purple-800 to-purple-600">
        {speaker.image ? (
          <Image src={speaker.image || "/placeholder.svg"} alt={speaker.name} fill className="object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
              <User className="text-white" size={48} />
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-heading font-bold text-purple-800 mb-2">{speaker.name}</h3>
        <p className="text-lg font-semibold text-gray-700 mb-1">{speaker.title}</p>

        <div className="flex items-center space-x-2 text-gray-600 mb-3">
          <Building size={16} />
          <span className="text-sm">{speaker.affiliation}</span>
        </div>

        <p className="text-gray-600 text-sm leading-relaxed mb-4">{speaker.bio}</p>

        {speaker.email && (
          <div className="flex items-center space-x-2">
            <Mail size={16} className="text-purple-600" />
            <a
              href={`mailto:${speaker.email}`}
              className="text-purple-600 hover:text-purple-800 text-sm transition-colors"
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
