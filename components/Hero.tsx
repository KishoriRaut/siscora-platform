import HeroSection from './HeroSection';

export default function Hero() {
  return (
    <HeroSection
      title={
        <>
          <span className="block">Build better tools</span>
          <span className="block text-indigo-600">with Siscora</span>
        </>
      }
      subtitle="Transform your business with our cutting-edge SaaS solutions designed to streamline your operations and drive growth."
      primaryButton={{
        text: 'Explore Tools',
        href: '/tools'
      }}
      secondaryButton={{
        text: 'Contact Us',
        href: '/contact'
      }}
      isHome={true}
    />
  );
}
