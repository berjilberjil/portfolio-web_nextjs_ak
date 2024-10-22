'use client'

import React, { useState } from 'react';

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
    content: "Aakash's attention to detail and problem-solving skills are unparalleled. He delivered a complex web application on time and wthin budget.",
    avatar: '/placeholder.svg?height=80&width=80'
  },
  {
    id: 3,
    name: 'Mike Johnson',
    role: 'Product Manager, StartupX',
    content: "I was impressed by Aakash's ability to quickly grasp our requirements and translate them into a user-friendly interface.",
    avatar: '/placeholder.svg?height=80&width=80'
  }
];

export function TestimonialSectionComponent() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section id="testimonials" className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Testimonials</h2>
        <div className="flex flex-col items-center">
          <img src={testimonials[currentIndex].avatar} alt={testimonials[currentIndex].name} className="w-20 h-20 rounded-full mb-4" />
          <p className="text-xl md:text-2xl font-semibold mb-2">{testimonials[currentIndex].name}</p>
          <p className="text-gray-400 mb-4">{testimonials[currentIndex].role}</p>
          <p className="text-lg md:text-xl text-center max-w-2xl">{testimonials[currentIndex].content}</p>
        </div>
        <div className="flex justify-center mt-8 space-x-4">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-500'}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialSectionComponent;