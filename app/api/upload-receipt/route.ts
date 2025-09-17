import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { saveFile } from '@/lib/upload'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const receipt = formData.get('receipt') as File | null
    const userId = formData.get('userId') as string

    if (!receipt || !userId) {
      return NextResponse.json(
        { error: 'Receipt file and user ID are required' },
        { status: 400 }
      )
    }

    // Check if user exists
    const user = await prisma.user.findUnique({
      where: { id: userId }
    })

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      )
    }

    // Save the receipt file
    const receiptUrl = await saveFile(receipt)

    // Update user with receipt URL and set status to PENDING
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        receiptUrl,
        paymentStatus: 'PENDING'
      }
    })

    return NextResponse.json({
      success: true,
      message: 'Receipt uploaded successfully',
      user: {
        id: updatedUser.id,
        paymentStatus: updatedUser.paymentStatus,
        receiptUrl: updatedUser.receiptUrl
      }
    })

  } catch (error) {
    console.error('Receipt upload error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
