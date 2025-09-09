import { Button } from "@/components/ui/button";
import SacredGeometry from "@/components/SacredGeometry";

const Navigation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <SacredGeometry size={32} />
          <span className="font-display text-xl font-bold tracking-wider text-foreground">
            SACRED SIGNAL OS
          </span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-foreground/80 hover:text-signal transition-colors font-body"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('program')}
            className="text-foreground/80 hover:text-signal transition-colors font-body"
          >
            Program
          </button>
          <button 
            onClick={() => scrollToSection('founder')}
            className="text-foreground/80 hover:text-signal transition-colors font-body"
          >
            Founder
          </button>
          <Button 
            variant="outline"
            className="sacred-border bg-transparent border-signal text-signal hover:bg-signal hover:text-background transition-all duration-300"
            onClick={() => scrollToSection('apply')}
          >
            Apply Now
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button 
            variant="outline"
            size="sm"
            className="border-signal text-signal hover:bg-signal hover:text-background"
            onClick={() => scrollToSection('apply')}
          >
            Apply
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;