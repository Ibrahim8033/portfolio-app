"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

const technologies = [
  "JavaScript / TypeScript",
  "React / Next.js",
  "Node.js / Express",
  "PostgreSQL / MongoDB",
  "Prisma ORM / Supabase",
  "Gemini / OpenAI APIs",
  "Tailwind CSS",
  "Git / GitHub",
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
                I&apos;m a 4th-year B.Tech Computer Science student at{" "}
                <span className="text-primary">Maharaja Agrasen Institute of Technology, Delhi</span>,
                with a strong focus on AI engineering and full-stack development.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I specialize in building production-ready applications that integrate large
                language models, real-time data streaming, and modern web architectures. My
                recent work includes a full-stack AI search engine with Server-Sent Events,
                multi-level LLM fallback chains, and secure OAuth authentication — going
                beyond tutorial-level projects into real engineering.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I hold an{" "}
                <span className="text-primary">
                  Oracle Cloud Infrastructure Generative AI Professional
                </span>{" "}
                certification, validating my expertise in prompt engineering, vector search,
                embeddings, and enterprise AI deployment.
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
                    src="/Logo.png"
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
