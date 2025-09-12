/**
 * Theme Customizer enhancements for a better user experience.
 * 
 * Contains handlers to make Theme Customizer preview reload changes asynchronously.
 */

(function($) {
    'use strict';

    // Site title and description
    wp.customize('blogname', function(value) {
        value.bind(function(to) {
            $('.site-title').text(to);
        });
    });

    wp.customize('blogdescription', function(value) {
        value.bind(function(to) {
            $('.site-description').text(to);
        });
    });

    // Hero section customizations
    wp.customize('hero_title', function(value) {
        value.bind(function(to) {
            $('.hero-title').text(to);
        });
    });

    wp.customize('hero_subtitle', function(value) {
        value.bind(function(to) {
            $('.hero-subtitle').text(to);
        });
    });

    wp.customize('hero_cta_text', function(value) {
        value.bind(function(to) {
            $('.hero-cta').text(to);
        });
    });

    // About section
    wp.customize('about_title', function(value) {
        value.bind(function(to) {
            $('.about-title').text(to);
        });
    });

    wp.customize('about_description', function(value) {
        value.bind(function(to) {
            $('.about-description').text(to);
        });
    });

    // Program section
    wp.customize('program_title', function(value) {
        value.bind(function(to) {
            $('.program-title').text(to);
        });
    });

    wp.customize('program_subtitle', function(value) {
        value.bind(function(to) {
            $('.program-subtitle').text(to);
        });
    });

    wp.customize('program_price', function(value) {
        value.bind(function(to) {
            $('.program-price').text(to);
        });
    });

    // Founder section
    wp.customize('founder_name', function(value) {
        value.bind(function(to) {
            $('.founder-name').text(to);
        });
    });

    wp.customize('founder_title', function(value) {
        value.bind(function(to) {
            $('.founder-title').text(to);
        });
    });

    wp.customize('founder_bio', function(value) {
        value.bind(function(to) {
            $('.founder-bio').text(to);
        });
    });

    // Footer
    wp.customize('footer_tagline', function(value) {
        value.bind(function(to) {
            $('.footer-tagline').text(to);
        });
    });

    // Colors
    wp.customize('signal_color', function(value) {
        value.bind(function(to) {
            var style = '<style id="signal-color-customization">';
            style += '.text-signal, .btn-signal, .signal-element { color: ' + to + ' !important; }';
            style += '.bg-signal, .btn-signal { background-color: ' + to + ' !important; }';
            style += '.border-signal { border-color: ' + to + ' !important; }';
            style += '</style>';
            
            $('#signal-color-customization').remove();
            $('head').append(style);
        });
    });

    wp.customize('brass_color', function(value) {
        value.bind(function(to) {
            var style = '<style id="brass-color-customization">';
            style += '.text-brass, .brass-element { color: ' + to + ' !important; }';
            style += '.bg-brass { background-color: ' + to + ' !important; }';
            style += '.border-brass { border-color: ' + to + ' !important; }';
            style += '</style>';
            
            $('#brass-color-customization').remove();
            $('head').append(style);
        });
    });

    // Header textcolor
    wp.customize('header_textcolor', function(value) {
        value.bind(function(to) {
            if ('blank' === to) {
                $('.site-title, .site-description').css({
                    'clip': 'rect(1px, 1px, 1px, 1px)',
                    'position': 'absolute'
                });
            } else {
                $('.site-title, .site-description').css({
                    'clip': 'auto',
                    'position': 'relative'
                });
                $('.site-title, .site-description').css({
                    'color': to
                });
            }
        });
    });

    // Background color
    wp.customize('background_color', function(value) {
        value.bind(function(to) {
            $('body').css('background-color', to);
        });
    });

    // Contact information
    wp.customize('contact_email', function(value) {
        value.bind(function(to) {
            $('.contact-email').text(to).attr('href', 'mailto:' + to);
        });
    });

    wp.customize('support_email', function(value) {
        value.bind(function(to) {
            $('.support-email').text(to).attr('href', 'mailto:' + to);
        });
    });

    // Live preview for images
    wp.customize('founder_image', function(value) {
        value.bind(function(to) {
            $('.founder-image img').attr('src', to);
        });
    });

    // Handle custom logo changes
    wp.customize('custom_logo', function(value) {
        value.bind(function(to) {
            if (to) {
                // Logo added
                wp.customize('logo_image').get().then(function(logo_url) {
                    var logo_img = '<img src="' + logo_url + '" alt="' + wp.customize('blogname').get() + '" class="custom-logo">';
                    $('.site-branding .site-title').html('<a href="' + wp.customize('home_url').get() + '">' + logo_img + '</a>');
                });
            } else {
                // Logo removed
                $('.site-branding .site-title').html('<a href="' + wp.customize('home_url').get() + '">' + wp.customize('blogname').get() + '</a>');
            }
        });
    });

    // Add real-time preview for color changes with CSS custom properties
    function updateCSSCustomProperty(property, value) {
        document.documentElement.style.setProperty(property, value);
    }

    // Enhanced color customization with HSL conversion
    function hexToHsl(hex) {
        const r = parseInt(hex.substr(1, 2), 16) / 255;
        const g = parseInt(hex.substr(3, 2), 16) / 255;
        const b = parseInt(hex.substr(5, 2), 16) / 255;

        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        let h, s, l = (max + min) / 2;

        if (max === min) {
            h = s = 0;
        } else {
            const d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
            }
            h /= 6;
        }

        return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
    }

    // Update signal color with proper HSL values
    wp.customize('signal_color', function(value) {
        value.bind(function(to) {
            const hsl = hexToHsl(to);
            updateCSSCustomProperty('--signal', hsl.join(' '));
        });
    });

    // Update brass color with proper HSL values
    wp.customize('brass_color', function(value) {
        value.bind(function(to) {
            const hsl = hexToHsl(to);
            updateCSSCustomProperty('--brass', hsl.join(' '));
        });
    });

    // Smooth transitions for customizer changes
    $('body').addClass('customizer-preview');
    
    // Add CSS for smooth transitions during customization
    var customizer_css = '<style id="customizer-transitions">';
    customizer_css += '.customizer-preview * { transition: all 0.3s ease !important; }';
    customizer_css += '</style>';
    $('head').append(customizer_css);

})(jQuery);