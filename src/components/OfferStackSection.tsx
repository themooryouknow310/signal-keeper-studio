import BrassRule from "@/components/accents/BrassRule";

const OfferStackSection = () => {
  const scrollToApply = () => {
    const element = document.getElementById('apply');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="offer-stack" className="section-divider surface-dark relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20 fade-up">
          <div className="flex items-center justify-center mb-8">
            <BrassRule width={300} />
          </div>
          <h2 className="heading-ritual text-4xl md:text-6xl mb-8 glow-text">
            EVERYTHING YOU GET INSIDE SACRED SIGNAL OS
          </h2>
          <p className="body-premium text-xl md:text-2xl text-foreground/80 max-w-4xl mx-auto leading-relaxed">
            We don't shout; we stack real support. Here's exactly what's included and why it matters.
          </p>
        </div>

        {/* Core System */}
        <div className="mb-16 fade-up">
          <h3 className="heading-ritual text-3xl md:text-4xl mb-12 text-center glow-text text-signal">
            Core System
          </h3>
          
          <div className="space-y-8">
            <div className="ssos-card p-8 border-signal/30">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <h4 className="heading-ritual text-2xl text-brass glow-golden mb-2 md:mb-0">
                  Sacred Signal OS: 12-Week System (Core Training)
                </h4>
                <div className="text-signal font-display font-bold text-xl">Value: $6,000</div>
              </div>
              <p className="body-premium text-foreground/80 leading-relaxed">
                End-to-end operating system to tune your message, architect your offer, and install a steady, repeatable pipeline.
              </p>
            </div>

            <div className="ssos-card p-8 border-signal/30">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <h4 className="heading-ritual text-2xl text-brass glow-golden mb-2 md:mb-0">
                  Weekly Live Build & Coaching (12 sessions)
                </h4>
                <div className="text-signal font-display font-bold text-xl">Value: $2,000</div>
              </div>
              <p className="body-premium text-foreground/80 leading-relaxed">
                Real-time co-creation, hot seats, and implementation reviews so progress stays tangible each week.
              </p>
            </div>

            <div className="ssos-card p-8 border-signal/30">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <h4 className="heading-ritual text-2xl text-brass glow-golden mb-2 md:mb-0">
                  Office Hours (2×/week for 12 weeks)
                </h4>
                <div className="text-signal font-display font-bold text-xl">Value: $1,200</div>
              </div>
              <p className="body-premium text-foreground/80 leading-relaxed">
                Quick unblockers and focused feedback to keep momentum calm and consistent.
              </p>
            </div>
          </div>
        </div>

        {/* Tools for Speed & Certainty */}
        <div className="mb-16 fade-up">
          <h3 className="heading-ritual text-3xl md:text-4xl mb-12 text-center glow-text text-signal">
            Tools for Speed & Certainty
          </h3>
          
          <div className="space-y-8">
            <div className="ssos-card p-8 border-signal/30">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <h4 className="heading-ritual text-2xl text-brass glow-golden mb-2 md:mb-0">
                  Brand Vibe Report
                </h4>
                <div className="text-signal font-display font-bold text-xl">Value: $900</div>
              </div>
              <p className="body-premium text-foreground/80 leading-relaxed">
                A founder-aligned brief that locks voice, promise, tone, and language do's/don'ts—so every asset hits the same frequency.
              </p>
            </div>

            <div className="ssos-card p-8 border-signal/30">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <h4 className="heading-ritual text-2xl text-brass glow-golden mb-2 md:mb-0">
                  Mood Board Image
                </h4>
                <div className="text-signal font-display font-bold text-xl">Value: $700</div>
              </div>
              <p className="body-premium text-foreground/80 leading-relaxed">
                A cinematic, on-brand visual (indigo/charcoal base, cyan halo accents, brass geometry) for hero sections, social, and decks (square + 16:9).
              </p>
            </div>

            <div className="ssos-card p-8 border-signal/30">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <h4 className="heading-ritual text-2xl text-brass glow-golden mb-2 md:mb-0">
                  Visual Brand Guidelines
                </h4>
                <div className="text-signal font-display font-bold text-xl">Value: $900</div>
              </div>
              <p className="body-premium text-foreground/80 leading-relaxed">
                A practical 6–10-page guide: color specs, type hierarchy, CTA/button styles, iconography, motion pacing, and accessibility notes.
              </p>
            </div>
          </div>
        </div>

        {/* Tangible By-Products */}
        <div className="mb-16 fade-up">
          <h3 className="heading-ritual text-3xl md:text-4xl mb-12 text-center glow-text text-signal">
            Tangible By-Products (done-with-you assets)
          </h3>
          
          <div className="space-y-8">
            <div className="ssos-card p-8 border-signal/30">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <h4 className="heading-ritual text-2xl text-brass glow-golden mb-2 md:mb-0">
                  Origin Story Studio Pro + 7-Email Nurture + Loom Review
                </h4>
                <div className="text-signal font-display font-bold text-xl">Value: $1,500</div>
              </div>
              <p className="body-premium text-foreground/80 leading-relaxed">
                Your origin story, bio, and nurture bridge—crafted and reviewed—so your message carries.
              </p>
            </div>

            <div className="ssos-card p-8 border-signal/30">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <h4 className="heading-ritual text-2xl text-brass glow-golden mb-2 md:mb-0">
                  Ethics & Claims Pack
                </h4>
                <div className="text-signal font-display font-bold text-xl">Value: $1,000</div>
              </div>
              <p className="body-premium text-foreground/80 leading-relaxed">
                Safe-claims checklist, consent language, and policy templates—built for integrity and protection.
              </p>
            </div>

            <div className="ssos-card p-8 border-signal/30">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <h4 className="heading-ritual text-2xl text-brass glow-golden mb-2 md:mb-0">
                  KPI Dashboard & Scorecard (Notion/Sheets)
                </h4>
                <div className="text-signal font-display font-bold text-xl">Value: $700</div>
              </div>
              <p className="body-premium text-foreground/80 leading-relaxed">
                Track opt-ins, lead→call, call→close, completion, and margin—know what's working at a glance.
              </p>
            </div>

            <div className="ssos-card p-8 border-signal/30">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <h4 className="heading-ritual text-2xl text-brass glow-golden mb-2 md:mb-0">
                  Dream 100 Outreach Starter Pack
                </h4>
                <div className="text-signal font-display font-bold text-xl">Value: $900</div>
              </div>
              <p className="body-premium text-foreground/80 leading-relaxed">
                Research prompts, LinkedIn & email scripts, and a tracker to open partner doors with clarity.
              </p>
            </div>
          </div>
        </div>

        {/* Limited-Time Bonuses */}
        <div className="mb-16 fade-up">
          <h3 className="heading-ritual text-3xl md:text-4xl mb-12 text-center glow-text text-signal">
            Limited-Time Bonuses (included when you enroll now)
          </h3>
          
          <div className="space-y-8">
            <div className="ssos-card p-8 border-brass/40 bg-gradient-to-br from-brass/5 via-background/80 to-brass/10">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <h4 className="heading-ritual text-2xl text-brass glow-golden mb-2 md:mb-0">
                  BONUS: LinkedIn Content Engine
                </h4>
                <div className="text-signal font-display font-bold text-xl">Value: $1,200</div>
              </div>
              <p className="body-premium text-foreground/80 leading-relaxed">
                30-day content calendar, 12 ready scripts, and a repurpose SOP to publish with clarity—not burnout.
              </p>
            </div>

            <div className="ssos-card p-8 border-brass/40 bg-gradient-to-br from-brass/5 via-background/80 to-brass/10">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <h4 className="heading-ritual text-2xl text-brass glow-golden mb-2 md:mb-0">
                  BONUS: Proof Architecture Pack
                </h4>
                <div className="text-signal font-display font-bold text-xl">Value: $1,200</div>
              </div>
              <p className="body-premium text-foreground/80 leading-relaxed">
                Intake/mid/outtake measures, testimonial prompts, and a case-page kit to make trust visible.
              </p>
            </div>

            <div className="ssos-card p-8 border-brass/40 bg-gradient-to-br from-brass/5 via-background/80 to-brass/10">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <h4 className="heading-ritual text-2xl text-brass glow-golden mb-2 md:mb-0">
                  BONUS: Aftercare 1:1 (60-min in Month 4)
                </h4>
                <div className="text-signal font-display font-bold text-xl">Value: $600</div>
              </div>
              <p className="body-premium text-foreground/80 leading-relaxed">
                A personal course-correction and next-steps plan once the system is live.
              </p>
            </div>
          </div>
        </div>

        {/* Guarantee */}
        <div className="mb-16 fade-up">
          <div className="ssos-card p-12 text-center border-signal/30 bg-gradient-to-br from-signal/5 via-background/80 to-signal/10">
            <h3 className="heading-ritual text-3xl md:text-4xl mb-8 glow-text text-signal">
              Guarantee
            </h3>
            <h4 className="heading-ritual text-2xl mb-6 text-brass glow-golden">
              30-Day Money-Back Guarantee.
            </h4>
            <p className="body-premium text-foreground/80 leading-relaxed max-w-3xl mx-auto">
              Join Sacred Signal OS and do the work for 30 days. If you don't feel clearer, more confident, and moving toward a steady pipeline, email us within 30 days for a full refund. No hassle.
            </p>
          </div>
        </div>

        {/* Why Decide Now */}
        <div className="mb-16 fade-up">
          <div className="ssos-card p-12 border-signal/30">
            <h3 className="heading-ritual text-3xl md:text-4xl mb-8 text-center glow-text text-signal">
              Why Decide Now
            </h3>
            <div className="space-y-6 max-w-4xl mx-auto">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-brass rounded-full mt-3 flex-shrink-0"></div>
                <p className="body-premium text-foreground/80 leading-relaxed">
                  <strong>Rolling start, limited capacity:</strong> We onboard a small number of new clients at a time to protect delivery quality. When capacity is reached, new starts pause until a seat opens.
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-brass rounded-full mt-3 flex-shrink-0"></div>
                <p className="body-premium text-foreground/80 leading-relaxed">
                  <strong>Bonus window:</strong> The three bonuses above are available during the current enrollment window and may be removed when capacity is met.
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-brass rounded-full mt-3 flex-shrink-0"></div>
                <p className="body-premium text-foreground/80 leading-relaxed">
                  <strong>Lock in current pricing:</strong> $1,600 is our current rate and will increase soon. Reserve your start now to secure today's price and begin at the next available opening.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Final Pricing */}
        <div className="fade-up">
          <div className="ssos-card text-center max-w-4xl mx-auto p-16 border-signal/30 bg-gradient-to-br from-signal/10 via-background/80 to-signal/5">
            <div className="mb-12">
              <div className="text-2xl text-signal font-display font-bold mb-2">Total Value: $18,800</div>
              <div className="text-lg text-foreground/60 mb-4 line-through">Only: $2,997</div>
              <div className="text-6xl font-display font-bold text-signal mb-4 glow-text">Your Price Today: $1,597</div>
            </div>
            
            <div className="mb-12">
              <p className="body-premium text-xl text-foreground/80 leading-relaxed max-w-3xl mx-auto">
                If all Sacred Signal OS did was give you a clear message and a steady, values-aligned pipeline, would it be worth $1,600?
              </p>
            </div>

            <button 
              className="bg-signal text-background hover:bg-signal/90 font-body font-semibold px-16 py-6 text-xl rounded-xl button-lift"
              onClick={scrollToApply}
            >
              Apply Now for Sacred Signal OS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferStackSection;