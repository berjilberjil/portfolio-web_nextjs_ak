'use client'

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X } from 'lucide-react';
import { SiFlutter } from 'react-icons/si';

const works = [
  {
    id: 1,
    title: 'E-commerce App',
    shortDescription: 'A Flutter-based mobile app for online shopping',
    longDescription: 'This e-commerce app was built using Flutter and provides a seamless shopping experience. It features a clean UI, smooth animations, and integration with a backend API for real-time product updates and order processing.',
    imageUrl: '/placeholder.svg?height=300&width=400',
    projectLink: 'https://example.com/ecommerce-app',
    icon: <SiFlutter className="text-2xl text-blue-500" />
  },
  {
    id: 2,
    title: 'Task Management Tool',
    shortDescription: 'A productivity app for teams',
    longDescription: 'This task management tool helps teams organize and track their projects efficiently. It offers real-time updates, task assignment, progress tracking, and integrates with popular project management tools.',
    imageUrl: '/placeholder.svg?height=300&width=400',
    projectLink: 'https://example.com/task-management'
  },
  {
    id: 3,
    title: 'Fitness Tracker',
    shortDescription: 'A health and wellness app',
    longDescription: 'This fitness tracker app helps users monitor their daily activities, set fitness goals, and track their progress. It integrates with wearable devices and provides personalized workout recommendations.',
    imageUrl: '/placeholder.svg?height=300&width=400',
    projectLink: 'https://example.com/fitness-tracker'
  },
  {
    id: 4,
    title: 'Social Media Dashboard',
    shortDescription: 'An analytics tool for social media managers',
    longDescription: 'This dashboard provides comprehensive analytics for social media managers. It aggregates data from multiple platforms, offers insights, and allows for scheduling posts across different networks.',
    imageUrl: '/placeholder.svg?height=300&width=400',
    projectLink: 'https://example.com/social-dashboard'
  }
];

type Work = {
  id: number;
  title: string;
  shortDescription: string;
  longDescription: string;
  imageUrl: string;
  projectLink: string;
  icon?: JSX.Element;
};

type WorkCardProps = {
  work: Work;
  onClick: () => void;
};

type ProjectPopupProps = {
  project: Work;
  onClose: () => void;
};

function WorkCard({ work, onClick }: WorkCardProps) {
  return (
    <motion.div
      className="bg-[#1C1C1C] rounded-lg overflow-hidden cursor-pointer shadow-lg"
      whileHover={{ scale: 1.05 }}
      onClick={onClick}
    >
      <Image src={work.imageUrl} alt={work.title} width={400} height={300} className="w-full h-48 object-cover" />
      <div className="p-4 md:p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg md:text-xl font-semibold text-white">{work.title}</h3>
          {work.icon && <div>{work.icon}</div>}
        </div>
        <p className="text-sm md:text-base text-gray-400">{work.shortDescription}</p>
      </div>
    </motion.div>
  );
}

function ProjectPopup({ project, onClose }: ProjectPopupProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

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
        className="bg-[#1C1C1C] rounded-lg p-6 md:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
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
  );
}

export function WorksSectionComponent() {
  const [selectedProject, setSelectedProject] = useState<Work | null>(null);

  return (
    <section id="works" className="py-12 md:py-20 bg-black">
      <div className="mx-auto px-[6%]">
        <motion.h2 
          className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-12 text-center text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Works
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
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
  );
}

export default WorksSectionComponent;