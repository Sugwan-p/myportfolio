"use client"
import Link from "next/link"

export function Header() {
  const navItems = [
    { number: "01", title: "About", href: "#about" },
    { number: "02", title: "Skills", href: "#skills" },
    { number: "03", title: "Projects", href: "#projects" },
    { number: "04", title: "Contact", href: "#contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-6">
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-[#40F8D2]">
          <div className="border-2 border-[#40F8D2] w-10 h-10 flex items-center justify-center">
            <span className="text-xl font-bold">SG</span>
          </div>
        </Link>

        <ul className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <li key={item.number}>
              <Link href={item.href} className="text-[#8892b0] hover:text-[#40F8D2] transition-colors">
                <span className="text-[#40F8D2]">{item.number}.</span> {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

