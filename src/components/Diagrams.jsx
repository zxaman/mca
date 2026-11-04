import {
  CyberFrameworkDiagram,
  CyberspaceLayersDiagram,
  CyberThreatsDiagram,
  CyberWarfareDiagram,
  CIATriadDiagram,
  CyberTerrorismDiagram,
  CriticalInfraDiagram,
  OrgSecurityDiagram,
  PolicyFrameworkDiagram,
  NodalAuthorityDiagram,
  InternationalCyberDiagram,
  CyberLawsDiagram,
  LawPrinciplesDiagram,
  ItAct2000Diagram,
  ItActProvisionsDiagram,
  ItActAmendmentsDiagram,
  CyberAttacksOverviewDiagram,
  ThreatsMalwareSpywareDiagram,
  GainingAccessDiagram,
  EscalatingPrivilegesDiagram,
  ExecutingApplicationsDiagram,
  HidingFilesDiagram,
  CoveringTracksDiagram,
  WormsDiagram,
  TrojansDiagram,
  VirusesDiagram,
  BackdoorsDiagram,
  CyberStalkingDiagram,
  SoftwarePiracyDiagram,
  PhishingDiagram,
  ComputerHackingDiagram,
  SpammingDiagram,
  XssDiagram,
  OnlineAuctionFraudDiagram,
  LogicBombsDiagram,
  WebJackingDiagram,
  InternetTimeTheftDiagram,
  DosAttackDiagram,
  SalamiAttackDiagram,
  DataDiddlingDiagram,
  EmailSpoofingDiagram,
  TypesOfHackersDiagram,
  HackingCrackingDiagram,
  EthicalIssuesDiagram,
  EthicalHackingDiagram,
} from './CyberDiagrams';

import {
  QAQCComparisonDiagram,
  SQAComponentsDiagram,
  QualityBusinessImpactDiagram,
  SQAPlanningProcessDiagram,
  ProductProcessQualityDiagram,
  ProcessModelsComparisonDiagram,
  QCToolsOverviewDiagram,
  QAModelsOverviewDiagram,
  SQATrendsOverviewDiagram,
  SecurityTestingOverviewDiagram,
  ComplexityMetricsOverviewDiagram,
  QualityMetricsOverviewDiagram,
  AvailabilityMetricsOverviewDiagram,
  DREOverviewDiagram,
  FMEAOverviewDiagram,
  QFDOverviewDiagram,
  TaguchiLossOverviewDiagram,
  COQOverviewDiagram,
  SoftwareTestingBasicsOverviewDiagram,
  TestPlanAndTestCasesOverviewDiagram,
  DefectManagementOverviewDiagram,
} from './SoftwareTestingDiagrams';

import {
  DSVennDiagram,
  DSImpactDiagram,
  DataTypesDiagram,
  MeasurementScalesDiagram,
  DataFormatsDiagram,
  BigDataVsDataScienceDiagram,
  DSLifecycleDiagram,
  CrispDmDiagram,
  DSApplicationsDiagram,
  DSvsFieldsDiagram,
  MLAIStackDiagram,
  DSRolesDiagram,
  StatisticsFoundationDiagram,
} from './DataScienceDiagrams';
import {
  WebStackDiagram,
  InternetVsWwwDiagram,
  WebServerDiagram,
  WebsitePlanningDiagram,
  HtmlStructureDiagram,
  HtmlElementsDiagram,
  CssInsertionDiagram,
  CssSelectorsDiagram,
  HtmlVsHtml5Diagram,
  FramesDiagram,
  HtmlVsXmlDiagram,
  XmlTreeDiagram,
  DtdVsXsdDiagram,
  XsltPipelineDiagram,
  JsRoleDiagram,
  JsInclusionDiagram,
  JsTypesDiagram,
  JsControlDiagram,
  JsLoopsDiagram,
  JsFunctionDialogDiagram,
  CookieFlowDiagram,
  EventFlowDiagram,
  JsObjectsDiagram,
  NumberMathDiagram,
  StringMethodsDiagram,
  ArrayMethodsDiagram,
  DateTemporalDiagram,
  AsyncFlowDiagram,
  BootstrapDiagram,
} from './WebDiagrams';

// ============================================================
// Improved, properly-labelled SVG diagrams
// All labels in English (exam style) with Hinglish captions in UI
// Theme: midnight black bg, cobalt blue accents, acid lime highlights
// ============================================================

const FONT = "'Segoe UI', system-ui, sans-serif";

// ============================================================
// Diagram 1 — BI Architecture Flow (Full Components)
// ============================================================
export function BIFlowDiagram() {
  const steps = [
    { label: 'DATA SOURCES', sub: 'ERP · CRM · DB · Excel', icon: 'M12 3C7 3 3 6.5 3 11s4 8 9 8 9-3.5 9-8-4-8-9-8zm0 15c-4 0-7-2.5-7-6s3-5.5 7-5.5S19 8 19 11s-3 5.5-7 5.5z' },
    { label: 'ETL', sub: 'Extract · Transform · Load', icon: 'M12 4v4m0 12v4M4 12h4m12 0h4M6.3 6.3l2.8 2.8m5.8 5.8l2.8 2.8M6.3 17.7l2.8-2.8m5.8-5.8l2.8-2.8' },
    { label: 'DATA WAREHOUSE', sub: 'Central historical store', icon: 'M3 7h18v4H3zM5 11v8M19 11v8M3 7V5m18 2V5M9 7v12m6-12v12' },
    { label: 'OLAP', sub: 'Multi-dimensional analysis', icon: 'M3 3v18h18M7 14l3-3 3 3 5-6' },
    { label: 'DASHBOARDS', sub: 'Reports · Charts · KPIs', icon: 'M4 4h7v9H4zM13 4h7v5h-7zM13 12h7v8h-7zM4 16h7v4H4z' },
    { label: 'DECISIONS', sub: 'Better business decisions', icon: 'M12 2l2.4 5.4L20 9l-4 4 1 6-5-3-5 3 1-6-4-4 5.6-1.6L12 2z' },
  ];

  return (
    <svg viewBox="0 0 1020 250" className="diagram-svg" role="img" aria-label="BI architecture flow diagram">
      <defs>
        <marker id="arrowB" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6 Z" fill="#c4ff00" />
        </marker>
      </defs>
      <line x1="80" y1="125" x2="940" y2="125" stroke="rgba(255,255,255,0.12)" strokeWidth="3" strokeDasharray="6 6" />
      {steps.map((s, i) => {
        const x = 40 + i * 160;
        return (
          <g key={s.label} style={{ animationDelay: `${200 + i * 150}ms` }} className="diagram-pop">
            <rect x={x} y={30} width="150" height="120" rx="14" fill="rgba(0,71,255,0.08)" stroke="rgba(255,255,255,0.18)" />
            <rect x={x} y={30} width="150" height="120" rx="14" fill="url(#stepGrad)" opacity="0.4" />
            <rect x={x} y={30} width="150" height="120" rx="14" fill="none" stroke="#0047ff" strokeWidth="2" />
            <g transform={`translate(${x + 75}, 62)`}>
              <path d={s.icon} fill="none" stroke="#c4ff00" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <text x={x + 75} y={112} textAnchor="middle" fill="#fff" fontSize="14" fontWeight="800" fontFamily={FONT}>{s.label}</text>
            <text x={x + 75} y={132} textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>{s.sub}</text>
            {i < steps.length - 1 && (
              <line x1={x + 150} y1="90" x2={x + 160} y2="90" stroke="#c4ff00" strokeWidth="3" markerEnd="url(#arrowB)" className="arrow-pulse" />
            )}
          </g>
        );
      })}
      <defs>
        <linearGradient id="stepGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0047ff" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#0047ff" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// ============================================================
// Diagram 2 — Evolution Timeline
// ============================================================
export function TimelineDiagram() {
  const items = [
    { decade: '1950s–60s', name: 'MIS', desc: 'Management Info Systems\nStructured reports' },
    { decade: '1970s', name: 'DSS', desc: 'Decision Support\nData + models' },
    { decade: '1980s', name: 'EIS', desc: 'Executive Info Systems\nExecutives' },
    { decade: '1990s', name: 'DW / OLAP', desc: 'Data Warehouse\nBI term popularised' },
    { decade: '2000s', name: 'Self-Service BI', desc: 'Tableau · Power BI\nUsers self-serve' },
    { decade: '2010s+', name: 'Modern BI', desc: 'Cloud · AI/ML\nReal-time insights' },
  ];
  return (
    <svg viewBox="0 0 1000 340" className="diagram-svg" role="img" aria-label="Evolution timeline of BI">
      <line x1="60" y1="170" x2="940" y2="170" stroke="rgba(255,255,255,0.2)" strokeWidth="4" />
      {items.map((it, i) => {
        const x = 60 + i * 160;
        return (
          <g key={it.name} style={{ animationDelay: `${i * 130}ms` }} className="diagram-pop">
            <line x1={x - 8} y1="170" x2={x + 8} y2="170" stroke="#c4ff00" strokeWidth="4" />
            <circle cx={x} cy={170} r="11" fill="#0a0e1a" stroke="#c4ff00" strokeWidth="3" />
            <text x={x} y={140} textAnchor="middle" fill="#c4ff00" fontSize="14" fontWeight="800" fontFamily={FONT}>{it.decade}</text>
            <text x={x} y={195} textAnchor="middle" fill="#fff" fontSize="14.5" fontWeight="800" fontFamily={FONT}>{it.name}</text>
            {it.desc.split('\n').map((d, j) => (
              <text key={j} x={x} y={218 + j * 18} textAnchor="middle" fill="#9ab0e0" fontSize="11" fontFamily={FONT}>{d}</text>
            ))}
          </g>
        );
      })}
    </svg>
  );
}

// ============================================================
// Diagram 3 — DSS Components
// ============================================================
export function DSSDiagram() {
  return (
    <svg viewBox="0 0 640 380" className="diagram-svg" role="img" aria-label="DSS components diagram">
      <defs>
        <marker id="arrowD" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6 Z" fill="#c4ff00" />
        </marker>
      </defs>
      {/* center */}
      <g style={{ animationDelay: '100ms' }} className="diagram-pop">
        <rect x="220" y="130" width="200" height="100" rx="16" fill="rgba(0,71,255,0.12)" stroke="#0047ff" strokeWidth="2.5" />
        <text x="320" y="178" textAnchor="middle" fill="#fff" fontSize="18" fontWeight="800" fontFamily={FONT}>DECISION SUPPORT</text>
        <text x="320" y="202" textAnchor="middle" fill="#c4ff00" fontSize="15" fontWeight="700" fontFamily={FONT}>SYSTEM (DSS)</text>
      </g>
      {/* three components */}
      {[
        { x: 30, y: 25, name: 'DATABASE', sub: 'Management System', desc: 'Store · manage · retrieve data', icon: 'M12 3C7 3 3 6.5 3 11s4 8 9 8 9-3.5 9-8-4-8-9-8z', toX: 220, toY: 140 },
        { x: 400, y: 25, name: 'MODEL', sub: 'Management System', desc: 'Analysis models · forecasting', icon: 'M12 2l2.4 5.4L20 9l-4 4 1 6-5-3-5 3 1-6-4-4 5.6-1.6L12 2z', toX: 420, toY: 140 },
        { x: 400, y: 240, name: 'USER', sub: 'Interface / Dialogue', desc: 'Query · interaction · reports', icon: 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm-7 9a7 7 0 0 1 14 0', toX: 420, toY: 230 },
      ].map((c, i) => (
        <g key={c.name} style={{ animationDelay: `${250 + i * 140}ms` }} className="diagram-pop">
          <rect x={c.x} y={c.y} width="190" height="110" rx="14" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.2)" />
          <rect x={c.x} y={c.y} width="190" height="110" rx="14" fill="none" stroke="#0047ff" strokeWidth="2" opacity="0.6" />
          <g transform={`translate(${c.x + 34}, ${c.y + 32})`}>
            <path d={c.icon} fill="none" stroke="#c4ff00" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          <text x={c.x + 30} y={c.y + 64} fill="#fff" fontSize="15" fontWeight="800" fontFamily={FONT}>{c.name}</text>
          <text x={c.x + 30} y={c.y + 84} fill="#c4ff00" fontSize="11.5" fontWeight="600" fontFamily={FONT}>{c.sub}</text>
          <text x={c.x + 30} y={c.y + 100} fill="#9ab0e0" fontSize="10" fontFamily={FONT}>{c.desc}</text>
          <line x1={c.x + 190} y1={c.y + 55} x2={c.toX} y2={c.toY} stroke="#c4ff00" strokeWidth="2.5" strokeDasharray="5 5" markerEnd="url(#arrowD)" className="arrow-pulse" />
        </g>
      ))}
      <text x="320" y="360" textAnchor="middle" fill="#9ab0e0" fontSize="12" fontFamily={FONT}>Three components combine to support decision makers</text>
    </svg>
  );
}

// ============================================================
// Diagram 4 — DIKW Pyramid
// ============================================================
export function DIKWDiagram() {
  const levels = [
    { label: 'WISDOM', sub: 'Right decisions', color: '#c4ff00', width: 0.30, y: 30 },
    { label: 'KNOWLEDGE', sub: 'Patterns · experience', color: '#00c8ff', width: 0.48, y: 95 },
    { label: 'INFORMATION', sub: 'Data + context', color: '#0047ff', width: 0.66, y: 160 },
    { label: 'DATA', sub: 'Raw facts & figures', color: '#7a8ab5', width: 0.86, y: 225 },
  ];
  const cx = 260;
  return (
    <svg viewBox="0 0 560 340" className="diagram-svg" role="img" aria-label="DIKW pyramid diagram">
      {levels.map((lv, i) => {
        const w = lv.width * 340;
        const x = cx - w / 2;
        return (
          <g key={lv.label} style={{ animationDelay: `${350 - i * 100}ms` }} className="diagram-pop">
            <polygon
              points={`${x},${lv.y} ${x + w},${lv.y} ${x + w + 35},${lv.y + 60} ${x + 35},${lv.y + 60}`}
              fill={lv.color}
              opacity="0.22"
              stroke={lv.color}
              strokeWidth="2.5"
            />
            <text x={cx + w / 2 + 45} y={lv.y + 28} fill="#fff" fontSize="15" fontWeight="800" fontFamily={FONT}>{lv.label}</text>
            <text x={cx + w / 2 + 45} y={lv.y + 48} fill="#9ab0e0" fontSize="11" fontFamily={FONT}>{lv.sub}</text>
            <line x1={cx + w / 2 + 14} y1={lv.y + 30} x2={cx + w / 2 + 42} y2={lv.y + 30} stroke={lv.color} strokeWidth="2" markerEnd="url(#arrow)" />
          </g>
        );
      })}
      <defs>
        <marker id="arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6 Z" fill="#c4ff00" />
        </marker>
      </defs>
    </svg>
  );
}

// ============================================================
// Diagram 5 — Analytics 4 stages
// ============================================================
export function AnalyticsDiagram() {
  const stages = [
    { q: 'What happened?', name: 'DESCRIPTIVE', desc: 'Past summary · reports', color: '#0047ff', icon: 'M4 4h7v9H4zM13 4h7v5h-7zM13 12h7v8h-7zM4 16h7v4H4z' },
    { q: 'Why did it happen?', name: 'DIAGNOSTIC', desc: 'Root cause · drill-down', color: '#00c8ff', icon: 'M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zm10 17l-4.3-4.3' },
    { q: 'What will happen?', name: 'PREDICTIVE', desc: 'Forecast · ML models', color: '#39d0ff', icon: 'M3 17l6-6 4 4 8-9' },
    { q: 'What should we do?', name: 'PRESCRIPTIVE', desc: 'Recommendations · optimize', color: '#c4ff00', icon: 'M12 2l2.4 5.4L20 9l-4 4 1 6-5-3-5 3 1-6-4-4 5.6-1.6L12 2z' },
  ];
  return (
    <svg viewBox="0 0 1000 300" className="diagram-svg" role="img" aria-label="Analytics stages diagram">
      <defs>
        <marker id="arrowA" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6 Z" fill="#c4ff00" />
        </marker>
      </defs>
      <line x1="110" y1="150" x2="890" y2="150" stroke="rgba(255,255,255,0.15)" strokeWidth="3" strokeDasharray="6 6" />
      {stages.map((s, i) => {
        const x = 60 + i * 235;
        return (
          <g key={s.name} style={{ animationDelay: `${i * 150}ms` }} className="diagram-pop">
            <rect x={x} y={80} width="180" height="140" rx="16" fill="rgba(255,255,255,0.04)" stroke={s.color} strokeWidth="2.5" />
            <g transform={`translate(${x + 90}, 108)`}>
              <path d={s.icon} fill="none" stroke={s.color} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <text x={x + 90} y={155} textAnchor="middle" fill="#fff" fontSize="14.5" fontWeight="800" fontFamily={FONT}>{s.name}</text>
            <text x={x + 90} y={176} textAnchor="middle" fill={s.color} fontSize="12.5" fontWeight="700" fontFamily={FONT}>"{s.q}"</text>
            <text x={x + 90} y={196} textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>{s.desc}</text>
            {i < 3 && (
              <line x1={x + 180} y1="150" x2={x + 235} y2="150" stroke="#c4ff00" strokeWidth="3" markerEnd="url(#arrowA)" className="arrow-pulse" />
            )}
          </g>
        );
      })}
    </svg>
  );
}

// ============================================================
// Diagram 6 — Decision cycle
// ============================================================
export function CycleDiagram() {
  const steps = ['1 · Identify Problem', '2 · Collect Data', '3 · Clean & Process', '4 · Analyze', '5 · Interpret', '6 · Decide', '7 · Implement & Monitor'];
  const cx = 250, cy = 215, r = 135;
  return (
    <svg viewBox="0 0 500 430" className="diagram-svg" role="img" aria-label="Data-driven decision cycle">
      <defs>
        <marker id="arrowC" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6 Z" fill="#c4ff00" />
        </marker>
      </defs>
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="3" strokeDasharray="8 8" />
      <g style={{ animationDelay: '80ms' }} className="diagram-pop">
        <circle cx={cx} cy={cy} r="58" fill="rgba(0,71,255,0.12)" stroke="#0047ff" strokeWidth="2.5" />
        <text x={cx} y={cy - 6} textAnchor="middle" fill="#fff" fontSize="14" fontWeight="800" fontFamily={FONT}>DATA-DRIVEN</text>
        <text x={cx} y={cy + 16} textAnchor="middle" fill="#c4ff00" fontSize="13" fontWeight="700" fontFamily={FONT}>CYCLE</text>
      </g>
      {steps.map((s, i) => {
        const ang = -Math.PI / 2 + (i * 2 * Math.PI) / steps.length;
        const x = cx + r * Math.cos(ang) - 78;
        const y = cy + r * Math.sin(ang) - 15;
        return (
          <g key={s} style={{ animationDelay: `${150 + i * 110}ms` }} className="diagram-pop">
            <rect x={x} y={y} width="156" height="30" rx="15" fill="rgba(255,255,255,0.05)" stroke={i === steps.length - 1 ? '#c4ff00' : 'rgba(0,71,255,0.7)'} strokeWidth="1.8" />
            <text x={x + 78} y={y + 19} textAnchor="middle" fill="#fff" fontSize="10.5" fontWeight="600" fontFamily={FONT}>{s}</text>
          </g>
        );
      })}
      <text x={cx} y={405} textAnchor="middle" fill="#9ab0e0" fontSize="12" fontFamily={FONT}>Circular process — decisions monitor kiye jaate hain aur cycle repeat hoti hai</text>
    </svg>
  );
}

// ============================================================
// Diagram 7 — Full BI Architecture (6 layers)
// ============================================================
export function ArchDiagram() {
  const layers = [
    { label: 'DATA SOURCES', sub: 'ERP · CRM · Operational DB · Excel · External', color: '#0047ff' },
    { label: 'ETL', sub: 'Extract → Transform → Load', color: '#0050e8' },
    { label: 'DATA WAREHOUSE', sub: 'Subject-oriented · Integrated · Historical', color: '#0060ff' },
    { label: 'OLAP SERVER', sub: 'Data Cubes · Drill-down · Slice · Dice', color: '#0080ff' },
    { label: 'BI APPLICATIONS', sub: 'Dashboards · Reports · Scorecards', color: '#00a8ff' },
    { label: 'USERS', sub: 'Analysts · Managers · Executives', color: '#c4ff00' },
  ];
  return (
    <svg viewBox="0 0 640 460" className="diagram-svg" role="img" aria-label="Full BI architecture components diagram">
      <defs>
        <marker id="arrowAr" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6 Z" fill="#c4ff00" />
        </marker>
      </defs>
      {layers.map((l, i) => {
        const y = 30 + i * 68;
        return (
          <g key={l.label} style={{ animationDelay: `${i * 120}ms` }} className="diagram-pop">
            <rect x="20" y={y} width="600" height="56" rx="12" fill="rgba(255,255,255,0.03)" stroke={l.color} strokeWidth="2" opacity="0.9" />
            <rect x="20" y={y} width="6" height="56" rx="3" fill={l.color} />
            <text x="40" y={y + 25} fill="#fff" fontSize="15" fontWeight="800" fontFamily={FONT}>{l.label}</text>
            <text x="40" y={y + 45} fill="#9ab0e0" fontSize="11" fontFamily={FONT}>{l.sub}</text>
            {i < layers.length - 1 && (
              <line x1="320" y1={y + 56} x2="320" y2={y + 68} stroke="#c4ff00" strokeWidth="3" markerEnd="url(#arrowAr)" className="arrow-pulse" />
            )}
          </g>
        );
      })}
      <text x="320" y="440" textAnchor="middle" fill="#9ab0e0" fontSize="12" fontFamily={FONT}>Data flows top to bottom: Sources → ETL → Warehouse → OLAP → Applications → Users</text>
    </svg>
  );
}

// ============================================================
// Diagram 8 — ETL Process (Extract → Transform → Load)
// ============================================================
export function ETLDiagram() {
  return (
    <svg viewBox="0 0 1000 280" className="diagram-svg" role="img" aria-label="ETL process diagram">
      <defs>
        <marker id="arrowE" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6 Z" fill="#c4ff00" />
        </marker>
      </defs>
      {[
        { x: 30, name: 'EXTRACT', desc: 'Data ko sources se nikalna\nERP · CRM · DB · Excel', icon: 'M12 3C7 3 3 6.5 3 11s4 8 9 8 9-3.5 9-8-4-8-9-8z' },
        { x: 370, name: 'TRANSFORM', desc: 'Clean karna · format karna\nDuplicate hatana · rules apply', icon: 'M12 4v4m0 12v4M4 12h4m12 0h4M6.3 6.3l2.8 2.8m5.8 5.8l2.8 2.8M6.3 17.7l2.8-2.8m5.8-5.8l2.8-2.8' },
        { x: 710, name: 'LOAD', desc: 'Data warehouse mein daalna\nAnalysis-ready data', icon: 'M3 7h18v4H3zM5 11v8M19 11v8' },
      ].map((s, i) => (
        <g key={s.name} style={{ animationDelay: `${i * 150}ms` }} className="diagram-pop">
          <rect x={s.x} y={40} width="220" height="170" rx="16" fill="rgba(255,255,255,0.04)" stroke="#0047ff" strokeWidth="2.5" />
          <g transform={`translate(${s.x + 110}, 70)`}>
            <path d={s.icon} fill="none" stroke="#c4ff00" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          <text x={s.x + 110} y={140} textAnchor="middle" fill="#fff" fontSize="17" fontWeight="800" fontFamily={FONT}>{s.name}</text>
          {s.desc.split('\n').map((d, j) => (
            <text key={j} x={s.x + 110} y={164 + j * 20} textAnchor="middle" fill="#9ab0e0" fontSize="11" fontFamily={FONT}>{d}</text>
          ))}
          {i < 2 && (
            <line x1={s.x + 220} y1="125" x2={s.x + 270} y2="125" stroke="#c4ff00" strokeWidth="3" markerEnd="url(#arrowE)" className="arrow-pulse" />
          )}
        </g>
      ))}
      <text x="500" y="250" textAnchor="middle" fill="#9ab0e0" fontSize="12" fontFamily={FONT}>ETL process data ko analysis-ready banata hai</text>
    </svg>
  );
}

// ============================================================
// Diagram 9 — Database vs Data Warehouse (OLTP vs OLAP)
// ============================================================
export function DbVsDwDiagram() {
  return (
    <svg viewBox="0 0 900 420" className="diagram-svg" role="img" aria-label="OLTP database vs OLAP data warehouse comparison">
      <defs>
        <marker id="arrowV" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6 Z" fill="#c4ff00" />
        </marker>
      </defs>
      {/* OLTP box */}
      <g style={{ animationDelay: '80ms' }} className="diagram-pop">
        <rect x="30" y="30" width="380" height="330" rx="18" fill="rgba(0,71,255,0.08)" stroke="#0047ff" strokeWidth="2.5" />
        <text x="220" y="65" textAnchor="middle" fill="#fff" fontSize="18" fontWeight="800" fontFamily={FONT}>DATABASE (OLTP)</text>
        <text x="220" y="85" textAnchor="middle" fill="#9ab0e0" fontSize="12" fontFamily={FONT}>Online Transaction Processing</text>
        {[
          'Purpose: Daily transactions',
          'Data: Current / operational',
          'Structure: Row-based, normalized',
          'Operations: Fast inserts & updates',
          'Users: Operational staff',
          'Example: ATM transactions',
        ].map((p, i) => (
          <text key={p} x="50" y={120 + i * 36} fill="#eef2ff" fontSize="12.5" fontFamily={FONT}>• {p}</text>
        ))}
      </g>
      {/* arrow */}
      <g className="diagram-pop" style={{ animationDelay: '400ms' }}>
        <line x1="410" y1="200" x2="490" y2="200" stroke="#c4ff00" strokeWidth="3.5" markerEnd="url(#arrowV)" className="arrow-pulse" />
        <text x="450" y="185" textAnchor="middle" fill="#c4ff00" fontSize="11" fontWeight="700" fontFamily={FONT}>ETL</text>
      </g>
      {/* OLAP box */}
      <g style={{ animationDelay: '550ms' }} className="diagram-pop">
        <rect x="510" y="30" width="360" height="330" rx="18" fill="rgba(196,255,0,0.06)" stroke="#c4ff00" strokeWidth="2.5" />
        <text x="690" y="65" textAnchor="middle" fill="#fff" fontSize="18" fontWeight="800" fontFamily={FONT}>DATA WAREHOUSE (OLAP)</text>
        <text x="690" y="85" textAnchor="middle" fill="#9ab0e0" fontSize="12" fontFamily={FONT}>Online Analytical Processing</text>
        {[
          'Purpose: Historical analysis',
          'Data: Integrated, historical',
          'Structure: Multi-dimensional cubes',
          'Operations: Drill-down · slice · dice',
          'Users: Analysts · managers',
          'Features: Subject-oriented · time-variant',
        ].map((p, i) => (
          <text key={p} x="530" y={120 + i * 36} fill="#eef2ff" fontSize="12.5" fontFamily={FONT}>• {p}</text>
        ))}
      </g>
    </svg>
  );
}

// ============================================================
// Diagram 10 — Benefits vs Challenges
// ============================================================
export function BenefitsChallengesDiagram() {
  return (
    <svg viewBox="0 0 900 320" className="diagram-svg" role="img" aria-label="BI benefits vs challenges diagram">
      <defs>
        <marker id="arrowBC" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6 Z" fill="#c4ff00" />
        </marker>
      </defs>
      {/* Benefits */}
      <g style={{ animationDelay: '80ms' }} className="diagram-pop">
        <rect x="30" y="40" width="380" height="250" rx="16" fill="rgba(0,71,255,0.1)" stroke="#0047ff" strokeWidth="2.5" />
        <text x="220" y="78" textAnchor="middle" fill="#fff" fontSize="18" fontWeight="800" fontFamily={FONT}>✓ BENEFITS</text>
        {[
          'Better decision making',
          'Increased efficiency',
          'Competitive advantage',
          'Cost reduction',
          'Revenue growth',
          'Customer satisfaction',
        ].map((p, i) => (
          <text key={p} x="50" y={118 + i * 32} fill="#eef2ff" fontSize="14" fontFamily={FONT}>• {p}</text>
        ))}
      </g>
      {/* arrow */}
      <g className="diagram-pop" style={{ animationDelay: '300ms' }}>
        <line x1="410" y1="165" x2="490" y2="165" stroke="#c4ff00" strokeWidth="3.5" markerEnd="url(#arrowBC)" className="arrow-pulse" />
        <text x="450" y="150" textAnchor="middle" fill="#c4ff00" fontSize="11" fontWeight="700" fontFamily={FONT}>IMPLEMENTATION</text>
      </g>
      {/* Challenges */}
      <g style={{ animationDelay: '450ms' }} className="diagram-pop">
        <rect x="510" y="40" width="360" height="250" rx="16" fill="rgba(196,255,0,0.06)" stroke="#c4ff00" strokeWidth="2.5" />
        <text x="690" y="78" textAnchor="middle" fill="#fff" fontSize="18" fontWeight="800" fontFamily={FONT}>⚠ CHALLENGES</text>
        {[
          'Data quality (GIGO)',
          'High implementation cost',
          'Security & privacy',
          'Resistance to change',
          'Technical complexity',
          'Skilled personnel needed',
        ].map((p, i) => (
          <text key={p} x="530" y={118 + i * 32} fill="#eef2ff" fontSize="14" fontFamily={FONT}>• {p}</text>
        ))}
      </g>
    </svg>
  );
}

// ============================================================
// Diagram 11 — GenAI + BI Integration
// ============================================================
export function GenAIDiagram() {
  return (
    <svg viewBox="0 0 1000 340" className="diagram-svg" role="img" aria-label="GenAI and BI integration diagram">
      <defs>
        <marker id="arrowG" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6 Z" fill="#c4ff00" />
        </marker>
      </defs>
      {/* Data sources */}
      <g style={{ animationDelay: '80ms' }} className="diagram-pop">
        <rect x="20" y="80" width="180" height="130" rx="14" fill="rgba(255,255,255,0.04)" stroke="#0047ff" strokeWidth="2.5" />
        <text x="110" y="120" textAnchor="middle" fill="#fff" fontSize="15" fontWeight="800" fontFamily={FONT}>BUSINESS DATA</text>
        {['Sales · CRM · ERP', 'Databases', 'Dashboards'].map((p, i) => (
          <text key={p} x="110" y={145 + i * 26} textAnchor="middle" fill="#9ab0e0" fontSize="11" fontFamily={FONT}>{p}</text>
        ))}
      </g>
      {/* arrow */}
      <line x1="200" y1="145" x2="260" y2="145" stroke="#c4ff00" strokeWidth="3" markerEnd="url(#arrowG)" className="arrow-pulse" />
      {/* BI system */}
      <g style={{ animationDelay: '200ms' }} className="diagram-pop">
        <rect x="260" y="80" width="200" height="130" rx="14" fill="rgba(0,71,255,0.12)" stroke="#0047ff" strokeWidth="2.5" />
        <text x="360" y="120" textAnchor="middle" fill="#fff" fontSize="15" fontWeight="800" fontFamily={FONT}>BI SYSTEM</text>
        {['Data warehouse', 'OLAP analysis', 'Dashboards'].map((p, i) => (
          <text key={p} x="360" y={145 + i * 26} textAnchor="middle" fill="#9ab0e0" fontSize="11" fontFamily={FONT}>{p}</text>
        ))}
      </g>
      {/* arrow */}
      <line x1="460" y1="145" x2="520" y2="145" stroke="#c4ff00" strokeWidth="3" markerEnd="url(#arrowG)" className="arrow-pulse" />
      {/* GenAI/LLM */}
      <g style={{ animationDelay: '320ms' }} className="diagram-pop">
        <rect x="520" y="80" width="200" height="130" rx="14" fill="rgba(196,255,0,0.08)" stroke="#c4ff00" strokeWidth="2.5" />
        <text x="620" y="120" textAnchor="middle" fill="#fff" fontSize="15" fontWeight="800" fontFamily={FONT}>GENAI / LLM</text>
        {['GPT-4 · Claude', 'Natural language', 'Insight generation'].map((p, i) => (
          <text key={p} x="620" y={145 + i * 26} textAnchor="middle" fill="#9ab0e0" fontSize="11" fontFamily={FONT}>{p}</text>
        ))}
      </g>
      {/* arrow */}
      <line x1="720" y1="145" x2="780" y2="145" stroke="#c4ff00" strokeWidth="3" markerEnd="url(#arrowG)" className="arrow-pulse" />
      {/* Output */}
      <g style={{ animationDelay: '440ms' }} className="diagram-pop">
        <rect x="780" y="80" width="200" height="130" rx="14" fill="rgba(255,255,255,0.04)" stroke="#00c8ff" strokeWidth="2.5" />
        <text x="880" y="120" textAnchor="middle" fill="#fff" fontSize="15" fontWeight="800" fontFamily={FONT}>OUTPUTS</text>
        {['"Ask your data"', 'Auto-generated reports', 'Insights in natural language'].map((p, i) => (
          <text key={p} x="880" y={145 + i * 26} textAnchor="middle" fill="#9ab0e0" fontSize="11" fontFamily={FONT}>{p}</text>
        ))}
      </g>
      <text x="500" y="280" textAnchor="middle" fill="#9ab0e0" fontSize="12" fontFamily={FONT}>User asks in natural language → BI data → LLM processes → Answer in natural language</text>
      <text x="500" y="310" textAnchor="middle" fill="#c4ff00" fontSize="12" fontWeight="700" fontFamily={FONT}>Conversational Analytics — BI accessible to non-technical users</text>
    </svg>
  );
}

// ============================================================
// Diagram selector
// ============================================================
export function Diagram({ type }) {
  switch (type) {
    case 'biflow':
      return <BIFlowDiagram />;
    case 'timeline':
      return <TimelineDiagram />;
    case 'dss':
      return <DSSDiagram />;
    case 'dikw':
      return <DIKWDiagram />;
    case 'analytics':
      return <AnalyticsDiagram />;
    case 'cycle':
      return <CycleDiagram />;
    case 'arch':
      return <ArchDiagram />;
    case 'etl':
      return <ETLDiagram />;
    case 'db-vs-dw':
      return <DbVsDwDiagram />;
    case 'benefits-challenges':
      return <BenefitsChallengesDiagram />;
    case 'genai':
      return <GenAIDiagram />;
    case 'cyber-framework':
      return <CyberFrameworkDiagram />;
    case 'cyberspace-layers':
      return <CyberspaceLayersDiagram />;
    case 'cyber-threats':
      return <CyberThreatsDiagram />;
    case 'cyber-warfare':
      return <CyberWarfareDiagram />;
    case 'cia-triad':
      return <CIATriadDiagram />;
    case 'cyber-terrorism':
      return <CyberTerrorismDiagram />;
    case 'critical-infra':
      return <CriticalInfraDiagram />;
    case 'org-security':
      return <OrgSecurityDiagram />;
    case 'policy-framework':
      return <PolicyFrameworkDiagram />;
    case 'nodal-authority':
      return <NodalAuthorityDiagram />;
    case 'international-cyber':
      return <InternationalCyberDiagram />;
    case 'cyber-laws':
      return <CyberLawsDiagram />;
    case 'law-principles':
      return <LawPrinciplesDiagram />;
    case 'it-act-2000':
      return <ItAct2000Diagram />;
    case 'it-act-provisions':
      return <ItActProvisionsDiagram />;
    case 'it-act-amendments':
      return <ItActAmendmentsDiagram />;
    case 'cyber-attacks-overview':
      return <CyberAttacksOverviewDiagram />;
    case 'threats-malware-spyware-sniffing':
      return <ThreatsMalwareSpywareDiagram />;
    case 'gaining-access':
      return <GainingAccessDiagram />;
    case 'escalating-privileges':
      return <EscalatingPrivilegesDiagram />;
    case 'executing-applications':
      return <ExecutingApplicationsDiagram />;
    case 'hiding-files':
      return <HidingFilesDiagram />;
    case 'covering-tracks':
      return <CoveringTracksDiagram />;
    case 'worms':
      return <WormsDiagram />;
    case 'trojans':
      return <TrojansDiagram />;
    case 'viruses':
      return <VirusesDiagram />;
    case 'backdoors':
      return <BackdoorsDiagram />;
    case 'cyber-stalking':
      return <CyberStalkingDiagram />;
    case 'software-piracy':
      return <SoftwarePiracyDiagram />;
    case 'phishing':
      return <PhishingDiagram />;
    case 'computer-hacking':
      return <ComputerHackingDiagram />;
    case 'spamming':
      return <SpammingDiagram />;
    case 'xss':
      return <XssDiagram />;
    case 'online-auction-fraud':
      return <OnlineAuctionFraudDiagram />;
    case 'logic-bombs':
      return <LogicBombsDiagram />;
    case 'web-jacking':
      return <WebJackingDiagram />;
    case 'internet-time-theft':
      return <InternetTimeTheftDiagram />;
    case 'dos-attack':
      return <DosAttackDiagram />;
    case 'salami-attack':
      return <SalamiAttackDiagram />;
    case 'data-diddling':
      return <DataDiddlingDiagram />;
    case 'email-spoofing':
      return <EmailSpoofingDiagram />;
    case 'types-of-hackers':
      return <TypesOfHackersDiagram />;
    case 'hacking-and-cracking':
      return <HackingCrackingDiagram />;
    case 'ethical-issues-hacking':
      return <EthicalIssuesDiagram />;
    case 'ethical-hacking':
      return <EthicalHackingDiagram />;
    case 'qa-qc-comparison':
      return <QAQCComparisonDiagram />;
    case 'sqa-components':
      return <SQAComponentsDiagram />;
    case 'quality-business-impact':
      return <QualityBusinessImpactDiagram />;
    case 'sqa-planning-process':
      return <SQAPlanningProcessDiagram />;
    case 'product-process-quality':
      return <ProductProcessQualityDiagram />;
    case 'process-models-comparison':
      return <ProcessModelsComparisonDiagram />;
    case 'qc-tools-overview':
      return <QCToolsOverviewDiagram />;
    case 'qa-models-overview':
      return <QAModelsOverviewDiagram />;
    case 'sqa-trends-overview':
      return <SQATrendsOverviewDiagram />;
    case 'security-testing-overview':
      return <SecurityTestingOverviewDiagram />;
    case 'complexity-metrics-overview':
      return <ComplexityMetricsOverviewDiagram />;
    case 'quality-metrics-overview':
      return <QualityMetricsOverviewDiagram />;
    case 'availability-metrics-overview':
      return <AvailabilityMetricsOverviewDiagram />;
    case 'dre-overview':
      return <DREOverviewDiagram />;
    case 'fmea-overview':
      return <FMEAOverviewDiagram />;
    case 'qfd-overview':
      return <QFDOverviewDiagram />;
    case 'taguchi-loss-overview':
      return <TaguchiLossOverviewDiagram />;
    case 'coq-overview':
      return <COQOverviewDiagram />;
    case 'software-testing-basics-overview':
      return <SoftwareTestingBasicsOverviewDiagram />;
    case 'test-plan-test-cases-overview':
      return <TestPlanAndTestCasesOverviewDiagram />;
    case 'defect-management-overview':
      return <DefectManagementOverviewDiagram />;
    case 'ds-venn':
      return <DSVennDiagram />;
    case 'ds-impact':
      return <DSImpactDiagram />;
    case 'data-types':
      return <DataTypesDiagram />;
    case 'measurement-scales':
      return <MeasurementScalesDiagram />;
    case 'data-formats':
      return <DataFormatsDiagram />;
    case 'bigdata-vs-ds':
      return <BigDataVsDataScienceDiagram />;
    case 'ds-lifecycle':
      return <DSLifecycleDiagram />;
    case 'crisp-dm':
      return <CrispDmDiagram />;
    case 'ds-applications':
      return <DSApplicationsDiagram />;
    case 'ds-vs-fields':
      return <DSvsFieldsDiagram />;
    case 'ml-ai-stack':
      return <MLAIStackDiagram />;
    case 'ds-roles':
      return <DSRolesDiagram />;
    case 'stats-foundation':
      return <StatisticsFoundationDiagram />;
    case 'web-stack':
      return <WebStackDiagram />;
    case 'internet-www':
      return <InternetVsWwwDiagram />;
    case 'web-server':
      return <WebServerDiagram />;
    case 'website-planning':
      return <WebsitePlanningDiagram />;
    case 'html-structure':
      return <HtmlStructureDiagram />;
    case 'html-elements':
      return <HtmlElementsDiagram />;
    case 'css-insertion':
      return <CssInsertionDiagram />;
    case 'css-selectors':
      return <CssSelectorsDiagram />;
    case 'html-vs-html5':
      return <HtmlVsHtml5Diagram />;
    case 'frames-layout':
      return <FramesDiagram />;
    case 'html-vs-xml':
      return <HtmlVsXmlDiagram />;
    case 'xml-tree':
      return <XmlTreeDiagram />;
    case 'dtd-vs-xsd':
      return <DtdVsXsdDiagram />;
    case 'xslt-pipeline':
      return <XsltPipelineDiagram />;
    case 'js-role':
      return <JsRoleDiagram />;
    case 'js-inclusion':
      return <JsInclusionDiagram />;
    case 'js-types':
      return <JsTypesDiagram />;
    case 'js-control':
      return <JsControlDiagram />;
    case 'js-loops':
      return <JsLoopsDiagram />;
    case 'js-function-dialog':
      return <JsFunctionDialogDiagram />;
    case 'cookies':
      return <CookieFlowDiagram />;
    case 'js-events':
      return <EventFlowDiagram />;
    case 'js-objects':
      return <JsObjectsDiagram />;
    case 'js-number-math':
      return <NumberMathDiagram />;
    case 'js-string':
      return <StringMethodsDiagram />;
    case 'js-array':
      return <ArrayMethodsDiagram />;
    case 'js-date':
      return <DateTemporalDiagram />;
    case 'js-async':
      return <AsyncFlowDiagram />;
    case 'bootstrap':
      return <BootstrapDiagram />;
    default:
      return null;
  }
}
