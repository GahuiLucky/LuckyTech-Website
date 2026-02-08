import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { end: 15, suffix: '+', label: 'Jahre Erfahrung' },
  { end: 500, suffix: '+', label: 'Projekte' },
  { end: 100, suffix: '%', label: 'Kundenzufriedenheit' },
  { end: 2, suffix: 'h', label: 'Ø Reaktionszeit' },
];

function AnimatedNumber({ end, suffix, duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = end / (duration * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [inView, end, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function NumbersTicker() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x divide-[#0A0A0A]/10">
      {stats.map((s, i) => (
        <motion.div
          key={s.label}
          className="text-center py-4 md:py-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          <div className="text-5xl md:text-7xl font-bold tracking-tighter text-[#0A0A0A]">
            <AnimatedNumber end={s.end} suffix={s.suffix} />
          </div>
          <div className="text-xs text-[#0A0A0A]/35 uppercase tracking-wider mt-2">
            {s.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
}