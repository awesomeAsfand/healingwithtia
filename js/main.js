/*
   Healing with Attia - Main JS
*/

/* ── Geo-based pricing ────────────────────────────────────────────────────────
   Pakistani visitors see PKR 5,000. International visitors see PKR 8,000.
   Only visible text nodes are changed — schema/meta/JSON-LD are never touched.
   Country is cached in sessionStorage so the API fires once per browser session.
────────────────────────────────────────────────────────────────────────────── */
(async function geoPrice() {
    try {
        let country = sessionStorage.getItem('vc');
        if (!country) {
            const r = await fetch('https://api.country.is/');
            country = (await r.json()).country || 'PK';
            sessionStorage.setItem('vc', country);
        }
        if (country === 'PK') return; // local visitor — nothing to do

        // Wait for DOM to be ready before walking text nodes
        if (document.readyState === 'loading') {
            await new Promise(function(resolve) {
                document.addEventListener('DOMContentLoaded', resolve, { once: true });
            });
        }

        // Walk every text node in <body>, skip <script> and <style>
        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
        let node;
        while ((node = walker.nextNode()) !== null) {
            const tag = node.parentElement && node.parentElement.tagName;
            if (tag === 'SCRIPT' || tag === 'STYLE') continue;
            let val = node.nodeValue;
            // PKR amount swap
            if (val.indexOf('5,000') !== -1) val = val.replace(/5,000/g, '8,000');
            // GBP equivalent on the UK page (£13–15 → £22–25)
            if (val.indexOf('£13') !== -1) val = val.replace(/£13[–\-]15/g, '£22–25').replace(/£13(?=[^–\-]|$)/g, '£22');
            if (val !== node.nodeValue) node.nodeValue = val;
        }
    } catch (_) { /* geolocation failed — PKR 5,000 stays, page unaffected */ }
})();

document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');

    function toggleMenu() {
        navLinks.classList.toggle('active');
        const icon = mobileToggle.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    }

    if (mobileToggle && navLinks) {
        // click fires on both touch and mouse; touch-action:manipulation on the
        // element already removes the 300ms delay so no e.preventDefault() needed
        mobileToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleMenu();
        });
    }

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (navLinks && navLinks.classList.contains('active') &&
            !navLinks.contains(e.target) && !mobileToggle.contains(e.target)) {
            navLinks.classList.remove('active');
            const icon = mobileToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        const href = anchor.getAttribute('href');
        if (!href || href === '#') return; // skip bare # links
        anchor.addEventListener('click', function (e) {
            try {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth' });
                    // Close mobile menu if open
                    if (navLinks && navLinks.classList.contains('active')) {
                        navLinks.classList.remove('active');
                        const icon = mobileToggle.querySelector('i');
                        icon.classList.remove('fa-times');
                        icon.classList.add('fa-bars');
                    }
                }
            } catch (err) { /* invalid selector — do nothing */ }
        });
    });

    // Intersection Observer for Fade-in Animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, {
        threshold: 0
    });

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
        el.style.opacity = '0'; // Hide initially
        observer.observe(el);
    });

    // ── WhatsApp click conversion tracking ──────────────────────────────
    // Fires a `whatsapp_lead` GA4 event on any WhatsApp link click.
    // Forces the deferred GA library to load and uses beacon transport so
    // the event still sends even as the page navigates away to WhatsApp.
    function fireWhatsAppLead(url) {
        try {
            if (typeof _loadGTM === 'function') { _loadGTM(); } // ensure GA library loads now
            if (typeof gtag === 'function') {
                gtag('event', 'whatsapp_lead', {
                    'event_category': 'engagement',
                    'event_label': url || 'whatsapp',
                    'transport_type': 'beacon'
                });
            }
        } catch (err) { /* never block the click */ }
    }

    document.querySelectorAll('a[href*="wa.me"], a[href*="api.whatsapp.com"]').forEach(function (link) {
        link.addEventListener('click', function () {
            fireWhatsAppLead(link.getAttribute('href'));
        });
    });
});
