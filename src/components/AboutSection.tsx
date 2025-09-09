import SacredGeometry from "@/components/SacredGeometry";
import SignalRing from "@/components/SignalRing";

import { SacredMandala, EightPointStar, LinearAccent, GoldenRatioGrid } from "@/components/AccentElements";

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
    <section id="about" className="section-divider relative overflow-hidden">
      {/* Background Accent Elements */}
      <div className="absolute top-16 right-10 opacity-8">
        <SacredMandala size={100} />
      </div>
      <div className="absolute bottom-16 left-10 opacity-6">
        <EightPointStar size={60} />
      </div>
      <div className="absolute top-1/2 right-1/4 opacity-4">
        <GoldenRatioGrid size={80} />
      </div>
      
      {/* Background Elements */}
      <div className="absolute top-40 right-10 opacity-10">
        <SacredGeometry size={150} animated />
      </div>

      <div className="container mx-auto px-6">
        {/* Problem Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-8">
              <LinearAccent width={300} />
            </div>
            <h2 className="heading-ritual text-3xl md:text-5xl mb-6">
              THE SPIRITUAL ENTREPRENEUR'S DILEMMA
            </h2>
            <p className="body-sacred text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              You Have A Gift To Share, A Calling To Serve. But Right Now, Your Days Are Likely Filled With The Frustrating Reality Of Trying To Grow Your Business Online:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {problems.map((problem, index) => (
              <div 
                key={index}
                className="premium-card p-8 group"
              >
                <div className="flex items-start space-x-6">
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                    {problem.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="heading-section text-xl font-semibold text-foreground mb-4">
                      {problem.title}
                    </h3>
                    <p className="body-premium text-foreground/75 leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sacred Divider */}
        <div className="text-center mb-20 relative">
          <div className="flex items-center justify-center space-x-8">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-brass to-brass" />
            <div className="relative">
              <p className="heading-ritual text-2xl md:text-3xl text-signal px-6">
                IT DOESN'T HAVE TO BE THIS WAY
              </p>
              <div className="absolute -top-2 -bottom-2 -left-2 -right-2 border border-signal/20 rounded-lg"></div>
            </div>
            <div className="w-24 h-px bg-gradient-to-l from-transparent via-brass to-brass" />
          </div>
        </div>

        {/* Vision Section */}
        <div>
          <div className="text-center mb-16">
            <h2 className="heading-ritual text-3xl md:text-5xl mb-6">
              IMAGINE A BUSINESS WHERE...
            </h2>
          </div>

          <div className="space-y-12 max-w-5xl mx-auto">
            {outcomes.map((outcome, index) => (
              <div 
                key={index}
                className="premium-card p-8 group"
              >
                <div className="flex items-start space-x-8">
                  <div className="flex-shrink-0 mt-2 group-hover:scale-110 transition-transform duration-300">
                    <SignalRing size={50} />
                  </div>
                  <div className="flex-1">
                    <p className="body-premium text-lg md:text-xl leading-relaxed">
                      <span className="font-semibold text-foreground text-xl">{outcome.title}</span>
                      <br />
                      <span className="text-foreground/80 mt-2 block">{outcome.description}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="heading-ritual text-2xl md:text-3xl text-signal mb-4">
              THIS IS THE PROMISE OF SACRED SIGNAL OS
            </p>
            <div className="w-32 h-0.5 bg-brass mx-auto" />
            <div className="flex justify-center mt-4">
              <EightPointStar size={30} className="opacity-60" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;