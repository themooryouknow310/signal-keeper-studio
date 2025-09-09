import Icon from "@/components/icons/Icon";
import BrassMedallion from "@/components/accents/BrassMedallion";
import BrassRule from "@/components/accents/BrassRule";
import SignalEclipse from "@/components/accents/SignalEclipse";
import nichePositioningImage from "@/assets/cinema/niche-positioning.jpg";
import offerDesignImage from "@/assets/cinema/offer-design.jpg";
import programArchitectureImage from "@/assets/cinema/program-architecture.jpg";
import storyMessageCraftImage from "@/assets/cinema/story-message-craft.jpg";
import visualIdentityImage from "@/assets/cinema/visual-identity.jpg";
import leadMagnetImage from "@/assets/cinema/lead-magnet.jpg";
import trafficStrategyImage from "@/assets/cinema/traffic-strategy.jpg";
import contentStrategyImage from "@/assets/cinema/content-strategy.jpg";
import writingNewslettersImage from "@/assets/cinema/writing-newsletters.jpg";
import valueCommunicationImage from "@/assets/cinema/value-communication.jpg";
import leadGenerationImage from "@/assets/cinema/lead-generation.jpg";
import audienceGrowthImage from "@/assets/cinema/audience-growth.jpg";
import sacredProgramSymbolImage from "@/assets/cinema/sacred-program-symbol.jpg";
import background3DMandalaImage from "@/assets/cinema/background-3d-mandala.jpg";

const ProgramSection = () => {
  const modules = [
    {
      image: nichePositioningImage,
      title: "Niche & Positioning",
      description: "Understand your ideal customer profile and craft a resonant positioning kernel that cuts through noise."
    },
    {
      image: offerDesignImage, 
      title: "Offer Design",
      description: "Create an irresistible high-ticket program that delivers transformation and commands premium pricing."
    },
    {
      image: programArchitectureImage,
      title: "Program Architecture", 
      description: "Design a program structure that clients actually complete, creating powerful testimonials and referrals."
    },
    {
      image: storyMessageCraftImage,
      title: "Story & Message Craft",
      description: "Transform your personal story into a powerful brand narrative that positions you as the obvious choice for your ideal clients."
    },
    {
      image: visualIdentityImage,
      title: "Visual Identity",
      description: "Create a premium visual presence that reflects your spiritual essence while commanding respect and premium pricing."
    },
    {
      image: leadMagnetImage,
      title: "Lead Magnet & Funnel",
      description: "Design an irresistible lead magnet that attracts your ideal clients and builds a high-converting sales funnel."
    },
    {
      image: trafficStrategyImage,
      title: "Unlimited Traffic Strategy",
      description: "Develop your Dream 100 list and create sustainable systems for consistent, quality traffic to your offers."
    },
    {
      image: contentStrategyImage,
      title: "Content Strategy",
      description: "Build a purposeful content system that serves your audience, builds authority, and drives consistent sales."
    },
    {
      image: writingNewslettersImage,
      title: "Writing & Newsletters",
      description: "Master high-speed content creation with proven structures that engage readers and convert prospects into clients."
    },
    {
      image: valueCommunicationImage,
      title: "Value Communication",
      description: "Create compelling social proof and testimonials that demonstrate your transformational impact and build trust."
    },
    {
      image: leadGenerationImage,
      title: "Lead Generation",
      description: "Implement proven strategies to make your offer known and attract a steady stream of qualified prospects."
    },
    {
      image: audienceGrowthImage,
      title: "Audience Growth",
      description: "Scale your reach and expand your influence through strategic audience building and sustainable growth systems."
    }
  ];

  const scrollToApply = () => {
    const element = document.getElementById('apply');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="program" className="section-divider relative overflow-hidden surface-dark">
      {/* Minimal Background Accents */}
      <div className="absolute top-20 left-16 opacity-15">
        <div className="w-32 h-32 rounded-full overflow-hidden">
          <img 
            src={background3DMandalaImage} 
            alt="3D Sacred Mandala"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="absolute bottom-20 right-16 opacity-15">
        <Icon name="compass" size={100} className="text-brass" />
      </div>
      <div className="absolute top-1/3 right-10 opacity-10">
        <Icon name="signal-wave" size={150} className="text-signal" />
      </div>

      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20 fade-up">
          <div className="flex items-center justify-center mb-8">
            <BrassRule width={300} />
          </div>
          <div className="w-20 h-20 mx-auto mb-8 rounded-full overflow-hidden border-2 border-brass/30">
            <img 
              src={sacredProgramSymbolImage} 
              alt="Sacred Signal OS Program"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="heading-ritual text-4xl md:text-6xl mb-8 glow-text">
            THE 12-WEEK SACRED SIGNAL OS PROGRAM
          </h2>
          <p className="body-premium text-xl md:text-2xl text-foreground max-w-4xl mx-auto leading-relaxed">
            A comprehensive coaching system that installs a calm, predictable pipeline for spiritual entrepreneurs.
          </p>
        </div>

        {/* Program Promise */}
        <div className="ssos-card p-10 md:p-16 mb-24 text-center border-signal/30 fade-up">
          <h3 className="heading-ritual text-3xl md:text-4xl mb-8 text-signal glow-text">
            PROGRAM PROMISE
          </h3>
          <p className="body-premium text-xl md:text-2xl leading-relaxed text-foreground max-w-4xl mx-auto">
            "In 12 Weeks, You Leave With A Brand People Repeat, A Program People Finish, 
            Proof That Buyers Trust, And A Content Loop That Fills Your Calendar—Without Losing Your Voice."
          </p>
        </div>

        {/* Key Modules Showcase */}
        <div className="mb-24 fade-up">
          <h3 className="heading-ritual text-3xl md:text-4xl mb-16 text-center glow-text">
            12 CORE TRANSFORMATION MODULES
          </h3>
          
          <div className="ssos-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {modules.map((module, index) => (
              <div 
                key={index}
                className="ssos-card text-center group relative overflow-hidden scale-hover"
              >
                <div className="absolute top-4 right-4 text-brass/40 font-display font-bold text-lg">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className="mb-8 mx-auto w-20 h-20 rounded-full overflow-hidden group-hover:scale-110 transition-transform duration-300 border-2 border-brass/30">
                  <img 
                    src={module.image} 
                    alt={module.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="ssos-card-title text-2xl mb-6">
                  {module.title}
                </h3>
                <p className="body-premium text-foreground/80 leading-relaxed text-lg">
                  {module.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Investment Section */}
        <div className="ssos-card text-center max-w-4xl mx-auto fade-up">
          <h3 className="heading-ritual text-3xl md:text-4xl mb-8 glow-text">
            INVESTMENT IN YOUR TRANSFORMATION
          </h3>
          
          <div className="relative mb-8">
            <div className="bg-gradient-to-br from-signal/20 via-signal/10 to-transparent p-12 rounded-2xl border border-signal/30 backdrop-blur-sm shadow-[0_0_40px_hsl(var(--signal-glow)/0.3)]">
              <div className="text-center">
                <div className="text-sm uppercase tracking-wider text-brass font-bold mb-2">Investment</div>
                <div className="text-5xl md:text-6xl font-display font-bold text-signal mb-2 glow-text">$1,497</div>
                <div className="w-16 h-px bg-signal/50 mx-auto shadow-[0_0_20px_hsl(var(--signal-glow)/0.5)]"></div>
              </div>
            </div>
          </div>
          
          <p className="body-premium text-foreground text-xl mb-12">
            Complete 12-Week Transformation Program
          </p>

          <div className="ssos-grid grid-cols-1 md:grid-cols-3 mb-12">
            <div className="ssos-pricing-card is-featured">
              <div className="mb-4">
                <div className="text-2xl font-bold text-signal mb-2">$1,497</div>
                <div className="text-sm text-signal font-medium">Save $100</div>
              </div>
              <div className="body-premium text-foreground text-lg font-medium">Pay In Full</div>
            </div>
            
            <div className="ssos-pricing-card">
              <div className="mb-4">
                <div className="text-2xl font-bold text-foreground mb-2">2 × $799</div>
                <div className="text-sm text-foreground/60">Monthly</div>
              </div>
              <div className="body-premium text-foreground text-lg font-medium">2-Pay Option</div>
            </div>
            
            <div className="ssos-pricing-card">
              <div className="mb-4">
                <div className="text-2xl font-bold text-foreground mb-2">3 × $533</div>
                <div className="text-sm text-foreground/60">Monthly</div>
              </div>
              <div className="body-premium text-foreground text-lg font-medium">3-Pay Option</div>
            </div>
          </div>

          <button 
            className="bg-signal text-background hover:bg-signal/90 font-body font-semibold px-16 py-6 text-xl rounded-xl button-lift"
            onClick={scrollToApply}
          >
            Apply Now for Sacred Signal OS
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;