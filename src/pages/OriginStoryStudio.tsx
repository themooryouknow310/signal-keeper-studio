import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Link } from 'react-router-dom';
import { ArrowLeft, Download, CheckCircle } from 'lucide-react';
import CyanSLogo from '@/components/accents/CyanSLogo';
import BrassRule from '@/components/accents/BrassRule';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';

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
              Your Origin Story Studio guide is on its way. Check your inbox (and spam folder) 
              for the download link and exclusive content.
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
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-6 py-6 flex items-center">
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
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
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/5" />
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-8">
              <Download className="h-12 w-12 text-signal mr-4" />
              <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground">
                Origin Story Studio
              </h1>
            </div>
            
            <BrassRule className="mb-8" />
            
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-12">
              Transform your personal journey into a magnetic origin story that attracts your perfect clients and positions you as the authority in your field.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Benefits */}
            <div className="space-y-8">
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                What You'll Get:
              </h2>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Origin Story Framework",
                    description: "Step-by-step template to craft your compelling narrative"
                  },
                  {
                    title: "Emotional Resonance Guide",
                    description: "How to connect with your audience's deepest motivations"
                  },
                  {
                    title: "Authority Positioning",
                    description: "Transform your struggles into your greatest strengths"
                  },
                  {
                    title: "Story Integration Toolkit",
                    description: "Where and how to use your origin story across all platforms"
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-2 h-2 bg-signal rounded-full mt-3" />
                    <div>
                      <h3 className="font-display font-semibold text-foreground mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Opt-in Form */}
            <div className="bg-card border border-border rounded-lg p-8 shadow-lg">
              <h3 className="font-display text-2xl font-bold text-foreground mb-6 text-center">
                Get Your Free Guide
              </h3>
              
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
                    className="w-full bg-[hsl(43_85%_65%)] text-[hsl(var(--ssos-indigo))] hover:bg-[hsl(43_90%_70%)] font-bold tracking-wide py-3 text-lg"
                  >
                    {form.formState.isSubmitting ? 'Sending...' : 'Get My Free Origin Story Guide'}
                  </Button>
                </form>
              </Form>
              
              <p className="text-sm text-muted-foreground text-center mt-4">
                No spam. Unsubscribe anytime. Your information is safe with us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 px-6 bg-accent/5">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold text-foreground mb-8">
            Join Thousands of Coaches & Experts
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Who've used their origin story to build magnetic personal brands and attract premium clients.
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
            <span>✓ 10,000+ Downloads</span>
            <span>✓ Featured in Forbes</span>
            <span>✓ Used by 6-Figure Coaches</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OriginStoryStudio;