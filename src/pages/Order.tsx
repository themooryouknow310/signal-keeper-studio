import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import BrassRule from "@/components/accents/BrassRule";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const Order = () => {
  const [selectedPlan, setSelectedPlan] = useState("full");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const { toast } = useToast();
  const navigate = useNavigate();

  const paymentOptions = [
    {
      id: "full",
      title: "Pay In Full",
      price: "$1,497",
      subtitle: "Save $100",
      description: "One-time payment",
      highlighted: true,
    },
    {
      id: "two-pay",
      title: "2-Pay Option",
      price: "2 × $799",
      subtitle: "Monthly",
      description: "Split into 2 payments",
    },
    {
      id: "three-pay",
      title: "3-Pay Option",
      price: "3 × $533",
      subtitle: "Monthly",
      description: "Split into 3 payments",
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with Stripe payment processing
    toast({
      title: "Order Processing",
      description: "Processing your order...",
    });
    
    // Simulate order processing and redirect to thank you page
    setTimeout(() => {
      navigate("/thank-you");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-signal/20">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-center">
            <h1 className="heading-ritual text-2xl md:text-3xl text-signal glow-text">
              Order Sacred Signal OS
            </h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Program Overview */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <BrassRule width={300} />
            </div>
            <h2 className="heading-ritual text-3xl md:text-4xl mb-6 glow-text">
              Transform Your Business in 12 Weeks
            </h2>
            <p className="body-premium text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed">
              Join Sacred Signal OS: the complete system to tune your message, 
              architect your offer, and install a steady, repeatable pipeline.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Payment Options */}
            <div>
              <h3 className="heading-ritual text-xl mb-6 text-signal">Choose Your Payment Plan</h3>
              
              <RadioGroup value={selectedPlan} onValueChange={setSelectedPlan} className="space-y-4">
                {paymentOptions.map((option) => (
                  <div key={option.id} className="relative">
                    <Label htmlFor={option.id} className="cursor-pointer">
                      <Card className={`p-6 transition-all duration-300 ${
                        selectedPlan === option.id 
                          ? 'border-signal bg-signal/5 shadow-lg shadow-signal/20' 
                          : 'border-signal/20 hover:border-signal/40'
                      } ${option.highlighted ? 'ring-2 ring-brass/30' : ''}`}>
                        <div className="flex items-center space-x-4">
                          <RadioGroupItem value={option.id} id={option.id} />
                          <div className="flex-1">
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <h4 className="heading-ritual text-lg text-foreground">
                                  {option.title}
                                </h4>
                                <p className="body-premium text-sm text-foreground/60">
                                  {option.description}
                                </p>
                              </div>
                              <div className="text-right">
                                <div className="text-xl font-bold text-signal">
                                  {option.price}
                                </div>
                                {option.subtitle && (
                                  <div className={`text-sm font-medium ${
                                    option.highlighted ? 'text-brass' : 'text-foreground/60'
                                  }`}>
                                    {option.subtitle}
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                        {option.highlighted && (
                          <div className="absolute -top-2 -right-2 bg-brass text-background px-3 py-1 rounded-full text-xs font-semibold">
                            BEST VALUE
                          </div>
                        )}
                      </Card>
                    </Label>
                  </div>
                ))}
              </RadioGroup>

              {/* Value Summary */}
              <div className="mt-8 p-6 bg-gradient-to-br from-signal/5 to-brass/5 rounded-lg border border-signal/20">
                <h4 className="heading-ritual text-lg mb-4 text-signal">What You Get:</h4>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-brass rounded-full mt-2 flex-shrink-0"></div>
                    <span>12-Week Sacred Signal OS Core System ($6,000 value)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-brass rounded-full mt-2 flex-shrink-0"></div>
                    <span>Weekly Live Build & Coaching Sessions ($2,000 value)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-brass rounded-full mt-2 flex-shrink-0"></div>
                    <span>Office Hours 2×/week for 12 weeks ($1,200 value)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-brass rounded-full mt-2 flex-shrink-0"></div>
                    <span>Brand Assets & Guidelines ($2,500 value)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-brass rounded-full mt-2 flex-shrink-0"></div>
                    <span>Done-with-you Assets ($4,100 value)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-brass rounded-full mt-2 flex-shrink-0"></div>
                    <span>Limited-Time Bonuses ($3,000 value)</span>
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-signal/20">
                  <div className="flex justify-between items-center">
                    <span className="text-base font-medium">Total Value:</span>
                    <span className="text-xl font-bold text-signal">$18,800</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Form */}
            <div>
              <h3 className="heading-ritual text-xl mb-6 text-signal">Your Information</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                </div>

                {/* Guarantee */}
                <div className="p-4 bg-gradient-to-br from-signal/5 to-background border border-signal/20 rounded-lg">
                  <h4 className="heading-ritual text-base mb-2 text-signal">30-Day Money-Back Guarantee</h4>
                  <p className="body-premium text-sm text-foreground/80 leading-relaxed">
                    Join Sacred Signal OS and do the work for 30 days. If you don't feel clearer, 
                    more confident, and moving toward a steady pipeline, email us for a full refund.
                  </p>
                </div>

                <Button type="submit" className="w-full bg-signal text-background hover:bg-signal/90 font-semibold py-4 text-lg">
                  Complete Order - Secure Checkout
                </Button>

                <p className="text-xs text-foreground/60 text-center">
                  You will be redirected to secure payment processing. 
                  Your order will be processed within 24 hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Order;