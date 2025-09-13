/**
 * Sacred Signal OS - Scroll Animations
 * Handles scroll-triggered animations for better performance
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, observerOptions);

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(function(element) {
        observer.observe(element);
    });

    // Video initialization and error handling
    const videos = document.querySelectorAll('video');
    videos.forEach(function(video) {
        // Add loading state handling
        video.addEventListener('loadstart', function() {
            const container = video.closest('.cinema-hero');
            if (container) {
                container.classList.add('video-loading');
            }
        });

        video.addEventListener('canplay', function() {
            const container = video.closest('.cinema-hero');
            if (container) {
                container.classList.remove('video-loading');
                container.classList.add('video-ready');
            }
        });

        video.addEventListener('error', function(e) {
            console.log('Video error:', e);
            const container = video.closest('.cinema-hero');
            if (container) {
                container.classList.add('video-error');
                // Show fallback image
                const poster = video.getAttribute('poster');
                if (poster) {
                    video.style.display = 'none';
                    const img = document.createElement('img');
                    img.src = poster;
                    img.alt = 'Sacred Signal OS';
                    img.className = 'w-full h-full object-cover';
                    container.appendChild(img);
                }
            }
        });

        // Auto-play handling with user interaction requirements
        video.addEventListener('click', function() {
            if (video.paused) {
                video.play().catch(function(error) {
                    console.log('Video play failed:', error);
                });
            } else {
                video.pause();
            }
        });
    });

    // Button glow effects on scroll
    const glowButtons = document.querySelectorAll('.cinema-glow');
    glowButtons.forEach(function(button) {
        button.addEventListener('mouseenter', function() {
            button.style.boxShadow = '0 0 30px hsl(var(--signal) / 0.6)';
        });
        
        button.addEventListener('mouseleave', function() {
            button.style.boxShadow = '';
        });
    });

    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Performance monitoring
    if ('performance' in window && 'measureUserAgentSpecificMemory' in window.performance) {
        // Monitor memory usage for large pages
        setInterval(function() {
            if (window.performance.memory) {
                const used = window.performance.memory.usedJSHeapSize;
                const total = window.performance.memory.totalJSHeapSize;
                if (used / total > 0.8) {
                    console.warn('High memory usage detected');
                }
            }
        }, 30000);
    }
});