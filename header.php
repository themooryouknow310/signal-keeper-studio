<?php
/**
 * The header for the Sacred Signal OS theme
 * 
 * @package Sacred_Signal_OS
 */
?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    
    <!-- Preload critical fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<div id="page" class="site">
    <a class="skip-link screen-reader-text" href="#primary"><?php _e('Skip to content', 'sacred-signal-os'); ?></a>

    <?php 
    $hide_navigation = get_post_meta(get_the_ID(), '_hide_navigation', true);
    if (!$hide_navigation) : 
    ?>
    <header id="masthead" class="site-header fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
        <div class="container mx-auto px-6 py-4">
            <div class="flex items-center justify-between">
                <!-- Logo -->
                <div class="flex items-center space-x-3">
                    <?php if (has_custom_logo()) : ?>
                        <?php the_custom_logo(); ?>
                    <?php else : ?>
                        <img 
                            src="<?php echo get_template_directory_uri(); ?>/assets/images/sacred-geometry-icon.png" 
                            alt="<?php bloginfo('name'); ?>" 
                            class="w-10 h-10"
                        />
                    <?php endif; ?>
                    <span class="text-xl font-semibold text-foreground">
                        <?php bloginfo('name'); ?>
                    </span>
                </div>

                <!-- Navigation -->
                <nav class="hidden md:flex items-center space-x-8">
                    <?php
                    wp_nav_menu(array(
                        'theme_location' => 'primary',
                        'menu_class' => 'nav-menu flex items-center space-x-8',
                        'container' => false,
                        'fallback_cb' => false,
                    ));
                    ?>
                </nav>

                <!-- CTA Button -->
                <div class="hidden md:block">
                    <a 
                        href="<?php echo esc_url(home_url('/application/')); ?>" 
                        class="btn-primary inline-flex items-center px-6 py-3 rounded-full text-sm font-medium transition-all duration-300"
                    >
                        <?php _e('Apply Now', 'sacred-signal-os'); ?>
                    </a>
                </div>

                <!-- Mobile Menu Button -->
                <button 
                    class="md:hidden text-foreground hover:text-primary transition-colors"
                    id="mobile-menu-button"
                    aria-label="<?php _e('Toggle mobile menu', 'sacred-signal-os'); ?>"
                >
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                </button>
            </div>

            <!-- Mobile Menu -->
            <div class="md:hidden mt-4 pb-4 border-t border-border pt-4 hidden" id="mobile-menu">
                <?php
                wp_nav_menu(array(
                    'theme_location' => 'primary',
                    'menu_class' => 'mobile-nav-menu space-y-4',
                    'container' => false,
                    'fallback_cb' => false,
                ));
                ?>
                <div class="pt-4">
                    <a 
                        href="<?php echo esc_url(home_url('/application/')); ?>" 
                        class="btn-primary block text-center px-6 py-3 rounded-full text-sm font-medium"
                    >
                        <?php _e('Apply Now', 'sacred-signal-os'); ?>
                    </a>
                </div>
            </div>
        </div>
    </header>
    <?php endif; ?>

    <div id="content" class="site-content">