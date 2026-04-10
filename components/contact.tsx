"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 relative">
      {/* Dotted Background Pattern */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-[family-name:var(--font-script)] text-4xl md:text-5xl text-white mb-3">
            {"Let's work together"}
          </h2>
          <p className="text-white/50 text-base mb-10">
            Have a project in mind? {"We'd"} love to hear about it.
          </p>
          
          <a 
            href="mailto:hello@ojlabs.com" 
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#f97316] text-[#0a0a0a] font-medium rounded-sm hover:bg-[#ea580c] transition-colors group"
          >
            Get in touch
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* Decorative shapes */}
        <motion.div 
          className="flex items-end gap-1.5 mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="w-6 h-6 rounded-full bg-[#f97316]" />
          <div className="w-6 h-6 rounded-full bg-[#22c55e]" />
          <div className="w-6 h-6 rounded-full bg-[#3b82f6]" />
          <div className="w-6 h-6 rounded-full bg-[#a855f7]" />
        </motion.div>
      </div>
    </section>
  )
}
