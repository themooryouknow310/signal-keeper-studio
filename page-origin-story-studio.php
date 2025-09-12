<?php
/**
 * Template for Origin Story Studio Page
 * 
 * @package Sacred_Signal_OS
 */

get_header(); ?>

<div class="min-h-screen bg-gradient-to-b from-background via-background/95 to-background">
    
    <!-- Hero Section -->
    <section class="relative pt-24 pb-16 cinema-surface-with-grain cinema-grain">
        <div class="container mx-auto px-6">
            <div class="max-w-4xl mx-auto text-center animate-on-scroll">
                <div class="mb-8">
                    <div class="w-24 h-24 bg-signal/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg class="w-12 h-12 text-signal" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                    </div>
                    <h1 class="heading-ritual text-4xl md:text-6xl lg:text-7xl mb-8 leading-none glow-text">
                        <?php echo get_post_meta(get_the_ID(), '_hero_title', true) ?: __('Origin Story Studio', 'sacred-signal-os'); ?>
                    </h1>
                    <p class="body-premium text-2xl md:text-3xl text-foreground leading-relaxed font-light cinema-text-shadow">
                        <?php echo get_post_meta(get_the_ID(), '_hero_subtitle', true) ?: __('Craft the foundation of your Sacred Signal with a compelling origin story that builds instant trust and authentic connection.', 'sacred-signal-os'); ?>
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- What You'll Discover Section -->
    <section class="py-16 bg-card">
        <div class="container mx-auto px-6">
            <div class="max-w-4xl mx-auto">
                <div class="text-center mb-12 animate-on-scroll">
                    <h2 class="heading-ritual text-3xl md:text-4xl mb-6 text-foreground">
                        <?php _e('What You\'ll Discover', 'sacred-signal-os'); ?>
                    </h2>
                    <p class="body-premium text-xl text-muted-foreground">
                        <?php _e('Transform your life experiences into a magnetic story that calls your people home.', 'sacred-signal-os'); ?>
                    </p>
                </div>

                <div class="grid md:grid-cols-2 gap-8 stagger-children">
                    <?php 
                    $discoveries = array(
                        array(
                            'icon' => 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z',
                            'title' => 'Your Sacred Wound',
                            'description' => 'Identify the pivotal moment that became your greatest source of wisdom and transformation.'
                        ),
                        array(
                            'icon' => 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
                            'title' => 'The Breakthrough',
                            'description' => 'Uncover the insight or realization that shifted everything for you and can do the same for others.'
                        ),
                        array(
                            'icon' => 'M13 10V3L4 14h7v7l9-11h-7z',
                            'title' => 'Your Unique Method',
                            'description' => 'Discover the specific approach you developed that sets you apart from everyone else in your field.'
                        ),
                        array(
                            'icon' => 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
                            'title' => 'Your Mission',
                            'description' => 'Clarify the deeper purpose that drives your work and resonates with your ideal clients.'
                        )
                    );
                    
                    foreach ($discoveries as $discovery) : ?>
                        <div class="flex items-start space-x-4 p-6 bg-background rounded-lg border border-border animate-on-scroll">
                            <div class="w-10 h-10 bg-signal/10 rounded-full flex items-center justify-center flex-shrink-0">
                                <svg class="w-5 h-5 text-signal" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="<?php echo $discovery['icon']; ?>"/>
                                </svg>
                            </div>
                            <div>
                                <h3 class="text-lg font-semibold text-foreground mb-2">
                                    <?php echo esc_html($discovery['title']); ?>
                                </h3>
                                <p class="text-muted-foreground">
                                    <?php echo esc_html($discovery['description']); ?>
                                </p>
                            </div>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>
    </section>

    <!-- How It Works Section -->
    <section class="py-16 bg-background">
        <div class="container mx-auto px-6">
            <div class="max-w-4xl mx-auto">
                <div class="text-center mb-12 animate-on-scroll">
                    <h2 class="heading-ritual text-3xl md:text-4xl mb-6 text-foreground">
                        <?php _e('How It Works', 'sacred-signal-os'); ?>
                    </h2>
                    <p class="body-premium text-xl text-muted-foreground">
                        <?php _e('A simple, guided process that takes you from scattered experiences to compelling narrative.', 'sacred-signal-os'); ?>
                    </p>
                </div>

                <div class="space-y-8 stagger-children">
                    <?php 
                    $steps = array(
                        array(
                            'number' => '01',
                            'title' => 'Life Mapping',
                            'description' => 'We\'ll guide you through identifying the key moments, challenges, and breakthroughs that shaped your journey.'
                        ),
                        array(
                            'number' => '02',
                            'title' => 'Pattern Recognition',
                            'description' => 'Discover the common threads and themes that connect your experiences into a coherent narrative.'
                        ),
                        array(
                            'number' => '03',
                            'title' => 'Story Architecture',
                            'description' => 'Learn the proven structure that turns your experiences into a compelling, trust-building story.'
                        ),
                        array(
                            'number' => '04',
                            'title' => 'Message Integration',
                            'description' => 'Connect your origin story to your current mission and the transformation you offer clients.'
                        ),
                        array(
                            'number' => '05',
                            'title' => 'Refinement Process',
                            'description' => 'Polish your story for maximum impact across all your marketing and communication channels.'
                        ),
                        array(
                            'number' => '06',
                            'title' => 'Implementation Guide',
                            'description' => 'Get specific strategies for weaving your origin story into your content, sales conversations, and presentations.'
                        ),
                        array(
                            'number' => '07',
                            'title' => 'Mastery Integration',
                            'description' => 'Advanced techniques for adapting your story for different audiences, platforms, and situations.'
                        )
                    );
                    
                    foreach ($steps as $index => $step) : ?>
                        <div class="flex items-start space-x-6 animate-on-scroll">
                            <div class="w-16 h-16 bg-signal/10 rounded-full flex items-center justify-center flex-shrink-0">
                                <span class="text-xl font-bold text-signal"><?php echo $step['number']; ?></span>
                            </div>
                            <div class="pt-2">
                                <h3 class="text-xl font-semibold text-foreground mb-2">
                                    <?php echo esc_html($step['title']); ?>
                                </h3>
                                <p class="text-muted-foreground">
                                    <?php echo esc_html($step['description']); ?>
                                </p>
                            </div>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-signal text-signal-foreground">
        <div class="container mx-auto px-6">
            <div class="max-w-2xl mx-auto text-center animate-on-scroll">
                <h3 class="heading-ritual text-3xl md:text-4xl mb-8">
                    <?php _e('Access Your Free', 'sacred-signal-os'); ?> 
                    <span class="text-white"><?php _e('Origin Story Studio', 'sacred-signal-os'); ?></span>
                </h3>
                <p class="text-center text-signal-foreground/80 body-premium mb-8">
                    <?php _e('Get instant access to the interactive web application that will guide you through creating your complete origin story in 7 simple steps.', 'sacred-signal-os'); ?>
                </p>
                
                <form id="origin-story-form" class="max-w-md mx-auto space-y-4">
                    <?php wp_nonce_field('origin_story_nonce', 'nonce'); ?>
                    
                    <div>
                        <input 
                            type="text" 
                            name="name" 
                            placeholder="<?php _e('Your Name', 'sacred-signal-os'); ?>" 
                            class="w-full px-4 py-3 rounded-lg text-foreground bg-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50" 
                            required
                        />
                    </div>
                    
                    <div>
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="<?php _e('Your Email Address', 'sacred-signal-os'); ?>" 
                            class="w-full px-4 py-3 rounded-lg text-foreground bg-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50" 
                            required
                        />
                    </div>
                    
                    <button 
                        type="submit" 
                        class="w-full bg-white text-signal py-3 px-6 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
                    >
                        <?php _e('GET INSTANT ACCESS', 'sacred-signal-os'); ?>
                    </button>
                </form>
                
                <p class="text-xs text-signal-foreground/70 mt-4">
                    <?php _e('No spam, ever. Your information is safe and will never be shared.', 'sacred-signal-os'); ?>
                </p>
            </div>
        </div>
    </section>
</div>

<script>
document.getElementById('origin-story-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const name = formData.get('name');
    const email = formData.get('email');
    
    // Simple validation
    if (!name || !email) {
        alert('Please fill in all fields.');
        return;
    }
    
    // Simulate form submission (replace with actual AJAX call)
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = 'Processing...';
    submitBtn.disabled = true;
    
    // Simulate processing time
    setTimeout(function() {
        // Redirect to thank you page
        window.location.href = '<?php echo esc_url(home_url('/origin-story-thank-you/')); ?>';
    }, 1000);
});
</script>

<?php get_footer(); ?>