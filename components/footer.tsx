"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Heart } from "lucide-react"

function LeetCodeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 4.818 3.593c.31.034.624.051.938.051.996 0 1.98-.242 2.871-.708.27-.142.529-.304.773-.485l3.545-3.567a1.378 1.378 0 0 0 .438-.991 1.378 1.378 0 0 0-1.378-1.378 1.378 1.378 0 0 0-.974.403l-3.32 3.342a3.176 3.176 0 0 1-2.247.935 3.197 3.197 0 0 1-2.261-.937 3.208 3.208 0 0 1-.937-2.266c0-.853.332-1.655.937-2.261l3.854-4.125 5.406-5.788A1.378 1.378 0 0 0 13.483 0zm4.218 8.082a1.378 1.378 0 0 0-1.378 1.378c0 .365.143.715.398.974l2.125 2.125-2.125 2.125a1.378 1.378 0 0 0 .974 2.352 1.378 1.378 0 0 0 .974-.403l3.1-3.1a1.378 1.378 0 0 0 0-1.948l-3.1-3.1a1.378 1.378 0 0 0-.968-.403z" />
    </svg>
  )
}

const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com/Ibrahim8033" },
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/md-ibrahimkhan/" },
  { name: "LeetCode", icon: LeetCodeIcon, href: "https://leetcode.com/u/Ibrahim8033/" },
  { name: "Email", icon: Mail, href: "mailto:ibrahimdbg369@gmail.com" },
]

export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Social Links - Mobile */}
          <div className="flex gap-4 md:hidden">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ y: -2 }}
                aria-label={social.name}
              >
                <social.icon className="h-5 w-5" />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center md:text-left"
          >
            <p className="text-muted-foreground text-sm">
              Designed & Built by{" "}
              <a
                href="https://github.com/Ibrahim8033"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                MD Ibrahim Khan
              </a>
            </p>
            <p className="text-muted-foreground/60 text-xs mt-1 flex items-center justify-center md:justify-start gap-1">
              Made with <Heart className="h-3 w-3 text-primary inline" /> using Next.js & Tailwind CSS
            </p>
          </motion.div>

          {/* Year */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-muted-foreground/60 text-sm font-mono"
          >
            © {new Date().getFullYear()}
          </motion.p>
        </div>
      </div>
    </footer>
  )
}
