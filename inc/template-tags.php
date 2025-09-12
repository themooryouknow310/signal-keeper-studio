<?php
/**
 * Custom template tags for Sacred Signal OS
 * 
 * @package Sacred_Signal_OS
 */

/**
 * Calculate reading time for posts
 */
function reading_time($post_id = null) {
    if (!$post_id) {
        global $post;
        $post_id = $post->ID;
    }
    
    $content = get_post_field('post_content', $post_id);
    $word_count = str_word_count(strip_tags($content));
    $reading_time = ceil($word_count / 200); // Average reading speed: 200 words per minute
    
    return $reading_time;
}

/**
 * Display testimonials
 */
function sacred_signal_get_testimonials($args = array()) {
    $default_args = array(
        'post_type' => 'testimonial',
        'posts_per_page' => -1,
        'post_status' => 'publish',
        'meta_query' => array(
            array(
                'key' => '_featured',
                'value' => '1',
                'compare' => '='
            )
        )
    );
    
    $args = wp_parse_args($args, $default_args);
    return new WP_Query($args);
}

/**
 * Display program modules
 */
function sacred_signal_get_modules($args = array()) {
    $default_args = array(
        'post_type' => 'module',
        'posts_per_page' => -1,
        'post_status' => 'publish',
        'orderby' => 'menu_order',
        'order' => 'ASC'
    );
    
    $args = wp_parse_args($args, $default_args);
    return new WP_Query($args);
}

/**
 * Display FAQs
 */
function sacred_signal_get_faqs($args = array()) {
    $default_args = array(
        'post_type' => 'faq',
        'posts_per_page' => -1,
        'post_status' => 'publish',
        'orderby' => 'menu_order',
        'order' => 'ASC'
    );
    
    $args = wp_parse_args($args, $default_args);
    return new WP_Query($args);
}

/**
 * Get customizer option with fallback
 */
function sacred_signal_get_option($option, $default = '') {
    return get_theme_mod($option, $default);
}

/**
 * Display star rating
 */
function sacred_signal_star_rating($rating, $max_rating = 5) {
    $output = '<div class="star-rating" data-rating="' . esc_attr($rating) . '">';
    
    for ($i = 1; $i <= $max_rating; $i++) {
        if ($i <= $rating) {
            $output .= '<span class="star filled">★</span>';
        } else {
            $output .= '<span class="star">☆</span>';
        }
    }
    
    $output .= '</div>';
    return $output;
}

/**
 * Format price display
 */
function sacred_signal_format_price($price) {
    // Remove any existing formatting
    $clean_price = preg_replace('/[^0-9.]/', '', $price);
    
    if (is_numeric($clean_price)) {
        return '$' . number_format($clean_price, 0);
    }
    
    return $price;
}

/**
 * Get breadcrumbs
 */
function sacred_signal_breadcrumbs() {
    if (is_home() || is_front_page()) {
        return;
    }
    
    $breadcrumb = '<nav class="breadcrumbs" aria-label="Breadcrumb navigation">';
    $breadcrumb .= '<a href="' . home_url('/') . '">' . __('Home', 'sacred-signal-os') . '</a>';
    
    if (is_category() || is_single()) {
        $breadcrumb .= ' / ';
        if (is_single()) {
            $category = get_the_category();
            if (!empty($category)) {
                $breadcrumb .= '<a href="' . get_category_link($category[0]->term_id) . '">' . $category[0]->name . '</a> / ';
            }
            $breadcrumb .= '<span class="current">' . get_the_title() . '</span>';
        } else {
            $breadcrumb .= '<span class="current">' . single_cat_title('', false) . '</span>';
        }
    } elseif (is_page()) {
        $breadcrumb .= ' / <span class="current">' . get_the_title() . '</span>';
    } elseif (is_search()) {
        $breadcrumb .= ' / <span class="current">' . __('Search Results', 'sacred-signal-os') . '</span>';
    } elseif (is_404()) {
        $breadcrumb .= ' / <span class="current">' . __('Page Not Found', 'sacred-signal-os') . '</span>';
    }
    
    $breadcrumb .= '</nav>';
    return $breadcrumb;
}

/**
 * Social sharing buttons
 */
function sacred_signal_social_sharing() {
    if (!is_single()) {
        return;
    }
    
    $post_url = get_permalink();
    $post_title = get_the_title();
    $post_excerpt = get_the_excerpt();
    
    $facebook_url = 'https://www.facebook.com/sharer/sharer.php?u=' . urlencode($post_url);
    $twitter_url = 'https://twitter.com/intent/tweet?url=' . urlencode($post_url) . '&text=' . urlencode($post_title);
    $linkedin_url = 'https://www.linkedin.com/sharing/share-offsite/?url=' . urlencode($post_url);
    
    $output = '<div class="social-sharing">';
    $output .= '<h4>' . __('Share this post:', 'sacred-signal-os') . '</h4>';
    $output .= '<div class="social-links">';
    $output .= '<a href="' . $facebook_url . '" target="_blank" rel="noopener" class="social-link facebook" aria-label="Share on Facebook">Facebook</a>';
    $output .= '<a href="' . $twitter_url . '" target="_blank" rel="noopener" class="social-link twitter" aria-label="Share on Twitter">Twitter</a>';
    $output .= '<a href="' . $linkedin_url . '" target="_blank" rel="noopener" class="social-link linkedin" aria-label="Share on LinkedIn">LinkedIn</a>';
    $output .= '</div>';
    $output .= '</div>';
    
    return $output;
}

/**
 * Get related posts
 */
function sacred_signal_get_related_posts($post_id = null, $limit = 3) {
    if (!$post_id) {
        global $post;
        $post_id = $post->ID;
    }
    
    $categories = wp_get_post_categories($post_id);
    
    if (empty($categories)) {
        return new WP_Query();
    }
    
    $args = array(
        'post_type' => 'post',
        'posts_per_page' => $limit,
        'post__not_in' => array($post_id),
        'category__in' => $categories,
        'orderby' => 'rand'
    );
    
    return new WP_Query($args);
}

/**
 * Output schema markup for testimonials
 */
function sacred_signal_testimonial_schema($testimonial_id) {
    $client_name = get_post_meta($testimonial_id, '_client_name', true);
    $rating = get_post_meta($testimonial_id, '_rating', true);
    $content = get_post_field('post_content', $testimonial_id);
    
    $schema = array(
        '@context' => 'https://schema.org',
        '@type' => 'Review',
        'author' => array(
            '@type' => 'Person',
            'name' => $client_name
        ),
        'reviewBody' => strip_tags($content),
        'reviewRating' => array(
            '@type' => 'Rating',
            'ratingValue' => $rating,
            'bestRating' => '5'
        ),
        'itemReviewed' => array(
            '@type' => 'Service',
            'name' => 'Sacred Signal OS'
        )
    );
    
    return '<script type="application/ld+json">' . json_encode($schema, JSON_UNESCAPED_SLASHES) . '</script>';
}