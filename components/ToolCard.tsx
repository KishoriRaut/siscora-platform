'use client';

import { useState } from 'react';
import { StarIcon } from '@heroicons/react/20/solid';
import { HeartIcon as HeartIconOutline } from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';

interface Tool {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
  popular: boolean;
  features: string[];
}

export default function ToolCard({ tool }: { tool: Tool }) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden flex flex-col h-full">
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{tool.name}</h3>
            <p className="mt-1 text-sm text-gray-500">{tool.category}</p>
          </div>
          <button
            type="button"
            onClick={() => setIsFavorite(!isFavorite)}
            className="text-gray-400 hover:text-red-500 transition-colors"
            aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          >
            {isFavorite ? (
              <HeartIconSolid className="h-6 w-6 text-red-500" />
            ) : (
              <HeartIconOutline className="h-6 w-6" />
            )}
          </button>
        </div>
        
        <div className="mt-4">
          <p className="text-2xl font-bold text-gray-900">{tool.price}</p>
          <p className="mt-2 text-gray-600">{tool.description}</p>
        </div>
        
        <div className="mt-4 flex items-center">
          {[0, 1, 2, 3, 4].map((rating) => (
            <StarIcon
              key={rating}
              className={`h-5 w-5 ${
                rating < 4 ? 'text-yellow-400' : 'text-gray-300'
              }`}
              aria-hidden="true"
            />
          ))}
          <span className="ml-2 text-sm text-gray-500">24 reviews</span>
        </div>
        
        <div className="mt-4">
          <h4 className="text-sm font-medium text-gray-900">Key Features:</h4>
          <ul className="mt-2 space-y-1">
            {tool.features.slice(0, 4).map((feature, index) => (
              <li key={index} className="flex items-start">
                <svg
                  className="h-5 w-5 text-green-500 mr-2 flex-shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm text-gray-600">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="bg-gray-50 px-6 py-4">
        <a
          href="#"
          className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Learn more
        </a>
      </div>
    </div>
  );
}
