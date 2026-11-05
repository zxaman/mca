// Simple stroke icons for topic cards / component cards
export function Icon({ name, size = 28, color = '#c4ff00' }) {
  const icons = {
    chart: 'M4 20V10m4 10V4m4 16v-7m4 7V8m4 12v-4',
    database: 'M12 3C7 3 3 6.5 3 11s4 8 9 8 9-3.5 9-8-4-8-9-8zm0 15c-4 0-7-2.5-7-6s3-5.5 7-5.5S19 8 19 11s-3 5.5-7 5.5z',
    etl: 'M4 6h7v7H4zM16 14h4l-4 4h4',
    warehouse: 'M3 7h18v4H3zM5 11v8M19 11v8M3 7V5m18 2V5M9 7v12m6-12v12',
    cube: 'M12 2l9 5v10l-9 5-9-5V7l9-5zm0 7L7 7m5 0l5-2v4l-5 2M7 7v4m10-4v4',
    dashboard: 'M4 4h7v9H4zM13 4h7v5h-7zM13 12h7v8h-7zM4 16h7v4H4z',
    bulb: 'M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.1h6c0-.8.4-1.6 1-2.1A7 7 0 0 0 12 2zm-2 17h4',
    clock: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 11v5m4-8h-8',
    dss: 'M3 3v18h18M7 14l3-3 3 3 5-6',
    executive: 'M4 4h16v4H4zM6 8v12m12-12v12M4 20h16',
    ai: 'M12 3a4 4 0 0 1 4 4 4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1-4-4 4 4 0 0 1 4-4 4 4 0 0 1 4-4zM12 8v8m-5-5h10',
    timeline: 'M12 2v6m0 0a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 12v10',
    cycle: 'M12 12m-3 0a3 3 0 1 0 6 0 3 3 0 1 0-6 0m-5 5a8 8 0 0 1 16 0M20 12a8 8 0 0 1-8 8',
    check: 'M12 2l2.4 5.4L20 9l-4 4 1 6-5-3-5 3 1-6-4-4 5.6-1.6L12 2z',
    half: 'M12 3a9 9 0 1 0 9 9h-9V3z',
    unstruct: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 5v5l3 3',
    search: 'M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zm10 17l-4.3-4.3',
    forecast: 'M3 17l6-6 4 4 8-9',
    prescriptive: 'M12 2l2.4 5.4L20 9l-4 4 1 6-5-3-5 3 1-6-4-4 5.6-1.6L12 2z',
    warn: 'M12 3l9 16H3l9-16zm0 5v5m0 3v.5',
    arrow: 'M5 12h14m-6-6l6 6-6 6',
    quiz: 'M12 17v5m-4-14h8v8h-8zm-5 6l5-6 5 6',
    book: 'M4 4h7v16H4zM13 4h7v16h-7zM4 8h7M13 8h7',
    menu: 'M3 6h18M3 12h18M3 18h18',
    'chevron-down': 'M6 9l6 6 6-6',
    'chevron-right': 'M9 6l6 6-6 6',
    'chevron-left': 'M15 6l-6 6 6 6',
    home: 'M3 12l9-9 9 9M5 10v10h14V10',
    file: 'M6 2h8l4 4v16H6zM14 2v4h4',
    layers: 'M12 2l9 5-9 5-9-5 9-5zM3 12l9 5 9-5M3 17l9 5 9-5',
    folder: 'M3 6h6l2 2h10v12H3z',
    star: 'M12 2l2.4 5.4L20 9l-4 4 1 6-5-3-5 3 1-6-4-4 5.6-1.6L12 2z',
    zap: 'M13 2L3 14h8l-2 8 10-12h-8l2-8z',
    shield: 'M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z',
    virus: 'M12 2a4 4 0 0 1 4 4 3 3 0 0 1-2 2.8V12m0 0v4m0 4h-2m2 0h2m-4 0v-4m0-4V6.8A3 3 0 0 0 8 6a4 4 0 0 1 4-4z',
    lock: 'M6 10V8a6 6 0 1 1 12 0v2m2 0H4m16 0h-2m-2 4h6v6H4v-6h6z',
    server: 'M3 4h18v6H3zM3 14h18v6H3zM7 7h.01M7 17h.01',
    users: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm14 10v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75',
    monitor: 'M3 4h18v12H3zM9 20h6M12 16v4',
    globe: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 0c2.5 2.5 2.5 17.5 0 20M12 2c-2.5 2.5-2.5 17.5 0 20M2 12h20',
    bookmark: 'M6 3h12v18l-6-4-6 4V3z',
    chevron: 'M6 9l6 6 6-6',
    table: 'M3 4h18v16H3zM3 10h18M3 15h18M9 10v10M15 10v10',
    ruler: 'M3 15L15 3l6 6L9 21zM7 11l2 2M10 8l2 2M13 5l2 2',
    tag: 'M20 12l-8 8-9-9V3h8l9 9zM7.5 7.5h.01',
    code: 'M8 6l-5 6 5 6M16 6l5 6-5 6',
    eye: 'M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12zm10 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6z',
    network: 'M12 3a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM5 15a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm14 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM12 9v3m0 0l-5 5m5-5l5 5',
    flow: 'M3 4h7v5H3zM14 15h7v5h-7zM6.5 9v4a2 2 0 0 0 2 2H14',
    list: 'M8 6h13M8 12h13M8 18h13M4 6h.01M4 12h.01M4 18h.01',
    user: 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm-7 9a7 7 0 0 1 14 0',
    target: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 3.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z',
    calendar: 'M4 5h16v16H4zM4 10h16M8 3v4M16 3v4',
    money: 'M3 6h18v12H3zM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z',
    trophy: 'M8 4h8v6a4 4 0 0 1-8 0V4zM8 6H4v2a4 4 0 0 0 4 4M16 6h4v2a4 4 0 0 1-4 4M10 20h4M12 14v6',
    test: 'M9 3h6M10 3v7L5.5 19.2A1.8 1.8 0 0 0 7 22h10a1.8 1.8 0 0 0 1.5-2.8L14 10V3',
    doc: 'M6 2h8l4 4v16H6zM14 2v4h4M9 13h6M9 17h6',
    design: 'M3 21l4-1 11-11-3-3L4 17l-1 4zM14 6l3 3',
    speed: 'M4 18a8 8 0 1 1 16 0M12 14l4-4',
    wrench: 'M14 6a4 4 0 0 1 5 5l-9 9-5-5 9-9zM15 5h4v4',
    expand: 'M4 9V4h5M20 15v5h-5M4 15v5h5M20 9V4h-5',
    down: 'M12 3v14m-6-6l6 6 6-6M4 21h16',
    refresh: 'M20 12a8 8 0 1 1-2.3-5.7M20 4v4h-4',
    loop: 'M17 2l4 4-4 4M3 11V9a4 4 0 0 1 4-4h14M7 22l-4-4 4-4M21 13v2a4 4 0 0 1-4 4H3',
    fish: 'M2 12h11m0 0l-3-3m3 3l-3 3M13 12h9M17 8v8',
    scatter: 'M4 20V4M4 20h16M8 16h.01M11 9h.01M15 13h.01M18 6h.01',
    performance: 'M4 18a8 8 0 1 1 16 0M6 12l4 4 3-5 3 3',
    security: 'M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4zM9 12l2 2 4-4',
    flag: 'M5 21V3m0 0h9l-1.5 4H21l-2 4 2 4H5',
    grid: 'M3 3h8v8H3zM13 3h8v8h-8zM3 13h8v8H3zM13 13h8v8h-8z',
    briefcase: 'M3 8h18v12H3zM9 8V5h6v3M3 13h18',
    tools: 'M3 21l6-6M6 3l3 3-3 3-3-3zM18 3l3 3-3 3-3-3zM10 14l4-4 4 4-4 4z',
    trends: 'M3 17l6-6 4 4 8-9M15 6h6v6',
    metrics: 'M4 20V10M10 20V4M16 20v-7M22 20H2',
    bug: 'M8 8a4 4 0 0 1 8 0v6a4 4 0 0 1-8 0V8zM4 10h4M16 10h4M4 16h4M16 16h4M9 4l1 2M15 4l-1 2',
    alert: 'M12 3l9 16H3l9-16zm0 5v5m0 3v.5',
    dollar: 'M12 2v20M17 6a4 4 0 0 0-4-2h-2a4 4 0 0 0 0 8h2a4 4 0 0 1 0 8H9a4 4 0 0 1-4-2',
  };
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={icons[name] || icons.chart} />
    </svg>
  );
}
