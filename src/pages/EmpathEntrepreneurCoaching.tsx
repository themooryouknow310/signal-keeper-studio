import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const EmpathEntrepreneurCoaching = () => {
  const scrollToApply = () => {
    const applySection = document.getElementById('apply');
    applySection?.scrollIntoView({ behavior: 'smooth' });
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is this program specifically for empaths and highly sensitive people?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! While Sacred Signal OS helps all spiritual entrepreneurs, this program track is specifically designed with the unique needs, challenges, and gifts of highly sensitive and empathic entrepreneurs in mind."
        }
      },
      {
        "@type": "Question",
        "name": "What if I'm struggling with boundaries in my current business?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Boundary challenges are one of the core issues we address. You'll learn how to create 'sacred containers' that protect your energy while delivering exceptional client results."
        }
      },
      {
        "@type": "Question",
        "name": "Can I really charge premium prices as a sensitive entrepreneur?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. Your sensitivity and intuitive abilities are premium skills. We'll show you how to price based on transformation value, not time, allowing you to serve fewer clients at higher rates."
        }
      },
      {
        "@type": "Question",
        "name": "What if traditional marketing and sales feel 'icky' to me?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "That's exactly why this program exists. We teach authentic attraction methods that feel good to you AND attract high-value clients who appreciate your sensitive approach."
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": window.location.origin
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Empath Entrepreneur Coaching",
        "item": window.location.href
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Empath Entrepreneur Coaching | Sacred Signal OS - Transform Sensitivity Into Success</title>
        <meta name="description" content="Transform your sensitivity into business success with Sacred Signal OS empath entrepreneur coaching. Authentic strategies for highly sensitive entrepreneurs ready to build thriving businesses without compromising their nature." />
        <meta name="keywords" content="empath entrepreneur coaching, highly sensitive person business coach, spiritual entrepreneur coaching, sensitive soul business mentor, intuitive entrepreneur coaching, empathic business coaching" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Barack El" />
        <link rel="canonical" href={window.location.href} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:title" content="Empath Entrepreneur Coaching | Sacred Signal OS" />
        <meta property="og:description" content="Transform your sensitivity into business success with Sacred Signal OS. Coaching specifically designed for highly sensitive entrepreneurs." />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={window.location.href} />
        <meta property="twitter:title" content="Empath Entrepreneur Coaching | Sacred Signal OS" />
        <meta property="twitter:description" content="Transform your sensitivity into business success with Sacred Signal OS coaching for highly sensitive entrepreneurs." />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        
        <main>
          {/* Hero Section */}
          <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/90" />
            
            <div className="relative z-10 container mx-auto px-4 text-center">
              <AnimatedSection delay={200}>
                <div className="max-w-4xl mx-auto">
                  {/* Premium Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-sm font-medium text-primary">For Empath Entrepreneurs</span>
                  </div>

                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-8 leading-tight">
                    Transform Your{" "}
                    <span className="text-primary bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                      Sensitivity
                    </span>{" "}
                    Into Success
                  </h1>

                  <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
                    Sacred Signal OS coaching specifically designed for highly sensitive entrepreneurs ready to build thriving businesses without compromising their authentic nature.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button 
                      size="lg" 
                      className="px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                      onClick={scrollToApply}
                    >
                      Start Your Transformation
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="px-8 py-6 text-lg font-semibold"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </section>

          {/* The Science Behind Empath Entrepreneurship */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <AnimatedSection>
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
                    The Science Behind Empath Entrepreneurship
                  </h2>
                  <div className="w-24 h-1 bg-primary mx-auto mb-8" />
                </div>

                <div className="max-w-4xl mx-auto">
                  <p className="text-lg mb-12 text-center text-muted-foreground">
                    Research shows that approximately 15-20% of the population are highly sensitive persons (HSPs), characterized by deeper processing of sensory information, increased empathy, and heightened emotional responsiveness. For empath entrepreneurs, these traits create both unique challenges and extraordinary opportunities in business.
                  </p>

                  <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <Card className="p-8 border-primary/20 bg-card/50 backdrop-blur-sm">
                      <CardContent className="p-0">
                        <h3 className="text-xl font-semibold text-primary mb-4">The Empath Advantage in Business</h3>
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold mb-2">Enhanced Intuition</h4>
                            <p className="text-muted-foreground">Empaths naturally pick up on subtle cues that others miss, allowing for deeper client understanding and more accurate business decisions.</p>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Authentic Connection</h4>
                            <p className="text-muted-foreground">The ability to create genuine emotional connections leads to higher client satisfaction and retention rates.</p>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Values-Driven Leadership</h4>
                            <p className="text-muted-foreground">Naturally align businesses with values, creating more sustainable and fulfilling ventures.</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="p-8 border-destructive/20 bg-card/50 backdrop-blur-sm">
                      <CardContent className="p-0">
                        <h3 className="text-xl font-semibold text-destructive mb-4">Common Challenges We Address</h3>
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold mb-2">Overwhelm and Burnout</h4>
                            <p className="text-muted-foreground">Traditional business advice doesn't account for empaths' need for processing time and energy management.</p>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Boundary Issues</h4>
                            <p className="text-muted-foreground">Struggling with saying no, undercharging, and taking on clients' emotional burdens.</p>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Inconsistent Income</h4>
                            <p className="text-muted-foreground">The tendency to undervalue services and over-deliver leads to financial instability.</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </section>

          {/* Sacred Signal OS Methodology */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <AnimatedSection>
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
                    The Sacred Signal OS Methodology for Empath Entrepreneurs
                  </h2>
                  <div className="w-24 h-1 bg-primary mx-auto mb-8" />
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Our proven framework combines ancient wisdom traditions with modern business psychology, specifically adapted for the unique needs of highly sensitive entrepreneurs.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                  <Card className="p-8 hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <h3 className="text-xl font-semibold text-primary mb-4">Phase 1: Foundation (Weeks 1-3)</h3>
                      <div className="space-y-3">
                        <p><strong>Empath Identity Integration:</strong> Learn to see your sensitivity as a business asset rather than a liability.</p>
                        <p><strong>Energy-Aligned Business Model:</strong> Design a business structure that works with your natural energy patterns.</p>
                        <p><strong>Sacred Boundaries Creation:</strong> Establish professional boundaries that protect your energy while maintaining deep client connections.</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="p-8 hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <h3 className="text-xl font-semibold text-primary mb-4">Phase 2: Attraction (Weeks 4-6)</h3>
                      <div className="space-y-3">
                        <p><strong>Authentic Messaging Development:</strong> Craft marketing messages that attract ideal clients without feeling salesy.</p>
                        <p><strong>Intuitive Content Creation:</strong> Develop content strategy based on energetic alignment rather than algorithmic manipulation.</p>
                        <p><strong>Sacred Story Alchemy:</strong> Transform your personal journey with sensitivity into your most powerful marketing asset.</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="p-8 hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <h3 className="text-xl font-semibold text-primary mb-4">Phase 3: Conversion (Weeks 7-9)</h3>
                      <div className="space-y-3">
                        <p><strong>Heart-Centered Sales Process:</strong> Develop sales approaches that feel authentic while closing deals at premium prices.</p>
                        <p><strong>Energetic Pricing Strategy:</strong> Price services based on transformation and energy investment, not time.</p>
                        <p><strong>Sacred Container Design:</strong> Create program structures that protect your energy while delivering exceptional client transformation.</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="p-8 hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <h3 className="text-xl font-semibold text-primary mb-4">Phase 4: Scaling (Weeks 10-12)</h3>
                      <div className="space-y-3">
                        <p><strong>Sustainable Growth Systems:</strong> Build business growth mechanisms that honor your need for depth over breadth.</p>
                        <p><strong>Community Building Mastery:</strong> Leverage your natural ability to create deep connections to build a loyal community.</p>
                        <p><strong>Intuitive Business Strategy:</strong> Develop decision-making processes that combine business logic with intuitive abilities.</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </AnimatedSection>
            </div>
          </section>

          {/* Success Metrics */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <AnimatedSection>
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
                    What Success Looks Like for Empath Entrepreneurs
                  </h2>
                  <div className="w-24 h-1 bg-primary mx-auto mb-8" />
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Success for empath entrepreneurs isn't just about revenue—it's about creating a business that honors your sensitivity while generating consistent, premium income.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
                  <Card className="p-8 hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <h3 className="text-xl font-semibold text-primary mb-4">Financial Outcomes</h3>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                          Consistent $5K-$15K monthly revenue
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                          Premium pricing ($2K-$10K+ programs)
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                          Predictable client pipeline
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                          Higher profit margins through efficiency
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                          Multiple revenue streams aligned with your gifts
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="p-8 hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <h3 className="text-xl font-semibold text-primary mb-4">Personal Outcomes</h3>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                          Reduced overwhelm and burnout
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                          Stronger professional boundaries
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                          Increased confidence and authority
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                          Better work-life integration
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                          Alignment between values and business
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <Card className="p-8 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20 max-w-4xl mx-auto">
                  <CardContent className="p-0 text-center">
                    <h3 className="text-2xl font-semibold mb-4">The Ultimate Goal</h3>
                    <p className="text-lg">
                      A thriving business that feels as good on the inside as it looks on the outside—where your sensitivity is celebrated, your boundaries are respected, and your income reflects the true value of your gifts.
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <AnimatedSection>
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
                    Frequently Asked Questions
                  </h2>
                  <div className="w-24 h-1 bg-primary mx-auto mb-8" />
                </div>

                <div className="max-w-3xl mx-auto">
                  <Accordion type="single" collapsible className="space-y-4">
                    <AccordionItem value="item-1" className="border border-border rounded-lg px-6">
                      <AccordionTrigger className="text-left">
                        Is this program specifically for empaths and highly sensitive people?
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        Yes! While Sacred Signal OS helps all spiritual entrepreneurs, this program track is specifically designed with the unique needs, challenges, and gifts of highly sensitive and empathic entrepreneurs in mind.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2" className="border border-border rounded-lg px-6">
                      <AccordionTrigger className="text-left">
                        What if I'm struggling with boundaries in my current business?
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        Boundary challenges are one of the core issues we address. You'll learn how to create 'sacred containers' that protect your energy while delivering exceptional client results.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3" className="border border-border rounded-lg px-6">
                      <AccordionTrigger className="text-left">
                        Can I really charge premium prices as a sensitive entrepreneur?
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        Absolutely. Your sensitivity and intuitive abilities are premium skills. We'll show you how to price based on transformation value, not time, allowing you to serve fewer clients at higher rates.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4" className="border border-border rounded-lg px-6">
                      <AccordionTrigger className="text-left">
                        What if traditional marketing and sales feel 'icky' to me?
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        That's exactly why this program exists. We teach authentic attraction methods that feel good to you AND attract high-value clients who appreciate your sensitive approach.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </AnimatedSection>
            </div>
          </section>

          {/* CTA Section */}
          <section id="apply" className="py-20 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4">
              <AnimatedSection>
                <div className="text-center max-w-4xl mx-auto">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
                    Ready to Transform Your Sensitivity Into Your Superpower?
                  </h2>
                  <p className="text-lg mb-12 opacity-90 max-w-3xl mx-auto">
                    The journey from struggling empath entrepreneur to thriving, authentic business owner starts with a single decision. You've already taken the first step by recognizing that traditional business advice doesn't work for sensitive souls like us.
                  </p>

                  <Card className="p-8 bg-primary-foreground/10 border-primary-foreground/20 backdrop-blur-sm mb-12">
                    <CardContent className="p-0">
                      <h3 className="text-xl font-semibold mb-6">Your Next Steps:</h3>
                      <div className="grid md:grid-cols-2 gap-6 text-left">
                        <div>
                          <p className="mb-4"><strong>1. Complete Your Application:</strong> Tell us about your current business situation and sensitivity challenges</p>
                          <p><strong>2. Values Alignment Assessment:</strong> Ensure Sacred Signal OS is the right fit for your goals and values</p>
                        </div>
                        <div>
                          <p className="mb-4"><strong>3. Discovery Call:</strong> Connect with our team to discuss your specific needs and answer any questions</p>
                          <p><strong>4. Begin Your Transformation:</strong> Join the next Sacred Signal OS cohort and start building your authentic business</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Button 
                    size="lg" 
                    variant="secondary"
                    className="px-12 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 mb-6"
                  >
                    Start Your Application Today
                  </Button>

                  <p className="text-sm opacity-80">
                    <em>Limited spots available • Rolling start • Investment begins at $1,497</em>
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default EmpathEntrepreneurCoaching;