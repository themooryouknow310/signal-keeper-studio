import { Button } from "@/components/ui/button";
import SacredGeometry from "@/components/SacredGeometry";
import SignalRing from "@/components/SignalRing";

const ProgramSection = () => {
  const outcomes = [
    "A clear and resonant brand message that attracts your ideal clients",
    "A redesigned high-ticket offer that is irresistible to your ideal clients",
    "A sustainable LinkedIn content system that generates a consistent flow of qualified leads",
    "A repeatable, authentic sales process that converts leads into clients",
    "A library of compelling testimonials and case studies to increase your trust and social proof",
    "The confidence and clarity to grow your spiritual business with ease and grace"
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
    <section id="program" className="py-20 lg:py-32 relative">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 opacity-5">
        <SacredGeometry size={200} />
      </div>

      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <SignalRing size={60} className="mx-auto mb-8" />
          <h2 className="heading-ritual text-3xl md:text-5xl mb-6">
            THE 12-WEEK SACRED SIGNAL OS PROGRAM
          </h2>
          <p className="body-sacred text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            A comprehensive coaching system that installs a calm, predictable pipeline for spiritual entrepreneurs.
          </p>
        </div>

        {/* Program Promise */}
        <div className="bg-card border border-signal/20 rounded-lg p-8 md:p-12 mb-16 text-center sacred-border">
          <h3 className="heading-ritual text-2xl md:text-3xl mb-6 text-signal">
            PROGRAM PROMISE
          </h3>
          <p className="body-sacred text-lg md:text-xl leading-relaxed text-foreground/90">
            "In 12 weeks, you leave with a brand people repeat, a program people finish, 
            proof that buyers trust, and a content loop that fills your calendar—without losing your voice."
          </p>
        </div>

        {/* What You'll Achieve */}
        <div className="mb-20">
          <h3 className="heading-ritual text-2xl md:text-3xl mb-8 text-center">
            BY THE END OF OUR 12 WEEKS TOGETHER, YOU WILL HAVE:
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {outcomes.map((outcome, index) => (
              <div 
                key={index}
                className="flex items-start space-x-4 group"
              >
                <div className="flex-shrink-0 mt-1">
                  <SacredGeometry size={24} />
                </div>
                <p className="body-sacred text-foreground/90 leading-relaxed">
                  {outcome}
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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {weeks.map((week, index) => (
              <div 
                key={index}
                className="bg-card border border-border/50 rounded-lg p-6 hover:border-brass/30 transition-all duration-300 group"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-brass font-display font-bold text-sm">
                    WEEK {index + 1}
                  </span>
                  <SignalRing size={16} />
                </div>
                <h4 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-signal transition-colors">
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
        <div className="bg-card border border-signal/30 rounded-lg p-8 md:p-12 text-center">
          <h3 className="heading-ritual text-2xl md:text-3xl mb-6">
            INVESTMENT
          </h3>
          
          <div className="mb-8">
            <div className="text-5xl md:text-6xl font-display font-bold text-signal mb-4">
              $1,497
            </div>
            <p className="body-sacred text-foreground/80 text-lg">
              Complete 12-week transformation program
            </p>
          </div>

          <div className="space-y-4 mb-8 text-left max-w-md mx-auto">
            <div className="flex justify-between items-center border-b border-border/30 pb-2">
              <span className="body-sacred text-foreground/80">Pay in Full:</span>
              <span className="font-semibold text-foreground">$1,497</span>
            </div>
            <div className="flex justify-between items-center border-b border-border/30 pb-2">
              <span className="body-sacred text-foreground/80">2-Pay Option:</span>
              <span className="font-semibold text-foreground">2 x $799</span>
            </div>
            <div className="flex justify-between items-center border-b border-border/30 pb-2">
              <span className="body-sacred text-foreground/80">3-Pay Option:</span>
              <span className="font-semibold text-foreground">3 x $533</span>
            </div>
          </div>

          <Button 
            size="lg"
            className="signal-glow bg-signal text-background hover:bg-signal/90 font-body font-semibold px-12 py-4 text-lg transition-all duration-300"
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