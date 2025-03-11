"use client"

import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#8a7a6d]/10">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
        }}
      ></div>
      <div className="container relative z-10 text-center py-20">
        <h2 className="text-2xl md:text-3xl font-medium mb-4">- 박수관 -</h2>
        <h1 className="text-4xl md:text-6xl font-bold mb-8">프론트 엔드 개발자 포트폴리오</h1>
        <div className="w-20 h-1 bg-[#ff6b45] mx-auto mb-8"></div>
        <p className="text-lg md:text-xl mb-4">안녕하세요.</p>
        <p className="text-lg md:text-xl mb-12">
          본질에 집중하는 프론트 엔드 개발자
          <br />
          박수관입니다.
        </p>
        <Button
          className="rounded-full bg-[#ff6b45] hover:bg-[#ff6b45]/90 text-white px-8 py-6"
          onClick={() => {
            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
          }}
        >
          더 알아보기 <ArrowDown className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  )
}

