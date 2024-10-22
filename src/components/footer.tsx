'use client'

import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export function FooterComponent() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-6xl mx-auto px-[6%] flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-gray-300">&copy; 2024 Aakash S. All rights reserved.</p>
        </div>
        <div className="flex items-center space-x-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-200">
            <FaGithub size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-200">
            <FaLinkedin size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-200">
            <FaTwitter size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default FooterComponent;