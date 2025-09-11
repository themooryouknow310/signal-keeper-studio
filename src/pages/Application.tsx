import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@/assets/cinema/hero-spiritual-teacher.jpg";
import AnimatedSection from "@/components/AnimatedSection";
import SignalLineDivider from "@/components/accents/SignalLineDivider";
import "../styles/cinema.css";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
});

const Application = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log(values);
      toast({
        title: "Application Submitted!",
        description: "We'll review your application and be in touch within 48 hours.",
      });
      setIsSubmitting(false);
      form.reset();
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-card/10 to-background">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
        {/* Cinematic Background */}
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Sacred Signal OS Application Background" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/30 to-background/50" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 text-center max-w-6xl">
          {/* Main Headline */}
          <AnimatedSection delay={200}>
            <h1 className="heading-ritual text-4xl md:text-6xl lg:text-7xl mb-16 leading-none">
              <div className="hero-shout text-white mb-2">
                READY TO TRANSFORM
              </div>
              <div className="hero-void text-signal">
                YOUR SACRED SIGNAL?
              </div>
            </h1>
          </AnimatedSection>

          {/* Video Section */}
          <AnimatedSection delay={400} className="mb-20 max-w-4xl mx-auto">
            <div className="cinema-hero relative aspect-video rounded-2xl cinema-surface overflow-hidden group">
              <video 
                className="w-full h-full object-cover"
                poster={heroImage}
                controls
                preload="metadata"
              >
                <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
                <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
              
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="w-16 h-16 bg-signal/20 border border-signal rounded-full flex items-center justify-center backdrop-blur-sm">
                  <div className="w-0 h-0 border-l-[12px] border-l-signal border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                </div>
              </div>
            </div>
            <div className="text-center mt-8">
              <p className="text-signal font-medium text-lg mb-2">Your Journey Begins Here</p>
              <p className="text-foreground/60">See How Sacred Signal OS Will Transform Your Business</p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={600}>
            <p className="body-premium text-2xl md:text-3xl text-foreground max-w-4xl mx-auto leading-relaxed font-light cinema-text-shadow mb-12">
              Join The Select Few Who Are Ready To Stop Chasing And Start Attracting Their Ideal Clients
            </p>
            <SignalLineDivider />
          </AnimatedSection>
        </div>
      </section>

      {/* Application Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-stretch">
              
              {/* Left Column - Testimonial (1/3) */}
              <div className="lg:col-span-1">
                <AnimatedSection delay={200}>
                  <Card className="bg-gradient-to-br from-signal/5 via-background/80 to-signal/10 border border-signal/20 shadow-[0_20px_60px_-10px_hsl(var(--signal-glow)/0.2)] overflow-hidden h-full">
                    <CardContent className="p-8 h-full flex flex-col justify-between">
                        <div className="text-center mb-6">
                          <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-signal/30 mb-6 mx-auto shadow-[0_4px_16px_hsl(var(--signal-glow)/0.2)]">
                            <img 
                              src="/lovable-uploads/bd2cb781-a6cc-413a-80c6-1011862ff09a.png" 
                              alt="Marissa Fontana" 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <img src="/lovable-uploads/3577b1e4-f101-4b3d-a7ac-74b52ee58e57.png" alt="Sacred geometry pattern" className="w-8 h-8 mb-6 mx-auto" />
                        </div>
                        
                        <blockquote className="body-premium text-foreground/80 leading-relaxed mb-6 text-center italic">
                          "Every interaction with Barack has been clear and kind, loving and empowering; I Am truly honoured to be a part of the women leaders and GODdesses on his platform, and more so deeply blessed to grow connection with this radiant being of light."
                        </blockquote>
                        
                        <div className="text-center">
                          <div className="text-signal font-semibold text-lg">
                            Lady Drasmin
                          </div>
                          <div className="text-foreground/60 text-sm">
                            International Best Selling Author
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                </AnimatedSection>
              </div>

              {/* Right Column - Application Form (2/3) */}
              <div className="lg:col-span-2 flex flex-col justify-end h-full">
                <AnimatedSection delay={400}>
                  <div className="space-y-6 mt-0">
                    
                    {/* Header */}
                    <div className="text-center">
                      <h2 className="heading-ritual text-3xl md:text-4xl lg:text-5xl mb-4 glow-text">
                        Very Limited Openings – Apply Here Now
                      </h2>
                      <p className="body-premium text-xl text-foreground/90 leading-relaxed max-w-3xl mx-auto mb-8">
                        Transform your scattered efforts into a resonant signal that attracts your ideal clients with ease and authenticity.
                      </p>
                    </div>

                    {/* Application Form */}
                    <Card className="bg-gradient-to-br from-signal/5 via-background/90 to-signal/10 border border-signal/20 shadow-[0_20px_60px_-10px_hsl(var(--signal-glow)/0.2)]">
                      <CardContent className="p-8">
                        <Form {...form}>
                          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel className="text-foreground font-medium">Full Name</FormLabel>
                                    <FormControl>
                                      <Input 
                                        placeholder="Enter your full name" 
                                        {...field}
                                        className="bg-background/50 border-signal/20 focus:border-signal"
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              
                              <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel className="text-foreground font-medium">Email Address</FormLabel>
                                    <FormControl>
                                      <Input 
                                        type="email"
                                        placeholder="Enter your email address" 
                                        {...field}
                                        className="bg-background/50 border-signal/20 focus:border-signal"
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>

                            <div className="text-center pt-4">
                              <Button 
                                type="submit"
                                size="lg"
                                disabled={isSubmitting}
                                className="signal-glow bg-signal text-background hover:bg-signal/90 font-body font-semibold px-16 py-6 text-xl transition-all duration-300 shadow-[0_8px_32px_hsl(var(--signal-glow)/0.3)] w-full md:w-auto"
                              >
                                {isSubmitting ? "Submitting..." : "Apply Now For Sacred Signal OS"}
                              </Button>
                            </div>

                            <div className="text-center">
                              <p className="body-premium text-sm text-foreground/70">
                                Applications Reviewed Within 48 Hours • No Spam, Ever
                              </p>
                            </div>

                          </form>
                        </Form>
                      </CardContent>
                    </Card>

                  </div>
                </AnimatedSection>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Application;