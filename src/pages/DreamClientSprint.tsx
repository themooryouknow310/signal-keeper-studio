import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import AnimatedSection from "@/components/AnimatedSection";
import { useState } from "react";

const DreamClientSprint = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    pastClients: '',
    competitor: '',
    channel: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <AnimatedSection className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6 leading-tight">
                Dream Client Signal Sprint
              </h1>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-signal mb-6">
                Who's Your Dream Customer—and Where Do They Hang Out?
              </h2>
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-3xl mx-auto">
                In 30–60 minutes, we'll define your buyer and map the places they already gather—so you can meet them this week.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* What You'll Get */}
        <AnimatedSection className="py-16 px-4 bg-muted/20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                You'll Leave With:
              </h3>
              <div className="bg-card border border-border rounded-lg p-8 shadow-lg">
                <p className="text-xl font-display font-semibold text-signal">
                  A Dream Customer Avatar, Locate-&-Engage Map + Your First 3 Moves.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Opt-in Form Section */}
        <AnimatedSection className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6 text-center">
                Get Your Dream Client Signal Sprint
              </h3>
              <p className="text-center text-foreground/80 mb-8">
                Complete this quick pre-work <span className="text-signal font-semibold">(2 minutes)</span> to book your session
              </p>
              
              <div className="bg-card border border-border rounded-lg p-8 shadow-lg">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-sm font-medium text-foreground mb-2 block">
                        First Name *
                      </Label>
                      <Input
                        id="firstName"
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-sm font-medium text-foreground mb-2 block">
                        Last Name *
                      </Label>
                      <Input
                        id="lastName"
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        required
                        className="w-full"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-foreground mb-2 block">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                      className="w-full"
                    />
                  </div>

                  {/* Pre-work Questions */}
                  <div className="border-t border-border pt-6">
                    <h4 className="text-lg font-display font-semibold text-foreground mb-4">Pre-work Questions</h4>
                    
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="pastClients" className="text-sm font-medium text-foreground mb-2 block">
                          1. Describe 3 favorite past clients (bullets) *
                        </Label>
                        <Textarea
                          id="pastClients"
                          value={formData.pastClients}
                          onChange={(e) => handleInputChange('pastClients', e.target.value)}
                          required
                          placeholder="• Client 1&#10;• Client 2&#10;• Client 3"
                          rows={4}
                          className="w-full"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="competitor" className="text-sm font-medium text-foreground mb-2 block">
                          2. Paste one competitor or leader your audience follows *
                        </Label>
                        <Input
                          id="competitor"
                          type="text"
                          value={formData.competitor}
                          onChange={(e) => handleInputChange('competitor', e.target.value)}
                          required
                          placeholder="Name or website/social handle"
                          className="w-full"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="channel" className="text-sm font-medium text-foreground mb-2 block">
                          3. Share one channel you actually enjoy (LinkedIn, IG, groups, forums) *
                        </Label>
                        <Input
                          id="channel"
                          type="text"
                          value={formData.channel}
                          onChange={(e) => handleInputChange('channel', e.target.value)}
                          required
                          placeholder="LinkedIn, Instagram, Facebook Groups, etc."
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button type="submit" size="lg" variant="cyan" className="w-full text-lg">
                      Book My Dream Client Signal Sprint
                    </Button>
                    <p className="text-xs text-foreground/60 text-center mt-3">
                      Discover Your Dream Customer in Under an Hour
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Guarantee Section */}
        <AnimatedSection className="py-16 px-4 bg-muted/20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">
                Guarantee
              </h3>
              <div className="bg-card border border-signal/20 rounded-lg p-8 shadow-lg">
                <p className="text-lg leading-relaxed">
                  If we can't land a clear customer definition and at least three viable congregation points in 45 minutes, we'll simplify and ship the best working draft.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

      </main>
      <Footer />
    </div>
  );
};

export default DreamClientSprint;