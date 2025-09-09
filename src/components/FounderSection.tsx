import Icon from "@/components/icons/Icon";
import BrassRule from "@/components/accents/BrassRule";
import CinemaTestimonialFrame from "@/components/cinema/CinemaTestimonialFrame";
import AnimatedSection from "@/components/AnimatedSection";
import "../styles/cinema.css";

const FounderSection = () => {
  const barackImage = "/lovable-uploads/13c76ad3-eb71-4bb2-a9bc-e10b2d3946aa.png";
  
  return (
    <section id="founder" className="py-32 cinema-surface-with-grain relative">
      <div className="cinema-grain absolute inset-0" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-20">
          <BrassRule className="mx-auto mb-8" />
          <h2 className="heading-display text-4xl md:text-5xl lg:text-6xl mb-6 glow-text">
            MEET YOUR GUIDE
          </h2>
          <p className="body-premium text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Barack El has guided over 1,200 spiritual entrepreneurs to authentic, sustainable growth
          </p>
        </AnimatedSection>

        {/* Founder Profile */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Photo */}
            <AnimatedSection delay={200} className="relative">
              <CinemaTestimonialFrame size={400} className="mx-auto">
                <img 
                  src={barackImage} 
                  alt="Barack El - Sacred Signal OS Founder" 
                  className="w-full h-full object-cover"
                />
              </CinemaTestimonialFrame>
            </AnimatedSection>

            {/* Content */}
            <AnimatedSection delay={400} className="space-y-8">
              <div>
                <h3 className="heading-display text-3xl md:text-4xl mb-4 cinema-text-shadow glow-text">
                  THE SIGNAL ARCHITECT
                </h3>
                <p className="body-premium text-lg text-foreground/90 leading-relaxed mb-6">
                  For over a decade, Barack has been developing the Sacred Signal methodology—a synthesis of 
                  ancient wisdom traditions and modern conversion psychology that creates authentic magnetic attraction.
                </p>
                <p className="body-premium text-lg text-foreground/90 leading-relaxed">
                  His clients don't just grow their businesses; they transform their entire relationship with 
                  prosperity, purpose, and the sacred art of service.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Philosophy Quote */}
        <AnimatedSection delay={600} className="text-center mt-20">
          <BrassRule className="mx-auto mb-8" />
          <blockquote className="text-2xl md:text-3xl font-light text-foreground/90 max-w-4xl mx-auto leading-relaxed cinema-text-shadow">
            "True wealth flows to those who stop chasing and start <em className="text-signal not-italic">resonating</em>. 
            The Sacred Signal OS teaches you to become the frequency your ideal clients are seeking."
          </blockquote>
          <cite className="block mt-6 text-brass font-medium tracking-wide">— Barack El, Founder</cite>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FounderSection;