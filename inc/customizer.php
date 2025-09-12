<?php
/**
 * Sacred Signal OS Theme Customizer
 * 
 * @package Sacred_Signal_OS
 */

/**
 * Add postMessage support for site title and description for the Theme Customizer.
 */
function sacred_signal_os_customize_register($wp_customize) {
    $wp_customize->get_setting('blogname')->transport = 'postMessage';
    $wp_customize->get_setting('blogdescription')->transport = 'postMessage';

    // Theme Options Panel
    $wp_customize->add_panel('sacred_signal_options', array(
        'title' => __('Sacred Signal Options', 'sacred-signal-os'),
        'description' => __('Customize your Sacred Signal OS theme', 'sacred-signal-os'),
        'priority' => 160,
    ));

    // Hero Section
    $wp_customize->add_section('hero_section', array(
        'title' => __('Hero Section', 'sacred-signal-os'),
        'panel' => 'sacred_signal_options',
        'priority' => 10,
    ));

    $wp_customize->add_setting('hero_title', array(
        'default' => 'Transform scattered messages into clear, repeatable signals',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('hero_title', array(
        'label' => __('Hero Title', 'sacred-signal-os'),
        'section' => 'hero_section',
        'type' => 'text',
    ));

    $wp_customize->add_setting('hero_subtitle', array(
        'default' => 'An operating system for spiritual entrepreneurs who want to build profitable, authentic businesses without losing their soul or burning out.',
        'sanitize_callback' => 'sanitize_textarea_field',
    ));

    $wp_customize->add_control('hero_subtitle', array(
        'label' => __('Hero Subtitle', 'sacred-signal-os'),
        'section' => 'hero_section',
        'type' => 'textarea',
    ));

    $wp_customize->add_setting('hero_cta_text', array(
        'default' => 'Apply Now',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('hero_cta_text', array(
        'label' => __('Hero CTA Button Text', 'sacred-signal-os'),
        'section' => 'hero_section',
        'type' => 'text',
    ));

    // About Section
    $wp_customize->add_section('about_section', array(
        'title' => __('About Section', 'sacred-signal-os'),
        'panel' => 'sacred_signal_options',
        'priority' => 20,
    ));

    $wp_customize->add_setting('about_title', array(
        'default' => 'The Problem with Scattered Signals',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('about_title', array(
        'label' => __('About Section Title', 'sacred-signal-os'),
        'section' => 'about_section',
        'type' => 'text',
    ));

    $wp_customize->add_setting('about_description', array(
        'default' => 'Most spiritual entrepreneurs struggle with inconsistent messaging that confuses their audience and dilutes their impact.',
        'sanitize_callback' => 'sanitize_textarea_field',
    ));

    $wp_customize->add_control('about_description', array(
        'label' => __('About Section Description', 'sacred-signal-os'),
        'section' => 'about_section',
        'type' => 'textarea',
    ));

    // Program Section
    $wp_customize->add_section('program_section', array(
        'title' => __('Program Section', 'sacred-signal-os'),
        'panel' => 'sacred_signal_options',
        'priority' => 30,
    ));

    $wp_customize->add_setting('program_title', array(
        'default' => 'Sacred Signal OS',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('program_title', array(
        'label' => __('Program Title', 'sacred-signal-os'),
        'section' => 'program_section',
        'type' => 'text',
    ));

    $wp_customize->add_setting('program_subtitle', array(
        'default' => 'The complete operating system for spiritual entrepreneurs',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('program_subtitle', array(
        'label' => __('Program Subtitle', 'sacred-signal-os'),
        'section' => 'program_section',
        'type' => 'text',
    ));

    $wp_customize->add_setting('program_price', array(
        'default' => '$2,997',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('program_price', array(
        'label' => __('Program Price', 'sacred-signal-os'),
        'section' => 'program_section',
        'type' => 'text',
    ));

    // Founder Section
    $wp_customize->add_section('founder_section', array(
        'title' => __('Founder Section', 'sacred-signal-os'),
        'panel' => 'sacred_signal_options',
        'priority' => 40,
    ));

    $wp_customize->add_setting('founder_name', array(
        'default' => 'Barack El',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('founder_name', array(
        'label' => __('Founder Name', 'sacred-signal-os'),
        'section' => 'founder_section',
        'type' => 'text',
    ));

    $wp_customize->add_setting('founder_title', array(
        'default' => 'Founder & Strategic Architect',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('founder_title', array(
        'label' => __('Founder Title', 'sacred-signal-os'),
        'section' => 'founder_section',
        'type' => 'text',
    ));

    $wp_customize->add_setting('founder_bio', array(
        'default' => 'Barack El is a strategic architect who helps spiritual entrepreneurs build authentic, profitable businesses.',
        'sanitize_callback' => 'sanitize_textarea_field',
    ));

    $wp_customize->add_control('founder_bio', array(
        'label' => __('Founder Bio', 'sacred-signal-os'),
        'section' => 'founder_section',
        'type' => 'textarea',
    ));

    $wp_customize->add_setting('founder_image', array(
        'sanitize_callback' => 'esc_url_raw',
    ));

    $wp_customize->add_control(new WP_Customize_Image_Control($wp_customize, 'founder_image', array(
        'label' => __('Founder Image', 'sacred-signal-os'),
        'section' => 'founder_section',
    )));

    // Footer Section
    $wp_customize->add_section('footer_section', array(
        'title' => __('Footer', 'sacred-signal-os'),
        'panel' => 'sacred_signal_options',
        'priority' => 50,
    ));

    $wp_customize->add_setting('footer_tagline', array(
        'default' => 'Transform Your Message. Amplify Your Impact. Build Your Sacred Signal.',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('footer_tagline', array(
        'label' => __('Footer Tagline', 'sacred-signal-os'),
        'section' => 'footer_section',
        'type' => 'text',
    ));

    // Colors
    $wp_customize->add_section('sacred_colors', array(
        'title' => __('Sacred Colors', 'sacred-signal-os'),
        'panel' => 'sacred_signal_options',
        'priority' => 60,
    ));

    $wp_customize->add_setting('signal_color', array(
        'default' => '#00FFFF',
        'sanitize_callback' => 'sanitize_hex_color',
    ));

    $wp_customize->add_control(new WP_Customize_Color_Control($wp_customize, 'signal_color', array(
        'label' => __('Signal Color', 'sacred-signal-os'),
        'section' => 'sacred_colors',
    )));

    $wp_customize->add_setting('brass_color', array(
        'default' => '#D4AF37',
        'sanitize_callback' => 'sanitize_hex_color',
    ));

    $wp_customize->add_control(new WP_Customize_Color_Control($wp_customize, 'brass_color', array(
        'label' => __('Brass Color', 'sacred-signal-os'),
        'section' => 'sacred_colors',
    )));

    // Contact Information
    $wp_customize->add_section('contact_info', array(
        'title' => __('Contact Information', 'sacred-signal-os'),
        'panel' => 'sacred_signal_options',
        'priority' => 70,
    ));

    $wp_customize->add_setting('contact_email', array(
        'default' => 'hello@sacredsignalos.com',
        'sanitize_callback' => 'sanitize_email',
    ));

    $wp_customize->add_control('contact_email', array(
        'label' => __('Contact Email', 'sacred-signal-os'),
        'section' => 'contact_info',
        'type' => 'email',
    ));

    $wp_customize->add_setting('support_email', array(
        'default' => 'support@sacredsignalos.com',
        'sanitize_callback' => 'sanitize_email',
    ));

    $wp_customize->add_control('support_email', array(
        'label' => __('Support Email', 'sacred-signal-os'),
        'section' => 'contact_info',
        'type' => 'email',
    ));
}
add_action('customize_register', 'sacred_signal_os_customize_register');

/**
 * Render the site title for the selective refresh partial.
 */
function sacred_signal_os_customize_partial_blogname() {
    bloginfo('name');
}

/**
 * Render the site tagline for the selective refresh partial.
 */
function sacred_signal_os_customize_partial_blogdescription() {
    bloginfo('description');
}

/**
 * Binds JS handlers to make Theme Customizer preview reload changes asynchronously.
 */
function sacred_signal_os_customize_preview_js() {
    wp_enqueue_script('sacred-signal-os-customizer', get_template_directory_uri() . '/assets/js/customizer.js', array('customize-preview'), _S_VERSION, true);
}
add_action('customize_preview_init', 'sacred_signal_os_customize_preview_js');