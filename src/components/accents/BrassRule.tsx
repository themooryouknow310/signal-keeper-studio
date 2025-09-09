interface BrassRuleProps {
  width?: number;
  className?: string;
  orientation?: 'horizontal' | 'vertical';
}

const BrassRule = ({ 
  width = 200, 
  className = "", 
  orientation = 'horizontal' 
}: BrassRuleProps) => {
  if (orientation === 'vertical') {
    return (
      <div 
        className={`brass-rule ${className}`}
        style={{ height: width, borderLeft: 'var(--ssos-line)', borderTop: 'none' }}
      />
    );
  }

  return (
    <div 
      className={`brass-rule ${className}`}
      style={{ width, borderTop: 'var(--ssos-line)' }}
    />
  );
};

export default BrassRule;