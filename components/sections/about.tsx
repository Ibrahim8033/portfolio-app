"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

const technologies = [
  "JavaScript / TypeScript",
  "React.js / Next.js",
  "Node.js / Express.js",
  "PostgreSQL / MongoDB",
  "Prisma ORM / Supabase",
  "REST APIs / JWT Auth",
  "C++ / Java / Python",
  "Tailwind CSS / Git",
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

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                I&apos;m a 4th-year B.Tech Computer Science & Technology (CST) student at{" "}
                <span className="text-primary font-medium">Maharaja Agrasen Institute of Technology, Delhi</span>{" "}
                (CGPA: 8.14), with a Diploma in Engineering from{" "}
                <span className="text-primary font-medium">Jamia Millia Islamia, New Delhi</span>{" "}
                (77.025%).
              </p>
              <p className="text-muted-foreground leading-relaxed">
                As a hands-on full-stack developer, I specialize in React, Next.js, Node.js, TypeScript,
                PostgreSQL, and AI-powered applications. I build scalable backend architectures, design clean
                REST APIs, and integrate intelligent LLM workflows into responsive web experiences.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Recently, I built an end-to-end{" "}
                <span className="text-foreground font-medium">Perplexity AI Clone</span> with real-time
                Server-Sent Events streaming, multi-tier LLM fallback reasoning, persistent PostgreSQL conversation
                history via Prisma ORM, and Supabase OAuth authentication with JWT-based middleware.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I am an{" "}
                <span className="text-primary font-medium">
                  Oracle Cloud Infrastructure (OCI) 2025 Certified Generative AI Professional
                </span>
                , with hands-on knowledge of model lifecycles, prompt engineering, embeddings, and vector search.
                I am actively seeking software engineering jobs, internships, and entry-level opportunities.
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
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="lg:col-span-5 flex justify-center lg:justify-end pt-4 lg:pt-0"
            >
              <div className="relative group w-full max-w-[280px] sm:max-w-[320px] md:max-w-[340px] lg:max-w-[350px] aspect-square">
                {/* Clean professional accent frame */}
                <div className="absolute inset-0 rounded-2xl border-2 border-primary/30 translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4 -z-10 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2 group-hover:border-primary/60" />
                
                {/* Glow accent */}
                <div className="absolute -inset-2 bg-primary/10 rounded-3xl blur-xl -z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Profile Image Container */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden border border-border/80 bg-card shadow-xl transition-all duration-300 group-hover:border-primary/40">
                  <Image
                    src="/profile-photo.png"
                    alt="MD Ibrahim Khan"
                    fill
                    className="object-cover object-top rounded-2xl transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 280px, (max-width: 1024px) 340px, 350px"
                    priority
                  />
                  {/* Subtle depth gradient at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background/30 to-transparent pointer-events-none rounded-b-2xl" />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
