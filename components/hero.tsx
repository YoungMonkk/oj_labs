"use client"

import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import { useRef } from "react"

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.4,
  })

  const underlinePathLength = useTransform(smoothProgress, [0.1, 0.45], [0.15, 1])
  const underlineOpacity = useTransform(smoothProgress, [0.05, 0.25], [0.2, 1])
  const underlineY = useTransform(smoothProgress, [0, 1], [8, -6])

  const shapesY = useTransform(smoothProgress, [0, 1], [48, -24])
  const shapesOpacity = useTransform(smoothProgress, [0.05, 0.25], [0, 1])
  const circleShift = useTransform(smoothProgress, [0, 1], [0, 18])
  const circleShiftTwo = useTransform(circleShift, (value) => value * 0.7)
  const circleShiftThree = useTransform(circleShift, (value) => value * 0.45)
  const circleShiftFour = useTransform(circleShift, (value) => value * 0.25)
  const squareShift = useTransform(smoothProgress, [0, 1], [0, -20])
  const squareShiftTwo = useTransform(squareShift, (value) => value * 0.75)
  const triangleLift = useTransform(smoothProgress, [0, 1], [18, -14])
  const triangleLiftX = useTransform(triangleLift, (value) => value * 0.5)
  const triangleLiftTwo = useTransform(triangleLift, (value) => value * 0.8)
  const triangleLiftThree = useTransform(triangleLift, (value) => value * 0.6)
  const xRotation = useTransform(smoothProgress, [0, 1], [-18, 36])
  const blueTriangleRotation = useTransform(smoothProgress, [0, 1], [-12, 14])
  const redSquareRotation = useTransform(smoothProgress, [0, 1], [0, -12])
  const yellowSquareRotation = useTransform(smoothProgress, [0, 1], [0, 10])
  const amberTriangleRotation = useTransform(smoothProgress, [0, 1], [-8, 12])
  const orangeTriangleRotation = useTransform(smoothProgress, [0, 1], [-6, 18])

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center pt-20 pb-20 px-6 md:px-12">
      {/* Dotted Background Pattern */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }}
      />
      
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Left Content - takes 3 columns */}
          <div className="lg:col-span-3 space-y-6">
            {/* Main Headline */}
            <motion.h1 
              className="text-3xl md:text-4xl lg:text-5xl leading-tight text-white/50"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              We are{" "}
              <span className="relative inline-block">
                <span className="text-white font-medium">OJ Labs</span>
                <motion.svg
                  className="absolute -bottom-1 left-0 w-full h-2" 
                  viewBox="0 0 100 8" 
                  fill="none"
                  preserveAspectRatio="none"
                  style={{ opacity: underlineOpacity, y: underlineY }}
                >
                  <motion.path
                    d="M0 6C30 2 70 2 100 6" 
                    stroke="#f97316" 
                    strokeWidth="3" 
                    strokeLinecap="round"
                    fill="none"
                    style={{ pathLength: underlinePathLength }}
                  />
                </motion.svg>
              </span>{" "}
              delivering extraordinary web development & designing services for all scales of businesses....
              <span className="text-[#f97316] ml-1">{"》》"}</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.div 
              className="pt-8 space-y-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p className="font-[family-name:var(--font-script)] text-2xl md:text-3xl text-white">
                Web Development Studio
              </p>
              <p className="text-xs tracking-[0.2em] text-white/50 uppercase">
                Crafting digital experiences for{" "}
                <span className="text-[#f97316]">Startups</span>,{" "}
                <span className="text-[#22c55e]">Small Businesses</span>,{" "}
                <span className="text-[#3b82f6]">Enterprises</span>
              </p>
            </motion.div>
          </div>

          {/* Right Side - Polaroid Card - takes 2 columns */}
          <motion.div 
            className="lg:col-span-2 relative hidden lg:flex justify-center"
            initial={{ opacity: 0, rotate: -5 }}
            animate={{ opacity: 1, rotate: 3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Handwritten annotation */}
            <div className="absolute -top-12 right-4 z-20">
              <p className="font-[family-name:var(--font-script)] text-xl text-white/60">
                {"Hi, We're OJ Labs"}
              </p>
              <svg className="absolute -bottom-4 right-0 w-8 h-8 text-[#f97316]" viewBox="0 0 24 24" fill="none">
                <path d="M12 4v12m0 0l-4-4m4 4l4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            {/* Polaroid card */}
            <div className="relative w-64 transform hover:rotate-0 transition-transform duration-300">
              {/* Tape decorations */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-[#f472b6]/70 transform -rotate-6 z-10" />
              <div className="absolute -top-2 right-6 w-12 h-5 bg-[#2dd4bf]/70 transform rotate-12 z-10" />
              
              <div className="bg-white p-3 shadow-2xl">
                <div className="aspect-square bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] flex items-center justify-center border border-white/10">
                  <span className="font-[family-name:var(--font-script)] text-7xl text-[#f97316]">OJ</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Decorative shapes at bottom */}
        <motion.div 
          className="flex items-end gap-1.5 mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{ y: shapesY, opacity: shapesOpacity }}
        >
          {/* Circles */}
          <motion.div className="w-8 h-8 rounded-full bg-[#991b1b]" style={{ y: circleShift }} />
          <motion.div className="w-8 h-8 rounded-full bg-[#4f46e5]" style={{ y: circleShiftTwo }} />
          <motion.div className="w-8 h-8 rounded-full bg-[#db2777]" style={{ y: circleShiftThree }} />
          <motion.div className="w-8 h-8 rounded-full bg-[#eab308]" style={{ y: circleShiftFour }} />
          
          <div className="w-20" />
          
          {/* X shape */}
          <motion.div className="relative w-8 h-8" style={{ rotate: xRotation, y: triangleLiftX }}>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-6 h-1.5 bg-[#dc2626] rotate-45" />
              <div className="w-6 h-1.5 bg-[#dc2626] -rotate-45 absolute" />
            </div>
          </motion.div>
          
          {/* Triangles and squares */}
          <motion.div className="w-0 h-0 border-l-[14px] border-l-transparent border-r-[14px] border-r-transparent border-b-[24px] border-b-[#1e3a8a]" style={{ y: triangleLift, rotate: blueTriangleRotation }} />
          <motion.div className="w-8 h-8 bg-[#b91c1c]" style={{ y: squareShift, rotate: redSquareRotation }} />
          <motion.div className="w-8 h-8 bg-[#eab308]" style={{ y: squareShiftTwo, rotate: yellowSquareRotation }} />
          <motion.div className="w-0 h-0 border-l-[14px] border-l-transparent border-r-[14px] border-r-transparent border-b-[24px] border-b-[#ca8a04]" style={{ y: triangleLiftTwo, rotate: amberTriangleRotation }} />
          <motion.div className="w-0 h-0 border-l-[14px] border-l-transparent border-r-[14px] border-r-transparent border-b-[24px] border-b-[#f59e0b]" style={{ y: triangleLiftThree, rotate: orangeTriangleRotation }} />
        </motion.div>
      </div>
    </section>
  )
}
