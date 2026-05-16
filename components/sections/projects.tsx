"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink, Github, Folder } from "lucide-react"
import { Button } from "@/components/ui/button"

const featuredProjects = [
  {
    title: "SearchAI — AI-Powered Search Engine",
    description:
      "A production-grade, full-stack AI search engine inspired by Perplexity AI. Delivers real-time, cited answers by combining web search with LLM reasoning. Features streaming responses with inline source citations, persistent conversation history, and multi-provider authentication.",
    highlights: [
      "Real-time streaming via Server-Sent Events with 3-tier LLM fallback (Gemini → Vercel AI Gateway → Web Synthesis)",
      "Persistent conversation history with full CRUD backed by PostgreSQL + Prisma ORM",
      "Secure OAuth (Google/GitHub) via Supabase with JWT-secured API middleware",
      "Optimized system prompts for production-quality AI responses across query types",
    ],
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Supabase", "Gemini API", "SSE", "Tailwind CSS"],
    github: "https://github.com/Ibrahim8033",
    live: "#",
  },
  {
    title: "TARS — AI-Powered Website Builder",
    description:
      "An AI-powered web application builder that generates complete, functional websites from natural language prompts. Users describe what they want, and TARS generates full HTML/CSS/JS with a live in-browser preview.",
    highlights: [
      "AI-driven code generation using Gemini API with structured output parsing",
      "Live in-browser preview using WebContainer API for real-time code execution",
      "Iterative refinement — users can modify generated sites through follow-up prompts",
      "Full project generation (HTML, CSS, JS) from a single natural language description",
    ],
    tech: ["React", "TypeScript", "Gemini API", "WebContainer API", "Node.js", "Tailwind CSS"],
    github: "https://github.com/Ibrahim8033",
    live: "#",
  },
]

const otherProjects = [
  {
    title: "Developer Portfolio",
    description: "This website — a modern, performant developer portfolio built with Next.js 16 featuring glassmorphism design, smooth animations, dark/light mode, and SEO optimization.",
    tech: ["Next.js 16", "TypeScript", "Tailwind CSS v4", "Framer Motion", "Vercel"],
    github: "https://github.com/Ibrahim8033",
    live: "#",
  },
  {
    title: "Event Management Platform",
    description: "A full-stack event management platform with user authentication, event creation, and real-time updates. Supports free and premium tiers with role-based access control.",
    tech: ["React", "Convex", "Clerk Auth", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/Ibrahim8033",
  },
  {
    title: "Real-time Chat System",
    description: "End-to-end chat application with real-time messaging, conversation management, and persistent message history backed by a relational database.",
    tech: ["Next.js", "Socket.io", "PostgreSQL", "Prisma", "TypeScript"],
    github: "https://github.com/Ibrahim8033",
  },
]

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [showAll, setShowAll] = useState(false)

  const displayedProjects = showAll ? otherProjects : otherProjects.slice(0, 3)

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
            Things I&apos;ve Built
            <span className="h-px bg-border flex-1 max-w-xs" />
          </h2>

          {/* Featured Projects */}
          <div className="space-y-20 mb-24">
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
                  <p className="text-primary font-mono text-sm">Featured Project</p>
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
                  <p className="text-sm font-medium text-foreground mb-3">Key Engineering Decisions:</p>
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

          {/* Other Projects */}
          <h3 className="text-center text-xl font-bold text-foreground mb-8">
            Other Noteworthy Projects
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass p-6 rounded-lg flex flex-col h-full group"
              >
                <div className="flex justify-between items-start mb-6">
                  <Folder className="h-10 w-10 text-primary" />
                  <div className="flex gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="View GitHub repository"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    )}
                    {project.live && (
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
                <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">
                  {project.description}
                </p>
                <ul className="flex flex-wrap gap-2 text-xs font-mono">
                  {project.tech.map((t) => (
                    <li
                      key={t}
                      className="px-2 py-0.5 rounded-full bg-primary/10 text-primary/80"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {otherProjects.length > 3 && (
            <div className="text-center mt-8">
              <Button
                variant="outline"
                onClick={() => setShowAll(!showAll)}
                className="border-primary text-primary hover:bg-primary/10"
              >
                {showAll ? "Show Less" : "Show More"}
              </Button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
