import { Button } from "@/components/ui/button";
import SignalRing from "@/components/SignalRing";
import { SacredMandala, SignalWave, CrosshairTarget, EightPointStar, SacredSpiral } from "@/components/AccentElements";
import heroImage from "@/assets/sacred-geometry-hero.jpg";

const HeroSection = () => {
  const scrollToApply = () => {
    const element = document.getElementById('apply');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${heroImage})`,
          filter: 'brightness(0.3) contrast(1.2)'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background/90" />
      
      {/* Sacred Geometry Background Elements */}
      <div className="absolute top-20 left-20 opacity-20">
        <SignalRing size={120} />
      </div>
      <div className="absolute bottom-20 right-20 opacity-10">
        <SignalRing size={200} />
      </div>
      
      {/* Additional Accent Elements */}
      <div className="absolute top-32 right-32 opacity-15">
        <SacredMandala size={80} />
      </div>
      <div className="absolute bottom-32 left-32 opacity-12">
        <CrosshairTarget size={60} />
      </div>
      <div className="absolute top-1/2 left-10 opacity-8">
        <EightPointStar size={40} />
      </div>
      <div className="absolute top-1/3 right-10 opacity-10">
        <SacredSpiral size={50} />
      </div>
      <div className="absolute bottom-1/3 right-1/4 opacity-6">
        <SignalWave size={120} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
        {/* Signal Icon */}
        <div className="mb-8">
          <SignalRing size={80} className="mx-auto" />
        </div>

        {/* Main Headline */}
        <h1 className="heading-display text-5xl md:text-6xl lg:text-8xl mb-16 leading-tight max-w-5xl mx-auto">
          TIRED OF SHOUTING
          <br />
          <span className="text-signal glow-text">INTO THE VOID?</span>
        </h1>

        {/* Video Section */}
        <div className="mb-12 max-w-3xl mx-auto">
          <div className="relative aspect-video border-2 border-dashed border-signal/40 rounded-lg bg-background/5 backdrop-blur-sm flex items-center justify-center group hover:border-signal/60 transition-all duration-300">
            {/* Play Button */}
            <button className="w-20 h-20 bg-signal/20 border-2 border-signal rounded-full flex items-center justify-center group-hover:bg-signal/30 transition-all duration-300">
              <div className="w-0 h-0 border-l-[16px] border-l-signal border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1"></div>
            </button>
          </div>
          <div className="text-center mt-4">
            <p className="text-signal font-medium mb-2">Sacred Signal OS Introduction Video</p>
            <p className="text-foreground/60 text-sm">Video placeholder - Replace with your actual video embed</p>
          </div>
        </div>

        {/* Subheading */}
        <div className="space-y-8 mb-12">
          <div className="sacred-accent max-w-4xl mx-auto">
            <p className="body-premium text-xl md:text-2xl text-foreground max-w-3xl mx-auto leading-relaxed font-medium">
              For the spiritual entrepreneur who is ready to stop chasing clients and start attracting them.
            </p>
          </div>
          
          <div className="flex items-center justify-center space-x-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-brass"></div>
            <div className="w-2 h-2 bg-brass rounded-full"></div>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-brass"></div>
          </div>
          
          <p className="body-sacred text-lg md:text-xl text-foreground/85 max-w-3xl mx-auto leading-relaxed">
            Install a calm, predictable pipeline to attract, convert, and enroll 
            <span className="text-signal font-semibold"> 3-5 new high-ticket clients per month</span>, 
            without paid ads or content burnout.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            size="lg"
            className="signal-glow bg-signal text-background hover:bg-signal/90 font-body font-semibold px-8 py-4 text-lg transition-all duration-300"
            onClick={scrollToApply}
          >
            Apply for Sacred Signal OS
          </Button>
          
          <Button 
            variant="outline"
            size="lg"
            className="sacred-border bg-transparent border-brass text-brass hover:bg-brass hover:text-background font-body px-8 py-4 text-lg transition-all duration-300"
            onClick={() => {
              const element = document.getElementById('about');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Learn More
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-signal/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-signal/70 rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;