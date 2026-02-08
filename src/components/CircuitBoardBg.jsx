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

// Nodes at path intersections/bends
const nodes = [
  { x: 250, y: 300, color: 'cyan', pulseDelay: 0 },
  { x: 500, y: 200, color: 'cyan', pulseDelay: 0.4 },
  { x: 500, y: 500, color: 'cyan', pulseDelay: 1.2 },
  { x: 850, y: 400, color: 'cyan', pulseDelay: 0.8 },
  { x: 450, y: 600, color: 'cyan', pulseDelay: 1.6 },
  { x: 750, y: 500, color: 'cyan', pulseDelay: 2.0 },
  { x: 1100, y: 400, color: 'cyan', pulseDelay: 0.3 },
  { x: 1150, y: 250, color: 'cyan', pulseDelay: 1.8 },
  { x: 850, y: 700, color: 'cyan', pulseDelay: 2.4 },
  { x: 950, y: 550, color: 'cyan', pulseDelay: 1.0 },
  { x: 900, y: 280, color: 'orange', pulseDelay: 0.5 },
  { x: 900, y: 580, color: 'orange', pulseDelay: 1.5 },
  { x: 1200, y: 580, color: 'orange', pulseDelay: 2.2 },
  { x: 700, y: 150, color: 'orange', pulseDelay: 0.7 },
  { x: 700, y: 450, color: 'orange', pulseDelay: 1.3 },
  { x: 1350, y: 350, color: 'orange', pulseDelay: 0.2 },
  { x: 1350, y: 650, color: 'orange', pulseDelay: 1.9 },
  { x: 1050, y: 650, color: 'orange', pulseDelay: 2.6 },
  { x: 350, y: 180, color: 'cyan', pulseDelay: 0.6 },
  { x: 400, y: 500, color: 'orange', pulseDelay: 1.1 },
  { x: 200, y: 350, color: 'cyan', pulseDelay: 1.7 },
  { x: 1100, y: 750, color: 'cyan', pulseDelay: 2.1 },
  { x: 1300, y: 150, color: 'orange', pulseDelay: 0.9 },
];

// Fast small light — data packet
function DataPacket({ path, color, duration, delay }) {
  const glowColor = color === 'cyan' ? '#06b6d4' : '#f97316';
  return (
    <>
      <circle r="3" fill="#fff" opacity="0.95">
        <animateMotion dur={`${duration}s`} repeatCount="indefinite" begin={`${delay}s`} path={path} />
      </circle>
      <circle r="7" fill={glowColor} opacity="0.8" filter="url(#pcbGlowSmall)">
        <animateMotion dur={`${duration}s`} repeatCount="indefinite" begin={`${delay}s`} path={path} />
      </circle>
      <circle r="16" fill={glowColor} opacity="0.18" filter="url(#pcbGlowLarge)">
        <animateMotion dur={`${duration}s`} repeatCount="indefinite" begin={`${delay}s`} path={path} />
      </circle>
    </>
  );
}

// Slower, wider glow — power surge
function PowerSurge({ path, color, duration, delay }) {
  const glowColor = color === 'cyan' ? '#22d3ee' : '#fb923c';
  return (
    <>
      <circle r="6" fill={glowColor} opacity="0.5" filter="url(#pcbGlowSmall)">
        <animateMotion dur={`${duration}s`} repeatCount="indefinite" begin={`${delay}s`} path={path} />
      </circle>
      <circle r="30" fill={glowColor} opacity="0.1" filter="url(#pcbGlowLarge)">
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
          <filter id="pcbGlowSmall">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="pcbGlowLarge">
            <feGaussianBlur stdDeviation="10" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Trace gradients for realistic depth */}
          <linearGradient id="cyanTraceGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#0891b2" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="orangeTraceGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fdba74" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#f97316" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#ea580c" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* === STATIC TRACES with gradient === */}

        {/* Depth shadow layer */}
        {cyanPaths.map((d, i) => (
          <path key={`cs-${i}`} d={d} stroke="#06b6d4" strokeWidth="10" fill="none" opacity="0.06" strokeLinecap="round" strokeLinejoin="round" />
        ))}
        {orangePaths.map((d, i) => (
          <path key={`os-${i}`} d={d} stroke="#f97316" strokeWidth="10" fill="none" opacity="0.06" strokeLinecap="round" strokeLinejoin="round" />
        ))}

        {/* Main traces with gradient */}
        {cyanPaths.map((d, i) => (
          <path key={`ct-${i}`} d={d} stroke="url(#cyanTraceGrad)" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        ))}
        {orangePaths.map((d, i) => (
          <path key={`ot-${i}`} d={d} stroke="url(#orangeTraceGrad)" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        ))}

        {/* Thin bright highlight line on top of traces for 3D effect */}
        {cyanPaths.map((d, i) => (
          <path key={`ch-${i}`} d={d} stroke="#67e8f9" strokeWidth="1" fill="none" opacity="0.2" strokeLinecap="round" strokeLinejoin="round" />
        ))}
        {orangePaths.map((d, i) => (
          <path key={`oh-${i}`} d={d} stroke="#fdba74" strokeWidth="1" fill="none" opacity="0.2" strokeLinecap="round" strokeLinejoin="round" />
        ))}

        {/* Horizontal connectors */}
        {horizontalPaths.map((d, i) => (
          <React.Fragment key={`hp-${i}`}>
            <path d={d} stroke={i % 2 === 0 ? '#06b6d4' : '#f97316'} strokeWidth="7" fill="none" opacity="0.05" strokeLinecap="round" strokeLinejoin="round" />
            <path d={d} stroke={i % 2 === 0 ? 'url(#cyanTraceGrad)' : 'url(#orangeTraceGrad)'} strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <path d={d} stroke={i % 2 === 0 ? '#67e8f9' : '#fdba74'} strokeWidth="0.8" fill="none" opacity="0.15" strokeLinecap="round" strokeLinejoin="round" />
          </React.Fragment>
        ))}

        {/* === SOLDER PAD NODES with blink === */}
        {nodes.map((node, i) => {
          const base = node.color === 'cyan' ? '#06b6d4' : '#f97316';
          const bright = node.color === 'cyan' ? '#67e8f9' : '#fdba74';
          const dark = node.color === 'cyan' ? '#064e5e' : '#6b2f0a';
          const blinkDur = `${3 + (node.pulseDelay * 1.3)}s`;
          return (
            <g key={`node-${i}`}>
              {/* Copper pad base */}
              <circle cx={node.x} cy={node.y} r="8" fill={dark} opacity="0.5" />
              {/* Pad ring */}
              <circle cx={node.x} cy={node.y} r="7" fill="none" stroke={base} strokeWidth="1.5" opacity="0.45" />
              {/* Drill hole */}
              <circle cx={node.x} cy={node.y} r="2.5" fill="#0A0A0A" opacity="0.85" />
              {/* Blinking LED glow — simulates data arrival */}
              <circle cx={node.x} cy={node.y} r="4" fill={bright} opacity="0">
                <animate
                  attributeName="opacity"
                  values="0;0;0.9;0.9;0;0"
                  keyTimes="0;0.4;0.45;0.55;0.6;1"
                  dur={blinkDur}
                  begin={`${node.pulseDelay}s`}
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx={node.x} cy={node.y} r="14" fill={base} opacity="0" filter="url(#pcbGlowSmall)">
                <animate
                  attributeName="opacity"
                  values="0;0;0.35;0.35;0;0"
                  keyTimes="0;0.4;0.45;0.55;0.6;1"
                  dur={blinkDur}
                  begin={`${node.pulseDelay}s`}
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          );
        })}

        {/* === TRAVELING LIGHTS — mixed types === */}
        
        {/* Cyan: fast data packets + slow power surges */}
        {cyanPaths.map((path, i) => (
          <React.Fragment key={`cyan-t-${i}`}>
            <DataPacket path={path} color="cyan" duration={4 + i * 0.6} delay={i * 1.0} />
            <DataPacket path={path} color="cyan" duration={4 + i * 0.6} delay={i * 1.0 + 2} />
            <DataPacket path={path} color="cyan" duration={3.5 + i * 0.4} delay={i * 0.8 + 3.5} />
            <PowerSurge path={path} color="cyan" duration={8 + i} delay={i * 2 + 1} />
          </React.Fragment>
        ))}

        {/* Orange: fast data packets + slow power surges */}
        {orangePaths.map((path, i) => (
          <React.Fragment key={`orange-t-${i}`}>
            <DataPacket path={path} color="orange" duration={3.8 + i * 0.7} delay={i * 0.9 + 0.5} />
            <DataPacket path={path} color="orange" duration={3.8 + i * 0.7} delay={i * 0.9 + 2.5} />
            <DataPacket path={path} color="orange" duration={3.2 + i * 0.5} delay={i * 0.7 + 4} />
            <PowerSurge path={path} color="orange" duration={7.5 + i} delay={i * 1.8 + 0.8} />
          </React.Fragment>
        ))}

        {/* Horizontal: data packets */}
        {horizontalPaths.map((path, i) => (
          <React.Fragment key={`hp-t-${i}`}>
            <DataPacket
              path={path}
              color={i % 2 === 0 ? 'cyan' : 'orange'}
              duration={3 + i * 0.4}
              delay={i * 0.7 + 0.5}
            />
            <DataPacket
              path={path}
              color={i % 2 === 0 ? 'cyan' : 'orange'}
              duration={2.8 + i * 0.3}
              delay={i * 0.6 + 2}
            />
          </React.Fragment>
        ))}

        {/* === SUBTLE AMBIENT TRACE BRIGHTNESS PULSE === */}
        {cyanPaths.map((d, i) => (
          <path key={`cp-${i}`} d={d} stroke="#22d3ee" strokeWidth="3" fill="none" opacity="0" strokeLinecap="round" strokeLinejoin="round">
            <animate
              attributeName="opacity"
              values="0;0.15;0"
              dur={`${6 + i * 1.5}s`}
              begin={`${i * 2}s`}
              repeatCount="indefinite"
            />
          </path>
        ))}
        {orangePaths.map((d, i) => (
          <path key={`op-${i}`} d={d} stroke="#fb923c" strokeWidth="3" fill="none" opacity="0" strokeLinecap="round" strokeLinejoin="round">
            <animate
              attributeName="opacity"
              values="0;0.15;0"
              dur={`${7 + i * 1.2}s`}
              begin={`${i * 2.5 + 1}s`}
              repeatCount="indefinite"
            />
          </path>
        ))}
      </svg>
    </div>
  );
}