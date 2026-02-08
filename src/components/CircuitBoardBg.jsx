import React from 'react';
import { motion } from 'framer-motion';

// Define circuit paths - these form the PCB traces
const cyanPaths = [
  "M 80,0 L 80,300 L 250,300 L 250,600 L 450,600 L 450,1000",
  "M 250,0 L 250,200 L 500,200 L 500,500 L 750,500 L 750,1000",
  "M 1100,0 L 1100,400 L 850,400 L 850,700 L 600,700 L 600,1000",
  "M 1400,0 L 1400,250 L 1150,250 L 1150,550 L 950,550 L 950,1000",
];

const orangePaths = [
  "M 650,0 L 650,280 L 900,280 L 900,580 L 1200,580 L 1200,1000",
  "M 1600,0 L 1600,350 L 1350,350 L 1350,650 L 1050,650 L 1050,1000",
  "M 400,0 L 400,150 L 700,150 L 700,450 L 1000,450 L 1000,1000",
];

const horizontalPaths = [
  "M 0,180 L 350,180 L 350,220 L 700,220",
  "M 0,500 L 400,500 L 400,540 L 900,540",
  "M 700,750 L 1100,750 L 1100,790 L 1920,790",
  "M 0,350 L 200,350 L 200,380 L 550,380",
  "M 900,150 L 1300,150 L 1300,190 L 1920,190",
];

// Node positions (intersections)
const nodes = [
  { x: 250, y: 300, color: 'cyan' },
  { x: 500, y: 200, color: 'cyan' },
  { x: 500, y: 500, color: 'cyan' },
  { x: 850, y: 400, color: 'cyan' },
  { x: 900, y: 280, color: 'orange' },
  { x: 1200, y: 580, color: 'orange' },
  { x: 700, y: 150, color: 'orange' },
  { x: 1350, y: 350, color: 'orange' },
  { x: 350, y: 180, color: 'cyan' },
  { x: 1100, y: 750, color: 'cyan' },
  { x: 400, y: 500, color: 'orange' },
  { x: 200, y: 350, color: 'cyan' },
];

function TravelingLight({ path, color, duration, delay, id }) {
  const glowColor = color === 'cyan' ? '#06b6d4' : '#f97316';
  
  return (
    <>
      <circle r="5" fill={glowColor} opacity="0.9">
        <animateMotion
          dur={`${duration}s`}
          repeatCount="indefinite"
          begin={`${delay}s`}
          path={path}
        />
      </circle>
      <circle r="12" fill={glowColor} opacity="0.4" filter="url(#pcbGlow)">
        <animateMotion
          dur={`${duration}s`}
          repeatCount="indefinite"
          begin={`${delay}s`}
          path={path}
        />
      </circle>
      <circle r="25" fill={glowColor} opacity="0.15" filter="url(#pcbGlow)">
        <animateMotion
          dur={`${duration}s`}
          repeatCount="indefinite"
          begin={`${delay}s`}
          path={path}
        />
      </circle>
    </>
  );
}

export default function CircuitBoardBg() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[5]" style={{ opacity: 0.55 }}>
      <svg
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1920 1000"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <filter id="pcbGlow">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="nodeGlow">
            <feGaussianBlur stdDeviation="10" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="blur" />
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* === STATIC TRACES === */}

        {/* Cyan Traces */}
        {cyanPaths.map((d, i) => (
          <path key={`ct-${i}`} d={d} stroke="#06b6d4" strokeWidth="4" fill="none" opacity="0.35" strokeLinecap="round" strokeLinejoin="round" />
        ))}

        {/* Orange Traces */}
        {orangePaths.map((d, i) => (
          <path key={`ot-${i}`} d={d} stroke="#f97316" strokeWidth="4" fill="none" opacity="0.35" strokeLinecap="round" strokeLinejoin="round" />
        ))}

        {/* Horizontal connectors */}
        {horizontalPaths.map((d, i) => (
          <path key={`hp-${i}`} d={d} stroke={i % 2 === 0 ? '#06b6d4' : '#f97316'} strokeWidth="3" fill="none" opacity="0.25" strokeLinecap="round" strokeLinejoin="round" />
        ))}

        {/* === CONNECTION NODES (solder pads) === */}
        {nodes.map((node, i) => {
          const baseColor = node.color === 'cyan' ? '#06b6d4' : '#f97316';
          const darkColor = node.color === 'cyan' ? '#0891b2' : '#ea580c';
          return (
            <g key={`node-${i}`}>
              {/* Outer glow ring */}
              <circle cx={node.x} cy={node.y} r="14" fill={darkColor} opacity="0.4" filter="url(#nodeGlow)" />
              {/* Pad ring */}
              <circle cx={node.x} cy={node.y} r="9" fill="none" stroke={baseColor} strokeWidth="2" opacity="0.6" />
              {/* Inner dot */}
              <circle cx={node.x} cy={node.y} r="4" fill={baseColor} opacity="0.9" />
              {/* Pulsing animation */}
              <circle cx={node.x} cy={node.y} r="9" fill="none" stroke={baseColor} strokeWidth="1.5" opacity="0.6">
                <animate attributeName="r" values="9;18;9" dur={`${2 + i * 0.3}s`} repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.6;0;0.6" dur={`${2 + i * 0.3}s`} repeatCount="indefinite" />
              </circle>
            </g>
          );
        })}

        {/* === TRAVELING LIGHTS ON TRACES (like cars on highway) === */}
        
        {/* Cyan path travelers */}
        {cyanPaths.map((path, i) => (
          <React.Fragment key={`cyan-travelers-${i}`}>
            <TravelingLight path={path} color="cyan" duration={4 + i * 0.5} delay={i * 0.8} id={`ct-travel-${i}`} />
            <TravelingLight path={path} color="cyan" duration={4 + i * 0.5} delay={i * 0.8 + 2} id={`ct-travel2-${i}`} />
          </React.Fragment>
        ))}

        {/* Orange path travelers */}
        {orangePaths.map((path, i) => (
          <React.Fragment key={`orange-travelers-${i}`}>
            <TravelingLight path={path} color="orange" duration={3.5 + i * 0.6} delay={i * 1.0 + 0.5} id={`ot-travel-${i}`} />
            <TravelingLight path={path} color="orange" duration={3.5 + i * 0.6} delay={i * 1.0 + 2.5} id={`ot-travel2-${i}`} />
          </React.Fragment>
        ))}

        {/* Horizontal path travelers */}
        {horizontalPaths.map((path, i) => (
          <TravelingLight
            key={`hp-travel-${i}`}
            path={path}
            color={i % 2 === 0 ? 'cyan' : 'orange'}
            duration={3 + i * 0.4}
            delay={i * 0.6 + 1}
            id={`hp-travel-${i}`}
          />
        ))}
      </svg>
    </div>
  );
}