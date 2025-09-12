<?php
/**
 * Template for Blog page
 * 
 * @package Sacred_Signal_OS
 */

get_header(); ?>

<main id="primary" class="site-main">
    <div class="blog-page py-20">
        
        <!-- Hero Section -->
        <section class="hero-section py-20 bg-gradient-to-br from-background to-muted">
            <div class="container mx-auto px-6">
                <div class="text-center max-w-4xl mx-auto">
                    <h1 class="heading-ritual text-5xl md:text-6xl font-bold mb-8 text-foreground">
                        <?php echo get_field('blog_title') ?: 'Sacred Signals Blog'; ?>
                    </h1>
                    <p class="body-premium text-xl text-muted-foreground mb-12 leading-relaxed">
                        <?php echo get_field('blog_description') ?: 'Insights, strategies, and wisdom for spiritual entrepreneurs building authentic, profitable businesses.'; ?>
                    </p>
                </div>
            </div>
        </section>

        <!-- Blog Posts -->
        <section class="py-20">
            <div class="container mx-auto px-6">
                
                <?php
                $paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
                $blog_query = new WP_Query(array(
                    'post_type' => 'post',
                    'posts_per_page' => 9,
                    'paged' => $paged,
                    'post_status' => 'publish'
                ));
                
                if ($blog_query->have_posts()) : ?>
                    
                    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        <?php while ($blog_query->have_posts()) : $blog_query->the_post(); ?>
                            <article class="card overflow-hidden hover:shadow-lg transition-all duration-300 group">
                                <?php if (has_post_thumbnail()) : ?>
                                    <div class="aspect-video overflow-hidden">
                                        <a href="<?php the_permalink(); ?>">
                                            <?php the_post_thumbnail('large', array('class' => 'w-full h-full object-cover group-hover:scale-105 transition-transform duration-300')); ?>
                                        </a>
                                    </div>
                                <?php endif; ?>
                                
                                <div class="p-6">
                                    <div class="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                                        <time datetime="<?php echo get_the_date('c'); ?>"><?php echo get_the_date(); ?></time>
                                        <span>•</span>
                                        <span><?php echo reading_time(); ?> min read</span>
                                    </div>
                                    
                                    <h2 class="heading-ritual text-xl font-bold mb-3 text-foreground group-hover:text-signal transition-colors">
                                        <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                                    </h2>
                                    
                                    <p class="body-premium text-muted-foreground mb-4">
                                        <?php echo wp_trim_words(get_the_excerpt(), 20); ?>
                                    </p>
                                    
                                    <a href="<?php the_permalink(); ?>" class="text-signal font-semibold hover:text-signal/80 transition-colors">
                                        <?php _e('Read More →', 'sacred-signal-os'); ?>
                                    </a>
                                </div>
                            </article>
                        <?php endwhile; ?>
                    </div>
                    
                    <!-- Pagination -->
                    <?php if ($blog_query->max_num_pages > 1) : ?>
                        <nav class="pagination-nav">
                            <div class="flex justify-center space-x-4">
                                <?php
                                echo paginate_links(array(
                                    'base' => str_replace(999999999, '%#%', esc_url(get_pagenum_link(999999999))),
                                    'format' => '?paged=%#%',
                                    'current' => max(1, get_query_var('paged')),
                                    'total' => $blog_query->max_num_pages,
                                    'prev_text' => '← Previous',
                                    'next_text' => 'Next →',
                                    'class' => 'btn-secondary'
                                ));
                                ?>
                            </div>
                        </nav>
                    <?php endif; ?>
                    
                <?php else : ?>
                    
                    <div class="text-center py-20">
                        <h2 class="heading-ritual text-3xl font-bold mb-4 text-foreground">
                            <?php _e('No Posts Found', 'sacred-signal-os'); ?>
                        </h2>
                        <p class="body-premium text-muted-foreground">
                            <?php _e('Check back soon for inspiring content and strategic insights.', 'sacred-signal-os'); ?>
                        </p>
                    </div>
                    
                <?php endif; wp_reset_postdata(); ?>
                
            </div>
        </section>

    </div>
</main>

<?php get_footer(); ?>