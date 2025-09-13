import contentTreadmillImage from "@/assets/cinema/content-treadmill-new.jpg";
import algorithmWhiplashImage from "@/assets/cinema/algorithm-whiplash-new.jpg";
import leakyFunnelImage from "@/assets/cinema/leaky-funnel-new.jpg";
import exhaustionBurnoutImage from "@/assets/cinema/exhaustion-burnout-new.jpg";
import clearResonantMessageImage from "@/assets/cinema/clear-resonant-message.jpg";
import compellingOfferImage from "@/assets/cinema/compelling-offer.jpg";
import sustainableContentImage from "@/assets/cinema/sustainable-content.jpg";
import authenticSalesImage from "@/assets/cinema/authentic-sales.jpg";

import { LinearAccent } from "@/components/AccentElements";

const AboutSection = () => {
  const problems = [
    {
      image: contentTreadmillImage,
      title: "THE ENDLESS CONTENT TREADMILL",
      description: "Creating post after post, hoping something will finally stick."
    },
    {
      image: algorithmWhiplashImage, 
      title: "THE ANXIETY OF ALGORITHM WHIPLASH",
      description: "Watching your reach and leads disappear overnight."
    },
    {
      image: leakyFunnelImage,
      title: "THE FRUSTRATION OF A LEAKY FUNNEL", 
      description: "Attracting followers who \"love your vibe\" but never buy."
    },
    {
      image: exhaustionBurnoutImage,
      title: "THE EXHAUSTION OF OVER-DELIVERING",
      description: "Feeling resentful and burnt out, wondering if you'll ever make a real living."
    }
  ];

  const outcomes = [
    {
      image: clearResonantMessageImage,
      title: "Your message is so clear and resonant",
      description: "that your ideal clients instantly know they're in the right place."
    },
    {
      image: compellingOfferImage,
      title: "Your offer is so compelling",
      description: "that it feels like an answer to their prayers."
    },
    {
      image: sustainableContentImage,
      title: "Your content system is so sustainable", 
      description: "that you can create a month's worth of high-impact content in a single day."
    },
    {
      image: authenticSalesImage,
      title: "Your sales process is so authentic",
      description: "that it feels like a natural extension of your spiritual work."
    }
  ];

  return (
    <section id="about" className="section-divider relative overflow-hidden">

      <div className="container mx-auto px-6">
        {/* Problem Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-8">
              <LinearAccent width={300} />
            </div>
            <h2 className="heading-ritual text-3xl md:text-5xl mb-6 glow-text">
              THE SPIRITUAL ENTREPRENEUR'S DILEMMA
            </h2>
            <p className="body-sacred text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              You Have A Gift To Share, A Calling To Serve. But Right Now, Your Days Are Likely Filled With The Frustrating Reality Of Trying To Grow Your Business Online:
            </p>
          </div>

          <div className="ssos-grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto dilemma-grid">
            {problems.map((problem, index) => (
              <div 
                key={index}
                className="ssos-card dilemma-card"
              >
                <div className="text-center">
                  <div className="w-48 h-32 mx-auto mb-6 rounded-lg overflow-hidden border border-brass/30">
                    <img 
                      src={problem.image} 
                      alt={problem.title}
                      className="w-full h-full object-cover cinema-image-teal"
                    />
                  </div>
                  <h3 className="ssos-card-title text-xl mb-4">
                    {problem.title}
                  </h3>
                  <p className="body-premium text-foreground/75 leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sacred Divider */}
        <div className="text-center mb-20 relative">
          <div className="flex items-center justify-center space-x-8">
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-brass to-brass" />
            <div className="relative">
              <p className="heading-ritual text-3xl md:text-4xl lg:text-5xl text-signal px-8 py-4 glow-text font-bold tracking-wider">
                IT DOESN&apos;T HAVE TO BE THIS WAY
              </p>
              <div className="absolute -top-4 -bottom-4 -left-4 -right-4 border-2 border-signal/30 rounded-xl shadow-[0_0_30px_hsl(var(--signal)/0.2)]"></div>
            </div>
            <div className="w-32 h-px bg-gradient-to-l from-transparent via-brass/70 to-brass shadow-[0_0_20px_hsl(var(--brass)/0.4)] relative">
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/20 to-white/10 blur-sm"></div>
            </div>
          </div>
        </div>

        {/* Vision Section */}
        <div>
          <div className="text-center mb-16">
            <h2 className="heading-ritual text-3xl md:text-5xl mb-6 glow-text">
              IMAGINE A BUSINESS WHERE...
            </h2>
          </div>

          <div className="ssos-grid grid-cols-1 max-w-5xl mx-auto">
            {outcomes.map((outcome, index) => (
              <div 
                key={index}
                className="ssos-card"
              >
                <div className="flex items-center space-x-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full overflow-hidden border border-brass/30">
                    <img 
                      src={outcome.image} 
                      alt={outcome.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="body-premium text-lg leading-relaxed">
                      <span className="font-semibold text-foreground text-xl">{outcome.title}</span>{" "}
                      <span className="text-foreground/80">{outcome.description}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="heading-ritual text-2xl md:text-3xl text-signal mb-4 glow-text">
              THIS IS THE PROMISE OF SACRED SIGNAL OS
            </p>
            <div className="flex items-center justify-center space-x-4">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-brass/30 to-brass/60 max-w-20"></div>
              <div className="relative">
                <div className="w-3 h-3 bg-brass transform rotate-45 shadow-[0_0_15px_hsl(var(--brass)/0.6)]"></div>
                <div className="absolute inset-0 w-3 h-3 bg-gradient-to-br from-white/20 to-transparent transform rotate-45"></div>
              </div>
              <div className="flex-1 h-px bg-gradient-to-l from-transparent via-brass/30 to-brass/60 max-w-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;