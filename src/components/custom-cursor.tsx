'use client'

import { motion, useSpring } from 'framer-motion'

interface CustomCursorProps {
  position: { x: number; y: number }
}

export function CustomCursorComponent({ position }: CustomCursorProps) {
  const cursorX = useSpring(position.x, { stiffness: 1000, damping: 50 })
  const cursorY = useSpring(position.y, { stiffness: 1000, damping: 50 })

  return (
    <motion.div
      className="fixed w-8 h-8 pointer-events-none z-50 mix-blend-difference"
      style={{
        left: cursorX,
        top: cursorY,
      }}
    >
      <motion.div
        className="w-full h-full rounded-full bg-white"
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30
        }}
      />
    </motion.div>
  )
}