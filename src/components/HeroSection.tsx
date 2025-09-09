import { Button } from "@/components/ui/button";
import SignalRing from "@/components/SignalRing";
import { EightPointStar } from "@/components/AccentElements";
import heroImage from "@/assets/cinema/hero-eclipse-rim.jpg";
import AnimatedSection from "@/components/AnimatedSection";
import "../styles/cinema.css";

const HeroSection = () => {
  const scrollToApply = () => {
    const element = document.getElementById('apply');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden cinema-surface-with-grain py-20">
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
      
      {/* Content */}
      <div className="cinema-text-overlay relative z-10 container mx-auto px-6 text-center max-w-6xl">
        {/* Main Headline with Cinematic Typography */}
        <AnimatedSection delay={200}>
          <h1 className="heading-display text-4xl md:text-6xl lg:text-7xl mb-16 leading-[0.95] max-w-5xl mx-auto tracking-tight cinema-text-shadow">
            TIRED OF SHOUTING
            <br />
            <span className="text-signal">
              INTO THE VOID?
            </span>
          </h1>
        </AnimatedSection>

        {/* Video Section with Cinematic Styling */}
        <AnimatedSection delay={400} className="mb-20 max-w-4xl mx-auto">
          <div className="cinema-hero relative aspect-video rounded-2xl cinema-surface overflow-hidden group">
            {/* Video Element */}
            <video 
              className="w-full h-full object-cover"
              poster={heroImage}
              controls
              preload="metadata"
            >
              <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
              <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
            
            {/* Video Overlay with Play Button (shows when paused) */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="w-16 h-16 bg-signal/20 border border-signal rounded-full flex items-center justify-center backdrop-blur-sm">
                <div className="w-0 h-0 border-l-[12px] border-l-signal border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-signal font-medium text-lg mb-2">Sacred Signal OS Introduction</p>
            <p className="text-foreground/60">Discover Your Path To Authentic Business Growth</p>
          </div>
        </AnimatedSection>

        {/* Cinematic Subheading Section */}
        <AnimatedSection delay={600} className="space-y-12 mb-16">
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
        </AnimatedSection>

        {/* Cinematic CTA Buttons */}
        <AnimatedSection delay={800} className="flex flex-col sm:flex-row gap-8 justify-center items-center">
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
        </AnimatedSection>

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