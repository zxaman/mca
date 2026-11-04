import React from 'react';

const FONT = "'Segoe UI', system-ui, sans-serif";

// 1. QA vs QC Comparison
export function QAQCComparisonDiagram() {
  return (
    <svg viewBox="0 0 800 400" className="diagram-pop" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arrowST1" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6 Z" fill="#c4ff00" />
        </marker>
      </defs>
      {/* QA side */}
      <rect x="60" y="60" width="300" height="280" rx="10" fill="#0047ff" opacity="0.1" stroke="#0047ff" strokeWidth="2" />
      <text x="210" y="90" textAnchor="middle" fill="#0047ff" fontSize="18" fontWeight="800" fontFamily={FONT}>QA (Quality Assurance)</text>
      <text x="210" y="115" textAnchor="middle" fill="#888" fontSize="13" fontFamily={FONT}>Process-Oriented</text>
      {['Prevents defects', 'Whole team', 'Systematic', 'Continuous'].map((item, i) => {
        const y = 150 + i * 40;
        return (
          <g key={i}>
            <circle cx="100" cy={y} r="6" fill="#0047ff" />
            <line x1="110" y1={y} x2="300" y2={y} stroke="#333" strokeWidth="1" />
            <text x="310" y={y + 4} fill="#fff" fontSize="13" fontFamily={FONT}>{item}</text>
          </g>
        );
      })}
      {/* QC side */}
      <rect x="440" y="60" width="300" height="280" rx="10" fill="#ff0040" opacity="0.1" stroke="#ff0040" strokeWidth="2" />
      <text x="590" y="90" textAnchor="middle" fill="#ff0040" fontSize="18" fontWeight="800" fontFamily={FONT}>QC (Quality Control)</text>
      <text x="590" y="115" textAnchor="middle" fill="#888" fontSize="13" fontFamily={FONT}>Product-Oriented</text>
      {['Finds defects', 'QA team', 'Verification', 'Final check'].map((item, i) => {
        const y = 150 + i * 40;
        return (
          <g key={i}>
            <circle cx="480" cy={y} r="6" fill="#ff0040" />
            <line x1="490" y1={y} x2="680" y2={y} stroke="#333" strokeWidth="1" />
            <text x="690" y={y + 4} fill="#fff" fontSize="13" fontFamily={FONT}>{item}</text>
          </g>
        );
      })}
      {/* VS in middle */}
      <circle cx="400" cy="200" r="35" fill="#c4ff00" opacity="0.2" stroke="#c4ff00" strokeWidth="2" />
      <text x="400" y="206" textAnchor="middle" fill="#c4ff00" fontSize="16" fontWeight="800" fontFamily={FONT}>VS</text>
      <text x="400" y="380" textAnchor="middle" fill="#c4ff00" fontSize="14" fontWeight="800" fontFamily={FONT}>QA vs QC</text>
    </svg>
  );
}

// 2. SQA Components
export function SQAComponentsDiagram() {
  const components = [
    { name: 'Standards', desc: 'ISO, CMMI', color: '#0047ff' },
    { name: 'Metrics', desc: 'Measure', color: '#00aaff' },
    { name: 'Reviews', desc: 'Code review', color: '#00ff88' },
    { name: 'Testing', desc: 'Unit, Integration', color: '#c4ff00' },
    { name: 'Training', desc: 'Team skills', color: '#ff8800' },
    { name: 'Audits', desc: 'Compliance', color: '#ff0080' },
  ];
  return (
    <svg viewBox="0 0 800 400" className="diagram-pop" style={{ maxWidth: '100%', height: 'auto' }}>
      {components.map((c, i) => {
        const col = i % 3;
        const row = Math.floor(i / 3);
        const x = 150 + col * 250;
        const y = 80 + row * 120;
        return (
          <g key={i}>
            <rect x={x - 100} y={y - 40} width="200" height="80" rx="10" fill={c.color} opacity="0.15" stroke={c.color} strokeWidth="2" />
            <text x={x} y={y - 5} textAnchor="middle" fill={c.color} fontSize="16" fontWeight="800" fontFamily={FONT}>{c.name}</text>
            <text x={x} y={y + 18} textAnchor="middle" fill="#fff" fontSize="12" fontFamily={FONT}>{c.desc}</text>
          </g>
        );
      })}
      <text x="400" y="360" textAnchor="middle" fill="#c4ff00" fontSize="14" fontWeight="800" fontFamily={FONT}>SQA SYSTEM COMPONENTS</text>
      <text x="400" y="380" textAnchor="middle" fill="#888" fontSize="12" fontFamily={FONT}>All components work together for quality</text>
    </svg>
  );
}

// 3. Quality Business Impact
export function QualityBusinessImpactDiagram() {
  const benefits = [
    { name: 'Lower Costs', icon: '💰' },
    { name: 'Customer Satisfaction', icon: '😊' },
    { name: 'Reputation', icon: '⭐' },
    { name: 'Competitive Edge', icon: '🏆' },
    { name: 'Reduced Risks', icon: '🛡️' },
  ];
  return (
    <svg viewBox="0 0 800 350" className="diagram-pop" style={{ maxWidth: '100%', height: 'auto' }}>
      {/* Quality center */}
      <circle cx="400" cy="80" r="50" fill="#c4ff00" opacity="0.2" stroke="#c4ff00" strokeWidth="3" />
      <text x="400" y="75" textAnchor="middle" fill="#c4ff00" fontSize="16" fontWeight="800" fontFamily={FONT}>QUALITY</text>
      <text x="400" y="95" textAnchor="middle" fill="#888" fontSize="11" fontFamily={FONT}>Software</text>
      {/* Arrows to benefits */}
      {benefits.map((b, i) => {
        const x = 120 + i * 140;
        const y = 200;
        return (
          <g key={i}>
            <line x1="400" y1="130" x2={x} y2={y - 30} stroke="#c4ff00" strokeWidth="2" markerEnd="url(#arrowST1)" />
            <rect x={x - 60} y={y - 30} width="120" height="60" rx="10" fill="#0047ff" opacity="0.1" stroke="#0047ff" strokeWidth="2" />
            <text x={x} y={y - 5} textAnchor="middle" fontSize="24">{b.icon}</text>
            <text x={x} y={y + 15} textAnchor="middle" fill="#fff" fontSize="11" fontFamily={FONT}>{b.name}</text>
          </g>
        );
      })}
      {/* Result */}
      <rect x="250" y="280" width="300" height="50" rx="10" fill="#00ff88" opacity="0.15" stroke="#00ff88" strokeWidth="2" />
      <text x="400" y="310" textAnchor="middle" fill="#00ff88" fontSize="16" fontWeight="800" fontFamily={FONT}>BUSINESS SUCCESS</text>
      <text x="400" y="350" textAnchor="middle" fill="#c4ff00" fontSize="14" fontWeight="700" fontFamily={FONT}>Quality → Benefits → Success</text>
    </svg>
  );
}

// 4. SQA Planning Process
export function SQAPlanningProcessDiagram() {
  const steps = [
    { name: 'Goals', desc: 'Define', color: '#0047ff' },
    { name: 'Standards', desc: 'Establish', color: '#00aaff' },
    { name: 'Resources', desc: 'Allocate', color: '#00ff88' },
    { name: 'Schedules', desc: 'Create', color: '#c4ff00' },
    { name: 'Processes', desc: 'Define', color: '#ff8800' },
    { name: 'Document', desc: 'Plan', color: '#ff0080' },
  ];
  return (
    <svg viewBox="0 0 800 350" className="diagram-pop" style={{ maxWidth: '100%', height: 'auto' }}>
      {steps.map((s, i) => {
        const x = 100 + i * 120;
        return (
          <g key={i}>
            <rect x={x - 50} y={80} width="100" height="80" rx="10" fill={s.color} opacity="0.15" stroke={s.color} strokeWidth="2" />
            <text x={x} y={110} textAnchor="middle" fill={s.color} fontSize="14" fontWeight="800" fontFamily={FONT}>{s.name}</text>
            <text x={x} y={130} textAnchor="middle" fill="#fff" fontSize="11" fontFamily={FONT}>{s.desc}</text>
            {i < steps.length - 1 && (
              <line x1={x + 50} y1={120} x2={x + 120 - 50} y2={120} stroke="#c4ff00" strokeWidth="2" markerEnd="url(#arrowST1)" />
            )}
          </g>
        );
      })}
      <text x="400" y="230" textAnchor="middle" fill="#c4ff00" fontSize="16" fontWeight="800" fontFamily={FONT}>SQA PLANNING PROCESS</text>
      <text x="400" y="255" textAnchor="middle" fill="#888" fontSize="12" fontFamily={FONT}>Goals → Standards → Resources → Schedules → Processes → Documentation</text>
      <text x="400" y="320" textAnchor="middle" fill="#00ff88" fontSize="12" fontWeight="700" fontFamily={FONT}>Quality built-in — not tested-in</text>
    </svg>
  );
}

// 5. Product vs Process Quality
export function ProductProcessQualityDiagram() {
  return (
    <svg viewBox="0 0 800 350" className="diagram-pop" style={{ maxWidth: '100%', height: 'auto' }}>
      {/* Product side */}
      <rect x="60" y="60" width="300" height="220" rx="10" fill="#0047ff" opacity="0.1" stroke="#0047ff" strokeWidth="2" />
      <text x="210" y="85" textAnchor="middle" fill="#0047ff" fontSize="16" fontWeight="800" fontFamily={FONT}>PRODUCT QUALITY</text>
      <text x="210" y="105" textAnchor="middle" fill="#888" fontSize="11" fontFamily={FONT}>Outcome — What We Get</text>
      {['Reliability', 'Usability', 'Performance', 'Maintainability', 'Scalability', 'Security'].map((item, i) => {
        const y = 130 + i * 25;
        return (
          <g key={i}>
            <circle cx="90" cy={y} r="5" fill="#0047ff" />
            <line x1="100" y1={y} x2="280" y2={y} stroke="#333" strokeWidth="1" />
            <text x="290" y={y + 4} fill="#fff" fontSize="12" fontFamily={FONT}>{item}</text>
          </g>
        );
      })}
      {/* Process side */}
      <rect x="440" y="60" width="300" height="220" rx="10" fill="#ff8800" opacity="0.1" stroke="#ff8800" strokeWidth="2" />
      <text x="590" y="85" textAnchor="middle" fill="#ff8800" fontSize="16" fontWeight="800" fontFamily={FONT}>PROCESS QUALITY</text>
      <text x="590" y="105" textAnchor="middle" fill="#888" fontSize="11" fontFamily={FONT}>Approach — How We Work</text>
      {['Planning', 'Design', 'Coding', 'Testing', 'Standards', 'Metrics'].map((item, i) => {
        const y = 130 + i * 25;
        return (
          <g key={i}>
            <circle cx="470" cy={y} r="5" fill="#ff8800" />
            <line x1="480" y1={y} x2="660" y2={y} stroke="#333" strokeWidth="1" />
            <text x="670" y={y + 4} fill="#fff" fontSize="12" fontFamily={FONT}>{item}</text>
          </g>
        );
      })}
      {/* VS in middle */}
      <circle cx="400" cy="170" r="30" fill="#c4ff00" opacity="0.2" stroke="#c4ff00" strokeWidth="2" />
      <text x="400" y="176" textAnchor="middle" fill="#c4ff00" fontSize="14" fontWeight="800" fontFamily={FONT}>VS</text>
      <line x1="340" y1="170" x2="460" y2="170" stroke="#c4ff00" strokeWidth="2" />
      <text x="400" y="320" textAnchor="middle" fill="#c4ff00" fontSize="14" fontWeight="700" fontFamily={FONT}>Good Process → Good Product</text>
    </svg>
  );
}

// 6. Process Models Comparison
export function ProcessModelsComparisonDiagram() {
  const models = [
    { name: 'Waterfall', desc: 'Linear', color: '#0047ff' },
    { name: 'Agile', desc: 'Iterative', color: '#00ff88' },
    { name: 'Spiral', desc: 'Risk-Driven', color: '#ff8800' },
    { name: 'V-Model', desc: 'Verification', color: '#ff0080' },
  ];
  return (
    <svg viewBox="0 0 800 350" className="diagram-pop" style={{ maxWidth: '100%', height: 'auto' }}>
      {models.map((m, i) => {
        const x = 120 + i * 180;
        return (
          <g key={i}>
            <rect x={x - 70} y={60} width="140" height="100" rx="10" fill={m.color} opacity="0.15" stroke={m.color} strokeWidth="2" />
            <text x={x} y={90} textAnchor="middle" fill={m.color} fontSize="16" fontWeight="800" fontFamily={FONT}>{m.name}</text>
            <text x={x} y={115} textAnchor="middle" fill="#fff" fontSize="12" fontFamily={FONT}>{m.desc}</text>
          </g>
        );
      })}
      <text x="400" y="230" textAnchor="middle" fill="#c4ff00" fontSize="16" fontWeight="800" fontFamily={FONT}>SOFTWARE PROCESS MODELS</text>
      <text x="400" y="255" textAnchor="middle" fill="#888" fontSize="12" fontFamily={FONT}>Waterfall | Agile | Spiral | V-Model</text>
      <text x="400" y="300" textAnchor="middle" fill="#00ff88" fontSize="12" fontWeight="700" fontFamily={FONT}>Each model has strengths and weaknesses</text>
    </svg>
  );
}

// 7. QC Tools Overview
export function QCToolsOverviewDiagram() {
  const tools = [
    { name: 'Check Sheet', desc: 'Data', color: '#0047ff' },
    { name: 'Flow Chart', desc: 'Process', color: '#00aaff' },
    { name: 'Histogram', desc: 'Distribution', color: '#00ff88' },
    { name: 'Pareto', desc: 'Priority', color: '#c4ff00' },
    { name: 'Fishbone', desc: 'Root Cause', color: '#ff8800' },
    { name: 'Scatter', desc: 'Relationship', color: '#ff0080' },
    { name: 'Control Chart', desc: 'Control', color: '#aa00ff' },
  ];
  return (
    <svg viewBox="0 0 800 400" className="diagram-pop" style={{ maxWidth: '100%', height: 'auto' }}>
      {tools.map((t, i) => {
        const col = i % 4;
        const row = Math.floor(i / 4);
        const x = 130 + col * 180;
        const y = 80 + row * 140;
        return (
          <g key={i}>
            <rect x={x - 70} y={y - 40} width="140" height="80" rx="10" fill={t.color} opacity="0.15" stroke={t.color} strokeWidth="2" />
            <text x={x} y={y - 5} textAnchor="middle" fill={t.color} fontSize="14" fontWeight="800" fontFamily={FONT}>{t.name}</text>
            <text x={x} y={y + 18} textAnchor="middle" fill="#fff" fontSize="11" fontFamily={FONT}>{t.desc}</text>
          </g>
        );
      })}
      <text x="400" y="380" textAnchor="middle" fill="#c4ff00" fontSize="14" fontWeight="800" fontFamily={FONT}>7 QC TOOLS</text>
    </svg>
  );
}

// ============================================================
// TOPIC 1.8 — Quality Assurance Models
// ============================================================

export function QAModelsOverviewDiagram() {
  return (
    <svg viewBox="0 0 900 650" style={{ width: '100%', height: 'auto' }}>
      <defs>
        <linearGradient id="qaModelsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#aa00ff', stopOpacity: 0.3 }} />
          <stop offset="100%" style={{ stopColor: '#6600cc', stopOpacity: 0.1 }} />
        </linearGradient>
      </defs>
      
      <rect width="900" height="650" fill="#0a0a0f" />
      
      <text x="450" y="35" textAnchor="middle" fill="#aa00ff" fontSize="20" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">
        Quality Assurance Models Overview
      </text>
      
      {/* ISO-9000 */}
      <g transform="translate(50, 70)">
        <rect width="250" height="100" rx="8" fill="url(#qaModelsGrad)" stroke="#aa00ff" strokeWidth="2" />
        <text x="125" y="30" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">ISO-9000 Series</text>
        <text x="125" y="50" textAnchor="middle" fill="#ccc" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">Quality Management</text>
        <text x="125" y="65" textAnchor="middle" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Standardization</text>
        <text x="125" y="80" textAnchor="middle" fill="#666" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Certification</text>
      </g>
      
      {/* CMM/CMMI */}
      <g transform="translate(325, 70)">
        <rect width="250" height="100" rx="8" fill="url(#qaModelsGrad)" stroke="#aa00ff" strokeWidth="2" />
        <text x="125" y="30" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">CMM / CMMI</text>
        <text x="125" y="50" textAnchor="middle" fill="#ccc" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">Process Maturity</text>
        <text x="125" y="65" textAnchor="middle" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">5 Levels</text>
        <text x="125" y="80" textAnchor="middle" fill="#666" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Process Improvement</text>
      </g>
      
      {/* TMM */}
      <g transform="translate(600, 70)">
        <rect width="250" height="100" rx="8" fill="url(#qaModelsGrad)" stroke="#aa00ff" strokeWidth="2" />
        <text x="125" y="30" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">TMM</text>
        <text x="125" y="50" textAnchor="middle" fill="#ccc" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">Test Maturity</text>
        <text x="125" y="65" textAnchor="middle" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">5 Levels</text>
        <text x="125" y="80" textAnchor="middle" fill="#666" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Testing Improvement</text>
      </g>
      
      {/* SPICE */}
      <g transform="translate(50, 200)">
        <rect width="250" height="100" rx="8" fill="url(#qaModelsGrad)" stroke="#aa00ff" strokeWidth="2" />
        <text x="125" y="30" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">SPICE</text>
        <text x="125" y="50" textAnchor="middle" fill="#ccc" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">Process Assessment</text>
        <text x="125" y="65" textAnchor="middle" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">6 Levels</text>
        <text x="125" y="80" textAnchor="middle" fill="#666" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">International Standard</text>
      </g>
      
      {/* Malcolm Baldrige */}
      <g transform="translate(325, 200)">
        <rect width="250" height="100" rx="8" fill="url(#qaModelsGrad)" stroke="#aa00ff" strokeWidth="2" />
        <text x="125" y="30" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Malcolm Baldrige</text>
        <text x="125" y="50" textAnchor="middle" fill="#ccc" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">Performance Excellence</text>
        <text x="125" y="65" textAnchor="middle" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Award Criteria</text>
        <text x="125" y="80" textAnchor="middle" fill="#666" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Organizational Excellence</text>
      </g>
      
      {/* P-CMM */}
      <g transform="translate(600, 200)">
        <rect width="250" height="100" rx="8" fill="url(#qaModelsGrad)" stroke="#aa00ff" strokeWidth="2" />
        <text x="125" y="30" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">P-CMM</text>
        <text x="125" y="50" textAnchor="middle" fill="#ccc" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">People Capability</text>
        <text x="125" y="65" textAnchor="middle" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">5 Levels</text>
        <text x="125" y="80" textAnchor="middle" fill="#666" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Workforce Development</text>
      </g>
      
      {/* Connection lines */}
      <line x1="175" y1="120" x2="325" y2="120" stroke="#aa00ff" strokeWidth="1" strokeDasharray="4,4" opacity="0.5" />
      <line x1="475" y1="120" x2="625" y2="120" stroke="#aa00ff" strokeWidth="1" strokeDasharray="4,4" opacity="0.5" />
      <line x1="175" y1="250" x2="325" y2="250" stroke="#aa00ff" strokeWidth="1" strokeDasharray="4,4" opacity="0.5" />
      <line x1="475" y1="250" x2="625" y2="250" stroke="#aa00ff" strokeWidth="1" strokeDasharray="4,4" opacity="0.5" />
      
      {/* CMM Levels Visual */}
      <g transform="translate(325, 340)">
        <text x="125" y="20" textAnchor="middle" fill="#aa00ff" fontSize="12" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">CMM 5 Levels</text>
        
        <rect x="20" y="30" width="210" height="35" rx="4" fill="#1a1a2e" stroke="#444" strokeWidth="1" />
        <text x="30" y="52" fill="#888" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">1</text>
        <text x="50" y="52" fill="#ccc" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">Initial</text>
        <text x="130" y="52" fill="#666" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Ad hoc</text>
        
        <rect x="20" y="70" width="210" height="35" rx="4" fill="#1a1a2e" stroke="#555" strokeWidth="1" />
        <text x="30" y="92" fill="#888" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">2</text>
        <text x="50" y="92" fill="#ccc" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">Repeatable</text>
        <text x="130" y="92" fill="#666" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Basic PM</text>
        
        <rect x="20" y="110" width="210" height="35" rx="4" fill="#2a2a3e" stroke="#666" strokeWidth="1" />
        <text x="30" y="132" fill="#aaa" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">3</text>
        <text x="50" y="132" fill="#ccc" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">Defined</text>
        <text x="130" y="132" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Standardized</text>
        
        <rect x="20" y="150" width="210" height="35" rx="4" fill="#3a3a4e" stroke="#777" strokeWidth="1" />
        <text x="30" y="172" fill="#bbb" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">4</text>
        <text x="50" y="172" fill="#ccc" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">Managed</text>
        <text x="130" y="172" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Quantitative</text>
        
        <rect x="20" y="190" width="210" height="35" rx="4" fill="#4a4a5e" stroke="#888" strokeWidth="1" />
        <text x="30" y="212" fill="#ccc" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">5</text>
        <text x="50" y="212" fill="#ccc" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">Optimizing</text>
        <text x="130" y="212" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Continuous</text>
      </g>
      
      {/* Selection Criteria */}
      <g transform="translate(50, 480)">
        <text x="100" y="25" textAnchor="middle" fill="#aa00ff" fontSize="12" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Model Selection Criteria</text>
        <text x="100" y="45" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">• Organizational needs</text>
        <text x="100" y="60" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">• Process maturity goals</text>
        <text x="100" y="75" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">• Quality improvement focus</text>
        <text x="100" y="90" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">• Resource availability</text>
        <text x="100" y="105" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">• Multiple models combine</text>
      </g>
      
      <g transform="translate(600, 480)">
        <text x="100" y="25" textAnchor="middle" fill="#aa00ff" fontSize="12" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Key Benefits</text>
        <text x="100" y="45" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">• Structured approach</text>
        <text x="100" y="60" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">• Process improvement</text>
        <text x="100" y="75" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">• Quality consistency</text>
        <text x="100" y="90" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">• International recognition</text>
        <text x="100" y="105" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">• Continuous improvement</text>
      </g>
    </svg>
  );
}

// ============================================================
// TOPIC 1.9 — Software Quality Assurance Trends
// ============================================================

export function SQATrendsOverviewDiagram() {
  return (
    <svg viewBox="0 0 900 650" style={{ width: '100%', height: 'auto' }}>
      <defs>
        <linearGradient id="sqaTrendsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#ff0080', stopOpacity: 0.3 }} />
          <stop offset="100%" style={{ stopColor: '#cc0066', stopOpacity: 0.1 }} />
        </linearGradient>
      </defs>
      
      <rect width="900" height="650" fill="#0a0a0f" />
      
      <text x="450" y="35" textAnchor="middle" fill="#ff0080" fontSize="20" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">
        Software Quality Assurance Trends
      </text>
      
      {/* PSP */}
      <g transform="translate(50, 70)">
        <rect width="200" height="110" rx="8" fill="url(#sqaTrendsGrad)" stroke="#ff0080" strokeWidth="2" />
        <text x="100" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">PSP</text>
        <text x="100" y="48" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Personal Software</text>
        <text x="100" y="62" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Process</text>
        <text x="100" y="80" textAnchor="middle" fill="#888" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Individual improvement</text>
        <text x="100" y="95" textAnchor="middle" fill="#666" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Self-discipline</text>
      </g>
      
      {/* TSP */}
      <g transform="translate(275, 70)">
        <rect width="200" height="110" rx="8" fill="url(#sqaTrendsGrad)" stroke="#ff0080" strokeWidth="2" />
        <text x="100" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">TSP</text>
        <text x="100" y="48" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Team Software</text>
        <text x="100" y="62" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Process</text>
        <text x="100" y="80" textAnchor="middle" fill="#888" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Team performance</text>
        <text x="100" y="95" textAnchor="middle" fill="#666" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Project success</text>
      </g>
      
      {/* OO Methodology */}
      <g transform="translate(500, 70)">
        <rect width="200" height="110" rx="8" fill="url(#sqaTrendsGrad)" stroke="#ff0080" strokeWidth="2" />
        <text x="100" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">OO Methodology</text>
        <text x="100" y="48" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Object-Oriented</text>
        <text x="100" y="62" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Approach</text>
        <text x="100" y="80" textAnchor="middle" fill="#888" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Code reuse</text>
        <text x="100" y="95" textAnchor="middle" fill="#666" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Maintainability</text>
      </g>
      
      {/* Clean-room SE */}
      <g transform="translate(725, 70)">
        <rect width="150" height="110" rx="8" fill="url(#sqaTrendsGrad)" stroke="#ff0080" strokeWidth="2" />
        <text x="75" y="28" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Clean-room</text>
        <text x="75" y="45" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">SE</text>
        <text x="75" y="65" textAnchor="middle" fill="#888" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Defect</text>
        <text x="75" y="78" textAnchor="middle" fill="#888" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Prevention</text>
        <text x="75" y="95" textAnchor="middle" fill="#666" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Formal methods</text>
      </g>
      
      {/* Defect Injection */}
      <g transform="translate(50, 210)">
        <rect width="200" height="110" rx="8" fill="url(#sqaTrendsGrad)" stroke="#ff0080" strokeWidth="2" />
        <text x="100" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Defect Injection</text>
        <text x="100" y="48" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Fault injection</text>
        <text x="100" y="62" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Testing</text>
        <text x="100" y="80" textAnchor="middle" fill="#888" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Test effectiveness</text>
        <text x="100" y="95" textAnchor="middle" fill="#666" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Validation</text>
      </g>
      
      {/* Internal Auditing */}
      <g transform="translate(275, 210)">
        <rect width="200" height="110" rx="8" fill="url(#sqaTrendsGrad)" stroke="#ff0080" strokeWidth="2" />
        <text x="100" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Internal Auditing</text>
        <text x="100" y="48" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Compliance</text>
        <text x="100" y="62" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Verification</text>
        <text x="100" y="80" textAnchor="middle" fill="#888" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Process audit</text>
        <text x="100" y="95" textAnchor="middle" fill="#666" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Standards</text>
      </g>
      
      {/* Inspections */}
      <g transform="translate(500, 210)">
        <rect width="200" height="110" rx="8" fill="url(#sqaTrendsGrad)" stroke="#ff0080" strokeWidth="2" />
        <text x="100" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Inspections</text>
        <text x="100" y="48" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">& Walkthroughs</text>
        <text x="100" y="62" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Peer review</text>
        <text x="100" y="80" textAnchor="middle" fill="#888" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Early detection</text>
        <text x="100" y="95" textAnchor="middle" fill="#666" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Quality</text>
      </g>
      
      {/* CASE Tools */}
      <g transform="translate(725, 210)">
        <rect width="150" height="110" rx="8" fill="url(#sqaTrendsGrad)" stroke="#ff0080" strokeWidth="2" />
        <text x="75" y="28" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">CASE Tools</text>
        <text x="75" y="48" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Automation</text>
        <text x="75" y="68" textAnchor="middle" fill="#888" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Efficiency</text>
        <text x="75" y="81" textAnchor="middle" fill="#888" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Productivity</text>
        <text x="75" y="95" textAnchor="middle" fill="#666" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Quality</text>
      </g>
      
      {/* Connection lines */}
      <line x1="250" y1="125" x2="275" y2="125" stroke="#ff0080" strokeWidth="1" strokeDasharray="4,4" opacity="0.5" />
      <line x1="475" y1="125" x2="500" y2="125" stroke="#ff0080" strokeWidth="1" strokeDasharray="4,4" opacity="0.5" />
      <line x1="700" y1="125" x2="725" y2="125" stroke="#ff0080" strokeWidth="1" strokeDasharray="4,4" opacity="0.5" />
      
      <line x1="250" y1="265" x2="275" y2="265" stroke="#ff0080" strokeWidth="1" strokeDasharray="4,4" opacity="0.5" />
      <line x1="475" y1="265" x2="500" y2="265" stroke="#ff0080" strokeWidth="1" strokeDasharray="4,4" opacity="0.5" />
      <line x1="700" y1="265" x2="725" y2="265" stroke="#ff0080" strokeWidth="1" strokeDasharray="4,4" opacity="0.5" />
      
      {/* PSP/TSP Phases */}
      <g transform="translate(50, 360)">
        <text x="200" y="20" textAnchor="middle" fill="#ff0080" fontSize="12" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">PSP/TSP Phases</text>
        <rect x="10" y="30" width="100" height="25" rx="3" fill="#1a1a2e" stroke="#444" strokeWidth="1" />
        <text x="60" y="47" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Planning</text>
        <rect x="120" y="30" width="100" height="25" rx="3" fill="#1a1a2e" stroke="#444" strokeWidth="1" />
        <text x="170" y="47" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Design</text>
        <rect x="230" y="30" width="100" height="25" rx="3" fill="#1a1a2e" stroke="#444" strokeWidth="1" />
        <text x="280" y="47" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Code</text>
        <rect x="340" y="30" width="100" height="25" rx="3" fill="#1a1a2e" stroke="#444" strokeWidth="1" />
        <text x="390" y="47" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Test</text>
        <rect x="450" y="30" width="120" height="25" rx="3" fill="#1a1a2e" stroke="#444" strokeWidth="1" />
        <text x="510" y="47" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Postmortem</text>
        
        <line x1="110" y1="42" x2="120" y2="42" stroke="#ff0080" strokeWidth="1" opacity="0.5" />
        <line x1="220" y1="42" x2="230" y2="42" stroke="#ff0080" strokeWidth="1" opacity="0.5" />
        <line x1="330" y1="42" x2="340" y2="42" stroke="#ff0080" strokeWidth="1" opacity="0.5" />
        <line x1="440" y1="42" x2="450" y2="42" stroke="#ff0080" strokeWidth="1" opacity="0.5" />
      </g>
      
      {/* Benefits */}
      <g transform="translate(50, 440)">
        <text x="300" y="25" textAnchor="middle" fill="#ff0080" fontSize="12" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Key Benefits of Modern Trends</text>
        <text x="300" y="45" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">• Quality improvement</text>
        <text x="300" y="60" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">• Efficiency increase</text>
        <text x="300" y="75" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">• Defect reduction</text>
        <text x="300" y="90" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">• Process maturity</text>
        <text x="300" y="105" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">• Team collaboration</text>
      </g>
      
      <g transform="translate(50, 560)">
        <text x="300" y="25" textAnchor="middle" fill="#666" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Modern SQA trends combine personal discipline, team processes, object-oriented design, defect prevention, and automation</text>
      </g>
    </svg>
  );
}

// ============================================================
// TOPIC 1.10 — Testing Software System Security
// ============================================================

export function SecurityTestingOverviewDiagram() {
  return (
    <svg viewBox="0 0 900 650" style={{ width: '100%', height: 'auto' }}>
      <defs>
        <linearGradient id="secGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#00ff88', stopOpacity: 0.3 }} />
          <stop offset="100%" style={{ stopColor: '#00aa66', stopOpacity: 0.1 }} />
        </linearGradient>
      </defs>
      <rect width="900" height="650" fill="#0a0a0f" />
      <text x="450" y="35" textAnchor="middle" fill="#00ff88" fontSize="20" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">
        Testing Software System Security
      </text>
      
      {/* Six-Sigma */}
      <g transform="translate(50, 70)">
        <rect width="200" height="120" rx="8" fill="url(#secGrad)" stroke="#00ff88" strokeWidth="2" />
        <text x="100" y="30" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Six-Sigma</text>
        <text x="100" y="50" textAnchor="middle" fill="#ccc" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">DMAIC Process</text>
        <text x="100" y="65" textAnchor="middle" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Define → Measure</text>
        <text x="100" y="80" textAnchor="middle" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">→ Analyze → Improve</text>
        <text x="100" y="95" textAnchor="middle" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">→ Control</text>
        <text x="100" y="110" textAnchor="middle" fill="#666" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">3.4 defects/million</text>
      </g>
      
      {/* TQM */}
      <g transform="translate(300, 70)">
        <rect width="200" height="120" rx="8" fill="url(#secGrad)" stroke="#00ff88" strokeWidth="2" />
        <text x="100" y="30" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">TQM</text>
        <text x="100" y="50" textAnchor="middle" fill="#ccc" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">Total Quality Mgmt</text>
        <text x="100" y="65" textAnchor="middle" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Customer Focus</text>
        <text x="100" y="80" textAnchor="middle" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Total Involvement</text>
        <text x="100" y="95" textAnchor="middle" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Continuous Improvement</text>
        <text x="100" y="110" textAnchor="middle" fill="#666" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Organization-wide</text>
      </g>
      
      {/* Security Testing */}
      <g transform="translate(550, 70)">
        <rect width="300" height="120" rx="8" fill="url(#secGrad)" stroke="#00ff88" strokeWidth="2" />
        <text x="150" y="30" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Security Testing Techniques</text>
        <text x="150" y="50" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">• Vulnerability Assessment</text>
        <text x="150" y="65" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">• Penetration Testing</text>
        <text x="150" y="80" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">• Code Review</text>
        <text x="150" y="95" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">• Security Audits</text>
        <text x="150" y="110" textAnchor="middle" fill="#666" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">• Static & Dynamic Analysis</text>
      </g>
      
      {/* CIA Triad */}
      <g transform="translate(50, 230)">
        <text x="150" y="20" textAnchor="middle" fill="#00ff88" fontSize="12" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">CIA Triad</text>
        <circle cx="50" cy="70" r="35" fill="none" stroke="#00ff88" strokeWidth="2" />
        <text x="50" y="75" textAnchor="middle" fill="#fff" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">C</text>
        <text x="50" y="90" textAnchor="middle" fill="#888" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Confidentiality</text>
        
        <circle cx="150" cy="70" r="35" fill="none" stroke="#00ff88" strokeWidth="2" />
        <text x="150" y="75" textAnchor="middle" fill="#fff" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">I</text>
        <text x="150" y="90" textAnchor="middle" fill="#888" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Integrity</text>
        
        <circle cx="250" cy="70" r="35" fill="none" stroke="#00ff88" strokeWidth="2" />
        <text x="250" y="75" textAnchor="middle" fill="#fff" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">A</text>
        <text x="250" y="90" textAnchor="middle" fill="#888" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Availability</text>
      </g>
      
      {/* Sigma Levels */}
      <g transform="translate(500, 230)">
        <text x="200" y="20" textAnchor="middle" fill="#00ff88" fontSize="12" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Sigma Levels</text>
        <rect x="20" y="35" width="360" height="25" rx="3" fill="#1a1a2e" stroke="#444" strokeWidth="1" />
        <text x="30" y="52" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">1σ:</text>
        <text x="60" y="52" fill="#ff4444" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">69% defects</text>
        <rect x="20" y="65" width="360" height="25" rx="3" fill="#1a1a2e" stroke="#444" strokeWidth="1" />
        <text x="30" y="82" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">3σ:</text>
        <text x="60" y="82" fill="#ffaa00" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">66,807 defects</text>
        <rect x="20" y="95" width="360" height="25" rx="3" fill="#2a2a3e" stroke="#666" strokeWidth="1" />
        <text x="30" y="112" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">6σ:</text>
        <text x="60" y="112" fill="#00ff88" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">3.4 defects/million</text>
      </g>
      
      {/* Security Testing Process */}
      <g transform="translate(50, 380)">
        <text x="300" y="20" textAnchor="middle" fill="#00ff88" fontSize="12" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Security Testing Process</text>
        <rect x="10" y="30" width="120" height="35" rx="4" fill="#1a1a2e" stroke="#00ff88" strokeWidth="1" />
        <text x="70" y="52" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Assess</text>
        <rect x="140" y="30" width="120" height="35" rx="4" fill="#1a1a2e" stroke="#00ff88" strokeWidth="1" />
        <text x="200" y="52" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Scan</text>
        <rect x="270" y="30" width="120" height="35" rx="4" fill="#1a1a2e" stroke="#00ff88" strokeWidth="1" />
        <text x="330" y="52" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Test</text>
        <rect x="400" y="30" width="120" height="35" rx="4" fill="#1a1a2e" stroke="#00ff88" strokeWidth="1" />
        <text x="460" y="52" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Report</text>
        <rect x="530" y="30" width="120" height="35" rx="4" fill="#1a1a2e" stroke="#00ff88" strokeWidth="1" />
        <text x="590" y="52" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Remediate</text>
        
        <line x1="130" y1="47" x2="140" y2="47" stroke="#00ff88" strokeWidth="1" opacity="0.5" />
        <line x1="260" y1="47" x2="270" y2="47" stroke="#00ff88" strokeWidth="1" opacity="0.5" />
        <line x1="390" y1="47" x2="400" y2="47" stroke="#00ff88" strokeWidth="1" opacity="0.5" />
        <line x1="520" y1="47" x2="530" y2="47" stroke="#00ff88" strokeWidth="1" opacity="0.5" />
      </g>
      
      <g transform="translate(50, 500)">
        <text x="300" y="25" textAnchor="middle" fill="#666" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Six-Sigma aur TQM quality improvement methodologies hain jo security testing ko systematic approach dete hain</text>
      </g>
    </svg>
  );
}

// ============================================================
// TOPIC 1.11 — Complexity Metrics and Models
// ============================================================

export function ComplexityMetricsOverviewDiagram() {
  return (
    <svg viewBox="0 0 900 650" style={{ width: '100%', height: 'auto' }}>
      <defs>
        <linearGradient id="complexGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#00aaff', stopOpacity: 0.3 }} />
          <stop offset="100%" style={{ stopColor: '#0066cc', stopOpacity: 0.1 }} />
        </linearGradient>
      </defs>
      <rect width="900" height="650" fill="#0a0a0f" />
      <text x="450" y="35" textAnchor="middle" fill="#00aaff" fontSize="20" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">
        Complexity Metrics and Models
      </text>
      
      {/* Cyclomatic Complexity */}
      <g transform="translate(50, 70)">
        <rect width="250" height="120" rx="8" fill="url(#complexGrad)" stroke="#00aaff" strokeWidth="2" />
        <text x="125" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Cyclomatic Complexity</text>
        <text x="125" y="48" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">M = E - N + 2P</text>
        <text x="125" y="62" textAnchor="middle" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Control flow analysis</text>
        <text x="125" y="77" textAnchor="middle" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">1-5: Simple</text>
        <text x="125" y="92" textAnchor="middle" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">6-10: Moderate</text>
        <text x="125" y="107" textAnchor="middle" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">11+: Complex</text>
      </g>
      
      {/* Halstead Metrics */}
      <g transform="translate(325, 70)">
        <rect width="250" height="120" rx="8" fill="url(#complexGrad)" stroke="#00aaff" strokeWidth="2" />
        <text x="125" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Halstead Metrics</text>
        <text x="125" y="48" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Operators + Operands</text>
        <text x="125" y="62" textAnchor="middle" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Vocabulary (n)</text>
        <text x="125" y="77" textAnchor="middle" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Length (N)</text>
        <text x="125" y="92" textAnchor="middle" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Volume (V)</text>
        <text x="125" y="107" textAnchor="middle" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Difficulty (D), Effort (E)</text>
      </g>
      
      {/* McCabe Complexity */}
      <g transform="translate(600, 70)">
        <rect width="250" height="120" rx="8" fill="url(#complexGrad)" stroke="#00aaff" strokeWidth="2" />
        <text x="125" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">McCabe Complexity</text>
        <text x="125" y="48" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Decision Points</text>
        <text x="125" y="62" textAnchor="middle" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">If, else, for, while</text>
        <text x="125" y="77" textAnchor="middle" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Target: less than 10</text>
        <text x="125" y="92" textAnchor="middle" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Refactoring needed</text>
        <text x="125" y="107" textAnchor="middle" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Above 10 = high risk</text>
      </g>
      
      {/* OO Complexity */}
      <g transform="translate(50, 220)">
        <rect width="250" height="120" rx="8" fill="url(#complexGrad)" stroke="#00aaff" strokeWidth="2" />
        <text x="125" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Object-Oriented</text>
        <text x="125" y="48" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Inheritance Depth</text>
        <text x="125" y="62" textAnchor="middle" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Coupling</text>
        <text x="125" y="77" textAnchor="middle" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Cohesion</text>
        <text x="125" y="92" textAnchor="middle" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Method Count</text>
        <text x="125" y="107" textAnchor="middle" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Attribute Count</text>
      </g>
      
      {/* Complexity Visualization */}
      <g transform="translate(325, 220)">
        <text x="125" y="20" textAnchor="middle" fill="#00aaff" fontSize="12" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Complexity Scale</text>
        <rect x="20" y="30" width="210" height="25" rx="4" fill="#1a1a2e" stroke="#00ff88" strokeWidth="1" />
        <text x="30" y="47" fill="#00ff88" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">1-5: Simple (Green)</text>
        <rect x="20" y="60" width="210" height="25" rx="4" fill="#1a1a2e" stroke="#ffaa00" strokeWidth="1" />
        <text x="30" y="77" fill="#ffaa00" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">6-10: Moderate (Yellow)</text>
        <rect x="20" y="90" width="210" height="25" rx="4" fill="#2a1a1a" stroke="#ff4444" strokeWidth="1" />
        <text x="30" y="107" fill="#ff4444" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">11+: Complex (Red)</text>
      </g>
      
      {/* Benefits */}
      <g transform="translate(600, 220)">
        <text x="125" y="20" textAnchor="middle" fill="#00aaff" fontSize="12" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Benefits</text>
        <text x="125" y="40" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">• Maintainability assess</text>
        <text x="125" y="55" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">• Testability evaluate</text>
        <text x="125" y="70" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">• Defect probability predict</text>
        <text x="125" y="85" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">• Refactoring priority</text>
        <text x="125" y="100" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">• Quality improvement</text>
      </g>
      
      {/* Key Formulas */}
      <g transform="translate(50, 400)">
        <text x="350" y="20" textAnchor="middle" fill="#00aaff" fontSize="12" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Key Formulas</text>
        <text x="350" y="45" textAnchor="middle" fill="#ccc" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">Cyclomatic: M = E - N + 2P</text>
        <text x="350" y="65" textAnchor="middle" fill="#ccc" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">Halstead Volume: V = N × log₂(n)</text>
        <text x="350" y="85" textAnchor="middle" fill="#ccc" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">Halstead Effort: E = D × V</text>
      </g>
      
      <g transform="translate(50, 520)">
        <text x="350" y="25" textAnchor="middle" fill="#666" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">High complexity = high maintenance cost, high defect probability, difficult testing</text>
      </g>
    </svg>
  );
}

// ============================================================
// TOPIC 1.12 — Quality Management Metrics
// ============================================================

export function QualityMetricsOverviewDiagram() {
  return (
    <svg viewBox="0 0 900 650" style={{ width: '100%', height: 'auto' }}>
      <defs>
        <linearGradient id="qmGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#ff8800', stopOpacity: 0.3 }} />
          <stop offset="100%" style={{ stopColor: '#cc6600', stopOpacity: 0.1 }} />
        </linearGradient>
      </defs>
      <rect width="900" height="650" fill="#0a0a0f" />
      <text x="450" y="35" textAnchor="middle" fill="#ff8800" fontSize="20" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">
        Quality Management Metrics
      </text>
      
      {/* Defect Metrics */}
      <g transform="translate(50, 70)">
        <rect width="200" height="130" rx="8" fill="url(#qmGrad)" stroke="#ff8800" strokeWidth="2" />
        <text x="100" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Defect Metrics</text>
        <text x="100" y="48" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">• Defect Density</text>
        <text x="100" y="63" textAnchor="middle" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">(Defects/KLOC)</text>
        <text x="100" y="78" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">• DRE</text>
        <text x="100" y="93" textAnchor="middle" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">(90%+ target)</text>
        <text x="100" y="108" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">• Reopen Rate</text>
        <text x="100" y="123" textAnchor="middle" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">(less than 5% target)</text>
      </g>
      
      {/* Testing Metrics */}
      <g transform="translate(275, 70)">
        <rect width="200" height="130" rx="8" fill="url(#qmGrad)" stroke="#ff8800" strokeWidth="2" />
        <text x="100" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Testing Metrics</text>
        <text x="100" y="48" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">• Test Coverage</text>
        <text x="100" y="63" textAnchor="middle" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">(Code %)</text>
        <text x="100" y="78" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">• Test Execution</text>
        <text x="100" y="93" textAnchor="middle" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">(Run vs Planned)</text>
        <text x="100" y="108" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">• Automation %</text>
        <text x="100" y="123" textAnchor="middle" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">(Automated tests)</text>
      </g>
      
      {/* Code Quality Metrics */}
      <g transform="translate(500, 70)">
        <rect width="200" height="130" rx="8" fill="url(#qmGrad)" stroke="#ff8800" strokeWidth="2" />
        <text x="100" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Code Quality</text>
        <text x="100" y="48" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">• Complexity</text>
        <text x="100" y="63" textAnchor="middle" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">(Cyclomatic)</text>
        <text x="100" y="78" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">• Duplication %</text>
        <text x="100" y="93" textAnchor="middle" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">(Duplicate code)</text>
        <text x="100" y="108" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">• Review Coverage</text>
        <text x="100" y="123" textAnchor="middle" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">(Code reviewed %)</text>
      </g>
      
      {/* Process Metrics */}
      <g transform="translate(725, 70)">
        <rect width="150" height="130" rx="8" fill="url(#qmGrad)" stroke="#ff8800" strokeWidth="2" />
        <text x="75" y="28" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Process</text>
        <text x="75" y="48" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">• Schedule</text>
        <text x="75" y="63" textAnchor="middle" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Variance</text>
        <text x="75" y="78" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">• Cost</text>
        <text x="75" y="93" textAnchor="middle" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Variance</text>
        <text x="75" y="108" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">• Effort</text>
        <text x="75" y="123" textAnchor="middle" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Variance</text>
      </g>
      
      {/* Metric Flow */}
      <g transform="translate(50, 250)">
        <text x="350" y="20" textAnchor="middle" fill="#ff8800" fontSize="12" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Metric Implementation Flow</text>
        <rect x="10" y="30" width="120" height="35" rx="4" fill="#1a1a2e" stroke="#ff8800" strokeWidth="1" />
        <text x="70" y="52" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Define Goals</text>
        <rect x="140" y="30" width="120" height="35" rx="4" fill="#1a1a2e" stroke="#ff8800" strokeWidth="1" />
        <text x="200" y="52" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Collect Data</text>
        <rect x="270" y="30" width="120" height="35" rx="4" fill="#1a1a2e" stroke="#ff8800" strokeWidth="1" />
        <text x="330" y="52" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Track Trends</text>
        <rect x="400" y="30" width="120" height="35" rx="4" fill="#1a1a2e" stroke="#ff8800" strokeWidth="1" />
        <text x="460" y="52" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Report</text>
        <rect x="530" y="30" width="120" height="35" rx="4" fill="#1a1a2e" stroke="#ff8800" strokeWidth="1" />
        <text x="590" y="52" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Improve</text>
        
        <line x1="130" y1="47" x2="140" y2="47" stroke="#ff8800" strokeWidth="1" opacity="0.5" />
        <line x1="260" y1="47" x2="270" y2="47" stroke="#ff8800" strokeWidth="1" opacity="0.5" />
        <line x1="390" y1="47" x2="400" y2="47" stroke="#ff8800" strokeWidth="1" opacity="0.5" />
        <line x1="520" y1="47" x2="530" y2="47" stroke="#ff8800" strokeWidth="1" opacity="0.5" />
      </g>
      
      {/* Key Formulas */}
      <g transform="translate(50, 380)">
        <text x="350" y="20" textAnchor="middle" fill="#ff8800" fontSize="12" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Key Formulas</text>
        <text x="350" y="45" textAnchor="middle" fill="#ccc" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">Defect Density = Defects / KLOC</text>
        <text x="350" y="65" textAnchor="middle" fill="#ccc" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">DRE = (Pre-Release Defects / Total Defects) × 100</text>
        <text x="350" y="85" textAnchor="middle" fill="#ccc" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">Test Coverage = Tested Code / Total Code × 100</text>
      </g>
      
      <g transform="translate(50, 520)">
        <text x="350" y="25" textAnchor="middle" fill="#666" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Quality metrics help measure, track, and improve software quality throughout the lifecycle</text>
      </g>
    </svg>
  );
}

// ============================================================
// TOPIC 1.13 — Availability Metrics
// ============================================================

export function AvailabilityMetricsOverviewDiagram() {
  return (
    <svg viewBox="0 0 900 650" style={{ width: '100%', height: 'auto' }}>
      <defs>
        <linearGradient id="availGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#00ff88', stopOpacity: 0.3 }} />
          <stop offset="100%" style={{ stopColor: '#00aa66', stopOpacity: 0.1 }} />
        </linearGradient>
      </defs>
      <rect width="900" height="650" fill="#0a0a0f" />
      <text x="450" y="35" textAnchor="middle" fill="#00ff88" fontSize="20" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">
        Availability Metrics
      </text>
      
      {/* Availability Tiers */}
      <g transform="translate(50, 70)">
        <text x="350" y="20" textAnchor="middle" fill="#00ff88" fontSize="12" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Availability Tiers</text>
        <rect x="10" y="30" width="160" height="60" rx="4" fill="#1a1a2e" stroke="#ff4444" strokeWidth="1" />
        <text x="90" y="50" textAnchor="middle" fill="#ff4444" fontSize="14" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">99%</text>
        <text x="90" y="70" textAnchor="middle" fill="#888" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">7.3 hrs downtime/mo</text>
        
        <rect x="180" y="30" width="160" height="60" rx="4" fill="#1a1a2e" stroke="#ffaa00" strokeWidth="1" />
        <text x="260" y="50" textAnchor="middle" fill="#ffaa00" fontSize="14" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">99.9%</text>
        <text x="260" y="70" textAnchor="middle" fill="#888" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">43.8 min downtime/mo</text>
        
        <rect x="350" y="30" width="160" height="60" rx="4" fill="#2a2a3e" stroke="#00ff88" strokeWidth="1" />
        <text x="430" y="50" textAnchor="middle" fill="#00ff88" fontSize="14" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">99.99%</text>
        <text x="430" y="70" textAnchor="middle" fill="#888" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">4.38 min downtime/mo</text>
        
        <rect x="520" y="30" width="160" height="60" rx="4" fill="#2a3a2a" stroke="#00ff88" strokeWidth="2" />
        <text x="600" y="50" textAnchor="middle" fill="#00ff88" fontSize="14" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">99.999%</text>
        <text x="600" y="70" textAnchor="middle" fill="#888" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">26.3 sec downtime/mo</text>
      </g>
      
      {/* Reliability Metrics */}
      <g transform="translate(50, 180)">
        <rect width="200" height="110" rx="8" fill="url(#availGrad)" stroke="#00ff88" strokeWidth="2" />
        <text x="100" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Reliability Metrics</text>
        <text x="100" y="48" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">• MTBF</text>
        <text x="100" y="63" textAnchor="middle" fill="#888" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Mean Time Between</text>
        <text x="100" y="75" textAnchor="middle" fill="#888" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Failures</text>
        <text x="100" y="90" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">• MTTR</text>
        <text x="100" y="105" textAnchor="middle" fill="#888" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Mean Time To Repair</text>
      </g>
      
      {/* Performance Metrics */}
      <g transform="translate(275, 180)">
        <rect width="200" height="110" rx="8" fill="url(#availGrad)" stroke="#00ff88" strokeWidth="2" />
        <text x="100" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Performance Metrics</text>
        <text x="100" y="48" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">• Response Time</text>
        <text x="100" y="63" textAnchor="middle" fill="#888" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">System response speed</text>
        <text x="100" y="80" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">• Throughput</text>
        <text x="100" y="95" textAnchor="middle" fill="#888" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Operations per second</text>
      </g>
      
      {/* Recovery Metrics */}
      <g transform="translate(500, 180)">
        <rect width="200" height="110" rx="8" fill="url(#availGrad)" stroke="#00ff88" strokeWidth="2" />
        <text x="100" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Recovery Metrics</text>
        <text x="100" y="48" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">• RTO</text>
        <text x="100" y="63" textAnchor="middle" fill="#888" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Recovery Time Objective</text>
        <text x="100" y="80" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">• RPO</text>
        <text x="100" y="95" textAnchor="middle" fill="#888" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Recovery Point Objective</text>
      </g>
      
      {/* Availability Formula */}
      <g transform="translate(50, 330)">
        <text x="350" y="20" textAnchor="middle" fill="#00ff88" fontSize="12" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Availability Formula</text>
        <rect x="50" y="35" width="600" height="50" rx="8" fill="#1a1a2e" stroke="#00ff88" strokeWidth="2" />
        <text x="350" y="65" textAnchor="middle" fill="#fff" fontSize="16" fontFamily="'Segoe UI', system-ui, sans-serif">Availability = (Uptime / Total Time) × 100</text>
      </g>
      
      {/* Improvement Strategies */}
      <g transform="translate(50, 430)">
        <text x="350" y="20" textAnchor="middle" fill="#00ff88" fontSize="12" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Availability Improvement Strategies</text>
        <text x="350" y="45" textAnchor="middle" fill="#ccc" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">• Redundancy — Eliminate single point of failure</text>
        <text x="350" y="65" textAnchor="middle" fill="#ccc" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">• Failover — Automated failover implementation</text>
        <text x="350" y="85" textAnchor="middle" fill="#ccc" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">• Monitoring — Real-time monitoring setup</text>
        <text x="350" y="105" textAnchor="middle" fill="#ccc" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">• Preventive Maintenance — Regular maintenance schedule</text>
      </g>
      
      <g transform="translate(50, 560)">
        <text x="350" y="25" textAnchor="middle" fill="#666" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Availability metrics measure system operational time and help improve reliability</text>
      </g>
    </svg>
  );
}

// ============================================================
// TOPIC 1.14 — Defect Removal Effectiveness
// ============================================================

export function DREOverviewDiagram() {
  return (
    <svg viewBox="0 0 900 650" style={{ width: '100%', height: 'auto' }}>
      <defs>
        <linearGradient id="dreGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#aa00ff', stopOpacity: 0.3 }} />
          <stop offset="100%" style={{ stopColor: '#6600cc', stopOpacity: 0.1 }} />
        </linearGradient>
      </defs>
      <rect width="900" height="650" fill="#0a0a0f" />
      <text x="450" y="35" textAnchor="middle" fill="#aa00ff" fontSize="20" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">
        Defect Removal Effectiveness (DRE)
      </text>
      
      {/* DRE Formula */}
      <g transform="translate(50, 70)">
        <text x="350" y="20" textAnchor="middle" fill="#aa00ff" fontSize="12" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">DRE Formula</text>
        <rect x="50" y="35" width="600" height="50" rx="8" fill="#1a1a2e" stroke="#aa00ff" strokeWidth="2" />
        <text x="350" y="65" textAnchor="middle" fill="#fff" fontSize="16" fontFamily="'Segoe UI', system-ui, sans-serif">DRE = (Defects Found Pre-Release / Total Defects) × 100</text>
      </g>
      
      {/* DRE Benchmarks */}
      <g transform="translate(50, 160)">
        <text x="350" y="20" textAnchor="middle" fill="#aa00ff" fontSize="12" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">DRE Benchmarks</text>
        <rect x="20" y="30" width="200" height="50" rx="4" fill="#2a1a3e" stroke="#aa00ff" strokeWidth="2" />
        <text x="120" y="50" textAnchor="middle" fill="#aa00ff" fontSize="16" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">90%+</text>
        <text x="120" y="68" textAnchor="middle" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Excellent</text>
        
        <rect x="240" y="30" width="200" height="50" rx="4" fill="#1a1a2e" stroke="#666" strokeWidth="1" />
        <text x="340" y="50" textAnchor="middle" fill="#aaa" fontSize="16" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">80-89%</text>
        <text x="340" y="68" textAnchor="middle" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Good</text>
        
        <rect x="460" y="30" width="200" height="50" rx="4" fill="#1a1a2e" stroke="#666" strokeWidth="1" />
        <text x="560" y="50" textAnchor="middle" fill="#888" fontSize="16" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">70-79%</text>
        <text x="560" y="68" textAnchor="middle" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Fair</text>
        
        <rect x="680" y="30" width="170" height="50" rx="4" fill="#2a1a1a" stroke="#ff4444" strokeWidth="1" />
        <text x="765" y="50" textAnchor="middle" fill="#ff4444" fontSize="16" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">less than 70%</text>
        <text x="765" y="68" textAnchor="middle" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Poor</text>
      </g>
      
      {/* Improvement Strategies */}
      <g transform="translate(50, 250)">
        <text x="350" y="20" textAnchor="middle" fill="#aa00ff" fontSize="12" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">DRE Improvement Strategies</text>
        <rect x="20" y="30" width="200" height="40" rx="4" fill="#1a1a2e" stroke="#aa00ff" strokeWidth="1" />
        <text x="120" y="55" textAnchor="middle" fill="#ccc" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">Comprehensive Testing</text>
        <rect x="240" y="30" width="200" height="40" rx="4" fill="#1a1a2e" stroke="#aa00ff" strokeWidth="1" />
        <text x="340" y="55" textAnchor="middle" fill="#ccc" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">Early Testing</text>
        <rect x="460" y="30" width="200" height="40" rx="4" fill="#1a1a2e" stroke="#aa00ff" strokeWidth="1" />
        <text x="560" y="55" textAnchor="middle" fill="#ccc" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">Code Reviews</text>
        <rect x="680" y="30" width="170" height="40" rx="4" fill="#1a1a2e" stroke="#aa00ff" strokeWidth="1" />
        <text x="765" y="55" textAnchor="middle" fill="#ccc" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">Static Analysis</text>
        
        <rect x="20" y="80" width="200" height="40" rx="4" fill="#1a1a2e" stroke="#aa00ff" strokeWidth="1" />
        <text x="120" y="105" textAnchor="middle" fill="#ccc" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">Test Automation</text>
        <rect x="240" y="80" width="200" height="40" rx="4" fill="#1a1a2e" stroke="#aa00ff" strokeWidth="1" />
        <text x="340" y="105" textAnchor="middle" fill="#ccc" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">Quality Gates</text>
        <rect x="460" y="80" width="200" height="40" rx="4" fill="#1a1a2e" stroke="#aa00ff" strokeWidth="1" />
        <text x="560" y="105" textAnchor="middle" fill="#ccc" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">Training</text>
        <rect x="680" y="80" width="170" height="40" rx="4" fill="#1a1a2e" stroke="#aa00ff" strokeWidth="1" />
        <text x="765" y="105" textAnchor="middle" fill="#ccc" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">Process Improvement</text>
      </g>
      
      {/* Example */}
      <g transform="translate(50, 380)">
        <text x="350" y="20" textAnchor="middle" fill="#aa00ff" fontSize="12" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Example</text>
        <rect x="50" y="35" width="600" height="60" rx="8" fill="#1a1a2e" stroke="#aa00ff" strokeWidth="1" />
        <text x="350" y="55" textAnchor="middle" fill="#ccc" fontSize="12" fontFamily="'Segoe UI', system-ui, sans-serif">Total Defects: 100</text>
        <text x="350" y="75" textAnchor="middle" fill="#ccc" fontSize="12" fontFamily="'Segoe UI', system-ui, sans-serif">Pre-Release: 90 | Post-Release: 10</text>
        <text x="350" y="95" textAnchor="middle" fill="#00ff88" fontSize="14" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">DRE = (90 / 100) × 100 = 90%</text>
      </g>
      
      <g transform="translate(50, 500)">
        <text x="350" y="25" textAnchor="middle" fill="#666" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">High DRE = good testing process. Low DRE = many defects escaping to production</text>
      </g>
    </svg>
  );
}

// ============================================================
// TOPIC 1.15 — FMEA
// ============================================================

export function FMEAOverviewDiagram() {
  return (
    <svg viewBox="0 0 900 650" style={{ width: '100%', height: 'auto' }}>
      <defs>
        <linearGradient id="fmeaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#ff0080', stopOpacity: 0.3 }} />
          <stop offset="100%" style={{ stopColor: '#cc0066', stopOpacity: 0.1 }} />
        </linearGradient>
      </defs>
      <rect width="900" height="650" fill="#0a0a0f" />
      <text x="450" y="35" textAnchor="middle" fill="#ff0080" fontSize="20" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">
        FMEA — Failure Mode and Effects Analysis
      </text>
      
      {/* RPN Formula */}
      <g transform="translate(50, 70)">
        <text x="350" y="20" textAnchor="middle" fill="#ff0080" fontSize="12" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">RPN Formula</text>
        <rect x="50" y="35" width="600" height="50" rx="8" fill="#1a1a2e" stroke="#ff0080" strokeWidth="2" />
        <text x="350" y="65" textAnchor="middle" fill="#fff" fontSize="16" fontFamily="'Segoe UI', system-ui, sans-serif">RPN = Severity × Occurrence × Detection</text>
      </g>
      
      {/* Scoring */}
      <g transform="translate(50, 160)">
        <text x="115" y="20" textAnchor="middle" fill="#ff0080" fontSize="11" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Severity</text>
        <rect x="20" y="30" width="190" height="80" rx="4" fill="#1a1a2e" stroke="#ff0080" strokeWidth="1" />
        <text x="115" y="45" textAnchor="middle" fill="#ff4444" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">10 = Catastrophic</text>
        <text x="115" y="60" textAnchor="middle" fill="#aaa" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">7-9 = Major</text>
        <text x="115" y="75" textAnchor="middle" fill="#aaa" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">4-6 = Moderate</text>
        <text x="115" y="90" textAnchor="middle" fill="#aaa" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">1-3 = Minor</text>
        
        <text x="355" y="20" textAnchor="middle" fill="#ff0080" fontSize="11" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Occurrence</text>
        <rect x="260" y="30" width="190" height="80" rx="4" fill="#1a1a2e" stroke="#ff0080" strokeWidth="1" />
        <text x="355" y="45" textAnchor="middle" fill="#ff4444" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">10 = Very likely</text>
        <text x="355" y="60" textAnchor="middle" fill="#aaa" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">7-9 = Likely</text>
        <text x="355" y="75" textAnchor="middle" fill="#aaa" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">4-6 = Occasional</text>
        <text x="355" y="90" textAnchor="middle" fill="#aaa" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">1-3 = Rare</text>
        
        <text x="595" y="20" textAnchor="middle" fill="#ff0080" fontSize="11" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Detection</text>
        <rect x="500" y="30" width="190" height="80" rx="4" fill="#1a1a2e" stroke="#ff0080" strokeWidth="1" />
        <text x="595" y="45" textAnchor="middle" fill="#ff4444" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">10 = Very hard</text>
        <text x="595" y="60" textAnchor="middle" fill="#aaa" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">7-9 = Difficult</text>
        <text x="595" y="75" textAnchor="middle" fill="#aaa" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">4-6 = Moderate</text>
        <text x="595" y="90" textAnchor="middle" fill="#aaa" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">1-3 = Easy</text>
      </g>
      
      {/* RPN Interpretation */}
      <g transform="translate(50, 280)">
        <text x="350" y="20" textAnchor="middle" fill="#ff0080" fontSize="12" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">RPN Interpretation</text>
        <rect x="20" y="30" width="200" height="40" rx="4" fill="#2a1a1a" stroke="#00ff88" strokeWidth="2" />
        <text x="120" y="55" textAnchor="middle" fill="#00ff88" fontSize="12" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">1-100: Low Risk</text>
        <rect x="240" y="30" width="200" height="40" rx="4" fill="#1a1a2e" stroke="#ffaa00" strokeWidth="1" />
        <text x="340" y="55" textAnchor="middle" fill="#ffaa00" fontSize="12" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">101-500: Medium</text>
        <rect x="460" y="30" width="200" height="40" rx="4" fill="#2a1a1a" stroke="#ff4444" strokeWidth="2" />
        <text x="560" y="55" textAnchor="middle" fill="#ff4444" fontSize="12" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">501-1000: High Risk</text>
      </g>
      
      {/* FMEA Process */}
      <g transform="translate(50, 380)">
        <text x="350" y="20" textAnchor="middle" fill="#ff0080" fontSize="12" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">FMEA Process</text>
        <rect x="10" y="30" width="120" height="35" rx="4" fill="#1a1a2e" stroke="#ff0080" strokeWidth="1" />
        <text x="70" y="52" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">1. System</text>
        <rect x="140" y="30" width="120" height="35" rx="4" fill="#1a1a2e" stroke="#ff0080" strokeWidth="1" />
        <text x="200" y="52" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">2. Failures</text>
        <rect x="270" y="30" width="120" height="35" rx="4" fill="#1a1a2e" stroke="#ff0080" strokeWidth="1" />
        <text x="330" y="52" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">3. Effects</text>
        <rect x="400" y="30" width="120" height="35" rx="4" fill="#1a1a2e" stroke="#ff0080" strokeWidth="1" />
        <text x="460" y="52" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">4. Scoring</text>
        <rect x="530" y="30" width="120" height="35" rx="4" fill="#1a1a2e" stroke="#ff0080" strokeWidth="1" />
        <text x="590" y="52" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">5. RPN</text>
        <rect x="660" y="30" width="170" height="35" rx="4" fill="#1a1a2e" stroke="#ff0080" strokeWidth="1" />
        <text x="745" y="52" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">6. Action</text>
        
        <line x1="130" y1="47" x2="140" y2="47" stroke="#ff0080" strokeWidth="1" opacity="0.5" />
        <line x1="260" y1="47" x2="270" y2="47" stroke="#ff0080" strokeWidth="1" opacity="0.5" />
        <line x1="390" y1="47" x2="400" y2="47" stroke="#ff0080" strokeWidth="1" opacity="0.5" />
        <line x1="520" y1="47" x2="530" y2="47" stroke="#ff0080" strokeWidth="1" opacity="0.5" />
        <line x1="650" y1="47" x2="660" y2="47" stroke="#ff0080" strokeWidth="1" opacity="0.5" />
      </g>
      
      <g transform="translate(50, 500)">
        <text x="350" y="25" textAnchor="middle" fill="#666" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">FMEA proactively identifies failures before they occur and prioritizes improvement actions</text>
      </g>
    </svg>
  );
}

// ============================================================
// TOPIC 1.16 — Quality Function Deployment (QFD)
// ============================================================

export function QFDOverviewDiagram() {
  return (
    <svg viewBox="0 0 900 650" style={{ width: '100%', height: 'auto' }}>
      <defs>
        <linearGradient id="qfdGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#00aaff', stopOpacity: 0.3 }} />
          <stop offset="100%" style={{ stopColor: '#0066cc', stopOpacity: 0.1 }} />
        </linearGradient>
      </defs>
      <rect width="900" height="650" fill="#0a0a0f" />
      <text x="450" y="35" textAnchor="middle" fill="#00aaff" fontSize="20" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">
        Quality Function Deployment (QFD)
      </text>
      
      {/* House of Quality */}
      <g transform="translate(50, 70)">
        <text x="350" y="20" textAnchor="middle" fill="#00aaff" fontSize="12" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">House of Quality</text>
        
        {/* Customer Requirements */}
        <rect x="20" y="30" width="200" height="80" rx="4" fill="#1a1a2e" stroke="#00aaff" strokeWidth="1" />
        <text x="120" y="45" textAnchor="middle" fill="#00aaff" fontSize="10" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Customer Requirements</text>
        <text x="120" y="60" textAnchor="middle" fill="#ccc" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Voice of Customer</text>
        <text x="120" y="75" textAnchor="middle" fill="#888" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">• Needs</text>
        <text x="120" y="88" textAnchor="middle" fill="#888" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">• Expectations</text>
        <text x="120" y="101" textAnchor="middle" fill="#888" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">• Priorities</text>
        
        {/* Technical Requirements */}
        <rect x="400" y="30" width="200" height="80" rx="4" fill="#1a1a2e" stroke="#00aaff" strokeWidth="1" />
        <text x="500" y="45" textAnchor="middle" fill="#00aaff" fontSize="10" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Technical Requirements</text>
        <text x="500" y="60" textAnchor="middle" fill="#ccc" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Engineering Specs</text>
        <text x="500" y="75" textAnchor="middle" fill="#888" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">• Parameters</text>
        <text x="500" y="88" textAnchor="middle" fill="#888" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">• Characteristics</text>
        <text x="500" y="101" textAnchor="middle" fill="#888" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">• Measures</text>
        
        {/* Relationship Matrix */}
        <rect x="20" y="130" width="580" height="60" rx="4" fill="#1a1a2e" stroke="#00aaff" strokeWidth="1" />
        <text x="310" y="150" textAnchor="middle" fill="#00aaff" fontSize="10" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Relationship Matrix</text>
        <text x="310" y="170" textAnchor="middle" fill="#888" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Strong ● Medium ○ Weak △ No relation</text>
        <text x="310" y="185" textAnchor="middle" fill="#666" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Maps customer requirements to technical specs</text>
      </g>
      
      {/* QFD Process */}
      <g transform="translate(50, 250)">
        <text x="350" y="20" textAnchor="middle" fill="#00aaff" fontSize="12" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">QFD Process</text>
        <rect x="10" y="30" width="120" height="35" rx="4" fill="#1a1a2e" stroke="#00aaff" strokeWidth="1" />
        <text x="70" y="52" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">1. Research</text>
        <rect x="140" y="30" width="120" height="35" rx="4" fill="#1a1a2e" stroke="#00aaff" strokeWidth="1" />
        <text x="200" y="52" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">2. Analyze</text>
        <rect x="270" y="30" width="120" height="35" rx="4" fill="#1a1a2e" stroke="#00aaff" strokeWidth="1" />
        <text x="330" y="52" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">3. Translate</text>
        <rect x="400" y="30" width="120" height="35" rx="4" fill="#1a1a2e" stroke="#00aaff" strokeWidth="1" />
        <text x="460" y="52" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">4. Build Matrix</text>
        <rect x="530" y="30" width="120" height="35" rx="4" fill="#1a1a2e" stroke="#00aaff" strokeWidth="1" />
        <text x="590" y="52" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">5. Set Targets</text>
        <rect x="660" y="30" width="170" height="35" rx="4" fill="#1a1a2e" stroke="#00aaff" strokeWidth="1" />
        <text x="745" y="52" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">6. Deploy</text>
        
        <line x1="130" y1="47" x2="140" y2="47" stroke="#00aaff" strokeWidth="1" opacity="0.5" />
        <line x1="260" y1="47" x2="270" y2="47" stroke="#00aaff" strokeWidth="1" opacity="0.5" />
        <line x1="390" y1="47" x2="400" y2="47" stroke="#00aaff" strokeWidth="1" opacity="0.5" />
        <line x1="520" y1="47" x2="530" y2="47" stroke="#00aaff" strokeWidth="1" opacity="0.5" />
        <line x1="650" y1="47" x2="660" y2="47" stroke="#00aaff" strokeWidth="1" opacity="0.5" />
      </g>
      
      {/* Benefits */}
      <g transform="translate(50, 380)">
        <text x="350" y="20" textAnchor="middle" fill="#00aaff" fontSize="12" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">QFD Benefits</text>
        <text x="350" y="45" textAnchor="middle" fill="#ccc" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">• Customer Focus — Requirements consistently meet</text>
        <text x="350" y="65" textAnchor="middle" fill="#ccc" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">• Early Quality — Quality integrated in design</text>
        <text x="350" y="85" textAnchor="middle" fill="#ccc" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">• Communication — Cross-functional collaboration</text>
        <text x="350" y="105" textAnchor="middle" fill="#ccc" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">• Cost Reduction — Rework costs decrease</text>
        <text x="350" y="125" textAnchor="middle" fill="#ccc" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">• Decision Making — Quality priorities clarify</text>
      </g>
      
      <g transform="translate(50, 520)">
        <text x="350" y="25" textAnchor="middle" fill="#666" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">QFD translates customer requirements into technical specifications systematically</text>
      </g>
    </svg>
  );
}

// ============================================================
// TOPIC 1.17 — Taguchi Quality Loss Function
// ============================================================

export function TaguchiLossOverviewDiagram() {
  return (
    <svg viewBox="0 0 900 650" style={{ width: '100%', height: 'auto' }}>
      <defs>
        <linearGradient id="tagGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#ff8800', stopOpacity: 0.3 }} />
          <stop offset="100%" style={{ stopColor: '#cc6600', stopOpacity: 0.1 }} />
        </linearGradient>
      </defs>
      <rect width="900" height="650" fill="#0a0a0f" />
      <text x="450" y="35" textAnchor="middle" fill="#ff8800" fontSize="20" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">
        Taguchi Quality Loss Function
      </text>
      
      {/* Formula */}
      <g transform="translate(50, 70)">
        <text x="350" y="20" textAnchor="middle" fill="#ff8800" fontSize="12" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Loss Function Formula</text>
        <rect x="100" y="35" width="600" height="50" rx="8" fill="#1a1a2e" stroke="#ff8800" strokeWidth="2" />
        <text x="400" y="65" textAnchor="middle" fill="#fff" fontSize="18" fontFamily="'Segoe UI', system-ui, sans-serif">L = k × (y - m)²</text>
      </g>
      
      {/* Loss Types */}
      <g transform="translate(50, 160)">
        <text x="115" y="20" textAnchor="middle" fill="#ff8800" fontSize="11" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Smaller-the-Better</text>
        <rect x="20" y="30" width="190" height="80" rx="4" fill="#1a1a2e" stroke="#ff8800" strokeWidth="1" />
        <text x="115" y="50" textAnchor="middle" fill="#00ff88" fontSize="10" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Target = 0</text>
        <text x="115" y="65" textAnchor="middle" fill="#888" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">L = k × y²</text>
        <text x="115" y="80" textAnchor="middle" fill="#ccc" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Examples: Defects,</text>
        <text x="115" y="93" textAnchor="middle" fill="#ccc" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Failures, Noise</text>
        
        <text x="355" y="20" textAnchor="middle" fill="#ff8800" fontSize="11" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Larger-the-Better</text>
        <rect x="260" y="30" width="190" height="80" rx="4" fill="#1a1a2e" stroke="#ff8800" strokeWidth="1" />
        <text x="355" y="50" textAnchor="middle" fill="#00ff88" fontSize="10" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Target = ∞</text>
        <text x="355" y="65" textAnchor="middle" fill="#888" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">L = k × (1/y)²</text>
        <text x="355" y="80" textAnchor="middle" fill="#ccc" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Examples: Strength,</text>
        <text x="355" y="93" textAnchor="middle" fill="#ccc" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Efficiency, Life</text>
        
        <text x="595" y="20" textAnchor="middle" fill="#ff8800" fontSize="11" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Nominal-the-Best</text>
        <rect x="500" y="30" width="190" height="80" rx="4" fill="#1a1a2e" stroke="#ff8800" strokeWidth="1" />
        <text x="595" y="50" textAnchor="middle" fill="#00ff88" fontSize="10" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Target = m</text>
        <text x="595" y="65" textAnchor="middle" fill="#888" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">L = k × (y - m)²</text>
        <text x="595" y="80" textAnchor="middle" fill="#ccc" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Examples: Dimensions,</text>
        <text x="595" y="93" textAnchor="middle" fill="#ccc" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Temperature, Speed</text>
      </g>
      
      {/* Loss Curve Visualization */}
      <g transform="translate(50, 280)">
        <text x="350" y="20" textAnchor="middle" fill="#ff8800" fontSize="12" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Loss vs Deviation Curve</text>
        {/* Parabola */}
        <path d="M 100,120 Q 350,20 600,120" fill="none" stroke="#ff8800" strokeWidth="3" />
        <text x="350" y="45" textAnchor="middle" fill="#fff" fontSize="14" fontFamily="'Segoe UI', system-ui, sans-serif">Target (m)</text>
        <line x1="350" y1="50" x2="350" y2="120" stroke="#ff8800" strokeWidth="1" strokeDasharray="3,3" />
        
        <text x="100" y="140" fill="#ff4444" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">High Loss</text>
        <text x="600" y="140" fill="#ff4444" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">High Loss</text>
        <text x="350" y="140" fill="#00ff88" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Zero Loss (Target)</text>
        
        <text x="100" y="160" fill="#666" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Deviation →</text>
        <text x="350" y="175" textAnchor="middle" fill="#666" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Quality Loss increases with deviation from target</text>
      </g>
      
      {/* Taguchi Philosophy */}
      <g transform="translate(50, 380)">
        <text x="350" y="20" textAnchor="middle" fill="#ff8800" fontSize="12" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Taguchi's Philosophy</text>
        <text x="350" y="45" textAnchor="middle" fill="#ccc" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">• Quality = Minimal deviation from target</text>
        <text x="350" y="65" textAnchor="middle" fill="#ccc" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">• Loss increases with deviation</text>
        <text x="350" y="85" textAnchor="middle" fill="#ccc" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">• Specification limits andar bhi loss hota hai</text>
        <text x="350" y="105" textAnchor="middle" fill="#ccc" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">• Quality loss customer satisfaction affect karta hai</text>
        <text x="350" y="125" textAnchor="middle" fill="#ccc" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">• Preventive approach — defects prevent karna</text>
      </g>
      
      <g transform="translate(50, 520)">
        <text x="350" y="25" textAnchor="middle" fill="#666" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Taguchi emphasizes continuous loss measurement even within specification limits</text>
      </g>
    </svg>
  );
}

// ============================================================
// TOPIC 1.18 — Cost of Quality (COQ)
// ============================================================

export function COQOverviewDiagram() {
  return (
    <svg viewBox="0 0 900 650" style={{ width: '100%', height: 'auto' }}>
      <defs>
        <linearGradient id="coqGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#00ff88', stopOpacity: 0.3 }} />
          <stop offset="100%" style={{ stopColor: '#00aa66', stopOpacity: 0.1 }} />
        </linearGradient>
      </defs>
      <rect width="900" height="650" fill="#0a0a0f" />
      <text x="450" y="35" textAnchor="middle" fill="#00ff88" fontSize="20" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">
        Cost of Quality (COQ)
      </text>
      
      {/* COQ Formula */}
      <g transform="translate(50, 70)">
        <text x="350" y="20" textAnchor="middle" fill="#00ff88" fontSize="12" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">COQ Formula</text>
        <rect x="80" y="35" width="640" height="50" rx="8" fill="#1a1a2e" stroke="#00ff88" strokeWidth="2" />
        <text x="400" y="65" textAnchor="middle" fill="#fff" fontSize="14" fontFamily="'Segoe UI', system-ui, sans-serif">COQ = Prevention + Appraisal + Internal Failure + External Failure</text>
      </g>
      
      {/* Four Quadrants */}
      <g transform="translate(50, 160)">
        <text x="200" y="20" textAnchor="middle" fill="#00ff88" fontSize="11" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Prevention</text>
        <rect x="20" y="30" width="360" height="80" rx="4" fill="#1a2a1a" stroke="#00ff88" strokeWidth="2" />
        <text x="200" y="48" textAnchor="middle" fill="#00ff88" fontSize="10" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Defects prevent karne ke costs</text>
        <text x="200" y="65" textAnchor="middle" fill="#ccc" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">• Quality Planning</text>
        <text x="200" y="78" textAnchor="middle" fill="#ccc" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">• Training</text>
        <text x="200" y="91" textAnchor="middle" fill="#ccc" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">• Documentation</text>
        <text x="200" y="104" textAnchor="middle" fill="#ccc" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">• Audits</text>
        
        <text x="620" y="20" textAnchor="middle" fill="#ffaa00" fontSize="11" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Appraisal</text>
        <rect x="440" y="30" width="360" height="80" rx="4" fill="#2a2a1a" stroke="#ffaa00" strokeWidth="2" />
        <text x="620" y="48" textAnchor="middle" fill="#ffaa00" fontSize="10" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Quality measure karne ke costs</text>
        <text x="620" y="65" textAnchor="middle" fill="#ccc" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">• Inspection</text>
        <text x="620" y="78" textAnchor="middle" fill="#ccc" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">• Testing</text>
        <text x="620" y="91" textAnchor="middle" fill="#ccc" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">• Measurement</text>
        <text x="620" y="104" textAnchor="middle" fill="#ccc" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">• Calibration</text>
      </g>
      
      <g transform="translate(50, 270)">
        <text x="200" y="20" textAnchor="middle" fill="#ff4444" fontSize="11" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Internal Failure</text>
        <rect x="20" y="30" width="360" height="80" rx="4" fill="#2a1a1a" stroke="#ff4444" strokeWidth="1" />
        <text x="200" y="48" textAnchor="middle" fill="#ff4444" fontSize="10" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Internal defects fix karne ke costs</text>
        <text x="200" y="65" textAnchor="middle" fill="#ccc" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">• Scrap</text>
        <text x="200" y="78" textAnchor="middle" fill="#ccc" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">• Rework</text>
        <text x="200" y="91" textAnchor="middle" fill="#ccc" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">• Retest</text>
        <text x="200" y="104" textAnchor="middle" fill="#ccc" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">• Downtime</text>
        
        <text x="620" y="20" textAnchor="middle" fill="#ff0080" fontSize="11" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">External Failure</text>
        <rect x="440" y="30" width="360" height="80" rx="4" fill="#2a1a2a" stroke="#ff0080" strokeWidth="2" />
        <text x="620" y="48" textAnchor="middle" fill="#ff0080" fontSize="10" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">External defects fix karne ke costs</text>
        <text x="620" y="65" textAnchor="middle" fill="#ccc" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">• Warranty</text>
        <text x="620" y="78" textAnchor="middle" fill="#ccc" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">• Returns</text>
        <text x="620" y="91" textAnchor="middle" fill="#ccc" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">• Lost Sales</text>
        <text x="620" y="104" textAnchor="middle" fill="#ccc" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">• Reputation Damage</text>
      </g>
      
      {/* Balance Visualization */}
      <g transform="translate(50, 380)">
        <text x="350" y="20" textAnchor="middle" fill="#00ff88" fontSize="12" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Cost Balance Strategy</text>
        <rect x="50" y="35" width="600" height="40" rx="8" fill="#1a1a2e" stroke="#00ff88" strokeWidth="1" />
        <text x="350" y="60" textAnchor="middle" fill="#00ff88" fontSize="12" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Invest in Prevention → Reduce Failures → Lower Total Cost</text>
        
        <text x="350" y="110" textAnchor="middle" fill="#ccc" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">High prevention costs = lower failure costs</text>
        <text x="350" y="130" textAnchor="middle" fill="#888" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">Low prevention costs = high failure costs</text>
      </g>
      
      <g transform="translate(50, 520)">
        <text x="350" y="25" textAnchor="middle" fill="#666" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">COQ helps quantify quality costs and make informed investment decisions</text>
      </g>
    </svg>
  );
}

export function SoftwareTestingBasicsOverviewDiagram() {
  return (
    <svg viewBox="0 0 800 620" xmlns="http://www.w3.org/2000/svg">
      <rect width="800" height="620" fill="#1a1a2e" />
      <defs>
        <linearGradient id="stb-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#0047ff' }} />
          <stop offset="100%" style={{ stopColor: '#0047ff66' }} />
        </linearGradient>
      </defs>
      {/* Title */}
      <text x="400" y="35" textAnchor="middle" fill="#0047ff" fontSize="16" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Software Testing Basics</text>
      
      {/* Definition Card */}
      <g transform="translate(30, 55)">
        <rect width="740" height="55" rx="8" fill="#0a0a1a" stroke="#0047ff" strokeWidth="1" />
        <text x="370" y="25" textAnchor="middle" fill="#0047ff" fontSize="13" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Software Testing: Process of evaluating and verifying software meets its intended requirements</text>
        <text x="370" y="45" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Identifying defects, verifying requirements, ensuring quality, reducing risks</text>
      </g>
      
      {/* Testing Objectives */}
      <g transform="translate(30, 120)">
        <text x="370" y="20" textAnchor="middle" fill="#0047ff" fontSize="12" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Testing Objectives</text>
        <g transform="translate(20, 30)">
          <rect width="140" height="70" rx="4" fill="#1a1a2e" stroke="#0047ff" strokeWidth="1" />
          <text x="70" y="25" textAnchor="middle" fill="#0047ff" fontSize="10" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Defects Detection</text>
          <text x="70" y="42" textAnchor="middle" fill="#ccc" fontSize="8" fontFamily="'Segoe UI', system-ui, sans-serif">Bugs identify karna</text>
          <text x="70" y="55" textAnchor="middle" fill="#888" fontSize="8" fontFamily="'Segoe UI', system-ui, sans-serif">Quality improve</text>
        </g>
        <g transform="translate(180, 30)">
          <rect width="140" height="70" rx="4" fill="#1a1a2e" stroke="#0047ff" strokeWidth="1" />
          <text x="70" y="25" textAnchor="middle" fill="#0047ff" fontSize="10" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Requirements Verification</text>
          <text x="70" y="42" textAnchor="middle" fill="#ccc" fontSize="8" fontFamily="'Segoe UI', system-ui, sans-serif">Requirements check</text>
          <text x="70" y="55" textAnchor="middle" fill="#888" fontSize="8" fontFamily="'Segoe UI', system-ui, sans-serif">All met</text>
        </g>
        <g transform="translate(340, 30)">
          <rect width="140" height="70" rx="4" fill="#1a1a2e" stroke="#0047ff" strokeWidth="1" />
          <text x="70" y="25" textAnchor="middle" fill="#0047ff" fontSize="10" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Quality Assurance</text>
          <text x="70" y="42" textAnchor="middle" fill="#ccc" fontSize="8" fontFamily="'Segoe UI', system-ui, sans-serif">Quality ensure</text>
          <text x="70" y="55" textAnchor="middle" fill="#888" fontSize="8" fontFamily="'Segoe UI', system-ui, sans-serif">Standards meet</text>
        </g>
        <g transform="translate(500, 30)">
          <rect width="140" height="70" rx="4" fill="#1a1a2e" stroke="#0047ff" strokeWidth="1" />
          <text x="70" y="25" textAnchor="middle" fill="#0047ff" fontSize="10" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Risk Mitigation</text>
          <text x="70" y="42" textAnchor="middle" fill="#ccc" fontSize="8" fontFamily="'Segoe UI', system-ui, sans-serif">Risks reduce</text>
          <text x="70" y="55" textAnchor="middle" fill="#888" fontSize="8" fontFamily="'Segoe UI', system-ui, sans-serif">Reliability</text>
        </g>
      </g>
      
      {/* Testing Life Cycle - Flow */}
      <g transform="translate(30, 210)">
        <text x="370" y="20" textAnchor="middle" fill="#0047ff" fontSize="12" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Testing Life Cycle</text>
        <g transform="translate(0, 30)">
          <rect width="90" height="50" rx="4" fill="#0047ff22" stroke="#0047ff" strokeWidth="1" />
          <text x="45" y="22" textAnchor="middle" fill="#0047ff" fontSize="9" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Test Planning</text>
          <text x="45" y="38" textAnchor="middle" fill="#ccc" fontSize="7" fontFamily="'Segoe UI', system-ui, sans-serif">Scope, strategy</text>
          
          <line x1="90" y1="25" x2="115" y2="25" stroke="#0047ff" strokeWidth="1.5" />
          <polygon points="115,20 115,30 125,25" fill="#0047ff" />
          
          <rect x="125" width="90" height="50" rx="4" fill="#0047ff22" stroke="#0047ff" strokeWidth="1" />
          <text x="170" y="22" textAnchor="middle" fill="#0047ff" fontSize="9" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Test Analysis</text>
          <text x="170" y="38" textAnchor="middle" fill="#ccc" fontSize="7" fontFamily="'Segoe UI', system-ui, sans-serif">Requirements</text>
          
          <line x1="215" y1="25" x2="240" y2="25" stroke="#0047ff" strokeWidth="1.5" />
          <polygon points="240,20 240,30 250,25" fill="#0047ff" />
          
          <rect x="250" width="90" height="50" rx="4" fill="#0047ff22" stroke="#0047ff" strokeWidth="1" />
          <text x="295" y="22" textAnchor="middle" fill="#0047ff" fontSize="9" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Test Design</text>
          <text x="295" y="38" textAnchor="middle" fill="#ccc" fontSize="7" fontFamily="'Segoe UI', system-ui, sans-serif">Cases, data</text>
          
          <line x1="340" y1="25" x2="365" y2="25" stroke="#0047ff" strokeWidth="1.5" />
          <polygon points="365,20 365,30 375,25" fill="#0047ff" />
          
          <rect x="375" width="90" height="50" rx="4" fill="#0047ff22" stroke="#0047ff" strokeWidth="1" />
          <text x="420" y="22" textAnchor="middle" fill="#0047ff" fontSize="9" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Environment</text>
          <text x="420" y="38" textAnchor="middle" fill="#ccc" fontSize="7" fontFamily="'Segoe UI', system-ui, sans-serif">Setup, config</text>
          
          <line x1="465" y1="25" x2="490" y2="25" stroke="#0047ff" strokeWidth="1.5" />
          <polygon points="490,20 490,30 500,25" fill="#0047ff" />
          
          <rect x="500" width="90" height="50" rx="4" fill="#0047ff22" stroke="#0047ff" strokeWidth="1" />
          <text x="545" y="22" textAnchor="middle" fill="#0047ff" fontSize="9" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Test Execution</text>
          <text x="545" y="38" textAnchor="middle" fill="#ccc" fontSize="7" fontFamily="'Segoe UI', system-ui, sans-serif">Run, log</text>
          
          <line x1="590" y1="25" x2="615" y2="25" stroke="#0047ff" strokeWidth="1.5" />
          <polygon points="615,20 615,30 625,25" fill="#0047ff" />
          
          <rect x="625" width="90" height="50" rx="4" fill="#0047ff22" stroke="#0047ff" strokeWidth="1" />
          <text x="670" y="22" textAnchor="middle" fill="#0047ff" fontSize="9" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Evaluation</text>
          <text x="670" y="38" textAnchor="middle" fill="#ccc" fontSize="7" fontFamily="'Segoe UI', system-ui, sans-serif">Report, close</text>
        </g>
      </g>
      
      {/* Testing Principles */}
      <g transform="translate(30, 320)">
        <text x="370" y="20" textAnchor="middle" fill="#0047ff" fontSize="12" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Testing Principles</text>
        <g transform="translate(20, 30)">
          <rect width="340" height="35" rx="4" fill="#1a1a2e" stroke="#0047ff66" strokeWidth="1" />
          <text x="170" y="17" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Testing shows presence of defects, not absence</text>
          <text x="170" y="30" textAnchor="middle" fill="#888" fontSize="8" fontFamily="'Segoe UI', system-ui, sans-serif">Testing proves defects exist, not that software is perfect</text>
        </g>
        <g transform="translate(20, 70)">
          <rect width="340" height="35" rx="4" fill="#1a1a2e" stroke="#0047ff66" strokeWidth="1" />
          <text x="170" y="17" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Exhaustive testing is impossible</text>
          <text x="170" y="30" textAnchor="middle" fill="#888" fontSize="8" fontFamily="'Segoe UI', system-ui, sans-serif">Use risk-based testing and prioritize</text>
        </g>
        <g transform="translate(380, 30)">
          <rect width="340" height="35" rx="4" fill="#1a1a2e" stroke="#0047ff66" strokeWidth="1" />
          <text x="550" y="17" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Early testing saves time and cost</text>
          <text x="550" y="30" textAnchor="middle" fill="#888" fontSize="8" fontFamily="'Segoe UI', system-ui, sans-serif">Start testing early in SDLC</text>
        </g>
        <g transform="translate(380, 70)">
          <rect width="340" height="35" rx="4" fill="#1a1a2e" stroke="#0047ff66" strokeWidth="1" />
          <text x="550" y="17" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Defect clustering - few modules have most defects</text>
          <text x="550" y="30" textAnchor="middle" fill="#888" fontSize="8" fontFamily="'Segoe UI', system-ui, sans-serif">Pareto principle applies</text>
        </g>
      </g>
      
      {/* Tester Role */}
      <g transform="translate(30, 460)">
        <text x="370" y="20" textAnchor="middle" fill="#0047ff" fontSize="12" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Tester Role in Software Development</text>
        <g transform="translate(20, 30)">
          <rect width="140" height="50" rx="4" fill="#0047ff22" stroke="#0047ff" strokeWidth="1" />
          <text x="70" y="22" textAnchor="middle" fill="#0047ff" fontSize="10" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Quality Advocate</text>
          <text x="70" y="38" textAnchor="middle" fill="#ccc" fontSize="8" fontFamily="'Segoe UI', system-ui, sans-serif">Quality focus</text>
        </g>
        <g transform="translate(180, 30)">
          <rect width="140" height="50" rx="4" fill="#0047ff22" stroke="#0047ff" strokeWidth="1" />
          <text x="70" y="22" textAnchor="middle" fill="#0047ff" fontSize="10" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Test Lead</text>
          <text x="70" y="38" textAnchor="middle" fill="#ccc" fontSize="8" fontFamily="'Segoe UI', system-ui, sans-serif">Team leadership</text>
        </g>
        <g transform="translate(340, 30)">
          <rect width="140" height="50" rx="4" fill="#0047ff22" stroke="#0047ff" strokeWidth="1" />
          <text x="70" y="22" textAnchor="middle" fill="#0047ff" fontSize="10" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Reviewer</text>
          <text x="70" y="38" textAnchor="middle" fill="#ccc" fontSize="8" fontFamily="'Segoe UI', system-ui, sans-serif">Reviews code</text>
        </g>
        <g transform="translate(500, 30)">
          <rect width="140" height="50" rx="4" fill="#0047ff22" stroke="#0047ff" strokeWidth="1" />
          <text x="70" y="22" textAnchor="middle" fill="#0047ff" fontSize="10" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Risk Analyst</text>
          <text x="70" y="38" textAnchor="middle" fill="#ccc" fontSize="8" fontFamily="'Segoe UI', system-ui, sans-serif">Risks identify</text>
        </g>
      </g>
      
      {/* Bottom note */}
      <g transform="translate(30, 555)">
        <text x="370" y="20" textAnchor="middle" fill="#666" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Testing ensures software quality through systematic evaluation</text>
      </g>
    </svg>
  );
}

export function TestPlanAndTestCasesOverviewDiagram() {
  return (
    <svg viewBox="0 0 800 620" xmlns="http://www.w3.org/2000/svg">
      <rect width="800" height="620" fill="#1a1a2e" />
      <defs>
        <linearGradient id="tpt-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#00aaff' }} />
          <stop offset="100%" style={{ stopColor: '#00aaff66' }} />
        </linearGradient>
      </defs>
      {/* Title */}
      <text x="400" y="35" textAnchor="middle" fill="#00aaff" fontSize="16" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Test Plan and Test Cases</text>
      
      {/* Test Plan Section */}
      <g transform="translate(30, 55)">
        <rect width="740" height="120" rx="8" fill="#0a0a1a" stroke="#00aaff" strokeWidth="1" />
        <text x="370" y="25" textAnchor="middle" fill="#00aaff" fontSize="12" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Test Plan - Formal Document</text>
        <text x="370" y="42" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Strategy, scope, approach, resources, schedule, risks</text>
        
        {/* Test Plan Elements */}
        <g transform="translate(20, 50)">
          <rect width="170" height="55" rx="4" fill="#00aaff22" stroke="#00aaff" strokeWidth="1" />
          <text x="85" y="22" textAnchor="middle" fill="#00aaff" fontSize="10" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Scope</text>
          <text x="85" y="38" textAnchor="middle" fill="#ccc" fontSize="8" fontFamily="'Segoe UI', system-ui, sans-serif">What to test</text>
          <text x="85" y="50" textAnchor="middle" fill="#888" fontSize="8" fontFamily="'Segoe UI', system-ui, sans-serif">Requirements</text>
        </g>
        <g transform="translate(200, 50)">
          <rect width="170" height="55" rx="4" fill="#00aaff22" stroke="#00aaff" strokeWidth="1" />
          <text x="85" y="22" textAnchor="middle" fill="#00aaff" fontSize="10" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Approach</text>
          <text x="85" y="38" textAnchor="middle" fill="#ccc" fontSize="8" fontFamily="'Segoe UI', system-ui, sans-serif">How to test</text>
          <text x="85" y="50" textAnchor="middle" fill="#888" fontSize="8" fontFamily="'Segoe UI', system-ui, sans-serif">Strategy</text>
        </g>
        <g transform="translate(380, 50)">
          <rect width="170" height="55" rx="4" fill="#00aaff22" stroke="#00aaff" strokeWidth="1" />
          <text x="85" y="22" textAnchor="middle" fill="#00aaff" fontSize="10" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Resources</text>
          <text x="85" y="38" textAnchor="middle" fill="#ccc" fontSize="8" fontFamily="'Segoe UI', system-ui, sans-serif">Who, tools</text>
          <text x="85" y="50" textAnchor="middle" fill="#888" fontSize="8" fontFamily="'Segoe UI', system-ui, sans-serif">Budget</text>
        </g>
        <g transform="translate(560, 50)">
          <rect width="160" height="55" rx="4" fill="#00aaff22" stroke="#00aaff" strokeWidth="1" />
          <text x="80" y="22" textAnchor="middle" fill="#00aaff" fontSize="10" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Schedule &amp; Risks</text>
          <text x="80" y="38" textAnchor="middle" fill="#ccc" fontSize="8" fontFamily="'Segoe UI', system-ui, sans-serif">Timeline</text>
          <text x="80" y="50" textAnchor="middle" fill="#888" fontSize="8" fontFamily="'Segoe UI', system-ui, sans-serif">Mitigation</text>
        </g>
      </g>
      
      {/* Test Case Design Section */}
      <g transform="translate(30, 195)">
        <rect width="740" height="180" rx="8" fill="#0a0a1a" stroke="#00aaff" strokeWidth="1" />
        <text x="370" y="25" textAnchor="middle" fill="#00aaff" fontSize="12" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Test Case Design</text>
        
        {/* Test Case Structure */}
        <g transform="translate(20, 35)">
          <rect width="220" height="70" rx="4" fill="#00aaff22" stroke="#00aaff" strokeWidth="1" />
          <text x="110" y="20" textAnchor="middle" fill="#00aaff" fontSize="10" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Test Case</text>
          <text x="110" y="35" textAnchor="middle" fill="#ccc" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Input, Expected, Actual, Status</text>
          <text x="110" y="50" textAnchor="middle" fill="#888" fontSize="8" fontFamily="'Segoe UI', system-ui, sans-serif">Scenario, Conditions, Pass/Fail</text>
        </g>
        
        {/* Design Techniques */}
        <g transform="translate(260, 35)">
          <rect width="460" height="70" rx="4" fill="#0a0a1a" stroke="#00aaff66" strokeWidth="1" />
          <text x="490" y="20" textAnchor="middle" fill="#00aaff" fontSize="10" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Test Case Design Techniques</text>
          <text x="490" y="35" textAnchor="middle" fill="#ccc" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Equivalence Partitioning, Boundary Value Analysis, Decision Table</text>
          <text x="490" y="50" textAnchor="middle" fill="#888" fontSize="8" fontFamily="'Segoe UI', system-ui, sans-serif">State Transition, Use Case, Error Guessing</text>
        </g>
        
        {/* Test Reports */}
        <g transform="translate(20, 115)">
          <rect width="700" height="55" rx="4" fill="#00aaff15" stroke="#00aaff66" strokeWidth="1" />
          <text x="350" y="22" textAnchor="middle" fill="#00aaff" fontSize="10" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Test Reporting</text>
          <text x="350" y="38" textAnchor="middle" fill="#ccc" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Progress Report, Defect Report, Coverage Report, Quality Report, Metrics, Dashboard</text>
        </g>
      </g>
      
      {/* Bottom note */}
      <g transform="translate(30, 400)">
        <text x="370" y="20" textAnchor="middle" fill="#666" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">Test Plan ensures systematic testing; Test Cases ensure thorough coverage</text>
        
        {/* Key Insight */}
        <g transform="translate(20, 40)">
          <rect width="700" height="70" rx="8" fill="#00aaff10" stroke="#00aaff44" strokeWidth="1" />
          <text x="350" y="25" textAnchor="middle" fill="#00aaff" fontSize="11" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Key Insight: Test Plan is the roadmap, Test Cases are the execution steps</text>
          <text x="350" y="45" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Well-designed test cases catch more defects with less effort</text>
          <text x="350" y="60" textAnchor="middle" fill="#888" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Good reporting enables informed quality decisions</text>
        </g>
      </g>
    </svg>
  );
}

export function DefectManagementOverviewDiagram() {
  return (
    <svg viewBox="0 0 800 620" xmlns="http://www.w3.org/2000/svg">
      <rect width="800" height="620" fill="#1a1a2e" />
      <defs>
        <linearGradient id="dm-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#ff0080' }} />
          <stop offset="100%" style={{ stopColor: '#ff008066' }} />
        </linearGradient>
      </defs>
      {/* Title */}
      <text x="400" y="35" textAnchor="middle" fill="#ff0080" fontSize="16" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Defect Management</text>
      
      {/* Definition */}
      <g transform="translate(30, 55)">
        <rect width="740" height="45" rx="8" fill="#0a0a1a" stroke="#ff0080" strokeWidth="1" />
        <text x="370" y="22" textAnchor="middle" fill="#ff0080" fontSize="12" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Process of identifying, tracking, and resolving defects in software</text>
      </g>
      
      {/* Defect Origins */}
      <g transform="translate(30, 110)">
        <text x="370" y="20" textAnchor="middle" fill="#ff0080" fontSize="12" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Defect Origins</text>
        <g transform="translate(20, 30)">
          <rect width="130" height="50" rx="4" fill="#ff008022" stroke="#ff0080" strokeWidth="1" />
          <text x="65" y="20" textAnchor="middle" fill="#ff0080" fontSize="9" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Requirements</text>
          <text x="65" y="35" textAnchor="middle" fill="#ccc" fontSize="8" fontFamily="'Segoe UI', system-ui, sans-serif">Ambiguous</text>
        </g>
        <g transform="translate(170, 30)">
          <rect width="130" height="50" rx="4" fill="#ff008022" stroke="#ff0080" strokeWidth="1" />
          <text x="65" y="20" textAnchor="middle" fill="#ff0080" fontSize="9" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Design</text>
          <text x="65" y="35" textAnchor="middle" fill="#ccc" fontSize="8" fontFamily="'Segoe UI', system-ui, sans-serif">Logic errors</text>
        </g>
        <g transform="translate(320, 30)">
          <rect width="130" height="50" rx="4" fill="#ff008022" stroke="#ff0080" strokeWidth="1" />
          <text x="65" y="20" textAnchor="middle" fill="#ff0080" fontSize="9" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Coding</text>
          <text x="65" y="35" textAnchor="middle" fill="#ccc" fontSize="8" fontFamily="'Segoe UI', system-ui, sans-serif">Implementation</text>
        </g>
        <g transform="translate(470, 30)">
          <rect width="130" height="50" rx="4" fill="#ff008022" stroke="#ff0080" strokeWidth="1" />
          <text x="65" y="20" textAnchor="middle" fill="#ff0080" fontSize="9" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Config/Env</text>
          <text x="65" y="35" textAnchor="middle" fill="#ccc" fontSize="8" fontFamily="'Segoe UI', system-ui, sans-serif">Deployment</text>
        </g>
        <g transform="translate(620, 30)">
          <rect width="100" height="50" rx="4" fill="#ff008022" stroke="#ff0080" strokeWidth="1" />
          <text x="50" y="20" textAnchor="middle" fill="#ff0080" fontSize="9" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Integration</text>
          <text x="50" y="35" textAnchor="middle" fill="#ccc" fontSize="8" fontFamily="'Segoe UI', system-ui, sans-serif">Interface</text>
        </g>
      </g>
      
      {/* Defect Classes */}
      <g transform="translate(30, 210)">
        <text x="370" y="20" textAnchor="middle" fill="#ff0080" fontSize="12" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Defect Classes</text>
        <g transform="translate(20, 30)">
          <rect width="170" height="45" rx="4" fill="#ff008015" stroke="#ff008066" strokeWidth="1" />
          <text x="85" y="20" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Functional</text>
          <text x="85" y="35" textAnchor="middle" fill="#888" fontSize="8" fontFamily="'Segoe UI', system-ui, sans-serif">Doesn't work as expected</text>
        </g>
        <g transform="translate(200, 30)">
          <rect width="170" height="45" rx="4" fill="#ff008015" stroke="#ff008066" strokeWidth="1" />
          <text x="85" y="20" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Performance</text>
          <text x="85" y="35" textAnchor="middle" fill="#888" fontSize="8" fontFamily="'Segoe UI', system-ui, sans-serif">Slow, resource-heavy</text>
        </g>
        <g transform="translate(380, 30)">
          <rect width="170" height="45" rx="4" fill="#ff008015" stroke="#ff008066" strokeWidth="1" />
          <text x="85" y="20" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Security</text>
          <text x="85" y="35" textAnchor="middle" fill="#888" fontSize="8" fontFamily="'Segoe UI', system-ui, sans-serif">Vulnerabilities</text>
        </g>
        <g transform="translate(560, 30)">
          <rect width="160" height="45" rx="4" fill="#ff008015" stroke="#ff008066" strokeWidth="1" />
          <text x="80" y="20" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Usability &amp; Compat</text>
          <text x="80" y="35" textAnchor="middle" fill="#888" fontSize="8" fontFamily="'Segoe UI', system-ui, sans-serif">Hard to use, not compatible</text>
        </g>
      </g>
      
      {/* Defect Life Cycle Flow */}
      <g transform="translate(30, 310)">
        <text x="370" y="20" textAnchor="middle" fill="#ff0080" fontSize="12" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Defect Life Cycle</text>
        <g transform="translate(0, 30)">
          <rect width="100" height="40" rx="4" fill="#ff008022" stroke="#ff0080" strokeWidth="1" />
          <text x="50" y="20" textAnchor="middle" fill="#ff0080" fontSize="9" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">New</text>
          <text x="50" y="33" textAnchor="middle" fill="#ccc" fontSize="7" fontFamily="'Segoe UI', system-ui, sans-serif">Reported</text>
          
          <line x1="100" y1="20" x2="120" y2="20" stroke="#ff0080" strokeWidth="1.5" />
          <polygon points="120,15 120,25 130,20" fill="#ff0080" />
          
          <rect x="130" width="100" height="40" rx="4" fill="#ff008022" stroke="#ff0080" strokeWidth="1" />
          <text x="180" y="20" textAnchor="middle" fill="#ff0080" fontSize="9" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Assigned</text>
          <text x="180" y="33" textAnchor="middle" fill="#ccc" fontSize="7" fontFamily="'Segoe UI', system-ui, sans-serif">To developer</text>
          
          <line x1="230" y1="20" x2="250" y2="20" stroke="#ff0080" strokeWidth="1.5" />
          <polygon points="250,15 250,25 260,20" fill="#ff0080" />
          
          <rect x="260" width="100" height="40" rx="4" fill="#ff008022" stroke="#ff0080" strokeWidth="1" />
          <text x="310" y="20" textAnchor="middle" fill="#ff0080" fontSize="9" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Fixed</text>
          <text x="310" y="33" textAnchor="middle" fill="#ccc" fontSize="7" fontFamily="'Segoe UI', system-ui, sans-serif">Resolved</text>
          
          <line x1="360" y1="20" x2="380" y2="20" stroke="#ff0080" strokeWidth="1.5" />
          <polygon points="380,15 380,25 390,20" fill="#ff0080" />
          
          <rect x="390" width="100" height="40" rx="4" fill="#ff008022" stroke="#ff0080" strokeWidth="1" />
          <text x="440" y="20" textAnchor="middle" fill="#ff0080" fontSize="9" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Retest</text>
          <text x="440" y="33" textAnchor="middle" fill="#ccc" fontSize="7" fontFamily="'Segoe UI', system-ui, sans-serif">Verified</text>
          
          <line x1="490" y1="20" x2="510" y2="20" stroke="#ff0080" strokeWidth="1.5" />
          <polygon points="510,15 510,25 520,20" fill="#ff0080" />
          
          <rect x="520" width="100" height="40" rx="4" fill="#00ff8822" stroke="#00ff88" strokeWidth="1" />
          <text x="570" y="20" textAnchor="middle" fill="#00ff88" fontSize="9" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Closed</text>
          <text x="570" y="33" textAnchor="middle" fill="#ccc" fontSize="7" fontFamily="'Segoe UI', system-ui, sans-serif">Confirmed fix</text>
        </g>
      </g>
      
      {/* Severity and Priority */}
      <g transform="translate(30, 420)">
        <text x="370" y="20" textAnchor="middle" fill="#ff0080" fontSize="12" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Severity vs Priority</text>
        
        {/* Severity */}
        <g transform="translate(20, 30)">
          <text x="170" y="15" textAnchor="middle" fill="#ff0080" fontSize="10" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Severity (Impact)</text>
          <rect width="300" height="25" rx="3" fill="#ff008033" stroke="#ff008066" strokeWidth="1" />
          <text x="30" y="32" textAnchor="start" fill="#00ff88" fontSize="9" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Critical</text>
          <text x="80" y="32" textAnchor="start" fill="#00ff88" fontSize="9" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">High</text>
          <text x="130" y="32" textAnchor="start" fill="#ffaa00" fontSize="9" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Medium</text>
          <text x="185" y="32" textAnchor="start" fill="#aaa" fontSize="9" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Low</text>
        </g>
        
        {/* Priority */}
        <g transform="translate(400, 30)">
          <text x="170" y="15" textAnchor="middle" fill="#ff0080" fontSize="10" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Priority (Urgency)</text>
          <rect width="300" height="25" rx="3" fill="#ff008033" stroke="#ff008066" strokeWidth="1" />
          <text x="30" y="32" textAnchor="start" fill="#ff0080" fontSize="9" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">P1 - Immediate</text>
          <text x="110" y="32" textAnchor="start" fill="#ff0080" fontSize="9" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">P2 - Next</text>
          <text x="180" y="32" textAnchor="start" fill="#ffaa00" fontSize="9" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">P3 - Later</text>
          <text x="250" y="32" textAnchor="start" fill="#aaa" fontSize="9" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">P4 - Optional</text>
        </g>
      </g>
      
      {/* Bottom note */}
      <g transform="translate(30, 510)">
        <text x="370" y="20" textAnchor="middle" fill="#666" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Defect Management ensures systematic tracking and resolution of quality issues</text>
        <text x="370" y="38" textAnchor="middle" fill="#888" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Repository tracks all defects through their life cycle</text>
      </g>
    </svg>
  );
}
