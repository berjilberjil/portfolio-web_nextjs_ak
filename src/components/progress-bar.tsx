'use client'

import { motion, useSpring } from 'framer-motion'

interface ProgressBarProps {
  progress: number
}

export function ProgressBarComponent({ progress }: ProgressBarProps) {
  const scaleX = useSpring(0, { stiffness: 100, damping: 30 })

  scaleX.set(progress / 100)

  return (
    <motion.div 
      className="fixed bottom-0 left-0 right-0 h-1 bg-white bg-opacity-20 backdrop-blur-md z-50"
      style={{ scaleX, transformOrigin: '0% 50%' }}
    />
  )
}
export default ProgressBarComponent;