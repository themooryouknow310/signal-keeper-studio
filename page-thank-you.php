<?php
/**
 * Template for Thank You page
 * 
 * @package Sacred_Signal_OS
 */

get_header(); ?>

<main id="primary" class="site-main">
    <div class="thank-you-page">
        
        <!-- Hero Section -->
        <section class="hero-section min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/30 to-signal/10">
            <div class="container mx-auto px-6">
                <div class="text-center max-w-4xl mx-auto">
                    
                    <!-- Success Icon -->
                    <div class="w-24 h-24 bg-signal/20 rounded-full flex items-center justify-center mx-auto mb-8">
                        <svg class="w-12 h-12 text-signal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                        </svg>
                    </div>
                    
                    <h1 class="heading-ritual text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-foreground">
                        <?php echo get_field('thank_you_title') ?: 'Welcome to Sacred Signal OS!'; ?>
                    </h1>
                    
                    <p class="body-premium text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
                        <?php echo get_field('thank_you_message') ?: 'Your journey to crystal-clear messaging and authentic business growth begins now. Check your email for immediate access to your program materials.'; ?>
                    </p>
                    
                    <!-- Next Steps -->
                    <div class="grid md:grid-cols-3 gap-8 mt-16">
                        <div class="card p-6 text-center">
                            <div class="w-16 h-16 bg-signal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span class="text-signal text-2xl font-bold">1</span>
                            </div>
                            <h3 class="heading-ritual text-xl font-bold mb-3 text-foreground">Check Your Email</h3>
                            <p class="body-premium text-muted-foreground">
                                Your welcome email with login details and program materials is on its way.
                            </p>
                        </div>
                        
                        <div class="card p-6 text-center">
                            <div class="w-16 h-16 bg-signal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span class="text-signal text-2xl font-bold">2</span>
                            </div>
                            <h3 class="heading-ritual text-xl font-bold mb-3 text-foreground">Join the Community</h3>
                            <p class="body-premium text-muted-foreground">
                                Connect with fellow entrepreneurs in our private community space.
                            </p>
                        </div>
                        
                        <div class="card p-6 text-center">
                            <div class="w-16 h-16 bg-signal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span class="text-signal text-2xl font-bold">3</span>
                            </div>
                            <h3 class="heading-ritual text-xl font-bold mb-3 text-foreground">Start Module 1</h3>
                            <p class="body-premium text-muted-foreground">
                                Begin your transformation with the foundation module available immediately.
                            </p>
                        </div>
                    </div>
                    
                    <!-- CTA Buttons -->
                    <div class="flex flex-col md:flex-row gap-6 justify-center items-center mt-12">
                        <a href="<?php echo get_field('member_portal_url') ?: '#'; ?>" class="btn-signal inline-flex items-center px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105">
                            <?php _e('Access Member Portal', 'sacred-signal-os'); ?>
                        </a>
                        <a href="<?php echo get_field('community_url') ?: '#'; ?>" class="btn-secondary inline-flex items-center px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105">
                            <?php _e('Join Community', 'sacred-signal-os'); ?>
                        </a>
                    </div>
                    
                </div>
            </div>
        </section>

        <!-- Program Overview -->
        <section class="py-20 bg-card">
            <div class="container mx-auto px-6">
                <div class="max-w-4xl mx-auto">
                    <div class="text-center mb-16">
                        <h2 class="heading-ritual text-4xl md:text-5xl font-bold mb-6 text-foreground">
                            <?php _e('What Happens Next?', 'sacred-signal-os'); ?>
                        </h2>
                        <p class="body-premium text-xl text-muted-foreground">
                            <?php _e('Your complete transformation timeline and support system.', 'sacred-signal-os'); ?>
                        </p>
                    </div>
                    
                    <div class="space-y-8">
                        <?php if (have_rows('timeline_items')): ?>
                            <?php while (have_rows('timeline_items')): the_row(); ?>
                                <div class="flex items-start space-x-6 p-6 bg-background rounded-lg border border-border">
                                    <div class="flex-shrink-0 w-12 h-12 bg-signal/10 rounded-full flex items-center justify-center">
                                        <span class="text-signal font-bold"><?php echo get_row_index(); ?></span>
                                    </div>
                                    <div>
                                        <h3 class="heading-ritual text-xl font-bold mb-2 text-foreground">
                                            <?php echo get_sub_field('timeline_title'); ?>
                                        </h3>
                                        <p class="body-premium text-muted-foreground mb-2">
                                            <?php echo get_sub_field('timeline_description'); ?>
                                        </p>
                                        <span class="text-sm text-signal font-medium">
                                            <?php echo get_sub_field('timeline_timing'); ?>
                                        </span>
                                    </div>
                                </div>
                            <?php endwhile; ?>
                        <?php else: ?>
                            <!-- Default timeline -->
                            <div class="flex items-start space-x-6 p-6 bg-background rounded-lg border border-border">
                                <div class="flex-shrink-0 w-12 h-12 bg-signal/10 rounded-full flex items-center justify-center">
                                    <span class="text-signal font-bold">1</span>
                                </div>
                                <div>
                                    <h3 class="heading-ritual text-xl font-bold mb-2 text-foreground">Immediate Access</h3>
                                    <p class="body-premium text-muted-foreground mb-2">
                                        Login credentials and Module 1 materials delivered to your inbox within 5 minutes.
                                    </p>
                                    <span class="text-sm text-signal font-medium">Within 5 minutes</span>
                                </div>
                            </div>
                        <?php endif; ?>
                    </div>
                </div>
            </div>
        </section>

        <!-- Support Section -->
        <section class="py-20 bg-background">
            <div class="container mx-auto px-6">
                <div class="max-w-2xl mx-auto text-center">
                    <h2 class="heading-ritual text-3xl md:text-4xl font-bold mb-6 text-foreground">
                        <?php _e('Need Help Getting Started?', 'sacred-signal-os'); ?>
                    </h2>
                    <p class="body-premium text-lg text-muted-foreground mb-8">
                        <?php _e('Our support team is here to ensure your success every step of the way.', 'sacred-signal-os'); ?>
                    </p>
                    
                    <div class="flex flex-col md:flex-row gap-4 justify-center">
                        <a href="mailto:<?php echo get_field('support_email') ?: 'support@sacredsignalos.com'; ?>" class="btn-secondary inline-flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-300">
                            <?php _e('Email Support', 'sacred-signal-os'); ?>
                        </a>
                        <?php if (get_field('support_phone')): ?>
                            <a href="tel:<?php echo get_field('support_phone'); ?>" class="btn-secondary inline-flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-300">
                                <?php _e('Call Support', 'sacred-signal-os'); ?>
                            </a>
                        <?php endif; ?>
                    </div>
                </div>
            </div>
        </section>

    </div>
</main>

<?php get_footer(); ?>