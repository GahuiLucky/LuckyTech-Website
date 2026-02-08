import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { motion } from 'framer-motion';

const POSITION = [51.1657, 10.4515]; // Center of Germany as placeholder

export default function LocationMap() {
  return (
    <motion.div
      className="h-[280px] border border-[#F5F2EB]/10 overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 1.0, type: "spring", stiffness: 60 }}
    >
      <MapContainer
        center={POSITION}
        zoom={6}
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%' }}
        attributionControl={false}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />
        <Marker position={POSITION}>
          <Popup>
            <div className="text-sm font-bold text-gray-900">
              LuckyTech<br />
              <span className="font-normal text-gray-600">Musterstraße 123, 12345 Musterstadt</span>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </motion.div>
  );
}