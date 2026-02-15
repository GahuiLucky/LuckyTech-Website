// src/components/HomeContactSection.jsx
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../../utils';
import { motion } from 'framer-motion';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const POSITION = [49.08994, 9.19641]; // Im Rappen 11, 74388 Talheim

function FixMapResize() {
  const map = useMap();
  useEffect(() => {
    if (!map) return;
    const t = setTimeout(() => {
      try { map.invalidateSize(); } catch (e) {}
    }, 150);

    const onLoad = () => {
      setTimeout(() => {
        try { map.invalidateSize(); } catch (e) {}
      }, 80);
    };
    map.on('load', onLoad);

    const onResize = () => {
      try { map.invalidateSize(); } catch (e) {}
    };
    window.addEventListener('resize', onResize);

    return () => {
      clearTimeout(t);
      map.off('load', onLoad);
      window.removeEventListener('resize', onResize);
    };
  }, [map]);

  return null;
}

export default function HomeContactSection() {
  const mapRef = useRef(null);
  const [mapReady, setMapReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => {
      if (mapRef.current && typeof mapRef.current.invalidateSize === 'function') {
        try { mapRef.current.invalidateSize(); } catch (e) {}
      }
      setMapReady(true);
    }, 200);

    const onResize = () => {
      if (mapRef.current && typeof mapRef.current.invalidateSize === 'function') {
        try { mapRef.current.invalidateSize(); } catch (e) {}
      }
    };
    window.addEventListener('resize', onResize);

    return () => {
      clearTimeout(t);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const contacts = [
    { icon: Mail, title: 'E‑Mail', value: 'info.luckytech@icloud.com', href: 'mailto:info.luckytech@icloud.com' },
    { icon: Phone, title: 'Telefon', value: '+49 123 456 7890', href: 'tel:+491234567890' },
    { icon: MapPin, title: 'Standort', value: 'Im Rappen 11, 74388 Talheim' },
  ];

  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] pt-0 pb-20 px-4 md:px-6 lg:px-8">
      {/* Vollflächige Karte als Hintergrund (immer interaktiv geladen, interactions off by default) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <MapContainer
          center={[49.08994, 9.19641]} // inline tuple — avoids TS tuple annotation issues in .jsx
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
          whenReady={(mapInstance) => {
            // set ref to the Leaflet Map instance
            mapRef.current = mapInstance;
            // small delay to avoid size issues on initial render
            setTimeout(() => {
              try { mapInstance.invalidateSize(); } catch (e) {}
            }, 120);
          }}
        >
          <FixMapResize />
          <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" />
          {/* Marker intentionally removed */}
        </MapContainer>
      </div>

      {/* Inhalt über der Karte */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9 }}
          className="pt-6 md:pt-8 px-4"
        >
          <div className="text-center mb-6 md:mb-10">
            <div className="text-sm tracking-[0.4em] text-white/70 mb-2">/ KONTAKT</div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-2 text-white">
              LET'S TALK
            </h2>
            <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto mb-4">
              Bereit für Ihr nächstes Projekt? Wir freuen uns auf Ihre Anfrage.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to={createPageUrl('Kontakt')}
                className="inline-flex items-center gap-3 bg-white hover:bg-white/95 text-[#0A0A0A] font-bold text-sm md:text-base px-5 py-3 rounded shadow w-full sm:w-auto justify-center"
                aria-label="Kontakt aufnehmen"
              >
                Kontakt aufnehmen
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Desktop: Kontakt-Kacheln als Sidebar */}
      <div className="hidden lg:block absolute right-8 top-1/3 z-30 w-80">
        <div className="flex flex-col gap-4">
          {contacts.map((c, i) => (
            <motion.div key={c.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 + i * 0.06 }}>
              <div className="p-5 bg-black/50 backdrop-blur-md border border-white/10 rounded-lg shadow-lg text-white">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/6 border border-white/10 flex items-center justify-center flex-shrink-0">
                    <c.icon className="w-5 h-5 text-white/90" />
                  </div>
                  <div className="break-words">
                    <div className="text-xs text-white/60 uppercase tracking-wider mb-1">{c.title}</div>
                    {c.href ? (
                      <a href={c.href} className="text-lg text-white/90 hover:text-white transition-colors">{c.value}</a>
                    ) : (
                      <p className="text-lg text-white/90">{c.value}</p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile / Tablet: Kontakt-Kacheln inline unter dem header */}
      <div className="lg:hidden relative z-20 max-w-3xl mx-auto mt-8 px-4">
        <div className="flex flex-col gap-4">
          {contacts.map((c, i) => (
            <motion.div key={c.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.06 + i * 0.05 }}>
              <div className="p-4 bg-black/50 backdrop-blur-md border border-white/8 rounded-lg text-white">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/6 border border-white/10 flex items-center justify-center flex-shrink-0">
                    <c.icon className="w-4.5 h-4.5 text-white/90" />
                  </div>
                  <div>
                    <div className="text-xs text-white/60 uppercase tracking-wider mb-1">{c.title}</div>
                    {c.href ? (
                      <a href={c.href} className="text-base text-white/90 hover:text-white transition-colors">{c.value}</a>
                    ) : (
                      <p className="text-base text-white/90">{c.value}</p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}