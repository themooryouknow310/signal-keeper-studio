import { ReactNode } from 'react';

interface BrassMedallionProps {
  children: ReactNode;
  size?: number;
  className?: string;
}

const BrassMedallion = ({ children, size = 48, className = "" }: BrassMedallionProps) => {
  return (
    <div 
      className={`brass-medallion ${className}`}
      style={{ width: size, height: size }}
    >
      {children}
    </div>
  );
};

export default BrassMedallion;