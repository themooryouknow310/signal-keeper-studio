import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SignalLineDivider from "@/components/accents/SignalLineDivider";
import MetatronsCube from "@/components/accents/MetatronsCube";
import SignalEclipse from "@/components/accents/SignalEclipse";
import SacredGeometry from "@/components/SacredGeometry";
import { SacredMandala, EightPointStar, LinearAccent, GoldenRatioGrid } from "@/components/AccentElements";
import EmpathReadinessQuiz from "@/components/EmpathReadinessQuiz";
import IndustryStatisticsSection from "@/components/IndustryStatisticsSection";
import heroImage from "@/assets/cinema/hero-spiritual-teacher.jpg";
import energyDrainImage from "@/assets/cinema/energy-drain-sales.jpg";
import emotionalOverwhelmImage from "@/assets/cinema/emotional-overwhelm.jpg";
import imposterSyndromeImage from "@/assets/cinema/imposter-syndrome.jpg";
import inconsistentIncomeImage from "@/assets/cinema/inconsistent-income.jpg";
import enhancedIntuitionImage from "@/assets/cinema/enhanced-intuition.jpg";
import authenticConnectionImage from "@/assets/cinema/authentic-connection.jpg";
import valuesDrivenLeadershipImage from "@/assets/cinema/values-driven-leadership.jpg";
import overwhelmBurnoutImage from "@/assets/cinema/overwhelm-burnout.jpg";
import boundaryIssuesImage from "@/assets/cinema/boundary-issues.jpg";
import inconsistentIncomeChallengesImage from "@/assets/cinema/inconsistent-income-challenges.jpg";
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

          {/* The Empath Entrepreneur's Dilemma */}
          <section className="section-divider relative overflow-hidden">
            {/* Background Accent Elements */}
            <div className="absolute top-1/2 right-1/4 opacity-4">
              <GoldenRatioGrid size={80} />
            </div>
            
            {/* Background Elements */}
            <div className="absolute top-40 right-10 opacity-10">
              <SacredGeometry size={150} animated />
            </div>

            <div className="container mx-auto px-6">
              <div className="mb-20">
                <div className="text-center mb-16">
                  <div className="flex items-center justify-center mb-8">
                    <LinearAccent width={300} />
                  </div>
                  <h2 className="heading-ritual text-3xl md:text-5xl mb-6 glow-text">
                    THE EMPATH ENTREPRENEUR'S DILEMMA
                  </h2>
                  <p className="body-sacred text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
                    As an empathic entrepreneur, you face unique challenges that traditional business advice simply doesn't address:
                  </p>
                </div>

                <div className="ssos-grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto">
                  <div className="ssos-card">
                    <div className="text-center">
                      <div className="w-64 h-40 mx-auto mb-6 rounded-lg overflow-hidden border border-brass/30">
                        <img 
                          src={energyDrainImage} 
                          alt="Energy Drain From Aggressive Sales"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="ssos-card-title text-xl mb-4">
                        ENERGY DRAIN FROM AGGRESSIVE SALES
                      </h3>
                      <p className="body-premium text-foreground/75 leading-relaxed">
                        Traditional "hustle" marketing feels soul-crushing and leaves you energetically depleted instead of inspired.
                      </p>
                    </div>
                  </div>

                  <div className="ssos-card">
                    <div className="text-center">
                      <div className="w-64 h-40 mx-auto mb-6 rounded-lg overflow-hidden border border-brass/30">
                        <img 
                          src={emotionalOverwhelmImage} 
                          alt="Overwhelm From Others' Emotions"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="ssos-card-title text-xl mb-4">
                        OVERWHELM FROM OTHERS' EMOTIONS
                      </h3>
                      <p className="body-premium text-foreground/75 leading-relaxed">
                        You absorb your clients' and prospects' stress, making it difficult to maintain professional boundaries.
                      </p>
                    </div>
                  </div>

                  <div className="ssos-card">
                    <div className="text-center">
                      <div className="w-64 h-40 mx-auto mb-6 rounded-lg overflow-hidden border border-brass/30">
                        <img 
                          src={imposterSyndromeImage} 
                          alt="Imposter Syndrome Amplified"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="ssos-card-title text-xl mb-4">
                        IMPOSTER SYNDROME AMPLIFIED
                      </h3>
                      <p className="body-premium text-foreground/75 leading-relaxed">
                        Your sensitivity makes you second-guess your expertise, even when you have profound gifts to offer.
                      </p>
                    </div>
                  </div>

                  <div className="ssos-card">
                    <div className="text-center">
                      <div className="w-64 h-40 mx-auto mb-6 rounded-lg overflow-hidden border border-brass/30">
                        <img 
                          src={inconsistentIncomeImage} 
                          alt="Inconsistent Income Patterns"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="ssos-card-title text-xl mb-4">
                        INCONSISTENT INCOME PATTERNS
                      </h3>
                      <p className="body-premium text-foreground/75 leading-relaxed">
                        Your empathic nature leads to undercharging and over-delivering, creating financial instability.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Industry Statistics & Research */}
          <IndustryStatisticsSection />

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

                {/* The Empath Advantage in Business */}
                <div className="section-divider relative overflow-hidden">
                  {/* Background Accent Elements */}
                  <div className="absolute top-1/4 left-0 transform -translate-x-1/2">
                    <MetatronsCube size={120} className="text-brass/8 animate-pulse" />
                  </div>
                  <div className="absolute bottom-1/3 right-0 transform translate-x-1/2">
                    <SignalEclipse size={100} className="text-cyan/6" />
                  </div>

                  <div className="relative z-10">
                    <h3 className="heading-ritual text-3xl md:text-5xl mb-16 glow-text text-center">
                      THE EMPATH ADVANTAGE IN BUSINESS
                    </h3>

                    <div className="ssos-grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto mb-24">
                      <div className="ssos-card">
                        <div className="text-center">
                          <div className="w-64 h-40 mx-auto mb-6 rounded-lg overflow-hidden border border-brass/30">
                            <img 
                              src={enhancedIntuitionImage} 
                              alt="Enhanced Intuition"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <h4 className="ssos-card-title text-xl mb-4">
                            ENHANCED INTUITION
                          </h4>
                          <p className="body-premium text-foreground/75 leading-relaxed">
                            Empaths naturally pick up on subtle cues that others miss, allowing for deeper client understanding and more accurate business decisions.
                          </p>
                        </div>
                      </div>

                      <div className="ssos-card">
                        <div className="text-center">
                          <div className="w-64 h-40 mx-auto mb-6 rounded-lg overflow-hidden border border-brass/30">
                            <img 
                              src={authenticConnectionImage} 
                              alt="Authentic Connection"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <h4 className="ssos-card-title text-xl mb-4">
                            AUTHENTIC CONNECTION
                          </h4>
                          <p className="body-premium text-foreground/75 leading-relaxed">
                            The ability to create genuine emotional connections leads to higher client satisfaction and retention rates.
                          </p>
                        </div>
                      </div>

                      <div className="ssos-card">
                        <div className="text-center">
                          <div className="w-64 h-40 mx-auto mb-6 rounded-lg overflow-hidden border border-brass/30">
                            <img 
                              src={valuesDrivenLeadershipImage} 
                              alt="Values-Driven Leadership"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <h4 className="ssos-card-title text-xl mb-4">
                            VALUES-DRIVEN LEADERSHIP
                          </h4>
                          <p className="body-premium text-foreground/75 leading-relaxed">
                            Naturally align businesses with values, creating more sustainable and fulfilling ventures.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Common Challenges We Address */}
                    <h3 className="heading-ritual text-3xl md:text-5xl mb-16 glow-text text-center">
                      COMMON CHALLENGES WE ADDRESS
                    </h3>

                    <div className="ssos-grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto">
                      <div className="ssos-card">
                        <div className="text-center">
                          <div className="w-64 h-40 mx-auto mb-6 rounded-lg overflow-hidden border border-brass/30">
                            <img 
                              src={overwhelmBurnoutImage} 
                              alt="Overwhelm and Burnout"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <h4 className="ssos-card-title text-xl mb-4">
                            OVERWHELM AND BURNOUT
                          </h4>
                          <p className="body-premium text-foreground/75 leading-relaxed">
                            Traditional business advice doesn't account for empaths' need for processing time and energy management.
                          </p>
                        </div>
                      </div>

                      <div className="ssos-card">
                        <div className="text-center">
                          <div className="w-64 h-40 mx-auto mb-6 rounded-lg overflow-hidden border border-brass/30">
                            <img 
                              src={boundaryIssuesImage} 
                              alt="Boundary Issues"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <h4 className="ssos-card-title text-xl mb-4">
                            BOUNDARY ISSUES
                          </h4>
                          <p className="body-premium text-foreground/75 leading-relaxed">
                            Struggling with saying no, undercharging, and taking on clients' emotional burdens.
                          </p>
                        </div>
                      </div>

                      <div className="ssos-card">
                        <div className="text-center">
                          <div className="w-64 h-40 mx-auto mb-6 rounded-lg overflow-hidden border border-brass/30">
                            <img 
                              src={inconsistentIncomeChallengesImage} 
                              alt="Inconsistent Income"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <h4 className="ssos-card-title text-xl mb-4">
                            INCONSISTENT INCOME
                          </h4>
                          <p className="body-premium text-foreground/75 leading-relaxed">
                            The tendency to undervalue services and over-deliver leads to financial instability.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </section>

          {/* Empath Readiness Quiz */}
          <EmpathReadinessQuiz />

          {/* Sacred Signal OS Methodology */}
          <section className="section-divider relative overflow-hidden">
            {/* Background Accent Elements */}
            <div className="absolute top-1/4 left-0 transform -translate-x-1/2">
              <MetatronsCube size={150} className="text-brass/8 animate-pulse" />
            </div>
            <div className="absolute bottom-1/3 right-0 transform translate-x-1/2">
              <SignalEclipse size={120} className="text-cyan/6" />
            </div>

            <div className="relative z-10">
              <div className="text-center mb-20">
                <h2 className="heading-ritual text-3xl md:text-5xl mb-16 glow-text">
                  THE SACRED SIGNAL OS METHODOLOGY
                </h2>
                <div className="flex justify-center mb-12">
                  <SignalLineDivider />
                </div>
                <p className="body-premium text-xl md:text-2xl text-foreground/90 max-w-4xl mx-auto leading-relaxed font-light">
                  Our proven framework combines ancient wisdom traditions with modern business psychology, specifically adapted for the unique needs of highly sensitive entrepreneurs.
                </p>
              </div>

              <div className="ssos-grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto">
                <div className="ssos-card">
                  <div className="mb-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan/20 to-brass/20 flex items-center justify-center border border-brass/30">
                        <span className="text-2xl font-bold text-cyan">1</span>
                      </div>
                      <h3 className="ssos-card-title text-2xl">
                        PHASE 1: FOUNDATION
                      </h3>
                    </div>
                    <p className="body-premium text-foreground/60 mb-6 text-sm uppercase tracking-wider">Weeks 1-3</p>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="border-l-2 border-brass/30 pl-6">
                      <h4 className="font-display font-semibold text-lg mb-2 text-cyan">Empath Identity Integration</h4>
                      <p className="body-premium text-foreground/75 leading-relaxed">Learn to see your sensitivity as a business asset rather than a liability.</p>
                    </div>
                    <div className="border-l-2 border-brass/30 pl-6">
                      <h4 className="font-display font-semibold text-lg mb-2 text-cyan">Energy-Aligned Business Model</h4>
                      <p className="body-premium text-foreground/75 leading-relaxed">Design a business structure that works with your natural energy patterns.</p>
                    </div>
                    <div className="border-l-2 border-brass/30 pl-6">
                      <h4 className="font-display font-semibold text-lg mb-2 text-cyan">Sacred Boundaries Creation</h4>
                      <p className="body-premium text-foreground/75 leading-relaxed">Establish professional boundaries that protect your energy while maintaining deep client connections.</p>
                    </div>
                  </div>
                </div>

                <div className="ssos-card">
                  <div className="mb-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan/20 to-brass/20 flex items-center justify-center border border-brass/30">
                        <span className="text-2xl font-bold text-cyan">2</span>
                      </div>
                      <h3 className="ssos-card-title text-2xl">
                        PHASE 2: ATTRACTION
                      </h3>
                    </div>
                    <p className="body-premium text-foreground/60 mb-6 text-sm uppercase tracking-wider">Weeks 4-6</p>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="border-l-2 border-brass/30 pl-6">
                      <h4 className="font-display font-semibold text-lg mb-2 text-cyan">Authentic Messaging Development</h4>
                      <p className="body-premium text-foreground/75 leading-relaxed">Craft marketing messages that attract ideal clients without feeling salesy.</p>
                    </div>
                    <div className="border-l-2 border-brass/30 pl-6">
                      <h4 className="font-display font-semibold text-lg mb-2 text-cyan">Intuitive Content Creation</h4>
                      <p className="body-premium text-foreground/75 leading-relaxed">Develop content strategy based on energetic alignment rather than algorithmic manipulation.</p>
                    </div>
                    <div className="border-l-2 border-brass/30 pl-6">
                      <h4 className="font-display font-semibold text-lg mb-2 text-cyan">Sacred Story Alchemy</h4>
                      <p className="body-premium text-foreground/75 leading-relaxed">Transform your personal journey with sensitivity into your most powerful marketing asset.</p>
                    </div>
                  </div>
                </div>

                <div className="ssos-card">
                  <div className="mb-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan/20 to-brass/20 flex items-center justify-center border border-brass/30">
                        <span className="text-2xl font-bold text-cyan">3</span>
                      </div>
                      <h3 className="ssos-card-title text-2xl">
                        PHASE 3: CONVERSION
                      </h3>
                    </div>
                    <p className="body-premium text-foreground/60 mb-6 text-sm uppercase tracking-wider">Weeks 7-9</p>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="border-l-2 border-brass/30 pl-6">
                      <h4 className="font-display font-semibold text-lg mb-2 text-cyan">Heart-Centered Sales Process</h4>
                      <p className="body-premium text-foreground/75 leading-relaxed">Develop sales approaches that feel authentic while closing deals at premium prices.</p>
                    </div>
                    <div className="border-l-2 border-brass/30 pl-6">
                      <h4 className="font-display font-semibold text-lg mb-2 text-cyan">Energetic Pricing Strategy</h4>
                      <p className="body-premium text-foreground/75 leading-relaxed">Price services based on transformation and energy investment, not time.</p>
                    </div>
                    <div className="border-l-2 border-brass/30 pl-6">
                      <h4 className="font-display font-semibold text-lg mb-2 text-cyan">Sacred Container Design</h4>
                      <p className="body-premium text-foreground/75 leading-relaxed">Create program structures that protect your energy while delivering exceptional client transformation.</p>
                    </div>
                  </div>
                </div>

                <div className="ssos-card">
                  <div className="mb-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan/20 to-brass/20 flex items-center justify-center border border-brass/30">
                        <span className="text-2xl font-bold text-cyan">4</span>
                      </div>
                      <h3 className="ssos-card-title text-2xl">
                        PHASE 4: SCALING
                      </h3>
                    </div>
                    <p className="body-premium text-foreground/60 mb-6 text-sm uppercase tracking-wider">Weeks 10-12</p>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="border-l-2 border-brass/30 pl-6">
                      <h4 className="font-display font-semibold text-lg mb-2 text-cyan">Sustainable Growth Systems</h4>
                      <p className="body-premium text-foreground/75 leading-relaxed">Build business growth mechanisms that honor your need for depth over breadth.</p>
                    </div>
                    <div className="border-l-2 border-brass/30 pl-6">
                      <h4 className="font-display font-semibold text-lg mb-2 text-cyan">Community Building Mastery</h4>
                      <p className="body-premium text-foreground/75 leading-relaxed">Leverage your natural ability to create deep connections to build a loyal community.</p>
                    </div>
                    <div className="border-l-2 border-brass/30 pl-6">
                      <h4 className="font-display font-semibold text-lg mb-2 text-cyan">Intuitive Business Strategy</h4>
                      <p className="body-premium text-foreground/75 leading-relaxed">Develop decision-making processes that combine business logic with intuitive abilities.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Success Metrics */}
          <section className="section-divider relative overflow-hidden">
            {/* Background Accent Elements */}
            <div className="absolute top-1/4 right-0 transform translate-x-1/2">
              <MetatronsCube size={140} className="text-brass/8 animate-pulse" />
            </div>
            <div className="absolute bottom-1/3 left-0 transform -translate-x-1/2">
              <SignalEclipse size={110} className="text-cyan/6" />
            </div>

            <div className="relative z-10">
              <div className="text-center mb-20">
                <h2 className="heading-ritual text-3xl md:text-5xl mb-16 glow-text">
                  SUCCESS LOOKS DIFFERENT FOR EMPATH ENTREPRENEURS
                </h2>
                <div className="flex justify-center mb-12">
                  <SignalLineDivider />
                </div>
                <p className="body-premium text-xl md:text-2xl text-foreground/90 max-w-4xl mx-auto leading-relaxed font-light">
                  Success isn't just about revenue—it's about creating a business that honors your sensitivity while generating consistent, premium income.
                </p>
              </div>

              <div className="ssos-grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto mb-16">
                <div className="ssos-card">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-cyan/20 to-brass/20 flex items-center justify-center border border-brass/30">
                      <span className="text-2xl">💰</span>
                    </div>
                    <h3 className="ssos-card-title text-2xl mb-6">
                      FINANCIAL OUTCOMES
                    </h3>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4 border-l-2 border-brass/30 pl-6">
                      <div className="w-3 h-3 rounded-full bg-cyan mt-2 flex-shrink-0" />
                      <div>
                        <p className="body-premium text-foreground/90 font-medium">Consistent Monthly Revenue</p>
                        <p className="body-premium text-foreground/70 text-sm mt-1">$5K-$15K monthly recurring income</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 border-l-2 border-brass/30 pl-6">
                      <div className="w-3 h-3 rounded-full bg-cyan mt-2 flex-shrink-0" />
                      <div>
                        <p className="body-premium text-foreground/90 font-medium">Premium Pricing Strategy</p>
                        <p className="body-premium text-foreground/70 text-sm mt-1">$2K-$10K+ program pricing</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 border-l-2 border-brass/30 pl-6">
                      <div className="w-3 h-3 rounded-full bg-cyan mt-2 flex-shrink-0" />
                      <div>
                        <p className="body-premium text-foreground/90 font-medium">Predictable Client Pipeline</p>
                        <p className="body-premium text-foreground/70 text-sm mt-1">Sustainable lead generation systems</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 border-l-2 border-brass/30 pl-6">
                      <div className="w-3 h-3 rounded-full bg-cyan mt-2 flex-shrink-0" />
                      <div>
                        <p className="body-premium text-foreground/90 font-medium">Optimized Profit Margins</p>
                        <p className="body-premium text-foreground/70 text-sm mt-1">Higher efficiency through aligned systems</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 border-l-2 border-brass/30 pl-6">
                      <div className="w-3 h-3 rounded-full bg-cyan mt-2 flex-shrink-0" />
                      <div>
                        <p className="body-premium text-foreground/90 font-medium">Diversified Revenue Streams</p>
                        <p className="body-premium text-foreground/70 text-sm mt-1">Multiple income sources aligned with your gifts</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="ssos-card">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-cyan/20 to-brass/20 flex items-center justify-center border border-brass/30">
                      <span className="text-2xl">✨</span>
                    </div>
                    <h3 className="ssos-card-title text-2xl mb-6">
                      PERSONAL OUTCOMES
                    </h3>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4 border-l-2 border-brass/30 pl-6">
                      <div className="w-3 h-3 rounded-full bg-cyan mt-2 flex-shrink-0" />
                      <div>
                        <p className="body-premium text-foreground/90 font-medium">Reduced Overwhelm</p>
                        <p className="body-premium text-foreground/70 text-sm mt-1">Energy management & burnout prevention</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 border-l-2 border-brass/30 pl-6">
                      <div className="w-3 h-3 rounded-full bg-cyan mt-2 flex-shrink-0" />
                      <div>
                        <p className="body-premium text-foreground/90 font-medium">Professional Boundaries</p>
                        <p className="body-premium text-foreground/70 text-sm mt-1">Clear limits that protect your energy</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 border-l-2 border-brass/30 pl-6">
                      <div className="w-3 h-3 rounded-full bg-cyan mt-2 flex-shrink-0" />
                      <div>
                        <p className="body-premium text-foreground/90 font-medium">Increased Authority</p>
                        <p className="body-premium text-foreground/70 text-sm mt-1">Confidence in your expertise & value</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 border-l-2 border-brass/30 pl-6">
                      <div className="w-3 h-3 rounded-full bg-cyan mt-2 flex-shrink-0" />
                      <div>
                        <p className="body-premium text-foreground/90 font-medium">Work-Life Integration</p>
                        <p className="body-premium text-foreground/70 text-sm mt-1">Sustainable business practices</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 border-l-2 border-brass/30 pl-6">
                      <div className="w-3 h-3 rounded-full bg-cyan mt-2 flex-shrink-0" />
                      <div>
                        <p className="body-premium text-foreground/90 font-medium">Values Alignment</p>
                        <p className="body-premium text-foreground/70 text-sm mt-1">Business that honors your principles</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* The Ultimate Goal */}
              <div className="max-w-5xl mx-auto">
                <div className="ssos-card text-center bg-gradient-to-br from-cyan/10 via-background/95 to-brass/10 border-cyan/30">
                  <div className="mb-8">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-cyan/30 to-brass/30 flex items-center justify-center border border-brass/40">
                      <span className="text-3xl">🎯</span>
                    </div>
                    <h3 className="ssos-card-title text-3xl mb-6 glow-text">
                      THE ULTIMATE GOAL
                    </h3>
                  </div>
                  
                  <p className="body-premium text-xl md:text-2xl text-foreground/90 leading-relaxed max-w-4xl mx-auto">
                    A thriving business that feels as good on the inside as it looks on the outside—where your sensitivity is 
                    <span className="text-cyan font-medium"> celebrated</span>, your boundaries are 
                    <span className="text-cyan font-medium"> respected</span>, and your income reflects the 
                    <span className="text-cyan font-medium"> true value</span> of your gifts.
                  </p>
                </div>
              </div>
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
                    <div className="max-w-6xl mx-auto mb-16">
                      <h3 className="heading-ritual text-3xl md:text-4xl mb-16 glow-text text-center">
                        YOUR NEXT STEPS
                      </h3>

                      <div className="ssos-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                        <div className="ssos-card text-center">
                          <div className="mb-8">
                            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-cyan/30 to-brass/30 flex items-center justify-center border border-brass/40">
                              <span className="text-2xl font-bold text-cyan">1</span>
                            </div>
                            <h4 className="ssos-card-title text-xl mb-4">
                              COMPLETE YOUR APPLICATION
                            </h4>
                          </div>
                          <p className="body-premium text-foreground/75 leading-relaxed">
                            Tell us about your current business situation and sensitivity challenges
                          </p>
                        </div>

                        <div className="ssos-card text-center">
                          <div className="mb-8">
                            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-cyan/30 to-brass/30 flex items-center justify-center border border-brass/40">
                              <span className="text-2xl font-bold text-cyan">2</span>
                            </div>
                            <h4 className="ssos-card-title text-xl mb-4">
                              VALUES ALIGNMENT ASSESSMENT
                            </h4>
                          </div>
                          <p className="body-premium text-foreground/75 leading-relaxed">
                            Ensure Sacred Signal OS is the right fit for your goals and values
                          </p>
                        </div>

                        <div className="ssos-card text-center">
                          <div className="mb-8">
                            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-cyan/30 to-brass/30 flex items-center justify-center border border-brass/40">
                              <span className="text-2xl font-bold text-cyan">3</span>
                            </div>
                            <h4 className="ssos-card-title text-xl mb-4">
                              DISCOVERY CALL
                            </h4>
                          </div>
                          <p className="body-premium text-foreground/75 leading-relaxed">
                            Connect with our team to discuss your specific needs and answer any questions
                          </p>
                        </div>

                        <div className="ssos-card text-center">
                          <div className="mb-8">
                            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-cyan/30 to-brass/30 flex items-center justify-center border border-brass/40">
                              <span className="text-2xl font-bold text-cyan">4</span>
                            </div>
                            <h4 className="ssos-card-title text-xl mb-4">
                              BEGIN YOUR TRANSFORMATION
                            </h4>
                          </div>
                          <p className="body-premium text-foreground/75 leading-relaxed">
                            Join the next Sacred Signal OS cohort and start building your authentic business
                          </p>
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>

                  <AnimatedSection delay={400}>
                    <div className="text-center">
                      <div className="max-w-4xl mx-auto mb-12">
                        <div className="ssos-card bg-gradient-to-br from-cyan/10 via-background/95 to-brass/10 border-cyan/30 text-center">
                          <Button 
                            size="lg"
                            className="cinema-glow bg-cyan hover:bg-cyan/90 text-charcoal font-display font-semibold px-16 py-8 text-xl motion-glow-hover rounded-full shadow-2xl border border-cyan/30 mb-6"
                          >
                            START YOUR APPLICATION TODAY
                          </Button>
                          
                          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm text-foreground/70">
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-brass animate-pulse" />
                              <span>Limited spots available</span>
                            </div>
                            <div className="hidden md:block w-1 h-1 rounded-full bg-foreground/30" />
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-brass animate-pulse" />
                              <span>Rolling start</span>
                            </div>
                            <div className="hidden md:block w-1 h-1 rounded-full bg-foreground/30" />
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-brass animate-pulse" />
                              <span className="font-medium">Investment begins at $1,497</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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