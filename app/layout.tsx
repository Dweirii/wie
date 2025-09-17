import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Open_Sans } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Toaster } from "@/components/ui/toaster"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
})

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "IEEE WIE International Leadership Summit 2025 - Jordan",
  description:
    "Join us for the IEEE Women in Engineering International Leadership Summit 2025 in Amman, Jordan. December 6-8, 2025.",
  keywords: "IEEE, WIE, Women in Engineering, Leadership Summit, Jordan, Amman, 2025",
  authors: [{ name: "IEEE WIE Jordan Section" }],
  openGraph: {
    title: "IEEE WIE International Leadership Summit 2025 - Jordan",
    description:
      "Join us for the IEEE Women in Engineering International Leadership Summit 2025 in Amman, Jordan. December 6-8, 2025.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/wie-logo.png",
        width: 800,
        height: 600,
        alt: "IEEE WIE International Leadership Summit 2025 Jordan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IEEE WIE International Leadership Summit 2025 - Jordan",
    description:
      "Join us for the IEEE Women in Engineering International Leadership Summit 2025 in Amman, Jordan. December 6-8, 2025.",
    images: ["/images/wie-logo.png"],
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable}`}>
      <head>
        <link rel="icon" href="/images/wie-logo.png" />
      </head>
      <body className="font-body bg-white text-gray-900 antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}
