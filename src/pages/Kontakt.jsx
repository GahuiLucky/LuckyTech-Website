import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import ContactForm from '../components/kontakt/ContactForm';

function FixMapResize() {
  const map = useMap();
  useEffect(() => {
    if (!map) return;
    const t = setTimeout(() => {
      try { map.invalidateSize(); } catch (e) {}
    }, 150);
    const onResize = () => { try { map.invalidateSize(); } catch (e) {} };
    window.addEventListener('resize', onResize);
    return () => { clearTimeout(t); window.removeEventListener('resize', onResize); };
  }, [map]);
  return null;
}

export default function Contact() {
  return (
    <main className="bg-[#0A0A0A] text-white min-h-screen relative">
      {/* Full-screen map background */}
      <div className="absolute inset-0 z-0">
        <MapContainer
          center={[49.08994, 9.19641]}
          zoom={15}
          dragging={false}
          touchZoom={false}
          scrollWheelZoom={false}
          doubleClickZoom={false}
          boxZoom={false}
          keyboard={false}
          zoomControl={false}
          style={{ height: '100%', width: '100%' }}
          attributionControl={false}
        >
          <FixMapResize />
          <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" />
        </MapContainer>
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content over map */}
      <div className="relative z-10 min-h-screen flex items-center px-4 md:px-8 py-20 md:py-28">
        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <ContactForm />
        </motion.div>
      </div>
    </main>
  );
}