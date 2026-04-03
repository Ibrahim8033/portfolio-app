"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react"

const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
  { name: "Email", icon: Mail, href: "mailto:ibrahim@example.com" },
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
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Ibrahim Khan
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
