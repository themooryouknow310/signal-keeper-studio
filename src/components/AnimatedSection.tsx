import { ReactNode, useState } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const AnimatedSection = ({ children, className = "", delay = 0 }: AnimatedSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const ref = useIntersectionObserver(
    (isIntersecting) => {
      if (isIntersecting) {
        setTimeout(() => setIsVisible(true), delay);
      }
    },
    { threshold: 0.1 }
  );

  return (
    <div 
      ref={ref} 
      className={`motion-fade ${isVisible ? 'is-in' : ''} ${className}`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;