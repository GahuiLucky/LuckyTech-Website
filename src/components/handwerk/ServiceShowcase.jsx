import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// Alternating layout styles for visual variety
const layouts = ['hero-left', 'hero-right', 'split-dark', 'gallery'];

export default function ServiceShowcase({ services }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="space-y-6">
      {services.map((service, index) => {
        const layout = layouts[index % layouts.length];
        const isHovered = hoveredIndex === index;

        if (layout === 'hero-left' || layout === 'hero-right') {
          const isRight = layout === 'hero-right';
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group cursor-pointer"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[500px] md:min-h-[600px] ${isRight ? '' : ''}`}>
                {/* Image */}
                <div className={`relative overflow-hidden ${isRight ? 'lg:order-2' : ''}`}>
                  <motion.img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover min-h-[300px] md:min-h-[600px]"
                    animate={{ scale: isHovered ? 1.06 : 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-[#C8A850]/10"
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                  />
                  {/* Floating number */}
                  <motion.div
                    className="absolute top-6 left-6 text-[8rem] md:text-[12rem] font-bold text-white/10 leading-none pointer-events-none select-none"
                    animate={{ y: isHovered ? -10 : 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </motion.div>
                </div>

                {/* Content */}
                <div className={`flex flex-col justify-center p-10 md:p-16 bg-[#F5F2EB] ${isRight ? 'lg:order-1' : ''}`}>
                  <motion.span
                    className="text-xs tracking-[0.3em] text-[#C8A850] uppercase mb-6"
                    animate={{ x: isHovered ? 10 : 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    Service {String(index + 1).padStart(2, '0')}
                  </motion.span>

                  <h3 className="text-4xl md:text-6xl font-bold tracking-tighter text-[#0A0A0A] mb-6 group-hover:text-[#C8A850] transition-colors duration-500">
                    {service.title}
                  </h3>

                  <p className="text-lg text-[#0A0A0A]/50 leading-relaxed mb-8 max-w-md">
                    {service.description}
                  </p>

                  {/* Features with staggered reveal */}
                  <div className="space-y-3 mb-10">
                    {service.features.map((feature, fi) => (
                      <motion.div
                        key={feature}
                        className="flex items-center gap-3"
                        animate={{ 
                          x: isHovered ? 0 : -8,
                          opacity: isHovered ? 1 : 0.5
                        }}
                        transition={{ duration: 0.4, delay: fi * 0.06 }}
                      >
                        <div className="w-6 h-px bg-[#C8A850]" />
                        <span className="text-sm text-[#0A0A0A]/70">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    animate={{ x: isHovered ? 6 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-[#0A0A0A] border-b border-[#0A0A0A]/20 pb-1 group-hover:border-[#C8A850] group-hover:text-[#C8A850] transition-all">
                      Mehr erfahren <ArrowRight className="w-4 h-4" />
                    </span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          );
        }

        if (layout === 'split-dark') {
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.8 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group cursor-pointer bg-[#0A0A0A] overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 min-h-[500px]">
                {/* Large image */}
                <div className="lg:col-span-2 relative overflow-hidden">
                  <motion.img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover min-h-[300px] md:min-h-[500px]"
                    animate={{ scale: isHovered ? 1.04 : 1 }}
                    transition={{ duration: 0.8 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12">
                    <motion.div
                      className="text-[6rem] md:text-[10rem] font-bold text-white/[0.06] leading-none"
                      animate={{ y: isHovered ? -5 : 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </motion.div>
                  </div>
                </div>

                {/* Content panel */}
                <div className="p-10 md:p-14 flex flex-col justify-center">
                  <span className="text-xs tracking-[0.3em] text-[#C8A850] uppercase mb-6">
                    Service {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-3xl md:text-5xl font-bold tracking-tighter text-[#F5F2EB] mb-6 group-hover:text-[#C8A850] transition-colors duration-500">
                    {service.title}
                  </h3>
                  <p className="text-[#F5F2EB]/50 leading-relaxed mb-8">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3 mb-10">
                    {service.features.map((feature, fi) => (
                      <motion.div
                        key={feature}
                        animate={{ opacity: isHovered ? 1 : 0.4 }}
                        transition={{ duration: 0.3, delay: fi * 0.05 }}
                        className="text-xs text-[#F5F2EB]/60 border border-[#F5F2EB]/10 px-3 py-2 text-center group-hover:border-[#C8A850]/30 transition-colors"
                      >
                        {feature}
                      </motion.div>
                    ))}
                  </div>

                  <motion.div animate={{ x: isHovered ? 6 : 0 }} transition={{ duration: 0.3 }}>
                    <span className="inline-flex items-center gap-2 text-sm text-[#F5F2EB] border-b border-[#F5F2EB]/20 pb-1 group-hover:border-[#C8A850] group-hover:text-[#C8A850] transition-all">
                      Mehr erfahren <ArrowRight className="w-4 h-4" />
                    </span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          );
        }

        // gallery layout
        return (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8 }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="group cursor-pointer relative overflow-hidden min-h-[500px] md:min-h-[700px]"
          >
            {/* Full background image */}
            <motion.img
              src={service.image}
              alt={service.title}
              className="absolute inset-0 w-full h-full object-cover"
              animate={{ scale: isHovered ? 1.05 : 1 }}
              transition={{ duration: 0.8 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />

            {/* Content overlay at bottom */}
            <div className="absolute inset-0 flex flex-col justify-end p-10 md:p-16">
              <motion.span
                className="text-xs tracking-[0.3em] text-[#C8A850] uppercase mb-4"
                animate={{ y: isHovered ? 0 : 10, opacity: isHovered ? 1 : 0.6 }}
                transition={{ duration: 0.4 }}
              >
                Service {String(index + 1).padStart(2, '0')}
              </motion.span>

              <h3 className="text-5xl md:text-7xl font-bold tracking-tighter text-[#F5F2EB] mb-4 group-hover:text-[#C8A850] transition-colors duration-500">
                {service.title}
              </h3>

              <p className="text-lg text-[#F5F2EB]/70 max-w-lg mb-8 leading-relaxed">
                {service.description}
              </p>

              <motion.div
                className="flex flex-wrap gap-3"
                animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.5 }}
              >
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="text-xs text-[#F5F2EB]/80 border border-[#F5F2EB]/20 px-4 py-2 backdrop-blur-sm bg-white/5"
                  >
                    {feature}
                  </span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}