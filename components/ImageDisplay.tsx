"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Eye, Download } from "lucide-react"
import { isDataUrl, getFileInfoFromDataUrl } from "@/lib/upload"

interface ImageDisplayProps {
  receiptUrl: string
  alt?: string
  className?: string
}

export function ImageDisplay({ receiptUrl, alt = "Receipt", className = "" }: ImageDisplayProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleDownload = () => {
    if (isDataUrl(receiptUrl)) {
      const link = document.createElement('a')
      link.href = receiptUrl
      link.download = `receipt-${Date.now()}.${getFileInfoFromDataUrl(receiptUrl).mimeType.split('/')[1] || 'jpg'}`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } else {
      // For regular URLs
      window.open(receiptUrl, '_blank')
    }
  }

  if (!receiptUrl) {
    return (
      <div className="flex items-center justify-center h-20 bg-gray-100 rounded-lg">
        <span className="text-gray-500 text-sm">No receipt uploaded</span>
      </div>
    )
  }

  return (
    <div className={`space-y-2 ${className}`}>
      <div className="relative group">
        <img
          src={receiptUrl}
          alt={alt}
          className="w-full h-20 object-cover rounded-lg border cursor-pointer hover:opacity-90 transition-opacity"
          onClick={() => setIsOpen(true)}
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200 rounded-lg flex items-center justify-center">
          <Eye className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>
      
      <div className="flex gap-2">
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm" className="flex-1">
              <Eye className="w-4 h-4 mr-2" />
              View Full
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto">
            <DialogHeader>
              <DialogTitle>Receipt Preview</DialogTitle>
            </DialogHeader>
            <div className="flex justify-center">
              <img
                src={receiptUrl}
                alt={alt}
                className="max-w-full max-h-[70vh] object-contain rounded-lg"
              />
            </div>
          </DialogContent>
        </Dialog>
        
        <Button variant="outline" size="sm" onClick={handleDownload}>
          <Download className="w-4 h-4 mr-2" />
          Download
        </Button>
      </div>
    </div>
  )
}

