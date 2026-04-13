"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowUpRight, X } from "lucide-react"
import { ProjectCard } from "./project-card"

const projects = [
  {
    client: "Mindmatters",
    title: "Mindmatters Psychiatry",
    year: "2026",
    liveUrl: "https://www.mindmatterpsychiatry.com/",
    background: "#8b2a56",
    accent: "#451a34",
    coverImage: "/mindmatters/mindmatters-cover.png",
    images: [
      "/mindmatters/WhatsApp Image 2026-04-10 at 16.49.30.jpeg",
      "/mindmatters/WhatsApp Image 2026-04-10 at 16.51.23.jpeg",
      "/mindmatters/WhatsApp Image 2026-04-10 at 16.51.55.jpeg",
      "/mindmatters/WhatsApp Image 2026-04-10 at 16.52.22.jpeg",
      "/mindmatters/WhatsApp Image 2026-04-10 at 16.52.51.jpeg",
    ],
  },
  {
    client: "Diginext",
    title: "Diginext CMS",
    year: "2026",
    liveUrl: "https://cms.diginext.co.in/",
    background: "#1456d2",
    accent: "#0b1e66",
    images: [
      "/diginext/WhatsApp Image 2026-04-10 at 16.43.59.jpeg",
      "/diginext/WhatsApp Image 2026-04-10 at 16.45.26.jpeg",
      "/diginext/WhatsApp Image 2026-04-10 at 16.45.58.jpeg",
      "/diginext/WhatsApp Image 2026-04-10 at 16.46.31.jpeg",
    ],
  },
  {
    client: "Hirenext",
    title: "Hirenext India",
    year: "2026",
    liveUrl: "https://hirenextindia.com/",
    background: "#4c8b15",
    accent: "#213f07",
    images: [
      "/hirenext/Screenshot 2026-04-10 164840.png",
      "/hirenext/Screenshot 2026-04-10 164900.png",
      "/hirenext/Screenshot 2026-04-10 164939.png",
    ],
  },
  {
    client: "Plus 4 Academy",
    title: "Plus 4 Academy",
    year: "2026",
    liveUrl: "https://www.plus4academy.com/",
    background: "#cb6f14",
    accent: "#60300a",
    images: [
      "/plus4academy/Screenshot 2026-04-10 164436.png",
      "/plus4academy/Screenshot 2026-04-10 164511.png",
      "/plus4academy/Screenshot 2026-04-11 110524.png",
    ],
  },
]

export function Projects() {
  const [activeProject, setActiveProject] = useState<(typeof projects)[number] | null>(null)

  useEffect(() => {
    if (!activeProject) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [activeProject])

  return (
    <section id="works" className="relative overflow-hidden px-6 py-24 md:px-12">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
        }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent_18%,transparent_82%,rgba(255,255,255,0.03))]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-3 hand-heading text-5xl text-white md:text-6xl">
            Our Works
          </h2>
          <p className="max-w-2xl text-base text-white/50">
            Scroll through the stack and open any card to step inside the full project panel with every captured screen and a direct route to the live site.
          </p>
        </motion.div>

        <div className="relative space-y-4 md:space-y-6">
          {projects.map((project, index) => (
            <div
              key={project.client}
              className={index === projects.length - 1 ? "min-h-[84vh]" : "min-h-[84vh]"}
            >
              <ProjectCard
                title={project.title}
                client={project.client}
                year={project.year}
                coverImage={project.coverImage ?? project.images[0]}
                background={project.background}
                accent={project.accent}
                index={index}
                total={projects.length}
                onOpen={() => setActiveProject(project)}
              />
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeProject ? (
          <motion.div
            className="fixed inset-0 z-[120] overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <motion.div
              className="absolute inset-0 bg-black/55 backdrop-blur-md"
              onClick={() => setActiveProject(null)}
            />

            <div className="relative min-h-screen p-4 md:p-8">
              <motion.div
                layoutId={`project-card-${activeProject.client}`}
                className="mx-auto min-h-[calc(100vh-2rem)] max-w-7xl overflow-hidden rounded-[2.2rem] border border-white/12 shadow-[0_30px_120px_rgba(0,0,0,0.5)] md:min-h-[calc(100vh-4rem)]"
                style={{
                  background: `linear-gradient(160deg, ${activeProject.background}, ${activeProject.accent})`,
                }}
              >
                <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 md:px-8">
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-white/50">
                      {activeProject.year} / Case Study
                    </p>
                    <h3 className="mt-2 font-[family-name:var(--font-script)] text-3xl text-white md:text-5xl">
                      {activeProject.title}
                    </h3>
                  </div>

                  <button
                    type="button"
                    onClick={() => setActiveProject(null)}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/20 text-white transition-colors hover:bg-black/35"
                    aria-label="Close project gallery"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <div className="grid gap-8 px-5 py-6 md:px-8 md:py-8 lg:grid-cols-[minmax(0,1fr)_300px]">
                  <div className="grid gap-5 md:grid-cols-2">
                    {activeProject.images.map((image, index) => (
                      <motion.div
                        key={image}
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.35, delay: index * 0.06 }}
                        className={index === 0 ? "md:col-span-2" : ""}
                      >
                        <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/25">
                          <div className={`relative ${index === 0 ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
                            <Image
                              src={image}
                              alt={`${activeProject.client} screen ${index + 1}`}
                              fill
                              className="object-cover object-top"
                              sizes={index === 0 ? "(max-width: 1024px) 100vw, 70vw" : "(max-width: 1024px) 100vw, 35vw"}
                            />
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex flex-col justify-between gap-8 rounded-[1.75rem] border border-white/10 bg-black/18 p-5 md:p-6">
                    <div>
                      <p className="text-sm uppercase tracking-[0.3em] text-white/45">
                        Website Gallery
                      </p>
                      <p className="mt-4 text-white/70">
                        Open screens from the live build of {activeProject.client}. The first image is used as the cover in the project stack, and the rest expand here as a full-screen walkthrough.
                      </p>
                    </div>

                    <div className="space-y-3">
                      <Link
                        href={activeProject.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-3 font-[family-name:var(--font-script)] text-3xl text-white transition-all hover:translate-y-[-2px] hover:bg-white/16"
                      >
                        Visit now
                        <ArrowUpRight className="h-5 w-5" />
                      </Link>
                      <p className="text-sm text-white/45">
                        Opens {activeProject.liveUrl.replace(/^https?:\/\//, "")}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  )
}
