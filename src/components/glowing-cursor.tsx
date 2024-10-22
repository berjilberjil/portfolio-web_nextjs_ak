'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

type MousePosition = {
  x: number;
  y: number;
};

export function GlowingCursorComponent() {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 })

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', updateMousePosition)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
    }
  }, [])

  return (
    <motion.div
      className="fixed w-8 h-8 pointer-events-none z-50 mix-blend-difference bg-white rounded-full"
      animate={{
        x: mousePosition.x - 16,
        y: mousePosition.y - 16,
      }}
      transition={{
        type: 'spring',
        stiffness: 500,
        damping: 30,
      }}
    />
  )
}

export default GlowingCursorComponent;