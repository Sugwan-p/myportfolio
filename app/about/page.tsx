"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function About() {
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
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-3xl md:text-4xl font-light mb-12 text-white">소개</h1>

        <div className="space-y-8 text-lg leading-relaxed">
          <p>
            안녕하세요, 깨끗하고 직관적이며 반응형 웹 애플리케이션을 만드는 것을 좋아하는 프론트엔드 개발자입니다.
            React와 Next.js 같은 현대적인 JavaScript 프레임워크를 전문으로 하며, 항상 새로운 기술을 탐구하여 제 기술을
            향상시키고 있습니다.
          </p>

          <p>
            개발에 대한 제 접근 방식은 사용자 경험, 성능 및 유지 관리성에 중점을 둡니다. 훌륭한 코드는 잘 작동할 뿐만
            아니라 이해하고 확장하기 쉬워야 한다고 생각합니다.
          </p>

          <h2 className="text-2xl font-light mt-12 mb-6 text-white">기술</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-white mb-3">프론트엔드</h3>
              <ul className="space-y-2 opacity-80">
                <li>React / Next.js</li>
                <li>TypeScript</li>
                <li>HTML / CSS</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>

            <div>
              <h3 className="text-white mb-3">도구 및 기타</h3>
              <ul className="space-y-2 opacity-80">
                <li>Git / GitHub</li>
                <li>Figma</li>
                <li>Jest / Testing Library</li>
                <li>CI/CD</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </main>
  )
}

