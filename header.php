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
    <meta name="theme-color" content="#0f0f23">
    <meta name="color-scheme" content="dark light">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    
    <!-- DNS Prefetch and Preconnect -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    
    <!-- Preload critical assets -->
    <link rel="preload" as="image" href="<?php echo get_template_directory_uri(); ?>/assets/images/cinema/hero-sacred-signals.jpg">
    <link rel="preload" as="image" href="<?php echo get_template_directory_uri(); ?>/assets/images/sacred-geometry-icon.png">
    
    <!-- SEO and Performance -->
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
    <meta name="description" content="<?php echo esc_attr( get_bloginfo( 'description' ) ); ?>">
    <meta property="og:title" content="<?php echo esc_attr( wp_get_document_title() ); ?>">
    <meta property="og:description" content="<?php echo esc_attr( get_bloginfo( 'description' ) ); ?>">
    <meta property="og:type" content="website">
    
    <?php wp_head(); ?>
</head>

<body <?php body_class('dark'); ?>>
<?php wp_body_open(); ?>

<div id="page" class="site">
    <a class="skip-link screen-reader-text" href="#primary"><?php _e('Skip to content', 'sacred-signal-os'); ?></a>

    <?php 
    $hide_navigation = get_post_meta(get_the_ID(), '_hide_navigation', true);
    if (!$hide_navigation) : 
    ?>
    <header id="masthead" class="site-header">
        <div class="container">
            <div class="header-inner">
                <!-- Logo / Brand -->
                <div class="brand">
                    <span class="text-xl font-semibold text-signal">SACRED SIGNAL OS</span>
                </div>

                <!-- Navigation -->
                <nav class="primary-nav">
                    <?php
                    wp_nav_menu(array(
                        'theme_location' => 'primary',
                        'menu_class' => 'nav-menu',
                        'container' => false,
                        'fallback_cb' => 'sacred_signal_os_menu_fallback',
                    ));
                    ?>
                </nav>

                <!-- CTA Button -->
                <div class="cta">
                    <a 
                        href="<?php echo esc_url(home_url('/application/')); ?>" 
                        class="btn-primary inline-block px-6 py-3 rounded-full text-sm font-medium"
                    >
                        <?php _e('Apply Now', 'sacred-signal-os'); ?>
                    </a>
                </div>

                <!-- Mobile Menu Button -->
                <button 
                    class="mobile-toggle"
                    id="mobile-menu-button"
                    aria-label="<?php _e('Toggle mobile menu', 'sacred-signal-os'); ?>"
                    aria-controls="mobile-menu"
                    aria-expanded="false"
                >
                    <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                </button>
            </div>

            <!-- Mobile Menu -->
            <div class="mobile-menu" id="mobile-menu">
                <?php
                wp_nav_menu(array(
                    'theme_location' => 'primary',
                    'menu_class' => 'mobile-nav-menu',
                    'container' => false,
                    'fallback_cb' => 'sacred_signal_os_menu_fallback',
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