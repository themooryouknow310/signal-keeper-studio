import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Link } from 'react-router-dom';
import { ArrowLeft, Download, CheckCircle } from 'lucide-react';
import CyanSLogo from '@/components/accents/CyanSLogo';
import BrassRule from '@/components/accents/BrassRule';
import SignalLineDivider from '@/components/accents/SignalLineDivider';
import AnimatedSection from '@/components/AnimatedSection';
import SignalRing from '@/components/SignalRing';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import heroImage from '@/assets/cinema/hero-spiritual-teacher.jpg';
import "../styles/cinema.css";

const formSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  firstName: z.string().min(2, 'Please enter your first name'),
});

type FormData = z.infer<typeof formSchema>;

const OriginStoryStudio = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
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
    
    setIsSubmitted(true);
    toast({
      title: "Success!",
      description: "Check your email for your Origin Story Studio guide.",
    });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        {/* Header */}
        <header className="border-b border-border">
          <div className="container mx-auto px-6 py-6 flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <ArrowLeft className="h-5 w-5 text-brass" />
              <CyanSLogo size={32} />
              <span className="font-display text-xl font-bold tracking-wider text-foreground">
                SACRED SIGNAL OS
              </span>
            </Link>
          </div>
        </header>

        {/* Success Content */}
        <main className="flex-1 flex items-center justify-center p-6">
          <div className="max-w-2xl mx-auto text-center">
            <CheckCircle className="h-16 w-16 text-signal mx-auto mb-8" />
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Check Your Email!
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Your Origin Story Studio access has been created! Check your inbox for your login details 
              and get ready to craft your compelling origin story.
            </p>
            <Link to="/">
              <Button className="bg-[hsl(43_85%_65%)] text-[hsl(var(--ssos-indigo))] hover:bg-[hsl(43_90%_70%)] font-bold tracking-wide px-8 py-3 text-lg">
                Return to Sacred Signal OS
              </Button>
            </Link>
          </div>
        </main>
      </div>
    );
  }

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
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="container mx-auto max-w-5xl relative z-10">
          <AnimatedSection delay={200}>
            <div className="text-center mb-20">
              <div className="flex items-center justify-center mb-12">
                <SignalRing size={64} className="text-signal mr-6 motion-fade" />
                <h1 className="heading-display text-4xl md:text-6xl lg:text-7xl cinema-text-shadow">
                  <span className="hero-shout text-foreground block mb-2">ORIGIN STORY</span>
                  <span className="hero-void text-signal">STUDIO</span>
                </h1>
              </div>
              
              <SignalLineDivider className="mb-12" />
              
              <p className="body-premium text-xl md:text-2xl text-foreground/90 leading-relaxed mb-12 max-w-4xl mx-auto cinema-text-shadow">
                A Free Interactive Web Application That Guides You Step-by-Step To Craft Your Compelling Origin Story
              </p>
              
              {/* Feature Image */}
              <div className="mb-12 max-w-2xl mx-auto">
                <img 
                  src="/lovable-uploads/4bec7975-8238-42f8-8aff-546b031f906f.png" 
                  alt="Origin Story Studio Interface - Craft Your Sacred Narrative"
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
                  What You'll <span className="text-signal">Create:</span>
                </h2>
                
                <div className="space-y-8">
                  <div className="flex items-start space-x-5 motion-fade">
                    <div className="flex-shrink-0 w-3 h-3 bg-signal rounded-full mt-2 cinema-glow" />
                    <div>
                      <h3 className="font-display font-semibold text-foreground mb-3 text-lg">
                        <span className="text-brass">Your Sacred Origin Story</span>
                      </h3>
                      <p className="text-foreground/80 body-premium">
                        A complete, compelling narrative ready to share with your audience
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-5 motion-fade">
                    <div className="flex-shrink-0 w-3 h-3 bg-signal rounded-full mt-2 cinema-glow" />
                    <div>
                      <h3 className="font-display font-semibold text-foreground mb-3 text-lg">
                        <span className="text-brass">Professional About Section</span>
                      </h3>
                      <p className="text-foreground/80 body-premium">
                        Website-ready copy that positions you as an authority
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-5 motion-fade">
                    <div className="flex-shrink-0 w-3 h-3 bg-signal rounded-full mt-2 cinema-glow" />
                    <div>
                      <h3 className="font-display font-semibold text-foreground mb-3 text-lg">
                        <span className="text-brass">Your Core Beliefs</span>
                      </h3>
                      <p className="text-foreground/80 body-premium">
                        Clear articulation of your values and mission
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-5 motion-fade">
                    <div className="flex-shrink-0 w-3 h-3 bg-signal rounded-full mt-2 cinema-glow" />
                    <div>
                      <h3 className="font-display font-semibold text-foreground mb-3 text-lg">
                        <span className="text-brass">Micro Story Prompts</span>
                      </h3>
                      <p className="text-foreground/80 body-premium">
                        Bite-sized stories for social media and conversations
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-5 motion-fade">
                    <div className="flex-shrink-0 w-3 h-3 bg-signal rounded-full mt-2 cinema-glow" />
                    <div>
                      <h3 className="font-display font-semibold text-foreground mb-3 text-lg">
                        <span className="text-brass">FAQ Section</span>
                      </h3>
                      <p className="text-foreground/80 body-premium">
                        Common questions answered with your unique perspective
                      </p>
                    </div>
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
                    className="w-full cinema-glow bg-transparent border-2 border-signal text-signal hover:bg-signal hover:text-background font-display font-bold tracking-wide py-4 text-lg motion-glow-hover"
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
              Join Thousands of <span className="text-signal">Coaches & Experts</span>
            </h2>
            <p className="body-premium text-lg md:text-xl text-foreground/80 mb-12 max-w-3xl mx-auto">
              Who've used the Origin Story Studio to overcome their "Invisible Brand Center" and create authentic connections with their ideal clients.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 text-foreground/70">
              <span className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-brass rounded-full" />
                <span className="text-brass font-medium">10,000+ Stories Created</span>
              </span>
              <span className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-brass rounded-full" />
                <span className="text-brass font-medium">Featured in Forbes</span>
              </span>
              <span className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-brass rounded-full" />
                <span className="text-brass font-medium">Used by 6-Figure Coaches</span>
              </span>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
};

export default OriginStoryStudio;