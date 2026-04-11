"use client"

import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

interface ProjectCardProps {
  title: string
  client: string
  year: string
  coverImage: string
  background: string
  accent: string
  index: number
  total: number
  onOpen: () => void
}

export function ProjectCard({
  title,
  client,
  year,
  coverImage,
  background,
  accent,
  index,
  total,
  onOpen,
}: ProjectCardProps) {
  const cardRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  })

  const imageY = useTransform(scrollYProgress, [0, 0.5, 1], [36, 0, -24])
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.06, 1.01, 0.98])
  const contentY = useTransform(scrollYProgress, [0, 0.5, 1], [28, 0, -18])
  const contentOpacity = useTransform(scrollYProgress, [0.05, 0.3, 1], [0.55, 1, 1])

  return (
    <motion.article
      ref={cardRef}
      layoutId={`project-card-${client}`}
      className="sticky top-24"
      style={{ zIndex: total + 10 - index }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -20% 0px" }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-12">
        <motion.div
          className="max-w-xl space-y-5"
          style={{ y: contentY, opacity: contentOpacity }}
        >
          <p className="text-xs uppercase tracking-[0.32em] text-white/45">
            {year} / Live Website
          </p>
          <h3 className="text-3xl leading-[1.02] text-white md:text-4xl lg:text-5xl">
            {title}
          </h3>
          <p className="max-w-lg text-sm leading-7 text-white/62 md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <div className="flex items-center gap-3 text-sm text-white/55">
            <span className="rounded-full border border-white/12 bg-white/5 px-4 py-2">
              {client}
            </span>
            <span>Scroll to explore</span>
          </div>
        </motion.div>

        <div className="flex justify-end">
          <button
            type="button"
            onClick={onOpen}
            className="group block w-full max-w-4xl text-left lg:max-w-3xl"
            aria-label={`Open ${client} project gallery`}
          >
            <div
              className="relative overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_24px_70px_rgba(0,0,0,0.38)]"
              style={{
                background: `linear-gradient(145deg, ${background}, ${accent})`,
              }}
            >
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),transparent_30%,transparent_75%,rgba(0,0,0,0.12))]" />

              <div className="relative space-y-5 p-4 md:space-y-6 md:p-5">
                <div className="relative overflow-hidden rounded-[1.35rem] border border-white/12 bg-black/20">
                  <motion.div className="relative aspect-[16/9]" style={{ y: imageY, scale: imageScale }}>
                    <Image
                      src={coverImage}
                      alt={`${client} homepage screenshot`}
                      fill
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      sizes="(max-width: 1024px) 100vw, 56vw"
                      priority={index === 0}
                    />
                  </motion.div>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <div className="space-y-2">
                    <p className="text-[0.7rem] uppercase tracking-[0.32em] text-white/55">
                      Featured screen
                    </p>
                    <p className="text-lg text-white md:text-xl">{client}</p>
                  </div>

                  <div className="flex items-center gap-3 rounded-full border border-white/15 bg-black/18 px-4 py-2.5 text-sm text-white/72 transition-colors group-hover:bg-black/28 group-hover:text-white">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
                    <span className="uppercase tracking-[0.24em] text-[0.68rem] text-white/55">Open</span>
                  </div>
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </motion.article>
  )
}
