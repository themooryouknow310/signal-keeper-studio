import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Download, CheckCircle } from 'lucide-react';
import CyanSLogo from '@/components/accents/CyanSLogo';
import BrassRule from '@/components/accents/BrassRule';
import BrassMedallion from '@/components/accents/BrassMedallion';
import SignalLineDivider from '@/components/accents/SignalLineDivider';
import AnimatedSection from '@/components/AnimatedSection';
import SignalRing from '@/components/SignalRing';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
const heroImage = '/lovable-uploads/43b5c4db-0f9c-4433-aebb-19f3478779d6.png';
import "../styles/cinema.css";

const formSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  firstName: z.string().min(2, 'Please enter your first name'),
});

type FormData = z.infer<typeof formSchema>;

const OriginStoryStudio = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      firstName: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    // Here you would integrate with your email service (Mailchimp, ConvertKit, etc.)
    console.log('Form submitted:', data);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    navigate('/origin-story-thank-you');
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Origin Story Studio Background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/98 via-background/85 to-background/95" />
      </div>

      {/* Header */}
      <header className="border-b border-border/50 backdrop-blur-sm relative z-20">
        <div className="container mx-auto px-6 py-6 flex items-center">
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity motion-glow-hover">
            <ArrowLeft className="h-5 w-5 text-brass" />
            <CyanSLogo size={32} />
            <span className="font-display text-xl font-bold tracking-wider text-foreground">
              SACRED SIGNAL OS
            </span>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-8 px-6 overflow-hidden">
        <div className="container mx-auto max-w-5xl relative z-10">
          <AnimatedSection delay={200}>
            <div className="text-center mb-8">
              {/* Enhanced Header */}
              <div className="max-w-4xl mx-auto mb-6 py-4">
                {/* SignalRing positioned above */}
                <div className="flex justify-center mb-8">
                  <SignalRing size={80} className="text-signal motion-fade drop-shadow-lg" />
                </div>
                
                {/* Decorative Elements */}
                <div className="flex items-center justify-center mb-8 space-x-8">
                  <BrassRule width={120} className="opacity-60" />
                  <BrassMedallion size={16} className="flex-shrink-0">
                    <div className="w-full h-full bg-brass/60 rounded-full" />
                  </BrassMedallion>
                  <BrassRule width={120} className="opacity-60" />
                </div>
                
                {/* Enhanced Typography */}
                <h1 className="heading-display text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tight cinema-text-shadow">
                  <span className="hero-shout text-foreground block mb-4 leading-none">ORIGIN STORY</span>
                  <span className="hero-void text-signal leading-none block">STUDIO</span>
                </h1>
                
                {/* Bottom Decorative Elements */}
                <div className="flex items-center justify-center mt-8 space-x-8">
                  <BrassRule width={120} className="opacity-60" />
                  <BrassMedallion size={16} className="flex-shrink-0">
                    <div className="w-full h-full bg-signal/60 rounded-full" />
                  </BrassMedallion>
                  <BrassRule width={120} className="opacity-60" />
                </div>
              </div>
              
              <SignalLineDivider className="mb-12" />
              
              <p className="body-premium text-xl md:text-2xl text-foreground/90 leading-relaxed mb-12 max-w-4xl mx-auto cinema-text-shadow">
                A Free Interactive Web Application That Guides You Step-by-Step To Craft Your Compelling Origin Story
              </p>
              
              {/* Feature Image */}
              <div className="mb-12 max-w-xs mx-auto">
                <img 
                  src="/lovable-uploads/82cbd216-75df-4709-8312-18cfb42d9a42.png" 
                  alt="Origin Story Studio Interface - Craft Your Sacred Journey"
                  className="w-full h-auto rounded-2xl shadow-2xl cinema-glow"
                />
              </div>
              
              <p className="body-premium text-xl md:text-3xl text-signal font-bold leading-relaxed max-w-4xl mx-auto cinema-text-shadow mb-4">
                From Hidden Healer to Recognized Authority
              </p>
              
              <p className="body-premium text-lg md:text-xl text-foreground/80 font-medium italic leading-relaxed max-w-3xl mx-auto cinema-text-shadow">
                The guided storytelling experience that transforms your personal journey into client-attracting content
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Benefits */}
            <AnimatedSection delay={400}>
              <div className="space-y-10">
                <h2 className="heading-section text-3xl md:text-4xl font-bold text-foreground mb-8 cinema-text-shadow">
                  What You'll Create:
                </h2>
                
                <div className="space-y-10">
                  <div>
                    <h3 className="font-display font-bold text-foreground mb-3 text-xl">
                      <span className="text-brass">Your Sacred Origin Story</span>
                    </h3>
                    <p className="text-foreground/80 body-premium">
                      The narrative that transforms you from another coach into the guide they've been searching for
                    </p>
                  </div>

                  <div>
                    <h3 className="font-display font-bold text-foreground mb-3 text-xl">
                      <span className="text-brass">Professional About Section</span>
                    </h3>
                    <p className="text-foreground/80 body-premium">
                      Website copy that instantly builds trust and positions you as the obvious expert
                    </p>
                  </div>

                  <div>
                    <h3 className="font-display font-bold text-foreground mb-3 text-xl">
                      <span className="text-brass">Your Core Beliefs</span>
                    </h3>
                    <p className="text-foreground/80 body-premium">
                      Clear values that attract aligned clients and filter out energy drains
                    </p>
                  </div>

                  <div>
                    <h3 className="font-display font-bold text-foreground mb-3 text-xl">
                      <span className="text-brass">Frequently Asked Questions</span>
                    </h3>
                    <p className="text-foreground/80 body-premium">
                      Ready-made responses to the questions prospects always ask
                    </p>
                  </div>

                  <div>
                    <h3 className="font-display font-bold text-foreground mb-3 text-xl">
                      <span className="text-brass">Micro Story Prompts</span>
                    </h3>
                    <p className="text-foreground/80 body-premium">
                      Content ideas that keep your social media authentic and engaging
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Opt-in Form */}
            <AnimatedSection delay={600}>
              <div className="cinema-surface premium-card p-10 cinema-glow">
                <h3 className="heading-section text-2xl md:text-3xl font-bold text-foreground mb-8 text-center cinema-text-shadow">
                  Access Your Free <span className="text-signal">Origin Story Studio</span>
                </h3>
                <p className="text-center text-foreground/80 body-premium mb-8">
                  Get instant access to the interactive web application that will guide you through creating your complete origin story in 5 simple steps.
                </p>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground font-semibold">First Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Enter your first name" 
                            {...field}
                            className="bg-background border-border text-foreground"
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
                        <FormLabel className="text-foreground font-semibold">Email Address</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Enter your email address" 
                            type="email"
                            {...field}
                            className="bg-background border-border text-foreground"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    disabled={form.formState.isSubmitting}
                    className="w-full cinema-glow bg-transparent border-2 border-signal text-signal hover:bg-signal hover:text-background font-display font-bold tracking-wide py-6 px-4 text-sm md:text-base motion-glow-hover"
                  >
                    {form.formState.isSubmitting ? 'Creating Your Access...' : 'START BUILDING MY ORIGIN STORY'}
                  </Button>
                </form>
              </Form>
              
                <p className="text-sm text-foreground/60 text-center mt-6">
                  <span className="text-brass">✦</span> No spam. Unsubscribe anytime. Your information is safe with us. <span className="text-brass">✦</span>
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 px-6 relative z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
        <AnimatedSection delay={800}>
          <div className="container mx-auto max-w-4xl text-center relative">
            <SignalLineDivider className="mb-12" />
            <h2 className="heading-section text-3xl md:text-4xl font-bold text-foreground mb-10 cinema-text-shadow">
              Join <span className="text-signal">Spiritual Entrepreneurs Worldwide</span>
            </h2>
            <p className="body-premium text-lg md:text-xl text-foreground/80 mb-12 max-w-3xl mx-auto">
              Who are using proven storytelling strategies to move from best-kept secret to sought-after authority in their field.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 text-foreground/70">
              <span className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-brass rounded-full" />
                <span className="text-brass font-medium">Step-by-Step Guide</span>
              </span>
              <span className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-brass rounded-full" />
                <span className="text-brass font-medium">Instant Story Generation</span>
              </span>
              <span className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-brass rounded-full" />
                <span className="text-brass font-medium">Professional Ready Formats</span>
              </span>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
};

export default OriginStoryStudio;