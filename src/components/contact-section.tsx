'use client'

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

export function ContactSectionComponent() {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-6xl w-full px-4 flex flex-col md:flex-row gap-12">
        <motion.div 
          className="md:w-1/2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Contact Me</h2>
          <p className="text-lg mb-8 text-gray-300">
            Interested in working together? Fill out the form below with some info about your project and I will get back to you as soon as I can.
          </p>
          <div className="flex space-x-4 mb-8">
            <a href="https://github.com/AakashAK01" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors duration-200">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/aakashsaravanannkl/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors duration-200">
              <FaLinkedin size={24} />
            </a>
            <a href="https://www.instagram.com/your_friendlyhood_aakash/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors duration-200">
              <FaInstagram size={24} />
            </a>
            <a href="mailto:aakashnkl@gmail.com" className="text-white hover:text-gray-300 transition-colors duration-200">
              <FaEnvelope size={24} />
            </a>
          </div>
          <motion.button
            className="px-4 py-2 bg-white text-black font-bold rounded-md hover:bg-opacity-90 transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = 'mailto:aakashnkl@gmail.com'}
          >
            Write Me Directly
          </motion.button>
        </motion.div>
        {/* <motion.form 
          onSubmit={handleSubmit}
          className="md:w-1/2 space-y-6"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-white bg-opacity-5 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-white bg-opacity-5 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-3 py-2 bg-white bg-opacity-5 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
            ></textarea>
          </div>
          <div>
            <motion.button
              type="submit"
              className="w-full px-4 py-2 bg-white text-black font-bold rounded-md hover:bg-opacity-90 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </div>
        </motion.form> */}
      </div>
    </section>
  );
}

export default ContactSectionComponent;