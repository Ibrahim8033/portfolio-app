"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink, Github, Folder } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const featuredProjects = [
  {
    title: "AI Code Assistant",
    description:
      "A VS Code extension powered by GPT-4 that provides intelligent code suggestions, automated documentation, and bug detection. Built with TypeScript and Python, it helps developers write cleaner code faster.",
    tech: ["TypeScript", "Python", "OpenAI API", "VS Code API"],
    github: "https://github.com",
    live: "https://marketplace.visualstudio.com",
    image: "/images/project-ai-assistant.jpg",
  },
  {
    title: "Neural Style Transfer App",
    description:
      "A web application that uses deep learning to apply artistic styles to images in real-time. Features a custom-trained CNN model and intuitive drag-and-drop interface.",
    tech: ["React", "TensorFlow.js", "Python", "Flask"],
    github: "https://github.com",
    live: "https://demo.com",
    image: "/images/project-neural-style.jpg",
  },
  {
    title: "Smart Campus Navigator",
    description:
      "An AR-powered mobile app for campus navigation that provides real-time indoor positioning, accessibility routes, and event information. Won 1st place at University Hackathon.",
    tech: ["React Native", "ARKit", "Node.js", "MongoDB"],
    github: "https://github.com",
    live: "https://apps.apple.com",
    image: "/images/project-campus-navigator.jpg",
  },
]

const otherProjects = [
  {
    title: "Sentiment Analysis Dashboard",
    description: "Real-time social media sentiment analysis tool using NLP and data visualization.",
    tech: ["Python", "NLTK", "D3.js", "FastAPI"],
    github: "https://github.com",
    live: "https://demo.com",
  },
  {
    title: "Blockchain Voting System",
    description: "Decentralized voting platform ensuring transparency and security for elections.",
    tech: ["Solidity", "Web3.js", "React", "IPFS"],
    github: "https://github.com",
  },
  {
    title: "Task Management CLI",
    description: "A powerful command-line tool for managing tasks with natural language processing.",
    tech: ["Rust", "SQLite", "OpenAI"],
    github: "https://github.com",
  },
  {
    title: "Weather Prediction ML Model",
    description: "Machine learning model for hyper-local weather predictions using historical data.",
    tech: ["Python", "scikit-learn", "Pandas", "Streamlit"],
    github: "https://github.com",
    live: "https://demo.com",
  },
  {
    title: "Portfolio Website Generator",
    description: "CLI tool that generates beautiful portfolio websites from markdown files.",
    tech: ["Node.js", "Handlebars", "Tailwind CSS"],
    github: "https://github.com",
  },
  {
    title: "Real-time Chat Application",
    description: "End-to-end encrypted chat app with video calling and file sharing capabilities.",
    tech: ["Next.js", "WebRTC", "Socket.io", "PostgreSQL"],
    github: "https://github.com",
    live: "https://demo.com",
  },
]

const filters = ["All", "AI/ML", "Web", "Mobile", "Tools"]

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeFilter, setActiveFilter] = useState("All")
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
            Things {"I've"} Built
            <span className="h-px bg-border flex-1 max-w-xs" />
          </h2>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(filter)}
                className={
                  activeFilter === filter
                    ? "bg-primary text-primary-foreground"
                    : "border-primary/50 text-primary hover:bg-primary/10"
                }
              >
                {filter}
              </Button>
            ))}
          </div>

          {/* Featured Projects */}
          <div className="space-y-24 mb-24">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2 }}
                className={`relative grid md:grid-cols-12 gap-4 items-center ${
                  index % 2 === 0 ? "" : "md:text-right"
                }`}
              >
                {/* Project Image */}
                <div
                  className={`md:col-span-7 ${
                    index % 2 === 0 ? "md:order-1" : "md:order-2"
                  }`}
                >
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative group rounded-lg overflow-hidden"
                  >
                    <div className="aspect-video rounded-lg relative overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 60vw"
                      />
                    </div>
                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-300" />
                  </a>
                </div>

                {/* Project Content */}
                <div
                  className={`md:col-span-6 md:row-start-1 ${
                    index % 2 === 0
                      ? "md:col-start-6 md:order-2"
                      : "md:col-start-1 md:order-1"
                  }`}
                >
                  <p className="text-primary font-mono text-sm mb-2">Featured Project</p>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      {project.title}
                    </a>
                  </h3>
                  <div className="glass p-6 rounded-lg mb-4 relative z-10">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <ul
                    className={`flex flex-wrap gap-3 mb-4 text-sm font-mono text-muted-foreground ${
                      index % 2 === 0 ? "md:justify-end" : ""
                    }`}
                  >
                    {project.tech.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                  <div
                    className={`flex gap-4 ${
                      index % 2 === 0 ? "md:justify-end" : ""
                    }`}
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary transition-colors"
                      aria-label="View GitHub repository"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary transition-colors"
                      aria-label="View live demo"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </div>
                </div>
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
                <ul className="flex flex-wrap gap-2 text-xs font-mono text-muted-foreground">
                  {project.tech.map((t) => (
                    <li key={t}>{t}</li>
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
