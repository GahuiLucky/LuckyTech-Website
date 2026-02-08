import React from 'react';
import ServiceDetailLayout from '../components/handwerk/ServiceDetailLayout';

const data = {
  title: 'Reparatur\n& Service',
  tagline: 'Schnelle Hilfe, wenn es zählt — rund um die Uhr',
  heroImage: 'https://images.unsplash.com/photo-1581092918484-8313e1f7e8c6?w=1920&q=80',
  intro: 'Ob Notfall oder geplante Wartung — unser Service-Team ist für Sie da. Schnell, kompetent und transparent. Wir diagnostizieren, reparieren und dokumentieren — damit Sie sich auf Ihre Elektrik verlassen können.',
  features: [
    { title: '24/7 Notdienst', description: 'Rund um die Uhr erreichbar bei elektrischen Notfällen — Stromausfall, Kurzschluss oder defekte Anlagen.' },
    { title: 'Fehlerdiagnose', description: 'Systematische Fehlersuche mit modernen Messgeräten für schnelle und präzise Identifikation des Problems.' },
    { title: 'Reparatur & Austausch', description: 'Professionelle Reparatur oder fachgerechter Austausch defekter Komponenten — von der Steckdose bis zum Sicherungskasten.' },
    { title: 'E-Check', description: 'Regelmäßige Prüfung Ihrer gesamten Elektroanlage nach VDE-Normen für maximale Sicherheit.' },
    { title: 'Wartungsverträge', description: 'Individuelle Wartungspläne für Wohn- und Gewerbeimmobilien mit planbaren Kosten und Prioritäts-Service.' },
    { title: 'Dokumentation', description: 'Lückenlose Dokumentation aller Arbeiten und Prüfprotokolle für Ihre Unterlagen und Versicherung.' },
  ],
  technologies: [
    'Thermografie', 'Isolationsmessung', 'Netzqualitätsanalyse', 'Erdungsmessung',
    'VDE-Prüfgeräte', 'Endoskopie-Kameras', 'Digitale Protokollierung', 'GPS-Flottenmanagement'
  ],
  caseStudy: {
    title: 'Hotelkette — Wartungsvertrag',
    description: 'Übernahme der kompletten Elektro-Wartung für 5 Hotelstandorte. Quartalsweise E-Checks, Notdienst-Bereitschaft und proaktiver Komponentenaustausch reduzieren ungeplante Ausfälle um über 90%.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80',
    stats: [
      { value: '5', label: 'Standorte' },
      { value: '-90%', label: 'Ausfälle' },
      { value: '< 2h', label: 'Reaktionszeit' },
    ],
  },
  relatedServices: [
    { title: 'Smarthome', page: 'Smarthome', image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=900&q=80' },
    { title: 'Wallbox', page: 'Wallbox', image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=900&q=80' },
    { title: 'Elektroinstallation', page: 'Elektroinstallation', image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=900&q=80' },
  ],
};

export default function Reparatur() {
  return <ServiceDetailLayout service={data} />;
}