<?php
/**
 * The front page template
 * 
 * @package Sacred_Signal_OS
 */

get_header(); ?>

<!-- Hero Section -->
<section class="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
    <!-- Cinematic Background -->
    <div class="absolute inset-0">
        <img 
            src="<?php echo get_template_directory_uri(); ?>/assets/images/cinema/hero-spiritual-teacher.jpg" 
            alt="Sacred Signal OS Background" 
            class="w-full h-full object-cover opacity-70"
        />
        <div class="absolute inset-0 bg-gradient-to-b from-background/95 via-background/30 to-background/50"></div>
    </div>
    
    <!-- Content -->
    <div class="relative z-10 container mx-auto px-6 text-center max-w-6xl">
        <!-- Main Headline with Cinematic Typography -->
        <div class="animate-on-scroll" style="animation-delay: 200ms;">
            <h1 class="heading-ritual text-4xl md:text-6xl lg:text-7xl xl:text-8xl mb-16 leading-none">
                <div class="hero-shout text-white mb-2">
                    TIRED OF SHOUTING
                </div>
                <div class="hero-void text-signal">
                    INTO THE VOID?
                </div>
            </h1>
        </div>

        <!-- Video Section with Cinematic Styling -->
        <div class="animate-on-scroll mb-20 max-w-4xl mx-auto" style="animation-delay: 400ms;">
            <div class="cinema-hero relative aspect-video rounded-2xl cinema-surface overflow-hidden group">
                <!-- Video Element -->
                <video 
                    class="w-full h-full object-cover"
                    poster="<?php echo get_template_directory_uri(); ?>/assets/images/cinema/hero-spiritual-teacher.jpg"
                    controls
                    preload="metadata"
                >
                    <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
                    <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.webm" type="video/webm" />
                    Your browser does not support the video tag.
                </video>
                
                <!-- Video Overlay with Play Button (shows when paused) -->
                <div class="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div class="w-16 h-16 bg-signal/20 border border-signal rounded-full flex items-center justify-center backdrop-blur-sm">
                        <div class="w-0 h-0 border-l-[12px] border-l-signal border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                    </div>
                </div>
            </div>
            <div class="text-center mt-8">
                <p class="text-signal font-medium text-lg mb-2">Sacred Signal OS Introduction</p>
                <p class="text-foreground/60">Discover Your Path To Authentic Business Growth</p>
            </div>
        </div>

        <!-- Cinematic Subheading Section -->
        <div class="animate-on-scroll space-y-12 mb-16" style="animation-delay: 600ms;">
            <div class="relative max-w-5xl mx-auto">
                <p class="body-premium text-2xl md:text-3xl text-foreground max-w-4xl mx-auto leading-relaxed font-light cinema-text-shadow">
                    For The Spiritual Entrepreneur Who Is Ready To Stop Chasing Clients And Start Attracting Them.
                </p>
                
                <!-- Signal Line Divider -->
                <div class="mt-12 mb-8">
                    <div class="flex items-center justify-center">
                        <!-- Left line -->
                        <div class="flex-1 h-px bg-gradient-to-r from-transparent via-brass/30 to-brass/60"></div>
                        
                        <!-- Center Metatron's Cube -->
                        <div class="mx-8 relative inline-flex items-center justify-center">
                            <svg 
                                width="48" 
                                height="48" 
                                viewBox="0 0 100 100" 
                                class="text-brass animate-[metatronRotate_25s_linear_infinite]"
                            >
                                <!-- Outer hexagon circles -->
                                <circle cx="50" cy="20" r="6" fill="none" stroke="currentColor" stroke-width="1" opacity="0.8" />
                                <circle cx="75" cy="35" r="6" fill="none" stroke="currentColor" stroke-width="1" opacity="0.8" />
                                <circle cx="75" cy="65" r="6" fill="none" stroke="currentColor" stroke-width="1" opacity="0.8" />
                                <circle cx="50" cy="80" r="6" fill="none" stroke="currentColor" stroke-width="1" opacity="0.8" />
                                <circle cx="25" cy="65" r="6" fill="none" stroke="currentColor" stroke-width="1" opacity="0.8" />
                                <circle cx="25" cy="35" r="6" fill="none" stroke="currentColor" stroke-width="1" opacity="0.8" />
                                
                                <!-- Inner hexagon circles -->
                                <circle cx="50" cy="32" r="4" fill="none" stroke="currentColor" stroke-width="1" opacity="0.9" />
                                <circle cx="65" cy="42" r="4" fill="none" stroke="currentColor" stroke-width="1" opacity="0.9" />
                                <circle cx="65" cy="58" r="4" fill="none" stroke="currentColor" stroke-width="1" opacity="0.9" />
                                <circle cx="50" cy="68" r="4" fill="none" stroke="currentColor" stroke-width="1" opacity="0.9" />
                                <circle cx="35" cy="58" r="4" fill="none" stroke="currentColor" stroke-width="1" opacity="0.9" />
                                <circle cx="35" cy="42" r="4" fill="none" stroke="currentColor" stroke-width="1" opacity="0.9" />
                                
                                <!-- Center circle -->
                                <circle cx="50" cy="50" r="3" fill="currentColor" opacity="1" class="animate-pulse" />
                                
                                <!-- Connecting lines - outer to inner hexagon -->
                                <line x1="50" y1="20" x2="50" y2="32" stroke="currentColor" stroke-width="0.5" opacity="0.6" />
                                <line x1="75" y1="35" x2="65" y2="42" stroke="currentColor" stroke-width="0.5" opacity="0.6" />
                                <line x1="75" y1="65" x2="65" y2="58" stroke="currentColor" stroke-width="0.5" opacity="0.6" />
                                <line x1="50" y1="80" x2="50" y2="68" stroke="currentColor" stroke-width="0.5" opacity="0.6" />
                                <line x1="25" y1="65" x2="35" y2="58" stroke="currentColor" stroke-width="0.5" opacity="0.6" />
                                <line x1="25" y1="35" x2="35" y2="42" stroke="currentColor" stroke-width="0.5" opacity="0.6" />
                                
                                <!-- Inner hexagon to center -->
                                <line x1="50" y1="32" x2="50" y2="50" stroke="currentColor" stroke-width="0.5" opacity="0.7" />
                                <line x1="65" y1="42" x2="50" y2="50" stroke="currentColor" stroke-width="0.5" opacity="0.7" />
                                <line x1="65" y1="58" x2="50" y2="50" stroke="currentColor" stroke-width="0.5" opacity="0.7" />
                                <line x1="50" y1="68" x2="50" y2="50" stroke="currentColor" stroke-width="0.5" opacity="0.7" />
                                <line x1="35" y1="58" x2="50" y2="50" stroke="currentColor" stroke-width="0.5" opacity="0.7" />
                                <line x1="35" y1="42" x2="50" y2="50" stroke="currentColor" stroke-width="0.5" opacity="0.7" />
                                
                                <!-- Outer hexagon interconnections -->
                                <line x1="50" y1="20" x2="75" y2="35" stroke="currentColor" stroke-width="0.3" opacity="0.4" />
                                <line x1="75" y1="35" x2="75" y2="65" stroke="currentColor" stroke-width="0.3" opacity="0.4" />
                                <line x1="75" y1="65" x2="50" y2="80" stroke="currentColor" stroke-width="0.3" opacity="0.4" />
                                <line x1="50" y1="80" x2="25" y2="65" stroke="currentColor" stroke-width="0.3" opacity="0.4" />
                                <line x1="25" y1="65" x2="25" y2="35" stroke="currentColor" stroke-width="0.3" opacity="0.4" />
                                <line x1="25" y1="35" x2="50" y2="20" stroke="currentColor" stroke-width="0.3" opacity="0.4" />
                                
                                <!-- Inner hexagon interconnections -->
                                <line x1="50" y1="32" x2="65" y2="42" stroke="currentColor" stroke-width="0.4" opacity="0.5" />
                                <line x1="65" y1="42" x2="65" y2="58" stroke="currentColor" stroke-width="0.4" opacity="0.5" />
                                <line x1="65" y1="58" x2="50" y2="68" stroke="currentColor" stroke-width="0.4" opacity="0.5" />
                                <line x1="50" y1="68" x2="35" y2="58" stroke="currentColor" stroke-width="0.4" opacity="0.5" />
                                <line x1="35" y1="58" x2="35" y2="42" stroke="currentColor" stroke-width="0.4" opacity="0.5" />
                                <line x1="35" y1="42" x2="50" y2="32" stroke="currentColor" stroke-width="0.4" opacity="0.5" />
                                
                                <!-- Diagonal connections for full Metatron's Cube -->
                                <line x1="50" y1="20" x2="25" y2="65" stroke="currentColor" stroke-width="0.2" opacity="0.3" />
                                <line x1="75" y1="35" x2="50" y2="80" stroke="currentColor" stroke-width="0.2" opacity="0.3" />
                                <line x1="75" y1="65" x2="25" y2="35" stroke="currentColor" stroke-width="0.2" opacity="0.3" />
                            </svg>
                        </div>
                        
                        <!-- Right line -->
                        <div class="flex-1 h-px bg-gradient-to-l from-transparent via-brass/30 to-brass/60"></div>
                    </div>
                </div>
            </div>
            
            <p class="body-premium text-xl md:text-2xl text-foreground/90 max-w-4xl mx-auto leading-relaxed font-light cinema-text-shadow">
                Install A Calm, Predictable Pipeline To Attract, Convert, And Enroll 
                <span class="text-signal font-medium"> 3-5 New High-Ticket Clients Per Month</span>, 
                Without Paid Ads Or Content Burnout.
            </p>
        </div>

        <!-- Cinematic CTA Button -->
        <div class="animate-on-scroll flex justify-center items-center" style="animation-delay: 800ms;">
            <a 
                href="<?php echo esc_url(home_url('/application/')); ?>"
                class="cinema-glow bg-transparent border-2 border-signal text-signal hover:bg-signal hover:text-background font-body font-medium px-12 py-6 text-xl motion-glow-hover rounded-full"
            >
                BEGIN YOUR TRANSFORMATION
            </a>
        </div>
    </div>
</section>

<!-- About Section -->
<section id="about" class="section-divider relative overflow-hidden">
    <!-- Background Accent Elements -->
    <div class="absolute top-1/2 right-1/4 opacity-4">
        <div class="w-20 h-20 border border-brass/10 transform rotate-45"></div>
    </div>
    
    <!-- Background Elements -->
    <div class="absolute top-40 right-10 opacity-10">
        <div class="w-[150px] h-[150px] border border-brass/20 rounded-full animate-pulse"></div>
    </div>

    <div class="container mx-auto px-6">
        <!-- Problem Section -->
        <div class="mb-20">
            <div class="text-center mb-16">
                <div class="flex items-center justify-center mb-8">
                    <div class="w-[300px] h-px bg-gradient-to-r from-transparent via-brass/30 to-brass"></div>
                </div>
                <h2 class="heading-ritual text-3xl md:text-5xl mb-6 glow-text">
                    THE SPIRITUAL ENTREPRENEUR'S DILEMMA
                </h2>
                <p class="body-sacred text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
                    You Have A Gift To Share, A Calling To Serve. But Right Now, Your Days Are Likely Filled With The Frustrating Reality Of Trying To Grow Your Business Online:
                </p>
            </div>

            <div class="ssos-grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto">
                <div class="ssos-card">
                    <div class="text-center">
                        <div class="w-64 h-40 mx-auto mb-6 rounded-lg overflow-hidden border border-brass/30">
                            <img 
                                src="<?php echo get_template_directory_uri(); ?>/assets/images/cinema/content-treadmill-new.jpg" 
                                alt="The endless content treadmill"
                                class="w-full h-full object-cover"
                            />
                        </div>
                        <h3 class="ssos-card-title text-xl mb-4">
                            The endless content treadmill
                        </h3>
                        <p class="body-premium text-foreground/75 leading-relaxed">
                            Creating post after post, hoping something will finally stick.
                        </p>
                    </div>
                </div>

                <div class="ssos-card">
                    <div class="text-center">
                        <div class="w-64 h-40 mx-auto mb-6 rounded-lg overflow-hidden border border-brass/30">
                            <img 
                                src="<?php echo get_template_directory_uri(); ?>/assets/images/cinema/algorithm-whiplash-new.jpg" 
                                alt="The anxiety of algorithm whiplash"
                                class="w-full h-full object-cover"
                            />
                        </div>
                        <h3 class="ssos-card-title text-xl mb-4">
                            The anxiety of algorithm whiplash
                        </h3>
                        <p class="body-premium text-foreground/75 leading-relaxed">
                            Watching your reach and leads disappear overnight.
                        </p>
                    </div>
                </div>

                <div class="ssos-card">
                    <div class="text-center">
                        <div class="w-64 h-40 mx-auto mb-6 rounded-lg overflow-hidden border border-brass/30">
                            <img 
                                src="<?php echo get_template_directory_uri(); ?>/assets/images/cinema/leaky-funnel-new.jpg" 
                                alt="The frustration of a leaky funnel"
                                class="w-full h-full object-cover"
                            />
                        </div>
                        <h3 class="ssos-card-title text-xl mb-4">
                            The frustration of a leaky funnel
                        </h3>
                        <p class="body-premium text-foreground/75 leading-relaxed">
                            Attracting followers who "love your vibe" but never buy.
                        </p>
                    </div>
                </div>

                <div class="ssos-card">
                    <div class="text-center">
                        <div class="w-64 h-40 mx-auto mb-6 rounded-lg overflow-hidden border border-brass/30">
                            <img 
                                src="<?php echo get_template_directory_uri(); ?>/assets/images/cinema/exhaustion-burnout-new.jpg" 
                                alt="The exhaustion of over-delivering"
                                class="w-full h-full object-cover"
                            />
                        </div>
                        <h3 class="ssos-card-title text-xl mb-4">
                            The exhaustion of over-delivering
                        </h3>
                        <p class="body-premium text-foreground/75 leading-relaxed">
                            Feeling resentful and burnt out, wondering if you'll ever make a real living.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Sacred Divider -->
        <div class="text-center mb-20 relative">
            <div class="flex items-center justify-center space-x-8">
                <div class="w-24 h-px bg-gradient-to-r from-transparent via-brass to-brass" />
                <div class="relative">
                    <p class="heading-ritual text-2xl md:text-3xl text-signal px-6 glow-text">
                        IT DOESN'T HAVE TO BE THIS WAY
                    </p>
                    <div class="absolute -top-2 -bottom-2 -left-2 -right-2 border border-signal/20 rounded-lg"></div>
                </div>
                <div class="w-24 h-px bg-gradient-to-l from-transparent via-brass/70 to-brass shadow-[0_0_20px_hsl(var(--brass)/0.4)] relative">
                    <div class="absolute inset-0 bg-gradient-to-l from-transparent via-white/20 to-white/10 blur-sm"></div>
                </div>
            </div>
        </div>

        <!-- Vision Section -->
        <div>
            <div class="text-center mb-16">
                <h2 class="heading-ritual text-3xl md:text-5xl mb-6 glow-text">
                    IMAGINE A BUSINESS WHERE...
                </h2>
            </div>

            <div class="ssos-grid grid-cols-1 max-w-5xl mx-auto">
                <div class="ssos-card">
                    <div class="flex items-center space-x-6">
                        <div class="flex-shrink-0 w-16 h-16 rounded-full overflow-hidden border border-brass/30">
                            <img 
                                src="<?php echo get_template_directory_uri(); ?>/assets/images/cinema/clear-resonant-message.jpg" 
                                alt="Your message is so clear and resonant"
                                class="w-full h-full object-cover"
                            />
                        </div>
                        <div class="flex-1">
                            <p class="body-premium text-lg leading-relaxed">
                                <span class="font-semibold text-foreground text-xl">Your message is so clear and resonant</span>{" "}
                                <span class="text-foreground/80">that your ideal clients instantly know they're in the right place.</span>
                            </p>
                        </div>
                    </div>
                </div>

                <div class="ssos-card">
                    <div class="flex items-center space-x-6">
                        <div class="flex-shrink-0 w-16 h-16 rounded-full overflow-hidden border border-brass/30">
                            <img 
                                src="<?php echo get_template_directory_uri(); ?>/assets/images/cinema/compelling-offer.jpg" 
                                alt="Your offer is so compelling"
                                class="w-full h-full object-cover"
                            />
                        </div>
                        <div class="flex-1">
                            <p class="body-premium text-lg leading-relaxed">
                                <span class="font-semibold text-foreground text-xl">Your offer is so compelling</span>{" "}
                                <span class="text-foreground/80">that it feels like an answer to their prayers.</span>
                            </p>
                        </div>
                    </div>
                </div>

                <div class="ssos-card">
                    <div class="flex items-center space-x-6">
                        <div class="flex-shrink-0 w-16 h-16 rounded-full overflow-hidden border border-brass/30">
                            <img 
                                src="<?php echo get_template_directory_uri(); ?>/assets/images/cinema/sustainable-content.jpg" 
                                alt="Your content system is so sustainable"
                                class="w-full h-full object-cover"
                            />
                        </div>
                        <div class="flex-1">
                            <p class="body-premium text-lg leading-relaxed">
                                <span class="font-semibold text-foreground text-xl">Your content system is so sustainable</span>{" "}
                                <span class="text-foreground/80">that you can create a month's worth of high-impact content in a single day.</span>
                            </p>
                        </div>
                    </div>
                </div>

                <div class="ssos-card">
                    <div class="flex items-center space-x-6">
                        <div class="flex-shrink-0 w-16 h-16 rounded-full overflow-hidden border border-brass/30">
                            <img 
                                src="<?php echo get_template_directory_uri(); ?>/assets/images/cinema/authentic-sales.jpg" 
                                alt="Your sales process is so authentic"
                                class="w-full h-full object-cover"
                            />
                        </div>
                        <div class="flex-1">
                            <p class="body-premium text-lg leading-relaxed">
                                <span class="font-semibold text-foreground text-xl">Your sales process is so authentic</span>{" "}
                                <span class="text-foreground/80">that it feels like a natural extension of your spiritual work.</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="text-center mt-16">
                <p class="heading-ritual text-2xl md:text-3xl text-signal mb-4 glow-text">
                    THIS IS THE PROMISE OF SACRED SIGNAL OS
                </p>
                <div class="flex items-center justify-center space-x-4">
                    <div class="flex-1 h-px bg-gradient-to-r from-transparent via-brass/30 to-brass/60 max-w-20"></div>
                    <div class="relative">
                        <div class="w-3 h-3 bg-brass transform rotate-45 shadow-[0_0_15px_hsl(var(--brass)/0.6)]"></div>
                        <div class="absolute inset-0 w-3 h-3 bg-gradient-to-br from-white/20 to-transparent transform rotate-45"></div>
                    </div>
                    <div class="flex-1 h-px bg-gradient-to-l from-transparent via-brass/30 to-brass/60 max-w-20"></div>
                </div>
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
<section id="offer-stack" class="section-divider surface-dark relative overflow-hidden">
    <div class="container max-w-4xl mx-auto">
        <!-- Brass Rule Divider -->
        <div class="flex items-center justify-center mb-16 fade-up">
            <!-- Left line -->
            <div class="flex-1 h-px bg-gradient-to-r from-transparent via-brass/30 to-brass/60"></div>
            <!-- Center icon -->
            <div class="mx-8 relative">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/images/sacred-geometry-icon.png" alt="Sacred Geometry" class="w-12 h-12 drop-shadow-lg" />
            </div>
            <!-- Right line -->
            <div class="flex-1 h-px bg-gradient-to-l from-transparent via-brass/30 to-brass/60"></div>
        </div>

        <!-- Header -->
        <div class="text-center mb-20 fade-up">
            <h2 class="heading-ritual text-4xl md:text-6xl mb-8 glow-text">
                EVERYTHING YOU GET INSIDE SACRED SIGNAL OS
            </h2>
            <p class="body-premium text-xl text-[hsl(var(--ssos-alabaster))] max-w-4xl mx-auto">
                We don't shout; we stack real support. Here's exactly what's included and why it matters.
            </p>
        </div>

        <!-- Core System -->
        <div class="mb-20 fade-up">
            <h3 class="heading-ritual text-xl md:text-2xl mb-6 text-center glow-text text-signal">
                CORE SYSTEM
            </h3>
            <div class="space-y-4">
                <div class="ssos-card p-4 border-signal/30">
                    <div class="flex items-start gap-4">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/sacred-geometry-icon.png" alt="Sacred Geometry" class="w-8 h-8 mt-1" />
                        <div class="flex-1">
                            <div class="md:flex md:items-center md:justify-between">
                                <h4 class="heading-ritual text-lg text-brass glow-golden mb-1 md:mb-0">SACRED SIGNAL OS: 12-WEEK SYSTEM (CORE TRAINING)</h4>
                                <div class="text-signal font-display font-bold text-base">Value: $6,000</div>
                            </div>
                            <p class="body-premium text-sm text-[hsl(var(--ssos-alabaster))] leading-relaxed">End-to-end operating system to tune your message, architect your offer, and install a steady, repeatable pipeline.</p>
                        </div>
                    </div>
                </div>

                <div class="ssos-card p-4 border-signal/30">
                    <div class="flex items-start gap-4">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/sacred-geometry-icon.png" alt="Sacred Geometry" class="w-8 h-8 mt-1" />
                        <div class="flex-1">
                            <div class="md:flex md:items-center md:justify-between">
                                <h4 class="heading-ritual text-lg text-brass glow-golden mb-1 md:mb-0">WEEKLY LIVE BUILD & COACHING (12 SESSIONS)</h4>
                                <div class="text-signal font-display font-bold text-base">Value: $2,000</div>
                            </div>
                            <p class="body-premium text-sm text-[hsl(var(--ssos-alabaster))] leading-relaxed">Real-time co-creation, hot seats, and implementation reviews so progress stays tangible each week.</p>
                        </div>
                    </div>
                </div>

                <div class="ssos-card p-4 border-signal/30">
                    <div class="flex items-start gap-4">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/sacred-geometry-icon.png" alt="Sacred Geometry" class="w-8 h-8 mt-1" />
                        <div class="flex-1">
                            <div class="md:flex md:items-center md:justify-between">
                                <h4 class="heading-ritual text-lg text-brass glow-golden mb-1 md:mb-0">OFFICE HOURS (2×/WEEK FOR 12 WEEKS)</h4>
                                <div class="text-signal font-display font-bold text-base">Value: $1,200</div>
                            </div>
                            <p class="body-premium text-sm text-[hsl(var(--ssos-alabaster))] leading-relaxed">Quick unblockers and focused feedback to keep momentum calm and consistent.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Tools for Speed & Certainty -->
        <div class="mb-20 fade-up">
            <h3 class="heading-ritual text-xl md:text-2xl mb-6 text-center glow-text text-signal">
                TOOLS FOR SPEED & CERTAINTY
            </h3>
            <div class="space-y-4">
                <div class="ssos-card p-4 border-signal/30">
                    <div class="flex items-start gap-4">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/sacred-geometry-icon.png" alt="Sacred Geometry" class="w-8 h-8 mt-1" />
                        <div class="flex-1">
                            <div class="md:flex md:items-center md:justify-between">
                                <h4 class="heading-ritual text-lg text-brass glow-golden mb-1 md:mb-0">BRAND VIBE REPORT</h4>
                                <div class="text-signal font-display font-bold text-base">Value: $900</div>
                            </div>
                            <p class="body-premium text-sm text-[hsl(var(--ssos-alabaster))] leading-relaxed">A founder-aligned brief that locks voice, promise, tone, and language do's/don'ts—so every asset hits the same frequency.</p>
                        </div>
                    </div>
                </div>

                <div class="ssos-card p-4 border-signal/30">
                    <div class="flex items-start gap-4">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/sacred-geometry-icon.png" alt="Sacred Geometry" class="w-8 h-8 mt-1" />
                        <div class="flex-1">
                            <div class="md:flex md:items-center md:justify-between">
                                <h4 class="heading-ritual text-lg text-brass glow-golden mb-1 md:mb-0">MOOD BOARD IMAGE</h4>
                                <div class="text-signal font-display font-bold text-base">Value: $700</div>
                            </div>
                            <p class="body-premium text-sm text-[hsl(var(--ssos-alabaster))] leading-relaxed">A professional, cinematic visual with premium styling for hero sections, social media, and decks.</p>
                        </div>
                    </div>
                </div>

                <div class="ssos-card p-4 border-signal/30">
                    <div class="flex items-start gap-4">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/sacred-geometry-icon.png" alt="Sacred Geometry" class="w-8 h-8 mt-1" />
                        <div class="flex-1">
                            <div class="md:flex md:items-center md:justify-between">
                                <h4 class="heading-ritual text-lg text-brass glow-golden mb-1 md:mb-0">VISUAL BRAND GUIDELINES</h4>
                                <div class="text-signal font-display font-bold text-base">Value: $900</div>
                            </div>
                            <p class="body-premium text-sm text-[hsl(var(--ssos-alabaster))] leading-relaxed">A practical guide: color specs, type hierarchy, CTA/button styles, iconography, motion pacing, and accessibility notes.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Tangible By-Products -->
        <div class="mb-20 fade-up">
            <h3 class="heading-ritual text-xl md:text-2xl mb-6 text-center glow-text text-signal">
                TANGIBLE BY-PRODUCTS (DONE-WITH-YOU ASSETS)
            </h3>
            <div class="space-y-4">
                <div class="ssos-card p-4 border-signal/30">
                    <div class="flex items-start gap-4">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/sacred-geometry-icon.png" alt="Sacred Geometry" class="w-8 h-8 mt-1" />
                        <div class="flex-1">
                            <div class="md:flex md:items-center md:justify-between">
                                <h4 class="heading-ritual text-lg text-brass glow-golden mb-1 md:mb-0">ORIGIN STORY STUDIO PRO + 7-EMAIL NURTURE + LOOM REVIEW</h4>
                                <div class="text-signal font-display font-bold text-base">Value: $1,500</div>
                            </div>
                            <p class="body-premium text-sm text-[hsl(var(--ssos-alabaster))] leading-relaxed">Your origin story, bio, and nurture bridge—crafted and reviewed—so your message carries.</p>
                        </div>
                    </div>
                </div>

                <div class="ssos-card p-4 border-signal/30">
                    <div class="flex items-start gap-4">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/sacred-geometry-icon.png" alt="Sacred Geometry" class="w-8 h-8 mt-1" />
                        <div class="flex-1">
                            <div class="md:flex md:items-center md:justify-between">
                                <h4 class="heading-ritual text-lg text-brass glow-golden mb-1 md:mb-0">ETHICS & CLAIMS PACK</h4>
                                <div class="text-signal font-display font-bold text-base">Value: $1,000</div>
                            </div>
                            <p class="body-premium text-sm text-[hsl(var(--ssos-alabaster))] leading-relaxed">Safe-claims checklist, consent language, and policy templates—built for integrity and protection.</p>
                        </div>
                    </div>
                </div>

                <div class="ssos-card p-4 border-signal/30">
                    <div class="flex items-start gap-4">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/sacred-geometry-icon.png" alt="Sacred Geometry" class="w-8 h-8 mt-1" />
                        <div class="flex-1">
                            <div class="md:flex md:items-center md:justify-between">
                                <h4 class="heading-ritual text-lg text-brass glow-golden mb-1 md:mb-0">KPI DASHBOARD & SCORECARD (NOTION/SHEETS)</h4>
                                <div class="text-signal font-display font-bold text-base">Value: $700</div>
                            </div>
                            <p class="body-premium text-sm text-[hsl(var(--ssos-alabaster))] leading-relaxed">Track opt-ins, lead→call, call→close, completion, and margin—know what's working at a glance.</p>
                        </div>
                    </div>
                </div>

                <div class="ssos-card p-4 border-signal/30">
                    <div class="flex items-start gap-4">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/sacred-geometry-icon.png" alt="Sacred Geometry" class="w-8 h-8 mt-1" />
                        <div class="flex-1">
                            <div class="md:flex md:items-center md:justify-between">
                                <h4 class="heading-ritual text-lg text-brass glow-golden mb-1 md:mb-0">DREAM 100 OUTREACH STARTER PACK</h4>
                                <div class="text-signal font-display font-bold text-base">Value: $900</div>
                            </div>
                            <p class="body-premium text-sm text-[hsl(var(--ssos-alabaster))] leading-relaxed">Research prompts, LinkedIn & email scripts, and a tracker to open partner doors with clarity.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Limited-Time Bonuses -->
        <div class="mb-20 fade-up">
            <h3 class="heading-ritual text-xl md:text-2xl mb-6 text-center glow-text text-signal">
                LIMITED-TIME BONUSES (INCLUDED WHEN YOU ENROLL NOW)
            </h3>
            <div class="space-y-4">
                <div class="ssos-card p-4 bg-gradient-to-br from-brass/5 via-background/80 to-brass/10 border-brass/40">
                    <div class="flex items-start gap-4">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/sacred-geometry-icon.png" alt="Sacred Geometry" class="w-8 h-8 mt-1" />
                        <div class="flex-1">
                            <div class="md:flex md:items-center md:justify-between">
                                <h4 class="heading-ritual text-lg text-brass glow-golden mb-1 md:mb-0">BONUS: LINKEDIN CONTENT ENGINE</h4>
                                <div class="text-signal font-display font-bold text-base">Value: $1,200</div>
                            </div>
                            <p class="body-premium text-sm text-[hsl(var(--ssos-alabaster))] leading-relaxed">30-day content calendar, 12 ready scripts, and a repurpose SOP to publish with clarity—not burnout.</p>
                        </div>
                    </div>
                </div>

                <div class="ssos-card p-4 bg-gradient-to-br from-brass/5 via-background/80 to-brass/10 border-brass/40">
                    <div class="flex items-start gap-4">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/sacred-geometry-icon.png" alt="Sacred Geometry" class="w-8 h-8 mt-1" />
                        <div class="flex-1">
                            <div class="md:flex md:items-center md:justify-between">
                                <h4 class="heading-ritual text-lg text-brass glow-golden mb-1 md:mb-0">BONUS: PROOF ARCHITECTURE PACK</h4>
                                <div class="text-signal font-display font-bold text-base">Value: $1,200</div>
                            </div>
                            <p class="body-premium text-sm text-[hsl(var(--ssos-alabaster))] leading-relaxed">Intake/mid/outtake measures, testimonial prompts, and a case-page kit to make trust visible.</p>
                        </div>
                    </div>
                </div>

                <div class="ssos-card p-4 bg-gradient-to-br from-brass/5 via-background/80 to-brass/10 border-brass/40">
                    <div class="flex items-start gap-4">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/sacred-geometry-icon.png" alt="Sacred Geometry" class="w-8 h-8 mt-1" />
                        <div class="flex-1">
                            <div class="md:flex md:items-center md:justify-between">
                                <h4 class="heading-ritual text-lg text-brass glow-golden mb-1 md:mb-0">BONUS: AFTERCARE 1:1 (60-MIN IN MONTH 4)</h4>
                                <div class="text-signal font-display font-bold text-base">Value: $600</div>
                            </div>
                            <p class="body-premium text-sm text-[hsl(var(--ssos-alabaster))] leading-relaxed">A personal course-correction and next-steps plan once the system is live.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Guarantee -->
        <div class="mb-20 fade-up">
            <h3 class="heading-ritual text-xl md:text-2xl mb-6 text-center glow-text text-signal">
                GUARANTEE
            </h3>
            <div class="max-w-4xl mx-auto">
                <div class="ssos-card p-6 bg-gradient-to-br from-signal/5 via-background/80 to-signal/10 border-signal/30 text-center">
                    <h4 class="heading-ritual text-xl text-brass glow-golden mb-4">30-DAY MONEY-BACK GUARANTEE.</h4>
                    <p class="body-premium text-[hsl(var(--ssos-alabaster))] leading-relaxed">
                        Join Sacred Signal OS and do the work for 30 days. If you don't feel clearer, more confident, and moving toward a steady pipeline, email us within 30 days for a full refund. No hassle.
                    </p>
                </div>
            </div>
        </div>

        <!-- Why Decide Now -->
        <div class="mb-20 fade-up">
            <h3 class="heading-ritual text-xl md:text-2xl mb-6 text-center glow-text text-signal">
                WHY DECIDE NOW
            </h3>
            <div class="max-w-4xl mx-auto space-y-4">
                <div class="flex items-start gap-4">
                    <div class="w-2 h-2 rounded-full bg-brass mt-3 flex-shrink-0"></div>
                    <p class="body-premium text-[hsl(var(--ssos-alabaster))] leading-relaxed">
                        <strong class="text-brass">Rolling start, limited capacity:</strong> We onboard a small number of new clients at a time to protect delivery quality. When capacity is reached, new starts pause until a seat opens.
                    </p>
                </div>
                <div class="flex items-start gap-4">
                    <div class="w-2 h-2 rounded-full bg-brass mt-3 flex-shrink-0"></div>
                    <p class="body-premium text-[hsl(var(--ssos-alabaster))] leading-relaxed">
                        <strong class="text-brass">Bonus window:</strong> The three bonuses above are available during the current enrollment window and may be removed when capacity is met.
                    </p>
                </div>
                <div class="flex items-start gap-4">
                    <div class="w-2 h-2 rounded-full bg-brass mt-3 flex-shrink-0"></div>
                    <p class="body-premium text-[hsl(var(--ssos-alabaster))] leading-relaxed">
                        <strong class="text-brass">Lock in current pricing:</strong> Our current rate and will increase soon. Reserve your start now to secure today's price and begin at the next available opening.
                    </p>
                </div>
            </div>
        </div>

        <!-- Final Pricing -->
        <div class="text-center mb-20 fade-up">
            <h3 class="heading-ritual text-3xl md:text-4xl mb-4 glow-text">
                APPLY FOR SACRED SIGNAL OS
            </h3>
            <p class="body-premium text-lg text-[hsl(var(--ssos-alabaster))] mb-8">
                12 Weeks • High-Touch Coaching • Complete Transformation
            </p>

            <div class="mb-12">
                <div class="text-base text-[hsl(var(--ssos-alabaster))] mb-2">Total Value: <span class="line-through">$18,800</span></div>
                <div class="text-base text-[hsl(var(--ssos-alabaster))] mb-2">Only: <span class="line-through text-lg">$2,997</span></div>
                <div class="text-3xl md:text-4xl font-bold text-signal mb-4 glow-text">
                    Your Price Today: $1,597
                </div>
            </div>

            <!-- Payment Options -->
            <div class="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-12">
                <div class="ssos-card p-4 text-center bg-gradient-to-br from-signal/10 via-background/80 to-signal/5 border-signal/30">
                    <div class="text-xl font-bold text-signal mb-1">$1,497</div>
                    <div class="text-xs text-brass mb-1">Save $100</div>
                    <div class="text-[hsl(var(--ssos-alabaster))] font-medium text-sm">Pay In Full</div>
                </div>
                <div class="ssos-card p-4 text-center border-signal/30">
                    <div class="text-xl font-bold text-[hsl(var(--ssos-alabaster))] mb-1">2 × $799</div>
                    <div class="text-xs text-[hsl(var(--ssos-alabaster))] opacity-70 mb-1">Monthly</div>
                    <div class="text-[hsl(var(--ssos-alabaster))] font-medium text-sm">2-Pay Option</div>
                </div>
                <div class="ssos-card p-4 text-center border-signal/30">
                    <div class="text-xl font-bold text-[hsl(var(--ssos-alabaster))] mb-1">3 × $533</div>
                    <div class="text-xs text-[hsl(var(--ssos-alabaster))] opacity-70 mb-1">Monthly</div>
                    <div class="text-[hsl(var(--ssos-alabaster))] font-medium text-sm">3-Pay Option</div>
                </div>
            </div>

            <p class="body-premium text-base text-[hsl(var(--ssos-alabaster))] mb-8 italic">
                If all Sacred Signal OS did was give you a clear message and a steady, values-aligned pipeline, would it be worth $1,597?
            </p>

            <div class="mb-12">
                <button 
                    onclick="document.getElementById('apply').scrollIntoView({ behavior: 'smooth' })"
                    class="bg-signal text-background hover:bg-signal/90 font-body font-semibold px-12 py-4 text-lg rounded-xl button-lift transition-all duration-300"
                >
                    Apply Now for Sacred Signal OS
                </button>
                <p class="text-sm text-[hsl(var(--ssos-alabaster))] opacity-70 mt-4">
                    Applications Reviewed Within 48 Hours
                </p>
            </div>

            <!-- What Happens Next -->
            <div class="max-w-3xl mx-auto">
                <h4 class="heading-ritual text-lg text-brass glow-golden mb-8">WHAT HAPPENS NEXT:</h4>
                <div class="space-y-4">
                    <div class="flex items-start gap-4">
                        <div class="w-8 h-8 bg-signal text-background rounded-full font-bold text-sm flex items-center justify-center flex-shrink-0 mt-1">1</div>
                        <p class="body-premium text-sm text-[hsl(var(--ssos-alabaster))] leading-relaxed text-left">Complete Application & Values Alignment Assessment</p>
                    </div>
                    <div class="flex items-start gap-4">
                        <div class="w-8 h-8 bg-signal text-background rounded-full font-bold text-sm flex items-center justify-center flex-shrink-0 mt-1">2</div>
                        <p class="body-premium text-sm text-[hsl(var(--ssos-alabaster))] leading-relaxed text-left">Brief Discovery Call To Ensure Mutual Fit</p>
                    </div>
                    <div class="flex items-start gap-4">
                        <div class="w-8 h-8 bg-signal text-background rounded-full font-bold text-sm flex items-center justify-center flex-shrink-0 mt-1">3</div>
                        <p class="body-premium text-sm text-[hsl(var(--ssos-alabaster))] leading-relaxed text-left">Receive Program Intake Materials</p>
                    </div>
                    <div class="flex items-start gap-4">
                        <div class="w-8 h-8 bg-signal text-background rounded-full font-bold text-sm flex items-center justify-center flex-shrink-0 mt-1">4</div>
                        <p class="body-premium text-sm text-[hsl(var(--ssos-alabaster))] leading-relaxed text-left">Begin Your 12-Week Transformation</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Apply Section -->
<section id="apply" class="apply-section relative py-32 overflow-hidden">
    <!-- Background decorative elements -->
    <div class="absolute inset-0">
        <div class="absolute top-1/4 left-1/4 w-64 h-64 opacity-5">
            <svg viewBox="0 0 200 200" class="w-full h-full text-brass">
                <circle cx="100" cy="100" r="50" fill="none" stroke="currentColor" stroke-width="2"/>
                <circle cx="100" cy="100" r="75" fill="none" stroke="currentColor" stroke-width="1" opacity="0.5"/>
                <circle cx="100" cy="100" r="25" fill="none" stroke="currentColor" stroke-width="3"/>
            </svg>
        </div>
        <div class="absolute bottom-1/4 right-1/4 w-48 h-48 opacity-5">
            <svg viewBox="0 0 120 120" class="w-full h-full text-brass transform rotate-45">
                <polygon points="60,10 90,30 90,60 60,80 30,60 30,30" fill="none" stroke="currentColor" stroke-width="2"/>
                <polygon points="60,25 75,35 75,55 60,65 45,55 45,35" fill="none" stroke="currentColor" stroke-width="1"/>
            </svg>
        </div>
    </div>

    <div class="container relative z-10">
        <!-- Testimonials Section -->
        <div class="mb-32">
            <div class="text-center mb-16 animate-on-scroll">
                <h2 class="glow-text text-4xl md:text-6xl mb-8 text-foreground font-light tracking-wide">
                    WHAT PEOPLE ARE SAYING
                </h2>
            </div>

            <div class="ssos-grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children">
                <!-- Marissa Fontana -->
                <div class="ssos-card text-center animate-on-scroll">
                    <div class="testimonial-image-container mb-6">
                        <div class="testimonial-frame">
                            <img 
                                src="<?php echo get_template_directory_uri(); ?>/assets/images/testimonials/marissa-fontana.jpg" 
                                alt="Marissa Fontana"
                                class="testimonial-image"
                            />
                        </div>
                        <div class="sacred-geometry-icon mt-4">
                            <svg viewBox="0 0 120 120" class="w-8 h-8 text-brass mx-auto">
                                <polygon points="60,10 90,30 90,60 60,80 30,60 30,30" fill="none" stroke="currentColor" stroke-width="2"/>
                                <polygon points="60,25 75,35 75,55 60,65 45,55 45,35" fill="none" stroke="currentColor" stroke-width="1"/>
                            </svg>
                        </div>
                    </div>
                    <blockquote class="text-lg italic text-muted-foreground mb-4 leading-relaxed">
                        "Barack is the real deal with a business grounded in purpose. Since getting to know Barack and collaborating with him on multiple projects, it's evident how devoted Barack is to the mission of empowering women and nurturing the emergence of the divine feminine in all of us."
                    </blockquote>
                    <cite class="text-base font-medium text-foreground">— Marissa Fontana</cite>
                </div>

                <!-- Leora Leon -->
                <div class="ssos-card text-center animate-on-scroll">
                    <div class="testimonial-image-container mb-6">
                        <div class="testimonial-frame">
                            <img 
                                src="<?php echo get_template_directory_uri(); ?>/assets/images/testimonials/leora-leon.jpg" 
                                alt="Leora Leon"
                                class="testimonial-image"
                            />
                        </div>
                        <div class="sacred-geometry-icon mt-4">
                            <svg viewBox="0 0 120 120" class="w-8 h-8 text-brass mx-auto">
                                <polygon points="60,10 90,30 90,60 60,80 30,60 30,30" fill="none" stroke="currentColor" stroke-width="2"/>
                                <polygon points="60,25 75,35 75,55 60,65 45,55 45,35" fill="none" stroke="currentColor" stroke-width="1"/>
                            </svg>
                        </div>
                    </div>
                    <blockquote class="text-lg italic text-muted-foreground mb-4 leading-relaxed">
                        "Barack El is a force to be reckoned with. Not only is Barack a talented entrepreneur who created Femigod, a brilliant company that evokes spiritually and smart business techniques, he is also the real deal, a beautiful, kind and authentic human. It's a pleasure to know him and work with him."
                    </blockquote>
                    <cite class="text-base font-medium text-foreground">— Leora Leon</cite>
                </div>

                <!-- Dr. Susie Colles -->
                <div class="ssos-card text-center animate-on-scroll">
                    <div class="testimonial-image-container mb-6">
                        <div class="testimonial-frame">
                            <img 
                                src="<?php echo get_template_directory_uri(); ?>/assets/images/testimonials/susie-colles.jpg" 
                                alt="Dr. Susie Colles"
                                class="testimonial-image"
                            />
                        </div>
                        <div class="sacred-geometry-icon mt-4">
                            <svg viewBox="0 0 120 120" class="w-8 h-8 text-brass mx-auto">
                                <polygon points="60,10 90,30 90,60 60,80 30,60 30,30" fill="none" stroke="currentColor" stroke-width="2"/>
                                <polygon points="60,25 75,35 75,55 60,65 45,55 45,35" fill="none" stroke="currentColor" stroke-width="1"/>
                            </svg>
                        </div>
                    </div>
                    <blockquote class="text-lg italic text-muted-foreground mb-4 leading-relaxed">
                        "I recently had the pleasure of chatting with Barack about all things spiritual. What a pleasure to be associated with an individual so committed to helping women find and develop their spiritual nature. Of course, it stands to reason that Barack, so focused on helping others thrive, has a vibrant spirit himself!"
                    </blockquote>
                    <cite class="text-base font-medium text-foreground">— Susie Colles, PhD</cite>
                </div>
            </div>
        </div>

        <!-- FAQ Section -->
        <div class="mb-32">
            <div class="text-center mb-16 animate-on-scroll">
                <h2 class="glow-text text-4xl md:text-6xl mb-8 text-foreground font-light tracking-wide">
                    FREQUENTLY ASKED QUESTIONS
                </h2>
            </div>

            <div class="max-w-4xl mx-auto space-y-6">
                <!-- FAQ Item 1 -->
                <div class="ssos-card animate-on-scroll">
                    <div class="flex items-start space-x-4">
                        <div class="flex-shrink-0 mt-1">
                            <svg viewBox="0 0 200 200" class="w-6 h-6 text-brass">
                                <circle cx="100" cy="100" r="50" fill="none" stroke="currentColor" stroke-width="2"/>
                                <circle cx="100" cy="100" r="75" fill="none" stroke="currentColor" stroke-width="1" opacity="0.5"/>
                                <circle cx="100" cy="100" r="25" fill="none" stroke="currentColor" stroke-width="3"/>
                            </svg>
                        </div>
                        <div>
                            <h3 class="text-xl font-semibold text-foreground mb-3">WHO IS THIS PROGRAM FOR?</h3>
                            <p class="text-muted-foreground leading-relaxed">
                                Spiritual entrepreneurs (coaches, healers, guides) who are skilled in their craft but struggle with business and marketing aspects. You should have 1-3 years of business experience with sporadic income between $2k-$5k per month.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- FAQ Item 2 -->
                <div class="ssos-card animate-on-scroll">
                    <div class="flex items-start space-x-4">
                        <div class="flex-shrink-0 mt-1">
                            <svg viewBox="0 0 200 200" class="w-6 h-6 text-brass">
                                <circle cx="100" cy="100" r="50" fill="none" stroke="currentColor" stroke-width="2"/>
                                <circle cx="100" cy="100" r="75" fill="none" stroke="currentColor" stroke-width="1" opacity="0.5"/>
                                <circle cx="100" cy="100" r="25" fill="none" stroke="currentColor" stroke-width="3"/>
                            </svg>
                        </div>
                        <div>
                            <h3 class="text-xl font-semibold text-foreground mb-3">WHAT IF I'M NOT ON LINKEDIN?</h3>
                            <p class="text-muted-foreground leading-relaxed">
                                While we focus on LinkedIn as the primary platform, the principles of clear messaging, authentic offer creation, and systematic client attraction work across all platforms. We'll help you adapt the system to your preferred channel.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- FAQ Item 3 -->
                <div class="ssos-card animate-on-scroll">
                    <div class="flex items-start space-x-4">
                        <div class="flex-shrink-0 mt-1">
                            <svg viewBox="0 0 200 200" class="w-6 h-6 text-brass">
                                <circle cx="100" cy="100" r="50" fill="none" stroke="currentColor" stroke-width="2"/>
                                <circle cx="100" cy="100" r="75" fill="none" stroke="currentColor" stroke-width="1" opacity="0.5"/>
                                <circle cx="100" cy="100" r="25" fill="none" stroke="currentColor" stroke-width="3"/>
                            </svg>
                        </div>
                        <div>
                            <h3 class="text-xl font-semibold text-foreground mb-3">WHAT KIND OF RESULTS CAN I EXPECT?</h3>
                            <p class="text-muted-foreground leading-relaxed">
                                While results vary based on individual effort and market conditions, our goal is to help you achieve consistent $5k-$10k months with a predictable client pipeline. We cannot guarantee specific income but provide proven systems and frameworks.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- FAQ Item 4 -->
                <div class="ssos-card animate-on-scroll">
                    <div class="flex items-start space-x-4">
                        <div class="flex-shrink-0 mt-1">
                            <svg viewBox="0 0 200 200" class="w-6 h-6 text-brass">
                                <circle cx="100" cy="100" r="50" fill="none" stroke="currentColor" stroke-width="2"/>
                                <circle cx="100" cy="100" r="75" fill="none" stroke="currentColor" stroke-width="1" opacity="0.5"/>
                                <circle cx="100" cy="100" r="25" fill="none" stroke="currentColor" stroke-width="3"/>
                            </svg>
                        </div>
                        <div>
                            <h3 class="text-xl font-semibold text-foreground mb-3">WHAT IS THE TIME COMMITMENT?</h3>
                            <p class="text-muted-foreground leading-relaxed">
                                Expect 4-7 hours per week including: weekly 90-120 minute live sessions, implementation work, and participation in office hours. This is a high-touch, implementation-focused program requiring active participation.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- FAQ Item 5 -->
                <div class="ssos-card animate-on-scroll">
                    <div class="flex items-start space-x-4">
                        <div class="flex-shrink-0 mt-1">
                            <svg viewBox="0 0 200 200" class="w-6 h-6 text-brass">
                                <circle cx="100" cy="100" r="50" fill="none" stroke="currentColor" stroke-width="2"/>
                                <circle cx="100" cy="100" r="75" fill="none" stroke="currentColor" stroke-width="1" opacity="0.5"/>
                                <circle cx="100" cy="100" r="25" fill="none" stroke="currentColor" stroke-width="3"/>
                            </svg>
                        </div>
                        <div>
                            <h3 class="text-xl font-semibold text-foreground mb-3">DO YOU OFFER REFUNDS?</h3>
                            <p class="text-muted-foreground leading-relaxed">
                                We're so confident in the Sacred Signal OS system that we offer a 30-day refund guarantee for engaged participants. Show up, do the work, and if you're not satisfied with your progress, we'll refund your investment. Refunds are not available after 30 days.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Recognition & Influence Section -->
        <div class="mb-32">
            <!-- Hero Image -->
            <div class="mb-16 animate-on-scroll">
                <div class="relative h-96 md:h-[512px] rounded-3xl overflow-hidden">
                    <img 
                        src="<?php echo get_template_directory_uri(); ?>/assets/images/recognition-influence-hero.jpg" 
                        alt="Recognition and Influence"
                        class="w-full h-full object-cover"
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
            </div>

            <div class="text-center mb-16 animate-on-scroll">
                <h2 class="glow-text text-4xl md:text-6xl mb-8 text-foreground font-light tracking-wide">
                    RECOGNITION & INFLUENCE
                </h2>
            </div>

            <div class="ssos-grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                <!-- Outstanding Leadership Award -->
                <div class="ssos-card animate-on-scroll">
                    <div class="flex items-start space-x-4">
                        <div class="flex-shrink-0 mt-1">
                            <svg viewBox="0 0 200 200" class="w-8 h-8 text-brass">
                                <circle cx="100" cy="100" r="50" fill="none" stroke="currentColor" stroke-width="2"/>
                                <circle cx="100" cy="100" r="75" fill="none" stroke="currentColor" stroke-width="1" opacity="0.5"/>
                                <circle cx="100" cy="100" r="25" fill="none" stroke="currentColor" stroke-width="3"/>
                            </svg>
                        </div>
                        <div>
                            <h3 class="text-xl font-semibold text-foreground mb-3">Outstanding Leadership Award</h3>
                            <p class="text-muted-foreground">
                                Recognized by the International Association of Spiritual Entrepreneurs for innovative approaches to conscious business building and ethical marketing practices.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- International Keynote Barcelona -->
                <div class="ssos-card animate-on-scroll">
                    <div class="flex items-start space-x-4">
                        <div class="flex-shrink-0 mt-1">
                            <svg viewBox="0 0 200 200" class="w-8 h-8 text-brass">
                                <circle cx="100" cy="100" r="50" fill="none" stroke="currentColor" stroke-width="2"/>
                                <circle cx="100" cy="100" r="75" fill="none" stroke="currentColor" stroke-width="1" opacity="0.5"/>
                                <circle cx="100" cy="100" r="25" fill="none" stroke="currentColor" stroke-width="3"/>
                            </svg>
                        </div>
                        <div>
                            <h3 class="text-xl font-semibold text-foreground mb-3">International Keynote: Barcelona</h3>
                            <p class="text-muted-foreground">
                                Delivered opening keynote on "Sacred Signal Systems" at the Global Conscious Business Summit to an audience of 2,000+ spiritual entrepreneurs.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Featured Voice WYN Global -->
                <div class="ssos-card animate-on-scroll">
                    <div class="flex items-start space-x-4">
                        <div class="flex-shrink-0 mt-1">
                            <svg viewBox="0 0 200 200" class="w-8 h-8 text-brass">
                                <circle cx="100" cy="100" r="50" fill="none" stroke="currentColor" stroke-width="2"/>
                                <circle cx="100" cy="100" r="75" fill="none" stroke="currentColor" stroke-width="1" opacity="0.5"/>
                                <circle cx="100" cy="100" r="25" fill="none" stroke="currentColor" stroke-width="3"/>
                            </svg>
                        </div>
                        <div>
                            <h3 class="text-xl font-semibold text-foreground mb-3">Featured Voice: WYN Global</h3>
                            <p class="text-muted-foreground">
                                Contributing expert for Women's Yoga Network Global, sharing insights on building authentic spiritual businesses with over 50,000 practitioners worldwide.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Why This Resonates -->
                <div class="ssos-card animate-on-scroll special-gradient-bg">
                    <div class="flex items-start space-x-4">
                        <div class="flex-shrink-0 mt-1">
                            <svg viewBox="0 0 200 200" class="w-8 h-8 text-brass">
                                <circle cx="100" cy="100" r="50" fill="none" stroke="currentColor" stroke-width="2"/>
                                <circle cx="100" cy="100" r="75" fill="none" stroke="currentColor" stroke-width="1" opacity="0.5"/>
                                <circle cx="100" cy="100" r="25" fill="none" stroke="currentColor" stroke-width="3"/>
                            </svg>
                        </div>
                        <div>
                            <h3 class="text-xl font-semibold text-foreground mb-3">Why This Resonates</h3>
                            <p class="text-muted-foreground">
                                The recognition isn't about credentials—it's about results. These platforms chose Barack because the Sacred Signal OS methodology consistently helps spiritual entrepreneurs bridge the gap between purpose and profit with integrity.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Apply Section -->
        <div class="section-divider surface-dark relative overflow-hidden">
            <!-- Background Elements -->
            <div class="absolute top-20 left-20 opacity-20">
                <svg viewBox="0 0 100 100" class="w-24 h-24 text-signal">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" stroke-width="2" opacity="0.4" class="animate-ping"/>
                    <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" stroke-width="2" opacity="0.6"/>
                    <circle cx="50" cy="50" r="10" fill="none" stroke="currentColor" stroke-width="3" opacity="0.8"/>
                    <circle cx="50" cy="50" r="4" fill="currentColor"/>
                </svg>
            </div>
            <div class="absolute bottom-20 right-20 opacity-20">
                <svg viewBox="0 0 100 100" class="w-16 h-16 text-brass">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" stroke-width="1" opacity="0.6"/>
                    <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" stroke-width="1" opacity="0.8"/>
                    <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" stroke-width="1.5"/>
                    <path d="M50 20 L55 40 L70 35 L60 50 L75 55 L55 60 L60 75 L50 65 L45 80 L40 60 L25 65 L35 50 L20 45 L40 40 L35 25 L50 35 Z" fill="currentColor" opacity="0.7"/>
                    <circle cx="50" cy="50" r="3" fill="currentColor"/>
                </svg>
            </div>

            <div class="container mx-auto px-6 max-w-4xl">
                <!-- Pricing Card -->
                <div class="bg-gradient-to-br from-background/90 via-background/95 to-background/90 backdrop-blur-sm border border-signal/30 rounded-2xl p-8 md:p-12 shadow-xl fade-up">
                    <!-- Header -->
                    <div class="text-center mb-8">
                        <h2 class="heading-ritual text-3xl md:text-4xl mb-4 glow-text text-signal">
                            APPLY FOR SACRED SIGNAL OS
                        </h2>
                        <p class="text-[hsl(var(--ssos-alabaster))] text-lg font-light">
                            12 Weeks • High-Touch Coaching • Complete Transformation
                        </p>
                    </div>

                    <!-- Value and Pricing -->
                    <div class="text-center mb-8 space-y-2">
                        <div class="text-[hsl(var(--ssos-alabaster))] text-lg">
                            Total Value: <span class="text-brass font-bold">$18,800</span>
                        </div>
                        <div class="text-[hsl(var(--ssos-alabaster))] text-lg">
                            <span class="line-through opacity-60">Only: $2,997</span>
                        </div>
                        <div class="text-2xl md:text-3xl font-bold text-signal glow-text">
                            Your Price Today: $1,597
                        </div>
                        <div class="text-3xl md:text-4xl font-bold text-brass glow-golden">
                            $1,497
                        </div>
                        <div class="text-signal font-semibold">
                            Save $100
                        </div>
                    </div>

                    <!-- Payment Options -->
                    <div class="grid md:grid-cols-3 gap-4 mb-8">
                        <!-- Pay in Full -->
                        <div class="bg-gradient-to-br from-signal/10 via-background/50 to-signal/5 border border-signal/30 rounded-xl p-6 text-center">
                            <div class="text-2xl font-bold text-signal mb-2">$1,497</div>
                            <div class="text-sm text-[hsl(var(--ssos-alabaster))] mb-1">Save $100</div>
                            <div class="font-semibold text-brass">Pay In Full</div>
                        </div>

                        <!-- 2-Pay -->
                        <div class="bg-gradient-to-br from-brass/10 via-background/50 to-brass/5 border border-brass/30 rounded-xl p-6 text-center">
                            <div class="text-2xl font-bold text-brass mb-2">2 × $799</div>
                            <div class="text-sm text-[hsl(var(--ssos-alabaster))] mb-1">Monthly</div>
                            <div class="font-semibold text-signal">2-Pay Option</div>
                        </div>

                        <!-- 3-Pay -->
                        <div class="bg-gradient-to-br from-brass/10 via-background/50 to-brass/5 border border-brass/30 rounded-xl p-6 text-center">
                            <div class="text-2xl font-bold text-brass mb-2">3 × $533</div>
                            <div class="text-sm text-[hsl(var(--ssos-alabaster))] mb-1">Monthly</div>
                            <div class="font-semibold text-signal">3-Pay Option</div>
                        </div>
                    </div>

                    <!-- Value Proposition -->
                    <div class="text-center mb-8">
                        <p class="text-lg text-[hsl(var(--ssos-alabaster))] leading-relaxed">
                            If all Sacred Signal OS did was give you a clear message and a steady, values-aligned pipeline, would it be worth $1,597?
                        </p>
                    </div>

                    <!-- Apply Button -->
                    <div class="text-center mb-8">
                        <a 
                            href="<?php echo esc_url(home_url('/application/')); ?>" 
                            class="bg-signal text-background hover:bg-signal/90 font-body font-semibold px-12 py-4 text-lg rounded-xl button-lift inline-block transition-all duration-300"
                        >
                            Apply Now for Sacred Signal OS
                        </a>
                    </div>

                    <!-- Review Time -->
                    <div class="text-center">
                        <p class="text-sm text-[hsl(var(--ssos-alabaster))] opacity-80">
                            Applications Reviewed Within 48 Hours
                        </p>
                    </div>
                </div>

                <!-- What Happens Next -->
                <div class="mt-16 fade-up">
                    <h3 class="heading-ritual text-2xl md:text-3xl mb-8 text-center glow-text text-signal">
                        WHAT HAPPENS NEXT:
                    </h3>
                    
                    <div class="space-y-6">
                        <div class="flex items-start gap-4">
                            <div class="w-8 h-8 bg-signal text-background rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">1</div>
                            <div>
                                <h4 class="font-semibold text-brass mb-1">Complete Application & Values Alignment Assessment</h4>
                            </div>
                        </div>
                        
                        <div class="flex items-start gap-4">
                            <div class="w-8 h-8 bg-signal text-background rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">2</div>
                            <div>
                                <h4 class="font-semibold text-brass mb-1">Brief Discovery Call To Ensure Mutual Fit</h4>
                            </div>
                        </div>
                        
                        <div class="flex items-start gap-4">
                            <div class="w-8 h-8 bg-signal text-background rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">3</div>
                            <div>
                                <h4 class="font-semibold text-brass mb-1">Receive Program Intake Materials</h4>
                            </div>
                        </div>
                        
                        <div class="flex items-start gap-4">
                            <div class="w-8 h-8 bg-signal text-background rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">4</div>
                            <div>
                                <h4 class="font-semibold text-brass mb-1">Begin Your 12-Week Transformation</h4>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- What People Are Saying -->
                <div class="mt-16 fade-up">
                    <h3 class="heading-ritual text-2xl md:text-3xl mb-12 text-center glow-text text-signal">
                        WHAT PEOPLE ARE SAYING
                    </h3>
                    
                    <div class="grid md:grid-cols-3 gap-8">
                        <!-- Marissa Fontana -->
                        <div class="bg-gradient-to-br from-background/90 via-background/95 to-background/90 backdrop-blur-sm border border-signal/20 rounded-xl p-6">
                            <div class="flex items-center gap-4 mb-4">
                                <img 
                                    src="<?php echo get_template_directory_uri(); ?>/assets/images/testimonials/marissa-fontana.jpg" 
                                    alt="Marissa Fontana" 
                                    class="w-12 h-12 rounded-full object-cover border-2 border-brass/30"
                                />
                                <div>
                                    <div class="font-semibold text-brass">Marissa Fontana</div>
                                    <div class="text-sm text-[hsl(var(--ssos-alabaster))] opacity-80">Spiritual Business Coach</div>
                                </div>
                                <svg viewBox="0 0 100 100" class="w-6 h-6 text-brass/60 ml-auto">
                                    <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" stroke-width="1.5"/>
                                    <circle cx="50" cy="50" r="3" fill="currentColor"/>
                                </svg>
                            </div>
                            <p class="text-[hsl(var(--ssos-alabaster))] text-sm leading-relaxed">
                                "Working with Barack completely transformed how I show up in my business. The Sacred Signal OS gave me the clarity and confidence to charge premium rates while staying true to my spiritual values."
                            </p>
                        </div>

                        <!-- Leora Leon -->
                        <div class="bg-gradient-to-br from-background/90 via-background/95 to-background/90 backdrop-blur-sm border border-signal/20 rounded-xl p-6">
                            <div class="flex items-center gap-4 mb-4">
                                <img 
                                    src="<?php echo get_template_directory_uri(); ?>/assets/images/testimonials/leora-leon.jpg" 
                                    alt="Leora Leon" 
                                    class="w-12 h-12 rounded-full object-cover border-2 border-brass/30"
                                />
                                <div>
                                    <div class="font-semibold text-brass">Leora Leon</div>
                                    <div class="text-sm text-[hsl(var(--ssos-alabaster))] opacity-80">Intuitive Business Strategist</div>
                                </div>
                                <svg viewBox="0 0 100 100" class="w-6 h-6 text-brass/60 ml-auto">
                                    <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" stroke-width="1.5"/>
                                    <circle cx="50" cy="50" r="3" fill="currentColor"/>
                                </svg>
                            </div>
                            <p class="text-[hsl(var(--ssos-alabaster))] text-sm leading-relaxed">
                                "The system Barack created isn't just about marketing—it's about aligning your entire business with your soul's purpose. My revenue tripled while working half the hours."
                            </p>
                        </div>

                        <!-- Dr. Susie Colles -->
                        <div class="bg-gradient-to-br from-background/90 via-background/95 to-background/90 backdrop-blur-sm border border-signal/20 rounded-xl p-6">
                            <div class="flex items-center gap-4 mb-4">
                                <img 
                                    src="<?php echo get_template_directory_uri(); ?>/assets/images/testimonials/susie-colles.jpg" 
                                    alt="Dr. Susie Colles" 
                                    class="w-12 h-12 rounded-full object-cover border-2 border-brass/30"
                                />
                                <div>
                                    <div class="font-semibold text-brass">Dr. Susie Colles</div>
                                    <div class="text-sm text-[hsl(var(--ssos-alabaster))] opacity-80">Transformational Coach</div>
                                </div>
                                <svg viewBox="0 0 100 100" class="w-6 h-6 text-brass/60 ml-auto">
                                    <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" stroke-width="1.5"/>
                                    <circle cx="50" cy="50" r="3" fill="currentColor"/>
                                </svg>
                            </div>
                            <p class="text-[hsl(var(--ssos-alabaster))] text-sm leading-relaxed">
                                "Barack's approach bridges the gap between spiritual integrity and business success like nothing I've experienced. The Sacred Signal OS is a complete game-changer."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Final CTA Section -->
        <div class="text-center animate-on-scroll">
            <h2 class="text-3xl md:text-5xl font-light text-foreground mb-12 leading-tight max-w-4xl mx-auto">
                Your Voice Deserves To Cut Through Noise And Carry With Power
            </h2>
            
            <!-- Signal Line Divider -->
            <div class="flex items-center justify-center mb-12">
                <div class="flex-1 h-px bg-gradient-to-r from-transparent via-brass/30 to-brass/60"></div>
                <div class="mx-8 relative">
                    <svg viewBox="0 0 120 120" class="w-12 h-12 text-brass drop-shadow-lg">
                        <polygon points="60,10 90,30 90,60 60,80 30,60 30,30" fill="none" stroke="currentColor" stroke-width="2"/>
                        <polygon points="60,25 75,35 75,55 60,65 45,55 45,35" fill="none" stroke="currentColor" stroke-width="1"/>
                        <circle cx="60" cy="60" r="8" fill="currentColor"/>
                        <path d="M30,30 L90,90 M90,30 L30,90" stroke="currentColor" stroke-width="1" opacity="0.5"/>
                    </svg>
                </div>
                <div class="flex-1 h-px bg-gradient-to-l from-transparent via-brass/30 to-brass/60"></div>
            </div>
            
            <a 
                href="<?php echo esc_url(home_url('/application/')); ?>" 
                class="cinema-button inline-block text-xl py-4 px-12 rounded-full transition-all duration-300 transform hover:scale-105"
            >
                Begin Your Transformation
            </a>
        </div>
    </div>
</section>

<?php get_footer(); ?>