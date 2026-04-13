"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const teamMembers = [
  {
    name: "Om Wadhwani",
    role: "Co-Founder & Developer",
    image: "/pfp/Oj_om.jpeg",
    tapeColor1: "#f97316",
    tapeColor2: "#ec4899",
  },
  {
    name: "Jay Ninave",
    role: "Co-Founder & Designer",
    image: "/pfp/oj_jay.jpeg",
    tapeColor1: "#22c55e",
    tapeColor2: "#06b6d4",
  },
]

export function Team() {
  return (
    <section id="team" className="py-24 px-6 md:px-12 relative">
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
            Our Team
          </h2>
          <p className="text-white/50 text-base">
            The creative minds behind OJ Labs
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-center gap-16 md:gap-24">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="relative"
              initial={{ opacity: 0, y: 40, rotate: index === 0 ? -3 : 3 }}
              whileInView={{ opacity: 1, y: 0, rotate: index === 0 ? -3 : 3 }}
              whileHover={{ rotate: 0, scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              {/* Polaroid card */}
              <div className="relative w-56">
                {/* Tape decorations */}
                <div 
                  className="absolute -top-2.5 left-6 w-14 h-5 transform -rotate-12 z-10"
                  style={{ backgroundColor: member.tapeColor1, opacity: 0.8 }}
                />
                <div 
                  className="absolute -top-2 right-8 w-10 h-4 transform rotate-6 z-10"
                  style={{ backgroundColor: member.tapeColor2, opacity: 0.8 }}
                />

                <div className="bg-white p-3 shadow-xl">
                  {/* Avatar */}
                  <div className="relative aspect-square overflow-hidden bg-[#0a0a0a]">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 224px, 224px"
                    />
                  </div>
                  
                  {/* Name */}
                  <div className="pt-3 pb-1 text-center">
                    <h3 className="text-base font-medium text-[#0a0a0a]">{member.name}</h3>
                    <p className="text-xs text-[#525252]">{member.role}</p>
                  </div>
                </div>
              </div>

              {/* Handwritten label */}
              <p 
                className={`font-hand text-2xl text-white/55 mt-4 ${index === 0 ? 'text-right' : 'text-left'}`}
              >
                {index === 0 ? 'Code wizard' : 'Design guru'}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
