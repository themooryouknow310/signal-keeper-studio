import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, Mail, Clock, Sparkles } from "lucide-react";
import Navigation from "@/components/Navigation";

const OriginStoryThankYou = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background/95 to-background">
      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="pt-24 pb-16">
        {/* Hero Content - Closer to Menu */}
        <div className="container mx-auto px-6 pt-12">
          <div className="max-w-2xl mx-auto text-center">
            {/* Success Icon */}
            <div className="mb-8">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-primary" />
              </div>
              <h1 className="heading-ritual text-4xl md:text-6xl lg:text-7xl mb-8 leading-none glow-text">
                You're In!
              </h1>
              <p className="body-premium text-2xl md:text-3xl text-foreground leading-relaxed font-light cinema-text-shadow mb-8">
                Welcome to the Origin Story Studio. Your journey to crafting a compelling origin story starts now.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section Container - More Space Above */}
        <div className="container mx-auto px-6 pt-24">
          <div className="max-w-2xl mx-auto">

            {/* Next Steps */}
            <div className="bg-card border border-border rounded-2xl p-8 mb-8 text-center">
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                What Happens Next?
              </h2>
              <div className="space-y-6 text-left">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Check Your Email</h3>
                  <p className="text-muted-foreground">
                    I've sent you the Origin Story Studio access link. It should arrive within the next few minutes.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Clock className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Set Aside 10-15 Minutes</h3>
                  <p className="text-muted-foreground">
                    The Origin Story Studio is designed to help you craft your compelling origin story in under 15 minutes.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Sparkles className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Transform Your Message</h3>
                  <p className="text-muted-foreground">
                    Use your new origin story to connect authentically with your dream clients and build deeper trust.
                  </p>
                </div>
              </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <p className="text-muted-foreground mb-6">
                Ready to dive deeper into building your sacred signal?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/dream-client-sprint">
                  <Button size="lg" className="w-full sm:w-auto">
                    Book Dream Client Sprint
                  </Button>
                </Link>
                <Link to="/">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    Explore Sacred Signal OS
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OriginStoryThankYou;