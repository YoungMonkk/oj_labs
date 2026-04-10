"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface ProjectCardProps {
  title: string
  description: string
  year: string
  category: string
  images: string[]
  colors: {
    bg: string
    border1: string
    border2: string
    border3: string
    border4: string
  }
}

export function ProjectCard({
  title,
  description,
  year,
  category,
  images,
  colors,
}: ProjectCardProps) {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7 }}
    >
      {/* Main card container with stamp edges */}
      <div className="relative">
        {/* Stamp/torn edges - positioned outside the main card */}
        {/* Top edge */}
        <div 
          className="absolute -top-2.5 left-4 right-4 h-2.5 z-20"
          style={{
            backgroundColor: colors.border1,
            clipPath: 'polygon(0% 100%, 2% 0%, 4% 100%, 6% 0%, 8% 100%, 10% 0%, 12% 100%, 14% 0%, 16% 100%, 18% 0%, 20% 100%, 22% 0%, 24% 100%, 26% 0%, 28% 100%, 30% 0%, 32% 100%, 34% 0%, 36% 100%, 38% 0%, 40% 100%, 42% 0%, 44% 100%, 46% 0%, 48% 100%, 50% 0%, 52% 100%, 54% 0%, 56% 100%, 58% 0%, 60% 100%, 62% 0%, 64% 100%, 66% 0%, 68% 100%, 70% 0%, 72% 100%, 74% 0%, 76% 100%, 78% 0%, 80% 100%, 82% 0%, 84% 100%, 86% 0%, 88% 100%, 90% 0%, 92% 100%, 94% 0%, 96% 100%, 98% 0%, 100% 100%)'
          }}
        />
        
        {/* Right edge */}
        <div 
          className="absolute top-4 -right-2.5 w-2.5 bottom-4 z-20"
          style={{
            backgroundColor: colors.border2,
            clipPath: 'polygon(0% 0%, 100% 2%, 0% 4%, 100% 6%, 0% 8%, 100% 10%, 0% 12%, 100% 14%, 0% 16%, 100% 18%, 0% 20%, 100% 22%, 0% 24%, 100% 26%, 0% 28%, 100% 30%, 0% 32%, 100% 34%, 0% 36%, 100% 38%, 0% 40%, 100% 42%, 0% 44%, 100% 46%, 0% 48%, 100% 50%, 0% 52%, 100% 54%, 0% 56%, 100% 58%, 0% 60%, 100% 62%, 0% 64%, 100% 66%, 0% 68%, 100% 70%, 0% 72%, 100% 74%, 0% 76%, 100% 78%, 0% 80%, 100% 82%, 0% 84%, 100% 86%, 0% 88%, 100% 90%, 0% 92%, 100% 94%, 0% 96%, 100% 98%, 0% 100%)'
          }}
        />
        
        {/* Bottom edge */}
        <div 
          className="absolute -bottom-2.5 left-4 right-4 h-2.5 z-20"
          style={{
            backgroundColor: colors.border3,
            clipPath: 'polygon(0% 0%, 2% 100%, 4% 0%, 6% 100%, 8% 0%, 10% 100%, 12% 0%, 14% 100%, 16% 0%, 18% 100%, 20% 0%, 22% 100%, 24% 0%, 26% 100%, 28% 0%, 30% 100%, 32% 0%, 34% 100%, 36% 0%, 38% 100%, 40% 0%, 42% 100%, 44% 0%, 46% 100%, 48% 0%, 50% 100%, 52% 0%, 54% 100%, 56% 0%, 58% 100%, 60% 0%, 62% 100%, 64% 0%, 66% 100%, 68% 0%, 70% 100%, 72% 0%, 74% 100%, 76% 0%, 78% 100%, 80% 0%, 82% 100%, 84% 0%, 86% 100%, 88% 0%, 90% 100%, 92% 0%, 94% 100%, 96% 0%, 98% 100%, 100% 0%)'
          }}
        />
        
        {/* Left edge */}
        <div 
          className="absolute top-4 -left-2.5 w-2.5 bottom-4 z-20"
          style={{
            backgroundColor: colors.border4,
            clipPath: 'polygon(100% 0%, 0% 2%, 100% 4%, 0% 6%, 100% 8%, 0% 10%, 100% 12%, 0% 14%, 100% 16%, 0% 18%, 100% 20%, 0% 22%, 100% 24%, 0% 26%, 100% 28%, 0% 30%, 100% 32%, 0% 34%, 100% 36%, 0% 38%, 100% 40%, 0% 42%, 100% 44%, 0% 46%, 100% 48%, 0% 50%, 100% 52%, 0% 54%, 100% 56%, 0% 58%, 100% 60%, 0% 62%, 100% 64%, 0% 66%, 100% 68%, 0% 70%, 100% 72%, 0% 74%, 100% 76%, 0% 78%, 100% 80%, 0% 82%, 100% 84%, 0% 86%, 100% 88%, 0% 90%, 100% 92%, 0% 94%, 100% 96%, 0% 98%, 100% 100%)'
          }}
        />

        {/* Main card content */}
        <div 
          className="relative rounded-sm overflow-hidden"
          style={{ backgroundColor: colors.bg }}
        >
          <div className="flex flex-col lg:flex-row">
            {/* Left side - Text content */}
            <div className="lg:w-2/5 p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-white/80" />
              </div>
              
              <h3 className="font-[family-name:var(--font-script)] text-2xl md:text-3xl lg:text-4xl text-white leading-snug mb-6">
                {title}
              </h3>
              
              <p className="text-white/70 text-base leading-relaxed mb-8">
                {description}
              </p>
              
              <p className="text-xs tracking-[0.15em] text-white/50 uppercase">
                {year} / {category}
              </p>
            </div>

            {/* Right side - Screenshot */}
            <div className="lg:w-3/5 p-6 md:p-8 flex items-center justify-center">
              <div className="relative w-full">
                {images[0] ? (
                  <div className="relative rounded-lg overflow-hidden shadow-2xl">
                    <div className="aspect-[2560/1664] relative">
                      <Image
                        src={images[0]}
                        alt={`${title} screenshot`}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 768px) 100vw, 60vw"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="aspect-[2560/1664] rounded-lg bg-white/10 flex items-center justify-center">
                    <span className="text-white/30 text-sm">Project Screenshot</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
