"use client";

import { useState } from "react";
import {
  Check, Calendar, MapPin, Users, DollarSign, Phone, Upload,
  Building2, User, Mail, Globe, Hash
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { CopyableText } from "@/components/CopyableText";
import { ReceiptUploader } from "@/components/ReceiptUploader";

type ExistingUser =
  | {
      id: string;
      name: string;
      email: string;
      paymentStatus: "UNPAID" | "PENDING" | "APPROVED";
      needsReceipt: boolean;
    }
  | null;

const MAX_RECEIPT_BYTES = 10 * 1024 * 1024; // 10MB
const ALLOWED_MIME = ["image/jpeg", "image/png", "image/webp", "application/pdf"];

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    phoneNumber: "",
    isIEEEMember: false,
    ieeeNumber: "",
    needsAccommodation: false,
    includesGalaDinner: false,
    includesTrip: false,
    isStudent: false,
    receipt: null as File | null,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [existingUser, setExistingUser] = useState<ExistingUser>(null);
  const { toast } = useToast();

  const calculatePrice = () => {
    if (formData.needsAccommodation) return 450; // With accommodation
    
    // Updated pricing structure based on user requirements
    if (formData.isIEEEMember && formData.isStudent) {
      return 50; // Student IEEE member: $50
    } else if (formData.isIEEEMember) {
      return formData.includesGalaDinner && formData.includesTrip ? 100 : 75; // IEEE member: $100 with gala+trip, $75 without
    } else {
      return formData.includesGalaDinner && formData.includesTrip ? 125 : 100; // Non-IEEE member: $125 with gala+trip, $100 without
    }
  };

  const coerceBool = (v: boolean | "indeterminate") => v === true;

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;

    if (file) {
      if (!ALLOWED_MIME.includes(file.type)) {
        toast({
          title: "Invalid file type",
          description: "Allowed: JPG, PNG, WEBP, or PDF.",
          variant: "destructive",
        });
        e.currentTarget.value = "";
        return;
      }
      if (file.size > MAX_RECEIPT_BYTES) {
        toast({
          title: "File too large",
          description: "Maximum size is 10 MB.",
          variant: "destructive",
        });
        e.currentTarget.value = "";
        return;
      }
    }

    setFormData((prev) => ({ ...prev, receipt: file }));
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      country: "",
      phoneNumber: "",
      isIEEEMember: false,
      ieeeNumber: "",
      needsAccommodation: false,
      includesGalaDinner: false,
      includesTrip: false,
      isStudent: false,
      receipt: null,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic client guards
    if (!formData.name.trim() || !formData.email.trim() || !formData.country.trim()) {
      toast({
        title: "Missing required fields",
        description: "Name, Email, and Country are mandatory.",
        variant: "destructive",
      });
      return;
    }
    if (formData.isIEEEMember && !formData.ieeeNumber.trim()) {
      toast({
        title: "IEEE Number required",
        description: "Please enter your IEEE membership number.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setExistingUser(null);

    try {
      const fd = new FormData();
      fd.append("name", formData.name);
      fd.append("email", formData.email);
      fd.append("country", formData.country);
      fd.append("phoneNumber", formData.phoneNumber);
      fd.append("isIEEEMember", String(formData.isIEEEMember));
      fd.append("ieeeNumber", formData.ieeeNumber);
      fd.append("needsAccommodation", String(formData.needsAccommodation));
      fd.append("includesGalaDinner", String(formData.includesGalaDinner));
      fd.append("includesTrip", String(formData.includesTrip));
      fd.append("isStudent", String(formData.isStudent));
      if (formData.receipt) fd.append("receipt", formData.receipt);

      const idempotencyKey = crypto.randomUUID?.() ?? `${Date.now()}-${Math.random()}`;

      const response = await fetch("/api/register", {
        method: "POST",
        body: fd,
        headers: {
          "Idempotency-Key": idempotencyKey,
        },
      });

      const result = await response.json();

      // New create
      if (response.status === 201) {
        setSubmitMessage(result.message);
        setIsSubmitted(true);
        toast({ title: "Registration Successful", description: result.message });
        resetForm();
        return;
      }

      // Idempotent / upgraded UNPAID → PENDING
      if (response.status === 200 && result?.success) {
        setSubmitMessage(result.message ?? "Request processed successfully.");
        setIsSubmitted(true);
        toast({ title: "Processed", description: result.message ?? "Success." });
        resetForm();
        return;
      }

      // Conflict (already PENDING/APPROVED)
      if (response.status === 409) {
        setExistingUser(result.existingUser ?? null);
        toast({
          title: "Already Registered",
          description:
            result?.error ??
            "You are already registered. If UNPAID, upload your bank transfer receipt below.",
          variant: "destructive",
        });
        return;
      }

      // Other errors
      toast({
        title: "Registration Failed",
        description: result?.error || "An unexpected error occurred.",
        variant: "destructive",
      });
    } catch (err) {
      toast({
        title: "Network error",
        description: "Please check your connection and try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="text-green-600" size={32} />
            </div>
            <h1 className="text-2xl font-heading font-bold text-purple-800 mb-4">
              Registration Submitted!
            </h1>
            <Alert className="mb-6">
              <AlertDescription>{submitMessage}</AlertDescription>
            </Alert>
            <div className="bg-gray-50 rounded-lg p-4 text-left">
              <h3 className="font-semibold mb-4 text-center">Registration Summary:</h3>
              <div className="space-y-2">
                <p><strong>Name:</strong> {formData.name}</p>
                <p><strong>Email:</strong> {formData.email}</p>
                <p><strong>Country:</strong> {formData.country}</p>
                {formData.phoneNumber && <p><strong>Phone:</strong> {formData.phoneNumber}</p>}
                <p><strong>IEEE Member:</strong> {formData.isIEEEMember ? "Yes" : "No"}</p>
                {formData.isIEEEMember && formData.ieeeNumber && (
                  <p><strong>IEEE Number:</strong> {formData.ieeeNumber}</p>
                )}
                <p><strong>Accommodation:</strong> {formData.needsAccommodation ? "Yes (3 nights)" : "No"}</p>
                <div className="border-t pt-2 mt-4">
                  <p className="text-lg font-bold text-purple-800">
                    <strong>Total Amount:</strong> ${calculatePrice()} USD
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="gradient-bg text-white section-padding">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">Register Now</h1>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Secure your spot at the IEEE WIE International Leadership Summit 2025
          </p>
        </div>
      </section>

      <div className="container-custom py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Registration Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-heading font-bold text-purple-800 flex items-center">
                  <User className="mr-2" size={24} />
                  Registration Form
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">
                      Personal Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="flex items-center">
                          <User className="w-4 h-4 mr-2" />
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          placeholder="Enter your full name"
                          className="h-11"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="flex items-center">
                          <Mail className="w-4 h-4 mr-2" />
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="Enter your email address"
                          className="h-11"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="country" className="flex items-center">
                          <Globe className="w-4 h-4 mr-2" />
                          Country *
                        </Label>
                        <Input
                          id="country"
                          type="text"
                          required
                          value={formData.country}
                          onChange={(e) => handleInputChange("country", e.target.value)}
                          placeholder="Enter your country"
                          className="h-11"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phoneNumber" className="flex items-center">
                          <Phone className="w-4 h-4 mr-2" />
                          Phone Number
                        </Label>
                        <Input
                          id="phoneNumber"
                          type="tel"
                          value={formData.phoneNumber}
                          onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                          placeholder="Enter your phone number"
                          className="h-11"
                        />
                      </div>
                    </div>
                  </div>

                  {/* IEEE Membership */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">IEEE Membership</h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="ieeeMember"
                          checked={formData.isIEEEMember}
                          onCheckedChange={(checked) =>
                            handleInputChange("isIEEEMember", coerceBool(checked))
                          }
                        />
                        <Label htmlFor="ieeeMember" className="text-base font-medium">
                          I am an IEEE Member
                        </Label>
                      </div>

                      {formData.isIEEEMember && (
                        <div className="space-y-2 ml-6">
                          <Label htmlFor="ieeeNumber" className="flex items-center">
                            <Hash className="w-4 h-4 mr-2" />
                            IEEE Membership Number *
                          </Label>
                          <Input
                            id="ieeeNumber"
                            type="text"
                            required={formData.isIEEEMember}
                            value={formData.ieeeNumber}
                            onChange={(e) => handleInputChange("ieeeNumber", e.target.value)}
                            placeholder="Enter your IEEE membership number"
                            className="h-11"
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Event Options */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">Event Options</h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="isStudent"
                          checked={formData.isStudent}
                          onCheckedChange={(checked) =>
                            handleInputChange("isStudent", coerceBool(checked))
                          }
                        />
                        <Label htmlFor="isStudent" className="text-base font-medium">
                          I am a student
                        </Label>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="galaDinner"
                          checked={formData.includesGalaDinner}
                          onCheckedChange={(checked) =>
                            handleInputChange("includesGalaDinner", coerceBool(checked))
                          }
                        />
                        <Label htmlFor="galaDinner" className="text-base font-medium">
                          Include Gala Dinner
                        </Label>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="trip"
                          checked={formData.includesTrip}
                          onCheckedChange={(checked) =>
                            handleInputChange("includesTrip", coerceBool(checked))
                          }
                        />
                        <Label htmlFor="trip" className="text-base font-medium">
                          Include Trip
                        </Label>
                      </div>
                    </div>
                  </div>

                  {/* Accommodation */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">Accommodation</h3>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="accommodation"
                        checked={formData.needsAccommodation}
                        onCheckedChange={(checked) =>
                          handleInputChange("needsAccommodation", coerceBool(checked))
                        }
                      />
                      <Label htmlFor="accommodation" className="text-base font-medium">
                        I need accommodation for 3 nights ($450 USD)
                      </Label>
                    </div>
                  </div>

                  {/* Payment Receipt Upload */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">Payment Receipt</h3>
                    <div className="space-y-2">
                      <Label htmlFor="receipt">Bank Transfer Receipt (Optional)</Label>
                      <div className="flex items-center justify-center w-full">
                        <label
                          htmlFor="receipt"
                          className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors"
                        >
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <Upload className="w-8 h-8 mb-4 text-gray-500" />
                            <p className="mb-2 text-sm text-gray-500">
                              <span className="font-semibold">Click to upload</span> or drag and drop
                            </p>
                            <p className="text-xs text-gray-500">PNG, JPG, WEBP, PDF (MAX. 10MB)</p>
                          </div>
                          <input
                            id="receipt"
                            type="file"
                            className="hidden"
                            accept="image/jpeg,image/png,image/webp,application/pdf"
                            onChange={handleFileChange}
                          />
                        </label>
                      </div>
                      {formData.receipt && (
                        <p className="text-sm text-green-600 flex items-center">
                          <Check className="w-4 h-4 mr-2" />
                          Selected: {formData.receipt.name}
                        </p>
                      )}
                    </div>
                  </div>

                  <Button type="submit" className="w-full h-12 text-lg text-white" disabled={isLoading}>
                    {isLoading ? "Registering..." : `Complete Registration - $${calculatePrice()} USD`}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Bank Transfer Instructions */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-xl font-heading font-bold text-purple-800 flex items-center">
                  <Building2 className="mr-2" size={20} />
                  Bank Transfer Instructions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <CopyableText text="090006286808" label="Account Number" />
                  <CopyableText text="JO73CAAB1100000000090006286808" label="IBAN" />
                  <CopyableText text="CAABJOAM" label="Swift Code" />
                  <CopyableText text="IEEE JORDAN SECTION" label="Account Name" />
                  <CopyableText text="Cairo Amman Bank" label="Bank Name" />
                  <CopyableText
                    text="University of Jordan Branch, Amman, Jordan"
                    label="Bank Address"
                  />
                </div>
                <Alert className="mt-4">
                  <AlertDescription>
                    Please upload your bank transfer receipt above to expedite the approval process.
                    If you don't have a receipt yet, you can register now and upload it later.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>

            {/* Existing User Receipt Upload */}
            {existingUser && (
              <div className="mt-6">
                <Card className="border-l-4 border-l-amber-500">
                  <CardHeader>
                    <CardTitle className="text-xl font-heading font-bold text-amber-800 flex items-center">
                      <User className="mr-2" size={20} />
                      Already Registered
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Alert className="mb-4 border-amber-200 bg-amber-50">
                      <AlertDescription className="text-amber-800">
                        <strong>You are already registered!</strong> If your status is UNPAID, upload your payment
                        receipt below to move to PENDING.
                      </AlertDescription>
                    </Alert>

                    <div className="bg-gray-50 rounded-lg p-4 mb-4">
                      <h4 className="font-semibold mb-2">Registration Details:</h4>
                      <p><strong>Name:</strong> {existingUser.name}</p>
                      <p><strong>Email:</strong> {existingUser.email}</p>
                      <p>
                        <strong>Status:</strong>
                        <span
                          className={`ml-2 px-2 py-1 rounded text-xs ${
                            existingUser.paymentStatus === "UNPAID"
                              ? "bg-red-100 text-red-800"
                              : existingUser.paymentStatus === "PENDING"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-green-100 text-green-800"
                          }`}
                        >
                          {existingUser.paymentStatus}
                        </span>
                      </p>
                    </div>

                    {existingUser.needsReceipt ? (
                      <ReceiptUploader
                        userId={existingUser.id}
                        userEmail={existingUser.email}
                        totalAmount={calculatePrice()}
                        onUploadSuccess={() => {
                          setExistingUser(null);
                          resetForm();
                          setIsSubmitted(true);
                          setSubmitMessage("Receipt received. Your registration is now PENDING approval.");
                          toast({
                            title: "Receipt Uploaded!",
                            description: "Pending admin approval.",
                          });
                        }}
                      />
                    ) : (
                      <Alert className="border-green-200 bg-green-50">
                        <AlertDescription className="text-green-800">
                          <strong>Payment Status:</strong>{" "}
                          {existingUser.paymentStatus === "PENDING"
                            ? "Your payment is pending approval."
                            : "Your payment has been approved!"}
                        </AlertDescription>
                      </Alert>
                    )}
                  </CardContent>
                </Card>
              </div>
            )}
          </div>

          {/* Event Info */}
          <div className="space-y-6">
            {/* Pricing Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-heading font-bold text-purple-800 flex items-center">
                  <DollarSign className="mr-2" size={20} />
                  Registration Fees
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                      <span className="font-medium">Student IEEE Member</span>
                      <span className="font-bold text-purple-800">$50</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium">IEEE Member (with Gala dinner + trip)</span>
                      <span className="font-bold text-purple-800">$100</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium">IEEE Member (without Gala dinner or trip)</span>
                      <span className="font-bold text-purple-800">$75</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium">Non-IEEE Member</span>
                      <span className="font-bold text-purple-800">$100</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium">Non-IEEE Member (with Gala dinner + trip)</span>
                      <span className="font-bold text-purple-800">$125</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-yellow-100 rounded-lg">
                      <span className="font-medium">With Accommodation</span>
                      <span className="font-bold text-purple-800">$450</span>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center text-lg font-bold">
                      <span>Your Total:</span>
                      <span className="text-purple-800">${calculatePrice()}</span>
                    </div>
                  </div>

                  <div className="space-y-2 text-sm text-gray-600">
                    <p><strong>Payment Method:</strong> Bank Transfer Only</p>
                    <p><strong>Currency:</strong> USD</p>
                    <p><strong>Deadline:</strong> December 1, 2025</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Event Details Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-heading font-bold text-purple-800">Event Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Calendar className="text-purple-800" size={20} />
                    <div>
                      <p className="font-semibold">December 6-8, 2025</p>
                      <p className="text-sm text-gray-600">3 Days</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="text-purple-800" size={20} />
                    <div>
                      <p className="font-semibold">Bristol Hotel, Amman</p>
                      <p className="text-sm text-gray-600">Conference Venue</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="text-purple-800" size={20} />
                    <div>
                      <p className="font-semibold">+962 7 9596 1458</p>
                      <p className="text-sm text-gray-600">Contact</p>
                    </div>
                  </div>
                  
                  {/* Hotel Image */}
                  <div className="mt-4">
                    <img
                      src="/hotel.jpg"
                      alt="Bristol Hotel, Amman"
                      className="w-full h-32 object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="text-purple-800" size={20} />
                    <div>
                      <p className="font-semibold">300+ Participants</p>
                      <p className="text-sm text-gray-600">International Attendees</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* What's Included */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-heading font-bold text-purple-800">What's Included</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-800 rounded-full" />
                    <span>All conference sessions</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-800 rounded-full" />
                    <span>Welcome & farewell receptions</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-800 rounded-full" />
                    <span>Networking lunch</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-800 rounded-full" />
                    <span>Conference materials</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-800 rounded-full" />
                    <span>Certificate of participation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
