import Header from "@/components/shared/header"
import Image from "next/image"
import Link from "next/link"

export default function WorkDetail() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Back Link */}
        <Link href="/works" className="inline-block mb-16 hover:text-gray-300 transition-colors">
          [ BACK TO WORKS ]
        </Link>

        {/* Project Content */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold leading-none tracking-tighter">
              PROJECT NAME
              <br />
              PROJECT NAME
            </h1>

            <p className="text-lg text-gray-300 max-w-xl">
              THIS CASE STUDY DETAILS THE E-COMMERCE WEBSITE REDESIGN PROJECT WE CONDUCTED FOR [COMPANY NAME].
            </p>
          </div>

          <div className="relative">
            <Image
              src="/placeholder.svg"
              alt="Project Preview"
              width={800}
              height={600}
              className="w-full object-cover rounded-lg"
            />

            <Link href="#start-project" className="absolute bottom-4 right-4 hover:text-gray-300 transition-colors">
              [ START A PROJECT ]
            </Link>
          </div>
        </div>

        {/* Project Details */}
        <div className="grid md:grid-cols-4 gap-8 mt-24 border-t border-gray-800 pt-12">
          <div>
            <h2 className="text-lg font-medium mb-4">CLIENT</h2>
            <p className="text-gray-400">BLA BLA BLA BLABLA</p>
          </div>

          <div>
            <h2 className="text-lg font-medium mb-4">DATE</h2>
            <p className="text-gray-400">2024</p>
          </div>

          <div>
            <h2 className="text-lg font-medium mb-4">DELIVERABLES</h2>
            <ul className="space-y-2 text-gray-400">
              <li>WEB DESIGN</li>
              <li>WEB DEVELOPMENT</li>
            </ul>
          </div>

          <div className="text-right">
            <Link href="#visit-website" className="inline-block hover:text-gray-300 transition-colors">
              [ VISIT WEBSITE ]
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
