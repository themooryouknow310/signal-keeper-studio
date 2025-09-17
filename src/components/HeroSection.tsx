import { Button } from "@/components/ui/button";
import SignalRing from "@/components/SignalRing";
import SignalLineDivider from "@/components/accents/SignalLineDivider";
import heroImage from "@/assets/cinema/hero-spiritual-teacher.jpg";
import AnimatedSection from "@/components/AnimatedSection";
import "../styles/cinema.css";

const HeroSection = () => {
  const navigateToApplication = () => {
    window.location.href = '/application';
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
      {/* Cinematic Background */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Sacred Signal OS Background" 
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/30 to-background/50" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center max-w-6xl">
        {/* Main Headline with Cinematic Typography */}
        <AnimatedSection delay={200}>
          <h1 className="heading-ritual text-4xl md:text-6xl lg:text-7xl xl:text-8xl mb-16 leading-none">
            <div className="hero-shout text-white mb-2">
              TIRED OF SHOUTING
            </div>
            <div className="hero-void text-signal">
              INTO THE VOID?
            </div>
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
              <source src="https://video.gumlet.io/64c74116333da2f3f158e7c0/68ca24e8d32bbf54d868a2eb/main.mp4" type="video/mp4" />
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
            
            {/* Signal Line Divider */}
            <div className="mt-12 mb-8">
              <SignalLineDivider />
            </div>
          </div>
          
          <p className="body-premium text-xl md:text-2xl text-foreground/90 max-w-4xl mx-auto leading-relaxed font-light cinema-text-shadow">
            Install A Calm, Predictable Pipeline To Attract, Convert, And Enroll 
            <span className="text-signal font-medium"> 3-5 New High-Ticket Clients Per Month</span>, 
            Without Paid Ads Or Content Burnout.
          </p>
        </AnimatedSection>

        {/* Cinematic CTA Button */}
        <AnimatedSection delay={800} className="flex justify-center items-center">
          <Button 
            size="lg"
            className="cinema-glow bg-transparent border-2 border-signal text-signal hover:bg-signal hover:text-background font-body font-medium px-12 py-6 text-xl motion-glow-hover rounded-full"
            onClick={navigateToApplication}
          >
            BEGIN YOUR TRANSFORMATION
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default HeroSection;