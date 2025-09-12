    </div><!-- #content -->

    <footer id="colophon" class="site-footer bg-card border-t border-border mt-16">
        <div class="container mx-auto px-6 py-12">
            <div class="text-center">
                <!-- Logo and Brand -->
                <div class="flex items-center justify-center space-x-3 mb-4">
                    <img 
                        src="<?php echo get_template_directory_uri(); ?>/assets/images/sacred-geometry-icon.png" 
                        alt="<?php bloginfo('name'); ?>" 
                        class="w-8 h-8"
                    />
                    <span class="text-xl font-semibold text-foreground">
                        <?php bloginfo('name'); ?>
                    </span>
                </div>
                
                <!-- Tagline -->
                <p class="text-lg text-muted-foreground mb-2">
                    <?php 
                    $tagline = get_theme_mod('footer_tagline', 'Transform Your Message. Amplify Your Impact. Build Your Sacred Signal.');
                    echo esc_html($tagline); 
                    ?>
                </p>
                
                <!-- Founder Info -->
                <div class="text-sm text-muted-foreground mb-6">
                    <p class="font-medium">
                        <?php 
                        $founder_name = get_theme_mod('founder_name', 'Barack El');
                        echo esc_html($founder_name); 
                        ?>
                    </p>
                    <p>
                        <?php 
                        $founder_title = get_theme_mod('founder_title', 'Founder & Strategic Architect');
                        echo esc_html($founder_title); 
                        ?>
                    </p>
                </div>
                
                <!-- Footer Menu -->
                <?php if (has_nav_menu('footer')) : ?>
                    <nav class="mb-6">
                        <?php
                        wp_nav_menu(array(
                            'theme_location' => 'footer',
                            'menu_class' => 'footer-nav flex justify-center space-x-6 text-sm',
                            'container' => false,
                            'fallback_cb' => false,
                        ));
                        ?>
                    </nav>
                <?php endif; ?>
                
                <!-- Copyright -->
                <div class="text-xs text-muted-foreground">
                    <p>&copy; <?php echo date('Y'); ?> <?php bloginfo('name'); ?>. <?php _e('All rights reserved.', 'sacred-signal-os'); ?></p>
                </div>
            </div>
        </div>

        <!-- Widget Area -->
        <?php if (is_active_sidebar('footer-widgets')) : ?>
            <div class="footer-widgets border-t border-border pt-8 mt-8">
                <div class="container mx-auto px-6">
                    <?php dynamic_sidebar('footer-widgets'); ?>
                </div>
            </div>
        <?php endif; ?>
    </footer>
</div><!-- #page -->

<?php wp_footer(); ?>

<script>
// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
</script>

</body>
</html>