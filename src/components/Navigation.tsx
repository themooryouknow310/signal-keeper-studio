import Icon from "@/components/icons/Icon";
import BrassRule from "@/components/accents/BrassRule";
import SignalEclipse from "@/components/accents/SignalEclipse";

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
          <SignalEclipse size={32} />
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
          <button 
            onClick={() => scrollToSection('apply')}
            className="bg-[hsl(43_85%_65%)] text-[hsl(var(--ssos-indigo))] hover:bg-[hsl(43_90%_70%)] font-bold tracking-wide px-8 py-2.5 rounded-lg transition-all duration-300 hover:scale-110 shadow-[0_0_25px_hsl(43_85%_65%/.6),0_0_50px_hsl(43_85%_65%/.3)] hover:shadow-[0_0_35px_hsl(43_85%_65%/.8),0_0_70px_hsl(43_85%_65%/.4)] border-2 border-[hsl(43_90%_75%)] animate-[pulse_30s_ease-in-out_infinite]"
          >
            Apply Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            className="bg-[hsl(43_85%_65%)] text-[hsl(var(--ssos-indigo))] hover:bg-[hsl(43_90%_70%)] font-bold tracking-wide px-6 py-2 rounded-lg transition-all duration-300 hover:scale-110 shadow-[0_0_20px_hsl(43_85%_65%/.6),0_0_40px_hsl(43_85%_65%/.3)] hover:shadow-[0_0_30px_hsl(43_85%_65%/.8),0_0_60px_hsl(43_85%_65%/.4)] border-2 border-[hsl(43_90%_75%)]"
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