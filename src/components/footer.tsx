'use client'

import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

export function FooterComponent() {
  return (
    <footer className="bg-white text-white py-8">
      <div className="max-w-6xl mx-auto px-[6%] flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-black">&copy; 2024 Aakash S. All rights reserved.</p>
        </div>
        <div className="flex items-center space-x-4">
          <a href="https://github.com/AakashAK01" target="_blank" rel="noopener noreferrer" className="text-black hover:text-white transition-colors duration-200">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/aakashsaravanannkl/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-white transition-colors duration-200">
            <FaLinkedin size={24} />
          </a>
          {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-white transition-colors duration-200">
            <FaTwitter size={24} />
          </a> */}
          <a href="mailto:aakashnkl@gmail.com" className="text-black hover:text-white transition-colors duration-200">
            <FaEnvelope size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default FooterComponent;
