interface SacredGeometryProps {
  className?: string;
  size?: number;
  animated?: boolean;
}

const SacredGeometry = ({ 
  className = "", 
  size = 40, 
  animated = false 
}: SacredGeometryProps) => {
  return (
    <div 
      className={`inline-flex items-center justify-center ${animated ? 'animate-pulse' : ''} ${className}`}
      style={{ width: size, height: size }}
    >
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 100 100" 
        className="text-brass drop-shadow-lg"
      >
        {/* Outer circle */}
        <circle 
          cx="50" 
          cy="50" 
          r="45" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1"
          opacity="0.6"
        />
        
        {/* Inner circles */}
        <circle 
          cx="50" 
          cy="50" 
          r="30" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1"
          opacity="0.8"
        />
        
        <circle 
          cx="50" 
          cy="50" 
          r="15" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.5"
        />
        
        {/* Eight-point star */}
        <path 
          d="M50 20 L55 40 L70 35 L60 50 L75 55 L55 60 L60 75 L50 65 L45 80 L40 60 L25 65 L35 50 L20 45 L40 40 L35 25 L50 35 Z" 
          fill="currentColor"
          opacity="0.7"
        />
        
        {/* Center point */}
        <circle 
          cx="50" 
          cy="50" 
          r="3" 
          fill="currentColor"
        />
      </svg>
    </div>
  );
};

export default SacredGeometry;