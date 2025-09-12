<?php
/**
 * Template for Application Page
 * 
 * @package Sacred_Signal_OS
 */

get_header(); ?>

<div class="min-h-screen bg-gradient-to-b from-background via-background/95 to-background pt-24">
    <div class="container mx-auto px-6">
        <div class="grid lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
            
            <!-- Left Column - Video & Testimonial -->
            <div class="space-y-8 animate-on-scroll">
                <!-- Video Section -->
                <div class="cinema-video-container">
                    <?php 
                    $application_video = get_post_meta(get_the_ID(), '_application_video', true);
                    if ($application_video) : ?>
                        <video class="w-full h-auto" poster="<?php echo get_template_directory_uri(); ?>/assets/images/cinema/application-video-poster.jpg">
                            <source src="<?php echo esc_url($application_video); ?>" type="video/mp4">
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
                                <h3 class="text-2xl mb-4"><?php _e('Sacred Signal Revealed', 'sacred-signal-os'); ?></h3>
                                <p class="text-sm opacity-80"><?php _e('Discover the power within your message', 'sacred-signal-os'); ?></p>
                            </div>
                        </div>
                    <?php endif; ?>
                </div>

                <!-- Testimonial Card -->
                <div class="testimonial-card cinema-testimonial-frame w-full h-auto p-6">
                    <?php 
                    $featured_testimonial = sacred_signal_os_get_testimonials(1);
                    if (!empty($featured_testimonial)) :
                        $testimonial = $featured_testimonial[0]; ?>
                        <div class="testimonial-quote text-lg mb-6">
                            "<?php echo wp_trim_words($testimonial->post_content, 25); ?>"
                        </div>
                        <div class="testimonial-author">
                            <?php if (has_post_thumbnail($testimonial->ID)) : ?>
                                <div class="testimonial-avatar">
                                    <img src="<?php echo get_the_post_thumbnail_url($testimonial->ID, 'testimonial-image'); ?>" alt="<?php echo esc_attr($testimonial->post_title); ?>">
                                </div>
                            <?php endif; ?>
                            <div class="testimonial-info">
                                <h4 class="font-semibold"><?php echo esc_html($testimonial->post_title); ?></h4>
                                <p class="text-muted-foreground"><?php echo esc_html(get_post_meta($testimonial->ID, '_testimonial_title', true)); ?></p>
                            </div>
                        </div>
                    <?php else : ?>
                        <div class="testimonial-quote text-lg mb-6">
                            "The Sacred Signal OS didn't just change my business—it transformed my entire relationship with my purpose and my people."
                        </div>
                        <div class="testimonial-author">
                            <div class="testimonial-avatar">
                                <img src="<?php echo get_template_directory_uri(); ?>/assets/images/testimonials/default-avatar.jpg" alt="Client Testimonial">
                            </div>
                            <div class="testimonial-info">
                                <h4 class="font-semibold">Sarah M.</h4>
                                <p class="text-muted-foreground">Transformation Coach</p>
                            </div>
                        </div>
                    <?php endif; ?>
                </div>
            </div>

            <!-- Right Column - Application Form -->
            <div class="animate-on-scroll">
                <div class="application-form">
                    <div class="text-center mb-8">
                        <h1 class="heading-ritual text-3xl md:text-4xl mb-4 text-foreground">
                            <?php echo get_post_meta(get_the_ID(), '_form_title', true) ?: __('Begin Your Sacred Signal Journey', 'sacred-signal-os'); ?>
                        </h1>
                        <p class="body-premium text-muted-foreground">
                            <?php echo get_post_meta(get_the_ID(), '_form_description', true) ?: __('Take the first step toward transforming your message into magnetic authority.', 'sacred-signal-os'); ?>
                        </p>
                    </div>

                    <form id="application-form" method="post" action="<?php echo admin_url('admin-ajax.php'); ?>">
                        <?php wp_nonce_field('sacred_signal_nonce', 'nonce'); ?>
                        <input type="hidden" name="action" value="submit_application">
                        
                        <div class="form-group">
                            <label for="name" class="form-label">
                                <?php _e('Full Name', 'sacred-signal-os'); ?> <span class="text-destructive">*</span>
                            </label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                class="form-input" 
                                required
                                placeholder="<?php _e('Enter your full name', 'sacred-signal-os'); ?>"
                            >
                        </div>

                        <div class="form-group">
                            <label for="email" class="form-label">
                                <?php _e('Email Address', 'sacred-signal-os'); ?> <span class="text-destructive">*</span>
                            </label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                class="form-input" 
                                required
                                placeholder="<?php _e('Enter your email address', 'sacred-signal-os'); ?>"
                            >
                        </div>

                        <div class="form-group">
                            <label for="phone" class="form-label">
                                <?php _e('Phone Number', 'sacred-signal-os'); ?>
                            </label>
                            <input 
                                type="tel" 
                                id="phone" 
                                name="phone" 
                                class="form-input" 
                                placeholder="<?php _e('Enter your phone number', 'sacred-signal-os'); ?>"
                            >
                        </div>

                        <div class="form-group">
                            <label for="business" class="form-label">
                                <?php _e('Business/Industry', 'sacred-signal-os'); ?>
                            </label>
                            <input 
                                type="text" 
                                id="business" 
                                name="business" 
                                class="form-input" 
                                placeholder="<?php _e('What type of business or industry are you in?', 'sacred-signal-os'); ?>"
                            >
                        </div>

                        <div class="form-group">
                            <label for="current_challenge" class="form-label">
                                <?php _e('What\'s your biggest challenge right now?', 'sacred-signal-os'); ?>
                            </label>
                            <textarea 
                                id="current_challenge" 
                                name="current_challenge" 
                                class="form-textarea" 
                                rows="4"
                                placeholder="<?php _e('Describe your current biggest challenge in attracting and converting your ideal clients...', 'sacred-signal-os'); ?>"
                            ></textarea>
                        </div>

                        <div class="form-group">
                            <label for="transformation_goal" class="form-label">
                                <?php _e('What transformation are you seeking?', 'sacred-signal-os'); ?>
                            </label>
                            <textarea 
                                id="transformation_goal" 
                                name="transformation_goal" 
                                class="form-textarea" 
                                rows="4"
                                placeholder="<?php _e('What would success look like for you after completing this program?', 'sacred-signal-os'); ?>"
                            ></textarea>
                        </div>

                        <div class="form-group">
                            <label class="flex items-start space-x-3">
                                <input 
                                    type="checkbox" 
                                    name="terms_agreed" 
                                    required
                                    class="mt-1"
                                >
                                <span class="text-sm text-muted-foreground">
                                    <?php _e('I agree to the terms and conditions and understand this is an application for consideration into the Sacred Signal OS Program.', 'sacred-signal-os'); ?>
                                </span>
                            </label>
                        </div>

                        <button 
                            type="submit" 
                            class="cinema-button w-full py-4 text-lg font-semibold"
                        >
                            <?php _e('SUBMIT APPLICATION', 'sacred-signal-os'); ?>
                        </button>

                        <p class="text-xs text-center text-muted-foreground mt-4">
                            <?php _e('Your information is secure and will never be shared. We respect your privacy.', 'sacred-signal-os'); ?>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

<?php get_footer(); ?>