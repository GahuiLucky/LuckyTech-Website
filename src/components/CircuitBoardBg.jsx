import React from 'react';

// Circuit paths - PCB traces with right-angle bends
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

// Nodes at path intersections/bends — simple solder pads, no glow
const nodes = [
  { x: 250, y: 300, color: 'cyan' },
  { x: 500, y: 200, color: 'cyan' },
  { x: 500, y: 500, color: 'cyan' },
  { x: 850, y: 400, color: 'cyan' },
  { x: 450, y: 600, color: 'cyan' },
  { x: 750, y: 500, color: 'cyan' },
  { x: 1100, y: 400, color: 'cyan' },
  { x: 1150, y: 250, color: 'cyan' },
  { x: 850, y: 700, color: 'cyan' },
  { x: 950, y: 550, color: 'cyan' },
  { x: 900, y: 280, color: 'orange' },
  { x: 900, y: 580, color: 'orange' },
  { x: 1200, y: 580, color: 'orange' },
  { x: 700, y: 150, color: 'orange' },
  { x: 700, y: 450, color: 'orange' },
  { x: 1350, y: 350, color: 'orange' },
  { x: 1350, y: 650, color: 'orange' },
  { x: 1050, y: 650, color: 'orange' },
  { x: 350, y: 180, color: 'cyan' },
  { x: 400, y: 500, color: 'orange' },
  { x: 200, y: 350, color: 'cyan' },
  { x: 1100, y: 750, color: 'cyan' },
  { x: 1300, y: 150, color: 'orange' },
];

function TravelingLight({ path, color, duration, delay }) {
  const glowColor = color === 'cyan' ? '#06b6d4' : '#f97316';
  return (
    <>
      {/* Bright core */}
      <circle r="4" fill="#fff" opacity="0.95">
        <animateMotion dur={`${duration}s`} repeatCount="indefinite" begin={`${delay}s`} path={path} />
      </circle>
      {/* Colored halo */}
      <circle r="8" fill={glowColor} opacity="0.7" filter="url(#pcbGlow)">
        <animateMotion dur={`${duration}s`} repeatCount="indefinite" begin={`${delay}s`} path={path} />
      </circle>
      {/* Wide soft glow */}
      <circle r="20" fill={glowColor} opacity="0.2" filter="url(#pcbGlow)">
        <animateMotion dur={`${duration}s`} repeatCount="indefinite" begin={`${delay}s`} path={path} />
      </circle>
    </>
  );
}

export default function CircuitBoardBg() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[5]" style={{ opacity: 0.7 }}>
      <svg
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1920 1000"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <filter id="pcbGlow">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* === STATIC TRACES === */}

        {/* Thicker shadow traces for depth */}
        {cyanPaths.map((d, i) => (
          <path key={`ct-shadow-${i}`} d={d} stroke="#06b6d4" strokeWidth="8" fill="none" opacity="0.08" strokeLinecap="round" strokeLinejoin="round" />
        ))}
        {orangePaths.map((d, i) => (
          <path key={`ot-shadow-${i}`} d={d} stroke="#f97316" strokeWidth="8" fill="none" opacity="0.08" strokeLinecap="round" strokeLinejoin="round" />
        ))}

        {/* Main cyan traces */}
        {cyanPaths.map((d, i) => (
          <path key={`ct-${i}`} d={d} stroke="#06b6d4" strokeWidth="3" fill="none" opacity="0.4" strokeLinecap="round" strokeLinejoin="round" />
        ))}

        {/* Main orange traces */}
        {orangePaths.map((d, i) => (
          <path key={`ot-${i}`} d={d} stroke="#f97316" strokeWidth="3" fill="none" opacity="0.4" strokeLinecap="round" strokeLinejoin="round" />
        ))}

        {/* Horizontal connectors */}
        {horizontalPaths.map((d, i) => (
          <React.Fragment key={`hp-${i}`}>
            <path d={d} stroke={i % 2 === 0 ? '#06b6d4' : '#f97316'} strokeWidth="6" fill="none" opacity="0.06" strokeLinecap="round" strokeLinejoin="round" />
            <path d={d} stroke={i % 2 === 0 ? '#06b6d4' : '#f97316'} strokeWidth="2.5" fill="none" opacity="0.3" strokeLinecap="round" strokeLinejoin="round" />
          </React.Fragment>
        ))}

        {/* === SOLDER PAD NODES - realistic, not glowing === */}
        {nodes.map((node, i) => {
          const baseColor = node.color === 'cyan' ? '#06b6d4' : '#f97316';
          const darkColor = node.color === 'cyan' ? '#064e5e' : '#6b2f0a';
          return (
            <g key={`node-${i}`}>
              {/* Copper pad base */}
              <circle cx={node.x} cy={node.y} r="8" fill={darkColor} opacity="0.5" />
              {/* Pad ring */}
              <circle cx={node.x} cy={node.y} r="7" fill="none" stroke={baseColor} strokeWidth="1.5" opacity="0.4" />
              {/* Drill hole */}
              <circle cx={node.x} cy={node.y} r="2.5" fill="#0A0A0A" opacity="0.8" />
            </g>
          );
        })}

        {/* === TRAVELING LIGHTS (like cars on highway) === */}
        
        {cyanPaths.map((path, i) => (
          <React.Fragment key={`cyan-t-${i}`}>
            <TravelingLight path={path} color="cyan" duration={5 + i * 0.7} delay={i * 1.2} />
            <TravelingLight path={path} color="cyan" duration={5 + i * 0.7} delay={i * 1.2 + 2.5} />
          </React.Fragment>
        ))}

        {orangePaths.map((path, i) => (
          <React.Fragment key={`orange-t-${i}`}>
            <TravelingLight path={path} color="orange" duration={4.5 + i * 0.8} delay={i * 1.1 + 0.5} />
            <TravelingLight path={path} color="orange" duration={4.5 + i * 0.8} delay={i * 1.1 + 3} />
          </React.Fragment>
        ))}

        {horizontalPaths.map((path, i) => (
          <TravelingLight
            key={`hp-t-${i}`}
            path={path}
            color={i % 2 === 0 ? 'cyan' : 'orange'}
            duration={3.5 + i * 0.5}
            delay={i * 0.8 + 1}
          />
        ))}
      </svg>
    </div>
  );
}