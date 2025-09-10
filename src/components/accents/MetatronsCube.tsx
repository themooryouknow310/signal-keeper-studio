interface MetatronsCubeProps {
  className?: string;
  size?: number;
}

const MetatronsCube = ({ className = "", size = 48 }: MetatronsCubeProps) => {
  return (
    <div className={`inline-flex items-center justify-center ${className}`}>
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 100 100" 
        className="text-signal animate-[metatronRotate_25s_linear_infinite]"
      >
        {/* Outer hexagon circles */}
        <circle cx="50" cy="20" r="6" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.8" />
        <circle cx="75" cy="35" r="6" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.8" />
        <circle cx="75" cy="65" r="6" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.8" />
        <circle cx="50" cy="80" r="6" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.8" />
        <circle cx="25" cy="65" r="6" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.8" />
        <circle cx="25" cy="35" r="6" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.8" />
        
        {/* Inner hexagon circles */}
        <circle cx="50" cy="32" r="4" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.9" />
        <circle cx="65" cy="42" r="4" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.9" />
        <circle cx="65" cy="58" r="4" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.9" />
        <circle cx="50" cy="68" r="4" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.9" />
        <circle cx="35" cy="58" r="4" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.9" />
        <circle cx="35" cy="42" r="4" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.9" />
        
        {/* Center circle */}
        <circle cx="50" cy="50" r="3" fill="currentColor" opacity="1" className="animate-pulse" />
        
        {/* Connecting lines - outer to inner hexagon */}
        <line x1="50" y1="20" x2="50" y2="32" stroke="currentColor" strokeWidth="0.5" opacity="0.6" />
        <line x1="75" y1="35" x2="65" y2="42" stroke="currentColor" strokeWidth="0.5" opacity="0.6" />
        <line x1="75" y1="65" x2="65" y2="58" stroke="currentColor" strokeWidth="0.5" opacity="0.6" />
        <line x1="50" y1="80" x2="50" y2="68" stroke="currentColor" strokeWidth="0.5" opacity="0.6" />
        <line x1="25" y1="65" x2="35" y2="58" stroke="currentColor" strokeWidth="0.5" opacity="0.6" />
        <line x1="25" y1="35" x2="35" y2="42" stroke="currentColor" strokeWidth="0.5" opacity="0.6" />
        
        {/* Inner hexagon to center */}
        <line x1="50" y1="32" x2="50" y2="50" stroke="currentColor" strokeWidth="0.5" opacity="0.7" />
        <line x1="65" y1="42" x2="50" y2="50" stroke="currentColor" strokeWidth="0.5" opacity="0.7" />
        <line x1="65" y1="58" x2="50" y2="50" stroke="currentColor" strokeWidth="0.5" opacity="0.7" />
        <line x1="50" y1="68" x2="50" y2="50" stroke="currentColor" strokeWidth="0.5" opacity="0.7" />
        <line x1="35" y1="58" x2="50" y2="50" stroke="currentColor" strokeWidth="0.5" opacity="0.7" />
        <line x1="35" y1="42" x2="50" y2="50" stroke="currentColor" strokeWidth="0.5" opacity="0.7" />
        
        {/* Outer hexagon interconnections */}
        <line x1="50" y1="20" x2="75" y2="35" stroke="currentColor" strokeWidth="0.3" opacity="0.4" />
        <line x1="75" y1="35" x2="75" y2="65" stroke="currentColor" strokeWidth="0.3" opacity="0.4" />
        <line x1="75" y1="65" x2="50" y2="80" stroke="currentColor" strokeWidth="0.3" opacity="0.4" />
        <line x1="50" y1="80" x2="25" y2="65" stroke="currentColor" strokeWidth="0.3" opacity="0.4" />
        <line x1="25" y1="65" x2="25" y2="35" stroke="currentColor" strokeWidth="0.3" opacity="0.4" />
        <line x1="25" y1="35" x2="50" y2="20" stroke="currentColor" strokeWidth="0.3" opacity="0.4" />
        
        {/* Inner hexagon interconnections */}
        <line x1="50" y1="32" x2="65" y2="42" stroke="currentColor" strokeWidth="0.4" opacity="0.5" />
        <line x1="65" y1="42" x2="65" y2="58" stroke="currentColor" strokeWidth="0.4" opacity="0.5" />
        <line x1="65" y1="58" x2="50" y2="68" stroke="currentColor" strokeWidth="0.4" opacity="0.5" />
        <line x1="50" y1="68" x2="35" y2="58" stroke="currentColor" strokeWidth="0.4" opacity="0.5" />
        <line x1="35" y1="58" x2="35" y2="42" stroke="currentColor" strokeWidth="0.4" opacity="0.5" />
        <line x1="35" y1="42" x2="50" y2="32" stroke="currentColor" strokeWidth="0.4" opacity="0.5" />
        
        {/* Diagonal connections for full Metatron's Cube */}
        <line x1="50" y1="20" x2="25" y2="65" stroke="currentColor" strokeWidth="0.2" opacity="0.3" />
        <line x1="75" y1="35" x2="50" y2="80" stroke="currentColor" strokeWidth="0.2" opacity="0.3" />
        <line x1="75" y1="65" x2="25" y2="35" stroke="currentColor" strokeWidth="0.2" opacity="0.3" />
      </svg>
    </div>
  );
};

export default MetatronsCube;