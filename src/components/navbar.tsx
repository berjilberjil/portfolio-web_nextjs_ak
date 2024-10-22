'use client'

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Works', href: '#works' },
  { name: 'Contact', href: '#contact' },
];

export function NavbarComponent() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.slice(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-full px-6 py-3">
        <ul className="flex space-x-6">
          {navItems.map((item) => (
            <li key={item.name}>
              <motion.a 
                href={item.href}
                className={`text-white hover:text-gray-300 transition-colors duration-200 text-sm ${activeSection === item.href.slice(1) ? 'font-bold' : ''}`}
                onClick={(e) => handleClick(e, item.href)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default NavbarComponent;