"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import {
  ArrowRight,
  ExternalLink,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { OPEN_CONTACT_PANEL_EVENT, openContactPanel } from "@/lib/contact-panel"

const contactGroups = [
  {
    title: "Call us",
    icon: Phone,
    accent: "from-[#f97316]/30 via-[#f97316]/10 to-transparent",
    items: [
      {
        label: "+91 9827551707",
        href: "tel:+919827551707",
        helper: "Om Wadhwani",
      },
      {
        label: "+91 8770785576",
        href: "tel:+918770785576",
        helper: "Jay Ninawe",
      },
    ],
  },
  {
    title: "LinkedIn",
    icon: Linkedin,
    accent: "from-[#3b82f6]/30 via-[#3b82f6]/10 to-transparent",
    items: [
      {
        label: "Om Wadhwani",
        href: "https://www.linkedin.com/in/om-wadhwani/",
        helper: "linkedin.com/in/om-wadhwani",
      },
      {
        label: "Jay Ninawe",
        href: "https://www.linkedin.com/in/jay-ninawe-78081121a/",
        helper: "linkedin.com/in/jay-ninawe-78081121a",
      },
    ],
  },
  {
    title: "Email",
    icon: Mail,
    accent: "from-[#22c55e]/30 via-[#22c55e]/10 to-transparent",
    items: [
      {
        label: "omwwadhwani@gmail.com",
        href: "mailto:omwwadhwani@gmail.com",
        helper: "Drop us the brief",
      },
    ],
  },
  {
    title: "Location",
    icon: MapPin,
    accent: "from-[#a855f7]/30 via-[#a855f7]/10 to-transparent",
    items: [
      {
        label: "Jabalpur | Madhya Pradesh",
        href: "https://www.google.com/maps/search/Jabalpur,+Madhya+Pradesh",
        helper: "India",
      },
    ],
  },
] as const

export function Contact() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleOpen = () => setOpen(true)

    window.addEventListener(OPEN_CONTACT_PANEL_EVENT, handleOpen)
    return () => window.removeEventListener(OPEN_CONTACT_PANEL_EVENT, handleOpen)
  }, [])

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

          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <motion.button
                type="button"
                className="group inline-flex items-center gap-3 rounded-sm bg-[#f97316] px-8 py-4 font-medium text-[#0a0a0a] shadow-[0_18px_40px_rgba(249,115,22,0.18)] transition-colors hover:bg-[#ea580c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f97316] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={openContactPanel}
              >
                Get in touch
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
              </motion.button>
            </DialogTrigger>

            <DialogContent className="overflow-hidden border-white/10 bg-[#0c0c0c] p-0 text-white shadow-[0_30px_120px_rgba(0,0,0,0.6)] sm:max-w-3xl">
              <div className="relative">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.16),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.16),transparent_35%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.05),transparent_30%,transparent_70%,rgba(255,255,255,0.04))]" />

                <div className="relative p-6 sm:p-8">
                  <DialogHeader className="space-y-3 text-left">
                    <DialogTitle className="pr-10 font-[family-name:var(--font-script)] text-4xl leading-none text-white sm:text-5xl">
                      Reach OJ Labs
                    </DialogTitle>
                    <DialogDescription className="max-w-2xl text-sm text-white/60 sm:text-base">
                      Pick the channel that feels easiest and {"we'll"} take it from there.
                    </DialogDescription>
                  </DialogHeader>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    {contactGroups.map((group, groupIndex) => {
                      const Icon = group.icon

                      return (
                        <motion.div
                          key={group.title}
                          initial={{ opacity: 0, y: 18 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.35, delay: groupIndex * 0.08 }}
                          className="group/card relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm sm:p-5"
                        >
                          <div className={`absolute inset-0 bg-gradient-to-br ${group.accent} opacity-0 transition-opacity duration-300 group-hover/card:opacity-100`} />
                          <div className="relative">
                            <div className="mb-4 flex items-center gap-3">
                              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-[#f97316] transition-transform duration-300 group-hover/card:scale-105 group-hover/card:rotate-3">
                                <Icon className="h-5 w-5" />
                              </div>
                              <div>
                                <h3 className="font-[family-name:var(--font-script)] text-3xl leading-none text-white">
                                  {group.title}
                                </h3>
                              </div>
                            </div>

                            <div className="space-y-3">
                              {group.items.map((item) => (
                                <motion.a
                                  key={item.label}
                                  href={item.href}
                                  target={item.href.startsWith("http") ? "_blank" : undefined}
                                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                                  whileHover={{ x: 4 }}
                                  whileTap={{ scale: 0.985 }}
                                  className="flex items-center justify-between gap-4 rounded-2xl border border-white/8 bg-black/20 px-4 py-3 text-left transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.06]"
                                >
                                  <div className="min-w-0">
                                    <p className="font-hand truncate text-[1.9rem] leading-none text-white sm:text-[2.25rem]">
                                      {item.label}
                                    </p>
                                    <p className="mt-2 truncate text-xs uppercase tracking-[0.22em] text-white/45">
                                      {item.helper}
                                    </p>
                                  </div>
                                  <ExternalLink className="h-4 w-4 shrink-0 text-white/45 transition-transform duration-300 group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5" />
                                </motion.a>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </motion.div>

        {/* Decorative shapes */}
        <motion.div 
          className="mt-16 flex items-end gap-1.5 sm:mt-20"
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
