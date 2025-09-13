<?php
/**
 * Performance optimization functions
 * 
 * @package Sacred_Signal_OS
 */

/**
 * Optimize WordPress performance
 */
function sacred_signal_performance_optimizations() {
    // Remove unnecessary WordPress features
    remove_action('wp_head', 'wp_generator');
    remove_action('wp_head', 'wlwmanifest_link');
    remove_action('wp_head', 'rsd_link');
    remove_action('wp_head', 'wp_shortlink_wp_head');
    
    // Remove emoji scripts and styles
    remove_action('wp_head', 'print_emoji_detection_script', 7);
    remove_action('wp_print_styles', 'print_emoji_styles');
    remove_action('admin_print_scripts', 'print_emoji_detection_script');
    remove_action('admin_print_styles', 'print_emoji_styles');
    
    // Disable embeds
    remove_action('wp_head', 'wp_oembed_add_discovery_links');
    remove_action('wp_head', 'wp_oembed_add_host_js');
    
    // Remove DNS prefetch for s.w.org
    add_filter('emoji_svg_url', '__return_false');
}
add_action('init', 'sacred_signal_performance_optimizations');

/**
 * Optimize image loading with lazy loading
 */
function sacred_signal_add_lazy_loading($content) {
    if (is_admin() || is_feed() || is_preview()) {
        return $content;
    }
    
    // Add loading="lazy" to images
    $content = preg_replace('/<img(.*?)src=/i', '<img$1loading="lazy" src=', $content);
    
    return $content;
}
add_filter('the_content', 'sacred_signal_add_lazy_loading');

/**
 * Preload critical resources
 */
function sacred_signal_preload_resources() {
    // Preload critical fonts
    echo '<link rel="preload" href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@300;400;500;600;700&display=swap" as="style" onload="this.onload=null;this.rel=\'stylesheet\'">';
    echo '<noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@300;400;500;600;700&display=swap"></noscript>';
    
    // Preload critical images
    if (is_front_page()) {
        $hero_image = get_template_directory_uri() . '/assets/images/cinema/hero-sacred-signals.jpg';
        echo '<link rel="preload" href="' . esc_url($hero_image) . '" as="image">';
    }
}
add_action('wp_head', 'sacred_signal_preload_resources', 1);

/**
 * Optimize database queries
 */
function sacred_signal_optimize_queries($query) {
    if (!is_admin() && $query->is_main_query()) {
        // Limit post revisions displayed
        if (is_home()) {
            $query->set('posts_per_page', 6);
        }
        
        // Remove unnecessary meta queries on archive pages
        if (is_archive() || is_search()) {
            $query->set('no_found_rows', true);
            $query->set('update_post_meta_cache', false);
            $query->set('update_post_term_cache', false);
        }
    }
}
add_action('pre_get_posts', 'sacred_signal_optimize_queries');

/**
 * Minify HTML output
 */
function sacred_signal_minify_html($buffer) {
    if (!is_admin() && !is_customize_preview()) {
        // Remove HTML comments (except IE conditionals)
        $buffer = preg_replace('/<!--(?!\s*(?:\[if [^\]]+]|<!|>))(?:(?!-->).)*-->/s', '', $buffer);
        
        // Remove whitespace
        $buffer = preg_replace('/\s+/', ' ', $buffer);
        $buffer = preg_replace('/>\s+</', '><', $buffer);
        
        // Remove trailing whitespace
        $buffer = trim($buffer);
    }
    
    return $buffer;
}

/**
 * Start output buffering for HTML minification
 */
function sacred_signal_start_minification() {
    if (!is_admin() && !is_customize_preview()) {
        ob_start('sacred_signal_minify_html');
    }
}
add_action('template_redirect', 'sacred_signal_start_minification');

/**
 * Add expires headers for static assets
 */
function sacred_signal_add_expires_headers() {
    if (!is_admin()) {
        header('Cache-Control: public, max-age=31536000');
        header('Expires: ' . gmdate('D, d M Y H:i:s', time() + 31536000) . ' GMT');
    }
}
// Use send_headers to set cache headers before any output
add_action('send_headers', 'sacred_signal_add_expires_headers');

/**
 * Optimize CSS delivery
 */
function sacred_signal_optimize_css_delivery() {
    // Critical CSS inline
    $critical_css = '
        body { font-family: Inter, sans-serif; line-height: 1.6; }
        .site-header { position: fixed; top: 0; width: 100%; z-index: 50; }
        .hero-section { min-height: 100vh; display: flex; align-items: center; }
        .heading-ritual { font-family: "Playfair Display", serif; font-weight: 700; }
    ';
    
    echo '<style id="critical-css">' . $critical_css . '</style>';
}
add_action('wp_head', 'sacred_signal_optimize_css_delivery', 5);

/**
 * Defer non-critical JavaScript
 */
function sacred_signal_defer_scripts($tag, $handle, $src) {
    $defer_scripts = array(
        'sacred-signal-os-main',
        'sacred-signal-os-cinema',
        'wp-embed'
    );
    
    if (in_array($handle, $defer_scripts)) {
        return str_replace('<script ', '<script defer ', $tag);
    }
    
    return $tag;
}
add_filter('script_loader_tag', 'sacred_signal_defer_scripts', 10, 3);

/**
 * Remove query strings from static resources
 */
function sacred_signal_remove_script_version($src) {
    if (strpos($src, 'ver=')) {
        $src = remove_query_arg('ver', $src);
    }
    return $src;
}
add_filter('script_loader_src', 'sacred_signal_remove_script_version', 15, 1);
add_filter('style_loader_src', 'sacred_signal_remove_script_version', 15, 1);

/**
 * Optimize WordPress heartbeat
 */
function sacred_signal_optimize_heartbeat_settings($settings) {
    // Slow down heartbeat on frontend
    if (!is_admin()) {
        $settings['interval'] = 60; // 60 seconds instead of 15
    }
    
    return $settings;
}
add_filter('heartbeat_settings', 'sacred_signal_optimize_heartbeat_settings');

/**
 * Limit post revisions to save database space
 */
function sacred_signal_limit_revisions($num, $post) {
    return 3; // Keep only 3 revisions
}
add_filter('wp_revisions_to_keep', 'sacred_signal_limit_revisions', 10, 2);