import React from 'react';
import HeroBackground from '../components/home/HeroBackground';
import EngHero from '../components/engineering/EngHero';
import EngStatement from '../components/engineering/EngStatement';
import EngFourColumns from '../components/engineering/EngFourColumns';
import EngSolutionCard from '../components/engineering/EngSolutionCard';
import EngProductShowcase from '../components/engineering/EngProductShowcase';
import EngFullImage from '../components/engineering/EngFullImage';
import EngCTA from '../components/engineering/EngCTA';
import { Boxes, Cpu } from 'lucide-react';

export default function Engineering() {
  return (
    <div className="bg-[#0A0A0A] text-[#F5F2EB] overflow-x-hidden relative">
      {/* Animated background from homepage */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
        <HeroBackground />
      </div>

      <div className="relative z-10">
        {/* 1. Hero — fullscreen, massive headline bottom-aligned */}
        <EngHero />

        {/* 2. Statement — large centered text */}
        <EngStatement />

        {/* 3. Four-column approach */}
        <EngFourColumns />

        {/* 4. Solution Cards — two big cards with image + text */}
        <section className="px-6 md:px-16 pb-24 md:pb-36">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <span className="text-[11px] tracking-[0.3em] uppercase text-white/20">Unsere Lösungen</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <EngSolutionCard
                icon={Boxes}
                label="Prototyping"
                headline="Von der Skizze zum funktionsfähigen Prototyp."
                description="Rapid Prototyping, 3D-Druck, CNC-Fertigung und iteratives Testing — alles unter einem Dach. Schnelle Iteration, echtes Feedback."
                imgSrc="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=900&q=80&auto=format"
                index={0}
              />
              <EngSolutionCard
                icon={Cpu}
                label="Entwicklung"
                headline="Komplette Produktentwicklung aus einer Hand."
                description="Hardware, Software, Mechanik, Design — wir bringen Ihr Produkt von der Konzeption bis zur Serienreife."
                imgSrc="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=900&q=80&auto=format"
                index={1}
              />
            </div>
          </div>
        </section>

        {/* 5. Product showcase — alternating image/text blocks */}
        <EngProductShowcase />

        {/* 6. Full-width image + statement */}
        <EngFullImage />

        {/* 7. CTA */}
        <EngCTA />
      </div>
    </div>
  );
}