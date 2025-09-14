import { Copy, Twitter, Linkedin, TrendingUp, Users, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import AnimatedSection from "./AnimatedSection";
import SignalLineDivider from "./accents/SignalLineDivider";
import { LinearAccent } from "./AccentElements";

const IndustryStatisticsSection = () => {
  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = "Discover the latest research on empath entrepreneurs and HSPs";
    
    switch (platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        toast.success("Link copied to clipboard!");
        break;
    }
  };

  return (
    <section className="py-32 relative overflow-hidden bg-gradient-to-b from-background/95 via-background/50 to-background">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--signal))_0%,transparent_70%)] opacity-5" />
      
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-20">
            <div className="flex items-center justify-center mb-8">
              <LinearAccent width={300} />
            </div>
            <h2 className="heading-ritual text-3xl md:text-5xl lg:text-6xl mb-8 glow-text">
              INDUSTRY STATISTICS & RESEARCH
            </h2>
            <p className="body-premium text-xl md:text-2xl text-foreground/90 max-w-4xl mx-auto leading-relaxed font-light">
              Latest research findings on highly sensitive entrepreneurs and the intersection of empathy and business success
            </p>
            <div className="flex justify-center mt-12">
              <SignalLineDivider />
            </div>
          </div>
        </AnimatedSection>

        {/* Featured Statistics */}
        <AnimatedSection delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24 max-w-6xl mx-auto">
            {/* 30% HSP Population */}
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="text-8xl md:text-9xl font-bold text-signal cinema-glow group-hover:scale-105 transition-transform duration-300">
                  30%
                </div>
                <div className="absolute inset-0 bg-signal blur-3xl opacity-10 animate-pulse" />
              </div>
              <h3 className="ssos-card-title text-xl mb-4">
                HIGHLY SENSITIVE PERSONS
              </h3>
              <p className="body-premium text-foreground/75 leading-relaxed">
                Updated research shows 30% of the population are HSPs, significantly higher than previous 20% estimates
              </p>
            </div>

            {/* 87.7% Mental Health */}
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="text-8xl md:text-9xl font-bold text-brass cinema-glow group-hover:scale-105 transition-transform duration-300">
                  87.7%
                </div>
                <div className="absolute inset-0 bg-brass blur-3xl opacity-10 animate-pulse" />
              </div>
              <h3 className="ssos-card-title text-xl mb-4">
                ENTREPRENEURS STRUGGLE
              </h3>
              <p className="body-premium text-foreground/75 leading-relaxed">
                Of entrepreneurs experience at least one mental health challenge, highlighting the need for specialized support
              </p>
            </div>

            {/* 45% Less Burnout */}
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="text-8xl md:text-9xl font-bold text-cyan cinema-glow group-hover:scale-105 transition-transform duration-300">
                  45%
                </div>
                <div className="absolute inset-0 bg-cyan blur-3xl opacity-10 animate-pulse" />
              </div>
              <h3 className="ssos-card-title text-xl mb-4">
                LESS BURNOUT WITH SUPPORT
              </h3>
              <p className="body-premium text-foreground/75 leading-relaxed">
                Entrepreneurs with proper support networks are 45% less likely to experience burnout symptoms
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Research-Backed Insights */}
        <AnimatedSection delay={400}>
          <div className="mb-20">
            <h3 className="heading-ritual text-3xl md:text-4xl mb-16 text-center glow-text">
              RESEARCH-BACKED INSIGHTS
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="ssos-card group">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-full bg-signal/10 border border-signal/30 mr-4 group-hover:bg-signal/20 transition-colors">
                    <TrendingUp className="w-6 h-6 text-signal" />
                  </div>
                  <h4 className="ssos-card-title text-lg">Empathy Advantage</h4>
                </div>
                <p className="body-premium text-foreground/75 leading-relaxed">
                  Empathetic entrepreneurs create more cohesive teams, stronger client relationships, and more authentic leadership approaches
                </p>
              </div>

              <div className="ssos-card group">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-full bg-brass/10 border border-brass/30 mr-4 group-hover:bg-brass/20 transition-colors">
                    <Users className="w-6 h-6 text-brass" />
                  </div>
                  <h4 className="ssos-card-title text-lg">Three-Group System</h4>
                </div>
                <p className="body-premium text-foreground/75 leading-relaxed">
                  Recent studies identify Orchids (30% highly sensitive), Tulips (40% moderate), and Dandelions (30% low sensitivity)
                </p>
              </div>

              <div className="ssos-card group">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-full bg-cyan/10 border border-cyan/30 mr-4 group-hover:bg-cyan/20 transition-colors">
                    <Shield className="w-6 h-6 text-cyan" />
                  </div>
                  <h4 className="ssos-card-title text-lg">Meaningful Work Protection</h4>
                </div>
                <p className="body-premium text-foreground/75 leading-relaxed">
                  Entrepreneurs experience lower burnout than employees due to autonomy, purpose-driven work, and meaningful engagement
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Social Share Section */}
        <AnimatedSection delay={600}>
          <div className="text-center mb-16">
            <h4 className="heading-ritual text-2xl mb-8 glow-text">
              SHARE THESE INSIGHTS
            </h4>
            <div className="flex justify-center gap-4">
              <Button
                variant="outline"
                size="lg"
                onClick={() => handleShare('twitter')}
                className="cinema-glow border-signal/30 text-signal hover:bg-signal/10"
              >
                <Twitter className="w-5 h-5 mr-2" />
                Twitter
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => handleShare('linkedin')}
                className="cinema-glow border-brass/30 text-brass hover:bg-brass/10"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => handleShare('copy')}
                className="cinema-glow border-cyan/30 text-cyan hover:bg-cyan/10"
              >
                <Copy className="w-5 h-5 mr-2" />
                Copy Link
              </Button>
            </div>
          </div>
        </AnimatedSection>

        {/* Citation Footer */}
        <AnimatedSection delay={800}>
          <div className="border-t border-brass/20 pt-12 mt-20">
            <div className="text-center">
              <h5 className="font-semibold text-brass mb-4">Research Sources</h5>
              <div className="text-sm text-foreground/60 max-w-4xl mx-auto space-y-2">
                <p>• Highly Sensitive Person population data: 2024 international validation studies including Saudi Arabian research (29% prevalence)</p>
                <p>• Entrepreneur mental health statistics: 2024 comprehensive industry reports and peer-reviewed studies</p>
                <p>• Support network impact: Recent research on entrepreneurial wellbeing and community effects</p>
                <p>• Empathy in entrepreneurship: Studies on leadership effectiveness and team cohesion in empathetic leaders</p>
              </div>
              <p className="text-xs text-foreground/40 mt-6">
                All statistics current as of 2024 and sourced from peer-reviewed research and industry reports
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default IndustryStatisticsSection;