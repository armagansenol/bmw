import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Navigation */}
        <nav className="mb-16">
          <ul className="flex space-x-8">
            <li>
              <Link href="/works" className="hover:text-gray-300 transition-colors">
                WORKS
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-300 transition-colors">
                CONTACT
              </Link>
            </li>
          </ul>
        </nav>

        {/* Main Footer Content */}
        <div className="relative">
          {/* Copyright and Location */}
          <div className="absolute top-0 left-0 text-sm text-gray-400 space-y-2">
            <p>2024, ALL RIGHTS RESERVED</p>
            <p>BASED IN ISTANBUL</p>
          </div>

          {/* Logo */}
          <h2 className="text-[8vw] font-bold leading-none tracking-tighter text-white">BYTE MY WORK</h2>

          {/* Social Links */}
          <div className="absolute top-0 right-0 flex space-x-6 text-sm">
            <Link
              href="https://dribbble.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
            >
              [ DRIBBBLE ]
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
            >
              [ INSTAGRAM ]
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
            >
              [ LINKEDIN ]
            </Link>
          </div>

          {/* 3D Object */}
          <div className="absolute left-[50%] top-1/2 transform -translate-y-1/2">
            <Image src="/placeholder.svg" alt="Golden 3D Object" width={200} height={200} className="object-contain" />
          </div>
        </div>
      </div>
    </footer>
  )
}
