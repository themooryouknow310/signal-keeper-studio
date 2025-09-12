<?php
/**
 * Custom Post Types for Sacred Signal OS
 * 
 * @package Sacred_Signal_OS
 */

/**
 * Register Testimonials post type
 */
function sacred_signal_register_testimonials_post_type() {
    $labels = array(
        'name' => _x('Testimonials', 'Post type general name', 'sacred-signal-os'),
        'singular_name' => _x('Testimonial', 'Post type singular name', 'sacred-signal-os'),
        'menu_name' => _x('Testimonials', 'Admin Menu text', 'sacred-signal-os'),
        'name_admin_bar' => _x('Testimonial', 'Add New on Toolbar', 'sacred-signal-os'),
        'add_new' => __('Add New', 'sacred-signal-os'),
        'add_new_item' => __('Add New Testimonial', 'sacred-signal-os'),
        'new_item' => __('New Testimonial', 'sacred-signal-os'),
        'edit_item' => __('Edit Testimonial', 'sacred-signal-os'),
        'view_item' => __('View Testimonial', 'sacred-signal-os'),
        'all_items' => __('All Testimonials', 'sacred-signal-os'),
        'search_items' => __('Search Testimonials', 'sacred-signal-os'),
        'parent_item_colon' => __('Parent Testimonials:', 'sacred-signal-os'),
        'not_found' => __('No testimonials found.', 'sacred-signal-os'),
        'not_found_in_trash' => __('No testimonials found in Trash.', 'sacred-signal-os'),
    );

    $args = array(
        'labels' => $labels,
        'public' => false,
        'publicly_queryable' => false,
        'show_ui' => true,
        'show_in_menu' => true,
        'query_var' => true,
        'rewrite' => array('slug' => 'testimonial'),
        'capability_type' => 'post',
        'has_archive' => false,
        'hierarchical' => false,
        'menu_position' => 20,
        'menu_icon' => 'dashicons-format-quote',
        'supports' => array('title', 'editor', 'thumbnail', 'custom-fields'),
        'show_in_rest' => true,
    );

    register_post_type('testimonial', $args);
}
add_action('init', 'sacred_signal_register_testimonials_post_type');

/**
 * Register Program Modules post type
 */
function sacred_signal_register_modules_post_type() {
    $labels = array(
        'name' => _x('Program Modules', 'Post type general name', 'sacred-signal-os'),
        'singular_name' => _x('Module', 'Post type singular name', 'sacred-signal-os'),
        'menu_name' => _x('Program Modules', 'Admin Menu text', 'sacred-signal-os'),
        'name_admin_bar' => _x('Module', 'Add New on Toolbar', 'sacred-signal-os'),
        'add_new' => __('Add New', 'sacred-signal-os'),
        'add_new_item' => __('Add New Module', 'sacred-signal-os'),
        'new_item' => __('New Module', 'sacred-signal-os'),
        'edit_item' => __('Edit Module', 'sacred-signal-os'),
        'view_item' => __('View Module', 'sacred-signal-os'),
        'all_items' => __('All Modules', 'sacred-signal-os'),
        'search_items' => __('Search Modules', 'sacred-signal-os'),
        'parent_item_colon' => __('Parent Modules:', 'sacred-signal-os'),
        'not_found' => __('No modules found.', 'sacred-signal-os'),
        'not_found_in_trash' => __('No modules found in Trash.', 'sacred-signal-os'),
    );

    $args = array(
        'labels' => $labels,
        'public' => false,
        'publicly_queryable' => false,
        'show_ui' => true,
        'show_in_menu' => true,
        'query_var' => true,
        'rewrite' => array('slug' => 'module'),
        'capability_type' => 'post',
        'has_archive' => false,
        'hierarchical' => true,
        'menu_position' => 21,
        'menu_icon' => 'dashicons-book-alt',
        'supports' => array('title', 'editor', 'thumbnail', 'custom-fields', 'page-attributes'),
        'show_in_rest' => true,
    );

    register_post_type('module', $args);
}
add_action('init', 'sacred_signal_register_modules_post_type');

/**
 * Register FAQ post type
 */
function sacred_signal_register_faq_post_type() {
    $labels = array(
        'name' => _x('FAQs', 'Post type general name', 'sacred-signal-os'),
        'singular_name' => _x('FAQ', 'Post type singular name', 'sacred-signal-os'),
        'menu_name' => _x('FAQs', 'Admin Menu text', 'sacred-signal-os'),
        'name_admin_bar' => _x('FAQ', 'Add New on Toolbar', 'sacred-signal-os'),
        'add_new' => __('Add New', 'sacred-signal-os'),
        'add_new_item' => __('Add New FAQ', 'sacred-signal-os'),
        'new_item' => __('New FAQ', 'sacred-signal-os'),
        'edit_item' => __('Edit FAQ', 'sacred-signal-os'),
        'view_item' => __('View FAQ', 'sacred-signal-os'),
        'all_items' => __('All FAQs', 'sacred-signal-os'),
        'search_items' => __('Search FAQs', 'sacred-signal-os'),
        'parent_item_colon' => __('Parent FAQs:', 'sacred-signal-os'),
        'not_found' => __('No FAQs found.', 'sacred-signal-os'),
        'not_found_in_trash' => __('No FAQs found in Trash.', 'sacred-signal-os'),
    );

    $args = array(
        'labels' => $labels,
        'public' => false,
        'publicly_queryable' => false,
        'show_ui' => true,
        'show_in_menu' => true,
        'query_var' => true,
        'rewrite' => array('slug' => 'faq'),
        'capability_type' => 'post',
        'has_archive' => false,
        'hierarchical' => false,
        'menu_position' => 22,
        'menu_icon' => 'dashicons-editor-help',
        'supports' => array('title', 'editor', 'custom-fields'),
        'show_in_rest' => true,
    );

    register_post_type('faq', $args);
}
add_action('init', 'sacred_signal_register_faq_post_type');

/**
 * Add custom taxonomies
 */
function sacred_signal_register_taxonomies() {
    // Testimonial Categories
    register_taxonomy('testimonial_category', 'testimonial', array(
        'labels' => array(
            'name' => __('Testimonial Categories', 'sacred-signal-os'),
            'singular_name' => __('Testimonial Category', 'sacred-signal-os'),
        ),
        'hierarchical' => true,
        'public' => false,
        'show_ui' => true,
        'show_admin_column' => true,
        'query_var' => true,
        'rewrite' => array('slug' => 'testimonial-category'),
        'show_in_rest' => true,
    ));

    // Module Categories
    register_taxonomy('module_category', 'module', array(
        'labels' => array(
            'name' => __('Module Categories', 'sacred-signal-os'),
            'singular_name' => __('Module Category', 'sacred-signal-os'),
        ),
        'hierarchical' => true,
        'public' => false,
        'show_ui' => true,
        'show_admin_column' => true,
        'query_var' => true,
        'rewrite' => array('slug' => 'module-category'),
        'show_in_rest' => true,
    ));

    // FAQ Categories
    register_taxonomy('faq_category', 'faq', array(
        'labels' => array(
            'name' => __('FAQ Categories', 'sacred-signal-os'),
            'singular_name' => __('FAQ Category', 'sacred-signal-os'),
        ),
        'hierarchical' => true,
        'public' => false,
        'show_ui' => true,
        'show_admin_column' => true,
        'query_var' => true,
        'rewrite' => array('slug' => 'faq-category'),
        'show_in_rest' => true,
    ));
}
add_action('init', 'sacred_signal_register_taxonomies');

/**
 * Add meta boxes for custom post types
 */
function sacred_signal_add_testimonial_meta_boxes() {
    add_meta_box(
        'testimonial-details',
        __('Testimonial Details', 'sacred-signal-os'),
        'sacred_signal_testimonial_meta_box_callback',
        'testimonial',
        'normal',
        'high'
    );
}
add_action('add_meta_boxes', 'sacred_signal_add_testimonial_meta_boxes');

/**
 * Testimonial meta box callback
 */
function sacred_signal_testimonial_meta_box_callback($post) {
    wp_nonce_field('save_testimonial_meta', 'testimonial_meta_nonce');
    
    $client_name = get_post_meta($post->ID, '_client_name', true);
    $client_title = get_post_meta($post->ID, '_client_title', true);
    $client_company = get_post_meta($post->ID, '_client_company', true);
    $rating = get_post_meta($post->ID, '_rating', true);
    $featured = get_post_meta($post->ID, '_featured', true);
    
    echo '<table class="form-table">';
    echo '<tr>';
    echo '<th><label for="client_name">' . __('Client Name', 'sacred-signal-os') . '</label></th>';
    echo '<td><input type="text" id="client_name" name="client_name" value="' . esc_attr($client_name) . '" class="regular-text" /></td>';
    echo '</tr>';
    echo '<tr>';
    echo '<th><label for="client_title">' . __('Client Title/Role', 'sacred-signal-os') . '</label></th>';
    echo '<td><input type="text" id="client_title" name="client_title" value="' . esc_attr($client_title) . '" class="regular-text" /></td>';
    echo '</tr>';
    echo '<tr>';
    echo '<th><label for="client_company">' . __('Client Company', 'sacred-signal-os') . '</label></th>';
    echo '<td><input type="text" id="client_company" name="client_company" value="' . esc_attr($client_company) . '" class="regular-text" /></td>';
    echo '</tr>';
    echo '<tr>';
    echo '<th><label for="rating">' . __('Rating (1-5)', 'sacred-signal-os') . '</label></th>';
    echo '<td><select id="rating" name="rating">';
    for ($i = 1; $i <= 5; $i++) {
        echo '<option value="' . $i . '"' . selected($rating, $i, false) . '>' . $i . ' Stars</option>';
    }
    echo '</select></td>';
    echo '</tr>';
    echo '<tr>';
    echo '<th><label for="featured">' . __('Featured Testimonial', 'sacred-signal-os') . '</label></th>';
    echo '<td><input type="checkbox" id="featured" name="featured" value="1"' . checked($featured, 1, false) . ' /></td>';
    echo '</tr>';
    echo '</table>';
}

/**
 * Save testimonial meta
 */
function sacred_signal_save_testimonial_meta($post_id) {
    if (!isset($_POST['testimonial_meta_nonce']) || !wp_verify_nonce($_POST['testimonial_meta_nonce'], 'save_testimonial_meta')) {
        return;
    }

    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return;
    }

    if (!current_user_can('edit_post', $post_id)) {
        return;
    }

    $fields = array('client_name', 'client_title', 'client_company', 'rating', 'featured');
    
    foreach ($fields as $field) {
        if (isset($_POST[$field])) {
            update_post_meta($post_id, '_' . $field, sanitize_text_field($_POST[$field]));
        }
    }
}
add_action('save_post', 'sacred_signal_save_testimonial_meta');