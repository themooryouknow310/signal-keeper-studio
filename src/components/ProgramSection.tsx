import { Button } from "@/components/ui/button";
import SacredGeometry from "@/components/SacredGeometry";
import { CrosshairTarget, SignalWave, SacredSpiral, LinearAccent } from "@/components/AccentElements";
import SignalRing from "@/components/SignalRing";

const ProgramSection = () => {
  const modules = [
    {
      icon: "🎯",
      title: "Niche & Positioning",
      description: "Understand your ideal customer profile and craft a resonant positioning kernel that cuts through noise."
    },
    {
      icon: "💎", 
      title: "Offer Design",
      description: "Create an irresistible high-ticket program that delivers transformation and commands premium pricing."
    },
    {
      icon: "🏗️",
      title: "Program Architecture", 
      description: "Design a program structure that clients actually complete, creating powerful testimonials and referrals."
    }
  ];

  const weeks = [
    { title: "Niche & Positioning", focus: "Understanding Your Ideal Customer Profile" },
    { title: "Offer Design", focus: "Understanding The Problem You Solve" },
    { title: "Program Architecture", focus: "Design A Program That People Finish" },
    { title: "Story & Message Craft", focus: "Create An Intentional Personal Brand" },
    { title: "Visual Identity", focus: "Look Premium, Stay You" },
    { title: "Lead Magnet & Funnel", focus: "Create An Enticing Lead Magnet" },
    { title: "Unlimited Traffic Strategy", focus: "Develop Your Dream 100" },
    { title: "Content Strategy", focus: "Purpose and Strategy Of Content Creation" },
    { title: "Writing & Newsletters", focus: "High Speed Quality Content Structure" },
    { title: "Value Communication", focus: "Create Social Proof" },
    { title: "Lead Generation", focus: "Make Your Offer Known" },
    { title: "Audience Growth", focus: "Expand Your Footprint & Scale" }
  ];

  const scrollToApply = () => {
    const element = document.getElementById('apply');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="program" className="section-divider relative overflow-hidden bg-gradient-to-b from-background via-card/10 to-background">
      {/* Background Accent Elements */}
      <div className="absolute top-20 left-16 opacity-6">
        <CrosshairTarget size={120} />
      </div>
      <div className="absolute bottom-20 right-16 opacity-8">
        <SacredSpiral size={100} />
      </div>
      <div className="absolute top-1/3 right-10 opacity-5">
        <SignalWave size={150} />
      </div>
      
      {/* Background Elements */}
      <div className="absolute top-20 left-10 opacity-5">
        <SacredGeometry size={200} />
      </div>

      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-8">
            <LinearAccent width={300} />
          </div>
          <SignalRing size={80} className="mx-auto mb-8" />
          <h2 className="heading-ritual text-4xl md:text-6xl mb-8">
            THE 12-WEEK SACRED SIGNAL OS PROGRAM
          </h2>
          <p className="body-premium text-xl md:text-2xl text-foreground max-w-4xl mx-auto leading-relaxed">
            A comprehensive coaching system that installs a calm, predictable pipeline for spiritual entrepreneurs.
          </p>
        </div>

        {/* Program Promise */}
        <div className="premium-card p-10 md:p-16 mb-24 text-center border-signal/30">
          <h3 className="heading-ritual text-3xl md:text-4xl mb-8 text-signal">
            PROGRAM PROMISE
          </h3>
          <p className="body-premium text-xl md:text-2xl leading-relaxed text-foreground max-w-4xl mx-auto">
            "In 12 Weeks, You Leave With A Brand People Repeat, A Program People Finish, 
            Proof That Buyers Trust, And A Content Loop That Fills Your Calendar—Without Losing Your Voice."
          </p>
        </div>

        {/* Key Modules Showcase */}
        <div className="mb-24">
          <h3 className="heading-ritual text-3xl md:text-4xl mb-16 text-center">
            CORE TRANSFORMATION MODULES
          </h3>
          
          <div className="ssos-grid">
            {modules.map((module, index) => (
              <div 
                key={index}
                className="ssos-card text-center group relative overflow-hidden"
              >
                <div className="absolute top-4 right-4 text-brass/40 font-display font-bold text-lg">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className="text-6xl mb-8 group-hover:scale-110 transition-transform duration-300">
                  {module.icon}
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

        {/* 12-Week Breakdown */}
        <div className="mb-16">
          <h3 className="heading-ritual text-2xl md:text-3xl mb-12 text-center">
            12-WEEK PROGRAM STRUCTURE
          </h3>
          
          <div className="ssos-grid">
            {weeks.map((week, index) => (
              <div 
                key={index}
                className="ssos-card"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-brass font-display font-bold text-sm uppercase tracking-wide">
                    WEEK {index + 1}
                  </span>
                  <SignalRing size={16} />
                </div>
                <h4 className="ssos-card-title text-lg mb-2">
                  {week.title}
                </h4>
                <p className="body-sacred text-sm text-foreground/70">
                  {week.focus}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Investment Section */}
        <div className="ssos-card text-center max-w-4xl mx-auto">
          <h3 className="heading-ritual text-3xl md:text-4xl mb-8">
            INVESTMENT IN YOUR TRANSFORMATION
          </h3>
          
          <div className="ssos-pricing-medallion mb-8">
            $1,497
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

          <Button 
            size="lg"
            className="signal-glow bg-signal text-background hover:bg-signal/90 font-body font-semibold px-16 py-6 text-xl transition-all duration-300"
            onClick={scrollToApply}
          >
            Apply Now for Sacred Signal OS
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;