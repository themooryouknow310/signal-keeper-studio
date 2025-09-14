import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SignalLineDivider from "@/components/accents/SignalLineDivider";
import heroImage from "@/assets/cinema/hero-spiritual-teacher.jpg";
import "../styles/cinema.css";

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
          <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
            {/* Cinematic Background */}
            <div className="absolute inset-0">
              <img 
                src={heroImage} 
                alt="Empath Entrepreneur Coaching Background" 
                className="w-full h-full object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/30 to-background/50" />
            </div>
            
            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 text-center max-w-6xl">
              {/* Main Headline with Cinematic Typography */}
              <AnimatedSection delay={200}>
                <h1 className="heading-ritual text-4xl md:text-6xl lg:text-7xl xl:text-8xl mb-16 leading-none">
                  <div className="hero-shout text-white mb-2">
                    EMPATH ENTREPRENEUR
                  </div>
                  <div className="hero-void text-signal">
                    COACHING
                  </div>
                </h1>
              </AnimatedSection>

              {/* Cinematic Subheading Section */}
              <AnimatedSection delay={600} className="space-y-12 mb-16">
                <div className="relative max-w-5xl mx-auto">
                  <p className="body-premium text-2xl md:text-3xl text-foreground max-w-4xl mx-auto leading-relaxed font-light cinema-text-shadow">
                    Transform Your Sensitivity Into Your Greatest Business Superpower With Sacred Signal OS
                  </p>
                  
                  {/* Signal Line Divider */}
                  <div className="mt-12 mb-8">
                    <SignalLineDivider />
                  </div>
                </div>
                
                <p className="body-premium text-xl md:text-2xl text-foreground/90 max-w-4xl mx-auto leading-relaxed font-light cinema-text-shadow">
                  Authentic strategies for highly sensitive entrepreneurs ready to build 
                  <span className="text-signal font-medium"> thriving businesses</span> 
                  without compromising their nature.
                </p>
              </AnimatedSection>

              {/* Cinematic CTA Button */}
              <AnimatedSection delay={800} className="flex justify-center items-center">
                <Button 
                  size="lg"
                  className="cinema-glow bg-transparent border-2 border-signal text-signal hover:bg-signal hover:text-background font-body font-medium px-12 py-6 text-xl motion-glow-hover rounded-full"
                  onClick={scrollToApply}
                >
                  BEGIN YOUR TRANSFORMATION
                </Button>
              </AnimatedSection>
            </div>
          </section>

          {/* The Science Behind Empath Entrepreneurship */}
          <section className="py-32 relative overflow-hidden">
            {/* Cinematic Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
            
            <div className="relative z-10 container mx-auto px-6">
              <AnimatedSection>
                <div className="text-center mb-20">
                  <h2 className="heading-ritual text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-8 text-white cinema-text-shadow">
                    The Science Behind Empath Entrepreneurship
                  </h2>
                  <div className="flex justify-center mb-12">
                    <SignalLineDivider />
                  </div>
                  <p className="body-premium text-xl md:text-2xl text-foreground/90 max-w-4xl mx-auto leading-relaxed font-light cinema-text-shadow">
                    Research shows that approximately 15-20% of the population are highly sensitive persons (HSPs), characterized by deeper processing of sensory information, increased empathy, and heightened emotional responsiveness.
                  </p>
                </div>

                <div className="max-w-7xl mx-auto">
                  <div className="grid lg:grid-cols-2 gap-12 mb-20">
                    <AnimatedSection delay={200}>
                      <Card className="cinema-surface border-signal/20 bg-background/30 backdrop-blur-sm p-10 h-full">
                        <CardContent className="p-0">
                          <h3 className="text-2xl font-display font-semibold text-signal mb-8 flex items-center gap-3">
                            <div className="w-3 h-3 rounded-full bg-signal animate-pulse" />
                            The Empath Advantage in Business
                          </h3>
                          <div className="space-y-6">
                            <div className="border-l-2 border-signal/30 pl-6">
                              <h4 className="font-semibold mb-3 text-lg">Enhanced Intuition</h4>
                              <p className="text-muted-foreground leading-relaxed">Empaths naturally pick up on subtle cues that others miss, allowing for deeper client understanding and more accurate business decisions.</p>
                            </div>
                            <div className="border-l-2 border-signal/30 pl-6">
                              <h4 className="font-semibold mb-3 text-lg">Authentic Connection</h4>
                              <p className="text-muted-foreground leading-relaxed">The ability to create genuine emotional connections leads to higher client satisfaction and retention rates.</p>
                            </div>
                            <div className="border-l-2 border-signal/30 pl-6">
                              <h4 className="font-semibold mb-3 text-lg">Values-Driven Leadership</h4>
                              <p className="text-muted-foreground leading-relaxed">Naturally align businesses with values, creating more sustainable and fulfilling ventures.</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </AnimatedSection>

                    <AnimatedSection delay={400}>
                      <Card className="cinema-surface border-destructive/20 bg-background/30 backdrop-blur-sm p-10 h-full">
                        <CardContent className="p-0">
                          <h3 className="text-2xl font-display font-semibold text-destructive mb-8 flex items-center gap-3">
                            <div className="w-3 h-3 rounded-full bg-destructive animate-pulse" />
                            Common Challenges We Address
                          </h3>
                          <div className="space-y-6">
                            <div className="border-l-2 border-destructive/30 pl-6">
                              <h4 className="font-semibold mb-3 text-lg">Overwhelm and Burnout</h4>
                              <p className="text-muted-foreground leading-relaxed">Traditional business advice doesn't account for empaths' need for processing time and energy management.</p>
                            </div>
                            <div className="border-l-2 border-destructive/30 pl-6">
                              <h4 className="font-semibold mb-3 text-lg">Boundary Issues</h4>
                              <p className="text-muted-foreground leading-relaxed">Struggling with saying no, undercharging, and taking on clients' emotional burdens.</p>
                            </div>
                            <div className="border-l-2 border-destructive/30 pl-6">
                              <h4 className="font-semibold mb-3 text-lg">Inconsistent Income</h4>
                              <p className="text-muted-foreground leading-relaxed">The tendency to undervalue services and over-deliver leads to financial instability.</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </AnimatedSection>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </section>

          {/* Sacred Signal OS Methodology */}
          <section className="py-32 relative overflow-hidden">
            {/* Cinematic Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/80" />
            
            <div className="relative z-10 container mx-auto px-6">
              <AnimatedSection>
                <div className="text-center mb-20">
                  <h2 className="heading-ritual text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-8 text-white cinema-text-shadow">
                    The Sacred Signal OS Methodology
                  </h2>
                  <div className="flex justify-center mb-12">
                    <SignalLineDivider />
                  </div>
                  <p className="body-premium text-xl md:text-2xl text-foreground/90 max-w-4xl mx-auto leading-relaxed font-light cinema-text-shadow">
                    Our proven framework combines ancient wisdom traditions with modern business psychology, specifically adapted for the unique needs of highly sensitive entrepreneurs.
                  </p>
                </div>

                <div className="grid lg:grid-cols-2 xl:grid-cols-2 gap-8 max-w-7xl mx-auto">
                  <AnimatedSection delay={200}>
                    <Card className="cinema-surface border-signal/20 bg-background/30 backdrop-blur-sm p-8 hover:bg-background/40 transition-all duration-500 h-full">
                      <CardContent className="p-0">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-8 h-8 rounded-full bg-signal/20 flex items-center justify-center">
                            <span className="text-signal font-bold">1</span>
                          </div>
                          <h3 className="text-xl font-display font-semibold text-signal">Phase 1: Foundation (Weeks 1-3)</h3>
                        </div>
                        <div className="space-y-4">
                          <div className="border-l-2 border-signal/30 pl-4">
                            <p><strong className="text-foreground">Empath Identity Integration:</strong> <span className="text-muted-foreground">Learn to see your sensitivity as a business asset rather than a liability.</span></p>
                          </div>
                          <div className="border-l-2 border-signal/30 pl-4">
                            <p><strong className="text-foreground">Energy-Aligned Business Model:</strong> <span className="text-muted-foreground">Design a business structure that works with your natural energy patterns.</span></p>
                          </div>
                          <div className="border-l-2 border-signal/30 pl-4">
                            <p><strong className="text-foreground">Sacred Boundaries Creation:</strong> <span className="text-muted-foreground">Establish professional boundaries that protect your energy while maintaining deep client connections.</span></p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedSection>

                  <AnimatedSection delay={300}>
                    <Card className="cinema-surface border-signal/20 bg-background/30 backdrop-blur-sm p-8 hover:bg-background/40 transition-all duration-500 h-full">
                      <CardContent className="p-0">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-8 h-8 rounded-full bg-signal/20 flex items-center justify-center">
                            <span className="text-signal font-bold">2</span>
                          </div>
                          <h3 className="text-xl font-display font-semibold text-signal">Phase 2: Attraction (Weeks 4-6)</h3>
                        </div>
                        <div className="space-y-4">
                          <div className="border-l-2 border-signal/30 pl-4">
                            <p><strong className="text-foreground">Authentic Messaging Development:</strong> <span className="text-muted-foreground">Craft marketing messages that attract ideal clients without feeling salesy.</span></p>
                          </div>
                          <div className="border-l-2 border-signal/30 pl-4">
                            <p><strong className="text-foreground">Intuitive Content Creation:</strong> <span className="text-muted-foreground">Develop content strategy based on energetic alignment rather than algorithmic manipulation.</span></p>
                          </div>
                          <div className="border-l-2 border-signal/30 pl-4">
                            <p><strong className="text-foreground">Sacred Story Alchemy:</strong> <span className="text-muted-foreground">Transform your personal journey with sensitivity into your most powerful marketing asset.</span></p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedSection>

                  <AnimatedSection delay={400}>
                    <Card className="cinema-surface border-signal/20 bg-background/30 backdrop-blur-sm p-8 hover:bg-background/40 transition-all duration-500 h-full">
                      <CardContent className="p-0">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-8 h-8 rounded-full bg-signal/20 flex items-center justify-center">
                            <span className="text-signal font-bold">3</span>
                          </div>
                          <h3 className="text-xl font-display font-semibold text-signal">Phase 3: Conversion (Weeks 7-9)</h3>
                        </div>
                        <div className="space-y-4">
                          <div className="border-l-2 border-signal/30 pl-4">
                            <p><strong className="text-foreground">Heart-Centered Sales Process:</strong> <span className="text-muted-foreground">Develop sales approaches that feel authentic while closing deals at premium prices.</span></p>
                          </div>
                          <div className="border-l-2 border-signal/30 pl-4">
                            <p><strong className="text-foreground">Energetic Pricing Strategy:</strong> <span className="text-muted-foreground">Price services based on transformation and energy investment, not time.</span></p>
                          </div>
                          <div className="border-l-2 border-signal/30 pl-4">
                            <p><strong className="text-foreground">Sacred Container Design:</strong> <span className="text-muted-foreground">Create program structures that protect your energy while delivering exceptional client transformation.</span></p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedSection>

                  <AnimatedSection delay={500}>
                    <Card className="cinema-surface border-signal/20 bg-background/30 backdrop-blur-sm p-8 hover:bg-background/40 transition-all duration-500 h-full">
                      <CardContent className="p-0">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-8 h-8 rounded-full bg-signal/20 flex items-center justify-center">
                            <span className="text-signal font-bold">4</span>
                          </div>
                          <h3 className="text-xl font-display font-semibold text-signal">Phase 4: Scaling (Weeks 10-12)</h3>
                        </div>
                        <div className="space-y-4">
                          <div className="border-l-2 border-signal/30 pl-4">
                            <p><strong className="text-foreground">Sustainable Growth Systems:</strong> <span className="text-muted-foreground">Build business growth mechanisms that honor your need for depth over breadth.</span></p>
                          </div>
                          <div className="border-l-2 border-signal/30 pl-4">
                            <p><strong className="text-foreground">Community Building Mastery:</strong> <span className="text-muted-foreground">Leverage your natural ability to create deep connections to build a loyal community.</span></p>
                          </div>
                          <div className="border-l-2 border-signal/30 pl-4">
                            <p><strong className="text-foreground">Intuitive Business Strategy:</strong> <span className="text-muted-foreground">Develop decision-making processes that combine business logic with intuitive abilities.</span></p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                </div>
              </AnimatedSection>
            </div>
          </section>

          {/* Success Metrics */}
          <section className="py-32 relative overflow-hidden">
            {/* Cinematic Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />
            
            <div className="relative z-10 container mx-auto px-6">
              <AnimatedSection>
                <div className="text-center mb-20">
                  <h2 className="heading-ritual text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-8 text-white cinema-text-shadow">
                    Success Looks Different for Empath Entrepreneurs
                  </h2>
                  <div className="flex justify-center mb-12">
                    <SignalLineDivider />
                  </div>
                  <p className="body-premium text-xl md:text-2xl text-foreground/90 max-w-4xl mx-auto leading-relaxed font-light cinema-text-shadow">
                    Success isn't just about revenue—it's about creating a business that honors your sensitivity while generating consistent, premium income.
                  </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
                  <AnimatedSection delay={200}>
                    <Card className="cinema-surface border-signal/20 bg-background/30 backdrop-blur-sm p-10 hover:bg-background/40 transition-all duration-500 h-full">
                      <CardContent className="p-0">
                        <h3 className="text-2xl font-display font-semibold text-signal mb-8 flex items-center gap-3">
                          <div className="w-3 h-3 rounded-full bg-signal animate-pulse" />
                          Financial Outcomes
                        </h3>
                        <ul className="space-y-4">
                          <li className="flex items-start gap-4">
                            <div className="w-2 h-2 rounded-full bg-signal mt-2 flex-shrink-0" />
                            <span className="text-foreground leading-relaxed">Consistent <span className="text-signal font-medium">$5K-$15K monthly revenue</span></span>
                          </li>
                          <li className="flex items-start gap-4">
                            <div className="w-2 h-2 rounded-full bg-signal mt-2 flex-shrink-0" />
                            <span className="text-foreground leading-relaxed">Premium pricing <span className="text-signal font-medium">($2K-$10K+ programs)</span></span>
                          </li>
                          <li className="flex items-start gap-4">
                            <div className="w-2 h-2 rounded-full bg-signal mt-2 flex-shrink-0" />
                            <span className="text-foreground leading-relaxed">Predictable client pipeline</span>
                          </li>
                          <li className="flex items-start gap-4">
                            <div className="w-2 h-2 rounded-full bg-signal mt-2 flex-shrink-0" />
                            <span className="text-foreground leading-relaxed">Higher profit margins through efficiency</span>
                          </li>
                          <li className="flex items-start gap-4">
                            <div className="w-2 h-2 rounded-full bg-signal mt-2 flex-shrink-0" />
                            <span className="text-foreground leading-relaxed">Multiple revenue streams aligned with your gifts</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </AnimatedSection>

                  <AnimatedSection delay={400}>
                    <Card className="cinema-surface border-signal/20 bg-background/30 backdrop-blur-sm p-10 hover:bg-background/40 transition-all duration-500 h-full">
                      <CardContent className="p-0">
                        <h3 className="text-2xl font-display font-semibold text-signal mb-8 flex items-center gap-3">
                          <div className="w-3 h-3 rounded-full bg-signal animate-pulse" />
                          Personal Outcomes
                        </h3>
                        <ul className="space-y-4">
                          <li className="flex items-start gap-4">
                            <div className="w-2 h-2 rounded-full bg-signal mt-2 flex-shrink-0" />
                            <span className="text-foreground leading-relaxed">Reduced overwhelm and burnout</span>
                          </li>
                          <li className="flex items-start gap-4">
                            <div className="w-2 h-2 rounded-full bg-signal mt-2 flex-shrink-0" />
                            <span className="text-foreground leading-relaxed">Stronger professional boundaries</span>
                          </li>
                          <li className="flex items-start gap-4">
                            <div className="w-2 h-2 rounded-full bg-signal mt-2 flex-shrink-0" />
                            <span className="text-foreground leading-relaxed">Increased confidence and authority</span>
                          </li>
                          <li className="flex items-start gap-4">
                            <div className="w-2 h-2 rounded-full bg-signal mt-2 flex-shrink-0" />
                            <span className="text-foreground leading-relaxed">Better work-life integration</span>
                          </li>
                          <li className="flex items-start gap-4">
                            <div className="w-2 h-2 rounded-full bg-signal mt-2 flex-shrink-0" />
                            <span className="text-foreground leading-relaxed">Alignment between values and business</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                </div>

                <AnimatedSection delay={600}>
                  <Card className="cinema-surface border-signal/30 bg-gradient-to-r from-signal/10 to-signal/5 backdrop-blur-sm p-12 max-w-5xl mx-auto">
                    <CardContent className="p-0 text-center">
                      <h3 className="text-3xl font-display font-semibold mb-6 text-signal">The Ultimate Goal</h3>
                      <p className="text-xl leading-relaxed text-foreground">
                        A thriving business that feels as good on the inside as it looks on the outside—where your sensitivity is celebrated, your boundaries are respected, and your income reflects the true value of your gifts.
                      </p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              </AnimatedSection>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/80" />
            
            <div className="relative z-10 container mx-auto px-6">
              <AnimatedSection>
                <div className="text-center mb-20">
                  <h2 className="heading-ritual text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-8 text-white cinema-text-shadow">
                    Frequently Asked Questions
                  </h2>
                  <div className="flex justify-center mb-12">
                    <SignalLineDivider />
                  </div>
                </div>

                <div className="max-w-4xl mx-auto">
                  <Accordion type="single" collapsible className="space-y-6">
                    <AccordionItem value="item-1" className="cinema-surface border border-signal/20 rounded-2xl px-8 bg-background/30 backdrop-blur-sm">
                      <AccordionTrigger className="text-left text-lg font-medium py-6 hover:text-signal transition-colors">
                        Is this program specifically for empaths and highly sensitive people?
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                        Yes! While Sacred Signal OS helps all spiritual entrepreneurs, this program track is specifically designed with the unique needs, challenges, and gifts of highly sensitive and empathic entrepreneurs in mind.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2" className="cinema-surface border border-signal/20 rounded-2xl px-8 bg-background/30 backdrop-blur-sm">
                      <AccordionTrigger className="text-left text-lg font-medium py-6 hover:text-signal transition-colors">
                        What if I'm struggling with boundaries in my current business?
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                        Boundary challenges are one of the core issues we address. You'll learn how to create 'sacred containers' that protect your energy while delivering exceptional client results.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3" className="cinema-surface border border-signal/20 rounded-2xl px-8 bg-background/30 backdrop-blur-sm">
                      <AccordionTrigger className="text-left text-lg font-medium py-6 hover:text-signal transition-colors">
                        Can I really charge premium prices as a sensitive entrepreneur?
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                        Absolutely. Your sensitivity and intuitive abilities are premium skills. We'll show you how to price based on transformation value, not time, allowing you to serve fewer clients at higher rates.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4" className="cinema-surface border border-signal/20 rounded-2xl px-8 bg-background/30 backdrop-blur-sm">
                      <AccordionTrigger className="text-left text-lg font-medium py-6 hover:text-signal transition-colors">
                        What if traditional marketing and sales feel 'icky' to me?
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                        That's exactly why this program exists. We teach authentic attraction methods that feel good to you AND attract high-value clients who appreciate your sensitive approach.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </AnimatedSection>
            </div>
          </section>

          {/* CTA Section */}
          <section id="apply" className="py-32 relative overflow-hidden bg-gradient-to-b from-signal/10 via-signal/5 to-background">
            <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background/80" />
            
            <div className="relative z-10 container mx-auto px-6">
              <AnimatedSection>
                <div className="text-center max-w-5xl mx-auto">
                  <h2 className="heading-ritual text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-8 text-white cinema-text-shadow">
                    Ready to Transform Your Sensitivity Into Your Superpower?
                  </h2>
                  <div className="flex justify-center mb-12">
                    <SignalLineDivider />
                  </div>
                  <p className="body-premium text-xl md:text-2xl text-foreground/90 mb-16 max-w-4xl mx-auto leading-relaxed font-light cinema-text-shadow">
                    The journey from struggling empath entrepreneur to thriving, authentic business owner starts with a single decision. You've already taken the first step by recognizing that traditional business advice doesn't work for sensitive souls like us.
                  </p>

                  <AnimatedSection delay={200}>
                    <Card className="cinema-surface border-signal/30 bg-background/20 backdrop-blur-sm p-12 mb-16">
                      <CardContent className="p-0">
                        <h3 className="text-2xl font-display font-semibold mb-8 text-signal">Your Next Steps:</h3>
                        <div className="grid md:grid-cols-2 gap-8 text-left">
                          <div className="space-y-6">
                            <div className="flex items-start gap-4">
                              <div className="w-8 h-8 rounded-full bg-signal/20 flex items-center justify-center flex-shrink-0 mt-1">
                                <span className="text-signal font-bold text-sm">1</span>
                              </div>
                              <div>
                                <p className="font-semibold mb-2">Complete Your Application</p>
                                <p className="text-muted-foreground text-sm">Tell us about your current business situation and sensitivity challenges</p>
                              </div>
                            </div>
                            <div className="flex items-start gap-4">
                              <div className="w-8 h-8 rounded-full bg-signal/20 flex items-center justify-center flex-shrink-0 mt-1">
                                <span className="text-signal font-bold text-sm">2</span>
                              </div>
                              <div>
                                <p className="font-semibold mb-2">Values Alignment Assessment</p>
                                <p className="text-muted-foreground text-sm">Ensure Sacred Signal OS is the right fit for your goals and values</p>
                              </div>
                            </div>
                          </div>
                          <div className="space-y-6">
                            <div className="flex items-start gap-4">
                              <div className="w-8 h-8 rounded-full bg-signal/20 flex items-center justify-center flex-shrink-0 mt-1">
                                <span className="text-signal font-bold text-sm">3</span>
                              </div>
                              <div>
                                <p className="font-semibold mb-2">Discovery Call</p>
                                <p className="text-muted-foreground text-sm">Connect with our team to discuss your specific needs and answer any questions</p>
                              </div>
                            </div>
                            <div className="flex items-start gap-4">
                              <div className="w-8 h-8 rounded-full bg-signal/20 flex items-center justify-center flex-shrink-0 mt-1">
                                <span className="text-signal font-bold text-sm">4</span>
                              </div>
                              <div>
                                <p className="font-semibold mb-2">Begin Your Transformation</p>
                                <p className="text-muted-foreground text-sm">Join the next Sacred Signal OS cohort and start building your authentic business</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedSection>

                  <AnimatedSection delay={400}>
                    <div className="flex justify-center mb-8">
                      <Button 
                        size="lg"
                        className="cinema-glow bg-signal text-background hover:bg-signal/90 font-body font-medium px-16 py-8 text-xl motion-glow-hover rounded-full shadow-2xl"
                      >
                        Start Your Application Today
                      </Button>
                    </div>

                    <p className="text-sm opacity-80 cinema-text-shadow">
                      <em>Limited spots available • Rolling start • Investment begins at $1,497</em>
                    </p>
                  </AnimatedSection>
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