import React from 'react';
import Link from 'next/link';

interface HeroSectionProps {
  title: string | React.ReactNode;
  subtitle?: string;
  primaryButton?: {
    text: string;
    href: string;
  };
  secondaryButton?: {
    text: string;
    href: string;
  };
  isHome?: boolean;
  children?: React.ReactNode;
}

export default function HeroSection({
  title,
  subtitle,
  primaryButton,
  secondaryButton,
  isHome = false,
  children,
}: HeroSectionProps) {
  return (
    <div className={`relative ${isHome ? 'min-h-[500px] flex items-center' : 'bg-white'}`}>
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 w-full relative z-10 ${isHome ? 'text-gray-900' : ''}`}>
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="text-center lg:text-left">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            {typeof title === 'string' ? (
              <span className="block">{title}</span>
            ) : (
              title
            )}
          </h1>
          {subtitle && (
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
          {(primaryButton || secondaryButton) && (
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              {primaryButton && (
                <div className="rounded-md shadow">
                  <Link
                    href={primaryButton.href}
                    className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-8 transition-colors duration-200"
                  >
                    {primaryButton.text}
                  </Link>
                </div>
              )}
              {secondaryButton && (
                <div>
                  <Link
                    href={secondaryButton.href}
                    className="w-full flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-8 transition-colors duration-200"
                  >
                    {secondaryButton.text}
                  </Link>
                </div>
              )}
            </div>
          )}
            {children}
          </div>
          
          {isHome && (
            <div className="mt-12 lg:mt-0">
              <div className="relative">
                <img
                  className="relative w-full rounded-lg shadow-xl"
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
                  alt="Dashboard showing Siscora analytics interface"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
