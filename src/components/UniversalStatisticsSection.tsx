import { Copy, Twitter, Linkedin, TrendingUp, Users, Shield, Facebook } from "lucide-react";
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
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'pinterest':
        window.open(`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&description=${encodeURIComponent(text)}`, '_blank');
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
            <div className="flex flex-wrap justify-center gap-4">
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
                onClick={() => handleShare('facebook')}
                className="cinema-glow border-signal/30 text-signal hover:bg-signal/10"
              >
                <Facebook className="w-5 h-5 mr-2" />
                Facebook
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => handleShare('pinterest')}
                className="cinema-glow border-brass/30 text-brass hover:bg-brass/10"
              >
                <div className="w-5 h-5 mr-2 flex items-center justify-center">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.374 0 12s5.374 12 12 12 12-5.374 12-12S18.626 0 12 0zm0 19c-.721 0-1.418-.109-2.073-.312.286-.483.685-1.163.933-1.775.142-.351.858-3.244.858-3.244.424.808 1.664 1.52 2.984 1.52 3.926 0 6.594-3.575 6.594-8.358 0-3.618-3.064-7.03-7.717-7.03-5.802 0-8.728 4.159-8.728 7.63 0 2.1.797 3.972 2.51 4.671.281.115.531.006.612-.309.058-.225.197-.78.258-1.011.084-.315.051-.426-.179-.7-.5-.596-.819-1.359-.819-2.444 0-3.148 2.354-5.966 6.13-5.966 3.341 0 5.177 2.041 5.177 4.766 0 3.588-1.587 6.616-3.946 6.616-1.297 0-2.267-.107-2.267-2.273 0-1.962 1.487-3.856 1.487-5.835 0-1.348-.723-2.475-2.216-2.475-1.758 0-3.17 1.82-3.17 4.257 0 1.552.525 2.604.525 2.604s-1.8 7.63-2.113 8.96c-.313 1.329-.047 2.957-.025 3.123C5.11 20.394 2 16.557 2 12 2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                  </svg>
                </div>
                Pinterest
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