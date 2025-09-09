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
    <section id="apply" className="py-20 lg:py-32 relative">
      {/* Background Elements */}
      <div className="absolute top-20 left-20 opacity-10">
        <SignalRing size={150} />
      </div>
      <div className="absolute bottom-20 right-20 opacity-5">
        <SacredGeometry size={100} />
      </div>

      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <SignalRing size={80} className="mx-auto mb-8" />
          <h2 className="heading-ritual text-3xl md:text-5xl mb-6">
            READY TO STOP SHOUTING
            <br />
            <span className="text-signal">AND START BEING HEARD?</span>
          </h2>
          <p className="body-sacred text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Transform your scattered efforts into a resonant signal that attracts your ideal clients with ease and authenticity.
          </p>
        </div>

        {/* Main CTA Card */}
        <div className="max-w-4xl mx-auto mb-20">
          <Card className="bg-card border border-signal/30 p-8 md:p-12 text-center sacred-border">
            <div className="mb-8">
              <SacredGeometry size={60} className="mx-auto mb-6" />
              <h3 className="heading-ritual text-2xl md:text-3xl mb-4">
                APPLY FOR SACRED SIGNAL OS
              </h3>
              <p className="body-sacred text-lg text-foreground/80 mb-6">
                12 weeks • High-touch coaching • Complete transformation
              </p>
              <div className="text-4xl md:text-5xl font-display font-bold text-signal mb-2">
                $1,497
              </div>
              <p className="body-sacred text-foreground/70">
                Payment plans available
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <Button 
                size="lg"
                className="signal-glow bg-signal text-background hover:bg-signal/90 font-body font-semibold px-12 py-4 text-lg transition-all duration-300 w-full sm:w-auto"
              >
                Apply Now - Sacred Signal OS
              </Button>
              <p className="body-sacred text-sm text-foreground/60">
                Applications reviewed within 48 hours
              </p>
            </div>

            <div className="bg-background/50 rounded-lg p-6 text-left">
              <h4 className="font-display text-lg font-semibold text-foreground mb-3">
                What happens next:
              </h4>
              <div className="space-y-2 text-sm text-foreground/80">
                <div className="flex items-center space-x-2">
                  <SacredGeometry size={12} />
                  <span>Complete application & values alignment assessment</span>
                </div>
                <div className="flex items-center space-x-2">
                  <SacredGeometry size={12} />
                  <span>Brief discovery call to ensure mutual fit</span>
                </div>
                <div className="flex items-center space-x-2">
                  <SacredGeometry size={12} />
                  <span>Receive program materials & community access</span>
                </div>
                <div className="flex items-center space-x-2">
                  <SacredGeometry size={12} />
                  <span>Begin your 12-week transformation</span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <h3 className="heading-ritual text-2xl md:text-3xl mb-12 text-center">
            FREQUENTLY ASKED QUESTIONS
          </h3>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card 
                key={index}
                className="bg-card border border-border/50 p-6 hover:border-brass/30 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <SignalRing size={20} className="flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-display text-lg font-semibold text-foreground mb-3">
                      {faq.question}
                    </h4>
                    <p className="body-sacred text-foreground/80 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16">
          <div className="mb-8">
            <p className="heading-ritual text-xl md:text-2xl text-foreground mb-4">
              Your voice deserves to cut through noise and carry with power.
            </p>
            <div className="w-32 h-0.5 bg-brass mx-auto" />
          </div>
          
          <Button 
            size="lg"
            className="signal-glow bg-signal text-background hover:bg-signal/90 font-body font-semibold px-12 py-4 text-lg transition-all duration-300"
          >
            Begin Your Transformation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ApplySection;