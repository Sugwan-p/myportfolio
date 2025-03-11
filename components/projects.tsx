"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink, Github } from "lucide-react"

// 프로젝트 템플릿 - 나중에 실제 프로젝트로 채울 수 있습니다
const projectTemplates = [
  {
    id: 1,
    title: "프로젝트 제목 1",
    description: "프로젝트에 대한 간략한 설명을 입력하세요.",
    image: "/placeholder.svg?height=600&width=800",
    category: "web",
    technologies: ["React", "Next.js", "Tailwind CSS"],
    demoLink: "#",
    githubLink: "#",
  },
  {
    id: 2,
    title: "프로젝트 제목 2",
    description: "프로젝트에 대한 간략한 설명을 입력하세요.",
    image: "/placeholder.svg?height=600&width=800",
    category: "app",
    technologies: ["React Native", "Firebase"],
    demoLink: "#",
    githubLink: "#",
  },
  {
    id: 3,
    title: "프로젝트 제목 3",
    description: "프로젝트에 대한 간략한 설명을 입력하세요.",
    image: "/placeholder.svg?height=600&width=800",
    category: "web",
    technologies: ["Vue.js", "Node.js", "MongoDB"],
    demoLink: "#",
    githubLink: "#",
  },
]

export default function Projects() {
  const [category, setCategory] = useState("all")

  const filteredProjects =
    category === "all" ? projectTemplates : projectTemplates.filter((project) => project.category === category)

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container">
        <div className="flex items-center justify-center mb-12">
          <h2 className="text-4xl font-bold">PROJECTS</h2>
          <div className="w-16 h-1 bg-[#ff6b45] ml-4"></div>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="all" onClick={() => setCategory("all")} className="px-6">
                All
              </TabsTrigger>
              <TabsTrigger value="web" onClick={() => setCategory("web")} className="px-6">
                Web
              </TabsTrigger>
              <TabsTrigger value="app" onClick={() => setCategory("app")} className="px-6">
                App
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="web" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="app" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

function ProjectCard({ project }) {
  return (
    <Card className="overflow-hidden group">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span key={index} className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="flex items-center gap-1" asChild>
            <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4" /> Demo
            </a>
          </Button>
          <Button variant="outline" size="sm" className="flex items-center gap-1" asChild>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" /> Code
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

