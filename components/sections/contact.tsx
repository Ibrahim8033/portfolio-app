"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Send, Github, Linkedin, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Field, FieldLabel, FieldGroup } from "@/components/ui/field"

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
  { name: "Phone", icon: Phone, href: "tel:+916307260880" },
]

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 px-6" ref={ref}>
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-primary font-mono text-sm mb-4">06. What&apos;s Next?</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Get In Touch
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-10 leading-relaxed">
            I&apos;m a 4th-year B.Tech CST student actively looking for software engineering jobs, internships,
            and entry-level opportunities. Whether you have an open role, want to collaborate on real-world projects,
            or just want to connect, feel free to reach out!
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-mono text-muted-foreground mb-10">
            <span className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" />
              ibrahimdbg369@gmail.com
            </span>
            <span className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              +91 6307260880
            </span>
            <span className="text-primary/70">
              📍 New Delhi, India
            </span>
          </div>

          {/* Direct CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15 }}
            className="mb-12"
          >
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-7 text-lg"
            >
              <a href="mailto:ibrahimdbg369@gmail.com">
                <Mail className="h-5 w-5 mr-2" />
                Say Hello
              </a>
            </Button>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="glass p-8 rounded-2xl text-left mb-12"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Message Sent!
                </h3>
                <p className="text-muted-foreground">
                  Thanks for reaching out. I&apos;ll get back to you soon!
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                <FieldGroup>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field>
                      <FieldLabel htmlFor="name">Name</FieldLabel>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        required
                        className="bg-background/50"
                      />
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="email">Email</FieldLabel>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        required
                        className="bg-background/50"
                      />
                    </Field>
                  </div>

                  <Field>
                    <FieldLabel htmlFor="subject">Subject</FieldLabel>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="What's this about?"
                      required
                      className="bg-background/50"
                    />
                  </Field>

                  <Field>
                    <FieldLabel htmlFor="message">Message</FieldLabel>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message..."
                      rows={5}
                      required
                      className="bg-background/50 resize-none"
                    />
                  </Field>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                          className="inline-block"
                        >
                          ⟳
                        </motion.span>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="h-4 w-4" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </FieldGroup>
              </form>
            )}
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="flex justify-center gap-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass rounded-lg text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ y: -3 }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
                aria-label={social.name}
              >
                <social.icon className="h-5 w-5" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
