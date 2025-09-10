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
import spiritualMentorshipImage from "@/assets/cinema/spiritual-mentorship.jpg";

const ProgramSection = () => {
  const modules = [
    {
      image: nichePositioningImage,
      title: "NICHE CLARITY",
      subtitle: "Stop trying to help everyone and start magnetizing your perfect clients",
      description: "Cut through the noise of \"I help everyone\" messaging and discover the one problem you solve better than anyone else—creating instant recognition and premium positioning."
    },
    {
      image: offerDesignImage, 
      title: "IRRESISTIBLE OFFER ARCHITECTURE",
      subtitle: "Design a program so compelling, your ideal clients feel they can't afford NOT to work with you",
      description: "Move beyond hourly sessions to create a transformational container that commands 5-figure investments and delivers life-changing results."
    },
    {
      image: programArchitectureImage,
      title: "COMPLETION-DRIVEN PROGRAM DESIGN", 
      subtitle: "Build programs people actually finish—and rave about",
      description: "Engineer a client journey that creates inevitable success, turning every graduate into a walking testimonial and referral machine."
    },
    {
      image: storyMessageCraftImage,
      title: "MAGNETIC STORY ALCHEMY",
      subtitle: "Transform your personal journey into your most powerful sales tool",
      description: "Craft an origin story so resonant that prospects instantly see you as the guide they've been searching for—without a single sales pitch."
    },
    {
      image: visualIdentityImage,
      title: "PREMIUM VISUAL PRESENCE",
      subtitle: "Command respect and premium pricing through strategic visual authority",
      description: "Create a visual identity that whispers \"high-caliber professional\" while honoring your spiritual essence—no corporate soul-selling required."
    },
    {
      image: leadMagnetImage,
      title: "THE PERFECT PROSPECT MAGNET",
      subtitle: "Attract your ideal clients like moths to flame",
      description: "Design a lead magnet so valuable and targeted that your perfect prospects practically beg to get on your email list—and stay engaged."
    },
    {
      image: trafficStrategyImage,
      title: "INFINITE TRAFFIC BLUEPRINT",
      subtitle: "Never worry about where your next client will come from",
      description: "Build your personal \"Dream 100\" ecosystem that generates consistent, high-quality traffic without algorithm anxiety or paid ad dependency."
    },
    {
      image: contentStrategyImage,
      title: "AUTHORITY CONTENT ENGINE",
      subtitle: "Create content that builds your reputation while you sleep",
      description: "Develop a sustainable content system that positions you as the go-to expert in your field—no more posting and praying."
    },
    {
      image: writingNewslettersImage,
      title: "HIGH-CONVERSION COMMUNICATION",
      subtitle: "Master the art of writing that sells without selling",
      description: "Learn the proven formulas that turn casual readers into invested prospects—and prospects into premium clients."
    },
    {
      image: valueCommunicationImage,
      title: "SOCIAL PROOF MASTERY",
      subtitle: "Let your results do the talking",
      description: "Build an arsenal of compelling testimonials and case studies that make your expertise undeniable and your investment obvious."
    },
    {
      image: leadGenerationImage,
      title: "PROSPECT MAGNETISM",
      subtitle: "Make qualified leads chase you instead of the other way around",
      description: "Implement proven attraction strategies that fill your calendar with discovery calls—from people who are already convinced they need your help."
    },
    {
      image: audienceGrowthImage,
      title: "EXPONENTIAL GROWTH SYSTEMS",
      subtitle: "Scale your influence without losing your soul",
      description: "Build sustainable audience growth mechanisms that expand your reach while deepening your impact—creating a platform worthy of your message."
    }
  ];

  const scrollToApply = () => {
    const element = document.getElementById('apply');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="program" className="section-divider relative overflow-hidden surface-dark">
      {/* Minimal Background Accents */}

      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20 fade-up">
          <div className="flex items-center justify-center mb-8">
            <BrassRule width={300} />
          </div>
          <div className="w-[48rem] h-[32rem] mx-auto mb-8 rounded-2xl overflow-hidden border border-brass/30 shadow-[0_8px_32px_hsl(var(--signal-glow)/0.2)]">
            <img 
              src="/lovable-uploads/ffd03cb6-2004-4121-a7bb-650b4939fb8c.png" 
              alt="Sacred Signal OS Mentorship"
              className="w-full h-full object-cover object-top"
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
          <h3 className="heading-ritual text-3xl md:text-4xl mb-4 text-center glow-text">
            THE SACRED SIGNAL SYSTEM
          </h3>
          <p className="body-premium text-xl md:text-2xl text-foreground/80 text-center mb-16 max-w-4xl mx-auto">
            <strong>12 Precision Modules That Transform Scattered Efforts Into Predictable Revenue</strong>
          </p>
          
          <div className="px-12 md:px-24">
            <div className="ssos-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
              {modules.map((module, index) => (
                <div 
                  key={index}
                  className="ssos-card text-center group relative overflow-hidden scale-hover p-6"
                >
                  <div className="absolute top-3 right-3 text-brass/40 font-display font-bold text-sm">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div className="mb-6 mx-auto w-16 h-16 rounded-full overflow-hidden group-hover:scale-110 transition-transform duration-300 border-2 border-brass/30">
                    <img 
                      src={module.image} 
                      alt={module.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                <h3 className="heading-ritual text-xl glow-text mb-2">
                  {module.title}
                </h3>
                  <p className="body-premium text-foreground text-sm font-semibold mb-3">
                    {module.subtitle}
                  </p>
                  <p className="body-premium text-foreground/80 leading-relaxed text-xs">
                    {module.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* The Result Section */}
        <div className="ssos-card text-center max-w-4xl mx-auto mb-24 fade-up bg-gradient-to-br from-signal/5 via-background/80 to-signal/10 border-signal/30">
          <h3 className="heading-ritual text-2xl md:text-3xl mb-6 text-signal glow-text">
            The Result:
          </h3>
          <p className="body-premium text-xl md:text-2xl leading-relaxed text-foreground max-w-3xl mx-auto">
            A complete operating system that transforms spiritual entrepreneurs from best-kept secrets into sought-after authorities—with the revenue, respect, and reach to match their calling.
          </p>
        </div>

        {/* Investment Section */}
        <div className="ssos-card text-center max-w-4xl mx-auto fade-up">
          <h3 className="heading-ritual text-3xl md:text-4xl mb-8 glow-text">
            INVESTMENT IN YOUR TRANSFORMATION
          </h3>
          
          <div className="relative mb-8">
            <div className="bg-gradient-to-br from-signal/20 via-signal/10 to-transparent p-12 rounded-2xl border border-signal/30 backdrop-blur-sm shadow-[0_0_40px_hsl(var(--signal-glow)/0.3)]">
              <div className="text-center">
                <div className="heading-ritual text-2xl md:text-3xl mb-8 glow-text uppercase tracking-wider font-bold">Investment</div>
                <div className="text-5xl md:text-6xl font-display font-bold text-signal mb-2 glow-text">$1,497</div>
                <div className="w-16 h-px bg-signal/50 mx-auto shadow-[0_0_20px_hsl(var(--signal-glow)/0.5)]"></div>
              </div>
            </div>
          </div>
          
          <p className="body-premium text-foreground text-xl mb-12 font-bold">
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