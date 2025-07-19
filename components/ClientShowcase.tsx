'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const clients = [
  {
    id: 1,
    name: 'TechCorp',
    logo: '/images/clients/techcorp.png',
    description: 'Increased operational efficiency by 40% using our AI solutions.',
    link: '/case-studies/techcorp'
  },
  {
    id: 2,
    name: 'Global Retail',
    logo: '/images/clients/global-retail.png',
    description: 'Scaled their e-commerce platform to handle 10x more traffic.',
    link: '/case-studies/global-retail'
  },
  {
    id: 3,
    name: 'FinTech Pro',
    logo: '/images/clients/fintech-pro.png',
    description: 'Secured their platform with our advanced security solutions.',
    link: '/case-studies/fintech-pro'
  },
  {
    id: 4,
    name: 'HealthPlus',
    logo: '/images/clients/healthplus.png',
    description: 'Improved patient care with our custom healthcare solutions.',
    link: '/case-studies/healthplus'
  },
  {
    id: 5,
    name: 'EduTech Solutions',
    logo: '/images/clients/edutech.png',
    description: 'Transformed their learning platform with our interactive tools.',
    link: '/case-studies/edutech-solutions'
  }
];

export default function ClientShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % clients.length);
  };
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + clients.length) % clients.length);
  };
  
  const visibleClients = [
    clients[(currentIndex - 1 + clients.length) % clients.length],
    clients[currentIndex],
    clients[(currentIndex + 1) % clients.length]
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Trusted by Industry Leaders
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Join thousands of businesses that trust our solutions
          </p>
        </div>
        
        <div 
          className="mt-12 relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {visibleClients.map((client, index) => (
              <div 
                key={client.id}
                className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 ${
                  index === 1 ? 'transform scale-105 z-10' : 'opacity-75'
                }`}
              >
                <div className="p-6">
                  <div className="flex justify-center h-16">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      width={160}
                      height={64}
                      className="h-full w-auto object-contain"
                    />
                  </div>
                  <p className="mt-4 text-gray-600 text-center">"{client.description}"</p>
                  <div className="mt-6 flex justify-center">
                    <a
                      href={client.link}
                      className="text-indigo-600 hover:text-indigo-500 text-sm font-medium"
                    >
                      Read case study <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {(isHovered || window.innerWidth < 768) && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-md text-gray-700 hover:text-indigo-600 focus:outline-none z-20"
                aria-label="Previous client"
              >
                <ChevronLeftIcon className="h-6 w-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-md text-gray-700 hover:text-indigo-600 focus:outline-none z-20"
                aria-label="Next client"
              >
                <ChevronRightIcon className="h-6 w-6" />
              </button>
            </>
          )}
        </div>
        
        <div className="mt-8 flex justify-center space-x-2">
          {clients.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 w-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-indigo-600' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
