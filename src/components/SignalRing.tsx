interface SignalRingProps {
  className?: string;
  size?: number;
}

const SignalRing = ({ className = "", size = 60 }: SignalRingProps) => {
  return (
    <div 
      className={`inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 100 100" 
        className="text-signal signal-glow"
      >
        {/* Outer signal ring */}
        <circle 
          cx="50" 
          cy="50" 
          r="40" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
          opacity="0.4"
          className="animate-ping"
        />
        
        {/* Middle signal ring */}
        <circle 
          cx="50" 
          cy="50" 
          r="25" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
          opacity="0.6"
        />
        
        {/* Inner signal ring */}
        <circle 
          cx="50" 
          cy="50" 
          r="10" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="3"
          opacity="0.8"
        />
        
        {/* Signal center */}
        <circle 
          cx="50" 
          cy="50" 
          r="4" 
          fill="currentColor"
        />
      </svg>
    </div>
  );
};

export default SignalRing;