/**
 * Sacred Signal OS - Main JavaScript
 */

(function($) {
    'use strict';

    // Initialize when DOM is ready
    $(document).ready(function() {
        console.log('Sacred Signal OS: Initializing...');
        initNavigation();
        initSmoothScrolling();
        initScrollSpy();
        initFormHandling();
        initAnimations();
        initVideoPlayers();
        initTestimonialSlider();
        initBlogFilters();
        console.log('Sacred Signal OS: All systems initialized');
    });

    /**
     * Navigation Functions
     */
    function initNavigation() {
        // Mobile menu toggle
        $('#mobile-menu-button').on('click', function() {
            const $btn = $(this);
            const $menu = $('#mobile-menu');
            $menu.toggleClass('is-open');
            const isOpen = $menu.hasClass('is-open');
            $btn.toggleClass('active', isOpen).attr('aria-expanded', String(isOpen));
        });

        // Close mobile menu when clicking outside
        $(document).on('click', function(e) {
            if (!$(e.target).closest('#masthead').length) {
                $('#mobile-menu').removeClass('is-open');
                $('#mobile-menu-button').removeClass('active').attr('aria-expanded', 'false');
            }
        });

        // Sticky navigation
        let lastScrollTop = 0;
        const header = $('#masthead');
        
        $(window).scroll(function() {
            const scrollTop = $(this).scrollTop();
            
            if (scrollTop > 100) {
                header.addClass('scrolled');
            } else {
                header.removeClass('scrolled');
            }
            
            // Hide/show on scroll
            if (scrollTop > lastScrollTop && scrollTop > 200) {
                header.addClass('nav-hidden');
            } else {
                header.removeClass('nav-hidden');
            }
            
            lastScrollTop = scrollTop;
        });
    }

    /**
     * Smooth Scrolling
     */
    function initSmoothScrolling() {
        console.log('Sacred Signal OS: Setting up smooth scrolling...');
        
        // Handle anchor links with robust URL checking
        $('a[href*="#"]').on('click', function(e) {
            const $this = $(this);
            const href = $this.attr('href');
            console.log('Click detected on link:', href);
            
            if (!href || href === '#') return;
            
            let targetId;
            let isSamePage = false;
            
            // Determine if this is a same-page anchor
            if (href.startsWith('#')) {
                // Direct hash link
                targetId = href.substring(1);
                isSamePage = true;
            } else if (href.includes('#')) {
                // Full URL with hash
                const [url, fragment] = href.split('#');
                const currentPath = window.location.pathname;
                const currentOrigin = window.location.origin;
                
                // Normalize URLs for comparison
                const linkPath = url.replace(currentOrigin, '').replace(/\/$/, '') || '/';
                const normalizedCurrentPath = currentPath.replace(/\/$/, '') || '/';
                
                console.log('Comparing paths:', linkPath, 'vs', normalizedCurrentPath);
                
                if (linkPath === normalizedCurrentPath) {
                    targetId = fragment;
                    isSamePage = true;
                }
            }
            
            if (isSamePage && targetId) {
                const target = $('#' + targetId);
                console.log('Looking for target:', targetId, 'Found:', target.length > 0);
                
                if (target.length) {
                    e.preventDefault();
                    
                    // Close mobile menu if open
                    $('#mobile-menu').removeClass('is-open');
                    $('#mobile-menu-button').removeClass('active');
                    
                    // Smooth scroll with proper offset
                    $('html, body').animate({
                        scrollTop: target.offset().top - 80
                    }, 800, 'easeInOutCubic');
                    
                    console.log('Scrolling to:', targetId);
                }
            }
        });
    }

    /**
     * ScrollSpy for Navigation
     */
    function initScrollSpy() {
        console.log('Sacred Signal OS: Setting up scrollspy...');
        
        const sections = $('section[id]');
        const navLinks = $('.nav-menu a[href*="#"], .mobile-nav-menu a[href*="#"]');
        
        if (sections.length === 0) return;
        
        function updateActiveLink() {
            let currentSection = null;
            const scrollTop = $(window).scrollTop() + 100; // Offset for header
            
            sections.each(function() {
                const section = $(this);
                const sectionTop = section.offset().top;
                const sectionBottom = sectionTop + section.outerHeight();
                
                if (scrollTop >= sectionTop && scrollTop < sectionBottom) {
                    currentSection = section.attr('id');
                }
            });
            
            // Update nav link active states
            navLinks.removeClass('is-active');
            if (currentSection) {
                navLinks.filter(`[href*="#${currentSection}"]`).addClass('is-active');
            }
        }
        
        // Throttled scroll handler
        let scrollTimer;
        $(window).on('scroll', function() {
            if (scrollTimer) clearTimeout(scrollTimer);
            scrollTimer = setTimeout(updateActiveLink, 10);
        });
        
        // Initial check
        updateActiveLink();
    }

    /**
     * Form Handling
     */
    function initFormHandling() {
        // Application form
        $('#application-form').on('submit', function(e) {
            e.preventDefault();
            
            const form = $(this);
            const submitBtn = form.find('button[type="submit"]');
            const originalText = submitBtn.text();
            
            // Show loading state
            submitBtn.prop('disabled', true)
                     .html('<span class="loading-spinner"></span> Processing...');
            
            // Prepare form data
            const formData = {
                action: 'submit_application',
                nonce: sacred_signal_ajax.nonce,
                name: form.find('input[name="name"]').val(),
                email: form.find('input[name="email"]').val()
            };
            
            // Submit via AJAX
            $.post(sacred_signal_ajax.ajax_url, formData)
                .done(function(response) {
                    if (response.success) {
                        showNotification('Success!', response.data.message, 'success');
                        form[0].reset();
                        
                        // Redirect if specified
                        if (response.data.redirect) {
                            setTimeout(function() {
                                window.location.href = response.data.redirect;
                            }, 1500);
                        }
                    } else {
                        showNotification('Error', response.data.message || 'Something went wrong.', 'error');
                    }
                })
                .fail(function() {
                    showNotification('Error', 'Network error. Please try again.', 'error');
                })
                .always(function() {
                    submitBtn.prop('disabled', false).text(originalText);
                });
        });

        // Newsletter form
        $('#newsletter-form').on('submit', function(e) {
            e.preventDefault();
            
            const form = $(this);
            const email = form.find('input[name="email"]').val();
            const submitBtn = form.find('button[type="submit"]');
            
            if (!isValidEmail(email)) {
                showNotification('Error', 'Please enter a valid email address.', 'error');
                return;
            }
            
            submitBtn.prop('disabled', true).text('Subscribing...');
            
            // Simulate subscription (replace with actual implementation)
            setTimeout(function() {
                showNotification('Success!', 'You\'ve been subscribed to our newsletter.', 'success');
                form[0].reset();
                submitBtn.prop('disabled', false).text('Subscribe');
            }, 1000);
        });
    }

    /**
     * Animations
     */
    function initAnimations() {
        // Intersection Observer for fade-in animations
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-in');
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.15,
                rootMargin: '0px 0px -50px 0px'
            });

            // Observe elements with animation classes
            $('.animate-on-scroll, .motion-fade').each(function() {
                observer.observe(this);
            });
        }

        // Stagger animations for groups
        $('.stagger-children').each(function() {
            const children = $(this).children();
            children.each(function(index) {
                $(this).css('animation-delay', (index * 0.1) + 's');
            });
        });
    }

    /**
     * Video Players
     */
    function initVideoPlayers() {
        $('.cinema-video-container').each(function() {
            const container = $(this);
            const video = container.find('video');
            const playBtn = container.find('.cinema-play-button');
            const overlay = container.find('.cinema-video-overlay');

            playBtn.on('click', function() {
                if (video[0].paused) {
                    video[0].play();
                    overlay.fadeOut();
                } else {
                    video[0].pause();
                    overlay.fadeIn();
                }
            });

            video.on('click', function() {
                if (this.paused) {
                    this.play();
                    overlay.fadeOut();
                } else {
                    this.pause();
                    overlay.fadeIn();
                }
            });

            video.on('ended', function() {
                overlay.fadeIn();
            });
        });
    }

    /**
     * Testimonial Slider
     */
    function initTestimonialSlider() {
        const slider = $('.testimonial-slider');
        if (slider.length && typeof Swiper !== 'undefined') {
            new Swiper('.testimonial-slider', {
                slidesPerView: 1,
                spaceBetween: 30,
                loop: true,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                breakpoints: {
                    768: {
                        slidesPerView: 2
                    },
                    1024: {
                        slidesPerView: 3
                    }
                }
            });
        }
    }

    /**
     * Blog Filters
     */
    function initBlogFilters() {
        $('.category-badge').on('click', function() {
            const category = $(this).data('category');
            const badges = $('.category-badge');
            const articles = $('.blog-card');

            // Update active state
            badges.removeClass('active');
            $(this).addClass('active');

            // Filter articles
            if (category === 'all') {
                articles.fadeIn();
            } else {
                articles.each(function() {
                    const articleCategories = $(this).data('categories');
                    if (articleCategories && articleCategories.includes(category)) {
                        $(this).fadeIn();
                    } else {
                        $(this).fadeOut();
                    }
                });
            }
        });
    }

    /**
     * Utility Functions
     */
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function showNotification(title, message, type) {
        const notification = $('<div class="notification notification-' + type + '">' +
            '<div class="notification-content">' +
                '<h4>' + title + '</h4>' +
                '<p>' + message + '</p>' +
            '</div>' +
            '<button class="notification-close">&times;</button>' +
        '</div>');

        $('body').append(notification);

        // Show notification
        setTimeout(function() {
            notification.addClass('show');
        }, 100);

        // Auto hide after 5 seconds
        setTimeout(function() {
            hideNotification(notification);
        }, 5000);

        // Close button
        notification.find('.notification-close').on('click', function() {
            hideNotification(notification);
        });
    }

    function hideNotification(notification) {
        notification.removeClass('show');
        setTimeout(function() {
            notification.remove();
        }, 300);
    }

    // Easing function for smooth scrolling
    $.easing.easeInOutCubic = function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t + 2) + b;
    };

    // Add notification styles
    $('<style>')
        .prop('type', 'text/css')
        .html(`
            .notification {
                position: fixed;
                top: 20px;
                right: 20px;
                background: hsl(var(--card));
                border: 1px solid hsl(var(--border));
                border-radius: var(--radius);
                padding: 1rem;
                max-width: 300px;
                z-index: 1000;
                transform: translateX(100%);
                transition: transform 0.3s ease;
                box-shadow: var(--shadow-lg);
            }
            
            .notification.show {
                transform: translateX(0);
            }
            
            .notification-success {
                border-left: 4px solid hsl(var(--signal));
            }
            
            .notification-error {
                border-left: 4px solid hsl(var(--destructive));
            }
            
            .notification-content h4 {
                margin: 0 0 0.5rem 0;
                font-size: 0.875rem;
                font-weight: 600;
                color: hsl(var(--foreground));
            }
            
            .notification-content p {
                margin: 0;
                font-size: 0.75rem;
                color: hsl(var(--muted-foreground));
                line-height: 1.4;
            }
            
            .notification-close {
                position: absolute;
                top: 0.5rem;
                right: 0.5rem;
                background: none;
                border: none;
                font-size: 1.2rem;
                color: hsl(var(--muted-foreground));
                cursor: pointer;
                padding: 0;
                width: 20px;
                height: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .notification-close:hover {
                color: hsl(var(--foreground));
            }
        `)
        .appendTo('head');

})(jQuery);