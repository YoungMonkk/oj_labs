"use client"

import { motion } from "framer-motion"
import { Code2, Palette, Smartphone, Globe } from "lucide-react"

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies.",
    color: "#f97316",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centered design that converts visitors into customers.",
    color: "#22c55e",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Cross-platform mobile applications for iOS and Android.",
    color: "#3b82f6",
  },
  {
    icon: Globe,
    title: "Brand Identity",
    description: "Complete branding solutions from logos to brand guidelines.",
    color: "#a855f7",
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 px-6 md:px-12 relative">
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
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="hand-heading text-5xl md:text-6xl text-white mb-3">
            Services
          </h2>
          <p className="text-white/50 text-base max-w-lg">
            What we bring to the table
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group relative p-8 rounded-sm border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-colors"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div 
                className="w-12 h-12 rounded-sm flex items-center justify-center mb-6"
                style={{ backgroundColor: `${service.color}20` }}
              >
                <service.icon 
                  className="w-6 h-6" 
                  style={{ color: service.color }}
                />
              </div>
              
              <h3 className="text-xl font-medium text-white mb-3">
                {service.title}
              </h3>
              
              <p className="text-white/50 text-sm leading-relaxed">
                {service.description}
              </p>
              
              {/* Accent line */}
              <div 
                className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500"
                style={{ backgroundColor: service.color }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
