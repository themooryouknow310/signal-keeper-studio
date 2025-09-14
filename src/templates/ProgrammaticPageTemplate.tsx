import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import UniversalStatisticsSection from "@/components/UniversalStatisticsSection";
import UniversalResourceSection from "@/components/UniversalResourceSection";
import { ModalityServiceConfig } from "@/config/modalityServiceConfig";
import { interpolateContent } from "@/config/contentTemplates";

interface ProgrammaticPageTemplateProps {
  config: ModalityServiceConfig;
}

const ProgrammaticPageTemplate = ({ config }: ProgrammaticPageTemplateProps) => {
  // JSON-LD Schema for SEO
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://sacredsignalos.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": `${config.modality} ${config.service}`,
        "item": `https://sacredsignalos.com/${config.urlSlug}`
      }
    ]
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Sacred Signal OS",
    "url": "https://sacredsignalos.com",
    "description": `Specialized ${config.service.toLowerCase()} for ${config.modality.toLowerCase()} ${config.audience.toLowerCase()}`,
    "serviceArea": "Global"
  };

  return (
    <>
      <Helmet>
        <title>{config.seoTitle}</title>
        <meta name="description" content={config.seoDescription} />
        <meta name="keywords" content={config.keywords.join(', ')} />
        
        {/* Open Graph */}
        <meta property="og:title" content={config.seoTitle} />
        <meta property="og:description" content={config.seoDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://sacredsignalos.com/${config.urlSlug}`} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={config.seoTitle} />
        <meta name="twitter:description" content={config.seoDescription} />
        
        {/* Canonical URL */}
        <link rel="canonical" href={`https://sacredsignalos.com/${config.urlSlug}`} />
        
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        
        <main>
          {/* Hero Section */}
          <section className="py-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--signal))_0%,transparent_70%)] opacity-10" />
            
            <div className="container mx-auto px-6 relative z-10">
              <div className="text-center max-w-4xl mx-auto">
                <h1 className="heading-ritual text-4xl md:text-6xl lg:text-7xl mb-8 glow-text">
                  {interpolateContent("Transform Your {{Modality}} Gifts Into A Thriving {{Service}} Business", config)}
                </h1>
                <p className="body-premium text-xl md:text-2xl text-foreground/90 leading-relaxed mb-12">
                  {interpolateContent("Specialized {{service}} for {{modality}} {{audience}} ready to build authentic, sustainable businesses that honor their unique gifts", config)}
                </p>
              </div>
            </div>
          </section>

          {/* Statistics Section */}
          <UniversalStatisticsSection config={config} />

          {/* Resources Section */}
          <UniversalResourceSection config={config} />

          {/* Problem Section */}
          <section className="py-24 relative">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="heading-ritual text-3xl md:text-5xl mb-8 glow-text">
                  {interpolateContent("The {{Modality}} {{Audience}}'s Dilemma", config)}
                </h2>
                <p className="body-premium text-xl text-foreground/90 max-w-3xl mx-auto">
                  {interpolateContent("Traditional {{service}} advice wasn't designed for {{modality}} {{audience}}", config)}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <div className="ssos-card">
                  <h3 className="ssos-card-title mb-4">
                    {interpolateContent("{{Modality}} Overwhelm", config)}
                  </h3>
                  <p className="body-premium text-foreground/75">
                    {interpolateContent("Your {{modality}} abilities can become overwhelming in traditional {{service}} environments", config)}
                  </p>
                </div>
                
                <div className="ssos-card">
                  <h3 className="ssos-card-title mb-4">Authenticity Struggles</h3>
                  <p className="body-premium text-foreground/75">
                    {interpolateContent("Generic {{service}} strategies feel inauthentic to your {{modality}} nature", config)}
                  </p>
                </div>
                
                <div className="ssos-card">
                  <h3 className="ssos-card-title mb-4">Energy Depletion</h3>
                  <p className="body-premium text-foreground/75">
                    {interpolateContent("Traditional {{service}} approaches drain your energy instead of sustaining it", config)}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Solution Section */}
          <section className="py-24 relative bg-gradient-to-b from-background to-background/50">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="heading-ritual text-3xl md:text-5xl mb-8 glow-text">
                  {interpolateContent("Sacred Signal OS for {{Modality}} {{Audience}}", config)}
                </h2>
                <p className="body-premium text-xl text-foreground/90 max-w-3xl mx-auto">
                  {interpolateContent("A specialized {{service}} methodology designed specifically for {{modality}} {{audience}}", config)}
                </p>
              </div>

              <div className="max-w-4xl mx-auto">
                <div className="ssos-card text-center p-12">
                  <h3 className="ssos-card-title text-2xl mb-6">
                    {interpolateContent("Ready to transform your {{modality}} gifts into {{service}} success?", config)}
                  </h3>
                  <p className="body-premium text-foreground/75 mb-8">
                    {interpolateContent("Join other {{modality}} {{audience}} who have built thriving {{service}} businesses", config)}
                  </p>
                  <button className={`cinema-button bg-${config.primaryColor}/10 text-${config.primaryColor} border-${config.primaryColor}/30 hover:bg-${config.primaryColor}/20`}>
                    {interpolateContent("Start Your {{Modality}} {{Service}} Journey", config)}
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ProgrammaticPageTemplate;