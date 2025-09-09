interface IconProps {
  name: string;
  size?: number;
  className?: string;
}

const iconPaths: Record<string, string> = {
  target: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z",
  diamond: "M6 3h12l4 6-10 12L2 9l4-6zM6 3 9 9l3-6 3 6 3-6M9 9 2 9M15 9l7 0",
  structure: "M2 3h20v14H2V3zM8 21h8M12 17v4M7 7h10M7 11h6",
  "signal-wave": "M2 12c4-8 8 8 12 0s8 8 8 0",
  compass: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM16.24 7.76l-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z",
  "eight-point-star": "M12 2l2.09 6.26L20 8l-6.26 2.09L12 16l-2.09-6.26L4 8l6.26-2.09L12 2zM12 2v20M2 12h20M6.34 6.34l11.32 11.32M17.66 6.34L6.34 17.66",
  "signal-ring": "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zM12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z",
  eclipse: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.52 0 10-4.48 10-10S17.52 2 12 2zM12 2a10 10 0 0 0 0 20c5.523 0 10-4.477 10-10S17.523 2 12 2z",
  lighthouse: "M8 2h8v20l-4-4-4 4V2zM6 10h12M6 14h12M2 6l2 2M20 6l-2 2M2 18l2-2M20 18l-2-2",
  "tuning-fork": "M9 2v12M15 2v12M9 14h6M12 14v8"
};

const Icon = ({ name, size = 24, className = "" }: IconProps) => {
  const path = iconPaths[name];
  
  if (!path) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d={path} />
      {/* Add fill dots for specific icons */}
      {name === 'signal-wave' && <circle cx="12" cy="12" r="1.5" fill="currentColor" />}
      {name === 'signal-ring' && <circle cx="12" cy="12" r="0.5" fill="currentColor" />}
      {name === 'tuning-fork' && <circle cx="12" cy="22" r="1" fill="currentColor" />}
    </svg>
  );
};

export default Icon;