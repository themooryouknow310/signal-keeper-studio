<?php
/**
 * Sacred Signal OS Theme Functions
 * 
 * @package Sacred_Signal_OS
 * @version 1.0.0
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Theme Setup
 */
function sacred_signal_os_setup() {
    // Add theme support
    add_theme_support('post-thumbnails');
    add_theme_support('title-tag');
    add_theme_support('custom-logo');
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
        'script',
        'style'
    ));
    
    // Add custom image sizes
    add_image_size('hero-image', 1920, 1080, true);
    add_image_size('testimonial-image', 400, 400, true);
    add_image_size('program-image', 600, 400, true);
    
    // Register navigation menus
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'sacred-signal-os'),
        'footer' => __('Footer Menu', 'sacred-signal-os'),
    ));
    
    // Add editor color palette
    add_theme_support('editor-color-palette', array(
        array(
            'name' => __('Primary', 'sacred-signal-os'),
            'slug' => 'primary',
            'color' => 'hsl(var(--primary))',
        ),
        array(
            'name' => __('Secondary', 'sacred-signal-os'),
            'slug' => 'secondary',
            'color' => 'hsl(var(--secondary))',
        ),
        array(
            'name' => __('Signal', 'sacred-signal-os'),
            'slug' => 'signal',
            'color' => 'hsl(var(--signal))',
        ),
    ));
}
add_action('after_setup_theme', 'sacred_signal_os_setup');

/**
 * Enqueue Scripts and Styles
 */
function sacred_signal_os_scripts() {
    $theme     = wp_get_theme();
    $theme_dir = get_template_directory();
    $theme_uri = get_template_directory_uri();

    // Google Fonts with proper display swap
    wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap', array(), null);

    // Base style.css (versioned with filemtime for cache busting)
    $style_path = $theme_dir . '/style.css';
    wp_enqueue_style(
        'sacred-signal-os-style',
        get_stylesheet_uri(),
        array(),
        file_exists($style_path) ? filemtime($style_path) : $theme->get('Version')
    );

    // Design system CSS (foundation)
    $design_path = $theme_dir . '/assets/css/design-system.css';
    wp_enqueue_style(
        'sacred-signal-os-design-system',
        $theme_uri . '/assets/css/design-system.css',
        array('sacred-signal-os-style', 'google-fonts'),
        file_exists($design_path) ? filemtime($design_path) : $theme->get('Version')
    );

    // Cinema CSS
    $cinema_path = $theme_dir . '/assets/css/cinema.css';
    wp_enqueue_style(
        'sacred-signal-os-cinema-base',
        $theme_uri . '/assets/css/cinema.css',
        array('sacred-signal-os-design-system'),
        file_exists($cinema_path) ? filemtime($cinema_path) : $theme->get('Version')
    );

    // Cinematic effects CSS
    $cinema_css_path = $theme_dir . '/assets/css/cinematic-effects.css';
    wp_enqueue_style(
        'sacred-signal-os-cinema',
        $theme_uri . '/assets/css/cinematic-effects.css',
        array('sacred-signal-os-cinema-base'),
        file_exists($cinema_css_path) ? filemtime($cinema_css_path) : $theme->get('Version')
    );

    // Component styles
    $components_path = $theme_dir . '/assets/css/components.css';
    wp_enqueue_style(
        'sacred-signal-os-components',
        $theme_uri . '/assets/css/components.css',
        array('sacred-signal-os-cinema'),
        file_exists($components_path) ? filemtime($components_path) : $theme->get('Version')
    );

    // Theme overrides and utility bridge
    $overrides_path = $theme_dir . '/assets/css/theme-overrides.css';
    wp_enqueue_style(
        'sacred-signal-os-overrides',
        $theme_uri . '/assets/css/theme-overrides.css',
        array('sacred-signal-os-components'),
        file_exists($overrides_path) ? filemtime($overrides_path) : $theme->get('Version')
    );

    // Performance fixes CSS
    $perf_path = $theme_dir . '/assets/css/performance-fixes.css';
    wp_enqueue_style(
        'sacred-signal-os-performance',
        $theme_uri . '/assets/css/performance-fixes.css',
        array('sacred-signal-os-overrides'),
        file_exists($perf_path) ? filemtime($perf_path) : $theme->get('Version')
    );

    // Main JS
    $main_js_path = $theme_dir . '/assets/js/main.js';
    wp_enqueue_script(
        'sacred-signal-os-main',
        $theme_uri . '/assets/js/main.js',
        array('jquery'),
        file_exists($main_js_path) ? filemtime($main_js_path) : $theme->get('Version'),
        true
    );

    // Cinematic effects JS
    $cinema_js_path = $theme_dir . '/assets/js/cinematic-effects.js';
    wp_enqueue_script(
        'sacred-signal-os-cinematic',
        $theme_uri . '/assets/js/cinematic-effects.js',
        array('sacred-signal-os-main'),
        file_exists($cinema_js_path) ? filemtime($cinema_js_path) : $theme->get('Version'),
        true
    );

    // Localize script for AJAX
    wp_localize_script('sacred-signal-os-main', 'sacred_signal_ajax', array(
        'ajax_url' => admin_url('admin-ajax.php'),
        'nonce'    => wp_create_nonce('sacred_signal_nonce'),
    ));
    
    // Add inline CSS for immediate theme color application
    $custom_css = "
        :root {
            --theme-loading: 1;
        }
        body.dark {
            background: hsl(240 10% 3.9%);
            color: hsl(0 0% 98%);
        }
    ";
    wp_add_inline_style('sacred-signal-os-style', $custom_css);
}
add_action('wp_enqueue_scripts', 'sacred_signal_os_scripts');

/**
 * Register Custom Post Types
 */
function sacred_signal_os_custom_post_types() {
    // Testimonials
    register_post_type('testimonial', array(
        'labels' => array(
            'name' => __('Testimonials', 'sacred-signal-os'),
            'singular_name' => __('Testimonial', 'sacred-signal-os'),
            'add_new_item' => __('Add New Testimonial', 'sacred-signal-os'),
            'edit_item' => __('Edit Testimonial', 'sacred-signal-os'),
        ),
        'public' => false,
        'show_ui' => true,
        'show_in_menu' => true,
        'supports' => array('title', 'editor', 'thumbnail'),
        'menu_icon' => 'dashicons-format-quote',
    ));
    
    // Program Modules
    register_post_type('program_module', array(
        'labels' => array(
            'name' => __('Program Modules', 'sacred-signal-os'),
            'singular_name' => __('Program Module', 'sacred-signal-os'),
            'add_new_item' => __('Add New Module', 'sacred-signal-os'),
            'edit_item' => __('Edit Module', 'sacred-signal-os'),
        ),
        'public' => false,
        'show_ui' => true,
        'show_in_menu' => true,
        'supports' => array('title', 'editor', 'thumbnail', 'page-attributes'),
        'menu_icon' => 'dashicons-book-alt',
    ));
    
    // Offer Stack Items
    register_post_type('offer_item', array(
        'labels' => array(
            'name' => __('Offer Stack Items', 'sacred-signal-os'),
            'singular_name' => __('Offer Item', 'sacred-signal-os'),
            'add_new_item' => __('Add New Offer Item', 'sacred-signal-os'),
            'edit_item' => __('Edit Offer Item', 'sacred-signal-os'),
        ),
        'public' => false,
        'show_ui' => true,
        'show_in_menu' => true,
        'supports' => array('title', 'editor', 'thumbnail', 'page-attributes'),
        'menu_icon' => 'dashicons-products',
    ));
}
add_action('init', 'sacred_signal_os_custom_post_types');

/**
 * Register Widget Areas
 */
function sacred_signal_os_widgets_init() {
    register_sidebar(array(
        'name' => __('Footer Widget Area', 'sacred-signal-os'),
        'id' => 'footer-widgets',
        'description' => __('Widgets in this area will be shown in the footer.', 'sacred-signal-os'),
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget' => '</div>',
        'before_title' => '<h3 class="widget-title">',
        'after_title' => '</h3>',
    ));
}
add_action('widgets_init', 'sacred_signal_os_widgets_init');

/**
 * Custom Fields Support
 */
function sacred_signal_os_add_meta_boxes() {
    // Hero Section Meta Box
    add_meta_box(
        'hero_section_meta',
        __('Hero Section Settings', 'sacred-signal-os'),
        'sacred_signal_os_hero_meta_callback',
        'page',
        'normal',
        'high'
    );
    
    // Page Settings Meta Box
    add_meta_box(
        'page_settings_meta',
        __('Page Settings', 'sacred-signal-os'),
        'sacred_signal_os_page_settings_callback',
        'page',
        'side',
        'default'
    );
}
add_action('add_meta_boxes', 'sacred_signal_os_add_meta_boxes');

/**
 * Hero Section Meta Box Callback
 */
function sacred_signal_os_hero_meta_callback($post) {
    wp_nonce_field('sacred_signal_os_save_meta', 'sacred_signal_os_meta_nonce');
    
    $hero_title = get_post_meta($post->ID, '_hero_title', true);
    $hero_subtitle = get_post_meta($post->ID, '_hero_subtitle', true);
    $hero_image = get_post_meta($post->ID, '_hero_image', true);
    $hero_video = get_post_meta($post->ID, '_hero_video', true);
    
    echo '<table class="form-table">';
    echo '<tr><th><label for="hero_title">' . __('Hero Title', 'sacred-signal-os') . '</label></th>';
    echo '<td><input type="text" id="hero_title" name="hero_title" value="' . esc_attr($hero_title) . '" class="regular-text" /></td></tr>';
    
    echo '<tr><th><label for="hero_subtitle">' . __('Hero Subtitle', 'sacred-signal-os') . '</label></th>';
    echo '<td><textarea id="hero_subtitle" name="hero_subtitle" rows="3" class="large-text">' . esc_textarea($hero_subtitle) . '</textarea></td></tr>';
    
    echo '<tr><th><label for="hero_image">' . __('Hero Image URL', 'sacred-signal-os') . '</label></th>';
    echo '<td><input type="url" id="hero_image" name="hero_image" value="' . esc_url($hero_image) . '" class="regular-text" /></td></tr>';
    
    echo '<tr><th><label for="hero_video">' . __('Hero Video URL', 'sacred-signal-os') . '</label></th>';
    echo '<td><input type="url" id="hero_video" name="hero_video" value="' . esc_url($hero_video) . '" class="regular-text" /></td></tr>';
    echo '</table>';
}

/**
 * Page Settings Meta Box Callback
 */
function sacred_signal_os_page_settings_callback($post) {
    $hide_navigation = get_post_meta($post->ID, '_hide_navigation', true);
    $page_template_type = get_post_meta($post->ID, '_page_template_type', true);
    
    echo '<p><label>';
    echo '<input type="checkbox" name="hide_navigation" value="1" ' . checked(1, $hide_navigation, false) . ' />';
    echo ' ' . __('Hide Navigation', 'sacred-signal-os');
    echo '</label></p>';
    
    echo '<p><label for="page_template_type">' . __('Template Type', 'sacred-signal-os') . '</label><br>';
    echo '<select id="page_template_type" name="page_template_type">';
    echo '<option value="default" ' . selected('default', $page_template_type, false) . '>' . __('Default', 'sacred-signal-os') . '</option>';
    echo '<option value="landing" ' . selected('landing', $page_template_type, false) . '>' . __('Landing Page', 'sacred-signal-os') . '</option>';
    echo '<option value="application" ' . selected('application', $page_template_type, false) . '>' . __('Application Form', 'sacred-signal-os') . '</option>';
    echo '<option value="thank-you" ' . selected('thank-you', $page_template_type, false) . '>' . __('Thank You Page', 'sacred-signal-os') . '</option>';
    echo '</select></p>';
}

/**
 * Save Meta Box Data
 */
function sacred_signal_os_save_meta($post_id) {
    if (!isset($_POST['sacred_signal_os_meta_nonce']) || !wp_verify_nonce($_POST['sacred_signal_os_meta_nonce'], 'sacred_signal_os_save_meta')) {
        return;
    }
    
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return;
    }
    
    if (!current_user_can('edit_post', $post_id)) {
        return;
    }
    
    // Save hero section data
    if (isset($_POST['hero_title'])) {
        update_post_meta($post_id, '_hero_title', sanitize_text_field($_POST['hero_title']));
    }
    
    if (isset($_POST['hero_subtitle'])) {
        update_post_meta($post_id, '_hero_subtitle', sanitize_textarea_field($_POST['hero_subtitle']));
    }
    
    if (isset($_POST['hero_image'])) {
        update_post_meta($post_id, '_hero_image', esc_url_raw($_POST['hero_image']));
    }
    
    if (isset($_POST['hero_video'])) {
        update_post_meta($post_id, '_hero_video', esc_url_raw($_POST['hero_video']));
    }
    
    // Save page settings
    update_post_meta($post_id, '_hide_navigation', isset($_POST['hide_navigation']) ? 1 : 0);
    
    if (isset($_POST['page_template_type'])) {
        update_post_meta($post_id, '_page_template_type', sanitize_text_field($_POST['page_template_type']));
    }
}
add_action('save_post', 'sacred_signal_os_save_meta');

/**
 * Form Handlers
 */
function sacred_signal_os_handle_application_form() {
    if (!wp_verify_nonce($_POST['nonce'], 'sacred_signal_nonce')) {
        wp_die(__('Security check failed', 'sacred-signal-os'));
    }
    
    $name = sanitize_text_field($_POST['name']);
    $email = sanitize_email($_POST['email']);
    
    // Process application form
    $application_data = array(
        'name' => $name,
        'email' => $email,
        'date' => current_time('mysql'),
        'ip' => $_SERVER['REMOTE_ADDR']
    );
    
    // Save to database or send email
    // Implementation depends on requirements
    
    wp_send_json_success(array(
        'message' => __('Application submitted successfully!', 'sacred-signal-os'),
        'redirect' => home_url('/next-steps/')
    ));
}
add_action('wp_ajax_submit_application', 'sacred_signal_os_handle_application_form');
add_action('wp_ajax_nopriv_submit_application', 'sacred_signal_os_handle_application_form');

/**
 * Helper Functions
 */
function sacred_signal_os_get_testimonials($limit = -1) {
    return get_posts(array(
        'post_type' => 'testimonial',
        'posts_per_page' => $limit,
        'post_status' => 'publish',
        'orderby' => 'menu_order',
        'order' => 'ASC'
    ));
}

function sacred_signal_os_get_program_modules($limit = -1) {
    return get_posts(array(
        'post_type' => 'program_module',
        'posts_per_page' => $limit,
        'post_status' => 'publish',
        'orderby' => 'menu_order',
        'order' => 'ASC'
    ));
}

function sacred_signal_os_get_offer_items($limit = -1) {
    return get_posts(array(
        'post_type' => 'offer_item',
        'posts_per_page' => $limit,
        'post_status' => 'publish',
        'orderby' => 'menu_order',
        'order' => 'ASC'
    ));
}

/**
 * Customizer Settings
 */
function sacred_signal_os_customize_register($wp_customize) {
    // Brand Colors Section
    $wp_customize->add_section('sacred_signal_colors', array(
        'title' => __('Sacred Signal Colors', 'sacred-signal-os'),
        'priority' => 30,
    ));
    
    $wp_customize->add_setting('primary_color', array(
        'default' => '#000000',
        'sanitize_callback' => 'sanitize_hex_color',
    ));
    
    $wp_customize->add_control(new WP_Customize_Color_Control($wp_customize, 'primary_color', array(
        'label' => __('Primary Color', 'sacred-signal-os'),
        'section' => 'sacred_signal_colors',
    )));
    
    $wp_customize->add_setting('signal_color', array(
        'default' => '#00ffff',
        'sanitize_callback' => 'sanitize_hex_color',
    ));
    
    $wp_customize->add_control(new WP_Customize_Color_Control($wp_customize, 'signal_color', array(
        'label' => __('Signal Color', 'sacred-signal-os'),
        'section' => 'sacred_signal_colors',
    )));
}
add_action('customize_register', 'sacred_signal_os_customize_register');

/**
 * Navigation Fallback Function
 */
function sacred_signal_os_menu_fallback($args) {
    if (!isset($args['menu_class'])) {
        $args['menu_class'] = 'nav-menu';
    }
    
    echo '<ul class="' . esc_attr($args['menu_class']) . '">';
    echo '<li><a href="' . esc_url(home_url('/#about')) . '">' . __('About', 'sacred-signal-os') . '</a></li>';
    echo '<li><a href="' . esc_url(home_url('/#program')) . '">' . __('Program', 'sacred-signal-os') . '</a></li>';
    echo '<li><a href="' . esc_url(home_url('/origin-story-studio/')) . '">' . __('Origin Story Studio', 'sacred-signal-os') . '</a></li>';
    echo '<li><a href="' . esc_url(home_url('/#founder')) . '">' . __('Founder', 'sacred-signal-os') . '</a></li>';
    echo '</ul>';
}

/**
 * Output Custom CSS
 */
function sacred_signal_hex_to_hsl_components($hex) {
    $hex = ltrim(trim($hex), '#');
    if (strlen($hex) === 3) {
        $r = hexdec(str_repeat(substr($hex, 0, 1), 2));
        $g = hexdec(str_repeat(substr($hex, 1, 1), 2));
        $b = hexdec(str_repeat(substr($hex, 2, 1), 2));
    } elseif (strlen($hex) === 6) {
        $r = hexdec(substr($hex, 0, 2));
        $g = hexdec(substr($hex, 2, 2));
        $b = hexdec(substr($hex, 4, 2));
    } else {
        return null;
    }

    $r /= 255; $g /= 255; $b /= 255;
    $max = max($r, $g, $b);
    $min = min($r, $g, $b);
    $h = $s = $l = ($max + $min) / 2;

    if ($max === $min) {
        $h = $s = 0; // achromatic
    } else {
        $d = $max - $min;
        $s = $l > 0.5 ? $d / (2 - $max - $min) : $d / ($max + $min);
        switch ($max) {
            case $r:
                $h = ($g - $b) / $d + ($g < $b ? 6 : 0);
                break;
            case $g:
                $h = ($b - $r) / $d + 2;
                break;
            case $b:
                $h = ($r - $g) / $d + 4;
                break;
        }
        $h /= 6;
    }

    $h_deg = round($h * 360);
    $s_pct = round($s * 100);
    $l_pct = round($l * 100);
    return $h_deg . ' ' . $s_pct . '% ' . $l_pct . '%';
}

function sacred_signal_os_customizer_css() {
    $primary_hex = get_theme_mod('primary_color', '#0a0a0a');
    $signal_hex  = get_theme_mod('signal_color', '#00ffff');

    $primary_hsl = sacred_signal_hex_to_hsl_components($primary_hex);
    $signal_hsl  = sacred_signal_hex_to_hsl_components($signal_hex);

    echo '<style type="text/css">';
    echo ':root {';
    if ($primary_hsl) {
        echo '--primary: ' . $primary_hsl . ';';
    }
    if ($signal_hsl) {
        echo '--signal: ' . $signal_hsl . ';';
    }
    echo '}';
    echo '</style>';
}
add_action('wp_head', 'sacred_signal_os_customizer_css');
?>