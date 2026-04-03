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
  Cpu,
  GitBranch,
} from "lucide-react"

const skillCategories = [
  {
    name: "Frontend",
    icon: Globe,
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Vue.js", level: 75 },
    ],
  },
  {
    name: "Backend",
    icon: Server,
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Python", level: 92 },
      { name: "Java", level: 80 },
      { name: "Go", level: 65 },
    ],
  },
  {
    name: "AI / ML",
    icon: Brain,
    skills: [
      { name: "TensorFlow", level: 85 },
      { name: "PyTorch", level: 82 },
      { name: "NLP", level: 78 },
      { name: "Computer Vision", level: 75 },
    ],
  },
  {
    name: "Tools & Others",
    icon: Wrench,
    skills: [
      { name: "Git / GitHub", level: 95 },
      { name: "Docker", level: 85 },
      { name: "AWS / GCP", level: 80 },
      { name: "CI/CD", level: 78 },
    ],
  },
]

const techIcons = [
  { name: "React", icon: Code2 },
  { name: "Python", icon: Cpu },
  { name: "Database", icon: Database },
  { name: "Git", icon: GitBranch },
  { name: "AI", icon: Brain },
  { name: "Cloud", icon: Server },
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

          {/* Floating Tech Icons */}
          <div className="flex flex-wrap justify-center gap-6 mb-16">
            {techIcons.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.1, type: "spring" }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="glass p-4 rounded-xl"
              >
                <tech.icon className="h-8 w-8 text-primary" />
              </motion.div>
            ))}
          </div>

          {/* Skill Categories */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + categoryIndex * 0.1 }}
                className="glass p-6 rounded-xl"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <category.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">
                    {category.name}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-muted-foreground">
                          {skill.name}
                        </span>
                        <span className="text-sm text-primary font-mono">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{
                            delay: 0.5 + categoryIndex * 0.1 + skillIndex * 0.1,
                            duration: 0.8,
                            ease: "easeOut",
                          }}
                          className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full"
                        />
                      </div>
                    </div>
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
