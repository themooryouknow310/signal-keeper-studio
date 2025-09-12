<?php
/**
 * Template for Dream Client Sprint page
 * 
 * @package Sacred_Signal_OS
 */

get_header(); ?>

<main id="primary" class="site-main">
    <div class="dream-client-sprint-page">
        
        <!-- Hero Section -->
        <section class="hero-section relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted">
            <div class="absolute inset-0 bg-[url('<?php echo get_template_directory_uri(); ?>/assets/cinema/hero-sacred-signals.jpg')] bg-cover bg-center opacity-10"></div>
            
            <div class="container mx-auto px-6 relative z-10">
                <div class="text-center max-w-4xl mx-auto">
                    <h1 class="heading-ritual text-6xl md:text-7xl lg:text-8xl font-bold mb-8 text-foreground">
                        <?php echo get_field('hero_title') ?: 'Dream Client Sprint'; ?>
                    </h1>
                    <p class="body-premium text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
                        <?php echo get_field('hero_subtitle') ?: 'A focused 3-day intensive to identify, attract, and convert your ideal clients with precision and authenticity.'; ?>
                    </p>
                    
                    <div class="flex flex-col md:flex-row gap-6 justify-center items-center">
                        <a href="#program-details" class="btn-primary inline-flex items-center px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105">
                            <?php _e('Learn More', 'sacred-signal-os'); ?>
                        </a>
                        <a href="#apply" class="btn-signal inline-flex items-center px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105">
                            <?php _e('Apply Now', 'sacred-signal-os'); ?>
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <!-- Program Overview -->
        <section id="program-details" class="py-20 bg-card">
            <div class="container mx-auto px-6">
                <div class="text-center mb-16">
                    <h2 class="heading-ritual text-4xl md:text-5xl font-bold mb-6 text-foreground">
                        <?php echo get_field('program_title') ?: 'Sprint Overview'; ?>
                    </h2>
                    <p class="body-premium text-xl text-muted-foreground max-w-3xl mx-auto">
                        <?php echo get_field('program_description') ?: 'Three intensive days designed to crystallize your client attraction strategy and create a sustainable growth system.'; ?>
                    </p>
                </div>

                <div class="grid md:grid-cols-3 gap-8">
                    <?php if (have_rows('sprint_days')): ?>
                        <?php while (have_rows('sprint_days')): the_row(); ?>
                            <div class="card p-8 text-center hover:shadow-lg transition-all duration-300">
                                <div class="w-16 h-16 bg-signal/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <span class="text-signal text-2xl font-bold"><?php echo get_row_index(); ?></span>
                                </div>
                                <h3 class="heading-ritual text-2xl font-bold mb-4 text-foreground">
                                    <?php echo get_sub_field('day_title'); ?>
                                </h3>
                                <p class="body-premium text-muted-foreground mb-6">
                                    <?php echo get_sub_field('day_description'); ?>
                                </p>
                                <ul class="text-left space-y-2">
                                    <?php if (have_rows('day_outcomes')): ?>
                                        <?php while (have_rows('day_outcomes')): the_row(); ?>
                                            <li class="flex items-start space-x-3">
                                                <span class="text-signal mt-1">•</span>
                                                <span class="body-premium text-muted-foreground"><?php echo get_sub_field('outcome'); ?></span>
                                            </li>
                                        <?php endwhile; ?>
                                    <?php endif; ?>
                                </ul>
                            </div>
                        <?php endwhile; ?>
                    <?php else: ?>
                        <!-- Default content if no custom fields -->
                        <div class="card p-8 text-center">
                            <div class="w-16 h-16 bg-signal/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span class="text-signal text-2xl font-bold">1</span>
                            </div>
                            <h3 class="heading-ritual text-2xl font-bold mb-4 text-foreground">Day 1: Clarity</h3>
                            <p class="body-premium text-muted-foreground">Define your dream client with precision and create your magnetic message.</p>
                        </div>
                        <div class="card p-8 text-center">
                            <div class="w-16 h-16 bg-signal/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span class="text-signal text-2xl font-bold">2</span>
                            </div>
                            <h3 class="heading-ritual text-2xl font-bold mb-4 text-foreground">Day 2: Strategy</h3>
                            <p class="body-premium text-muted-foreground">Build your client attraction system and content framework.</p>
                        </div>
                        <div class="card p-8 text-center">
                            <div class="w-16 h-16 bg-signal/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span class="text-signal text-2xl font-bold">3</span>
                            </div>
                            <h3 class="heading-ritual text-2xl font-bold mb-4 text-foreground">Day 3: Implementation</h3>
                            <p class="body-premium text-muted-foreground">Launch your system and create sustainable growth processes.</p>
                        </div>
                    <?php endif; ?>
                </div>
            </div>
        </section>

        <!-- Application Section -->
        <section id="apply" class="py-20 bg-background">
            <div class="container mx-auto px-6">
                <div class="max-w-2xl mx-auto text-center">
                    <h2 class="heading-ritual text-4xl md:text-5xl font-bold mb-6 text-foreground">
                        <?php _e('Ready to Sprint?', 'sacred-signal-os'); ?>
                    </h2>
                    <p class="body-premium text-xl text-muted-foreground mb-12">
                        <?php _e('Limited spots available. Apply now to secure your place in the next Dream Client Sprint.', 'sacred-signal-os'); ?>
                    </p>
                    
                    <a href="<?php echo esc_url(home_url('/application/')); ?>" class="btn-signal inline-flex items-center px-12 py-4 rounded-full text-xl font-semibold transition-all duration-300 hover:scale-105">
                        <?php _e('Apply Now', 'sacred-signal-os'); ?>
                    </a>
                </div>
            </div>
        </section>

    </div>
</main>

<?php get_footer(); ?>