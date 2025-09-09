import SacredGeometry from "@/components/SacredGeometry";
import SignalRing from "@/components/SignalRing";

const AboutSection = () => {
  const problems = [
    {
      icon: "📱",
      title: "The endless content treadmill",
      description: "Creating post after post, hoping something will finally stick."
    },
    {
      icon: "📉", 
      title: "The anxiety of algorithm whiplash",
      description: "Watching your reach and leads disappear overnight."
    },
    {
      icon: "🕳️",
      title: "The frustration of a leaky funnel", 
      description: "Attracting followers who \"love your vibe\" but never buy."
    },
    {
      icon: "😵",
      title: "The exhaustion of over-delivering",
      description: "Feeling resentful and burnt out, wondering if you'll ever make a real living."
    }
  ];

  const outcomes = [
    {
      title: "Your message is so clear and resonant",
      description: "that your ideal clients instantly know they're in the right place."
    },
    {
      title: "Your offer is so compelling",
      description: "that it feels like an answer to their prayers."
    },
    {
      title: "Your content system is so sustainable", 
      description: "that you can create a month's worth of high-impact content in a single day."
    },
    {
      title: "Your sales process is so authentic",
      description: "that it feels like a natural extension of your spiritual work."
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-32 relative">
      {/* Background Elements */}
      <div className="absolute top-40 right-10 opacity-10">
        <SacredGeometry size={150} animated />
      </div>

      <div className="container mx-auto px-6">
        {/* Problem Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <SignalRing size={60} className="mx-auto mb-8" />
            <h2 className="heading-ritual text-3xl md:text-5xl mb-6">
              THE SPIRITUAL ENTREPRENEUR'S DILEMMA
            </h2>
            <p className="body-sacred text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              You have a gift to share, a calling to serve. But right now, your days are likely filled with the frustrating reality of trying to grow your business online:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {problems.map((problem, index) => (
              <div 
                key={index}
                className="bg-card border border-border/50 rounded-lg p-6 hover:border-signal/30 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <span className="text-3xl">{problem.icon}</span>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                      {problem.title}
                    </h3>
                    <p className="body-sacred text-foreground/70">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center space-x-6">
            <div className="w-20 h-0.5 bg-brass" />
            <p className="heading-ritual text-2xl md:text-3xl text-signal">
              IT DOESN'T HAVE TO BE THIS WAY
            </p>
            <div className="w-20 h-0.5 bg-brass" />
          </div>
        </div>

        {/* Vision Section */}
        <div>
          <div className="text-center mb-16">
            <h2 className="heading-ritual text-3xl md:text-5xl mb-6">
              IMAGINE A BUSINESS WHERE...
            </h2>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {outcomes.map((outcome, index) => (
              <div 
                key={index}
                className="flex items-start space-x-6 group"
              >
                <div className="flex-shrink-0 mt-1">
                  <SignalRing size={40} />
                </div>
                <div>
                  <p className="body-sacred text-lg md:text-xl leading-relaxed">
                    <span className="font-semibold text-foreground">{outcome.title}</span>{" "}
                    <span className="text-foreground/80">{outcome.description}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="heading-ritual text-2xl md:text-3xl text-signal mb-4">
              THIS IS THE PROMISE OF SACRED SIGNAL OS
            </p>
            <div className="w-32 h-0.5 bg-brass mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;