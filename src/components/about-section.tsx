'use client'

import { motion } from 'framer-motion'

const aboutBlocks = [
  {
    title: 'Experience',
    content: 'I’m a developer with experience in mobile and web apps, specializing in fintech projects using Flutter. I’ve tackled challenges like the “30 Days, 30 Features” and learned from each project I’ve built, successful or not.'
  },
  {
    title: 'Expertise',
    content: 'I focus on Flutter for mobile and Next.js for web development, integrating SDKs and adding creative features like keyboard shortcuts and image generation for a better user experience.'
  },
  {
    title: 'Philosophy',
    content: 'Tech should solve problems and bring joy. I aim to create apps that are functional, enjoyable, and always push the limits of what’s possible.'
  },
  {
    title: 'Goal',
    content: 'To develop user-friendly apps that people love and scale my freelance business while continuing to learn and grow in the tech field.'
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