import { Download, Share2, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import AnimatedSection from "./AnimatedSection";
import SignalLineDivider from "./accents/SignalLineDivider";
import { ModalityServiceConfig } from "@/config/modalityServiceConfig";
import { interpolateContent } from "@/config/contentTemplates";

interface UniversalResourceSectionProps {
  config: ModalityServiceConfig;
}

const UniversalResourceSection = ({ config }: UniversalResourceSectionProps) => {
  const frameworkTitle = interpolateContent("The {{Modality}} {{Service}} Success Framework", config);
  const toolkitTitle = interpolateContent("{{Modality}} {{Audience}} Success Toolkit", config);
  const embedCode = `<img src="https://sacredsignalos.com/${config.urlSlug}-framework.png" alt="${frameworkTitle}" />
<p>Via <a href="https://sacredsignalos.com/${config.urlSlug}/">Sacred Signal OS</a></p>`;

  const handleDownload = (resourceType: string) => {
    // In a real implementation, this would trigger actual downloads
    toast.success(`${resourceType} download started!`);
  };

  const handleCopyEmbed = () => {
    navigator.clipboard.writeText(embedCode);
    toast.success("Embed code copied to clipboard!");
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-20">
            <h2 className="heading-ritual text-3xl md:text-5xl mb-8 glow-text">
              FREE RESOURCES FOR {config.modality.toUpperCase()} {config.audience.toUpperCase()}
            </h2>
            <p className="body-premium text-xl text-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Exclusive resources designed specifically for {config.modality.toLowerCase()} {config.audience.toLowerCase()} in {config.service.toLowerCase()}
            </p>
            <div className="flex justify-center mt-12">
              <SignalLineDivider />
            </div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Framework Infographic */}
          <AnimatedSection delay={200}>
            <div className="ssos-card">
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-full bg-${config.primaryColor}/10 border border-${config.primaryColor}/30 mr-4`}>
                  <Share2 className={`w-6 h-6 text-${config.primaryColor}`} />
                </div>
                <h3 className="ssos-card-title text-xl">{frameworkTitle}</h3>
              </div>
              
              {/* Placeholder for infographic */}
              <div className={`w-full h-64 rounded-lg bg-gradient-to-br from-${config.primaryColor}/10 to-${config.primaryColor}/5 border border-${config.primaryColor}/20 flex items-center justify-center mb-6`}>
                <div className="text-center">
                  <div className={`w-16 h-16 rounded-full bg-${config.primaryColor}/20 flex items-center justify-center mb-4 mx-auto`}>
                    <Share2 className={`w-8 h-8 text-${config.primaryColor}`} />
                  </div>
                  <p className="text-foreground/60">Infographic Preview</p>
                </div>
              </div>

              <p className="body-premium text-foreground/75 mb-6">
                A comprehensive visual guide to building a successful {config.modality.toLowerCase()} {config.service.toLowerCase()} practice
              </p>

              {/* Embed Code */}
              <div className="bg-background/50 border border-brass/20 rounded-lg p-4 mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-brass">Embed Code:</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleCopyEmbed}
                    className="text-brass hover:bg-brass/10"
                  >
                    <Code className="w-4 h-4 mr-1" />
                    Copy
                  </Button>
                </div>
                <code className="text-xs text-foreground/60 block overflow-x-auto">
                  {embedCode}
                </code>
              </div>

              <Button
                onClick={() => handleDownload('Framework Infographic')}
                className={`w-full bg-${config.primaryColor}/10 text-${config.primaryColor} border border-${config.primaryColor}/30 hover:bg-${config.primaryColor}/20`}
                variant="outline"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Infographic
              </Button>
            </div>
          </AnimatedSection>

          {/* Success Toolkit */}
          <AnimatedSection delay={400}>
            <div className="ssos-card">
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-full bg-brass/10 border border-brass/30 mr-4`}>
                  <Download className="w-6 h-6 text-brass" />
                </div>
                <h3 className="ssos-card-title text-xl">{toolkitTitle}</h3>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-signal mr-3"></div>
                  <span className="body-premium">Business templates tailored for {config.modality.toLowerCase()} {config.audience.toLowerCase()}</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-brass mr-3"></div>
                  <span className="body-premium">{config.service} strategy worksheets</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-cyan mr-3"></div>
                  <span className="body-premium">Client onboarding systems</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-signal mr-3"></div>
                  <span className="body-premium">Energy management guides</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-brass mr-3"></div>
                  <span className="body-premium">Pricing calculators and templates</span>
                </div>
              </div>

              <Button
                onClick={() => handleDownload('Success Toolkit')}
                className="w-full bg-brass/10 text-brass border border-brass/30 hover:bg-brass/20"
                variant="outline"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Complete Toolkit
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default UniversalResourceSection;