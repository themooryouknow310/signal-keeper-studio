interface SignalEclipseProps {
  size?: number;
  className?: string;
  animated?: boolean;
}

const SignalEclipse = ({ 
  size = 60, 
  className = "",
  animated = false 
}: SignalEclipseProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={`text-signal/60 ${animated ? 'animate-[gentlePulse_3s_ease-in-out_infinite]' : ''} ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" opacity="0.3" />
      <path d="M12 2a10 10 0 0 0 0 20c5.523 0 10-4.477 10-10S17.523 2 12 2z" opacity="0.6" />
      <circle cx="12" cy="12" r="2" fill="currentColor" opacity="0.8" />
    </svg>
  );
};

export default SignalEclipse;