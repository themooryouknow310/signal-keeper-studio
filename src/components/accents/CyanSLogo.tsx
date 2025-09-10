interface CyanSLogoProps {
  size?: number;
  className?: string;
}

const CyanSLogo = ({ 
  size = 32, 
  className = "" 
}: CyanSLogoProps) => {
  return (
    <img
      src="/lovable-uploads/5ca86352-ff88-44a2-a9ba-b1da2125ae17.png"
      alt="Sacred Signal S Logo"
      width={size}
      height={size}
      className={`object-contain ${className}`}
    />
  );
};

export default CyanSLogo;