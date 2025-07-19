'use client';

import { CheckCircleIcon, LightBulbIcon, ShieldCheckIcon, UserGroupIcon, ChartBarIcon, CodeBracketIcon } from '@heroicons/react/24/outline';
import HeroSection from '@/components/HeroSection';

const team = [
  {
    name: 'John Smith',
    role: 'CEO & Founder',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    bio: 'Visionary leader with 15+ years of experience in enterprise software development and business strategy.',
  },
  {
    name: 'Sarah Johnson',
    role: 'CTO',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    bio: 'Technology expert specializing in cloud architecture and scalable systems design.',
  },
  {
    name: 'Michael Chen',
    role: 'Lead Developer',
    imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    bio: 'Full-stack developer passionate about creating elegant solutions to complex problems.',
  },
];

const values = [
  {
    name: 'Innovation',
    description: 'We embrace change and continuously strive to push the boundaries of what\'s possible.',
    icon: LightBulbIcon,
  },
  {
    name: 'Excellence',
    description: 'We take pride in delivering exceptional quality in everything we create.',
    icon: CheckCircleIcon,
  },
  {
    name: 'Integrity',
    description: 'We believe in transparency, honesty, and doing the right thing.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Collaboration',
    description: 'We achieve more together by fostering teamwork and open communication.',
    icon: UserGroupIcon,
  },
];

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-indigo-700">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
              <span className="block">About siscora</span>
              <span className="block text-indigo-200 text-3xl sm:text-4xl mt-2 font-bold">
                Our Story & Values
              </span>
            </h2>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div className="mb-8 lg:mb-0">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Our Story
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Founded in 2015, Siscora Technologies began with a simple idea: to create powerful, intuitive software that solves real business challenges. 
                What started as a small team of passionate developers has grown into a leading provider of enterprise SaaS solutions.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center">
                    <CodeBracketIcon className="h-6 w-6 text-indigo-600" />
                    <span className="ml-2 text-lg font-medium text-gray-900">50+</span>
                  </div>
                  <span className="mt-2 block text-sm text-gray-500">Successful Projects</span>
                </div>
                <div>
                  <div className="flex items-center">
                    <UserGroupIcon className="h-6 w-6 text-indigo-600" />
                    <span className="ml-2 text-lg font-medium text-gray-900">25+</span>
                  </div>
                  <span className="mt-2 block text-sm text-gray-500">Team Members</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                className="relative rounded-lg shadow-xl ring-1 ring-black ring-opacity-5"
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Our team"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Our Values</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              What We Believe In
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              These principles guide everything we do at Siscora Technologies.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.name} className="pt-6">
                <div className="flow-root bg-white rounded-lg px-6 pb-8 h-full">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                        <value.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{value.name}</h3>
                    <p className="mt-5 text-base text-gray-500">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Our Team</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Meet Our Leadership
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              The talented people behind our success
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {team.map((person) => (
              <div key={person.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src={person.imageUrl}
                    alt={person.name}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-900">{person.name}</h3>
                  <p className="text-indigo-600">{person.role}</p>
                  <p className="mt-2 text-gray-500">{person.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-indigo-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to transform your business?</span>
            <span className="block">Get started with our solutions today.</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-indigo-200">
            Join thousands of businesses that trust our platform to power their success.
          </p>
          <a
            href="/contact"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
