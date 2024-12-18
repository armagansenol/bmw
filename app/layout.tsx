import type { Metadata } from "next"
import { Alexandria } from "next/font/google"
import "./globals.css"

const alexandria = Alexandria({
  variable: "--font-alexandria",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${alexandria.variable} antialiased`}>{children}</body>
    </html>
  )
}
