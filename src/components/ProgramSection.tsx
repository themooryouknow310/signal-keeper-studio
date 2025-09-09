import Icon from "@/components/icons/Icon";
import BrassMedallion from "@/components/accents/BrassMedallion";
import BrassRule from "@/components/accents/BrassRule";
import SignalEclipse from "@/components/accents/SignalEclipse";

const ProgramSection = () => {
  const modules = [
    {
      icon: "target",
      title: "Niche & Positioning",
      description: "Understand your ideal customer profile and craft a resonant positioning kernel that cuts through noise."
    },
    {
      icon: "diamond", 
      title: "Offer Design",
      description: "Create an irresistible high-ticket program that delivers transformation and commands premium pricing."
    },
    {
      icon: "structure",
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
    <section id="program" className="section-divider relative overflow-hidden surface-dark">
      {/* Minimal Background Accents */}
      <div className="absolute top-20 left-16 opacity-20">
        <SignalEclipse size={120} />
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
          <BrassMedallion size={80} className="mx-auto mb-8">
            <Icon name="signal-ring" size={40} className="text-signal" />
          </BrassMedallion>
          <h2 className="heading-ritual text-4xl md:text-6xl mb-8">
            THE 12-WEEK SACRED SIGNAL OS PROGRAM
          </h2>
          <p className="body-premium text-xl md:text-2xl text-foreground max-w-4xl mx-auto leading-relaxed">
            A comprehensive coaching system that installs a calm, predictable pipeline for spiritual entrepreneurs.
          </p>
        </div>

        {/* Program Promise */}
        <div className="ssos-card p-10 md:p-16 mb-24 text-center border-signal/30 fade-up">
          <h3 className="heading-ritual text-3xl md:text-4xl mb-8 text-signal">
            PROGRAM PROMISE
          </h3>
          <p className="body-premium text-xl md:text-2xl leading-relaxed text-foreground max-w-4xl mx-auto">
            "In 12 Weeks, You Leave With A Brand People Repeat, A Program People Finish, 
            Proof That Buyers Trust, And A Content Loop That Fills Your Calendar—Without Losing Your Voice."
          </p>
        </div>

        {/* Key Modules Showcase */}
        <div className="mb-24 fade-up">
          <h3 className="heading-ritual text-3xl md:text-4xl mb-16 text-center">
            CORE TRANSFORMATION MODULES
          </h3>
          
          <div className="ssos-grid">
            {modules.map((module, index) => (
              <div 
                key={index}
                className="ssos-card text-center group relative overflow-hidden scale-hover"
              >
                <div className="absolute top-4 right-4 text-brass/40 font-display font-bold text-lg">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <BrassMedallion size={80} className="mb-8 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Icon name={module.icon} size={32} className="text-signal" />
                </BrassMedallion>
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
        <div className="mb-16 fade-up">
          <h3 className="heading-ritual text-2xl md:text-3xl mb-12 text-center">
            12-WEEK PROGRAM STRUCTURE
          </h3>
          
          <div className="ssos-grid">
            {weeks.map((week, index) => (
              <div 
                key={index}
                className="ssos-card scale-hover"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-brass font-display font-bold text-sm uppercase tracking-wide">
                    WEEK {index + 1}
                  </span>
                  <Icon name="signal-ring" size={16} className="text-signal" />
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
        <div className="ssos-card text-center max-w-4xl mx-auto fade-up">
          <h3 className="heading-ritual text-3xl md:text-4xl mb-8">
            INVESTMENT IN YOUR TRANSFORMATION
          </h3>
          
          <BrassMedallion size={120} className="mx-auto mb-8">
            <span className="font-display font-bold text-2xl text-signal">$1,497</span>
          </BrassMedallion>
          
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