"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import {
  Code2,
  Database,
  Brain,
  Wrench,
  Globe,
  Server,
} from "lucide-react"

const skillCategories = [
  {
    name: "Languages",
    icon: Code2,
    skills: ["C++", "JavaScript", "TypeScript", "Java", "Python"],
  },
  {
    name: "Frontend Development",
    icon: Globe,
    skills: ["ReactJS", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "JavaScript"],
  },
  {
    name: "Backend & Architecture",
    icon: Server,
    skills: ["Node.js", "Express.js", "Next.js", "REST APIs", "JWT Authentication", "Server-Sent Events (SSE)"],
  },
  {
    name: "Database & ORM",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "Supabase", "Prisma ORM"],
  },
  {
    name: "AI & Generative AI",
    icon: Brain,
    skills: ["Gemini API", "LLM Reasoning", "Prompt Engineering", "Vector Search", "Embeddings", "OCI AI Services"],
  },
  {
    name: "Tools & Auth",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code", "Supabase Auth", "Google/GitHub OAuth", "API Middleware"],
  },
]

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-24 px-6 bg-secondary/30" ref={ref}>
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="flex items-center gap-4 text-2xl md:text-3xl font-bold text-foreground mb-10">
            <span className="text-primary font-mono text-lg md:text-xl">03.</span>
            Skills & Technologies
            <span className="h-px bg-border flex-1 max-w-xs" />
          </h2>

          {/* Skill Categories — Clean tag/chip layout, NO percentage bars */}
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + categoryIndex * 0.08 }}
                className="glass p-6 rounded-xl"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <category.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">
                    {category.name}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        delay: 0.4 + categoryIndex * 0.05 + skillIndex * 0.05,
                        type: "spring",
                      }}
                      className="px-3 py-1.5 text-sm rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
