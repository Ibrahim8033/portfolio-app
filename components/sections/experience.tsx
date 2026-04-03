"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Briefcase, GraduationCap } from "lucide-react"

const experiences = [
  {
    type: "work",
    title: "Software Engineering Intern",
    company: "Google",
    companyUrl: "https://google.com",
    location: "Mountain View, CA",
    date: "Jun 2025 - Aug 2025",
    description: [
      "Developed and deployed ML models for improving search relevance, resulting in a 15% improvement in user engagement metrics",
      "Built internal tools using React and TypeScript to streamline developer workflows",
      "Collaborated with cross-functional teams to integrate AI features into Google Assistant",
    ],
  },
  {
    type: "work",
    title: "Research Assistant",
    company: "Stanford AI Lab",
    companyUrl: "https://ai.stanford.edu",
    location: "Stanford, CA",
    date: "Sep 2024 - Present",
    description: [
      "Conducting research on large language models and their applications in code generation",
      "Published paper on neural code synthesis at NeurIPS 2025",
      "Mentoring undergraduate students in machine learning fundamentals",
    ],
  },
  {
    type: "work",
    title: "Full-Stack Developer",
    company: "TechStart",
    companyUrl: "https://techstart.com",
    location: "Remote",
    date: "May 2024 - Aug 2024",
    description: [
      "Built scalable web applications using Next.js, Node.js, and PostgreSQL",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
      "Led the development of a real-time collaboration feature used by 10,000+ users",
    ],
  },
]

const education = [
  {
    type: "education",
    title: "Bachelor of Science in Computer Science",
    company: "Stanford University",
    companyUrl: "https://stanford.edu",
    location: "Stanford, CA",
    date: "2022 - 2026 (Expected)",
    description: [
      "GPA: 3.95/4.0 - Dean&apos;s List all semesters",
      "Concentration in Artificial Intelligence",
      "Relevant coursework: Machine Learning, Deep Learning, Algorithms, Systems",
    ],
  },
]

const allItems = [...experiences, ...education]

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeTab, setActiveTab] = useState<"all" | "work" | "education">("all")

  const filteredItems = activeTab === "all" 
    ? allItems 
    : allItems.filter(item => item.type === activeTab)

  return (
    <section id="experience" className="py-24 px-6" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="flex items-center gap-4 text-2xl md:text-3xl font-bold text-foreground mb-10">
            <span className="text-primary font-mono text-lg md:text-xl">04.</span>
            Experience & Education
            <span className="h-px bg-border flex-1 max-w-xs" />
          </h2>

          {/* Tabs */}
          <div className="flex gap-4 mb-12 justify-center">
            {[
              { id: "all", label: "All" },
              { id: "work", label: "Experience", icon: Briefcase },
              { id: "education", label: "Education", icon: GraduationCap },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {tab.icon && <tab.icon className="h-4 w-4" />}
                {tab.label}
              </button>
            ))}
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            {filteredItems.map((item, index) => (
              <motion.div
                key={`${item.title}-${item.company}`}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className={`relative grid md:grid-cols-2 gap-8 mb-12 ${
                  index % 2 === 0 ? "" : "md:text-right"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 border-4 border-background z-10" />

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    index % 2 === 0
                      ? "md:pr-12 md:text-right"
                      : "md:col-start-2 md:pl-12 md:text-left"
                  }`}
                >
                  <div
                    className={`glass p-6 rounded-xl ${
                      index % 2 === 0 ? "md:ml-auto" : ""
                    } max-w-md`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      {item.type === "work" ? (
                        <Briefcase className="h-4 w-4 text-primary" />
                      ) : (
                        <GraduationCap className="h-4 w-4 text-primary" />
                      )}
                      <span className="text-primary font-mono text-xs">
                        {item.date}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <a
                      href={item.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline inline-flex items-center gap-1"
                    >
                      {item.company}
                    </a>
                    <p className="text-muted-foreground text-sm mt-1">
                      {item.location}
                    </p>

                    <ul className={`mt-4 space-y-2 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                      {item.description.map((desc, i) => (
                        <li
                          key={i}
                          className={`text-muted-foreground text-sm flex items-start gap-2 ${
                            index % 2 === 0 ? "md:flex-row-reverse" : ""
                          }`}
                        >
                          <span className="text-primary mt-1.5">▹</span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
