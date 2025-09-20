"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ReceiptUploader } from "@/components/ReceiptUploader"
import { useToast } from "@/hooks/use-toast"
import { Search, User, Mail, DollarSign } from "lucide-react"

interface User {
  id: string
  name: string
  email: string
  country: string
  phoneNumber?: string
  isIEEEMember: boolean
  ieeeNumber?: string
  needsAccommodation: boolean
  includesGalaDinner: boolean
  includesTrip: boolean
  isStudent: boolean
  paymentStatus: 'UNPAID' | 'PENDING' | 'APPROVED'
  receiptUrl?: string
  createdAt: string
}

export default function UploadReceiptPage() {
  const [email, setEmail] = useState("")
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const { toast } = useToast()

  const calculatePrice = (user: User) => {
    if (user.needsAccommodation) {
      return 450
    }
    
    // New pricing structure based on user requirements
    if (user.isIEEEMember && user.isStudent) {
      return 75; // Student IEEE member: doesn't include Gala dinner or trip
    } else if (user.isIEEEMember) {
      return user.includesGalaDinner && user.includesTrip ? 150 : 100; // IEEE member: 150 with gala+trip, 100 without
    } else {
      return user.includesGalaDinner && user.includesTrip ? 200 : 150; // Non-IEEE member: 200 with gala+trip, 150 without
    }
  }

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return

    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch(`/api/user-lookup?email=${encodeURIComponent(email)}`)
      const result = await response.json()

      if (response.ok) {
        setUser(result.user)
        toast({
          title: "User found",
          description: "Please upload your payment receipt below.",
        })
      } else {
        setError(result.error || "User not found")
        setUser(null)
        toast({
          title: "User not found",
          description: "Please check your email address and try again.",
          variant: "destructive",
        })
      }
    } catch (error) {
      setError("Network error occurred")
      setUser(null)
      toast({
        title: "Error",
        description: "Network error occurred",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleUploadSuccess = () => {
    setUser(null)
    setEmail("")
    toast({
      title: "Success!",
      description: "Your receipt has been uploaded and is pending approval.",
    })
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-heading font-bold text-purple-800 mb-4">
              Upload Payment Receipt
            </h1>
            <p className="text-gray-600">
              Enter your email address to find your registration and upload your payment receipt.
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-heading font-bold text-purple-800 flex items-center">
                <Search className="mr-2" size={20} />
                Find Your Registration
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSearch} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center">
                    <Mail className="w-4 h-4 mr-2" />
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter the email you used for registration"
                    className="h-11"
                  />
                </div>

                {error && (
                  <Alert variant="destructive">
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Searching..." : "Find Registration"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {user && (
            <div className="mt-6 space-y-6">
              {/* User Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-heading font-bold text-purple-800 flex items-center">
                    <User className="mr-2" size={20} />
                    Registration Details
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="font-medium">Name:</span>
                      <span>{user.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Email:</span>
                      <span>{user.email}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Country:</span>
                      <span>{user.country}</span>
                    </div>
                    {user.phoneNumber && (
                      <div className="flex justify-between">
                        <span className="font-medium">Phone:</span>
                        <span>{user.phoneNumber}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="font-medium">IEEE Member:</span>
                      <span>{user.isIEEEMember ? 'Yes' : 'No'}</span>
                    </div>
                    {user.isIEEEMember && user.ieeeNumber && (
                      <div className="flex justify-between">
                        <span className="font-medium">IEEE Number:</span>
                        <span>{user.ieeeNumber}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="font-medium">Accommodation:</span>
                      <span>{user.needsAccommodation ? 'Yes (3 nights)' : 'No'}</span>
                    </div>
                    <div className="border-t pt-3">
                      <div className="flex justify-between text-lg font-bold">
                        <span>Total Amount:</span>
                        <span className="text-purple-800">${calculatePrice(user)} USD</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Receipt Upload */}
              {user.paymentStatus === 'UNPAID' ? (
                <ReceiptUploader
                  userId={user.id}
                  userEmail={user.email}
                  totalAmount={calculatePrice(user)}
                  onUploadSuccess={handleUploadSuccess}
                />
              ) : user.paymentStatus === 'PENDING' ? (
                <Card className="border-l-4 border-l-yellow-500">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-yellow-800">
                      Payment Pending Approval
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Alert className="border-yellow-200 bg-yellow-50">
                      <AlertDescription className="text-yellow-800">
                        Your payment receipt has been uploaded and is currently pending approval. 
                        You will receive a confirmation email once approved.
                      </AlertDescription>
                    </Alert>
                  </CardContent>
                </Card>
              ) : (
                <Card className="border-l-4 border-l-green-500">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-green-800">
                      Payment Approved
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Alert className="border-green-200 bg-green-50">
                      <AlertDescription className="text-green-800">
                        Your payment has been approved! You should have received a confirmation email.
                      </AlertDescription>
                    </Alert>
                  </CardContent>
                </Card>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
