interface SignalLineDividerProps {
  className?: string;
}

const SignalLineDivider = ({ className = "" }: SignalLineDividerProps) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      {/* Left line */}
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-signal/30 to-signal/60" />
      
      {/* Center signal wave */}
      <div className="mx-8 relative">
        <svg 
          width="64" 
          height="24" 
          viewBox="0 0 64 24" 
          className="text-signal"
        >
          {/* Animated signal wave */}
          <path 
            d="M2 12c8-6 16 6 24 0s16 6 24 0s8-6 12 0" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            className="animate-pulse opacity-60"
          />
          
          {/* Traveling dots */}
          <circle 
            cx="16" 
            cy="12" 
            r="1.5" 
            fill="currentColor" 
            className="animate-[signalTravel_3s_ease-in-out_infinite]"
          />
          <circle 
            cx="32" 
            cy="12" 
            r="1.5" 
            fill="currentColor" 
            className="animate-[signalTravel_3s_ease-in-out_infinite_0.5s]"
          />
          <circle 
            cx="48" 
            cy="12" 
            r="1.5" 
            fill="currentColor" 
            className="animate-[signalTravel_3s_ease-in-out_infinite_1s]"
          />
        </svg>
      </div>
      
      {/* Right line */}
      <div className="flex-1 h-px bg-gradient-to-l from-transparent via-signal/30 to-signal/60" />
    </div>
  );
};

export default SignalLineDivider;