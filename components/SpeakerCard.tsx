import Image from "next/image"
import { User, Building, Mail, Award } from "lucide-react"

interface Speaker {
  slug: string
  name: string
  title?: string
  bio: string
  imageUrl: string
  featured?: boolean
}

interface SpeakerCardProps {
  speaker: Speaker
}

export default function SpeakerCard({ speaker }: SpeakerCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group border border-gray-100">
      {/* Image Section */}
      <div className="relative h-80 bg-gradient-to-br from-purple-800 to-purple-600">
        {speaker.imageUrl ? (
          <Image 
            src={speaker.imageUrl} 
            alt={speaker.name} 
            fill 
            className="object-contain group-hover:scale-105 transition-transform duration-300" 
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
              <User className="text-white" size={48} />
            </div>
          </div>
        )}
        
        {/* Featured Badge */}
        {speaker.featured && (
          <div className="absolute top-4 right-4 bg-yellow-400 text-purple-800 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
            <Award size={12} />
            Featured
          </div>
        )}
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h3 className="text-xl font-heading font-bold text-purple-800 mb-2 group-hover:text-purple-600 transition-colors">
          {speaker.name}
        </h3>
        
        {speaker.title && (
          <p className="text-lg font-semibold text-gray-700 mb-3 leading-tight">
            {speaker.title}
          </p>
        )}

        <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">
          {speaker.bio}
        </p>
      </div>
    </div>
  )
}
