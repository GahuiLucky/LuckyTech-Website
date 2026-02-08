import React from 'react';
import ServiceDetailLayout from '../components/handwerk/ServiceDetailLayout';

const data = {
  title: 'Elektro—\ninstallation',
  tagline: 'Komplette Elektrik für Neubau, Sanierung und Gewerbe',
  heroImage: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1920&q=80',
  intro: 'Von der ersten Leitung bis zum letzten Schalter — wir planen und realisieren Ihre gesamte Elektroinstallation. Normgerecht, zukunftssicher und mit dem Anspruch, den Sie von einem Meisterbetrieb erwarten dürfen.',
  features: [
    { title: 'Neubau-Elektrik', description: 'Vollständige Elektroplanung und Installation für Neubauprojekte — von der Unterverteilung bis zur letzten Steckdose.' },
    { title: 'Sanierung', description: 'Modernisierung bestehender Elektroinstallationen unter Einhaltung aktueller Normen und Sicherheitsstandards.' },
    { title: 'Gewerbe & Industrie', description: 'Leistungsstarke Installationen für Büros, Hallen und Produktionsstätten mit Drehstrom und Starkstromanschlüssen.' },
    { title: 'Schaltschrankbau', description: 'Individuelle Planung und Fertigung von Schaltschränken und Unterverteilungen nach Maß.' },
    { title: 'Beleuchtungsplanung', description: 'Professionelle Lichtplanung für Wohn- und Gewerberäume — energieeffizient und stimmungsvoll.' },
    { title: 'Prüfung & Abnahme', description: 'E-Check, DGUV V3 Prüfung und Dokumentation aller elektrischen Anlagen nach aktuellen Vorschriften.' },
  ],
  technologies: [
    'VDE 0100', 'DIN 18015', 'KNX-Vorbereitung', 'CAD-Planung',
    'E-Check Zertifizierung', 'DGUV V3', 'LED-Technologie', 'USV-Systeme'
  ],
  caseStudy: {
    title: 'Bürokomplex — 2.500m² Neuinstallation',
    description: 'Komplette Elektroinstallation eines modernen Bürogebäudes: 400 Arbeitsplätze, strukturierte Verkabelung, Serverraum-Infrastruktur und intelligente Beleuchtungssteuerung. Termingerecht realisiert in nur 8 Wochen.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
    stats: [
      { value: '2.500m²', label: 'Fläche' },
      { value: '400', label: 'Arbeitsplätze' },
      { value: '8 Wochen', label: 'Bauzeit' },
    ],
  },
  relatedServices: [
    { title: 'Smarthome', page: 'Smarthome', image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=900&q=80' },
    { title: 'Wallbox', page: 'Wallbox', image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=900&q=80' },
    { title: 'Reparatur', page: 'Reparatur', image: 'https://images.unsplash.com/photo-1581092918484-8313e1f7e8c6?w=900&q=80' },
  ],
};

export default function Elektroinstallation() {
  return <ServiceDetailLayout service={data} />;
}