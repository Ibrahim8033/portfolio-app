"use client"

import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex flex-col justify-center px-6 pt-28 sm:pt-32 md:pt-36 lg:pt-40 pb-16 sm:pb-20 md:pb-24 overflow-hidden"
    >
      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-4 sm:space-y-5 md:space-y-6"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-primary font-mono text-sm sm:text-base font-medium tracking-wide"
          >
            Hi, I&apos;m
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight text-balance"
          >
            MD Ibrahim Khan.
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-muted-foreground tracking-tight text-balance leading-tight"
          >
            Full-Stack Developer &amp; Software Engineer.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="max-w-xl text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed pt-1"
          >
            4th-year B.Tech Computer Science &amp; Technology student at{" "}
            <span className="text-primary font-medium">Maharaja Agrasen Institute of Technology (MAIT), Delhi</span>.
            Hands-on engineer building scalable backend systems, AI-powered applications, and modern web solutions.
            Actively seeking software engineering jobs, internships, and entry-level opportunities.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4 pt-2 sm:pt-4"
          >
            <Button
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base"
            >
              <a href="#projects">
                View My Work
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 px-8 py-6 text-base"
            >
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <FileText className="h-4 w-4 mr-2" />
                Download Resume
              </a>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-center gap-6 pt-6 sm:pt-8"
          >
            <motion.a
              href="https://github.com/Ibrahim8033"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ y: -3 }}
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/md-ibrahimkhan/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ y: -3 }}
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </motion.a>
            <motion.a
              href="https://leetcode.com/u/Ibrahim8033/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ y: -3 }}
              aria-label="LeetCode"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 4.818 3.593c.31.034.624.051.938.051.996 0 1.98-.242 2.871-.708.27-.142.529-.304.773-.485l3.545-3.567a1.378 1.378 0 0 0 .438-.991 1.378 1.378 0 0 0-1.378-1.378 1.378 1.378 0 0 0-.974.403l-3.32 3.342a3.176 3.176 0 0 1-2.247.935 3.197 3.197 0 0 1-2.261-.937 3.208 3.208 0 0 1-.937-2.266c0-.853.332-1.655.937-2.261l3.854-4.125 5.406-5.788A1.378 1.378 0 0 0 13.483 0zm4.218 8.082a1.378 1.378 0 0 0-1.378 1.378c0 .365.143.715.398.974l2.125 2.125-2.125 2.125a1.378 1.378 0 0 0 .974 2.352 1.378 1.378 0 0 0 .974-.403l3.1-3.1a1.378 1.378 0 0 0 0-1.948l-3.1-3.1a1.378 1.378 0 0 0-.968-.403z" />
              </svg>
            </motion.a>
            <motion.a
              href="mailto:ibrahimdbg369@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ y: -3 }}
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="hidden lg:block absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-muted-foreground/60 hover:text-primary transition-colors flex flex-col items-center gap-1"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="h-5 w-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
