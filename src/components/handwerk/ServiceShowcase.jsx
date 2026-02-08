import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function ServiceShowcase({ services }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="space-y-0">
      {services.map((service, index) => (
        <motion.div
          key={service.title}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          className="group border-b border-[#0A0A0A]/10 cursor-pointer"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 py-10 md:py-16 items-center">
            {/* Number */}
            <div className="lg:col-span-1">
              <span className="text-sm text-[#0A0A0A]/30 font-mono">
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>

            {/* Title */}
            <div className="lg:col-span-4">
              <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-[#0A0A0A] group-hover:text-[#C8A850] transition-colors duration-500">
                {service.title}
              </h3>
            </div>

            {/* Image - slides in on hover */}
            <div className="lg:col-span-3 overflow-hidden h-[200px] lg:h-[160px] relative rounded-sm">
              <motion.img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
                animate={{
                  scale: hoveredIndex === index ? 1.05 : 1,
                }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              />
            </div>

            {/* Description + Arrow */}
            <div className="lg:col-span-4 flex items-center justify-between gap-6">
              <p className="text-[#0A0A0A]/60 text-base leading-relaxed max-w-sm">
                {service.description}
              </p>
              <motion.div
                animate={{
                  x: hoveredIndex === index ? 8 : 0,
                  opacity: hoveredIndex === index ? 1 : 0.3,
                }}
                transition={{ duration: 0.3 }}
              >
                <ArrowRight className="w-6 h-6 text-[#0A0A0A] flex-shrink-0" />
              </motion.div>
            </div>
          </div>

          {/* Expanding features on hover */}
          <motion.div
            initial={false}
            animate={{
              height: hoveredIndex === index ? 'auto' : 0,
              opacity: hoveredIndex === index ? 1 : 0,
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-10 pl-0 lg:pl-[calc(100%/12)]">
              {service.features.map((feature, fi) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ 
                    opacity: hoveredIndex === index ? 1 : 0, 
                    y: hoveredIndex === index ? 0 : 10 
                  }}
                  transition={{ duration: 0.3, delay: fi * 0.05 }}
                  className="text-sm text-[#0A0A0A]/50 border-l-2 border-[#C8A850]/40 pl-4 py-1"
                >
                  {feature}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}