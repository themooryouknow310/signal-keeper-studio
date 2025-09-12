<?php
/**
 * The front page template
 * 
 * @package Sacred_Signal_OS
 */

get_header(); ?>

<!-- Hero Section -->
<section class="hero-section cinema-surface-with-grain cinema-grain" style="background-image: url('<?php echo get_template_directory_uri(); ?>/assets/images/cinema/hero-sacred-signals.jpg');">
    <div class="cinema-hero-overlay"></div>
    <div class="container">
        <div class="hero-content animate-on-scroll">
            <?php 
            $hero_title = get_post_meta(get_the_ID(), '_hero_title', true);
            $hero_subtitle = get_post_meta(get_the_ID(), '_hero_subtitle', true);
            
            if (empty($hero_title)) {
                $hero_title = 'TRANSFORM YOUR <span class="hero-shout">MESSAGE</span><br>INTO A <span class="text-signal hero-void">SACRED SIGNAL</span>';
            }
            
            if (empty($hero_subtitle)) {
                $hero_subtitle = 'Stop competing for attention. Start commanding it with the authentic power of your story, refined into a message that cuts through the noise and calls your people home.';
            }
            ?>
            
            <h1 class="hero-title heading-ritual glow-text cinema-text-shadow">
                TIRED OF <span class="hero-shout">SHOUTING</span><br>INTO THE <span class="hero-void">VOID?</span>
            </h1>
            
            <!-- Video Container -->
            <div class="cinema-video-container max-w-2xl mx-auto mb-8">
                <?php 
                $hero_video = get_post_meta(get_the_ID(), '_hero_video', true);
                if ($hero_video) : ?>
                    <video class="w-full h-auto" poster="<?php echo get_template_directory_uri(); ?>/assets/images/cinema/hero-video-poster.jpg">
                        <source src="<?php echo esc_url($hero_video); ?>" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                    <div class="cinema-video-overlay">
                        <button class="cinema-play-button" aria-label="Play video">
                            <svg fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z"/>
                            </svg>
                        </button>
                    </div>
                <?php else : ?>
                    <div class="bg-black/50 rounded-lg aspect-video flex items-center justify-center">
                        <div class="text-center text-white">
                            <p class="text-xl mb-4">Video Coming Soon</p>
                            <p class="text-sm opacity-80">The power of your sacred signal revealed</p>
                        </div>
                    </div>
                <?php endif; ?>
            </div>
            
            <p class="hero-subtitle body-premium cinema-text-shadow mb-8">
                <?php echo wp_kses_post($hero_subtitle); ?>
            </p>
            
            <div class="hero-cta">
                <a href="<?php echo esc_url(home_url('/application/')); ?>" class="cinema-button">
                    <?php _e('BEGIN YOUR TRANSFORMATION', 'sacred-signal-os'); ?>
                </a>
            </div>
        </div>
    </div>
</section>

<!-- About Section -->
<section id="about" class="py-20 bg-background">
    <div class="container">
        <!-- Problems Section -->
        <div class="max-w-6xl mx-auto mb-24 animate-on-scroll">
            <h2 class="heading-ritual text-4xl md:text-6xl mb-4 text-center glow-text">
                THE SPIRITUAL ENTREPRENEUR'S DILEMMA
            </h2>
            <p class="text-xl text-muted-foreground text-center mb-16 max-w-4xl mx-auto">
                You Have A Gift To Share, A Calling To Serve. But Right Now, Your Days Are Likely Filled With The Frustrating Reality Of Trying To Grow Your Business Online:
            </p>
            
            <div class="ssos-grid">
                <!-- Problem Cards -->
                <div class="ssos-card animate-on-scroll">
                    <div class="cinema-hero mb-6">
                        <img 
                            src="<?php echo get_template_directory_uri(); ?>/assets/images/cinema/grain-texture-01.jpg" 
                            alt="The endless content treadmill" 
                            class="w-full h-48 object-cover"
                        />
                        <div class="cinema-hero-overlay"></div>
                    </div>
                    <h3 class="ssos-card-title">THE ENDLESS CONTENT TREADMILL</h3>
                    <p class="text-muted-foreground">Creating post after post, hoping something will finally stick.</p>
                </div>
                
                <div class="ssos-card animate-on-scroll">
                    <div class="cinema-hero mb-6">
                        <img 
                            src="<?php echo get_template_directory_uri(); ?>/assets/images/cinema/hero-dark-gradient.jpg" 
                            alt="The anxiety of algorithm whiplash" 
                            class="w-full h-48 object-cover"
                        />
                        <div class="cinema-hero-overlay"></div>
                    </div>
                    <h3 class="ssos-card-title">THE ANXIETY OF ALGORITHM WHIPLASH</h3>
                    <p class="text-muted-foreground">Watching your reach and leads disappear overnight.</p>
                </div>
                
                <div class="ssos-card animate-on-scroll">
                    <div class="cinema-hero mb-6">
                        <img 
                            src="<?php echo get_template_directory_uri(); ?>/assets/images/cinema/hero-glass-rings.jpg" 
                            alt="The frustration of a leaky funnel" 
                            class="w-full h-48 object-cover"
                        />
                        <div class="cinema-hero-overlay"></div>
                    </div>
                    <h3 class="ssos-card-title">THE FRUSTRATION OF A LEAKY FUNNEL</h3>
                    <p class="text-muted-foreground">Attracting followers who "love your vibe" but never buy.</p>
                </div>
                
                <div class="ssos-card animate-on-scroll">
                    <div class="cinema-hero mb-6">
                        <img 
                            src="<?php echo get_template_directory_uri(); ?>/assets/images/sacred-geometry-hero.jpg" 
                            alt="The exhaustion of over-delivering" 
                            class="w-full h-48 object-cover"
                        />
                        <div class="cinema-hero-overlay"></div>
                    </div>
                    <h3 class="ssos-card-title">THE EXHAUSTION OF OVER-DELIVERING</h3>
                    <p class="text-muted-foreground">Feeling resentful and burnt out, wondering if you'll ever make a real living.</p>
                </div>
            </div>
        </div>
        
        <!-- Sacred Divider -->
        <div class="sacred-divider animate-on-scroll mb-24">
            <div class="flex items-center justify-center">
                <div class="flex-1 h-px bg-gradient-to-r from-transparent via-brass/30 to-brass/60"></div>
                <div class="mx-8 px-8 py-4 bg-background/80 backdrop-blur-sm border border-brass/20 rounded-lg">
                    <p class="text-2xl font-bold text-brass text-center">IT DOESN'T HAVE TO BE THIS WAY</p>
                </div>
                <div class="flex-1 h-px bg-gradient-to-l from-transparent via-brass/30 to-brass/60"></div>
            </div>
        </div>
        
        <!-- Solutions Section -->
        <div class="max-w-6xl mx-auto mb-16 animate-on-scroll">
            <h2 class="heading-ritual text-4xl md:text-6xl mb-16 text-center glow-text">
                IMAGINE A BUSINESS WHERE...
            </h2>
            
            <div class="space-y-8">
                <!-- Outcome Items -->
                <div class="flex items-start gap-6 animate-on-scroll">
                    <div class="outcome-icon flex-shrink-0">
                        <img 
                            src="<?php echo get_template_directory_uri(); ?>/assets/images/sacred-geometry-icon.png" 
                            alt="Clear resonant message" 
                            class="w-full h-full object-cover"
                        />
                    </div>
                    <div>
                        <h3 class="text-xl font-bold text-foreground mb-2">Your message is so clear and resonant</h3>
                        <p class="text-lg text-foreground/80">that your ideal clients instantly know they're in the right place.</p>
                    </div>
                </div>
                
                <div class="flex items-start gap-6 animate-on-scroll">
                    <div class="outcome-icon flex-shrink-0">
                        <img 
                            src="<?php echo get_template_directory_uri(); ?>/assets/images/sacred-geometry-icon.png" 
                            alt="Compelling offer" 
                            class="w-full h-full object-cover"
                        />
                    </div>
                    <div>
                        <h3 class="text-xl font-bold text-foreground mb-2">Your offer is so compelling</h3>
                        <p class="text-lg text-foreground/80">that it feels like an answer to their prayers.</p>
                    </div>
                </div>
                
                <div class="flex items-start gap-6 animate-on-scroll">
                    <div class="outcome-icon flex-shrink-0">
                        <img 
                            src="<?php echo get_template_directory_uri(); ?>/assets/images/sacred-geometry-icon.png" 
                            alt="Sustainable content system" 
                            class="w-full h-full object-cover"
                        />
                    </div>
                    <div>
                        <h3 class="text-xl font-bold text-foreground mb-2">Your content system is so sustainable</h3>
                        <p class="text-lg text-foreground/80">that you can create a month's worth of high-impact content in a single day.</p>
                    </div>
                </div>
                
                <div class="flex items-start gap-6 animate-on-scroll">
                    <div class="outcome-icon flex-shrink-0">
                        <img 
                            src="<?php echo get_template_directory_uri(); ?>/assets/images/sacred-geometry-icon.png" 
                            alt="Authentic sales process" 
                            class="w-full h-full object-cover"
                        />
                    </div>
                    <div>
                        <h3 class="text-xl font-bold text-foreground mb-2">Your sales process is so authentic</h3>
                        <p class="text-lg text-foreground/80">that it feels like a natural extension of your spiritual work.</p>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Closing Promise -->
        <div class="text-center animate-on-scroll">
            <div class="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-brass/10 to-transparent rounded-full">
                <div class="cinema-brass-medallion flex-shrink-0"></div>
                <p class="text-2xl font-bold text-brass">THIS IS THE PROMISE OF SACRED SIGNAL OS</p>
                <div class="cinema-brass-medallion flex-shrink-0"></div>
            </div>
        </div>
    </div>
</section>

<!-- Program Section -->
<section id="program" class="py-20 bg-background relative cinema-surface">
    <div class="container">
        <!-- Sacred Divider -->
        <div class="flex items-center justify-center mb-16">
            <div class="flex-1 h-px bg-gradient-to-r from-transparent via-brass/30 to-brass/60"></div>
            <div class="mx-8 relative">
                <div class="w-12 h-12 rounded-full bg-brass/10 border-2 border-brass/30 flex items-center justify-center">
                    <svg class="w-6 h-6 text-brass" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                </div>
            </div>
            <div class="flex-1 h-px bg-gradient-to-l from-transparent via-brass/30 to-brass/60"></div>
        </div>

        <!-- Header with Hero Image -->
        <div class="text-center mb-16 animate-on-scroll">
            <div class="cinema-hero w-full max-w-4xl mx-auto mb-12">
                <div class="aspect-[3/2] relative overflow-hidden rounded-lg">
                    <img 
                        src="<?php echo get_template_directory_uri(); ?>/assets/images/cinema/hero-sacred-signals.jpg" 
                        alt="Sacred Signal OS Program"
                        class="w-full h-full object-cover"
                    />
                    <div class="cinema-hero-overlay"></div>
                </div>
            </div>
            <h2 class="heading-ritual text-4xl md:text-6xl mb-6 text-foreground">
                THE 12-WEEK SACRED SIGNAL OS PROGRAM
            </h2>
            <p class="body-premium text-xl text-muted-foreground max-w-3xl mx-auto">
                Transform from spiritual entrepreneur to sought-after authority with a systematic approach that honors your essence while building undeniable expertise.
            </p>
        </div>

        <!-- Program Promise Card -->
        <div class="program-promise ssos-card max-w-4xl mx-auto mb-20 animate-on-scroll">
            <div class="text-center p-8">
                <h3 class="text-2xl font-bold text-brass mb-6">PROGRAM PROMISE</h3>
                <p class="text-xl text-foreground leading-relaxed">
                    "In 12 Weeks, You Leave With A Brand People Repeat, A Program People Finish, Proof That Buyers Trust, And A Content Loop That Fills Your Calendar—Without Losing Your Voice."
                </p>
            </div>
        </div>

        <!-- Sacred Signal Operating System -->
        <div class="text-center mb-16 animate-on-scroll">
            <h3 class="heading-ritual text-3xl md:text-5xl mb-4 signal-glow">
                THE SACRED SIGNAL OPERATING SYSTEM
            </h3>
            <p class="body-premium text-xl text-muted-foreground">
                12 Precision Modules That Transform Scattered Efforts Into Predictable Revenue
            </p>
        </div>

        <!-- 12 Module Grid -->
        <div class="program-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            <!-- Module 01: Niche Clarity -->
            <div class="program-card ssos-card p-6 relative animate-on-scroll">
                <div class="program-number">01</div>
                <div class="mb-4">
                    <img 
                        src="<?php echo get_template_directory_uri(); ?>/assets/images/cinema/niche-positioning.jpg" 
                        alt="Niche Clarity"
                        class="w-16 h-16 rounded-full object-cover mx-auto"
                    />
                </div>
                <h4 class="text-lg font-bold text-brass mb-2">NICHE CLARITY</h4>
                <p class="text-sm text-foreground/80 mb-3">Stop trying to help everyone and start magnetizing your perfect clients</p>
                <p class="text-xs text-muted-foreground">
                    Cut through the noise of "I help everyone" messaging and discover the one problem you solve better than anyone else—creating instant recognition and premium positioning.
                </p>
            </div>

            <!-- Module 02: Irresistible Offer Architecture -->
            <div class="program-card ssos-card p-6 relative animate-on-scroll">
                <div class="program-number">02</div>
                <div class="mb-4">
                    <img 
                        src="<?php echo get_template_directory_uri(); ?>/assets/images/cinema/offer-design.jpg" 
                        alt="Offer Architecture"
                        class="w-16 h-16 rounded-full object-cover mx-auto"
                    />
                </div>
                <h4 class="text-lg font-bold text-brass mb-2">IRRESISTIBLE OFFER ARCHITECTURE</h4>
                <p class="text-sm text-foreground/80 mb-3">Design a program so compelling, your ideal clients feel they can't afford NOT to work with you</p>
                <p class="text-xs text-muted-foreground">
                    Move beyond hourly sessions to create a transformational container that commands 5-figure investments and delivers life-changing results.
                </p>
            </div>

            <!-- Module 03: Completion-Driven Program Design -->
            <div class="program-card ssos-card p-6 relative animate-on-scroll">
                <div class="program-number">03</div>
                <div class="mb-4">
                    <img 
                        src="<?php echo get_template_directory_uri(); ?>/assets/images/cinema/program-architecture.jpg" 
                        alt="Program Design"
                        class="w-16 h-16 rounded-full object-cover mx-auto"
                    />
                </div>
                <h4 class="text-lg font-bold text-brass mb-2">COMPLETION-DRIVEN PROGRAM DESIGN</h4>
                <p class="text-sm text-foreground/80 mb-3">Build programs people actually finish—and rave about</p>
                <p class="text-xs text-muted-foreground">
                    Engineer a client journey that creates inevitable success, turning every graduate into a walking testimonial and referral machine.
                </p>
            </div>

            <!-- Module 04: Magnetic Story Alchemy -->
            <div class="program-card ssos-card p-6 relative animate-on-scroll">
                <div class="program-number">04</div>
                <div class="mb-4">
                    <img 
                        src="<?php echo get_template_directory_uri(); ?>/assets/images/cinema/story-message-craft.jpg" 
                        alt="Story Alchemy"
                        class="w-16 h-16 rounded-full object-cover mx-auto"
                    />
                </div>
                <h4 class="text-lg font-bold text-brass mb-2">MAGNETIC STORY ALCHEMY</h4>
                <p class="text-sm text-foreground/80 mb-3">Transform your personal journey into your most powerful sales tool</p>
                <p class="text-xs text-muted-foreground">
                    Craft an origin story so resonant that prospects instantly see you as the guide they've been searching for—without a single sales pitch.
                </p>
            </div>

            <!-- Module 05: Premium Visual Presence -->
            <div class="program-card ssos-card p-6 relative animate-on-scroll">
                <div class="program-number">05</div>
                <div class="mb-4">
                    <img 
                        src="<?php echo get_template_directory_uri(); ?>/assets/images/cinema/visual-identity.jpg" 
                        alt="Visual Presence"
                        class="w-16 h-16 rounded-full object-cover mx-auto"
                    />
                </div>
                <h4 class="text-lg font-bold text-brass mb-2">PREMIUM VISUAL PRESENCE</h4>
                <p class="text-sm text-foreground/80 mb-3">Command respect and premium pricing through strategic visual authority</p>
                <p class="text-xs text-muted-foreground">
                    Create a visual identity that whispers "high-caliber professional" while honoring your spiritual essence—no corporate soul-selling required.
                </p>
            </div>

            <!-- Module 06: The Perfect Prospect Magnet -->
            <div class="program-card ssos-card p-6 relative animate-on-scroll">
                <div class="program-number">06</div>
                <div class="mb-4">
                    <img 
                        src="<?php echo get_template_directory_uri(); ?>/assets/images/cinema/lead-magnet.jpg" 
                        alt="Prospect Magnet"
                        class="w-16 h-16 rounded-full object-cover mx-auto"
                    />
                </div>
                <h4 class="text-lg font-bold text-brass mb-2">THE PERFECT PROSPECT MAGNET</h4>
                <p class="text-sm text-foreground/80 mb-3">Attract your ideal clients like moths to flame</p>
                <p class="text-xs text-muted-foreground">
                    Design a lead magnet so valuable and targeted that your perfect prospects practically beg to get on your email list—and stay engaged.
                </p>
            </div>

            <!-- Module 07: Infinite Traffic Blueprint -->
            <div class="program-card ssos-card p-6 relative animate-on-scroll">
                <div class="program-number">07</div>
                <div class="mb-4">
                    <img 
                        src="<?php echo get_template_directory_uri(); ?>/assets/images/cinema/traffic-strategy.jpg" 
                        alt="Traffic Blueprint"
                        class="w-16 h-16 rounded-full object-cover mx-auto"
                    />
                </div>
                <h4 class="text-lg font-bold text-brass mb-2">INFINITE TRAFFIC BLUEPRINT</h4>
                <p class="text-sm text-foreground/80 mb-3">Never worry about where your next client will come from</p>
                <p class="text-xs text-muted-foreground">
                    Build your personal "Dream 100" ecosystem that generates consistent, high-quality traffic without algorithm anxiety or paid ad dependency.
                </p>
            </div>

            <!-- Module 08: Authority Content Engine -->
            <div class="program-card ssos-card p-6 relative animate-on-scroll">
                <div class="program-number">08</div>
                <div class="mb-4">
                    <img 
                        src="<?php echo get_template_directory_uri(); ?>/assets/images/cinema/content-strategy.jpg" 
                        alt="Content Engine"
                        class="w-16 h-16 rounded-full object-cover mx-auto"
                    />
                </div>
                <h4 class="text-lg font-bold text-brass mb-2">AUTHORITY CONTENT ENGINE</h4>
                <p class="text-sm text-foreground/80 mb-3">Create content that builds your reputation while you sleep</p>
                <p class="text-xs text-muted-foreground">
                    Develop a sustainable content system that positions you as the go-to expert in your field—no more posting and praying.
                </p>
            </div>

            <!-- Module 09: High-Conversion Communication -->
            <div class="program-card ssos-card p-6 relative animate-on-scroll">
                <div class="program-number">09</div>
                <div class="mb-4">
                    <img 
                        src="<?php echo get_template_directory_uri(); ?>/assets/images/cinema/writing-newsletters.jpg" 
                        alt="Communication"
                        class="w-16 h-16 rounded-full object-cover mx-auto"
                    />
                </div>
                <h4 class="text-lg font-bold text-brass mb-2">HIGH-CONVERSION COMMUNICATION</h4>
                <p class="text-sm text-foreground/80 mb-3">Master the art of writing that sells without selling</p>
                <p class="text-xs text-muted-foreground">
                    Learn the proven formulas that turn casual readers into invested prospects—and prospects into premium clients.
                </p>
            </div>

            <!-- Module 10: Social Proof Mastery -->
            <div class="program-card ssos-card p-6 relative animate-on-scroll">
                <div class="program-number">10</div>
                <div class="mb-4">
                    <img 
                        src="<?php echo get_template_directory_uri(); ?>/assets/images/cinema/value-communication.jpg" 
                        alt="Social Proof"
                        class="w-16 h-16 rounded-full object-cover mx-auto"
                    />
                </div>
                <h4 class="text-lg font-bold text-brass mb-2">SOCIAL PROOF MASTERY</h4>
                <p class="text-sm text-foreground/80 mb-3">Let your results do the talking</p>
                <p class="text-xs text-muted-foreground">
                    Build an arsenal of compelling testimonials and case studies that make your expertise undeniable and your investment obvious.
                </p>
            </div>

            <!-- Module 11: Prospect Magnetism -->
            <div class="program-card ssos-card p-6 relative animate-on-scroll">
                <div class="program-number">11</div>
                <div class="mb-4">
                    <img 
                        src="<?php echo get_template_directory_uri(); ?>/assets/images/cinema/lead-generation.jpg" 
                        alt="Prospect Magnetism"
                        class="w-16 h-16 rounded-full object-cover mx-auto"
                    />
                </div>
                <h4 class="text-lg font-bold text-brass mb-2">PROSPECT MAGNETISM</h4>
                <p class="text-sm text-foreground/80 mb-3">Make qualified leads chase you instead of the other way around</p>
                <p class="text-xs text-muted-foreground">
                    Implement proven attraction strategies that fill your calendar with discovery calls—from people who are already convinced they need your help.
                </p>
            </div>

            <!-- Module 12: Exponential Growth Systems -->
            <div class="program-card ssos-card p-6 relative animate-on-scroll">
                <div class="program-number">12</div>
                <div class="mb-4">
                    <img 
                        src="<?php echo get_template_directory_uri(); ?>/assets/images/cinema/audience-growth.jpg" 
                        alt="Growth Systems"
                        class="w-16 h-16 rounded-full object-cover mx-auto"
                    />
                </div>
                <h4 class="text-lg font-bold text-brass mb-2">EXPONENTIAL GROWTH SYSTEMS</h4>
                <p class="text-sm text-foreground/80 mb-3">Scale your influence without losing your soul</p>
                <p class="text-xs text-muted-foreground">
                    Build sustainable audience growth mechanisms that expand your reach while deepening your impact—creating a platform worthy of your message.
                </p>
            </div>
        </div>

        <!-- The Result -->
        <div class="program-result text-center animate-on-scroll">
            <h3 class="text-2xl font-bold text-brass mb-6 signal-glow">THE RESULT:</h3>
            <p class="text-xl text-foreground max-w-4xl mx-auto leading-relaxed">
                A complete operating system that transforms spiritual entrepreneurs from best-kept secrets into sought-after authorities—with the revenue, respect, and reach to match their calling.
            </p>
        </div>
    </div>
</section>

<!-- Founder Section -->
<section id="founder" class="py-32 cinema-surface-with-grain relative">
    <div class="cinema-grain absolute inset-0"></div>
    
    <div class="container mx-auto px-6 relative z-10">
        <!-- Section Header -->
        <div class="text-center mb-20 animate-on-scroll">
            <div class="brass-rule mx-auto mb-8" style="width: 200px; border-top: var(--ssos-line);"></div>
            <h2 class="heading-display text-4xl md:text-5xl lg:text-6xl mb-6 glow-text font-bold">
                MEET YOUR GUIDE
            </h2>
            <p class="body-premium text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
                Barack El combines deep spiritual training with proven business systems to help entrepreneurs build authentic, sustainable enterprises
            </p>
        </div>

        <!-- Founder Profile -->
        <div class="max-w-6xl mx-auto">
            <div class="founder-profile-grid gap-16 items-center">
                <!-- Photo -->
                <div class="relative animate-on-scroll">
                    <div class="cinema-testimonial-frame mx-auto" style="width: 400px; height: 400px;">
                        <img 
                            src="<?php echo get_template_directory_uri(); ?>/assets/images/barack-el-portrait.jpg" 
                            alt="Barack El - Sacred Signal OS Founder" 
                            class="w-full h-full object-cover"
                        />
                    </div>
                </div>

                <!-- Content -->
                <div class="space-y-8 animate-on-scroll">
                    <div>
                        <h3 class="heading-display text-3xl md:text-4xl mb-4 cinema-text-shadow glow-text font-bold">
                            THE SIGNAL ARCHITECT
                        </h3>
                        <p class="body-premium text-lg text-foreground/90 leading-relaxed mb-6">
                            As an award-winning leader and spiritual practitioner, Barack has developed the Sacred Signal methodology—a synthesis of 
                            ancient wisdom traditions and modern conversion psychology that creates authentic magnetic attraction.
                        </p>
                        <p class="body-premium text-lg text-foreground/90 leading-relaxed">
                            His clients don't just grow their businesses; they transform their entire relationship with 
                            prosperity, purpose, and the sacred art of service.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Philosophy Quote -->
        <div class="text-center mt-20 animate-on-scroll">
            <div class="brass-rule mx-auto mb-8" style="width: 200px; border-top: var(--ssos-line);"></div>
            <blockquote class="philosophy-quote text-2xl md:text-3xl font-light text-foreground/90 max-w-4xl mx-auto leading-relaxed cinema-text-shadow">
                "True wealth flows to those who stop chasing and start <em class="text-signal not-italic">resonating</em>. 
                The Sacred Signal OS teaches you to become the frequency your ideal clients are seeking."
            </blockquote>
            <cite class="block mt-6 text-brass font-medium tracking-wide">— Barack El, Founder</cite>
        </div>
    </div>
</section>

<!-- Offer Stack Section -->
<section id="offer-stack" class="py-20 bg-card">
    <div class="container">
        <div class="text-center mb-16 animate-on-scroll">
            <h2 class="heading-ritual text-4xl md:text-6xl mb-8 text-foreground">
                <?php echo get_theme_mod('offer_stack_title', 'THE COMPLETE TRANSFORMATION'); ?>
            </h2>
            <p class="body-premium text-xl text-muted-foreground max-w-3xl mx-auto">
                <?php echo get_theme_mod('offer_stack_description', 'Everything you need to transform your message into a magnetic sacred signal that attracts your dream clients and builds lasting impact.'); ?>
            </p>
        </div>

        <div class="offer-stack-grid stagger-children">
            <?php
            $offer_items = sacred_signal_os_get_offer_items();
            if (!empty($offer_items)) :
                foreach ($offer_items as $item) : ?>
                    <div class="offer-item animate-on-scroll">
                        <?php if (has_post_thumbnail($item->ID)) : ?>
                            <div class="offer-item-image">
                                <img src="<?php echo get_the_post_thumbnail_url($item->ID, 'thumbnail'); ?>" alt="<?php echo esc_attr($item->post_title); ?>">
                            </div>
                        <?php endif; ?>
                        <h4><?php echo esc_html($item->post_title); ?></h4>
                        <?php 
                        $value = get_post_meta($item->ID, '_offer_value', true);
                        if ($value) : ?>
                            <div class="value">$<?php echo esc_html($value); ?></div>
                        <?php endif; ?>
                        <p><?php echo wp_trim_words($item->post_content, 15); ?></p>
                    </div>
                <?php endforeach;
            endif; ?>
        </div>

        <div class="text-center mt-16 animate-on-scroll">
            <div class="inline-block">
                <p class="text-3xl font-bold text-foreground mb-2">
                    <?php echo get_theme_mod('total_value', 'Total Value: $4,997'); ?>
                </p>
                <p class="text-lg text-muted-foreground mb-8">
                    <?php echo get_theme_mod('investment_text', 'Your Investment Today'); ?>
                </p>
                <div class="text-6xl font-bold text-signal mb-4">
                    <?php echo get_theme_mod('price', '$1,997'); ?>
                </div>
                <p class="text-sm text-muted-foreground mb-8">
                    <?php echo get_theme_mod('payment_options', 'Or 3 payments of $697'); ?>
                </p>
            </div>
        </div>
    </div>
</section>

<!-- Testimonials Section -->
<section class="py-20 bg-background">
    <div class="container">
        <div class="text-center mb-16 animate-on-scroll">
            <h2 class="heading-ritual text-4xl md:text-6xl mb-8 text-foreground">
                <?php echo get_theme_mod('testimonials_title', 'SACRED SIGNAL SUCCESS STORIES'); ?>
            </h2>
            <p class="body-premium text-xl text-muted-foreground max-w-3xl mx-auto">
                <?php echo get_theme_mod('testimonials_description', 'See how visionary leaders have transformed their message and magnetized their dream clients through the Sacred Signal Operating System.'); ?>
            </p>
        </div>

        <div class="testimonial-grid stagger-children">
            <?php
            $testimonials = sacred_signal_os_get_testimonials(3);
            if (!empty($testimonials)) :
                foreach ($testimonials as $testimonial) : ?>
                    <div class="testimonial-card animate-on-scroll">
                        <div class="testimonial-quote">
                            "<?php echo wp_trim_words($testimonial->post_content, 30); ?>"
                        </div>
                        <div class="testimonial-author">
                            <?php if (has_post_thumbnail($testimonial->ID)) : ?>
                                <div class="testimonial-avatar">
                                    <img src="<?php echo get_the_post_thumbnail_url($testimonial->ID, 'testimonial-image'); ?>" alt="<?php echo esc_attr($testimonial->post_title); ?>">
                                </div>
                            <?php endif; ?>
                            <div class="testimonial-info">
                                <h4><?php echo esc_html($testimonial->post_title); ?></h4>
                                <p><?php echo esc_html(get_post_meta($testimonial->ID, '_testimonial_title', true)); ?></p>
                            </div>
                        </div>
                    </div>
                <?php endforeach;
            endif; ?>
        </div>
    </div>
</section>

<!-- Apply Section -->
<section id="apply" class="py-20 bg-signal text-signal-foreground">
    <div class="container">
        <div class="max-w-4xl mx-auto text-center animate-on-scroll">
            <h2 class="heading-ritual text-4xl md:text-6xl mb-8">
                <?php echo get_theme_mod('apply_title', 'YOUR SACRED SIGNAL AWAITS'); ?>
            </h2>
            <p class="body-premium text-xl mb-12 opacity-90">
                <?php echo get_theme_mod('apply_description', 'The question isn\'t whether you have a sacred signal. The question is whether you\'re ready to tune it to its full power and let it transform everything.'); ?>
            </p>
            
            <div class="max-w-md mx-auto">
                <a 
                    href="<?php echo esc_url(home_url('/application/')); ?>" 
                    class="cinema-button bg-white text-signal hover:bg-gray-100 text-lg py-4 px-8 rounded-full font-semibold transition-all duration-300 inline-block w-full"
                >
                    <?php _e('APPLY FOR THE PROGRAM', 'sacred-signal-os'); ?>
                </a>
                <p class="text-sm mt-4 opacity-80">
                    <?php echo get_theme_mod('apply_disclaimer', 'Limited to 12 visionary leaders per cohort'); ?>
                </p>
            </div>
        </div>
    </div>
</section>

<?php get_footer(); ?>