import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import SacredGeometry from "@/components/SacredGeometry";
import SignalRing from "@/components/SignalRing";
import marissaFontanaImage from "@/assets/testimonials/marissa-fontana.jpg";
import leoraLeonImage from "@/assets/testimonials/leora-leon.jpg";
import susieCollesImage from "@/assets/testimonials/susie-colles.jpg";
// Using uploaded image instead of asset

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
          <div className="w-[48rem] h-[32rem] mx-auto mb-10 rounded-2xl overflow-hidden border border-brass/30 shadow-[0_8px_32px_hsl(var(--signal-glow)/0.2)]">
            <img 
              src="/lovable-uploads/9b735b7f-7d36-48fc-9934-0a95148fc23c.png" 
              alt="Spiritual meditation and inner wisdom"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="heading-ritual text-4xl md:text-6xl mb-8 glow-text">
            READY TO STOP SHOUTING
            <br />
            <span className="text-signal glow-text">AND START BEING HEARD?</span>
          </h2>
          <p className="body-premium text-xl md:text-2xl text-foreground max-w-4xl mx-auto leading-relaxed">
            Transform Your Scattered Efforts Into A Resonant Signal That Attracts Your Ideal Clients With Ease And Authenticity.
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-24">
          <div className="relative bg-gradient-to-br from-signal/5 via-background/80 to-signal/10 backdrop-blur-xl border border-signal/20 rounded-3xl p-12 md:p-16 text-center shadow-[0_20px_60px_-10px_hsl(var(--signal-glow)/0.2)] overflow-hidden">
            {/* Elegant border glow */}
            <div className="absolute inset-0 rounded-3xl border border-signal/30 shadow-[inset_0_1px_0_hsl(var(--signal-glow)/0.1)]"></div>
            
            <div className="relative z-10">
              <div className="mb-12">
                <SacredGeometry size={80} className="mx-auto mb-8" />
                <h3 className="heading-ritual text-3xl md:text-4xl mb-6 glow-text">
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
                  className="signal-glow bg-signal text-background hover:bg-signal/90 font-body font-semibold px-16 py-6 text-xl transition-all duration-300 w-full sm:w-auto shadow-[0_8px_32px_hsl(var(--signal-glow)/0.3)]"
                >
                  Apply Now - Sacred Signal OS
                </Button>
                <p className="body-premium text-sm text-foreground/70">
                  Applications Reviewed Within 48 Hours
                </p>
              </div>

              <div className="bg-gradient-to-br from-background/40 via-background/60 to-signal/5 backdrop-blur-sm border border-signal/15 rounded-2xl p-8 text-left shadow-[0_8px_32px_-8px_hsl(var(--background)/0.5)]">
                <h4 className="ssos-card-title text-lg mb-6 text-center">
                  What Happens Next:
                </h4>
                <div className="space-y-4 text-foreground/80">
                  <div className="flex items-start space-x-4">
                    <span className="w-8 h-8 bg-gradient-to-br from-signal/30 to-signal/10 border border-signal/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1 text-signal text-sm font-bold shadow-[0_2px_8px_hsl(var(--signal-glow)/0.2)]">1</span>
                    <span className="body-premium">Complete Application & Values Alignment Assessment</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <span className="w-8 h-8 bg-gradient-to-br from-signal/30 to-signal/10 border border-signal/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1 text-signal text-sm font-bold shadow-[0_2px_8px_hsl(var(--signal-glow)/0.2)]">2</span>
                    <span className="body-premium">Brief Discovery Call To Ensure Mutual Fit</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <span className="w-8 h-8 bg-gradient-to-br from-signal/30 to-signal/10 border border-signal/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1 text-signal text-sm font-bold shadow-[0_2px_8px_hsl(var(--signal-glow)/0.2)]">3</span>
                    <span className="body-premium">Receive Program Materials & Community Access</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <span className="w-8 h-8 bg-gradient-to-br from-signal/30 to-signal/10 border border-signal/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1 text-signal text-sm font-bold shadow-[0_2px_8px_hsl(var(--signal-glow)/0.2)]">4</span>
                    <span className="body-premium">Begin Your 12-Week Transformation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="max-w-5xl mx-auto mb-32">
          <h3 className="heading-ritual text-3xl md:text-4xl mb-16 text-center glow-text">
            WHAT PEOPLE ARE SAYING
          </h3>
          
          <div className="ssos-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="ssos-card">
              <div className="flex flex-col items-center text-center mb-6">
                <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-signal/30 mb-4 shadow-[0_4px_16px_hsl(var(--signal-glow)/0.2)]">
                  <img 
                    src="/lovable-uploads/83b74022-00a0-44c6-80b7-80c1741ef70b.png" 
                    alt="Marissa Fontana" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <img src="/lovable-uploads/3577b1e4-f101-4b3d-a7ac-74b52ee58e57.png" alt="Sacred geometry pattern" className="w-8 h-8 mb-4 mx-auto" />
                <p className="body-premium text-foreground/80 leading-relaxed mb-6">
                  "Barack is the real deal with a business grounded in purpose. Since getting to know Barack and collaborating with him on multiple projects, it's evident how devoted Barack is to the mission of empowering women and nurturing the emergence of the divine feminine in all of us."
                </p>
                <div className="text-signal font-semibold">
                  — Marissa Fontana
                </div>
              </div>
            </div>

            <div className="ssos-card">
              <div className="flex flex-col items-center text-center mb-6">
                <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-signal/30 mb-4 shadow-[0_4px_16px_hsl(var(--signal-glow)/0.2)]">
                  <img 
                    src="/lovable-uploads/fad52807-7bca-494a-9d9a-b71b63f64115.png" 
                    alt="Leora Leon" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <img src="/lovable-uploads/3577b1e4-f101-4b3d-a7ac-74b52ee58e57.png" alt="Sacred geometry pattern" className="w-8 h-8 mb-4 mx-auto" />
                <p className="body-premium text-foreground/80 leading-relaxed mb-6">
                  "Barack El is a force to be reckoned with. Not only is Barack a talented entrepreneur who created Femigod, a brilliant company that evokes spiritually and smart business techniques, he is also the real deal, a beautiful, kind and authentic human. It's a pleasure to know him and work with him."
                </p>
                <div className="text-signal font-semibold">
                  — Leora Leon
                </div>
              </div>
            </div>

            <div className="ssos-card">
              <div className="flex flex-col items-center text-center mb-6">
                <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-signal/30 mb-4 shadow-[0_4px_16px_hsl(var(--signal-glow)/0.2)]">
                  <img 
                    src="/lovable-uploads/03c116e4-31a0-45a3-8b78-5bac20b29afd.png" 
                    alt="Dr. Susie Colles" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <img src="/lovable-uploads/3577b1e4-f101-4b3d-a7ac-74b52ee58e57.png" alt="Sacred geometry pattern" className="w-8 h-8 mb-4 mx-auto" />
                <p className="body-premium text-foreground/80 leading-relaxed mb-6">
                  "I recently had the pleasure of chatting with Barack about all things spiritual. What a pleasure to be associated with an individual so committed to helping women find and develop their spiritual nature. Of course, it stands to reason that Barack, so focused on helping others thrive, has a vibrant spirit himself!"
                </p>
                <div className="text-signal font-semibold">
                  — Susie Colles, PhD
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-5xl mx-auto">
          <h3 className="heading-ritual text-3xl md:text-4xl mb-16 text-center glow-text">
            FREQUENTLY ASKED QUESTIONS
          </h3>
          
          <div className="ssos-grid grid-cols-1">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="ssos-card"
              >
                <div className="flex items-start space-x-4">
                  <SignalRing size={20} className="flex-shrink-0 mt-2" />
                  <div className="flex-1">
                    <h4 className="ssos-card-title text-lg mb-3">
                      {faq.question}
                    </h4>
                    <p className="body-premium text-foreground/80 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recognition & Influence Section */}
        <div className="max-w-5xl mx-auto mb-32">
          <h3 className="heading-ritual text-3xl md:text-4xl mb-16 text-center glow-text">
            RECOGNITION & INFLUENCE
          </h3>
          
          <div className="ssos-grid grid-cols-1">
            <div className="ssos-card">
              <div className="flex items-start space-x-4">
                <SignalRing size={20} className="flex-shrink-0 mt-2" />
                <div className="flex-1">
                  <h4 className="ssos-card-title text-lg mb-3">
                    Outstanding Leadership Award — Education 2.0 (USA · Spring 2022)
                  </h4>
                  <p className="body-premium text-foreground/80 leading-relaxed">
                    Selected for Education 2.0's Outstanding Leadership Award, recognizing transformative work at the nexus of learning, entrepreneurship, and measurable impact. This distinction is reserved for voices reshaping how we think about purpose-driven business.
                  </p>
                </div>
              </div>
            </div>

            <div className="ssos-card">
              <div className="flex items-start space-x-4">
                <SignalRing size={20} className="flex-shrink-0 mt-2" />
                <div className="flex-1">
                  <h4 className="ssos-card-title text-lg mb-3">
                    International Keynote — 21st Century Women's Entrepreneurship & Leadership (Barcelona · 2023)
                  </h4>
                  <p className="body-premium text-foreground/80 leading-relaxed">
                    Delivered "Finding Purpose Through Connection & Contribution" to global leaders at Barcelona's prestigious Reial Cercle Artístic, followed by the international virtual expansion—reaching founders, clinicians, and researchers across continents.
                  </p>
                </div>
              </div>
            </div>

            <div className="ssos-card">
              <div className="flex items-start space-x-4">
                <SignalRing size={20} className="flex-shrink-0 mt-2" />
                <div className="flex-1">
                  <h4 className="ssos-card-title text-lg mb-3">
                    Featured Voice — WYN Global Virtual Summit (Women Leaders Series)
                  </h4>
                  <p className="body-premium text-foreground/80 leading-relaxed">
                    Invited to address WYN's international audience on leadership innovation and cross-sector collaboration, joining a curated roster of women driving change at scale.
                  </p>
                </div>
              </div>
            </div>

            <div className="ssos-card bg-gradient-to-br from-signal/5 via-background/80 to-signal/10">
              <div className="flex items-start space-x-4">
                <img src="/lovable-uploads/3577b1e4-f101-4b3d-a7ac-74b52ee58e57.png" alt="Sacred geometry pattern" className="w-8 h-8 flex-shrink-0 mt-2" />
                <div className="flex-1">
                  <h4 className="ssos-card-title text-lg mb-3">
                    Why This Resonates
                  </h4>
                  <p className="body-premium text-foreground/80 leading-relaxed">
                    These aren't vanity platforms. Education 2.0, international leadership summits, and WYN Global convene serious architects of change—educators transforming systems, clinicians advancing practice, founders building sustainable impact. When these communities recognize and invite your voice, it signals what Sacred Signal OS delivers: the rare combination of spiritual depth and strategic precision that creates ripple effects beyond individual success.
                  </p>
                  <p className="body-premium text-foreground/80 leading-relaxed mt-4">
                    The invitation pattern tells the story: your work doesn't just transform individual businesses—it influences how entire industries think about purpose, profit, and sustainable growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-24">
          <div className="mb-12">
            <p className="heading-ritual text-2xl md:text-3xl text-foreground mb-6 glow-text">
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