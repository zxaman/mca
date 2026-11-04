import React from 'react';

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
    globe: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 0c2.5 2.5 2.5 17.5 0 20M12 2c-2.5 2.5-2.5 17.5 0 20M2 12h20',
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
