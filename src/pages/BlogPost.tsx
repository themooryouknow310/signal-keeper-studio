import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, ArrowLeft, Share2, Twitter, Facebook, Linkedin } from "lucide-react";
import CyanSLogo from '@/components/accents/CyanSLogo';
import BrassRule from '@/components/accents/BrassRule';
import SignalRing from '@/components/SignalRing';
import AnimatedSection from '@/components/AnimatedSection';

// Sample blog post data - replace with your actual CMS or data source
const blogPostData = {
  "sacred-art-spiritual-marketing": {
    title: "The Sacred Art of Spiritual Marketing: Why Authenticity Beats Tactics Every Time",
    excerpt: "Discover how to market your spiritual practice without compromising your values or feeling salesy.",
    category: "Spiritual Marketing",
    author: "Sacred Signal Team",
    publishDate: "2024-01-15",
    readTime: "8 min read",
    image: "/lovable-uploads/43b5c4db-0f9c-4433-aebb-19f3478779d6.png",
    content: `
      <p>As spiritual entrepreneurs, we often find ourselves caught in a paradox: we want to share our gifts with the world and build sustainable businesses, yet traditional marketing tactics feel misaligned with our values.</p>

      <p>The good news? There's a sacred way to market your spiritual practice that doesn't require you to compromise your authenticity or resort to pushy sales tactics.</p>

      <h2>The Problem with Traditional Marketing</h2>
      
      <p>Most marketing advice comes from a paradigm of scarcity, manipulation, and force. It assumes that people need to be convinced, coerced, or tricked into buying. For spiritual entrepreneurs, this approach feels deeply wrong because it is.</p>

      <p>When you're working in the realm of healing, transformation, and consciousness, your marketing must be aligned with these same principles.</p>

      <h2>The Sacred Marketing Principles</h2>

      <h3>1. Truth as Your Foundation</h3>
      <p>Your marketing should be an extension of your spiritual practice. Every piece of content, every offer, every interaction should come from a place of truth and service.</p>

      <h3>2. Attraction Over Promotion</h3>
      <p>Instead of chasing clients, create content and experiences that naturally draw your ideal clients to you. Share your wisdom, tell your story, and let your authentic voice shine through.</p>

      <h3>3. Service Before Sales</h3>
      <p>Lead with value. Give generously. Help people whether they buy from you or not. This creates a foundation of trust that makes selling feel natural and aligned.</p>

      <h2>Building Your Sacred Signal</h2>

      <p>Your "Sacred Signal" is the unique frequency you broadcast into the world through your content, your story, and your presence. It's what attracts aligned clients and repels those who aren't a good fit.</p>

      <p>To build your Sacred Signal:</p>

      <ul>
        <li><strong>Craft your origin story:</strong> Share the journey that led you to your calling</li>
        <li><strong>Define your unique methodology:</strong> What's your approach to transformation?</li>
        <li><strong>Identify your dream clients:</strong> Who are you truly meant to serve?</li>
        <li><strong>Create valuable content:</strong> Share insights that genuinely help people</li>
      </ul>

      <h2>The Paradox of Spiritual Success</h2>

      <p>Here's what most spiritual entrepreneurs don't realize: the more authentically you show up, the more successful your business becomes. When you stop trying to be everything to everyone and start being exactly who you are for the right people, magic happens.</p>

      <p>Your authenticity becomes your greatest competitive advantage because no one else can be you.</p>

      <h2>Taking Action</h2>

      <p>Start today by asking yourself:</p>
      <ul>
        <li>What would my marketing look like if it was an extension of my spiritual practice?</li>
        <li>How can I serve my audience before asking for anything in return?</li>
        <li>What's one authentic story I could share that would help someone today?</li>
      </ul>

      <p>Remember: spiritual marketing isn't about techniques or tactics. It's about showing up as your most authentic self and trusting that the right people will be drawn to your light.</p>
    `
  },
  "hidden-healer-to-authority": {
    title: "From Hidden Healer to Recognized Authority: Your Origin Story Framework",
    excerpt: "Learn the step-by-step process to craft an origin story that positions you as the go-to expert in your field.",
    category: "Personal Branding",
    author: "Sacred Signal Team", 
    publishDate: "2024-01-10",
    readTime: "12 min read",
    image: "/lovable-uploads/82cbd216-75df-4709-8312-18cfb42d9a42.png",
    content: `
      <p>Your origin story is the bridge between where you've been and where you're going. It's what transforms you from "another coach" into "the guide I've been looking for."</p>

      <p>But most spiritual entrepreneurs get their origin story wrong. They either share too much, making it about them instead of their clients, or they share too little, missing the opportunity to build deep trust and connection.</p>

      <h2>The Power of a Well-Crafted Origin Story</h2>

      <p>When done right, your origin story:</p>
      <ul>
        <li>Positions you as someone who truly understands your client's struggle</li>
        <li>Demonstrates your expertise through experience, not just credentials</li>
        <li>Creates an emotional connection that makes you memorable</li>
        <li>Differentiates you from every other person in your field</li>
      </ul>

      <h2>The Sacred Origin Story Framework</h2>

      <h3>Step 1: The Wound</h3>
      <p>Every powerful origin story begins with a wound—a moment of pain, confusion, or struggle that changed everything. This isn't about trauma-dumping; it's about identifying the precise moment that led you to your calling.</p>

      <h3>Step 2: The Awakening</h3>
      <p>What was the turning point? The moment you realized there was another way? This is where you show your resilience and resourcefulness.</p>

      <h3>Step 3: The Journey</h3>
      <p>What did you do to heal, learn, and grow? What methods did you try? What worked? What didn't? This is where you demonstrate your expertise.</p>

      <h3>Step 4: The Transformation</h3>
      <p>How are you different now? What did you gain? What did you learn? This shows the possibility you offer to others.</p>

      <h3>Step 5: The Mission</h3>
      <p>Why do you do what you do now? How does your past experience fuel your current work? This connects your story to your offer.</p>

      <h2>Common Origin Story Mistakes</h2>

      <h3>Making It About You</h3>
      <p>Your origin story isn't autobiography—it's a bridge to your client's transformation. Always connect back to how your experience serves them.</p>

      <h3>Skipping the Struggle</h3>
      <p>Don't sanitize your story. The struggle is what makes you relatable and trustworthy. Your clients need to know you've been where they are.</p>

      <h3>Forgetting the Lesson</h3>
      <p>Every origin story must have a clear lesson or insight that your clients can apply to their own lives.</p>

      <h2>Crafting Your Story</h2>

      <p>Take time to reflect on these questions:</p>
      <ul>
        <li>What painful experience led you to seek the solution you now offer?</li>
        <li>What was the turning point in your journey?</li>
        <li>What specific steps did you take to transform your situation?</li>
        <li>What key insight or breakthrough changed everything for you?</li>
        <li>How does your transformation enable you to serve others?</li>
      </ul>

      <p>Remember: your origin story isn't just about the past—it's about the future you're creating for your clients.</p>
    `
  }
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPostData[slug as keyof typeof blogPostData] : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Post Not Found</h1>
          <Link to="/blog">
            <Button>Back to Blog</Button>
          </Link>
        </div>
      </div>
    );
  }

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
              <Link to="/blog" className="text-foreground font-medium">
                Blog
              </Link>
              <Link to="/dream-client-sprint" className="text-muted-foreground hover:text-foreground transition-colors">
                Dream Client Sprint
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Back to Blog */}
      <div className="container mx-auto px-6 py-6">
        <Link to="/blog" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>
      </div>

      {/* Article Header */}
      <article className="container mx-auto px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection delay={200}>
            {/* Featured Image */}
            <div className="aspect-[16/9] overflow-hidden rounded-2xl mb-8">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-muted-foreground">
              <Badge className="text-xs">
                {post.category}
              </Badge>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date(post.publishDate).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
              <span className="flex items-center gap-1">
                <User className="w-4 h-4" />
                {post.author}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {post.excerpt}
            </p>

            {/* Share Buttons */}
            <div className="flex items-center gap-4 mb-12 pb-8 border-b border-border/30">
              <span className="text-sm font-medium text-muted-foreground">Share:</span>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <Facebook className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </AnimatedSection>

          {/* Article Content */}
          <AnimatedSection delay={400}>
            <div 
              className="prose prose-lg max-w-none text-foreground
                prose-headings:text-foreground prose-headings:font-bold
                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-4
                prose-p:text-foreground/90 prose-p:leading-relaxed prose-p:mb-6
                prose-ul:text-foreground/90 prose-li:mb-2
                prose-strong:text-foreground prose-strong:font-semibold"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </AnimatedSection>

          {/* Article Footer */}
          <div className="mt-16 pt-8 border-t border-border/30">
            <AnimatedSection delay={600}>
              <div className="text-center">
                <SignalRing size={60} className="text-signal mx-auto mb-8" />
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Ready to Build Your Sacred Signal?
                </h3>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Discover how to transform your spiritual practice into a thriving business with our proven frameworks and strategies.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/dream-client-sprint">
                    <Button size="lg">
                      Book Dream Client Sprint
                    </Button>
                  </Link>
                  <Link to="/origin-story-studio">
                    <Button variant="outline" size="lg">
                      Access Origin Story Studio
                    </Button>
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-foreground text-center mb-12">
                Continue Reading
              </h2>
              <div className="text-center">
                <Link to="/blog">
                  <Button variant="outline" size="lg">
                    View All Articles
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;