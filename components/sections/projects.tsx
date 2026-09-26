"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Github } from "lucide-react"

const featuredProjects = [
  {
    title: "Perplexity AI Clone — AI-Powered Search Engine",
    description:
      "A full-stack AI-powered search engine inspired by Perplexity AI that delivers real-time, cited answers by combining web search with LLM reasoning. The app streams AI-generated responses with inline source citations, conversation history management, and user authentication.",
    highlights: [
      "Real-time streaming responses using Server-Sent Events with multi-level LLM fallback (Gemini → Vercel AI Gateway → Web Synthesis)",
      "Persistent conversation history with full CRUD operations backed by PostgreSQL via Prisma ORM",
      "Secure authentication using Supabase (Google/GitHub OAuth) with JWT-based API middleware",
      "Inline source citations combined with web search integration for factual, verifiable AI responses",
    ],
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma ORM", "Supabase", "Gemini API", "SSE", "Tailwind CSS", "REST API", "JWT"],
    github: "https://github.com/Ibrahim8033",
    live: "https://perplexity-ai-oauv.vercel.app/",
  },
  {
    title: "Developer Portfolio Platform",
    description:
      "Modern, performant developer portfolio engineered with Next.js, TypeScript, Tailwind CSS, and Framer Motion. Built to present real-world projects, architecture decisions, certifications, and technical background with dark/light theme support and responsive design.",
    highlights: [
      "Engineered with Next.js App Router and TypeScript for optimal web performance and type safety",
      "Interactive UI with smooth Framer Motion animations and particle background",
      "Clean, recruiter-friendly design showcasing verified technical experience and verifiable certifications",
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/Ibrahim8033/portfolio-app",
    live: "https://ibrahimkhan.in/",
  },
]

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="py-24 px-6" ref={ref}>
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="flex items-center gap-4 text-2xl md:text-3xl font-bold text-foreground mb-10">
            <span className="text-primary font-mono text-lg md:text-xl">02.</span>
            Featured Projects
            <span className="h-px bg-border flex-1 max-w-xs" />
          </h2>

          {/* Featured Projects */}
          <div className="space-y-12">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2 }}
                className="glass p-8 rounded-2xl relative overflow-hidden group"
              >
                {/* Gradient accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary/70 to-transparent" />
                
                <div className="flex items-center justify-between mb-4">
                  <p className="text-primary font-mono text-sm">Featured Engineering Project</p>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="View GitHub repository"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    {project.live && project.live !== "#" && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="View live demo"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                  {project.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Engineering highlights */}
                <div className="mb-6">
                  <p className="text-sm font-medium text-foreground mb-3">Key Technical Highlights:</p>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="text-primary mt-0.5 shrink-0">▹</span>
                        <span>{highlight}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <ul className="flex flex-wrap gap-2 text-xs font-mono">
                  {project.tech.map((t) => (
                    <li
                      key={t}
                      className="px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
