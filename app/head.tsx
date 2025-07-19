import { Metadata } from 'next';

export default function Head() {
  return (
    <>
      {/* Preload critical CSS */}
      <link
        rel="preload"
        href="/_next/static/css/app/layout.css"
        as="style"
      />
      
      {/* Microsoft-specific PWA tags */}
      <meta name="msapplication-TileColor" content="#4f46e5" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      
      {/* Safari Pinned Tab */}
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#4f46e5" />
      
      {/* Viewport configuration */}
      <meta 
        name="viewport" 
        content="width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover" 
        key="viewport"
      />
      
      {/* Theme color configuration - using data-theme for better browser support */}
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <meta name="theme-color" content="#4f46e5" data-react-html="true" suppressHydrationWarning />
      
      {/* Preload critical font */}
      <link
        rel="preload"
        href="/fonts/inter-var-latin.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
        key="font-preload"
      />
    </>
  );
}
