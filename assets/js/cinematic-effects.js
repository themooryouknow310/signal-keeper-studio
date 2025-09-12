/**
 * Sacred Signal OS - Cinematic Effects & Animations
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Initialize video controls
    initVideoControls();
    
    // Initialize mobile menu
    initMobileMenu();
    
    // Initialize stagger animations
    initStaggerAnimations();
    
});

/**
 * Scroll-triggered animations
 */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, observerOptions);
    
    // Observe all elements with animate-on-scroll class
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

/**
 * Video player controls
 */
function initVideoControls() {
    const videoContainers = document.querySelectorAll('.cinema-video-container');
    
    videoContainers.forEach(container => {
        const video = container.querySelector('video');
        const playButton = container.querySelector('.cinema-play-button');
        const overlay = container.querySelector('.cinema-video-overlay');
        
        if (video && playButton) {
            playButton.addEventListener('click', () => {
                if (video.paused) {
                    video.play();
                    overlay.style.opacity = '0';
                    overlay.style.pointerEvents = 'none';
                } else {
                    video.pause();
                    overlay.style.opacity = '1';
                    overlay.style.pointerEvents = 'auto';
                }
            });
            
            video.addEventListener('click', () => {
                if (!video.paused) {
                    video.pause();
                    overlay.style.opacity = '1';
                    overlay.style.pointerEvents = 'auto';
                }
            });
            
            video.addEventListener('ended', () => {
                overlay.style.opacity = '1';
                overlay.style.pointerEvents = 'auto';
            });
        }
    });
}

/**
 * Mobile menu toggle
 */
function initMobileMenu() {
    const toggleButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (toggleButton && mobileMenu) {
        toggleButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('is-open');
        });
    }
}

/**
 * Stagger animation delays
 */
function initStaggerAnimations() {
    const staggerContainers = document.querySelectorAll('.stagger-children');
    
    staggerContainers.forEach(container => {
        const children = container.children;
        Array.from(children).forEach((child, index) => {
            child.style.setProperty('--stagger-delay', index);
        });
    });
}

/**
 * Parallax effect for hero backgrounds
 */
function initParallaxEffects() {
    const heroSections = document.querySelectorAll('.hero-section');
    
    if (window.innerWidth > 768) { // Only on desktop
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            
            heroSections.forEach(section => {
                section.style.transform = `translateY(${rate}px)`;
            });
        });
    }
}

// Initialize parallax on load
window.addEventListener('load', initParallaxEffects);