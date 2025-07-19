import { Inter } from 'next/font/google';
import './globals.css';
import ClientRoot from './ClientRoot';
import AppContent from './AppContent';

// Optimize font loading with preconnect
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
});

export const metadata = {
  title: {
    default: 'Siscora Technologies',
    template: '%s | Siscora Technologies',
  },
  description: 'Innovative SaaS platforms and custom software solutions for modern businesses.',
  applicationName: 'Siscora',
  manifest: '/manifest.json',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Siscora',
    startupImage: [
      {
        url: '/icons/apple-splash-2048-2732.jpg',
        media: '(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)'
      },
      {
        url: '/icons/apple-splash-1668-2388.jpg',
        media: '(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)'
      },
      {
        url: '/icons/apple-splash-1536-2048.jpg',
        media: '(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)'
      },
      {
        url: '/icons/apple-splash-1242-2688.jpg',
        media: '(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)'
      },
      {
        url: '/icons/apple-splash-1125-2436.jpg',
        media: '(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)'
      },
      {
        url: '/icons/apple-splash-828-1792.jpg',
        media: '(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)'
      },
      {
        url: '/icons/apple-splash-750-1334.jpg',
        media: '(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)'
      },
      {
        url: '/icons/apple-splash-640-1136.jpg',
        media: '(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)'
      }
    ]
  },
  formatDetection: {
    telephone: false,
    date: false,
    address: false,
    email: false,
    url: false,
  },
  icons: {
    icon: [
      { url: '/icons/icon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icons/icon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icons/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icons/icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/icons/apple-icon-180x180.png', sizes: '180x180', type: 'image/png' },
      { url: '/icons/apple-icon-152x152.png', sizes: '152x152', type: 'image/png' },
      { url: '/icons/apple-icon-144x144.png', sizes: '144x144', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#4f46e5',
      },
    ],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    minimumScale: 1,
    viewportFit: 'cover',
    userScalable: true,
  },
  other: {
    'msapplication-TileColor': '#4f46e5',
    'msapplication-config': '/browserconfig.xml',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'application-name': 'Siscora',
    'apple-mobile-web-app-title': 'Siscora',
    'theme-color': '#4f46e5',
  },
};

// This is a Server Component by default in Next.js 13+
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <head>
        {/* PWA Configuration */}
        <meta name="apple-mobile-web-app-capable" content="yes" key="apple-mobile-web-app-capable" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" key="apple-status-bar-style" />
        
        {/* Web App Manifest */}
        <link rel="manifest" href="/manifest.json" key="webmanifest" />
        
        {/* Favicons - Using SVG for better quality and smaller size */}
        <link rel="icon" href="/favicon.ico" sizes="any" key="favicon-ico" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" key="favicon-svg" />
        {/* Apple touch icon - using next/head for better compatibility */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link 
          rel="apple-touch-icon" 
          href="/apple-touch-icon.png" 
          sizes="180x180"
          key="apple-touch-icon"
          suppressHydrationWarning
        />
        
        {/* Preconnect to external domains */}
        <link 
          rel="preconnect" 
          href="https://fonts.googleapis.com" 
          key="google-fonts-preconnect"
        />
        <link 
          rel="preconnect" 
          href="https://fonts.gstatic.com" 
          crossOrigin="anonymous"
          key="google-fonts-gstatic"
        />
        
        {/* Preload critical resources */}
        <link
          rel="preload"
          href="/fonts/inter-var-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
          key="font-preload"
        />
      </head>
      <body className={`${inter.className} min-h-screen bg-gray-50 flex flex-col`}>
        <ClientRoot>
          <AppContent>
            {children}
          </AppContent>
        </ClientRoot>
        {/* Mailchimp Connected Site Script */}
        <script id="mcjs" dangerouslySetInnerHTML={{ __html: `!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,\"script\",\"https://chimpstatic.com/mcjs-connected/js/users/3eaa5dac5172fda0665352253/8eedee63f72118f2709faaf90.js\");` }} />
      </body>
    </html>
  );
}
