import { Button } from "@/components/ui/button";
import SignalLineDivider from "@/components/accents/SignalLineDivider";
// Using uploaded image for hero background
const heroImage = "/lovable-uploads/5e65f76b-c53c-4660-818b-dd55f3548ea0.png";
import AnimatedSection from "@/components/AnimatedSection";
import { useState } from "react";
import "../styles/hero-enhancements.css";

const HeroSection = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  
  const navigateToApplication = () => {
    window.location.href = '/application';
  };

  return (
    <section className="hero-section min-h-screen flex items-center justify-center relative overflow-hidden py-20">
      {/* Enhanced Cinematic Background */}
      <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Sacred Signal OS - Transform Your Spiritual Business" 
            className="w-full h-full object-cover opacity-50"
            loading="eager"
            decoding="async"
          />
        {/* Multi-layer gradient for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/98 via-background/40 to-background/80" />
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-background/20 to-background/60" />
        {/* Subtle grain texture overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='27' cy='7' r='1'/%3E%3Ccircle cx='47' cy='7' r='1'/%3E%3Ccircle cx='7' cy='27' r='1'/%3E%3Ccircle cx='27' cy='27' r='1'/%3E%3Ccircle cx='47' cy='27' r='1'/%3E%3Ccircle cx='7' cy='47' r='1'/%3E%3Ccircle cx='27' cy='47' r='1'/%3E%3Ccircle cx='47' cy='47' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center max-w-6xl">
        {/* Enhanced Headline with Better Visual Hierarchy */}
        <AnimatedSection delay={200}>
          <h1 className="heading-ritual text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-16 leading-[0.85]">
            <div className="hero-shout text-foreground drop-shadow-2xl" style={{
              textShadow: `
                0 0 40px hsl(var(--signal-glow) / 0.4),
                0 8px 32px hsl(var(--background) / 0.9),
                0 4px 16px hsl(var(--background) / 0.8)
              `
            }}>
              TIRED OF SHOUTING <span className="text-signal glow-text animate-pulse">INTO THE VOID?</span>
            </div>
          </h1>
        </AnimatedSection>

        {/* Enhanced Video Section */}
        <AnimatedSection delay={400} className="mb-20 max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-2xl overflow-hidden group shadow-2xl" style={{
            boxShadow: `
              0 25px 50px -12px hsl(var(--background) / 0.8),
              0 0 60px hsl(var(--signal-glow) / 0.1),
              inset 0 1px 0 hsl(var(--foreground) / 0.1)
            `
          }}>
            {/* Video Loading State */}
            {!isVideoLoaded && (
              <div className="absolute inset-0 bg-card/50 flex items-center justify-center backdrop-blur-sm">
                <div className="animate-spin w-8 h-8 border-2 border-signal/30 border-t-signal rounded-full"></div>
              </div>
            )}
            
            {/* Enhanced Video Element */}
            <video 
              className="w-full h-full object-cover transition-opacity duration-500"
              poster={heroImage}
              controls
              preload="metadata"
              onLoadedData={() => setIsVideoLoaded(true)}
              style={{
                filter: 'contrast(1.1) saturate(1.1)'
              }}
            >
            <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Enhanced Video Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-signal/10 border-2 border-signal/60 rounded-full flex items-center justify-center backdrop-blur-md transform scale-75 group-hover:scale-100 transition-all duration-300">
                  <div className="w-0 h-0 border-l-[16px] border-l-signal border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1 drop-shadow-lg"></div>
                </div>
              </div>
            </div>
          </div>
          
            {/* Video Title Section */}
            <div className="text-center mt-8 space-y-3 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-signal/10 to-transparent blur-2xl"></div>
              <div className="relative z-10">
                <p className="text-signal font-medium text-lg glow-text">Sacred Signal OS Introduction</p>
                <p className="text-foreground/70 font-light text-base">Discover Your Path To Authentic Business Growth</p>
              </div>
            </div>
        </AnimatedSection>

        {/* Enhanced Subheading Section */}
        <AnimatedSection delay={600} className="space-y-12 mb-16">
          <div className="relative max-w-5xl mx-auto">
            <p className="body-premium text-xl sm:text-2xl md:text-3xl text-foreground max-w-4xl mx-auto leading-relaxed font-light" style={{
              textShadow: '0 4px 16px hsl(var(--background) / 0.7)'
            }}>
              For The Spiritual Entrepreneur Who Is Ready To Stop Chasing Clients And Start Attracting Them.
            </p>
            
            {/* Enhanced Signal Line Divider */}
            <div className="mt-12 mb-8">
              <SignalLineDivider />
            </div>
          </div>
          
          <p className="body-premium text-lg sm:text-xl md:text-2xl text-foreground/90 max-w-4xl mx-auto leading-relaxed font-light" style={{
            textShadow: '0 4px 16px hsl(var(--background) / 0.7)'
          }}>
            Install A Calm, Predictable Pipeline To Attract, Convert, And Enroll{' '}
            <span className="text-signal font-semibold glow-text">3-5 New High-Ticket Clients Per Month</span>, 
            Without Paid Ads Or Content Burnout.
          </p>
        </AnimatedSection>

        {/* Enhanced CTA Button */}
        <AnimatedSection delay={800} className="flex justify-center items-center">
          <Button 
            size="lg"
            className="group relative bg-transparent border-2 border-signal text-signal hover:bg-signal hover:text-background font-body font-semibold px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl overflow-hidden animate-pulse"
            onClick={navigateToApplication}
            style={{
              boxShadow: '0 0 30px hsl(var(--signal-glow) / 0.3), 0 0 60px hsl(var(--signal-glow) / 0.1)'
            }}
          >
            {/* Button glow effect */}
            <div className="absolute inset-0 bg-signal/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
            <span className="relative z-10">BEGIN YOUR TRANSFORMATION</span>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default HeroSection;