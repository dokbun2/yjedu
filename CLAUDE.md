# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Korean educational certification services website for YJ에듀케이션 (YJ Education). The site provides information about various professional certifications and credentials, including Korean Language Instructor (한국어교원), Social Worker Level 1 (사회복지사 1급), and other educational qualifications.

## Architecture

### Page Structure

**Main Pages:**
- `index.html` - Homepage with hero section, featured brands, packages overview
- `furniture.html` - Certificate catalog page with category filtering (renamed conceptually from "furniture" to "자격증소개")
- `packages.html` - Package offerings page
- `how-it-works.html` - Q&A and process explanation page

**Detail Pages:**
- `korean-teacher-detail.html` - Korean Language Instructor certification details
- `social-worker-1-detail.html` - Social Worker Level 1 certification details
- Additional detail pages follow the same pattern: `{certification-name}-detail.html`

### Key Components

**Navigation System:**
- Sticky navigation bar with logo (YJ에듀케이션 최효진)
- Three main nav links: 자격증소개, Packages, Q&A
- "상담신청" (Consultation Request) button links to tel:010-2958-3622
- Mobile hamburger menu (`.mobile-menu-btn`)

**Certificate Catalog (furniture.html):**
- Category filter using `<select class="filter-select">` with data attributes
- Product cards use `data-category` attribute for filtering
- Cards can be `<a>` tags linking to detail pages or `<div>` elements
- JavaScript filter in `js/script.js` shows/hides cards based on selection

**Detail Page Template:**
- Breadcrumb navigation
- Hero section with image and CTA
- Multiple content sections: overview, requirements, curriculum, career prospects, process
- Consistent structure across all certification detail pages

### Styling System

**CSS Variables (in `:root`):**
- `--primary-color: #191919`
- `--secondary-color: #6c757d`
- `--white: #fff`
- `--light-gray: #f8f9fa`
- `--border-color: #dee2e6`
- `--text-color: #212529`
- `--hover-color: #000`

**Typography:**
- Custom font: Paperlogy (9 weights: 100-900)
- Located in `/fonts/` directory as `.woff` files

**Responsive Breakpoints:**
- 992px (tablet)
- 768px (mobile landscape)
- 480px (mobile portrait)

**Key CSS Classes:**
- `.wrapper-max` - Main content container
- `.detail-hero` - Hero section for detail pages
- `.product-card` - Certificate cards (support both `<a>` and `<div>` tags)
- `.curriculum-card` - Course curriculum sections
- `.exam-info-box` - National exam information boxes
- `.comparison-table-full` - Comparison tables
- `.process-step-item` - Process/timeline steps

### JavaScript Functionality

**Core Features (js/script.js):**
1. Mobile menu toggle
2. Category filter for certificates (furniture.html)
3. Smooth scrolling for anchor links
4. Intersection Observer for fade-in animations
5. Newsletter form handling
6. Dynamic mobile menu styles

**Filter System:**
```javascript
// Filters product cards based on data-category attribute
document.querySelector('.filter-select').addEventListener('change', function(e) {
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
```

## Creating New Certification Pages

1. **Add card to furniture.html:**
   - Use `<a href="certification-name-detail.html" class="product-card" data-category="category-id">`
   - Add matching option to filter select with same `value="category-id"`

2. **Create detail page:**
   - Copy structure from `korean-teacher-detail.html` or `social-worker-1-detail.html`
   - Update title, meta tags, breadcrumb
   - Modify content sections as needed
   - All detail pages should include: hero, overview, requirements, curriculum, career prospects, process, CTA

3. **CSS styling:**
   - Detail pages automatically inherit styles from `css/styles.css`
   - Specialized components: `.exam-info-container`, `.comparison-table-full`, `.advantage-summary`

## Mobile Optimization

All pages are fully responsive with:
- Fluid typography scaling
- Collapsible navigation
- Single-column layouts on mobile
- Touch-friendly button sizes
- Optimized image heights per breakpoint

## Contact Information

Primary contact: 010-2958-3622 (linked throughout site via `tel:` protocol)
