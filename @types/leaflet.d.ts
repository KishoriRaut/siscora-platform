// Type definitions for leaflet
import 'leaflet';

declare module 'leaflet' {
  interface TileLayer {
    setUrl(url: string, noRedraw?: boolean): this;
  }
}
