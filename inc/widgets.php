<?php
/**
 * Widget Areas for Sacred Signal OS
 * 
 * @package Sacred_Signal_OS
 */

/**
 * Register widget areas
 */
function sacred_signal_widgets_init() {
    // Footer Widgets
    register_sidebar(array(
        'name' => __('Footer Widgets', 'sacred-signal-os'),
        'id' => 'footer-widgets',
        'description' => __('Add widgets here to appear in your footer.', 'sacred-signal-os'),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget' => '</section>',
        'before_title' => '<h3 class="widget-title">',
        'after_title' => '</h3>',
    ));
    
    // Sidebar
    register_sidebar(array(
        'name' => __('Primary Sidebar', 'sacred-signal-os'),
        'id' => 'sidebar-1',
        'description' => __('Add widgets here to appear in your sidebar.', 'sacred-signal-os'),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget' => '</section>',
        'before_title' => '<h3 class="widget-title">',
        'after_title' => '</h3>',
    ));
    
    // Homepage Widgets
    register_sidebar(array(
        'name' => __('Homepage Widgets', 'sacred-signal-os'),
        'id' => 'homepage-widgets',
        'description' => __('Add widgets here to appear on your homepage.', 'sacred-signal-os'),
        'before_widget' => '<section id="%1$s" class="widget homepage-widget %2$s">',
        'after_widget' => '</section>',
        'before_title' => '<h3 class="widget-title heading-ritual">',
        'after_title' => '</h3>',
    ));
    
    // Blog Sidebar
    register_sidebar(array(
        'name' => __('Blog Sidebar', 'sacred-signal-os'),
        'id' => 'blog-sidebar',
        'description' => __('Add widgets here to appear in your blog sidebar.', 'sacred-signal-os'),
        'before_widget' => '<section id="%1$s" class="widget blog-widget %2$s">',
        'after_widget' => '</section>',
        'before_title' => '<h3 class="widget-title">',
        'after_title' => '</h3>',
    ));
}
add_action('widgets_init', 'sacred_signal_widgets_init');

/**
 * Custom Newsletter Widget
 */
class Sacred_Signal_Newsletter_Widget extends WP_Widget {
    
    public function __construct() {
        parent::__construct(
            'sacred_signal_newsletter',
            __('Sacred Signal Newsletter', 'sacred-signal-os'),
            array(
                'description' => __('A newsletter signup form widget.', 'sacred-signal-os')
            )
        );
    }
    
    public function widget($args, $instance) {
        echo $args['before_widget'];
        
        if (!empty($instance['title'])) {
            echo $args['before_title'] . apply_filters('widget_title', $instance['title']) . $args['after_title'];
        }
        
        $description = !empty($instance['description']) ? $instance['description'] : '';
        $button_text = !empty($instance['button_text']) ? $instance['button_text'] : __('Subscribe', 'sacred-signal-os');
        
        ?>
        <div class="newsletter-widget">
            <?php if ($description): ?>
                <p class="newsletter-description"><?php echo esc_html($description); ?></p>
            <?php endif; ?>
            
            <form class="newsletter-form" method="post" action="<?php echo admin_url('admin-ajax.php'); ?>">
                <?php wp_nonce_field('newsletter_signup', 'newsletter_nonce'); ?>
                <input type="hidden" name="action" value="newsletter_signup">
                
                <div class="form-group">
                    <input type="email" name="email" placeholder="<?php _e('Your email address', 'sacred-signal-os'); ?>" required class="form-input">
                </div>
                
                <div class="form-group">
                    <input type="text" name="name" placeholder="<?php _e('Your name (optional)', 'sacred-signal-os'); ?>" class="form-input">
                </div>
                
                <button type="submit" class="btn-signal w-full">
                    <?php echo esc_html($button_text); ?>
                </button>
            </form>
        </div>
        <?php
        
        echo $args['after_widget'];
    }
    
    public function form($instance) {
        $title = !empty($instance['title']) ? $instance['title'] : __('Join Our Newsletter', 'sacred-signal-os');
        $description = !empty($instance['description']) ? $instance['description'] : '';
        $button_text = !empty($instance['button_text']) ? $instance['button_text'] : __('Subscribe', 'sacred-signal-os');
        ?>
        <p>
            <label for="<?php echo esc_attr($this->get_field_id('title')); ?>"><?php _e('Title:', 'sacred-signal-os'); ?></label>
            <input class="widefat" id="<?php echo esc_attr($this->get_field_id('title')); ?>" name="<?php echo esc_attr($this->get_field_name('title')); ?>" type="text" value="<?php echo esc_attr($title); ?>">
        </p>
        
        <p>
            <label for="<?php echo esc_attr($this->get_field_id('description')); ?>"><?php _e('Description:', 'sacred-signal-os'); ?></label>
            <textarea class="widefat" id="<?php echo esc_attr($this->get_field_id('description')); ?>" name="<?php echo esc_attr($this->get_field_name('description')); ?>" rows="3"><?php echo esc_textarea($description); ?></textarea>
        </p>
        
        <p>
            <label for="<?php echo esc_attr($this->get_field_id('button_text')); ?>"><?php _e('Button Text:', 'sacred-signal-os'); ?></label>
            <input class="widefat" id="<?php echo esc_attr($this->get_field_id('button_text')); ?>" name="<?php echo esc_attr($this->get_field_name('button_text')); ?>" type="text" value="<?php echo esc_attr($button_text); ?>">
        </p>
        <?php
    }
    
    public function update($new_instance, $old_instance) {
        $instance = array();
        $instance['title'] = (!empty($new_instance['title'])) ? sanitize_text_field($new_instance['title']) : '';
        $instance['description'] = (!empty($new_instance['description'])) ? sanitize_textarea_field($new_instance['description']) : '';
        $instance['button_text'] = (!empty($new_instance['button_text'])) ? sanitize_text_field($new_instance['button_text']) : '';
        
        return $instance;
    }
}

/**
 * Custom Testimonials Widget
 */
class Sacred_Signal_Testimonials_Widget extends WP_Widget {
    
    public function __construct() {
        parent::__construct(
            'sacred_signal_testimonials',
            __('Sacred Signal Testimonials', 'sacred-signal-os'),
            array(
                'description' => __('Display featured testimonials.', 'sacred-signal-os')
            )
        );
    }
    
    public function widget($args, $instance) {
        echo $args['before_widget'];
        
        if (!empty($instance['title'])) {
            echo $args['before_title'] . apply_filters('widget_title', $instance['title']) . $args['after_title'];
        }
        
        $count = !empty($instance['count']) ? intval($instance['count']) : 3;
        
        $testimonials = new WP_Query(array(
            'post_type' => 'testimonial',
            'posts_per_page' => $count,
            'post_status' => 'publish',
            'meta_key' => '_featured',
            'meta_value' => '1'
        ));
        
        if ($testimonials->have_posts()): ?>
            <div class="testimonials-widget">
                <?php while ($testimonials->have_posts()): $testimonials->the_post(); ?>
                    <div class="testimonial-item">
                        <div class="testimonial-content">
                            <?php the_content(); ?>
                        </div>
                        <div class="testimonial-author">
                            <strong><?php echo get_post_meta(get_the_ID(), '_client_name', true); ?></strong>
                            <?php if ($title = get_post_meta(get_the_ID(), '_client_title', true)): ?>
                                <span class="author-title"><?php echo esc_html($title); ?></span>
                            <?php endif; ?>
                        </div>
                        <?php if ($rating = get_post_meta(get_the_ID(), '_rating', true)): ?>
                            <div class="testimonial-rating">
                                <?php echo sacred_signal_star_rating($rating); ?>
                            </div>
                        <?php endif; ?>
                    </div>
                <?php endwhile; ?>
            </div>
        <?php endif;
        
        wp_reset_postdata();
        echo $args['after_widget'];
    }
    
    public function form($instance) {
        $title = !empty($instance['title']) ? $instance['title'] : __('What Our Clients Say', 'sacred-signal-os');
        $count = !empty($instance['count']) ? $instance['count'] : 3;
        ?>
        <p>
            <label for="<?php echo esc_attr($this->get_field_id('title')); ?>"><?php _e('Title:', 'sacred-signal-os'); ?></label>
            <input class="widefat" id="<?php echo esc_attr($this->get_field_id('title')); ?>" name="<?php echo esc_attr($this->get_field_name('title')); ?>" type="text" value="<?php echo esc_attr($title); ?>">
        </p>
        
        <p>
            <label for="<?php echo esc_attr($this->get_field_id('count')); ?>"><?php _e('Number of testimonials to show:', 'sacred-signal-os'); ?></label>
            <input class="tiny-text" id="<?php echo esc_attr($this->get_field_id('count')); ?>" name="<?php echo esc_attr($this->get_field_name('count')); ?>" type="number" step="1" min="1" value="<?php echo esc_attr($count); ?>" size="3">
        </p>
        <?php
    }
    
    public function update($new_instance, $old_instance) {
        $instance = array();
        $instance['title'] = (!empty($new_instance['title'])) ? sanitize_text_field($new_instance['title']) : '';
        $instance['count'] = (!empty($new_instance['count'])) ? absint($new_instance['count']) : 3;
        
        return $instance;
    }
}

/**
 * Custom Recent Posts Widget
 */
class Sacred_Signal_Recent_Posts_Widget extends WP_Widget {
    
    public function __construct() {
        parent::__construct(
            'sacred_signal_recent_posts',
            __('Sacred Signal Recent Posts', 'sacred-signal-os'),
            array(
                'description' => __('Display recent blog posts with thumbnails.', 'sacred-signal-os')
            )
        );
    }
    
    public function widget($args, $instance) {
        echo $args['before_widget'];
        
        if (!empty($instance['title'])) {
            echo $args['before_title'] . apply_filters('widget_title', $instance['title']) . $args['after_title'];
        }
        
        $count = !empty($instance['count']) ? intval($instance['count']) : 5;
        $show_date = isset($instance['show_date']) ? $instance['show_date'] : true;
        $show_excerpt = isset($instance['show_excerpt']) ? $instance['show_excerpt'] : true;
        
        $recent_posts = new WP_Query(array(
            'post_type' => 'post',
            'posts_per_page' => $count,
            'post_status' => 'publish'
        ));
        
        if ($recent_posts->have_posts()): ?>
            <div class="recent-posts-widget">
                <?php while ($recent_posts->have_posts()): $recent_posts->the_post(); ?>
                    <article class="recent-post-item">
                        <?php if (has_post_thumbnail()): ?>
                            <div class="post-thumbnail">
                                <a href="<?php the_permalink(); ?>">
                                    <?php the_post_thumbnail('thumbnail'); ?>
                                </a>
                            </div>
                        <?php endif; ?>
                        
                        <div class="post-content">
                            <h4 class="post-title">
                                <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                            </h4>
                            
                            <?php if ($show_date): ?>
                                <div class="post-date"><?php echo get_the_date(); ?></div>
                            <?php endif; ?>
                            
                            <?php if ($show_excerpt): ?>
                                <div class="post-excerpt">
                                    <?php echo wp_trim_words(get_the_excerpt(), 15); ?>
                                </div>
                            <?php endif; ?>
                        </div>
                    </article>
                <?php endwhile; ?>
            </div>
        <?php endif;
        
        wp_reset_postdata();
        echo $args['after_widget'];
    }
    
    public function form($instance) {
        $title = !empty($instance['title']) ? $instance['title'] : __('Recent Posts', 'sacred-signal-os');
        $count = !empty($instance['count']) ? $instance['count'] : 5;
        $show_date = isset($instance['show_date']) ? (bool) $instance['show_date'] : true;
        $show_excerpt = isset($instance['show_excerpt']) ? (bool) $instance['show_excerpt'] : true;
        ?>
        <p>
            <label for="<?php echo esc_attr($this->get_field_id('title')); ?>"><?php _e('Title:', 'sacred-signal-os'); ?></label>
            <input class="widefat" id="<?php echo esc_attr($this->get_field_id('title')); ?>" name="<?php echo esc_attr($this->get_field_name('title')); ?>" type="text" value="<?php echo esc_attr($title); ?>">
        </p>
        
        <p>
            <label for="<?php echo esc_attr($this->get_field_id('count')); ?>"><?php _e('Number of posts to show:', 'sacred-signal-os'); ?></label>
            <input class="tiny-text" id="<?php echo esc_attr($this->get_field_id('count')); ?>" name="<?php echo esc_attr($this->get_field_name('count')); ?>" type="number" step="1" min="1" value="<?php echo esc_attr($count); ?>" size="3">
        </p>
        
        <p>
            <input class="checkbox" type="checkbox" <?php checked($show_date); ?> id="<?php echo esc_attr($this->get_field_id('show_date')); ?>" name="<?php echo esc_attr($this->get_field_name('show_date')); ?>">
            <label for="<?php echo esc_attr($this->get_field_id('show_date')); ?>"><?php _e('Show post date?', 'sacred-signal-os'); ?></label>
        </p>
        
        <p>
            <input class="checkbox" type="checkbox" <?php checked($show_excerpt); ?> id="<?php echo esc_attr($this->get_field_id('show_excerpt')); ?>" name="<?php echo esc_attr($this->get_field_name('show_excerpt')); ?>">
            <label for="<?php echo esc_attr($this->get_field_id('show_excerpt')); ?>"><?php _e('Show post excerpt?', 'sacred-signal-os'); ?></label>
        </p>
        <?php
    }
    
    public function update($new_instance, $old_instance) {
        $instance = array();
        $instance['title'] = (!empty($new_instance['title'])) ? sanitize_text_field($new_instance['title']) : '';
        $instance['count'] = (!empty($new_instance['count'])) ? absint($new_instance['count']) : 5;
        $instance['show_date'] = !empty($new_instance['show_date']) ? 1 : 0;
        $instance['show_excerpt'] = !empty($new_instance['show_excerpt']) ? 1 : 0;
        
        return $instance;
    }
}

/**
 * Register custom widgets
 */
function sacred_signal_register_widgets() {
    register_widget('Sacred_Signal_Newsletter_Widget');
    register_widget('Sacred_Signal_Testimonials_Widget');
    register_widget('Sacred_Signal_Recent_Posts_Widget');
}
add_action('widgets_init', 'sacred_signal_register_widgets');