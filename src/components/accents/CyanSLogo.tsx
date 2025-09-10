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
      src="/lovable-uploads/ffd03cb6-2004-4121-a7bb-650b4939fb8c.png"
      alt="Sacred Signal OS Logo"
      width={size}
      height={size}
      className={`object-contain ${className}`}
    />
  );
};

export default CyanSLogo;