import React from 'react';

// Realistic PCB traces — organic routing across the full viewport
// Mix of vertical runs, angled bends, and horizontal bridges
const traces = [
  // Left region
  "M 60,0 L 60,180 L 140,260 L 140,520 L 80,600 L 80,1000",
  "M 180,0 L 180,140 L 260,140 L 260,380 L 200,460 L 200,720 L 260,800 L 260,1000",
  "M 320,0 L 320,100 L 420,200 L 420,440 L 340,520 L 340,780 L 400,860 L 400,1000",
  "M 50,300 L 180,300 L 260,380",
  "M 80,600 L 200,600 L 200,720",
  "M 0,150 L 140,150 L 140,260",
  "M 260,800 L 400,800 L 400,860",
  
  // Center-left region
  "M 500,0 L 500,220 L 580,300 L 580,500 L 520,580 L 520,840 L 580,920 L 580,1000",
  "M 620,0 L 620,160 L 720,260 L 720,420 L 660,500 L 660,680 L 740,760 L 740,1000",
  "M 420,200 L 500,220",
  "M 520,580 L 660,580 L 660,680",
  "M 580,300 L 720,300 L 720,260",
  "M 0,460 L 120,460 L 200,460",
  "M 340,520 L 520,520 L 520,580",
  "M 580,920 L 740,920 L 740,1000",
  
  // Center region
  "M 840,0 L 840,200 L 920,280 L 920,500 L 860,580 L 860,760 L 940,840 L 940,1000",
  "M 980,0 L 980,120 L 1060,200 L 1060,440 L 1000,520 L 1000,700 L 1080,780 L 1080,1000",
  "M 1120,0 L 1120,180 L 1040,260 L 1040,340 L 1120,420 L 1120,620 L 1060,700 L 1060,1000",
  "M 720,420 L 840,420 L 920,500",
  "M 860,580 L 1000,580 L 1000,520",
  "M 940,840 L 1080,840 L 1080,780",
  "M 860,760 L 1000,760 L 1000,700",
  
  // Center-right region
  "M 1240,0 L 1240,160 L 1320,240 L 1320,480 L 1260,560 L 1260,740 L 1340,820 L 1340,1000",
  "M 1380,0 L 1380,200 L 1460,280 L 1460,500 L 1400,580 L 1400,800 L 1460,880 L 1460,1000",
  "M 1120,420 L 1240,420 L 1320,480",
  "M 1260,560 L 1400,560 L 1400,580",
  "M 1120,620 L 1260,620 L 1260,740",
  
  // Right region
  "M 1560,0 L 1560,180 L 1640,260 L 1640,520 L 1580,600 L 1580,800 L 1660,880 L 1660,1000",
  "M 1700,0 L 1700,140 L 1780,220 L 1780,460 L 1720,540 L 1720,720 L 1800,800 L 1800,1000",
  "M 1840,0 L 1840,300 L 1880,360 L 1880,640 L 1840,700 L 1840,1000",
  "M 1460,280 L 1560,280 L 1640,260",
  "M 1580,600 L 1720,600 L 1720,540",
  "M 1460,880 L 1660,880",
  "M 1640,520 L 1780,520 L 1780,460",
  "M 1800,800 L 1920,800",
  "M 1880,360 L 1920,360",
  "M 1840,700 L 1920,700",
  "M 0,820 L 80,820 L 80,1000",
  "M 0,680 L 60,680 L 140,760 L 200,760 L 200,720",
];

// Via locations at bends/intersections
const vias = [
  { x: 60, y: 180 }, { x: 140, y: 260 }, { x: 140, y: 520 }, { x: 80, y: 600 },
  { x: 260, y: 140 }, { x: 260, y: 380 }, { x: 200, y: 460 }, { x: 200, y: 720 }, { x: 260, y: 800 },
  { x: 420, y: 200 }, { x: 420, y: 440 }, { x: 340, y: 520 }, { x: 340, y: 780 }, { x: 400, y: 860 },
  { x: 500, y: 220 }, { x: 580, y: 300 }, { x: 580, y: 500 }, { x: 520, y: 580 }, { x: 520, y: 840 },
  { x: 720, y: 260 }, { x: 720, y: 420 }, { x: 660, y: 500 }, { x: 660, y: 680 }, { x: 740, y: 760 },
  { x: 920, y: 280 }, { x: 920, y: 500 }, { x: 860, y: 580 }, { x: 860, y: 760 }, { x: 940, y: 840 },
  { x: 1060, y: 200 }, { x: 1060, y: 440 }, { x: 1000, y: 520 }, { x: 1000, y: 700 }, { x: 1080, y: 780 },
  { x: 1120, y: 420 }, { x: 1120, y: 620 },
  { x: 1320, y: 240 }, { x: 1320, y: 480 }, { x: 1260, y: 560 }, { x: 1260, y: 740 }, { x: 1340, y: 820 },
  { x: 1460, y: 280 }, { x: 1460, y: 500 }, { x: 1400, y: 580 }, { x: 1400, y: 800 }, { x: 1460, y: 880 },
  { x: 1640, y: 260 }, { x: 1640, y: 520 }, { x: 1580, y: 600 }, { x: 1580, y: 800 }, { x: 1660, y: 880 },
  { x: 1780, y: 220 }, { x: 1780, y: 460 }, { x: 1720, y: 540 }, { x: 1720, y: 720 }, { x: 1800, y: 800 },
  { x: 1880, y: 360 }, { x: 1880, y: 640 }, { x: 1840, y: 700 },
];

// Longer paths for animated data packets (only use the long bus traces)
const animPaths = [
  "M 60,0 L 60,180 L 140,260 L 140,520 L 80,600 L 80,1000",
  "M 320,0 L 320,100 L 420,200 L 420,440 L 340,520 L 340,780 L 400,860 L 400,1000",
  "M 620,0 L 620,160 L 720,260 L 720,420 L 660,500 L 660,680 L 740,760 L 740,1000",
  "M 840,0 L 840,200 L 920,280 L 920,500 L 860,580 L 860,760 L 940,840 L 940,1000",
  "M 1120,0 L 1120,180 L 1040,260 L 1040,340 L 1120,420 L 1120,620 L 1060,700 L 1060,1000",
  "M 1380,0 L 1380,200 L 1460,280 L 1460,500 L 1400,580 L 1400,800 L 1460,880 L 1460,1000",
  "M 1560,0 L 1560,180 L 1640,260 L 1640,520 L 1580,600 L 1580,800 L 1660,880 L 1660,1000",
  "M 1840,0 L 1840,300 L 1880,360 L 1880,640 L 1840,700 L 1840,1000",
  "M 180,0 L 180,140 L 260,140 L 260,380 L 200,460 L 200,720 L 260,800 L 260,1000",
  "M 980,0 L 980,120 L 1060,200 L 1060,440 L 1000,520 L 1000,700 L 1080,780 L 1080,1000",
  "M 1700,0 L 1700,140 L 1780,220 L 1780,460 L 1720,540 L 1720,720 L 1800,800 L 1800,1000",
];

function DataPacket({ path, color, duration, delay }) {
  const glow = color === 'cyan' ? '#06b6d4' : '#f97316';
  return (
    <g>
      {/* Trailing glow (delayed copies create comet effect) */}
      <circle r="14" fill={glow} opacity="0.06" filter="url(#trailBlur)">
        <animateMotion dur={`${duration}s`} repeatCount="indefinite" begin={`${delay + 0.15}s`} path={path} />
      </circle>
      <circle r="10" fill={glow} opacity="0.12" filter="url(#trailBlur)">
        <animateMotion dur={`${duration}s`} repeatCount="indefinite" begin={`${delay + 0.08}s`} path={path} />
      </circle>
      <circle r="6" fill={glow} opacity="0.25" filter="url(#trailMed)">
        <animateMotion dur={`${duration}s`} repeatCount="indefinite" begin={`${delay + 0.03}s`} path={path} />
      </circle>
      {/* Core bright dot */}
      <circle r="2.5" fill="#fff" opacity="0.95">
        <animateMotion dur={`${duration}s`} repeatCount="indefinite" begin={`${delay}s`} path={path} />
      </circle>
      <circle r="5" fill={glow} opacity="0.7" filter="url(#pcbGlow)">
        <animateMotion dur={`${duration}s`} repeatCount="indefinite" begin={`${delay}s`} path={path} />
      </circle>
    </g>
  );
}

export default function CircuitBoardBg() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[5]" style={{ opacity: 0.6 }}>
      <svg
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1920 1000"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <filter id="pcbGlow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="trailBlur">
            <feGaussianBlur stdDeviation="8" />
          </filter>
          <filter id="trailMed">
            <feGaussianBlur stdDeviation="4" />
          </filter>
          <linearGradient id="traceGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3ecf8e" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#2a9d6e" stopOpacity="0.10" />
          </linearGradient>
        </defs>

        {/* FR4 substrate weave */}
        <pattern id="fr4" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0" x2="48" y2="0" stroke="#142014" strokeWidth="0.3" opacity="0.25" />
          <line x1="0" y1="0" x2="0" y2="48" stroke="#142014" strokeWidth="0.3" opacity="0.25" />
        </pattern>
        <rect width="1920" height="1000" fill="url(#fr4)" opacity="0.5" />

        {/* Trace shadows */}
        {traces.map((d, i) => (
          <path key={`ts-${i}`} d={d} stroke="#12301a" strokeWidth="5" fill="none" opacity="0.18" strokeLinejoin="round" strokeLinecap="round" />
        ))}

        {/* Main traces */}
        {traces.map((d, i) => (
          <path key={`t-${i}`} d={d} stroke="url(#traceGrad)" strokeWidth="1.8" fill="none" strokeLinejoin="round" strokeLinecap="round" />
        ))}

        {/* Highlight edge */}
        {traces.map((d, i) => (
          <path key={`th-${i}`} d={d} stroke="#5eead4" strokeWidth="0.4" fill="none" opacity="0.06" strokeLinejoin="round" strokeLinecap="round" />
        ))}

        {/* Vias */}
        {vias.map((v, i) => (
          <g key={`v-${i}`}>
            <circle cx={v.x} cy={v.y} r="5" fill="#0d2818" opacity="0.5" />
            <circle cx={v.x} cy={v.y} r="4.5" fill="none" stroke="#3ecf8e" strokeWidth="0.8" opacity="0.2" />
            <circle cx={v.x} cy={v.y} r="1.8" fill="#080e0b" opacity="0.85" />
            {/* Blink */}
            <circle cx={v.x} cy={v.y} r="3" fill="#5eead4" opacity="0">
              <animate
                attributeName="opacity"
                values="0;0;0.55;0.55;0;0"
                keyTimes="0;0.43;0.47;0.53;0.57;1"
                dur={`${3.5 + (i % 9) * 0.6}s`}
                begin={`${(i * 0.53) % 6}s`}
                repeatCount="indefinite"
              />
            </circle>
          </g>
        ))}

        {/* Data packets with comet trails */}
        {animPaths.map((path, i) => (
          <DataPacket
            key={`dp-${i}`}
            path={path}
            color={i % 4 === 0 ? 'orange' : 'cyan'}
            duration={6 + (i % 5) * 0.7}
            delay={i * 0.9}
          />
        ))}
        {/* Second wave — sparser */}
        {animPaths.filter((_, i) => i % 3 === 0).map((path, i) => (
          <DataPacket
            key={`dp2-${i}`}
            path={path}
            color="cyan"
            duration={7 + i * 0.5}
            delay={i * 1.4 + 3.5}
          />
        ))}

        {/* Ambient trace pulse */}
        {animPaths.filter((_, i) => i % 3 === 0).map((d, i) => (
          <path key={`ap-${i}`} d={d} stroke="#5eead4" strokeWidth="2" fill="none" opacity="0" strokeLinejoin="round">
            <animate
              attributeName="opacity"
              values="0;0.06;0"
              dur={`${9 + i * 2}s`}
              begin={`${i * 3}s`}
              repeatCount="indefinite"
            />
          </path>
        ))}
      </svg>
    </div>
  );
}