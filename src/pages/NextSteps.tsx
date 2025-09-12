import AnimatedSection from '@/components/AnimatedSection';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Clock, Mail, Video } from 'lucide-react';

const NextSteps = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-signal/5">
      <Navigation />
      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="heading-ritual text-6xl md:text-7xl lg:text-8xl mb-6 glow-text text-center">
                Congratulations!
              </h1>
              <p className="body-premium text-2xl md:text-3xl text-foreground/90 leading-relaxed">
                We Have Your Application. Here's What To Expect Next…
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <AnimatedSection delay={200}>
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="heading-ritual text-3xl md:text-4xl lg:text-5xl mb-6">
                  Step #1 Watch This Now – This Is Why I'm SO PASSIONATE About Helping YOU To Spread Your Message:
                </h2>
              </div>
              
              <Card className="bg-background/60 backdrop-blur border-signal/20 shadow-2xl">
                <CardContent className="p-8">
                  <div className="aspect-video bg-background/40 rounded-lg flex items-center justify-center border border-signal/20">
                    <div className="text-center">
                      <Video className="w-20 h-20 text-signal/60 mx-auto mb-4" />
                      <p className="body-premium text-foreground/70">
                        Video will be embedded here
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Next Steps Section */}
      <section className="py-16 pb-32">
        <div className="container mx-auto px-6">
          <AnimatedSection delay={400}>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                
                {/* Step 1 */}
                <Card className="bg-background/60 backdrop-blur border-signal/20 shadow-xl">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-6">
                      <div className="flex-shrink-0 flex justify-center items-center">
                        <img 
                          src="/lovable-uploads/197eeb61-edcc-4347-b214-8c726272e5cb.png" 
                          alt="Sacred geometry symbol"
                          className="w-20 h-20"
                        />
                      </div>
                      <div>
                        <h3 className="heading-ritual text-xl mb-4 text-signal glow-text">First</h3>
                        <p className="body-premium text-white leading-relaxed">
                          We have received your application, and in the next 24-48 hours I will be reviewing and pre-approving your application.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Step 2 */}
                <Card className="bg-background/60 backdrop-blur border-signal/20 shadow-xl">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-6">
                      <div className="flex-shrink-0 flex justify-center items-center">
                        <img 
                          src="/lovable-uploads/197eeb61-edcc-4347-b214-8c726272e5cb.png" 
                          alt="Sacred geometry symbol"
                          className="w-20 h-20"
                        />
                      </div>
                      <div>
                        <h3 className="heading-ritual text-xl mb-4 text-signal glow-text">Second</h3>
                        <p className="body-premium text-white leading-relaxed">
                          If I personally pre-approve your application, then we will setup a call and look at your goals, your plan to get there, and see if Sacred Signal OS will be a good fit for you.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Step 3 */}
                <Card className="bg-background/60 backdrop-blur border-signal/20 shadow-xl">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-6">
                      <div className="flex-shrink-0 flex justify-center items-center">
                        <img 
                          src="/lovable-uploads/197eeb61-edcc-4347-b214-8c726272e5cb.png" 
                          alt="Sacred geometry symbol"
                          className="w-20 h-20"
                        />
                      </div>
                      <div>
                        <h3 className="heading-ritual text-xl mb-4 text-signal glow-text">Third</h3>
                        <p className="body-premium text-white leading-relaxed">
                          You should have an email right now with some of the initial training from week #1 of the Sacred Signal OS Program! Dive into it now and start learning so you'll be ready when they call!
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default NextSteps;