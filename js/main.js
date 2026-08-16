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
            // PKR amount swap — only standalone 5,000, never inside larger numbers (85,000; 195,000)
            if (val.indexOf('5,000') !== -1) {
                val = val.replace(/(^|[^\d])5,000(?![\d,]\d)/g, function (m, pre) { return pre + '8,000'; });
            }
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

/* ── Click-to-play video ──────────────────────────────────────────────────────
   Two lazy players, both no-ops on pages where the markup is absent:
     1. index.html  — self-hosted intro clip in "Meet Your Therapist".
                      Ships as preload="none" so nothing is fetched on page
                      load. It is then WARM-STARTED: once the clip scrolls into
                      view (or the pointer enters it on desktop) we switch to
                      preload="auto" so the opening seconds buffer while the
                      visitor is still reading the bio. By the time they press
                      play, playback is usually instant instead of a cold start.
                      Skipped entirely on metered or slow connections, and when
                      the visitor has asked to save data.
     2. podcast.html — YouTube facade. No YouTube request is made until the
                      visitor presses play, so the embed costs nothing on load.
────────────────────────────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', function () {

    /* 1. Self-hosted intro clip */
    var wrap = document.querySelector('.mt-video');
    if (wrap) {
        var video = wrap.querySelector('video');
        var btn = wrap.querySelector('.mt-video-play');
        if (video && btn) {

            /* --- warm start ------------------------------------------------ */
            var warmed = false;
            function warmUp() {
                if (warmed) return;
                warmed = true;
                // Respect the visitor's data: skip on save-data, 2g/3g, or
                // when the browser reports a metered connection.
                var c = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
                if (c) {
                    if (c.saveData) return;
                    if (/(^|-)(2g|slow-2g|3g)$/.test(c.effectiveType || '')) return;
                }
                video.preload = 'auto';
                video.setAttribute('preload', 'auto');
                video.load();          // begins buffering; poster stays visible
            }

            // Only start observing AFTER the page has finished loading, and
            // then only when the browser is idle. On a short desktop viewport
            // the clip is already on screen at load — without this gate the
            // 6.6MB would compete with the hero image and hurt LCP.
            function armObserver() {
                var start = function () {
                    if (!('IntersectionObserver' in window)) { warmUp(); return; }
                    var io = new IntersectionObserver(function (entries) {
                        entries.forEach(function (e) {
                            if (e.isIntersecting) { warmUp(); io.disconnect(); }
                        });
                    }, { rootMargin: '200px 0px' });  // start just before it appears
                    io.observe(wrap);
                };
                if (window.requestIdleCallback) {
                    requestIdleCallback(start, { timeout: 3000 });
                } else {
                    setTimeout(start, 1200);
                }
            }
            if (document.readyState === 'complete') {
                armObserver();
            } else {
                window.addEventListener('load', armObserver, { once: true });
            }

            // Desktop: hovering the card is a strong intent signal — warm
            // immediately rather than waiting for the observer.
            wrap.addEventListener('mouseenter', warmUp, { once: true });
            // Touch: fires before the click completes, buying a head start.
            wrap.addEventListener('touchstart', warmUp, { once: true, passive: true });

            /* --- play ------------------------------------------------------ */
            btn.addEventListener('click', function () {
                warmUp();
                video.muted = false;
                video.setAttribute('controls', '');
                video.play();
                wrap.classList.add('is-playing');
                btn.remove();
            });
        }
    }

    /* 2. YouTube facade */
    var facade = document.getElementById('ytFacade');
    if (facade) {
        facade.addEventListener('click', function () {
            var id = facade.getAttribute('data-video');
            if (!id) return;
            var ifr = document.createElement('iframe');
            ifr.src = 'https://www.youtube-nocookie.com/embed/' + id +
                      '?autoplay=1&rel=0&cc_load_policy=1&cc_lang_pref=en';
            ifr.title = 'Mind Matters: Exploring Mental Health';
            ifr.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; ' +
                        'gyroscope; picture-in-picture; web-share';
            ifr.allowFullscreen = true;
            facade.innerHTML = '';
            facade.appendChild(ifr);
            facade.style.cursor = 'default';
        }, { once: true });
    }
});
