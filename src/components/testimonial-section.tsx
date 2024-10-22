'use client'

import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    role: 'CEO, TechCorp',
    content: 'Working with Aakash was an absolute pleasure. His expertise in Flutter development helped us create an outstanding mobile app.',
    avatar: 'https://via.placeholder.com/80'
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'CTO, InnovateTech',
    content: "Aakash's attention to detail and problem-solving skills are unparalleled. He delivered a complex web application on time and within budget.",
    avatar: 'https://via.placeholder.com/80'
  },
  {
    id: 3,
    name: 'Mike Johnson',
    role: 'Product Manager, StartupX',
    content: "I was impressed by Aakash's ability to quickly grasp our requirements and translate them into a user-friendly interface.",
    avatar: 'https://via.placeholder.com/80'
  }
];

export function TestimonialSectionComponent() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section id="testimonials" className="py-20  text-white" style={{backgroundColor:"#0D0D0D"}}>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Testimonials</h2>
        <div className="relative">
          <div className="flex flex-col items-center">
            <img src={testimonials[currentIndex].avatar} alt={testimonials[currentIndex].name} className="w-20 h-20 rounded-full mb-4" />
            <p className="text-xl md:text-2xl font-semibold mb-2">{testimonials[currentIndex].name}</p>
            <p className="text-gray-400 mb-4">{testimonials[currentIndex].role}</p>
            <p className="text-lg md:text-xl text-center max-w-2xl">{testimonials[currentIndex].content}</p>
          </div>
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft className="w-5 h-5 text-white" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition"
            aria-label="Next testimonial"
          >
            <FaChevronRight className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSectionComponent;