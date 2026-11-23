/*
   Healing with Attia - Main JS
*/

/* ── Geo-based pricing ────────────────────────────────────────────────────────
   Pakistani visitors see PKR 5,000. International visitors see PKR 8,000.
   Only visible text nodes are changed — schema/meta/JSON-LD are never touched.
   Country is cached in sessionStorage so the API fires once per browser session.
────────────────────────────────────────────────────────────────────────────── */
/* Region is published as window.hwaRegion ('PK' | 'INTL') so the WhatsApp lead
   code below can tag messages and GA4 events with the price the visitor saw. */
window.hwaRegion = window.hwaRegion || null;
function hwaSetRegion(country) {
    window.hwaRegion = country === 'PK' ? 'PK' : 'INTL';
}

(async function geoPrice() {
    try {
        let country = null;
        try { country = sessionStorage.getItem('vc'); } catch (_) {}
        if (country) hwaSetRegion(country);
        if (!country) {
            try {
                const ctrl = new AbortController();
                const timer = setTimeout(function () { ctrl.abort(); }, 2500);
                const r = await fetch('https://api.country.is/', { signal: ctrl.signal });
                clearTimeout(timer);
                country = (await r.json()).country || null;
            } catch (_) { country = null; } // blocked/timed out — fall through to timezone guess
            if (country) { try { sessionStorage.setItem('vc', country); } catch (_) {} }
        }
        if (!country) {
            // No network signal (ad-blocker, firewall, timeout) — guess from the browser's timezone
            // instead of silently keeping the PK price for an international visitor.
            const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
            country = tz === 'Asia/Karachi' ? 'PK' : 'INTL';
        }
        hwaSetRegion(country);
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
            // AED equivalent on the Dubai page (AED 65 -> AED 104 for PKR 8,000)
            if (val.indexOf('AED 65') !== -1) val = val.replace(/AED 65(?!\d)/g, 'AED 104');
            // SAR equivalent on the Saudi page (SAR 65 -> SAR 104 for PKR 8,000)
            if (val.indexOf('SAR 65') !== -1) val = val.replace(/SAR 65(?!\d)/g, 'SAR 104');
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

});

/* ── WhatsApp leads: source tag + GA4 event ───────────────────────────────────
   1. First-touch source (P1-D2). On the first page of a visit we work out where
      the visitor came from and keep a one-letter code in sessionStorage
      'hwa_src':
        G Google search   S other search   C ChatGPT   P Perplexity
        A other AI        I Instagram      F Facebook  M Business Profile
        R directory       D direct         O other
   2. When a WhatsApp link is clicked, " (web · <code> · <PK|INTL>)" is appended
      to the pre-filled message, once, just before WhatsApp opens. This is the
      practice's only automatic record of where a chat came from.
   3. GA4 `whatsapp_lead` fires at most once per page view (P1-D3), with
      `price_region` and `lead_source` parameters (P1-D1).
   Never blocks the click: every step is wrapped so a failure just lets the
   link open as normal.
────────────────────────────────────────────────────────────────────────────── */
var hwaLeadSource = (function detectLeadSource() {
    var KEY = 'hwa_src';
    try {
        var saved = sessionStorage.getItem(KEY);
        if (saved) return saved;
    } catch (_) {}

    function fromUtm() {
        var p;
        try { p = new URLSearchParams(window.location.search); } catch (_) { return null; }
        var src = (p.get('utm_source') || '').toLowerCase();
        var camp = (p.get('utm_campaign') || '').toLowerCase();
        if (camp === 'gbp') return 'M';
        if (!src) return null;
        if (/chatgpt|openai/.test(src)) return 'C';
        if (/perplexity/.test(src)) return 'P';
        if (/gemini|copilot|claude/.test(src)) return 'A';
        if (src === 'ig' || /instagram/.test(src)) return 'I';
        if (src === 'fb' || /facebook/.test(src)) return 'F';
        if (/muslimtherapist|ruhcare/.test(src)) return 'R';
        if (/^google/.test(src)) return 'G';
        if (/bing|ecosia|duckduckgo|yahoo|yandex/.test(src)) return 'S';
        return 'O';
    }

    function fromReferrer() {
        var ref = document.referrer || '';
        if (!ref) return null;
        // Google app on Android reports an android-app:// referrer
        if (/^android-app:\/\/com\.google\.android\.googlequicksearchbox/.test(ref)) return 'G';
        var host;
        try { host = new URL(ref).hostname.toLowerCase(); } catch (_) { return 'O'; }
        function is(domain) { return host === domain || host.slice(-(domain.length + 1)) === '.' + domain; }
        if (is('healingwithattia.com')) return null;                 // internal: ignore
        if (is('gemini.google.com') || is('copilot.microsoft.com') || is('claude.ai')) return 'A';
        if (/(^|\.)google\.[a-z]{2,3}(\.[a-z]{2})?$/.test(host)) return 'G';
        if (/(^|\.)(bing|ecosia|duckduckgo|yahoo|yandex)\.[a-z.]+$/.test(host)) return 'S';
        if (is('chatgpt.com') || is('openai.com')) return 'C';
        if (is('perplexity.ai')) return 'P';
        if (is('instagram.com')) return 'I';
        if (is('facebook.com')) return 'F';
        if (is('muslimtherapist.directory') || is('ruhcare.com')) return 'R';
        return 'O';
    }

    var code = 'D';
    try { code = fromUtm() || fromReferrer() || 'D'; } catch (_) { code = 'D'; }
    try { sessionStorage.setItem(KEY, code); } catch (_) {}
    return code;
})();

(function whatsappLeads() {
    var leadFired = false;   // one whatsapp_lead per page view
    var TAG_MARK = '(web · ';

    function regionForTag() {
        if (window.hwaRegion === 'PK' || window.hwaRegion === 'INTL') return window.hwaRegion;
        // Region not resolved yet: use the same time-zone rule the price script falls back on
        try {
            return Intl.DateTimeFormat().resolvedOptions().timeZone === 'Asia/Karachi' ? 'PK' : 'INTL';
        } catch (_) { return 'INTL'; }
    }

    function tagLink(link) {
        try {
            var url = new URL(link.getAttribute('href'), window.location.href);
            var text = url.searchParams.get('text') || '';
            if (text.indexOf(TAG_MARK) !== -1) return;              // already tagged
            var tag = TAG_MARK + hwaLeadSource + ' · ' + regionForTag() + ')';
            url.searchParams.set('text', text ? text + ' ' + tag : tag);
            link.setAttribute('href', url.toString());
        } catch (_) { /* leave the link exactly as it was */ }
    }

    function fireLead(link) {
        if (leadFired) return;
        leadFired = true;
        try {
            if (typeof _loadGTM === 'function') { _loadGTM(); } // ensure GA library loads now
            if (typeof gtag === 'function') {
                gtag('event', 'whatsapp_lead', {
                    'event_category': 'engagement',
                    'event_label': link.getAttribute('href') || 'whatsapp',
                    'price_region': window.hwaRegion || 'unknown',
                    'lead_source': hwaLeadSource,
                    'transport_type': 'beacon'
                });
            }
        } catch (_) { /* never block the click */ }
    }

    function onActivate(e) {
        var link = e.target && e.target.closest ? e.target.closest('a[href]') : null;
        if (!link) return;
        var href = link.getAttribute('href') || '';
        if (href.indexOf('wa.me') === -1 && href.indexOf('api.whatsapp.com') === -1) return;
        tagLink(link);   // before navigation: the browser reads href after this handler
        fireLead(link);
    }

    // Capture phase so the href is rewritten before any other handler or the
    // default navigation. auxclick covers middle-click "open in new tab".
    document.addEventListener('click', onActivate, true);
    document.addEventListener('auxclick', onActivate, true);
})();

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
