import Icon from "@/components/icons/Icon";
import BrassRule from "@/components/accents/BrassRule";
import CyanSLogo from "@/components/accents/CyanSLogo";
import { Link } from "react-router-dom";

const Navigation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <CyanSLogo size={32} />
          <span className="font-display text-xl font-semibold tracking-wider text-brass hover:text-signal hover:glow-text transition-all duration-300">
            SACRED SIGNAL OS
          </span>
        </div>

        {/* Centered Navigation Links */}
        <div className="flex-1 flex justify-center">
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-brass hover:text-signal hover:glow-text hover:scale-105 transition-all duration-300 font-display font-semibold tracking-wider"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('program')}
              className="text-brass hover:text-signal hover:glow-text hover:scale-105 transition-all duration-300 font-display font-semibold tracking-wider"
            >
              Program
            </button>
            <Link 
              to="/origin-story-studio"
              className="text-brass hover:text-signal hover:glow-text hover:scale-105 transition-all duration-300 font-display font-semibold tracking-wider"
            >
              Origin Story Studio
            </Link>
            <button 
              onClick={() => scrollToSection('founder')}
              className="text-brass hover:text-signal hover:glow-text hover:scale-105 transition-all duration-300 font-display font-semibold tracking-wider"
            >
              Founder
            </button>
          </div>
        </div>

        {/* Apply Button */}
        <div className="hidden md:block">
          <button 
            onClick={() => scrollToSection('apply')}
            className="bg-[hsl(43_85%_65%)] text-[hsl(var(--ssos-indigo))] hover:bg-[hsl(43_90%_70%)] font-bold tracking-wide px-8 py-2.5 rounded-lg transition-all duration-300 hover:scale-110 border-2 border-[hsl(43_90%_75%)]"
          >
            Apply Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            className="bg-[hsl(43_85%_65%)] text-[hsl(var(--ssos-indigo))] hover:bg-[hsl(43_90%_70%)] font-bold tracking-wide px-6 py-2 rounded-lg transition-all duration-300 hover:scale-110 border-2 border-[hsl(43_90%_75%)]"
            onClick={() => scrollToSection('apply')}
          >
            Apply
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;