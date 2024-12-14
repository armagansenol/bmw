import Footer from "@/components/shared/footer"
import Header from "@/components/shared/header"
import { LogoText } from "@/components/shared/icons"
import Image from "next/image"

interface Project {
  title: string
  tags: string[]
  description: string
  image: string
}

const projects: Project[] = [
  {
    title: "PROJECT NAME",
    tags: ["WEB DESIGN", "WEB DEVELOPMENT"],
    description:
      "WE HAVE CREATED A MODERN, MINIMALISTIC LOGO THAT BLENDS THE CONCEPTS OF ENERGY AND ENVIRONMENTAL FRIENDLINESS.",
    image: "/img/placeholder.jpg",
  },
  {
    title: "PROJECT NAME",
    tags: ["WEB DESIGN", "WEB DEVELOPMENT"],
    description:
      "WE HAVE CREATED A MODERN, MINIMALISTIC LOGO THAT BLENDS THE CONCEPTS OF ENERGY AND ENVIRONMENTAL FRIENDLINESS.",
    image: "/img/placeholder.jpg",
  },
  {
    title: "PROJECT NAME",
    tags: ["WEB DESIGN", "WEB DEVELOPMENT"],
    description:
      "WE HAVE CREATED A MODERN, MINIMALISTIC LOGO THAT BLENDS THE CONCEPTS OF ENERGY AND ENVIRONMENTAL FRIENDLINESS.",
    image: "/img/placeholder.jpg",
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <section className="px-6 pt-12 pb-24">
        <div className="container">
          <div className="relative">
            <h1 className="text-[8vw] font-bold leading-none tracking-tighter">
              <LogoText />
            </h1>
          </div>
          <p className="text-xl mt-4">WEB DESIGN & DEV AGENCY</p>
          <p className="max-w-2xl mt-8 text-gray-400">
            WE COMBINE STRATEGY AND CREATIVITY WITH THE POWER OF TECHNOLOGY TO OFFER SOLUTIONS THAT ADAPT TO EVERY
            PLATFORM IN THE DIGITAL SPACE.
          </p>
        </div>
      </section>
      <section className="relative h-[600px] w-full">
        <Image src="/img/placeholder.jpg" alt="Aurora Background" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/20" />
        <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white hover:text-gray-200 transition-colors">
          [ PLAY SHOWREEL ]
        </button>
      </section>
      <section className="px-6 py-24 bg-black">
        <div className="container grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-bold mb-8">OUR CAPABILITIES</h2>
            <p className="text-gray-400 max-w-xl">
              WE LOVE BEING A TRUSTED PARTNER IN THE DIGITAL WORLD FOR BRANDS AND STARTUPS. UNDERSTANDING YOUR NEEDS,
              WE&apos;RE THERE WITH SOLUTIONS AT EVERY STEP.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-3xl font-bold">WEB DESIGN</h3>
            <h3 className="text-3xl font-bold">WEB DEVELOPMENT</h3>
            <h3 className="text-3xl font-bold">BRANDING</h3>
            <h3 className="text-3xl font-bold">CONTENT CREATION</h3>
            <h3 className="text-3xl font-bold">MOTION DESIGN</h3>
          </div>
        </div>
      </section>
      <section className="bg-black text-white py-16">
        <div className="container px-6">
          <div className="space-y-32">
            {projects.map((project, index) => (
              <div key={index} className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold">{project.title}</h2>
                  <div className="flex gap-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="text-sm text-gray-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-400 max-w-md">{project.description}</p>
                  <button className="text-white hover:text-gray-300 transition-colors">[ CLICK TO VIEW ]</button>
                </div>
                <div className={`relative h-[400px] ${index % 2 === 0 ? "md:order-last" : ""}`}>
                  <Image src={project.image} alt={project.title} fill className="object-cover rounded-lg" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
