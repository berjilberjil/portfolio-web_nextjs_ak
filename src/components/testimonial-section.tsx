'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    role: 'CEO, TechCorp',
    content: 'Working with Aakash was an absolute pleasure. His expertise in Flutter development helped us create an outstanding mobile app.',
    avatar: '/placeholder.svg?height=80&width=80'
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'CTO, InnovateTech',
    content: 'Aakash's attention to detail and problem-solving skills are unparalleled. He delivered a complex web application on time and within budget.',
    avatar: '/placeholder.svg?height=80&width=80'
  },
  {
    id: 3,
    name: 'Mike Johnson',
    role: 'Product Manager, StartupX',
    content: 'I was impressed by Aakash's ability to quickly grasp our requirements and translate them into a user-friendly interface.',
    avatar: '/placeholder.svg?height=80&width=80'
  }
]

export function TestimonialSectionComponent() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-16 bg-black">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2 
          className="text-2xl md:text-3xl font-bold mb-8 text-center text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          What Clients Say
        </motion.h2>
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-[#1C1C1C] rounded-lg p-6 shadow-lg"
            >
              <div className="flex items-center space-x-4 mb-4">
                <Image
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                  width={80}
                  height={80}
                  className="rounded-full"
                />
                <div>
                  <h3 className="font-semibold text-white">{testimonials[currentIndex].name}</h3>
                  <p className="text-sm text-gray-400">{testimonials[currentIndex].role}</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm italic">{testimonials[currentIndex].content}</p>
            </motion.div>
          </AnimatePresence>
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </section>
  )
}