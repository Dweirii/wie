"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Upload, Check, AlertCircle, DollarSign } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface ReceiptUploaderProps {
  userId: string
  userEmail: string
  totalAmount: number
  onUploadSuccess: () => void
}

export function ReceiptUploader({ userId, userEmail, totalAmount, onUploadSuccess }: ReceiptUploaderProps) {
  const [file, setFile] = useState<File | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  const { toast } = useToast()

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null
    setFile(selectedFile)
  }

  const handleUpload = async () => {
    if (!file) {
      toast({
        title: "No file selected",
        description: "Please select a receipt file to upload",
        variant: "destructive",
      })
      return
    }

    setIsUploading(true)

    try {
      const formData = new FormData()
      formData.append('receipt', file)
      formData.append('userId', userId)

      const response = await fetch('/api/upload-receipt', {
        method: 'POST',
        body: formData,
      })

      const result = await response.json()

      if (response.ok) {
        toast({
          title: "Receipt uploaded successfully!",
          description: "Your payment is now pending approval.",
        })
        onUploadSuccess()
      } else {
        toast({
          title: "Upload failed",
          description: result.error || "Failed to upload receipt",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Upload failed",
        description: "Network error occurred",
        variant: "destructive",
      })
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <Card className="border-l-4 border-l-amber-500">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-amber-800 flex items-center">
          <DollarSign className="w-5 h-5 mr-2" />
          Complete Your Payment
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Alert className="border-amber-200 bg-amber-50">
          <AlertCircle className="w-5 h-5 text-amber-600" />
          <AlertDescription className="text-amber-800">
            <strong>Payment Required:</strong> You need to pay <strong>${totalAmount} USD</strong> via bank transfer 
            and upload your receipt to complete your registration.
          </AlertDescription>
        </Alert>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload Bank Transfer Receipt
            </label>
            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="receipt-upload"
                className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <Upload className="w-8 h-8 mb-4 text-gray-500" />
                  <p className="mb-2 text-sm text-gray-500">
                    <span className="font-semibold">Click to upload</span> or drag and drop
                  </p>
                  <p className="text-xs text-gray-500">PNG, JPG, PDF (MAX. 10MB)</p>
                </div>
                <input
                  id="receipt-upload"
                  type="file"
                  className="hidden"
                  accept="image/*,.pdf"
                  onChange={handleFileChange}
                />
              </label>
            </div>
            {file && (
              <p className="text-sm text-green-600 flex items-center mt-2">
                <Check className="w-4 h-4 mr-2" />
                Selected: {file.name}
              </p>
            )}
          </div>

          <Button 
            onClick={handleUpload} 
            disabled={!file || isUploading}
            className="w-full"
          >
            {isUploading ? "Uploading..." : "Upload Receipt"}
          </Button>
        </div>

        <div className="text-xs text-gray-500">
          <p>Registration for: <strong>{userEmail}</strong></p>
          <p>Amount: <strong>${totalAmount} USD</strong></p>
        </div>
      </CardContent>
    </Card>
  )
}
