import { NextRequest, NextResponse } from 'next/server'
import { registerSchema } from '@/lib/validations'
import { prisma } from '@/lib/db'
import { saveFile } from '@/lib/upload'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const country = formData.get('country') as string
    const phoneNumber = formData.get('phoneNumber') as string
    const isIEEEMember = formData.get('isIEEEMember') === 'true'
    const ieeeNumber = formData.get('ieeeNumber') as string
    const needsAccommodation = formData.get('needsAccommodation') === 'true'
    const includesGalaDinner = formData.get('includesGalaDinner') === 'true'
    const includesTrip = formData.get('includesTrip') === 'true'
    const isStudent = formData.get('isStudent') === 'true'
    const receipt = formData.get('receipt') as File | null

    // Validate input
    const validation = registerSchema.safeParse({
      name,
      email,
      country,
      phoneNumber,
      isIEEEMember,
      ieeeNumber,
      needsAccommodation,
      includesGalaDinner,
      includesTrip,
      isStudent,
      receipt,
    })

    if (!validation.success) {
      return NextResponse.json(
        { error: 'Invalid input', details: validation.error.errors },
        { status: 400 }
      )
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email }
    })

    if (existingUser) {
      return NextResponse.json(
        {
          error: 'User with this email already exists',
          existingUser: {
            id: existingUser.id,
            name: existingUser.name,
            email: existingUser.email,
            paymentStatus: existingUser.paymentStatus,
            needsReceipt: existingUser.paymentStatus === 'UNPAID'
          }
        },
        { status: 409 }
      )
    }

    // Handle receipt upload
    let receiptUrl: string | undefined
    let paymentStatus: 'UNPAID' | 'PENDING' = 'UNPAID'

    if (receipt && receipt.size > 0) {
      receiptUrl = await saveFile(receipt)
      paymentStatus = 'PENDING'
    }

    // Create user
    const user = await prisma.user.create({
      data: {
        name,
        email,
        country,
        phoneNumber: phoneNumber || null,
        isIEEEMember,
        ieeeNumber: ieeeNumber || null,
        needsAccommodation,
        includesGalaDinner,
        includesTrip,
        isStudent,
        paymentStatus,
        receiptUrl,
      } as any,
    })

    return NextResponse.json({
      success: true,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        country: user.country,
        phoneNumber: user.phoneNumber,
        isIEEEMember: user.isIEEEMember,
        ieeeNumber: user.ieeeNumber,
        needsAccommodation: user.needsAccommodation,
        includesGalaDinner: (user as any).includesGalaDinner,
        includesTrip: (user as any).includesTrip,
        isStudent: (user as any).isStudent,
        paymentStatus: user.paymentStatus,
      },
      message: receiptUrl 
        ? 'Registration received, pending approval.'
        : 'Registration successful, payment required.'
    })

  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
