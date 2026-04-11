"use client"

import { motion } from "framer-motion"
import { ProjectCard } from "./project-card"

// Placeholder projects - replace with your actual projects
const projects = [
  {
    title: "Designing trust at the first touchpoint of investing.",
    description: "Helping investors understand their portfolio with clarity and confidence through intuitive mobile design.",
    year: "2025",
    category: "MOBILE APP DESIGN",
    images: [""], // Add your project screenshot here
    colors: {
      bg: "#16a34a",
      border1: "#7c3aed",
      border2: "#eab308",
      border3: "#dc2626",
      border4: "#7c3aed",
    },
  },
  {
    title: "E-commerce platform that converts visitors to customers.",
    description: "A complete overhaul of the shopping experience, focusing on conversion optimization and user delight.",
    year: "2024",
    category: "WEB DESIGN",
    images: [""], // Add your project screenshot here
    colors: {
      bg: "#2563eb",
      border1: "#f97316",
      border2: "#22c55e",
      border3: "#ec4899",
      border4: "#f97316",
    },
  },
  {
    title: "SaaS dashboard that makes data actionable.",
    description: "Building powerful analytics tools that make data accessible and actionable for business teams.",
    year: "2024",
    category: "WEB APPLICATION",
    images: [""], // Add your project screenshot here
    colors: {
      bg: "#7c3aed",
      border1: "#06b6d4",
      border2: "#f59e0b",
      border3: "#10b981",
      border4: "#06b6d4",
    },
  },
]

export function Projects() {
  return (
    <section id="works" className="py-24 px-6 md:px-12 relative">
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
            Our Works
          </h2>
          <p className="text-white/50 text-base max-w-lg">
            A selection of projects that showcase our expertise in creating digital experiences that matter.
          </p>
        </motion.div>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
