'use client'

import { motion } from 'framer-motion'

const aboutBlocks = [
  {
    title: 'Experience',
    content: 'Over 5 years in mobile app development, specializing in Flutter and cross-platform solutions.'
  },
  {
    title: 'Expertise',
    content: 'Flutter, Dart, UI/UX Design, State Management, RESTful API Integration, Firebase, CI/CD'
  },
  {
    title: 'Philosophy',
    content: 'Committed to clean code, user-centric design, and continuous learning in the ever-evolving tech landscape.'
  },
  {
    title: 'Goal',
    content: 'To create intuitive, high-performance applications that solve real-world problems and delight users.'
  }
]

export function AboutSectionComponent() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {aboutBlocks.map((block, index) => (
            <motion.div
              key={block.title}
              className="bg-white bg-opacity-5 backdrop-blur-md rounded-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <h3 className="text-xl font-semibold mb-4">{block.title}</h3>
              <p className="text-gray-300">{block.content}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSectionComponent;