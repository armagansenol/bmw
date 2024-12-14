import Footer from "@/components/shared/footer"
import Header from "@/components/shared/header"
import ProjectCard from "@/components/shared/project-card"

const projects = [
  {
    title: "PROJECT NAME",
    tags: ["WEB DESIGN", "WEB DEVELOPMENT"],
    description:
      "WE HAVE CREATED A MODERN, MINIMALISTIC LOGO THAT BLENDS THE CONCEPTS OF ENERGY AND ENVIRONMENTAL FRIENDLINESS.",
    image: "/img/placeholder.jpg",
    slug: "project-1",
  },
  {
    title: "PROJECT NAME",
    tags: ["WEB DESIGN", "WEB DEVELOPMENT"],
    description:
      "WE HAVE CREATED A MODERN, MINIMALISTIC LOGO THAT BLENDS THE CONCEPTS OF ENERGY AND ENVIRONMENTAL FRIENDLINESS.",
    image: "/img/placeholder.jpg",
    slug: "project-2",
  },
  {
    title: "PROJECT NAME",
    tags: ["WEB DESIGN", "WEB DEVELOPMENT"],
    description:
      "WE HAVE CREATED A MODERN, MINIMALISTIC LOGO THAT BLENDS THE CONCEPTS OF ENERGY AND ENVIRONMENTAL FRIENDLINESS.",
    image: "/img/placeholder.jpg",
    slug: "project-3",
  },
  {
    title: "PROJECT NAME",
    tags: ["WEB DESIGN", "WEB DEVELOPMENT"],
    description:
      "WE HAVE CREATED A MODERN, MINIMALISTIC LOGO THAT BLENDS THE CONCEPTS OF ENERGY AND ENVIRONMENTAL FRIENDLINESS.",
    image: "/img/placeholder.jpg",
    slug: "project-4",
  },
  {
    title: "PROJECT NAME",
    tags: ["WEB DESIGN", "WEB DEVELOPMENT"],
    description:
      "WE HAVE CREATED A MODERN, MINIMALISTIC LOGO THAT BLENDS THE CONCEPTS OF ENERGY AND ENVIRONMENTAL FRIENDLINESS.",
    image: "/img/placeholder.jpg",
    slug: "project-5",
  },
  {
    title: "PROJECT NAME",
    tags: ["WEB DESIGN", "WEB DEVELOPMENT"],
    description:
      "WE HAVE CREATED A MODERN, MINIMALISTIC LOGO THAT BLENDS THE CONCEPTS OF ENERGY AND ENVIRONMENTAL FRIENDLINESS.",
    image: "/img/placeholder.jpg",
    slug: "project-6",
  },
]

export default function ProjectsGrid() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 space-y-4">
            <h2 className="text-3xl font-bold">TRANSFORMING IDEAS INTO BYTES -</h2>
            <p className="text-3xl font-bold">EXPLORE OUR WORK!</p>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
