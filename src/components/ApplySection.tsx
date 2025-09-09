import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import SacredGeometry from "@/components/SacredGeometry";
import SignalRing from "@/components/SignalRing";

const ApplySection = () => {
  const faqs = [
    {
      question: "Who is this program for?",
      answer: "Spiritual entrepreneurs (coaches, healers, guides) who are skilled in their craft but struggle with business and marketing aspects. You should have 1-3 years of business experience with sporadic income between $2k-$5k per month."
    },
    {
      question: "What if I'm not on LinkedIn?",
      answer: "While we focus on LinkedIn as the primary platform, the principles of clear messaging, authentic offer creation, and systematic client attraction work across all platforms. We'll help you adapt the system to your preferred channel."
    },
    {
      question: "What kind of results can I expect?",
      answer: "While results vary based on individual effort and market conditions, our goal is to help you achieve consistent $5k-$10k months with a predictable client pipeline. We cannot guarantee specific income but provide proven systems and frameworks."
    },
    {
      question: "What is the time commitment?",
      answer: "Expect 5-8 hours per week including: weekly 90-120 minute live sessions, implementation work, and participation in office hours. This is a high-touch, implementation-focused program requiring active participation."
    },
    {
      question: "Do you offer refunds?",
      answer: "Due to the high-touch nature and immediate access to valuable intellectual property, there are no refunds. We're committed to your success and provide extensive support throughout the 12 weeks."
    }
  ];

  return (
    <section id="apply" className="section-divider relative overflow-hidden bg-gradient-to-b from-background via-card/20 to-background">
      {/* Background Elements */}
      <div className="absolute top-20 left-20 opacity-10">
        <SignalRing size={150} />
      </div>
      <div className="absolute bottom-20 right-20 opacity-5">
        <SacredGeometry size={100} />
      </div>

      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <SignalRing size={100} className="mx-auto mb-10" />
          <h2 className="heading-ritual text-4xl md:text-6xl mb-8">
            READY TO STOP SHOUTING
            <br />
            <span className="text-signal glow-text">AND START BEING HEARD?</span>
          </h2>
          <p className="body-premium text-xl md:text-2xl text-foreground max-w-4xl mx-auto leading-relaxed">
            Transform Your Scattered Efforts Into A Resonant Signal That Attracts Your Ideal Clients With Ease And Authenticity.
          </p>
        </div>

        {/* Main CTA Card */}
        <div className="max-w-5xl mx-auto mb-24">
          <Card className="premium-card border-signal/40 p-12 md:p-16 text-center">
            <div className="mb-12">
              <SacredGeometry size={80} className="mx-auto mb-8" />
              <h3 className="heading-ritual text-3xl md:text-4xl mb-6">
                APPLY FOR SACRED SIGNAL OS
              </h3>
              <p className="body-premium text-xl text-foreground/90 mb-8">
                12 Weeks • High-Touch Coaching • Complete Transformation
              </p>
              <div className="text-5xl md:text-6xl font-display font-bold text-signal mb-4 glow-text">
                $1,497
              </div>
              <p className="body-premium text-foreground/80 text-lg">
                Payment Plans Available
              </p>
            </div>

            <div className="space-y-6 mb-12">
              <Button 
                size="lg"
                className="signal-glow bg-signal text-background hover:bg-signal/90 font-body font-semibold px-16 py-6 text-xl transition-all duration-300 w-full sm:w-auto"
              >
                Apply Now - Sacred Signal OS
              </Button>
              <p className="body-premium text-sm text-foreground/70">
                Applications Reviewed Within 48 Hours
              </p>
            </div>

            <div className="premium-card p-10 text-left bg-background/30 border border-signal/20">
              <h4 className="heading-section text-xl font-semibold text-foreground mb-8 flex items-center">
                <div className="w-2 h-2 bg-signal rounded-full mr-4"></div>
                What Happens Next:
              </h4>
              <div className="space-y-6 text-foreground/80">
                <div className="premium-card p-4 bg-card/20 border-l-4 border-signal/60">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-signal/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-signal font-bold text-sm">1</span>
                    </div>
                    <span className="body-premium font-medium">Complete Application & Values Alignment Assessment</span>
                  </div>
                </div>
                <div className="premium-card p-4 bg-card/20 border-l-4 border-brass/60">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-brass/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-brass font-bold text-sm">2</span>
                    </div>
                    <span className="body-premium font-medium">Brief Discovery Call To Ensure Mutual Fit</span>
                  </div>
                </div>
                <div className="premium-card p-4 bg-card/20 border-l-4 border-signal/60">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-signal/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-signal font-bold text-sm">3</span>
                    </div>
                    <span className="body-premium font-medium">Receive Program Materials & Community Access</span>
                  </div>
                </div>
                <div className="premium-card p-4 bg-card/20 border-l-4 border-brass/60">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-brass/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-brass font-bold text-sm">4</span>
                    </div>
                    <span className="body-premium font-medium">Begin Your 12-Week Transformation</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="max-w-5xl mx-auto">
          <h3 className="heading-ritual text-3xl md:text-4xl mb-16 text-center">
            FREQUENTLY ASKED QUESTIONS
          </h3>
          
          <div className="space-y-10">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="premium-card p-8 hover:border-brass/30 group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-signal to-brass opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="flex items-start space-x-8">
                  <div className="flex-shrink-0 mt-2">
                    <div className="w-12 h-12 bg-signal/20 rounded-full flex items-center justify-center group-hover:bg-signal/30 transition-colors duration-300">
                      <span className="text-signal font-bold text-lg">{index + 1}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="heading-section text-xl font-semibold text-foreground mb-6 group-hover:text-signal transition-colors duration-300">
                      {faq.question}
                    </h4>
                    <p className="body-premium text-foreground/80 leading-relaxed text-lg">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-24">
          <div className="mb-12">
            <p className="heading-ritual text-2xl md:text-3xl text-foreground mb-6">
              Your Voice Deserves To Cut Through Noise And Carry With Power.
            </p>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-20 h-px bg-gradient-to-r from-transparent to-brass"></div>
              <div className="w-3 h-3 bg-brass rounded-full"></div>
              <div className="w-20 h-px bg-gradient-to-l from-transparent to-brass"></div>
            </div>
          </div>
          
          <Button 
            size="lg"
            className="signal-glow bg-signal text-background hover:bg-signal/90 font-body font-semibold px-16 py-6 text-xl transition-all duration-300"
          >
            Begin Your Transformation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ApplySection;