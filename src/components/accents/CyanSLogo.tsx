interface CyanSLogoProps {
  size?: number;
  className?: string;
}

const CyanSLogo = ({ 
  size = 32, 
  className = "" 
}: CyanSLogoProps) => {
  return (
    <div 
      className={`relative overflow-hidden ${className}`}
      style={{ width: size, height: size }}
    >
      <img
        src="/lovable-uploads/9b735b7f-7d36-48fc-9934-0a95148fc23c.png"
        alt="Sacred Signal S Logo"
        className="absolute object-cover scale-150"
        style={{
          width: size * 2,
          height: size * 2,
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          objectPosition: 'left center'
        }}
      />
    </div>
  );
};

export default CyanSLogo;