import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import AnimatedSection from '@/components/AnimatedSection';

const formSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid business email'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  company: z.string().min(2, 'Company name must be at least 2 characters'),
  moneySpent: z.string().min(10, 'Please provide details about your investment'),
  successLooks: z.string().min(20, 'Please describe what success looks like for you'),
  goodFit: z.string().min(30, 'Please explain why you would be a good fit'),
  contribution: z.string().min(20, 'Please describe how you can contribute'),
});

const FullApplication = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      moneySpent: '',
      successLooks: '',
      goodFit: '',
      contribution: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Application Submitted Successfully!",
      description: "Thank you for your application. We'll review it and get back to you within 24 hours.",
    });
    
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-signal/5" />
      
      {/* Hero Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="heading-ritual text-5xl md:text-6xl lg:text-7xl mb-6 glow-text">
                You Are Just 1 Step Away!
              </h1>
              <p className="body-premium text-2xl md:text-3xl text-foreground/90 leading-relaxed">
                Please Fill Out This Short Application Now…
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Application Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
              
              {/* Left Column - Video (2/3) */}
              <div className="lg:col-span-2 space-y-8">
                {/* Video */}
                <AnimatedSection delay={200}>
                  <Card className="bg-gradient-to-br from-signal/5 via-background/80 to-signal/10 border border-signal/20 shadow-[0_20px_60px_-10px_hsl(var(--signal-glow)/0.2)] overflow-hidden">
                    <CardContent className="p-0">
                      <div className="aspect-video bg-gradient-to-br from-signal/10 to-signal/5 flex items-center justify-center border-b border-signal/10">
                        {/* Video Player Placeholder */}
                        <div className="text-center p-12">
                          <div className="w-24 h-24 rounded-full bg-signal/20 flex items-center justify-center mx-auto mb-6 shadow-[0_8px_32px_hsl(var(--signal-glow)/0.3)]">
                            <svg className="w-10 h-10 text-signal ml-1" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <h3 className="heading-ritual text-2xl text-foreground/90 mb-2">
                            Sacred Signal OS Overview
                          </h3>
                          <p className="body-premium text-foreground/70">
                            Watch this exclusive presentation about the transformation waiting for you
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>

                {/* Testimonial */}
                <AnimatedSection delay={400}>
                  <Card className="bg-gradient-to-br from-signal/5 via-background/80 to-signal/10 border border-signal/20 shadow-[0_20px_60px_-10px_hsl(var(--signal-glow)/0.2)] overflow-hidden">
                    <CardContent className="p-8">
                      <div className="flex flex-col md:flex-row items-center gap-6">
                        
                        {/* Testimonial Image */}
                        <div className="flex-shrink-0">
                          <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-2 border-signal/30 shadow-[0_4px_16px_hsl(var(--signal-glow)/0.2)]">
                            <img 
                              src="/lovable-uploads/23d11c9b-c773-4598-b607-aa6556eafe46.png" 
                              alt="Vaibhav Gupta testimonial"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>

                        {/* Testimonial Content */}
                        <div className="flex-1 text-center md:text-left">
                          <blockquote className="body-premium text-base md:text-lg text-foreground/90 leading-relaxed mb-4 italic">
                            "Barack is truly inspirational! His vision for Femigod has allowed him to create something that's one of a kind. Working with him has been an incredibly insightful experience that's allowed me to push myself and create in a way I didn't think was possible."
                          </blockquote>
                          
                          <div className="border-t border-signal/20 pt-4">
                            <div className="text-foreground font-semibold">
                              Vaibhav Gupta
                            </div>
                            <div className="text-foreground/60 text-sm">
                              Founder at Techrechard
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              </div>

              {/* Right Column - Application Form (1/3) */}
              <div className="lg:col-span-1">
                <AnimatedSection delay={600}>
                  <Card className="bg-gradient-to-br from-signal/5 via-background/90 to-signal/10 border border-signal/20 shadow-[0_20px_60px_-10px_hsl(var(--signal-glow)/0.2)] sticky top-8">
                    <CardContent className="p-8">
                      <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                          
                          {/* Name Fields */}
                          <div className="grid grid-cols-2 gap-4">
                            <FormField
                              control={form.control}
                              name="firstName"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-foreground font-medium">First Name</FormLabel>
                                  <FormControl>
                                    <Input 
                                      placeholder="First name" 
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
                              name="lastName"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-foreground font-medium">Last Name</FormLabel>
                                  <FormControl>
                                    <Input 
                                      placeholder="Last name" 
                                      {...field}
                                      className="bg-background/50 border-signal/20 focus:border-signal"
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>

                          {/* Email */}
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-foreground font-medium">Business Email</FormLabel>
                                <FormControl>
                                  <Input 
                                    type="email"
                                    placeholder="your@businessemail.com" 
                                    {...field}
                                    className="bg-background/50 border-signal/20 focus:border-signal"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          {/* Phone */}
                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-foreground font-medium">Phone Number</FormLabel>
                                <FormControl>
                                  <Input 
                                    type="tel"
                                    placeholder="+1 (555) 123-4567" 
                                    {...field}
                                    className="bg-background/50 border-signal/20 focus:border-signal"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          {/* Company */}
                          <FormField
                            control={form.control}
                            name="company"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-foreground font-medium">Company</FormLabel>
                                <FormControl>
                                  <Input 
                                    placeholder="Your company name" 
                                    {...field}
                                    className="bg-background/50 border-signal/20 focus:border-signal"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          {/* Money Spent */}
                          <FormField
                            control={form.control}
                            name="moneySpent"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-foreground font-medium">How much money have you spent in the past trying to solve this problem?</FormLabel>
                                <FormControl>
                                  <Textarea 
                                    placeholder="Share your investment in courses, coaches, tools, etc..." 
                                    {...field}
                                    className="bg-background/50 border-signal/20 focus:border-signal resize-none h-20"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          {/* Success Definition */}
                          <FormField
                            control={form.control}
                            name="successLooks"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-foreground font-medium">What does success look like for you?</FormLabel>
                                <FormControl>
                                  <Textarea 
                                    placeholder="Describe your ideal outcome and goals..." 
                                    {...field}
                                    className="bg-background/50 border-signal/20 focus:border-signal resize-none h-24"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          {/* Good Fit */}
                          <FormField
                            control={form.control}
                            name="goodFit"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-foreground font-medium">Why would you be a good fit for this program?</FormLabel>
                                <FormControl>
                                  <Textarea 
                                    placeholder="Tell us about your commitment, experience, and readiness..." 
                                    {...field}
                                    className="bg-background/50 border-signal/20 focus:border-signal resize-none h-24"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          {/* Contribution */}
                          <FormField
                            control={form.control}
                            name="contribution"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-foreground font-medium">How can you contribute to our community?</FormLabel>
                                <FormControl>
                                  <Textarea 
                                    placeholder="Share your skills, experience, or unique perspective..." 
                                    {...field}
                                    className="bg-background/50 border-signal/20 focus:border-signal resize-none h-20"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <div className="pt-4">
                            <Button 
                              type="submit"
                              size="lg"
                              disabled={isSubmitting}
                              className="signal-glow bg-signal text-background hover:bg-signal/90 font-body font-semibold px-8 py-6 text-lg transition-all duration-300 shadow-[0_8px_32px_hsl(var(--signal-glow)/0.3)] w-full"
                            >
                              {isSubmitting ? "Submitting Application..." : "Submit My Application"}
                            </Button>
                          </div>

                          <div className="text-center">
                            <p className="body-premium text-xs text-foreground/70">
                              Applications Reviewed Within 24 Hours • 100% Confidential
                            </p>
                          </div>

                        </form>
                      </Form>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FullApplication;