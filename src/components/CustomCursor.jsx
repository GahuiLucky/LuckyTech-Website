import React, { useEffect, useState, useRef } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);
  const cursorX = useSpring(0, { stiffness: 800, damping: 40, mass: 0.2 });
  const cursorY = useSpring(0, { stiffness: 800, damping: 40, mass: 0.2 });
  const ringX = useSpring(0, { stiffness: 500, damping: 35, mass: 0.3 });
  const ringY = useSpring(0, { stiffness: 500, damping: 35, mass: 0.3 });
  const isTouchDevice = useRef(false);

  useEffect(() => {
    isTouchDevice.current = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice.current) return;

    const move = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      ringX.set(e.clientX);
      ringY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const down = () => setClicking(true);
    const up = () => setClicking(false);
    const enter = () => setVisible(true);
    const leave = () => setVisible(false);

    const checkHover = (e) => {
      const el = e.target.closest('a, button, [role="button"], [tabindex], input, textarea, select, [data-cursor-hover]');
      setHovering(!!el);
    };

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', checkHover);
    window.addEventListener('mousedown', down);
    window.addEventListener('mouseup', up);
    document.addEventListener('mouseenter', enter);
    document.addEventListener('mouseleave', leave);

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', checkHover);
      window.removeEventListener('mousedown', down);
      window.removeEventListener('mouseup', up);
      document.removeEventListener('mouseenter', enter);
      document.removeEventListener('mouseleave', leave);
    };
  }, [visible]);

  if (isTouchDevice.current) return null;

  return (
    <>
      <style>{`
        @media (pointer: fine) {
          *, *::before, *::after {
            cursor: none !important;
          }
        }
      `}</style>

      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: clicking ? 6 : hovering ? 8 : 5,
          height: clicking ? 6 : hovering ? 8 : 5,
          opacity: visible ? 1 : 0,
        }}
        transition={{ duration: 0.15 }}
      >
        <div className="w-full h-full rounded-full bg-white" />
      </motion.div>

      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: clicking ? 28 : hovering ? 52 : 36,
          height: clicking ? 28 : hovering ? 52 : 36,
          opacity: visible ? 1 : 0,
          borderWidth: hovering ? 1.5 : 1,
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 20, mass: 0.6 }}
      >
        <div
          className="w-full h-full rounded-full transition-colors duration-200"
          style={{
            border: `1px solid ${hovering ? 'rgba(200,168,80,0.6)' : 'rgba(245,242,235,0.25)'}`,
            backgroundColor: hovering ? 'rgba(200,168,80,0.04)' : 'transparent',
          }}
        />
      </motion.div>
    </>
  );
}