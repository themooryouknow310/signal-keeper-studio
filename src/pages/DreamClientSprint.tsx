import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";

const DreamClientSprint = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <AnimatedSection className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6 leading-tight">
                Dream Client Signal Sprint
              </h1>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-signal mb-6">
                Who's Your Dream Customer—and Where Do They Hang Out?
              </h2>
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-3xl mx-auto">
                In 30–60 minutes, we'll define your buyer and map the places they already gather—so you can meet them this week.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* What You'll Get */}
        <AnimatedSection className="py-16 px-4 bg-muted/20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                You'll Leave With:
              </h3>
              <div className="bg-card border border-border rounded-lg p-8 shadow-lg">
                <p className="text-xl font-display font-semibold text-signal">
                  A one-page Dream Customer Locate-&-Engage Map + your first 3 moves.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Pre-work Section */}
        <AnimatedSection className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6 text-center">
                Pre-work <span className="text-signal">(2 minutes)</span>
              </h3>
              <div className="bg-card border border-border rounded-lg p-8 shadow-lg">
                <ol className="space-y-4 text-lg">
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-signal text-signal-foreground font-bold text-sm mr-4 mt-1 flex-shrink-0">
                      1
                    </span>
                    <span>List 3 favorite past clients (bullets).</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-signal text-signal-foreground font-bold text-sm mr-4 mt-1 flex-shrink-0">
                      2
                    </span>
                    <span>Paste one competitor or leader your audience follows.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-signal text-signal-foreground font-bold text-sm mr-4 mt-1 flex-shrink-0">
                      3
                    </span>
                    <span>Share one channel you actually enjoy (LinkedIn, IG, groups, forums).</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Guarantee Section */}
        <AnimatedSection className="py-16 px-4 bg-muted/20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">
                Guarantee
              </h3>
              <div className="bg-card border border-signal/20 rounded-lg p-8 shadow-lg">
                <p className="text-lg leading-relaxed">
                  If we can't land a clear customer definition and at least three viable congregation points in 45 minutes, we'll simplify and ship the best working draft.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8">
              Ready to Find Your Dream Customers?
            </h3>
            <Button size="lg" className="text-lg px-8 py-4">
              Book Your Dream Client Signal Sprint
            </Button>
            <p className="text-sm text-foreground/60 mt-4">
              Free • 30-60 minutes • No pitch, just value
            </p>
          </div>
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
};

export default DreamClientSprint;