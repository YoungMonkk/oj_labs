"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

import { openContactPanel } from "@/lib/contact-panel"

const navLinks = [
  { href: "#works", label: "Works" },
  { href: "#services", label: "Services" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact" },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link 
          href="/" 
          className="hand-nav text-4xl text-white/80 hover:text-[#f97316] transition-colors"
        >
          oj
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            link.label === "Contact" ? (
              <button
                key={link.href}
                type="button"
                className="hand-nav text-[2rem] text-white/55 hover:text-white transition-colors"
                onClick={openContactPanel}
              >
                {link.label}
              </button>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="hand-nav text-[2rem] text-white/55 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            )
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white/80"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-md border-t border-white/10">
          <div className="flex flex-col items-center py-8 gap-6">
            {navLinks.map((link) => (
              link.label === "Contact" ? (
                <button
                  key={link.href}
                  type="button"
                  className="hand-nav text-4xl text-white/60 hover:text-white transition-colors"
                  onClick={() => {
                    setMobileMenuOpen(false)
                    openContactPanel()
                  }}
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hand-nav text-4xl text-white/60 hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
