"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

const technologies = [
  "Python",
  "TypeScript",
  "React / Next.js",
  "Node.js",
  "TensorFlow / PyTorch",
  "PostgreSQL",
  "AWS / GCP",
  "Docker",
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 px-6" ref={ref}>
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="flex items-center gap-4 text-2xl md:text-3xl font-bold text-foreground mb-10">
            <span className="text-primary font-mono text-lg md:text-xl">01.</span>
            About Me
            <span className="h-px bg-border flex-1 max-w-xs" />
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Hello! {"I'm"} Ibrahim, a passionate Computer Science student with a deep 
                fascination for artificial intelligence and its potential to transform 
                the way we interact with technology. My journey in tech started when I 
                built my first website at 14, and since then, {"I've"} been hooked on 
                creating digital experiences.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Currently, {"I'm"} pursuing my {"Bachelor's"} in Computer Science at 
                <span className="text-primary"> Stanford University</span>, where I focus 
                on machine learning and software engineering. {"I've"} had the privilege 
                of working on projects ranging from AI-powered applications to 
                full-stack web platforms.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When {"I'm"} not coding, you can find me exploring the latest in AI 
                research, contributing to open-source projects, or mentoring fellow 
                students in programming.
              </p>

              <div className="pt-4">
                <p className="text-foreground mb-4">Technologies I work with:</p>
                <ul className="grid grid-cols-2 gap-2">
                  {technologies.map((tech, index) => (
                    <motion.li
                      key={tech}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <span className="text-primary">▹</span>
                      {tech}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="relative group"
            >
              <div className="relative">
                <div className="relative rounded-lg overflow-hidden aspect-square">
                  <Image
                    src="/images/profile.jpg"
                    alt="Ibrahim Khan"
                    fill
                    className="object-cover rounded-lg"
                    sizes="(max-width: 768px) 100vw, 300px"
                  />
                  <div className="absolute inset-0 bg-primary/20 mix-blend-multiply rounded-lg transition-opacity group-hover:opacity-0" />
                </div>
                <div className="absolute -inset-2 border-2 border-primary rounded-lg -z-10 translate-x-4 translate-y-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
