"use client"

import Image from "next/image"
import { motion } from "framer-motion"

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
  return (
    <motion.article
      layoutId={`project-card-${client}`}
      className="sticky top-24"
      style={{ zIndex: total + 10 - index }}
      initial={{ opacity: 0, y: 40, rotate: index % 2 === 0 ? -1.5 : 1.5 }}
      whileInView={{ opacity: 1, y: 0, rotate: index % 2 === 0 ? -1 : 1 }}
      viewport={{ once: true, margin: "-10% 0px -20% 0px" }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <button
        type="button"
        onClick={onOpen}
        className="group block w-full text-left"
        aria-label={`Open ${client} project gallery`}
      >
        <div
          className="relative overflow-hidden rounded-[2rem] border border-white/12 shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
          style={{
            background: `linear-gradient(145deg, ${background}, ${accent})`,
          }}
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 h-12 bg-[radial-gradient(circle_at_12px_24px,#050505_12px,transparent_13px)] bg-[length:40px_40px] opacity-95" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 rotate-180 bg-[radial-gradient(circle_at_12px_24px,#050505_12px,transparent_13px)] bg-[length:40px_40px] opacity-95" />
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 -rotate-90 bg-[radial-gradient(circle_at_12px_24px,#050505_12px,transparent_13px)] bg-[length:40px_40px] opacity-95" />
          <div className="pointer-events-none absolute inset-y-0 right-0 rotate-90 w-12 bg-[radial-gradient(circle_at_12px_24px,#050505_12px,transparent_13px)] bg-[length:40px_40px] opacity-95" />

          <div className="relative p-6 md:p-8">
            <div className="relative overflow-hidden rounded-[1.35rem] border border-white/12 bg-black/25">
              <div className="relative aspect-[16/10]">
                <Image
                  src={coverImage}
                  alt={`${client} homepage screenshot`}
                  fill
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 80vw"
                  priority={index === 0}
                />
              </div>
            </div>

            <div className="mt-5 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="max-w-3xl">
                <p className="text-xs uppercase tracking-[0.35em] text-white/55">
                  {year} / Live Website
                </p>
                <h3 className="mt-3 font-[family-name:var(--font-script)] text-3xl leading-[0.95] text-white md:text-5xl">
                  {title}
                </h3>
              </div>
              <div className="flex items-center gap-3 self-start rounded-full border border-white/15 bg-black/20 px-4 py-2 text-sm text-white/70 transition-colors group-hover:text-white">
                <span>{client}</span>
                <span className="text-white/35">open</span>
              </div>
            </div>
          </div>
        </div>
      </button>
    </motion.article>
  )
}
