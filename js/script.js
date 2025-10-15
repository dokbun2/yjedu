// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    // Video Sound Toggle
    const soundToggle = document.getElementById('soundToggle');
    const heroVideo = document.getElementById('heroVideo');
    const soundOn = document.querySelector('.sound-on');
    const soundOff = document.querySelector('.sound-off');

    if (soundToggle && heroVideo) {
        soundToggle.addEventListener('click', function() {
            if (heroVideo.muted) {
                heroVideo.muted = false;
                soundOn.style.display = 'block';
                soundOff.style.display = 'none';
            } else {
                heroVideo.muted = true;
                soundOn.style.display = 'none';
                soundOff.style.display = 'block';
            }
        });

        // Initialize with muted state icons
        if (heroVideo.muted) {
            soundOn.style.display = 'none';
            soundOff.style.display = 'block';
        }
    }

    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            this.classList.toggle('active');
            if (navLinks) {
                navLinks.classList.toggle('mobile-active');
            }
        });
    }

    // Search functionality
    const searchBtn = document.querySelector('.search-btn');

    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            alert('Search functionality would open here');
            // In production, this would open a search modal or redirect to search page
        });
    }

    // Wishlist functionality
    const wishlistBtn = document.querySelector('.wishlist-btn');

    if (wishlistBtn) {
        wishlistBtn.addEventListener('click', function() {
            alert('Wishlist would open here');
            // In production, this would show wishlist items
        });
    }

    // Cart functionality
    const cartBtn = document.querySelector('.cart-btn');
    const cartCount = document.querySelector('.cart-count');

    if (cartBtn) {
        cartBtn.addEventListener('click', function() {
            alert('Cart would open here');
            // In production, this would open the cart modal
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                const target = document.querySelector(href);
                const offsetTop = target.offsetTop - 80; // Account for sticky nav

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Newsletter form submission
    const newsletterForm = document.querySelector('.newsletter-form');

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;

            if (email) {
                alert(`Thank you for subscribing with email: ${email}`);
                this.reset();
                // In production, this would send data to your backend
            }
        });
    }

    // Add to cart functionality for package cards
    const packageButtons = document.querySelectorAll('.package-card .btn');

    packageButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            if (this.textContent === 'View Details') {
                e.preventDefault();
                const packageCard = this.closest('.package-card');
                const packageName = packageCard.querySelector('h3').textContent;
                alert(`Viewing details for ${packageName}`);
                // In production, this would navigate to package details page
            }
        });
    });

    // Browse now buttons functionality
    const browseButtons = document.querySelectorAll('.brand-card .btn-outline');

    browseButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const brandCard = this.closest('.brand-card');
            const brandName = brandCard.querySelector('h3').textContent;
            alert(`Browsing ${brandName} collection`);
            // In production, this would navigate to filtered collection page
        });
    });

    // Sticky navigation effect
    let lastScroll = 0;
    const nav = document.querySelector('.navigation-bar');

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.brand-card, .package-card, .step-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Add fade-in class styles dynamically
    const style = document.createElement('style');
    style.textContent = `
        .fade-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }

        .navigation-bar.scrolled {
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .nav-links.mobile-active {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            padding: 1rem;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .mobile-menu-btn.active span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }

        .mobile-menu-btn.active span:nth-child(2) {
            opacity: 0;
        }

        .mobile-menu-btn.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -6px);
        }
    `;
    document.head.appendChild(style);

    // Account button functionality
    const accountBtn = document.querySelector('.account-btn');

    if (accountBtn) {
        accountBtn.addEventListener('click', function() {
            alert('Account/Login page would open here');
            // In production, this would navigate to login/account page
        });
    }

    // Hero buttons functionality
    const heroButtons = document.querySelectorAll('.hero-buttons .btn');

    heroButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            if (this.textContent === 'Browse Collection') {
                e.preventDefault();
                alert('Navigating to full collection...');
                // In production, navigate to collection page
            }
            // "How it Works" button will use smooth scroll from earlier implementation
        });
    });

    // Add hover effects for interactive elements
    const interactiveCards = document.querySelectorAll('.package-card, .step-card, .brand-card');

    interactiveCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });

    // Simple cart counter demo
    let cartItemCount = 0;

    window.addToCart = function() {
        cartItemCount++;
        if (cartCount) {
            cartCount.textContent = cartItemCount;
        }
    };

    // Category filter functionality for furniture.html
    const categoryFilter = document.querySelector('.filter-select');

    if (categoryFilter) {
        categoryFilter.addEventListener('change', function(e) {
            const selectedCategory = e.target.value;
            const allCards = document.querySelectorAll('.product-card');

            allCards.forEach(card => {
                if (selectedCategory === 'all' || card.dataset.category === selectedCategory) {
                    card.style.display = '';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }

    // Log when page is fully loaded
    console.log('Spruce website loaded successfully');
    console.log('All interactive features initialized');
});

// Utility function for future use
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Handle window resize
window.addEventListener('resize', debounce(function() {
    // Responsive adjustments can be added here
    const width = window.innerWidth;

    if (width > 992) {
        const navLinks = document.querySelector('.nav-links');
        if (navLinks) {
            navLinks.classList.remove('mobile-active');
        }

        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        if (mobileMenuBtn) {
            mobileMenuBtn.classList.remove('active');
        }
    }
}, 250));
