import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Siscora Technologies - Enterprise SaaS Solutions & Custom Development',
  description: 'Innovative SaaS platforms and custom software solutions for modern businesses. Discover our products including AI-powered services, property management, job portals, and more.',
  keywords: [
    'SaaS', 
    'custom software development', 
    'AI solutions', 
    'property management', 
    'job portal', 
    'enterprise software', 
    'Siscora Technologies'
  ],
  authors: [{ name: 'Siscora Technologies' }],
  creator: 'Siscora Technologies',
  publisher: 'Siscora Technologies Pvt. Ltd.',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Siscora Technologies - Enterprise SaaS Solutions & Custom Development',
    description: 'Innovative SaaS platforms and custom software solutions for modern businesses',
    url: 'https://siscora.com',
    siteName: 'Siscora',
    images: [
      {
        url: 'https://siscora.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Siscora - Enterprise SaaS Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Siscora - Innovative SaaS Solutions',
    description: 'Transforming businesses with cutting-edge software solutions',
    images: ['https://siscora.tech/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
};

export default metadata;
