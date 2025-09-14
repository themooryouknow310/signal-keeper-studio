import { Copy, Twitter, Linkedin, TrendingUp, Users, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import AnimatedSection from "./AnimatedSection";
import SignalLineDivider from "./accents/SignalLineDivider";
import { LinearAccent } from "./AccentElements";
import { ModalityServiceConfig } from "@/config/modalityServiceConfig";
import { getInterpolatedStatistics, getInterpolatedInsights } from "@/config/contentTemplates";

interface UniversalStatisticsSectionProps {
  config: ModalityServiceConfig;
}

const iconMap = {
  TrendingUp,
  Users,
  Shield
};

const UniversalStatisticsSection = ({ config }: UniversalStatisticsSectionProps) => {
  const statistics = getInterpolatedStatistics(config);
  const insights = getInterpolatedInsights(config);

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = `Discover the latest research on ${config.modality.toLowerCase()} ${config.audience.toLowerCase()} and ${config.service.toLowerCase()}`;
    
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
              Latest research findings on {config.modality.toLowerCase()} {config.audience.toLowerCase()} and the intersection of {config.modality.toLowerCase()} and {config.service.toLowerCase()} success
            </p>
            <div className="flex justify-center mt-12">
              <SignalLineDivider />
            </div>
          </div>
        </AnimatedSection>

        {/* Featured Statistics */}
        <AnimatedSection delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24 max-w-6xl mx-auto">
            {statistics.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-8">
                  <div className={`text-8xl md:text-9xl font-bold text-${stat.color} cinema-glow group-hover:scale-105 transition-transform duration-300`}>
                    {stat.value}
                  </div>
                  <div className={`absolute inset-0 bg-${stat.color} blur-3xl opacity-10 animate-pulse`} />
                </div>
                <h3 className="ssos-card-title text-xl mb-4">
                  {stat.title}
                </h3>
                <p className="body-premium text-foreground/75 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Research-Backed Insights */}
        <AnimatedSection delay={400}>
          <div className="mb-20">
            <h3 className="heading-ritual text-3xl md:text-4xl mb-16 text-center glow-text">
              RESEARCH-BACKED INSIGHTS
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {insights.map((insight, index) => {
                const IconComponent = iconMap[insight.icon as keyof typeof iconMap];
                return (
                  <div key={index} className="ssos-card group">
                    <div className="flex items-center mb-6">
                      <div className={`p-3 rounded-full bg-${insight.color}/10 border border-${insight.color}/30 mr-4 group-hover:bg-${insight.color}/20 transition-colors`}>
                        <IconComponent className={`w-6 h-6 text-${insight.color}`} />
                      </div>
                      <h4 className="ssos-card-title text-lg">{insight.title}</h4>
                    </div>
                    <p className="body-premium text-foreground/75 leading-relaxed">
                      {insight.description}
                    </p>
                  </div>
                );
              })}
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
                <p>• {config.service} professional mental health statistics: 2024 comprehensive industry reports and peer-reviewed studies</p>
                <p>• {config.modality} support network impact: Recent research on {config.audience.toLowerCase()} wellbeing and community effects</p>
                <p>• {config.modality} in {config.service.toLowerCase()}: Studies on leadership effectiveness and team cohesion in {config.modality.toLowerCase()} leaders</p>
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

export default UniversalStatisticsSection;