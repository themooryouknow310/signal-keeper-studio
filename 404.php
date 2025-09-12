<?php
/**
 * The template for displaying 404 pages (not found)
 * 
 * @package Sacred_Signal_OS
 */

get_header(); ?>

<main id="primary" class="site-main">
    <div class="error-404-page">
        
        <section class="hero-section min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/30 to-signal/10">
            <div class="container mx-auto px-6">
                <div class="text-center max-w-3xl mx-auto">
                    
                    <!-- 404 Icon -->
                    <div class="mb-8">
                        <div class="w-32 h-32 bg-signal/10 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg class="w-16 h-16 text-signal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m6-2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                        </div>
                        <h1 class="heading-ritual text-8xl md:text-9xl font-bold text-signal/20 mb-4">404</h1>
                    </div>
                    
                    <h2 class="heading-ritual text-4xl md:text-5xl font-bold mb-6 text-foreground">
                        <?php _e('Signal Not Found', 'sacred-signal-os'); ?>
                    </h2>
                    
                    <p class="body-premium text-xl text-muted-foreground mb-12 leading-relaxed">
                        <?php _e('The page you\'re looking for seems to have lost its signal. Let\'s get you back on track to building your sacred business.', 'sacred-signal-os'); ?>
                    </p>
                    
                    <!-- Search Form -->
                    <div class="max-w-md mx-auto mb-12">
                        <form role="search" method="get" action="<?php echo esc_url(home_url('/')); ?>" class="flex">
                            <input 
                                type="search" 
                                class="form-input rounded-r-none flex-1" 
                                placeholder="<?php _e('Search for content...', 'sacred-signal-os'); ?>" 
                                value="<?php echo get_search_query(); ?>" 
                                name="s"
                            />
                            <button type="submit" class="btn-signal rounded-l-none px-6">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                                </svg>
                            </button>
                        </form>
                    </div>
                    
                    <!-- Navigation Options -->
                    <div class="grid md:grid-cols-3 gap-6 mb-12">
                        <a href="<?php echo esc_url(home_url('/')); ?>" class="card p-6 text-center hover:shadow-lg transition-all duration-300 group">
                            <div class="w-12 h-12 bg-signal/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-signal/20 transition-colors">
                                <svg class="w-6 h-6 text-signal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                                </svg>
                            </div>
                            <h3 class="heading-ritual text-lg font-bold mb-2 text-foreground">
                                <?php _e('Go Home', 'sacred-signal-os'); ?>
                            </h3>
                            <p class="body-premium text-sm text-muted-foreground">
                                <?php _e('Return to the homepage', 'sacred-signal-os'); ?>
                            </p>
                        </a>
                        
                        <a href="<?php echo esc_url(home_url('/origin-story-studio/')); ?>" class="card p-6 text-center hover:shadow-lg transition-all duration-300 group">
                            <div class="w-12 h-12 bg-signal/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-signal/20 transition-colors">
                                <svg class="w-6 h-6 text-signal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                                </svg>
                            </div>
                            <h3 class="heading-ritual text-lg font-bold mb-2 text-foreground">
                                <?php _e('Origin Story Studio', 'sacred-signal-os'); ?>
                            </h3>
                            <p class="body-premium text-sm text-muted-foreground">
                                <?php _e('Create your story', 'sacred-signal-os'); ?>
                            </p>
                        </a>
                        
                        <a href="<?php echo esc_url(home_url('/application/')); ?>" class="card p-6 text-center hover:shadow-lg transition-all duration-300 group">
                            <div class="w-12 h-12 bg-signal/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-signal/20 transition-colors">
                                <svg class="w-6 h-6 text-signal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m6-2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                            </div>
                            <h3 class="heading-ritual text-lg font-bold mb-2 text-foreground">
                                <?php _e('Apply Now', 'sacred-signal-os'); ?>
                            </h3>
                            <p class="body-premium text-sm text-muted-foreground">
                                <?php _e('Start your journey', 'sacred-signal-os'); ?>
                            </p>
                        </a>
                    </div>
                    
                    <div class="flex flex-col md:flex-row gap-4 justify-center">
                        <a href="<?php echo esc_url(home_url('/')); ?>" class="btn-signal inline-flex items-center px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105">
                            <?php _e('Return Home', 'sacred-signal-os'); ?>
                        </a>
                        <a href="<?php echo esc_url(home_url('/blog/')); ?>" class="btn-secondary inline-flex items-center px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105">
                            <?php _e('Browse Blog', 'sacred-signal-os'); ?>
                        </a>
                    </div>
                    
                </div>
            </div>
        </section>

    </div>
</main>

<?php get_footer(); ?>