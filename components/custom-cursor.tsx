"use client"

import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [isMoving, setIsMoving] = useState(false)
  const moveTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    // Only show custom cursor on devices that support hover
    const mediaQuery = window.matchMedia("(hover: hover)")
    if (!mediaQuery.matches) return

    setIsVisible(true)

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsMoving(true)

      // Clear existing timeout
      if (moveTimeoutRef.current) {
        clearTimeout(moveTimeoutRef.current)
      }

      // Set timeout to detect when mouse stops
      moveTimeoutRef.current = setTimeout(() => {
        setIsMoving(false)
      }, 100)
    }

    window.addEventListener("mousemove", updateMousePosition)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      if (moveTimeoutRef.current) {
        clearTimeout(moveTimeoutRef.current)
      }
    }
  }, [])

  if (!isVisible) return null

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      animate={{
        x: mousePosition.x + 5,
        y: mousePosition.y + 5,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 25,
        mass: 0.5,
      }}
    >
      <AnimatePresence mode="wait">
        {isMoving ? (
          // Walking cat
          <motion.svg
            key="walking"
            width="32"
            height="28"
            viewBox="0 0 32 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            {/* Tail */}
            <motion.path
              d="M28 8C30 6 31 4 30 3C29 2 27 3 26 5C25 7 25 9 25 10"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="text-primary"
              fill="none"
              animate={{ d: ["M28 8C30 6 31 4 30 3C29 2 27 3 26 5C25 7 25 9 25 10", "M28 10C30 8 32 7 31 5C30 4 28 5 27 7C26 8 26 10 26 11", "M28 8C30 6 31 4 30 3C29 2 27 3 26 5C25 7 25 9 25 10"] }}
              transition={{ duration: 0.3, repeat: Infinity }}
            />
            
            {/* Body */}
            <ellipse cx="18" cy="12" rx="8" ry="5" fill="currentColor" className="text-primary" />
            
            {/* Back legs - animated */}
            <motion.path
              d="M22 17L24 24"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              className="text-primary"
              animate={{ d: ["M22 17L24 24", "M22 17L20 24", "M22 17L24 24"] }}
              transition={{ duration: 0.2, repeat: Infinity }}
            />
            <motion.path
              d="M20 17L18 24"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              className="text-primary"
              animate={{ d: ["M20 17L18 24", "M20 17L22 24", "M20 17L18 24"] }}
              transition={{ duration: 0.2, repeat: Infinity, delay: 0.1 }}
            />
            
            {/* Front legs - animated */}
            <motion.path
              d="M14 17L16 24"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              className="text-primary"
              animate={{ d: ["M14 17L16 24", "M14 17L12 24", "M14 17L16 24"] }}
              transition={{ duration: 0.2, repeat: Infinity, delay: 0.1 }}
            />
            <motion.path
              d="M12 17L10 24"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              className="text-primary"
              animate={{ d: ["M12 17L10 24", "M12 17L14 24", "M12 17L10 24"] }}
              transition={{ duration: 0.2, repeat: Infinity }}
            />
            
            {/* Paws */}
            <motion.ellipse cx="24" cy="25" rx="1.5" ry="1" fill="currentColor" className="text-primary"
              animate={{ cx: [24, 20, 24] }}
              transition={{ duration: 0.2, repeat: Infinity }}
            />
            <motion.ellipse cx="18" cy="25" rx="1.5" ry="1" fill="currentColor" className="text-primary"
              animate={{ cx: [18, 22, 18] }}
              transition={{ duration: 0.2, repeat: Infinity, delay: 0.1 }}
            />
            <motion.ellipse cx="16" cy="25" rx="1.5" ry="1" fill="currentColor" className="text-primary"
              animate={{ cx: [16, 12, 16] }}
              transition={{ duration: 0.2, repeat: Infinity, delay: 0.1 }}
            />
            <motion.ellipse cx="10" cy="25" rx="1.5" ry="1" fill="currentColor" className="text-primary"
              animate={{ cx: [10, 14, 10] }}
              transition={{ duration: 0.2, repeat: Infinity }}
            />
            
            {/* Head */}
            <ellipse cx="8" cy="10" rx="6" ry="5" fill="currentColor" className="text-primary" />
            
            {/* Ears */}
            <path d="M4 3L5 7L3 6L4 3Z" fill="currentColor" className="text-primary" />
            <path d="M10 3L9 7L11 6L10 3Z" fill="currentColor" className="text-primary" />
            <path d="M4.5 4L5 6L4 5.5L4.5 4Z" fill="currentColor" className="text-pink-400" />
            <path d="M9.5 4L9 6L10 5.5L9.5 4Z" fill="currentColor" className="text-pink-400" />
            
            {/* Eyes */}
            <ellipse cx="6" cy="9" rx="1.2" ry="1.5" fill="white" />
            <ellipse cx="10" cy="9" rx="1.2" ry="1.5" fill="white" />
            <ellipse cx="6" cy="9.3" rx="0.8" ry="1" fill="black" />
            <ellipse cx="10" cy="9.3" rx="0.8" ry="1" fill="black" />
            
            {/* Nose */}
            <ellipse cx="8" cy="12" rx="0.8" ry="0.5" fill="currentColor" className="text-pink-400" />
            
            {/* Whiskers */}
            <line x1="1" y1="10" x2="4" y2="10" stroke="currentColor" strokeWidth="0.5" className="text-foreground" />
            <line x1="1" y1="12" x2="4" y2="11.5" stroke="currentColor" strokeWidth="0.5" className="text-foreground" />
            <line x1="12" y1="10" x2="15" y2="10" stroke="currentColor" strokeWidth="0.5" className="text-foreground" />
            <line x1="12" y1="11.5" x2="15" y2="12" stroke="currentColor" strokeWidth="0.5" className="text-foreground" />
          </motion.svg>
        ) : (
          // Sitting cat
          <motion.svg
            key="sitting"
            width="28"
            height="32"
            viewBox="0 0 28 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            {/* Tail curled around */}
            <motion.path
              d="M24 22C26 20 27 18 26 16C25 15 23 16 22 18C21 20 22 24 20 26"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              className="text-primary"
              fill="none"
              animate={{ d: ["M24 22C26 20 27 18 26 16C25 15 23 16 22 18C21 20 22 24 20 26", "M24 23C26 21 27 19 26 17C25 16 23 17 22 19C21 21 22 25 20 27", "M24 22C26 20 27 18 26 16C25 15 23 16 22 18C21 20 22 24 20 26"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Back body (sitting) */}
            <ellipse cx="16" cy="22" rx="6" ry="8" fill="currentColor" className="text-primary" />
            
            {/* Back legs (tucked) */}
            <ellipse cx="12" cy="28" rx="3" ry="2" fill="currentColor" className="text-primary" />
            <ellipse cx="20" cy="28" rx="3" ry="2" fill="currentColor" className="text-primary" />
            
            {/* Front legs */}
            <rect x="8" y="22" width="3" height="8" rx="1.5" fill="currentColor" className="text-primary" />
            <rect x="13" y="22" width="3" height="8" rx="1.5" fill="currentColor" className="text-primary" />
            
            {/* Front paws */}
            <ellipse cx="9.5" cy="30" rx="2" ry="1.2" fill="currentColor" className="text-primary" />
            <ellipse cx="14.5" cy="30" rx="2" ry="1.2" fill="currentColor" className="text-primary" />
            
            {/* Chest/neck */}
            <ellipse cx="12" cy="16" rx="5" ry="6" fill="currentColor" className="text-primary" />
            
            {/* Head */}
            <ellipse cx="12" cy="9" rx="7" ry="6" fill="currentColor" className="text-primary" />
            
            {/* Ears */}
            <path d="M6 2L8 7L5 6L6 2Z" fill="currentColor" className="text-primary" />
            <path d="M18 2L16 7L19 6L18 2Z" fill="currentColor" className="text-primary" />
            <path d="M6.5 3.5L7.5 6L6 5.5L6.5 3.5Z" fill="currentColor" className="text-pink-400" />
            <path d="M17.5 3.5L16.5 6L18 5.5L17.5 3.5Z" fill="currentColor" className="text-pink-400" />
            
            {/* Eyes - blinking animation */}
            <motion.ellipse 
              cx="9" cy="8" rx="1.5" ry="2" fill="white"
              animate={{ ry: [2, 2, 0.3, 2] }}
              transition={{ duration: 3, repeat: Infinity, times: [0, 0.9, 0.95, 1] }}
            />
            <motion.ellipse 
              cx="15" cy="8" rx="1.5" ry="2" fill="white"
              animate={{ ry: [2, 2, 0.3, 2] }}
              transition={{ duration: 3, repeat: Infinity, times: [0, 0.9, 0.95, 1] }}
            />
            <motion.ellipse 
              cx="9" cy="8.5" rx="1" ry="1.3" fill="black"
              animate={{ ry: [1.3, 1.3, 0.2, 1.3] }}
              transition={{ duration: 3, repeat: Infinity, times: [0, 0.9, 0.95, 1] }}
            />
            <motion.ellipse 
              cx="15" cy="8.5" rx="1" ry="1.3" fill="black"
              animate={{ ry: [1.3, 1.3, 0.2, 1.3] }}
              transition={{ duration: 3, repeat: Infinity, times: [0, 0.9, 0.95, 1] }}
            />
            
            {/* Eye shine */}
            <circle cx="8.5" cy="7.5" r="0.4" fill="white" />
            <circle cx="14.5" cy="7.5" r="0.4" fill="white" />
            
            {/* Nose */}
            <ellipse cx="12" cy="11" rx="1" ry="0.7" fill="currentColor" className="text-pink-400" />
            
            {/* Mouth */}
            <path d="M12 11.7C12 11.7 10.5 13 10 12.5" stroke="currentColor" strokeWidth="0.5" className="text-foreground" strokeLinecap="round" />
            <path d="M12 11.7C12 11.7 13.5 13 14 12.5" stroke="currentColor" strokeWidth="0.5" className="text-foreground" strokeLinecap="round" />
            
            {/* Whiskers */}
            <line x1="3" y1="10" x2="7" y2="10" stroke="currentColor" strokeWidth="0.5" className="text-foreground" />
            <line x1="3" y1="11.5" x2="7" y2="12" stroke="currentColor" strokeWidth="0.5" className="text-foreground" />
            <line x1="3" y1="8.5" x2="7" y2="8" stroke="currentColor" strokeWidth="0.5" className="text-foreground" />
            <line x1="17" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="0.5" className="text-foreground" />
            <line x1="17" y1="12" x2="21" y2="11.5" stroke="currentColor" strokeWidth="0.5" className="text-foreground" />
            <line x1="17" y1="8" x2="21" y2="8.5" stroke="currentColor" strokeWidth="0.5" className="text-foreground" />
          </motion.svg>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
