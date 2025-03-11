"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Mail, Github, Linkedin } from "lucide-react"

export default function Contact() {
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
        <h1 className="text-3xl md:text-4xl font-light mb-12 text-white">연락하기</h1>

        <p className="text-lg mb-12 leading-relaxed">
          현재 새로운 기회와 협업에 열려 있습니다. 프로젝트가 있으시거나 그냥 인사를 나누고 싶으시다면 언제든지 연락해
          주세요.
        </p>

        <div className="space-y-6">
          <a href="mailto:qkrsuzxc123@gmail.com" className="flex items-center hover:text-white transition-colors">
            <Mail className="mr-4 h-5 w-5" />
            <span>qkrsuzxc123@gmail.com</span>
          </a>

          <a
            href="https://github.com/Sugwan-p"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-white transition-colors"
          >
            <Github className="mr-4 h-5 w-5" />
            <span>github.com/Sugwan-p</span>
          </a>

          <a
            href="https://linkedin.com/in/sugwan-p"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-white transition-colors"
          >
            <Linkedin className="mr-4 h-5 w-5" />
            <span>linkedin.com/in/sugwan-p</span>
          </a>
        </div>
      </motion.div>
    </main>
  )
}

