"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Award, ExternalLink } from "lucide-react"

const certifications = [
  {
    title: "Oracle Cloud Infrastructure (OCI) 2025 Certified Generative AI Professional",
    issuer: "Oracle",
    date: "2025",
    highlights: [
      "Gained in-depth understanding of Generative AI model lifecycle, deployment on OCI, and Oracle AI services in real-world architectures",
      "Hands-on knowledge of prompt engineering, embeddings, vector search, and building secure, scalable AI solutions",
    ],
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=0E159E1438557DD9F36D4550B86C215FE318F4F003EF083E1C2D6E356AA4AE1E",
    badge: "🏅",
  },
  {
    title: "AI Tools Skill Up",
    issuer: "GeeksforGeeks",
    date: "2025",
    highlights: [
      "Developed understanding of prompt engineering and AI content generation",
      "Worked with AI tools to generate structured outputs and improve responses",
    ],
    link: "",
    badge: "📜",
  },
]

export function CertificationsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="certifications" className="py-24 px-6 bg-secondary/30" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="flex items-center gap-4 text-2xl md:text-3xl font-bold text-foreground mb-10">
            <span className="text-primary font-mono text-lg md:text-xl">05.</span>
            Certifications
            <span className="h-px bg-border flex-1 max-w-xs" />
          </h2>

          <div className="grid gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.15 }}
                className="glass p-6 rounded-xl relative overflow-hidden group"
              >
                {/* Accent line */}
                <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-primary to-primary/30" />

                <div className="pl-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{cert.badge}</span>
                      <div>
                        <h3 className="text-lg font-bold text-foreground">
                          {cert.title}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-primary font-medium text-sm">{cert.issuer}</span>
                          <span className="text-muted-foreground text-xs">• {cert.date}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      {cert.link && (
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-mono text-primary hover:underline bg-primary/10 px-2.5 py-1 rounded-md transition-colors hover:bg-primary/20"
                        >
                          Verify <ExternalLink className="h-3 w-3 ml-0.5" />
                        </a>
                      )}
                      <Award className="h-6 w-6 text-primary/50 shrink-0" />
                    </div>
                  </div>

                  <ul className="space-y-1.5 mt-4">
                    {cert.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="text-primary mt-0.5 shrink-0">▹</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
