import React from 'react';
import ServiceDetailLayout from '../components/handwerk/ServiceDetailLayout';

const data = {
  title: 'Wallbox',
  tagline: 'Professionelle Ladeinfrastruktur für Elektromobilität',
  heroImage: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=1920&q=80',
  intro: 'Die Zukunft der Mobilität beginnt in Ihrer Garage. Wir planen und installieren Ihre Wallbox fachgerecht — vom Netzanschluss bis zur Inbetriebnahme, inklusive Förderberatung und Lastmanagement.',
  features: [
    { title: 'Bedarfsanalyse', description: 'Prüfung der vorhandenen Elektroinstallation, Leistungskapazität und optimale Platzierung der Ladestation.' },
    { title: 'Installation & Anschluss', description: 'Fachgerechte Montage und Anschluss der Wallbox an Ihr Hausnetz, inklusive aller notwendigen Sicherungskomponenten.' },
    { title: 'Lastmanagement', description: 'Intelligentes Energiemanagement, damit Ihr Hausnetz nicht überlastet wird — auch bei mehreren Ladepunkten.' },
    { title: 'PV-Überschussladen', description: 'Kopplung mit Ihrer Photovoltaikanlage, um mit eigenem Solarstrom zu laden und Kosten zu minimieren.' },
    { title: 'Abrechnungssysteme', description: 'Integration von Abrechnungslösungen für Mehrfamilienhäuser und Firmenflotten.' },
    { title: 'Wartung & Service', description: 'Regelmäßige Inspektion und Firmware-Updates für maximale Zuverlässigkeit und Sicherheit.' },
  ],
  technologies: [
    'ABB Terra', 'Keba KeContact', 'Webasto Unite', 'Easee Home',
    'OCPP 1.6 / 2.0', 'Modbus TCP', 'SMA Sunny Home Manager', 'Solar Edge'
  ],
  caseStudy: {
    title: 'Tiefgarage MFH — 12 Ladepunkte',
    description: 'Installation von 12 vernetzten Ladepunkten in einer Tiefgarage eines Mehrfamilienhauses. Dynamisches Lastmanagement sorgt für optimale Verteilung der verfügbaren Leistung. Individuelle Abrechnung über RFID-Karten.',
    image: 'https://images.unsplash.com/photo-1647500662321-3aab5f0850a7?w=1200&q=80',
    stats: [
      { value: '12', label: 'Ladepunkte' },
      { value: '150kW', label: 'Gesamtleistung' },
      { value: 'RFID', label: 'Abrechnung' },
    ],
  },
  relatedServices: [
    { title: 'Smarthome', page: 'Smarthome', image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=900&q=80' },
    { title: 'Elektroinstallation', page: 'Elektroinstallation', image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=900&q=80' },
    { title: 'Reparatur', page: 'Reparatur', image: 'https://images.unsplash.com/photo-1581092918484-8313e1f7e8c6?w=900&q=80' },
  ],
};

export default function Wallbox() {
  return <ServiceDetailLayout service={data} />;
}