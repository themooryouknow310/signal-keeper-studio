import { ReactNode } from 'react';

interface CinemaTestimonialFrameProps {
  children: ReactNode;
  size?: number;
  className?: string;
}

const CinemaTestimonialFrame = ({ 
  children, 
  size = 120, 
  className = "" 
}: CinemaTestimonialFrameProps) => {
  return (
    <div 
      className={`cinema-testimonial-frame ${className}`}
      style={{ width: size, height: size }}
    >
      {children}
    </div>
  );
};

export default CinemaTestimonialFrame;