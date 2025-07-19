'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import styles from '../app/contact/page.module.css';

// Dynamically import the Map component to avoid SSR issues
const MapWithNoSSR = dynamic(
  () => import('react-leaflet').then((mod) => {
    const { MapContainer, TileLayer, Marker, Popup } = mod;
    
    // Create a custom marker icon
    const createCustomIcon = (color = '#4F46E5') => {
      const L = require('leaflet');
      return L.divIcon({
        html: `<svg width="30" height="42" viewBox="0 0 30 42" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 0C6.71573 0 0 6.71573 0 15C0 26.25 15 42 15 42C15 42 30 26.25 30 15C30 6.71573 23.2843 0 15 0Z" fill="${color}"/>
          <circle cx="15" cy="15" r="8" fill="white"/>
        </svg>`,
        className: 'custom-marker',
        iconSize: [30, 42],
        iconAnchor: [15, 42],
        popupAnchor: [0, -42]
      });
    };
    
    const MapComponent = () => {
      // Coordinates for Kathmandu, Nepal
      const position = [27.7172, 85.3240] as [number, number];
      const [isClient, setIsClient] = useState(false);
      
      useEffect(() => {
        setIsClient(true);
        
        // Fix for Next.js and Leaflet marker icons
        if (typeof window !== 'undefined') {
          const L = require('leaflet');
          
          // @ts-ignore
          delete L.Icon.Default.prototype._getIconUrl;
          
          // @ts-ignore
          L.Icon.Default.mergeOptions({
            iconRetinaUrl: '/images/marker-icon-2x.png',
            iconUrl: '/images/marker-icon.png',
            shadowUrl: '/images/marker-shadow.png',
          });
        }
      }, []);

      const tileLayerUrl = process.env.NEXT_PUBLIC_LEAFLET_URL || 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
      const attribution = process.env.NEXT_PUBLIC_LEAFLET_ATTRIBUTION || '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

      if (!isClient) {
        return (
          <div className={styles.mapContainer}>
            <div className={styles.loadingMap}>
              Loading map...
            </div>
          </div>
        );
      }

      return (
        <div className={styles.mapContainer}>
          <MapContainer 
            center={position} 
            zoom={15} 
            style={{ height: '100%', width: '100%' }}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution={attribution}
              url={tileLayerUrl}
            />
            <Marker 
              position={position}
              icon={createCustomIcon()}
            >
              <Popup>
                <div className="text-center p-2">
                  <h3 className="font-bold text-indigo-700">Siscora Technologies</h3>
                  <p className="text-sm text-gray-700">Talchikhel 15, Satdobato</p>
                  <p className="text-sm text-gray-700">Lalitpur, Nepal</p>
                  <a 
                    href="https://www.google.com/maps/dir//27.7172,85.3240" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-sm text-indigo-600 hover:underline"
                  >
                    Get Directions
                  </a>
                </div>
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      );
    };
    
    return MapComponent;
  }),
  { 
    ssr: false,
    loading: () => (
      <div className="h-full w-full bg-gray-100 rounded-lg flex items-center justify-center">
        <div className="text-gray-500">Loading map...</div>
      </div>
    )
  }
);

// This is a wrapper component to handle the dynamic import
const Map = () => {
  return <MapWithNoSSR />;
};

export default Map;
