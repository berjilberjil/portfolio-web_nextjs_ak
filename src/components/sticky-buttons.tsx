'use client'

import { motion } from 'framer-motion'

const buttons = [
  { name: 'Services', href: '#services' },
  { name: 'My Kit', href: '#my-kit' },
  { name: 'Contact', href: '#contact' },
]

export function StickyButtonsComponent() {
  return (
    <div className="fixed bottom-8 right-8 z-40 space-y-4">
      {buttons.map((button) => (
        <motion.a
          key={button.name}
          href={button.href}
          className="block bg-white bg-opacity-20 backdrop-blur-md rounded-lg px-6 py-3 text-white text-sm font-bold transition-all duration-200"
          whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
        >
          {button.name}
        </motion.a>
      ))}
    </div>
  )
}

export default StickyButtonsComponent;