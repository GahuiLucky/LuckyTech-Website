import React from 'react';

// ── Realistic PCB trace layout ──
// Main vertical bus lines (clean, parallel, evenly spaced like a real PCB)
const busTraces = [
  // Left bus group
  "M 120,0 L 120,400 L 120,1000",
  "M 160,0 L 160,320 L 280,320 L 280,1000",
  "M 200,0 L 200,240 L 380,240 L 380,600 L 380,1000",
  // Center-left bus
  "M 480,0 L 480,180 L 580,180 L 580,520 L 580,1000",
  "M 540,0 L 540,180 L 640,180 L 640,440 L 760,440 L 760,1000",
  // Center bus
  "M 860,0 L 860,300 L 860,1000",
  "M 920,0 L 920,300 L 1020,300 L 1020,700 L 1020,1000",
  // Center-right bus
  "M 1140,0 L 1140,220 L 1240,220 L 1240,560 L 1240,1000",
  "M 1200,0 L 1200,220 L 1340,220 L 1340,480 L 1440,480 L 1440,1000",
  // Right bus group
  "M 1560,0 L 1560,350 L 1560,1000",
  "M 1620,0 L 1620,260 L 1720,260 L 1720,1000",
  "M 1800,0 L 1800,400 L 1800,1000",
];

// Horizontal interconnects (short, purposeful connections between buses)
const interconnects = [
  "M 120,400 L 280,400",
  "M 280,520 L 380,520",
  "M 580,340 L 760,340",
  "M 640,600 L 760,600",
  "M 860,460 L 1020,460",
  "M 1020,580 L 1240,580",
  "M 1240,380 L 1440,380",
  "M 1560,350 L 1720,350",
  "M 1620,500 L 1800,500",
  "M 380,760 L 580,760",
  "M 760,820 L 1020,820",
  "M 1240,720 L 1440,720",
  "M 120,680 L 280,680",
  "M 1560,640 L 1800,640",
];

// Via / pad locations at intersections
const vias = [
  // Left group
  { x: 120, y: 400 }, { x: 280, y: 320 }, { x: 280, y: 400 },
  { x: 380, y: 240 }, { x: 380, y: 520 }, { x: 380, y: 600 },
  // Center-left
  { x: 580, y: 180 }, { x: 580, y: 340 }, { x: 580, y: 520 },
  { x: 640, y: 440 }, { x: 760, y: 340 }, { x: 760, y: 440 },
  { x: 760, y: 600 },
  // Center
  { x: 860, y: 300 }, { x: 860, y: 460 },
  { x: 1020, y: 300 }, { x: 1020, y: 460 }, { x: 1020, y: 580 }, { x: 1020, y: 700 },
  // Center-right
  { x: 1240, y: 220 }, { x: 1240, y: 380 }, { x: 1240, y: 560 },
  { x: 1340, y: 220 }, { x: 1340, y: 480 },
  { x: 1440, y: 380 }, { x: 1440, y: 480 },
  // Right group
  { x: 1560, y: 350 }, { x: 1620, y: 260 },
  { x: 1720, y: 260 }, { x: 1720, y: 350 },
  { x: 1800, y: 400 }, { x: 1800, y: 500 },
  // Extra horizontal endpoints
  { x: 580, y: 760 }, { x: 380, y: 760 },
  { x: 1020, y: 820 }, { x: 760, y: 820 },
  { x: 1440, y: 720 }, { x: 1240, y: 720 },
  { x: 120, y: 680 }, { x: 280, y: 680 },
  { x: 1560, y: 640 }, { x: 1800, y: 640 },
];

// Data packet with comet trail
function DataPacket({ path, color, duration, delay }) {
  const glow = color === 'cyan' ? '#06b6d4' : '#f97316';
  const trailId = `trail-${color}-${duration}-${delay}`;
  return (
    <g>
      {/* Trail / fade behind the dot */}
      <circle r="2" fill="none">
        <animateMotion dur={`${duration}s`} repeatCount="indefinite" begin={`${delay}s`} path={path} />
      </circle>
      {/* Outer soft trail glow */}
      <rect width="1" height="1" fill={`url(#${color}TrailGrad)`} opacity="0">
        <animateMotion dur={`${duration}s`} repeatCount="indefinite" begin={`${delay}s`} path={path} />
      </rect>
      {/* Trail effect: a blurred elongated shape following the path slightly behind */}
      <circle r="12" fill={glow} opacity="0.12" filter="url(#trailBlur)">
        <animateMotion dur={`${duration}s`} repeatCount="indefinite" begin={`${delay + 0.08}s`} path={path} />
      </circle>
      <circle r="8" fill={glow} opacity="0.2" filter="url(#trailBlur)">
        <animateMotion dur={`${duration}s`} repeatCount="indefinite" begin={`${delay + 0.04}s`} path={path} />
      </circle>
      {/* Main bright dot */}
      <circle r="2.5" fill="#fff" opacity="0.95">
        <animateMotion dur={`${duration}s`} repeatCount="indefinite" begin={`${delay}s`} path={path} />
      </circle>
      <circle r="5" fill={glow} opacity="0.7" filter="url(#pcbGlowSmall)">
        <animateMotion dur={`${duration}s`} repeatCount="indefinite" begin={`${delay}s`} path={path} />
      </circle>
    </g>
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
          <filter id="pcbGlowSmall">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="trailBlur">
            <feGaussianBlur stdDeviation="6" />
          </filter>

          {/* Muted copper/green trace colors — like a real dark PCB */}
          <linearGradient id="traceGradV" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3ecf8e" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#2a9d6e" stopOpacity="0.12" />
          </linearGradient>
          <linearGradient id="traceGradH" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#3ecf8e" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#2a9d6e" stopOpacity="0.10" />
          </linearGradient>
        </defs>

        {/* ── PCB substrate texture ── */}
        {/* Very subtle grid to simulate FR4 weave */}
        <pattern id="fr4" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <rect width="40" height="40" fill="none" />
          <line x1="0" y1="0" x2="40" y2="0" stroke="#1a2e1a" strokeWidth="0.3" opacity="0.3" />
          <line x1="0" y1="0" x2="0" y2="40" stroke="#1a2e1a" strokeWidth="0.3" opacity="0.3" />
        </pattern>
        <rect width="1920" height="1000" fill="url(#fr4)" opacity="0.4" />

        {/* ── TRACES ── */}
        {/* Shadow / copper depth */}
        {busTraces.map((d, i) => (
          <path key={`bs-${i}`} d={d} stroke="#1a3a2a" strokeWidth="6" fill="none" opacity="0.15" strokeLinejoin="round" />
        ))}
        {interconnects.map((d, i) => (
          <path key={`is-${i}`} d={d} stroke="#1a3a2a" strokeWidth="5" fill="none" opacity="0.12" strokeLinejoin="round" />
        ))}

        {/* Main traces */}
        {busTraces.map((d, i) => (
          <path key={`bt-${i}`} d={d} stroke="url(#traceGradV)" strokeWidth="2" fill="none" strokeLinejoin="round" />
        ))}
        {interconnects.map((d, i) => (
          <path key={`it-${i}`} d={d} stroke="url(#traceGradH)" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
        ))}

        {/* Highlight edge */}
        {busTraces.map((d, i) => (
          <path key={`bh-${i}`} d={d} stroke="#5eead4" strokeWidth="0.5" fill="none" opacity="0.08" strokeLinejoin="round" />
        ))}

        {/* ── VIAS (solder pads) ── */}
        {vias.map((v, i) => (
          <g key={`via-${i}`}>
            <circle cx={v.x} cy={v.y} r="6" fill="#0d2818" opacity="0.6" />
            <circle cx={v.x} cy={v.y} r="5" fill="none" stroke="#3ecf8e" strokeWidth="1" opacity="0.25" />
            <circle cx={v.x} cy={v.y} r="2" fill="#080e0b" opacity="0.9" />
            {/* Subtle blink */}
            <circle cx={v.x} cy={v.y} r="3" fill="#5eead4" opacity="0">
              <animate
                attributeName="opacity"
                values="0;0;0.6;0.6;0;0"
                keyTimes="0;0.42;0.46;0.54;0.58;1"
                dur={`${4 + (i % 7) * 0.8}s`}
                begin={`${(i * 0.7) % 5}s`}
                repeatCount="indefinite"
              />
            </circle>
          </g>
        ))}

        {/* ── DATA PACKETS with trails ── */}
        {/* One packet per bus trace, staggered */}
        {busTraces.map((path, i) => (
          <React.Fragment key={`dp-${i}`}>
            <DataPacket path={path} color="cyan" duration={5 + i * 0.5} delay={i * 0.8} />
            {i % 3 === 0 && (
              <DataPacket path={path} color="cyan" duration={6 + i * 0.3} delay={i * 0.8 + 3} />
            )}
          </React.Fragment>
        ))}
        {/* Interconnect packets — fewer, orange accent */}
        {interconnects.filter((_, i) => i % 3 === 0).map((path, i) => (
          <DataPacket key={`idp-${i}`} path={path} color="orange" duration={2 + i * 0.3} delay={i * 1.2 + 0.5} />
        ))}

        {/* ── SUBTLE TRACE PULSE ── */}
        {busTraces.filter((_, i) => i % 4 === 0).map((d, i) => (
          <path key={`tp-${i}`} d={d} stroke="#5eead4" strokeWidth="2" fill="none" opacity="0" strokeLinejoin="round">
            <animate
              attributeName="opacity"
              values="0;0.08;0"
              dur={`${8 + i * 2}s`}
              begin={`${i * 3}s`}
              repeatCount="indefinite"
            />
          </path>
        ))}
      </svg>
    </div>
  );
}