declare module 'react-leaflet' {
  import { ComponentType, CSSProperties, ReactNode } from 'react';
  import { LatLngExpression, LatLngTuple } from 'leaflet';

  export interface MapContainerProps {
    center: LatLngExpression;
    zoom: number;
    style?: CSSProperties;
    scrollWheelZoom?: boolean;
    children?: ReactNode;
    className?: string;
  }

  export interface TileLayerProps {
    url: string;
    attribution: string;
  }

  export interface MarkerProps {
    position: LatLngExpression;
    children?: ReactNode;
  }

  export interface PopupProps {
    children?: ReactNode;
  }

  export const MapContainer: ComponentType<MapContainerProps>;
  export const TileLayer: ComponentType<TileLayerProps>;
  export const Marker: ComponentType<MarkerProps>;
  export const Popup: ComponentType<PopupProps>;
}
