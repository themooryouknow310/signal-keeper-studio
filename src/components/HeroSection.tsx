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
      {/* Cinematic Background with Deep Mystical Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${heroImage})`,
          filter: 'brightness(0.2) contrast(1.4) saturate(1.2)'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/70 to-background" />
      
      {/* Mystical Glow Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-signal/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-brass/10 rounded-full blur-2xl"></div>
      </div>
      
      {/* Subtle Sacred Geometry Elements */}
      <div className="absolute top-20 left-20 opacity-8">
        <SignalRing size={100} />
      </div>
      <div className="absolute bottom-20 right-20 opacity-6">
        <SacredMandala size={120} />
      </div>
      <div className="absolute top-1/3 right-16 opacity-4">
        <EightPointStar size={60} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center max-w-6xl">
        {/* Mystical Signal Icon with Halo */}
        <div className="mb-16 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 bg-signal/10 rounded-full blur-2xl"></div>
          </div>
          <SignalRing size={100} className="mx-auto relative z-10" />
        </div>

        {/* Main Headline with Dramatic Typography */}
        <h1 className="heading-display text-6xl md:text-7xl lg:text-9xl mb-20 leading-[0.9] max-w-6xl mx-auto tracking-tight">
          TIRED OF SHOUTING
          <br />
          <span className="text-signal glow-text relative">
            INTO THE VOID?
            <div className="absolute inset-0 bg-gradient-to-b from-signal/20 to-transparent blur-xl scale-110 -z-10"></div>
          </span>
        </h1>

        {/* Video Section with Premium Styling */}
        <div className="mb-20 max-w-4xl mx-auto">
          <div className="relative aspect-video border border-signal/30 rounded-2xl bg-gradient-to-br from-background/20 to-card/30 backdrop-blur-md flex items-center justify-center group hover:border-signal/50 transition-all duration-500 overflow-hidden">
            {/* Ambient Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-signal/5 via-transparent to-brass/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Play Button */}
            <button className="relative z-10 w-24 h-24 bg-signal/20 border-2 border-signal rounded-full flex items-center justify-center group-hover:bg-signal/30 group-hover:scale-110 transition-all duration-300 backdrop-blur-sm">
              <div className="w-0 h-0 border-l-[20px] border-l-signal border-t-[15px] border-t-transparent border-b-[15px] border-b-transparent ml-2"></div>
            </button>
          </div>
          <div className="text-center mt-8">
            <p className="text-signal font-medium text-lg mb-2">Sacred Signal OS Introduction</p>
            <p className="text-foreground/60">Discover your path to authentic business growth</p>
          </div>
        </div>

        {/* Elegant Subheading Section */}
        <div className="space-y-12 mb-16">
          <div className="relative max-w-5xl mx-auto">
            <p className="body-premium text-2xl md:text-3xl text-foreground max-w-4xl mx-auto leading-relaxed font-light">
              For the spiritual entrepreneur who is ready to stop chasing clients and start attracting them.
            </p>
            
            {/* Decorative Element */}
            <div className="flex items-center justify-center mt-12 mb-8">
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-brass to-transparent"></div>
              <div className="mx-6">
                <EightPointStar size={20} className="text-brass" />
              </div>
              <div className="w-24 h-px bg-gradient-to-l from-transparent via-brass to-transparent"></div>
            </div>
          </div>
          
          <p className="body-premium text-xl md:text-2xl text-foreground/90 max-w-4xl mx-auto leading-relaxed font-light">
            Install a calm, predictable pipeline to attract, convert, and enroll 
            <span className="text-signal font-medium glow-text"> 3-5 new high-ticket clients per month</span>, 
            without paid ads or content burnout.
          </p>
        </div>

        {/* Mystical CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
          <Button 
            size="lg"
            className="bg-transparent border-2 border-signal text-signal hover:bg-signal hover:text-background font-body font-medium px-12 py-6 text-xl transition-all duration-500 backdrop-blur-sm rounded-full relative overflow-hidden group"
            onClick={scrollToApply}
          >
            <span className="relative z-10">BEGIN YOUR TRANSFORMATION</span>
            <div className="absolute inset-0 bg-signal opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </Button>
          
          <Button 
            variant="ghost"
            size="lg"
            className="text-foreground/80 hover:text-foreground font-body font-light px-8 py-6 text-lg transition-all duration-300 border border-foreground/20 hover:border-foreground/40 rounded-full"
            onClick={() => {
              const element = document.getElementById('about');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Explore the Journey
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