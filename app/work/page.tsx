"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"

export default function Work() {
  const projects = [
    {
      title: "프로젝트 하나",
      description: "Next.js와 Tailwind CSS로 구축된 반응형 웹 애플리케이션입니다.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],
      link: "#",
    },
    {
      title: "프로젝트 둘",
      description: "성능과 접근성에 중점을 둔 이커머스 플랫폼입니다.",
      tags: ["React", "Redux", "Styled Components"],
      link: "#",
    },
    {
      title: "프로젝트 셋",
      description: "데이터 모니터링 및 시각화를 위한 대시보드 인터페이스입니다.",
      tags: ["Next.js", "D3.js", "Framer Motion"],
      link: "#",
    },
  ]

  return (
    <main className="min-h-screen p-8 md:p-16">
      <Link href="/" className="inline-flex items-center text-sm mb-16 hover:text-white transition-colors">
        <ArrowLeft className="mr-2 h-4 w-4" />
        돌아가기
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-3xl md:text-4xl font-light mb-12 text-white">작업물</h1>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="border border-[#1d2d50] p-6 rounded-lg hover:border-[#8892b0]/50 transition-colors"
            >
              <h2 className="text-2xl font-light text-white mb-4">{project.title}</h2>
              <p className="mb-6 opacity-80">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="text-xs px-3 py-1 rounded-full bg-[#1d2d50] text-[#8892b0]">
                    {tag}
                  </span>
                ))}
              </div>

              <Link href={project.link} className="inline-flex items-center text-sm hover:text-white transition-colors">
                프로젝트 보기 <ExternalLink className="ml-2 h-3 w-3" />
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </main>
  )
}

