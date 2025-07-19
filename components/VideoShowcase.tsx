'use client';

import { useState } from 'react';
import { PlayIcon } from '@heroicons/react/24/outline';

const videoData = {
  title: 'See Siscora in Action',
  description: 'Discover how our solutions can transform your business operations with this quick overview of our platform.',
  videoUrl: 'https://www.youtube.com/embed/example-video-id',
  thumbnail: '/images/video-thumbnail.jpg',
  stats: [
    { value: '2M+', label: 'Businesses Transformed' },
    { value: '95%', label: 'Customer Satisfaction' },
    { value: '24/7', label: 'Support Available' },
  ]
};

export default function VideoShowcase() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative bg-gray-900 py-16 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-indigo-900 mix-blend-multiply" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="mt-12 lg:mt-0 lg:col-span-1">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              {videoData.title}
            </h2>
            <p className="mt-3 text-xl text-indigo-100">
              {videoData.description}
            </p>
            
            <div className="mt-8 grid grid-cols-3 gap-8">
              {videoData.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm font-medium text-indigo-200">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <a
                href="#"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50"
              >
                Request a Demo
              </a>
              <a
                href="#"
                className="ml-4 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 bg-opacity-60 hover:bg-opacity-70"
              >
                Learn More
              </a>
            </div>
          </div>
          
          <div className="mt-12 lg:mt-0 lg:col-span-1">
            <div className="relative rounded-lg overflow-hidden shadow-xl transform transition-all hover:scale-105">
              {!isPlaying ? (
                <div className="relative aspect-w-16 aspect-h-9">
                  <img
                    className="w-full h-full object-cover"
                    src={videoData.thumbnail}
                    alt="Video thumbnail"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                    <button
                      onClick={() => setIsPlaying(true)}
                      className="bg-white bg-opacity-90 rounded-full p-4 text-indigo-600 hover:bg-opacity-100 transition-all transform hover:scale-110"
                      aria-label="Play video"
                    >
                      <PlayIcon className="h-8 w-8" />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    className="w-full h-full"
                    src={`${videoData.videoUrl}?autoplay=1`}
                    title="Siscora Platform Overview"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
