'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { X } from 'lucide-react'


const works = [
  {
    id: 1,
    title: 'BulkPe App',
    shortDescription: 'A Flutter-based mobile app for Bulk Transations (PlayStore)',
    longDescription: 'Instant Business Banking for Indian MSMEs - Open an Axis Bank Current Account in Minutes! Welcome to BulkPe - Your Instant Business Banking Solution! Open a current account in under 5 minutes and experience seamless payments for Indian MSMEs.',
    imageUrl: '/images/bulkpe-app.png',
    projectLink: 'https://play.google.com/store/apps/details?id=com.app.bulkpe&pcampaignid=web_share',
  },
  {
    id: 2,
    title: 'BulkPe WebApp',
    shortDescription: 'A Flutter-based Web app Product for Enterprices',
    longDescription: 'End-to-end banking and payments suite for businesses to scale and grow.',
    imageUrl: 'https://bulkpe.in/assets/three_phone.webp',
    projectLink: 'https://bulkpe.in/'
  },
  {
    id: 3,
    title: 'Weather App',
    shortDescription: 'A Flutter-based app for Weather Check (PlayStore)',
    longDescription: 'This fitness tracker app helps users monitor their daily activities, set fitness goals, and track their progress. It integrates with wearable devices and provides personalized workout recommendations.',
    imageUrl: '/images/weather-app.png',
    projectLink: 'https://play.google.com/store/apps/details?id=com.github.aakashak01.weatherapp&pcampaignid=web_share'
  },
  {
    id: 4,
    title: 'Misscall Pay',
    shortDescription: 'No SmartPhone? No Internet? No Problem! Misscall Pay can help you!',
    longDescription: 'Indians began using mobile phones with "missed calls". Now anyone can make payments with it! We aim to make transacting without cash easy. As simple as the very first thing we did with mobile phones. Pay with MissCallPay!',
    imageUrl: '/images/MissCallPay.png',
    projectLink: 'https://ind.misscallpay.com'
  }
];
function WorkCard({ work, onClick }: { work: Project; onClick: () => void }) {
  return (
    <motion.div
      className="bg-[#1C1C1C] rounded-lg overflow-hidden cursor-pointer shadow-lg"
      whileHover={{ scale: 1.05 }}
      onClick={onClick}
    >
      <Image src={work.imageUrl} alt={work.title} width={400} height={300} className="w-full h-60 object-cover" />
      <div className="p-4 md:p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg md:text-xl font-semibold text-white">{work.title}</h3>
          {work.icon && <div>{work.icon}</div>}
        </div>
        <p className="text-sm md:text-base text-gray-400">{work.shortDescription}</p>
      </div>
    </motion.div>
  )
}

interface Project {
  id: number;
  title: string;
  shortDescription: string;
  longDescription: string;
  imageUrl: string;
  projectLink: string;
  icon?: JSX.Element;
}

function ProjectPopup({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: -50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: -50 }}
        className="bg-[#1C1C1C] rounded-lg p-6 md:p-8 max-w-2xl w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 md:top-4 md:right-4 text-white hover:text-gray-300 transition-colors"
          aria-label="Close popup"
        >
          <X size={24} />
        </button>
        <Image src={project.imageUrl} alt={project.title} width={400} height={300} className="w-full h-48 md:h-64 object-cover rounded-lg mb-4 md:mb-6" />
        <div className="flex items-center justify-between mb-2 md:mb-4">
          <h3 className="text-xl md:text-2xl font-semibold text-white">{project.title}</h3>
          {project.icon && <div>{project.icon}</div>}
        </div>
        <p className="text-sm md:text-base text-gray-300 mb-4 md:mb-6">{project.longDescription}</p>
        <a
          href={project.projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-black px-4 py-2 rounded-md text-sm font-bold hover:bg-gray-200 transition-colors duration-200"
        >
          View Project
        </a>
      </motion.div>
    </motion.div>
  )
}

export function WorksSectionComponent() {
  const [selectedProject, setSelectedProject] = useState<typeof works[0] | null>(null)

  return (
    <section id="works" className="py-12 md:py-20 bg-black">
      <div className="mx-auto px-[12%]">
        <motion.h2 
          className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-12 text-center text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Works
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-8">
          {works.map((work) => (
            <WorkCard
              key={work.id}
              work={work}
              onClick={() => setSelectedProject(work)}
            />
          ))}
        </div>
      </div>
      <AnimatePresence>
        {selectedProject && (
          <ProjectPopup
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}

export default WorksSectionComponent;