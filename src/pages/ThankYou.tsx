import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import BrassRule from "@/components/accents/BrassRule";
import { Link } from "react-router-dom";
import { CheckCircle, Mail, Calendar, Users, FileText } from "lucide-react";

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-signal/20">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-center">
            <h1 className="heading-ritual text-2xl md:text-3xl text-signal glow-text">
              Sacred Signal OS
            </h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Success Message */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 bg-signal/10 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="w-12 h-12 text-signal" />
              </div>
            </div>
            <div className="flex items-center justify-center mb-6">
              <BrassRule width={300} />
            </div>
            <h2 className="heading-ritual text-3xl md:text-5xl mb-6 glow-text text-signal">
              Welcome to Sacred Signal OS!
            </h2>
            <p className="body-premium text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed mb-8">
              Your order has been received and you're officially enrolled. 
              Get ready to transform your business over the next 12 weeks.
            </p>
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-signal/20 to-brass/20 rounded-full border border-signal/30">
              <span className="body-premium text-signal font-semibold">
                🎉 Your transformation journey begins now
              </span>
            </div>
          </div>

          {/* What Happens Next */}
          <div className="mb-12">
            <h3 className="heading-ritual text-2xl mb-8 text-center text-signal glow-text">
              What Happens Next
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Within 24 Hours */}
              <Card className="p-6 border-signal/20 bg-gradient-to-br from-signal/5 to-background">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-signal text-background rounded-full flex items-center justify-center font-display font-bold text-lg flex-shrink-0">
                    24h
                  </div>
                  <div>
                    <h4 className="heading-ritual text-lg mb-3 text-signal">Within 24 Hours</h4>
                    <ul className="space-y-2 body-premium text-sm text-foreground/80">
                      <li className="flex items-start space-x-2">
                        <Mail className="w-4 h-4 text-brass mt-0.5 flex-shrink-0" />
                        <span>Welcome email with program access details</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <FileText className="w-4 h-4 text-brass mt-0.5 flex-shrink-0" />
                        <span>Pre-work assessment to maximize your results</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>

              {/* Within 48 Hours */}
              <Card className="p-6 border-signal/20 bg-gradient-to-br from-brass/5 to-background">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brass text-background rounded-full flex items-center justify-center font-display font-bold text-lg flex-shrink-0">
                    48h
                  </div>
                  <div>
                    <h4 className="heading-ritual text-lg mb-3 text-brass">Within 48 Hours</h4>
                    <ul className="space-y-2 body-premium text-sm text-foreground/80">
                      <li className="flex items-start space-x-2">
                        <Calendar className="w-4 h-4 text-signal mt-0.5 flex-shrink-0" />
                        <span>Personal onboarding call scheduled</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <FileText className="w-4 h-4 text-signal mt-0.5 flex-shrink-0" />
                        <span>Week 1 materials and preparation guide</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Program Timeline */}
          <div className="mb-12">
            <h3 className="heading-ritual text-2xl mb-8 text-center text-signal glow-text">
              Your 12-Week Journey
            </h3>
            
            <div className="space-y-6">
              <Card className="p-6 border-signal/20">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-signal text-background rounded-full flex items-center justify-center font-display font-bold flex-shrink-0">
                    1-3
                  </div>
                  <div>
                    <h4 className="heading-ritual text-lg mb-2 text-signal">Weeks 1-3: Signal Clarity</h4>
                    <p className="body-premium text-sm text-foreground/80 leading-relaxed">
                      Define your core message, identify your dream client, and craft your origin story. 
                      Build the foundation of your authentic voice.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-signal/20">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-brass text-background rounded-full flex items-center justify-center font-display font-bold flex-shrink-0">
                    4-8
                  </div>
                  <div>
                    <h4 className="heading-ritual text-lg mb-2 text-brass">Weeks 4-8: Offer Architecture</h4>
                    <p className="body-premium text-sm text-foreground/80 leading-relaxed">
                      Design your signature program, create compelling content systems, and build 
                      trust-generating assets that convert naturally.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-signal/20">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-signal text-background rounded-full flex items-center justify-center font-display font-bold flex-shrink-0">
                    9-12
                  </div>
                  <div>
                    <h4 className="heading-ritual text-lg mb-2 text-signal">Weeks 9-12: Pipeline Installation</h4>
                    <p className="body-premium text-sm text-foreground/80 leading-relaxed">
                      Launch your lead generation system, optimize conversion flows, and establish 
                      sustainable growth processes for long-term success.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Important Reminders */}
          <div className="mb-12">
            <Card className="p-8 border-brass/30 bg-gradient-to-br from-brass/5 via-background/80 to-brass/10">
              <h3 className="heading-ritual text-xl mb-6 text-center text-brass glow-golden">
                Important Reminders
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-brass rounded-full mt-2 flex-shrink-0"></div>
                  <p className="body-premium text-sm text-foreground/80 leading-relaxed">
                    <strong>Check your email</strong> (including spam/promotions folders) for your welcome message and program access details.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-brass rounded-full mt-2 flex-shrink-0"></div>
                  <p className="body-premium text-sm text-foreground/80 leading-relaxed">
                    <strong>Complete your pre-work</strong> as soon as possible to maximize your program results.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-brass rounded-full mt-2 flex-shrink-0"></div>
                  <p className="body-premium text-sm text-foreground/80 leading-relaxed">
                    <strong>Join the community</strong> to connect with fellow entrepreneurs on the same journey.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-brass rounded-full mt-2 flex-shrink-0"></div>
                  <p className="body-premium text-sm text-foreground/80 leading-relaxed">
                    <strong>Questions?</strong> Reply to any program email or reach out to support@sacredsignalos.com
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="mb-8">
              <h3 className="heading-ritual text-2xl mb-4 text-signal glow-text">
                Ready to Begin Your Transformation?
              </h3>
              <p className="body-premium text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed">
                While you wait for your welcome email, take a moment to envision where 
                you'll be 12 weeks from now with a clear message and steady pipeline.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-signal text-background hover:bg-signal/90 font-semibold px-8 py-3">
                <Link to="/">Return to Homepage</Link>
              </Button>
              <Button variant="outline" asChild className="border-signal text-signal hover:bg-signal/10 font-semibold px-8 py-3">
                <Link to="/origin-story-studio">Explore Origin Story Studio</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ThankYou;