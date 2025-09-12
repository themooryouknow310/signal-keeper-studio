import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import CyanSLogo from '@/components/accents/CyanSLogo';
import BrassRule from '@/components/accents/BrassRule';
import SignalRing from '@/components/SignalRing';
import AnimatedSection from '@/components/AnimatedSection';

// Sample blog posts data - replace with your actual CMS or data source
const blogPosts = [
  {
    id: 1,
    title: "The Sacred Art of Spiritual Marketing: Why Authenticity Beats Tactics Every Time",
    excerpt: "Discover how to market your spiritual practice without compromising your values or feeling salesy.",
    category: "Spiritual Marketing",
    author: "Sacred Signal Team",
    publishDate: "2024-01-15",
    readTime: "8 min read",
    image: "/lovable-uploads/43b5c4db-0f9c-4433-aebb-19f3478779d6.png",
    slug: "sacred-art-spiritual-marketing"
  },
  {
    id: 2,
    title: "From Hidden Healer to Recognized Authority: Your Origin Story Framework",
    excerpt: "Learn the step-by-step process to craft an origin story that positions you as the go-to expert in your field.",
    category: "Personal Branding",
    author: "Sacred Signal Team",
    publishDate: "2024-01-10",
    readTime: "12 min read",
    image: "/lovable-uploads/82cbd216-75df-4709-8312-18cfb42d9a42.png",
    slug: "hidden-healer-to-authority"
  },
  {
    id: 3,
    title: "The Dream Client Sprint: How to Identify Your Perfect Clients in 60 Minutes",
    excerpt: "Stop attracting energy drains and start magnetizing aligned clients with this proven framework.",
    category: "Client Attraction",
    author: "Sacred Signal Team",
    publishDate: "2024-01-05",
    readTime: "6 min read",
    image: "/lovable-uploads/5ca86352-ff88-44a2-a9ba-b1da2125ae17.png",
    slug: "dream-client-sprint-framework"
  },
  {
    id: 4,
    title: "Building Your Sacred Signal: The Complete Guide to Spiritual Authority",
    excerpt: "Everything you need to know about establishing yourself as a trusted spiritual authority online.",
    category: "Authority Building",
    author: "Sacred Signal Team",
    publishDate: "2023-12-28",
    readTime: "15 min read",
    image: "/lovable-uploads/64ec7f8a-dc71-4fd5-9bf6-b5ccf8ab1608.png",
    slug: "building-sacred-signal-guide"
  },
  {
    id: 5,
    title: "Content That Converts: Writing for Spiritual Entrepreneurs",
    excerpt: "Master the art of creating content that educates, inspires, and naturally leads to sales.",
    category: "Content Strategy",
    author: "Sacred Signal Team",
    publishDate: "2023-12-20",
    readTime: "10 min read",
    image: "/lovable-uploads/9824b668-c088-4700-a584-451ec5b5a1e2.png",
    slug: "content-that-converts"
  },
  {
    id: 6,
    title: "The Authentic Sales Method: Selling Without Selling Out",
    excerpt: "How to create offers and sales processes that feel aligned with your spiritual values.",
    category: "Sales Strategy",
    author: "Sacred Signal Team",
    publishDate: "2023-12-15",
    readTime: "9 min read",
    image: "/lovable-uploads/bd2cb781-a6cc-413a-80c6-1011862ff09a.png",
    slug: "authentic-sales-method"
  }
];

const categories = ["All", "Spiritual Marketing", "Personal Branding", "Client Attraction", "Authority Building", "Content Strategy", "Sales Strategy"];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3">
              <CyanSLogo size={32} />
              <span className="font-display text-xl font-bold tracking-wider text-foreground">
                SACRED SIGNAL OS
              </span>
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              <Link to="/dream-client-sprint" className="text-muted-foreground hover:text-foreground transition-colors">
                Dream Client Sprint
              </Link>
              <Link to="/origin-story-studio" className="text-muted-foreground hover:text-foreground transition-colors">
                Origin Story Studio
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6 text-center">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection delay={200}>
            <div className="flex justify-center mb-8">
              <SignalRing size={80} className="text-signal" />
            </div>
            
            <div className="flex items-center justify-center mb-8 space-x-8">
              <BrassRule width={120} className="opacity-60" />
              <div className="w-4 h-4 bg-brass/60 rounded-full" />
              <BrassRule width={120} className="opacity-60" />
            </div>
            
            <h1 className="heading-display text-5xl md:text-7xl font-black tracking-tight mb-6">
              <span className="text-foreground block mb-2">SACRED SIGNAL</span>
              <span className="text-signal">INSIGHTS</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Wisdom, strategies, and insights for spiritual entrepreneurs ready to build their sacred signal and attract aligned clients.
            </p>
            
            <div className="flex items-center justify-center space-x-8">
              <BrassRule width={120} className="opacity-60" />
              <div className="w-4 h-4 bg-signal/60 rounded-full" />
              <BrassRule width={120} className="opacity-60" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 px-6 border-b border-border/30">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors px-4 py-2"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <AnimatedSection key={post.id} delay={200 + index * 100}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 group">
                  <div className="aspect-video overflow-hidden rounded-t-lg">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                      <Badge variant="outline" className="text-xs">
                        {post.category}
                      </Badge>
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(post.publishDate).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                    <CardTitle className="text-xl leading-tight group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <Button variant="ghost" size="sm" className="group-hover:text-primary">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-16">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-6 bg-card/30">
        <div className="container mx-auto max-w-2xl text-center">
          <AnimatedSection>
            <SignalRing size={60} className="text-signal mx-auto mb-8" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Never Miss an Insight
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get the latest strategies, frameworks, and insights delivered to your inbox weekly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-md border border-border bg-background text-foreground"
              />
              <Button className="px-6">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              No spam. Unsubscribe anytime.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Blog;