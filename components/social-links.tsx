"use client"

import { Github, Gitlab, Book } from "lucide-react"
import { motion } from "framer-motion"

export function SocialLinks() {
  const links = [
    { icon: Book, href: "#", label: "Blog" },
    { icon: Github, href: "https://github.com/Sugwan-p", label: "GitHub" },
    { icon: Gitlab, href: "#", label: "GitLab" },
  ]

  return (
    <motion.div
      className="fixed left-10 bottom-0 hidden md:block"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <div className="flex flex-col items-center gap-6">
        <div className="flex flex-col gap-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-[#40F8D2] rounded text-[#40F8D2] hover:bg-[#40F8D2]/10 transition-colors"
              aria-label={link.label}
            >
              <link.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
        <div className="w-[1px] h-32 bg-[#8892b0]" />
      </div>
    </motion.div>
  )
}

