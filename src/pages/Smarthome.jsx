import React from 'react';
import ServiceDetailLayout from '../components/handwerk/ServiceDetailLayout';

const data = {
  title: 'Smarthome',
  tagline: 'Intelligente Gebäudeautomation für modernes Wohnen',
  heroImage: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=1920&q=80',
  intro: 'Wir verwandeln Ihr Zuhause in ein intelligentes Ökosystem. Licht, Heizung, Sicherheit und Multimedia — alles miteinander vernetzt, intuitiv steuerbar und auf Ihre Bedürfnisse zugeschnitten.',
  features: [
    { title: 'Lichtsteuerung', description: 'Automatisierte Beleuchtungsszenarien, dimmbare LED-Systeme und Tageslichtsteuerung für perfekte Atmosphäre in jedem Raum.' },
    { title: 'Heizungssteuerung', description: 'Intelligente Thermostate und Raumklimasteuerung, die sich an Ihren Tagesrhythmus anpassen und Energie sparen.' },
    { title: 'Sicherheitssysteme', description: 'Videoüberwachung, Alarmanlagen und Zutrittskontrolle — alles in einer App, von überall steuerbar.' },
    { title: 'Sprachsteuerung', description: 'Nahtlose Integration von Alexa, Google Home und Apple HomeKit für komfortable Bedienung per Sprachbefehl.' },
    { title: 'Multiroom Audio', description: 'Verteilte Audiosysteme mit Sonos, HEOS oder eigener Einbaulösung für Musik in jedem Raum.' },
    { title: 'Jalousien & Rollläden', description: 'Automatisierte Beschattung nach Sonnenstand, Tageszeit oder individuellem Szenario.' },
  ],
  technologies: [
    'KNX / EIB', 'Loxone', 'Homematic IP', 'Zigbee', 'Z-Wave',
    'Apple HomeKit', 'Google Home', 'Amazon Alexa'
  ],
  caseStudy: {
    title: 'Villa am See — Vollautomatisierung',
    description: 'Komplette Smarthome-Integration einer 350m² Villa: 120 Aktoren, Licht-, Heizungs- und Jalousiesteuerung, Multiroom Audio und ein umfassendes Sicherheitssystem. Alles steuerbar über eine zentrale App und Sprachbefehle.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80',
    stats: [
      { value: '120+', label: 'Aktoren' },
      { value: '35%', label: 'Energieersparnis' },
      { value: '1 App', label: 'Steuerung' },
    ],
  },
  relatedServices: [
    { title: 'Wallbox', page: 'Wallbox', image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=900&q=80' },
    { title: 'Elektroinstallation', page: 'Elektroinstallation', image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=900&q=80' },
    { title: 'Reparatur', page: 'Reparatur', image: 'https://images.unsplash.com/photo-1581092918484-8313e1f7e8c6?w=900&q=80' },
  ],
};

export default function Smarthome() {
  return <ServiceDetailLayout service={data} />;
}