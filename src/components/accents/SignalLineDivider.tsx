import MetatronsCube from "./MetatronsCube";

interface SignalLineDividerProps {
  className?: string;
}

const SignalLineDivider = ({ className = "" }: SignalLineDividerProps) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      {/* Left line */}
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-signal/30 to-signal/60" />
      
      {/* Center Metatron's Cube */}
      <div className="mx-8 relative">
        <MetatronsCube size={48} className="drop-shadow-lg" />
      </div>
      
      {/* Right line */}
      <div className="flex-1 h-px bg-gradient-to-l from-transparent via-signal/30 to-signal/60" />
    </div>
  );
};

export default SignalLineDivider;