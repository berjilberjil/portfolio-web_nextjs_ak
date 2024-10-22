'use client'

import { motion } from 'framer-motion'

const services = [
  {
    title: 'Custom Mobile App Development',
    description: 'Tailored Flutter applications designed to meet your specific business needs and user requirements.'
  },
  {
    title: 'UI/UX Design',
    description: 'Crafting intuitive and visually appealing interfaces that enhance user engagement and satisfaction.'
  },
  {
    title: 'App Maintenance & Updates',
    description: 'Ongoing support to ensure your app remains current, secure, and optimized for the latest devices and OS versions.'
  },
  {
    title: 'Backend Integration',
    description: 'Seamless connection of your mobile app with robust backend services for data management and real-time features.'
  },
  {
    title: 'App Deployment',
    description: 'Guiding you through the process of launching your app on major platforms like App Store and Google Play.'
  },
  {
    title: 'Consultation',
    description: 'Expert advice on mobile app strategy, technology choices, and best practices for successful app development.'
  }
]

export function ServicesSectionComponent() {
  return (
    <section id="services" className="py-20">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-white bg-opacity-5 backdrop-blur-md rounded-lg p-6 transition-all duration-300 hover:bg-opacity-10 hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSectionComponent;