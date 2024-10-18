'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Navbar from './navbar'
import HeroSection from './hero-section'
import AboutSection from './about-section'
import WorksSection from './works-section'
import ServicesSection from './services-section'
import MyKitSection from './my-kit-section'
import TestimonialSection from './testimonial-section'
import ContactSection from './contact-section'
import Footer from './footer'
import GlowingCursor from './glowing-cursor'
import ProgressBar from './progress-bar'
import StickyButtons from './sticky-buttons'

const fadeDownVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export default function PortfolioPage() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = scrollPx / winHeightPx * 100
      setScrollProgress(scrolled)
    }

    window.addEventListener('scroll', updateScrollProgress)

    return () => {
      window.removeEventListener('scroll', updateScrollProgress)
    }
  }, [])

  return (
    <div className="bg-black text-white min-h-screen relative">
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        @media (max-width: 640px) {
          html {
            font-size: 14px;
          }
        }
        @media (min-width: 641px) and (max-width: 768px) {
          html {
            font-size: 15px;
          }
        }
        @media (min-width: 769px) {
          html {
            font-size: 16px;
          }
        }
      `}</style>
      <GlowingCursor />
      <Navbar />
      <StickyButtons />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeDownVariants}
      >
        <HeroSection />
        <AboutSection />
        <WorksSection />
        <MyKitSection />
        <ServicesSection />
        <TestimonialSection />
        <ContactSection />
      </motion.div>
      <Footer />
      <ProgressBar progress={scrollProgress} />
    </div>
  )
}