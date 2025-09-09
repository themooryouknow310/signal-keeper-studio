import { Button } from "@/components/ui/button";
import SignalRing from "@/components/SignalRing";
import { EightPointStar } from "@/components/AccentElements";
import heroImage from "@/assets/cinema/hero-eclipse-rim.jpg";
import "../styles/cinema.css";

const HeroSection = () => {
  const scrollToApply = () => {
    const element = document.getElementById('apply');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden cinema-surface-with-grain">
      {/* Cinematic Background */}
      <div className="cinema-hero absolute inset-0">
        <img 
          src={heroImage} 
          alt="Sacred Signal OS Eclipse" 
          className="w-full h-full object-cover"
        />
        <div className="cinema-hero-overlay" />
      </div>
      
      {/* Cinema Bloom Effect */}
      <div className="cinema-bloom absolute inset-0" />
      
      {/* Subtle Sacred Geometry Elements */}
      <div className="absolute top-20 left-20 opacity-30">
        <SignalRing size={80} />
      </div>
      <div className="absolute bottom-20 right-20 opacity-25">
        <EightPointStar size={60} />
      </div>

      {/* Content */}
      <div className="cinema-text-overlay relative z-10 container mx-auto px-6 text-center max-w-6xl">
        {/* Cinematic Signal Icon */}
        <div className="mb-16 relative motion-fade">
          <SignalRing size={100} className="mx-auto text-signal" />
        </div>

        {/* Main Headline with Cinematic Typography */}
        <h1 className="heading-display text-6xl md:text-7xl lg:text-9xl mb-20 leading-[0.9] max-w-6xl mx-auto tracking-tight cinema-text-shadow motion-fade">
          TIRED OF SHOUTING
          <br />
          <span className="text-signal">
            INTO THE VOID?
          </span>
        </h1>

        {/* Video Section with Cinematic Styling */}
        <div className="mb-20 max-w-4xl mx-auto motion-fade">
          <div className="cinema-hero relative aspect-video rounded-2xl cinema-surface flex items-center justify-center group motion-glow-hover overflow-hidden">
            {/* Play Button */}
            <button className="cinema-glow relative z-10 w-24 h-24 bg-signal/20 border-2 border-signal rounded-full flex items-center justify-center group-hover:bg-signal/30 transition-all duration-300">
              <div className="w-0 h-0 border-l-[20px] border-l-signal border-t-[15px] border-t-transparent border-b-[15px] border-b-transparent ml-2"></div>
            </button>
          </div>
          <div className="text-center mt-8">
            <p className="text-signal font-medium text-lg mb-2">Sacred Signal OS Introduction</p>
            <p className="text-foreground/60">Discover Your Path To Authentic Business Growth</p>
          </div>
        </div>

        {/* Cinematic Subheading Section */}
        <div className="space-y-12 mb-16 motion-fade">
          <div className="relative max-w-5xl mx-auto">
            <p className="body-premium text-2xl md:text-3xl text-foreground max-w-4xl mx-auto leading-relaxed font-light cinema-text-shadow">
              For The Spiritual Entrepreneur Who Is Ready To Stop Chasing Clients And Start Attracting Them.
            </p>
            
            {/* Brass Decorative Element */}
            <div className="flex items-center justify-center mt-12 mb-8">
              <div className="brass-rule w-24"></div>
              <div className="cinema-brass-medallion w-10 h-10 mx-6">
                <EightPointStar size={16} className="text-alabaster" />
              </div>
              <div className="brass-rule w-24"></div>
            </div>
          </div>
          
          <p className="body-premium text-xl md:text-2xl text-foreground/90 max-w-4xl mx-auto leading-relaxed font-light cinema-text-shadow">
            Install A Calm, Predictable Pipeline To Attract, Convert, And Enroll 
            <span className="text-signal font-medium"> 3-5 New High-Ticket Clients Per Month</span>, 
            Without Paid Ads Or Content Burnout.
          </p>
        </div>

        {/* Cinematic CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center motion-fade">
          <Button 
            size="lg"
            className="cinema-glow bg-transparent border-2 border-signal text-signal hover:bg-signal hover:text-background font-body font-medium px-12 py-6 text-xl motion-glow-hover rounded-full relative overflow-hidden group"
            onClick={scrollToApply}
          >
            <span className="relative z-10">BEGIN YOUR TRANSFORMATION</span>
            <div className="absolute inset-0 bg-signal opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </Button>
          
          <Button 
            variant="ghost"
            size="lg"
            className="text-foreground/80 hover:text-foreground font-body font-light px-8 py-6 text-lg motion-scale-hover border border-foreground/20 hover:border-foreground/40 rounded-full"
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