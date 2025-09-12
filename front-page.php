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
                    <div class="cinema-testimonial-frame flex-shrink-0">
                        <img 
                            src="<?php echo get_template_directory_uri(); ?>/assets/images/sacred-geometry-icon.png" 
                            alt="Clear resonant message" 
                            class="w-full h-full object-cover"
                        />
                    </div>
                    <div>
                        <p class="text-lg text-foreground">Your message is so clear and resonant that your ideal clients instantly know they're in the right place.</p>
                    </div>
                </div>
                
                <div class="flex items-start gap-6 animate-on-scroll">
                    <div class="cinema-testimonial-frame flex-shrink-0">
                        <img 
                            src="<?php echo get_template_directory_uri(); ?>/assets/images/sacred-geometry-icon.png" 
                            alt="Compelling offer" 
                            class="w-full h-full object-cover"
                        />
                    </div>
                    <div>
                        <p class="text-lg text-foreground">Your offer is so compelling that it feels like an answer to their prayers.</p>
                    </div>
                </div>
                
                <div class="flex items-start gap-6 animate-on-scroll">
                    <div class="cinema-testimonial-frame flex-shrink-0">
                        <img 
                            src="<?php echo get_template_directory_uri(); ?>/assets/images/sacred-geometry-icon.png" 
                            alt="Sustainable content system" 
                            class="w-full h-full object-cover"
                        />
                    </div>
                    <div>
                        <p class="text-lg text-foreground">Your content system is so sustainable that you can create a month's worth of high-impact content in a single day.</p>
                    </div>
                </div>
                
                <div class="flex items-start gap-6 animate-on-scroll">
                    <div class="cinema-testimonial-frame flex-shrink-0">
                        <img 
                            src="<?php echo get_template_directory_uri(); ?>/assets/images/sacred-geometry-icon.png" 
                            alt="Authentic sales process" 
                            class="w-full h-full object-cover"
                        />
                    </div>
                    <div>
                        <p class="text-lg text-foreground">Your sales process is so authentic that it feels like a natural extension of your spiritual work.</p>
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
<section id="program" class="py-20 bg-card">
    <div class="container">
        <div class="text-center mb-16 animate-on-scroll">
            <h2 class="heading-ritual text-4xl md:text-6xl mb-8 text-foreground">
                <?php echo get_theme_mod('program_title', 'THE SACRED SIGNAL MASTERY PROGRAM'); ?>
            </h2>
            <p class="body-premium text-xl text-muted-foreground max-w-3xl mx-auto">
                <?php echo get_theme_mod('program_description', 'A 12-week intensive transformation for visionary leaders ready to build their sacred signal and magnetize their dream clients through authentic authority.'); ?>
            </p>
        </div>

        <div class="program-modules stagger-children">
            <?php
            $modules = sacred_signal_os_get_program_modules(6);
            if (!empty($modules)) :
                foreach ($modules as $module) : ?>
                    <div class="program-module animate-on-scroll">
                        <div class="program-module-icon">
                            <?php if (has_post_thumbnail($module->ID)) : ?>
                                <img src="<?php echo get_the_post_thumbnail_url($module->ID, 'thumbnail'); ?>" alt="<?php echo esc_attr($module->post_title); ?>" class="w-8 h-8">
                            <?php else : ?>
                                <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                </svg>
                            <?php endif; ?>
                        </div>
                        <h3><?php echo esc_html($module->post_title); ?></h3>
                        <p><?php echo wp_trim_words($module->post_content, 20); ?></p>
                    </div>
                <?php endforeach;
            else :
                // Default modules if none exist
                $default_modules = array(
                    array(
                        'title' => 'Signal Clarity',
                        'description' => 'Discover and refine your unique transformational message that cuts through the noise.'
                    ),
                    array(
                        'title' => 'Story Architecture',
                        'description' => 'Master the art of storytelling that builds unshakeable trust and authority.'
                    ),
                    array(
                        'title' => 'Offer Design',
                        'description' => 'Create irresistible offers that align with your sacred mission and values.'
                    ),
                    array(
                        'title' => 'Content Strategy',
                        'description' => 'Build a sustainable content system that nurtures and converts your audience.'
                    ),
                    array(
                        'title' => 'Community Building',
                        'description' => 'Cultivate a devoted tribe that becomes your most powerful marketing force.'
                    ),
                    array(
                        'title' => 'Sacred Sales',
                        'description' => 'Master the art of authentic sales that feels like service, not selling.'
                    )
                );
                
                foreach ($default_modules as $module) : ?>
                    <div class="program-module animate-on-scroll">
                        <div class="program-module-icon">
                            <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                            </svg>
                        </div>
                        <h3><?php echo esc_html($module['title']); ?></h3>
                        <p><?php echo esc_html($module['description']); ?></p>
                    </div>
                <?php endforeach;
            endif; ?>
        </div>
    </div>
</section>

<!-- Founder Section -->
<section id="founder" class="py-20 bg-background cinema-surface-with-grain cinema-grain">
    <div class="container">
        <div class="max-w-6xl mx-auto">
            <div class="text-center mb-16 animate-on-scroll">
                <h2 class="heading-ritual text-3xl md:text-5xl mb-8 text-foreground">
                    <?php echo get_theme_mod('founder_section_title', 'MEET YOUR GUIDE'); ?>
                </h2>
                <p class="body-premium text-xl text-muted-foreground max-w-3xl mx-auto">
                    <?php echo get_theme_mod('founder_section_description', 'The architect behind the Sacred Signal Operating System, dedicated to helping visionary leaders transform their message into magnetic authority.'); ?>
                </p>
            </div>

            <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div class="animate-on-scroll founder-text">
                    <h3 class="text-2xl font-semibold mb-4 text-foreground">
                        <?php echo get_theme_mod('founder_name', 'Barack El'); ?>
                    </h3>
                    <p class="text-lg text-signal mb-6 font-medium">
                        <?php echo get_theme_mod('founder_title', 'Founder & Strategic Architect of Sacred Signal OS'); ?>
                    </p>
                    <div class="body-premium text-muted-foreground space-y-4 mb-8">
                        <?php 
                        $founder_bio = get_theme_mod('founder_bio', 'With over a decade of experience helping transformational leaders build authentic authority, Barack has developed the Sacred Signal Operating System—a revolutionary approach to message clarity and magnetic marketing.');
                        echo wp_kses_post(wpautop($founder_bio));
                        ?>
                    </div>
                    <blockquote class="border-l-4 border-signal pl-6 italic text-lg text-foreground">
                        <?php echo get_theme_mod('founder_quote', '"True wealth comes not from chasing money, but from tuning into your sacred frequency and allowing abundance to flow naturally through your aligned action."'); ?>
                    </blockquote>
                </div>

            <div class="animate-on-scroll founder-media">
                    <div class="cinema-testimonial-frame mx-auto">
                        <img 
                            src="<?php echo get_template_directory_uri(); ?>/assets/images/barack-el-portrait.jpg" 
                            alt="<?php echo esc_attr(get_theme_mod('founder_name', 'Barack El')); ?>" 
                            class="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
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