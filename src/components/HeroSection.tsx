import { Button } from "@/components/ui/button";
import SignalRing from "@/components/SignalRing";
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

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
        {/* Signal Icon */}
        <div className="mb-8">
          <SignalRing size={80} className="mx-auto" />
        </div>

        {/* Main Headline */}
        <h1 className="heading-display text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
          TIRED OF SHOUTING
          <br />
          <span className="text-signal">INTO THE VOID?</span>
        </h1>

        {/* Subheading */}
        <div className="space-y-4 mb-8">
          <p className="body-sacred text-xl md:text-2xl text-foreground/90 max-w-3xl mx-auto leading-relaxed">
            For the spiritual entrepreneur who is ready to stop chasing clients and start attracting them.
          </p>
          
          <div className="w-24 h-0.5 bg-brass mx-auto my-8" />
          
          <p className="body-sacred text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
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