import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../../utils';
import { motion } from 'framer-motion';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const POSITION = [51.1657, 10.4515];

export default function HomeContactSection() {
  return (
    <section className="min-h-[80vh] relative py-20 md:py-32 px-6 bg-gradient-to-b from-[#0A0A0A]/90 to-[#1A1A2E]/90">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1 }}
        >
          {/* Header */}
          <div className="text-center mb-16 md:mb-20">
            <div className="text-sm tracking-[0.4em] text-white/30 mb-4">/ KONTAKT</div>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 text-white">
              LET'S TALK
            </h2>
            <p className="text-xl text-white/50 max-w-2xl mx-auto mb-10">
              Bereit für Ihr nächstes Projekt? Wir freuen uns auf Ihre Anfrage.
            </p>
            <Link
              to={createPageUrl('Kontakt')}
              className="inline-flex items-center gap-3 bg-white hover:bg-white/90 text-[#0A0A0A] font-bold text-lg px-10 py-5 transition-all group"
            >
              Kontakt aufnehmen
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left: Map */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="h-[300px] md:h-[400px] overflow-hidden border border-white/10">
                <MapContainer
                  center={POSITION}
                  zoom={6}
                  scrollWheelZoom={false}
                  style={{ height: '100%', width: '100%' }}
                  attributionControl={false}
                >
                  <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" />
                  <Marker position={POSITION}>
                    <Popup>
                      <div className="text-sm font-bold text-gray-900">
                        LuckyTech<br />
                        <span className="font-normal text-gray-600">Musterstraße 123, 12345 Musterstadt</span>
                      </div>
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>
            </motion.div>

            {/* Right: Contact Info */}
            <motion.div
              className="flex flex-col justify-center space-y-6"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              {[
                { icon: Mail, title: 'E-Mail', value: 'info@luckytech.de', href: 'mailto:info@luckytech.de' },
                { icon: Phone, title: 'Telefon', value: '+49 123 456 7890', href: 'tel:+491234567890' },
                { icon: MapPin, title: 'Standort', value: 'Musterstraße 123, 12345 Musterstadt' },
              ].map((c, i) => (
                <motion.div
                  key={c.title}
                  className="flex items-center gap-5 p-6 bg-white/5 border border-white/10 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                >
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                    <c.icon className="w-5 h-5 text-white/60" />
                  </div>
                  <div>
                    <div className="text-xs text-white/40 uppercase tracking-wider mb-1">{c.title}</div>
                    {c.href ? (
                      <a href={c.href} className="text-lg text-white/80 hover:text-white transition-colors">{c.value}</a>
                    ) : (
                      <p className="text-lg text-white/80">{c.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}