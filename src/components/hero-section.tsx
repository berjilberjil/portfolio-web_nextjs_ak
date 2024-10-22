'use client'

import { motion } from 'framer-motion'

export function HeroSectionComponent() {
  return (
    <section id="home" className="min-h-screen flex items-center">
      <div className="max-w-3xl pl-[6%]">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Aakash S
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl text-gray-400 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Flutter Freelancer, Building Next-Gen Apps
        </motion.p>
        <motion.div 
          className="space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <button className="bg-white text-black px-4 py-2 rounded-md text-sm font-bold hover:bg-gray-200 transition-colors duration-200">
            Let&apos;s Talk
          </button>
          <button className="bg-transparent text-white px-4 py-2 rounded-md text-sm font-bold border border-white hover:bg-white hover:text-black transition-colors duration-200">
            Explore
          </button>
        </motion.div>
      </div>
    </section>
  )
}
export default HeroSectionComponent;