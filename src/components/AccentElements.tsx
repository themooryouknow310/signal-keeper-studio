interface AccentElementProps {
  className?: string;
  size?: number;
  width?: number;
}

// Sacred Mandala
export const SacredMandala = ({ className = "", size = 120 }: AccentElementProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    className={`${className}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="60" cy="60" r="58" stroke="hsl(var(--sacred-gold))" strokeWidth="1" opacity="0.6" />
    <circle cx="60" cy="60" r="45" stroke="hsl(var(--sacred-gold))" strokeWidth="0.8" opacity="0.4" />
    <circle cx="60" cy="60" r="30" stroke="hsl(var(--sacred-gold))" strokeWidth="0.6" opacity="0.3" />
    
    {/* Star pattern */}
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
      <g key={i} transform={`rotate(${angle} 60 60)`}>
        <line x1="60" y1="15" x2="60" y2="30" stroke="hsl(var(--sacred-gold))" strokeWidth="0.5" opacity="0.6" />
        <line x1="60" y1="90" x2="60" y2="105" stroke="hsl(var(--sacred-gold))" strokeWidth="0.5" opacity="0.6" />
      </g>
    ))}
    
    {/* Inner triangular pattern */}
    <polygon 
      points="60,35 75,70 45,70" 
      stroke="hsl(var(--sacred-gold))" 
      strokeWidth="0.5" 
      fill="none" 
      opacity="0.4"
    />
    <polygon 
      points="60,85 45,50 75,50" 
      stroke="hsl(var(--sacred-gold))" 
      strokeWidth="0.5" 
      fill="none" 
      opacity="0.4"
    />
  </svg>
);

// Signal Wave
export const SignalWave = ({ className = "", size = 100 }: AccentElementProps) => (
  <svg
    width={size}
    height={size * 0.4}
    viewBox="0 0 100 40"
    className={`${className}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 20 Q 25 10, 35 20 T 65 20 Q 85 10, 95 20"
      stroke="hsl(var(--signal-glow))"
      strokeWidth="2"
      fill="none"
      opacity="0.7"
    />
    <path
      d="M5 20 Q 25 10, 35 20 T 65 20 Q 85 10, 95 20"
      stroke="hsl(var(--signal-glow))"
      strokeWidth="1"
      fill="none"
      opacity="0.3"
      filter="blur(2px)"
    />
  </svg>
);

// Crosshair Target
export const CrosshairTarget = ({ className = "", size = 80 }: AccentElementProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 80 80"
    className={`${className}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="40" cy="40" r="35" stroke="hsl(var(--signal-glow))" strokeWidth="1" opacity="0.6" />
    <circle cx="40" cy="40" r="25" stroke="hsl(var(--signal-glow))" strokeWidth="0.8" opacity="0.4" />
    <circle cx="40" cy="40" r="15" stroke="hsl(var(--signal-glow))" strokeWidth="0.6" opacity="0.3" />
    <circle cx="40" cy="40" r="3" fill="hsl(var(--signal-glow))" opacity="0.8" />
    
    {/* Crosshair lines */}
    <line x1="5" y1="40" x2="20" y2="40" stroke="hsl(var(--signal-glow))" strokeWidth="1" opacity="0.6" />
    <line x1="60" y1="40" x2="75" y2="40" stroke="hsl(var(--signal-glow))" strokeWidth="1" opacity="0.6" />
    <line x1="40" y1="5" x2="40" y2="20" stroke="hsl(var(--signal-glow))" strokeWidth="1" opacity="0.6" />
    <line x1="40" y1="60" x2="40" y2="75" stroke="hsl(var(--signal-glow))" strokeWidth="1" opacity="0.6" />
  </svg>
);

// Eight Point Star
export const EightPointStar = ({ className = "", size = 60 }: AccentElementProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 60 60"
    className={`${className}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
      <g key={i} transform={`rotate(${angle} 30 30)`}>
        <line 
          x1="30" 
          y1="10" 
          x2="30" 
          y2="50" 
          stroke="hsl(var(--sacred-gold))" 
          strokeWidth={i % 2 === 0 ? "2" : "1"} 
          opacity={i % 2 === 0 ? "0.8" : "0.4"} 
        />
      </g>
    ))}
    <circle cx="30" cy="30" r="3" fill="hsl(var(--sacred-gold))" opacity="0.6" />
  </svg>
);

// Sacred Spiral
export const SacredSpiral = ({ className = "", size = 80 }: AccentElementProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 80 80"
    className={`${className}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M40 40 Q 45 35, 50 40 Q 55 50, 45 55 Q 30 60, 25 45 Q 15 25, 40 20 Q 70 15, 75 45 Q 80 80, 45 85"
      stroke="hsl(var(--signal-glow))"
      strokeWidth="1.5"
      fill="none"
      opacity="0.6"
    />
    <path
      d="M40 40 Q 45 35, 50 40 Q 55 50, 45 55 Q 30 60, 25 45 Q 15 25, 40 20 Q 70 15, 75 45 Q 80 80, 45 85"
      stroke="hsl(var(--signal-glow))"
      strokeWidth="3"
      fill="none"
      opacity="0.2"
      filter="blur(3px)"
    />
  </svg>
);

// Golden Ratio Grid
export const GoldenRatioGrid = ({ className = "", size = 100 }: AccentElementProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    className={`${className}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Grid lines */}
    <line x1="38" y1="10" x2="38" y2="90" stroke="hsl(var(--sacred-gold))" strokeWidth="0.5" opacity="0.4" />
    <line x1="62" y1="10" x2="62" y2="90" stroke="hsl(var(--sacred-gold))" strokeWidth="0.5" opacity="0.4" />
    <line x1="10" y1="38" x2="90" y2="38" stroke="hsl(var(--sacred-gold))" strokeWidth="0.5" opacity="0.4" />
    <line x1="10" y1="62" x2="90" y2="62" stroke="hsl(var(--sacred-gold))" strokeWidth="0.5" opacity="0.4" />
    
    {/* Circles at intersections */}
    <circle cx="38" cy="38" r="8" stroke="hsl(var(--sacred-gold))" strokeWidth="1" fill="none" opacity="0.6" />
    <circle cx="62" cy="62" r="8" stroke="hsl(var(--sacred-gold))" strokeWidth="1" fill="none" opacity="0.6" />
    <circle cx="38" cy="62" r="4" fill="hsl(var(--sacred-gold))" opacity="0.4" />
    <circle cx="62" cy="38" r="4" fill="hsl(var(--sacred-gold))" opacity="0.4" />
  </svg>
);

// Linear Accent
export const LinearAccent = ({ className = "", width = 200 }: AccentElementProps) => (
  <svg
    width={width}
    height="4"
    viewBox={`0 0 ${width} 4`}
    className={`${className}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line x1="0" y1="2" x2={width} y2="2" stroke="hsl(var(--signal-glow))" strokeWidth="1" opacity="0.6" />
    <line x1="0" y1="2" x2={width} y2="2" stroke="hsl(var(--signal-glow))" strokeWidth="3" opacity="0.2" filter="blur(2px)" />
    <circle cx={width * 0.2} cy="2" r="1" fill="hsl(var(--sacred-gold))" opacity="0.8" />
    <circle cx={width * 0.8} cy="2" r="1" fill="hsl(var(--sacred-gold))" opacity="0.8" />
  </svg>
);