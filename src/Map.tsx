import { useEffect, useRef } from 'react';
import leaflet from 'leaflet';

function Map() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) {
      return;
    }

    const map = leaflet.map(mapRef.current, {
      zoomControl: false,
      minZoom: 1.4,
    });

    leaflet
      .tileLayer(
        'https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        }
      )
      .addTo(map);

    const x = 0;
    const y = 0;
    const zoom = 0;

    map.setView([x, y], zoom);

    leaflet.marker([51.5, -0.09]).addTo(map);

    leaflet
      .circle([51.508, -0.11], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 500,
      })
      .addTo(map);

    leaflet
      .polygon([
        [51.509, -0.08],
        [51.503, -0.06],
        [51.51, -0.047],
      ])
      .addTo(map);
  }, []);

  return <div ref={mapRef} className="map" />;
}

export default Map;
