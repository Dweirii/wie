"use client"

import { Alert, AlertDescription } from "@/components/ui/alert"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign, Upload, CheckCircle, AlertCircle } from "lucide-react"

interface PaymentHintProps {
  totalAmount: number
  hasReceipt: boolean
  className?: string
}

export function PaymentHint({ totalAmount, hasReceipt, className = "" }: PaymentHintProps) {
  return (
    <Card className={`border-l-4 border-l-blue-500 ${className}`}>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold text-blue-800 flex items-center">
          <DollarSign className="w-5 h-5 mr-2" />
          Payment Required
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="bg-blue-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="font-semibold text-blue-800">Total Amount:</span>
            <span className="text-2xl font-bold text-blue-800">${totalAmount} USD</span>
          </div>
          <p className="text-sm text-blue-700">
            Please complete your payment via bank transfer using the details below.
          </p>
        </div>

        <Alert className={hasReceipt ? "border-green-200 bg-green-50" : "border-amber-200 bg-amber-50"}>
          <div className="flex items-start space-x-2">
            {hasReceipt ? (
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
            ) : (
              <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5" />
            )}
            <AlertDescription className={hasReceipt ? "text-green-800" : "text-amber-800"}>
              {hasReceipt ? (
                <>
                  <strong>Receipt uploaded!</strong> Your payment is pending approval. 
                  You'll receive a confirmation email once approved.
                </>
              ) : (
                <>
                  <strong>Upload your receipt</strong> after making the bank transfer to expedite 
                  the approval process. You can also register now and upload the receipt later.
                </>
              )}
            </AlertDescription>
          </div>
        </Alert>

        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Upload className="w-4 h-4" />
          <span>Accepted formats: PNG, JPG, PDF (Max 10MB)</span>
        </div>
      </CardContent>
    </Card>
  )
}
