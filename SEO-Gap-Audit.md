# SEO Gap Audit — healingwithattia.com
### Against: Claude Code SEO Workflow Playbook
### Audit Date: May 28, 2026

---

## Audit Summary

| Phase | Status | Action Needed? |
|---|---|---|
| 1. Keyword Research | ✅ DONE | No |
| 2. Keyword-to-Page Mapping | ⚠️ GAPS | Yes — 3 missing pages |
| 3. Website Build | ✅ N/A | No (site exists) |
| 4. Technical SEO Audit | ✅ DONE | No |
| 5. Content Depth | ⚠️ THIN | Yes — city pages need expansion |
| 6. Sub-Agents | ✅ N/A | Process step, not a file |
| 7. Page Speed | ⚠️ PARTIAL | Verify mobile score |
| 8. Google Business Profile | ❓ UNVERIFIABLE | Manual check needed |
| 9. Internal Linking | ✅ DONE | No |
| 10. llms.txt | ❌ MISSING | Yes — create file |
| 11. Backlinks & Reviews | ❓ UNVERIFIABLE | Ongoing manual effort |

---

## Phase 1 — Keyword Research ✅ COMPLETE

**What was found:** keyword-research-brief.html exists and is marked `noindex` so Google won't index it. The marriage counseling cluster (30,000 searches/month, LOW competition, +900% YoY) is correctly identified as the primary pillar. Keyword intent categories are mapped.

**Gaps:** None. No action needed.

---

## Phase 2 — Keyword-to-Page Mapping ⚠️ GAPS EXIST

**What was found — DONE:**
- `blog-relationships-therapy.html` → rebuilt as the marriage counseling service page ✅
- `therapy-karachi.html` → exists with marriage counseling section ✅
- `therapy-lahore.html` → exists with marriage counseling section ✅
- `online-therapy-uk.html` → exists ✅
- `services.html` → marriage counseling prominently featured as the first/featured service ✅
- `faq.html` → has a full "Marriage & Relationships" FAQ category with schema ✅

**GAP 1 — Missing: therapy-islamabad.html**
Islamabad is Attia's home city. It's the most natural city page to have. The marriage counseling schema on `blog-relationships-therapy.html` already lists Islamabad as a served city, but there's no dedicated landing page. This is a significant missed opportunity — "therapist islamabad", "online therapy islamabad", "marriage counseling islamabad" are directly targetable keywords with the current setup.

**GAP 2 — Missing: Islamic/Muslim marriage counseling article**
Keywords like "muslim marriage counseling", "islamic marriage counseling", "premarital counseling islam" are identified in the strategy but have no dedicated page. `faq.html` mentions Islamic sensitivity in passing, and `blog-relationships-therapy.html` has a section on it, but there is no standalone article/page targeting these queries directly. This is a clear content gap in a market where Islamic framing is a major decision factor.

**GAP 3 — Missing: Standalone pre-marital counseling page**
Pre-marital counseling is mentioned in `faq.html` and `services.html` but there's no dedicated page for it. "Premarital counseling Pakistan" and "pre-marital counseling islamabad" are high-intent transactional keywords (someone planning to get married is actively shopping for this service).

**Action:** Create 3 pages:
1. `therapy-islamabad.html` — city landing page following the Karachi/Lahore template
2. `blog-muslim-marriage-counseling.html` — Islamic/Muslim marriage counseling article
3. `blog-premarital-counseling.html` — pre-marital counseling standalone page

---

## Phase 3 — Website Build ✅ N/A

Site is an existing static HTML site. Figma/Anima workflow doesn't apply. No gaps.

---

## Phase 4 — Technical SEO Audit ✅ COMPLETE

All technical foundations are in place. Detailed breakdown:

| Technical Element | Status |
|---|---|
| robots.txt | ✅ Exists — `Allow: /`, sitemap URL included |
| sitemap.xml | ✅ Exists — 21 URLs, correctly structured with priorities |
| content-calendar-90day.html | ✅ `noindex, nofollow` — Google won't crawl it |
| keyword-research-brief.html | ✅ `noindex, nofollow` — Google won't crawl it |
| Schema — Homepage | ✅ LocalBusiness + OfferCatalog |
| Schema — About | ✅ Person + LocalBusiness + credentials |
| Schema — Services | ✅ MedicalBusiness + BreadcrumbList |
| Schema — Blog posts | ✅ BlogPosting + BreadcrumbList on all posts |
| Schema — Blog posts (CBT pages) | ✅ Article + FAQPage |
| Schema — FAQ page | ✅ FAQPage with full Q&A |
| Schema — Marriage counseling | ✅ Service + FAQPage + BreadcrumbList |
| Schema — City pages | ✅ LocalBusiness + FAQPage + BreadcrumbList |
| Schema — UK page | ✅ LocalBusiness |
| Alt text — all images | ✅ All images have alt text (confirmed with multiline check) |
| Image formats | ✅ All webp versions exist and referenced in HTML |
| Meta titles | ✅ All 22 pages have titles ≤65 chars |
| Meta descriptions | ✅ All 22 pages have descriptions ≤160 chars |
| Open Graph tags | ✅ Present on key pages |
| Twitter Card tags | ✅ Present on key pages |

**No technical gaps found.** This phase is fully complete.

---

## Phase 5 — Content Depth ⚠️ CITY PAGES ARE THIN

**What was found — DONE:**
- `blog-relationships-therapy.html`: **3,750 words** with FAQs (7 questions), cultural/Islamic framing, city references (Lahore, Karachi, Islamabad), Pakistani family context, therapeutic approach detail. This is strong. ✅

**GAP — City pages are thin vs. the playbook standard:**

The playbook calls for city pages that include: local landmarks, neighbourhood references, common issues specific to that city, local context, and FAQs unique to that city.

Current state:
- `therapy-karachi.html`: **2,157 words** — mentions DHA and Clifton once in a FAQ answer. Has a marriage counseling section and general service sections. But no deeper Karachi-specific content (no references to the city's specific stresses — financial pressures in a business hub, the traffic/commute reality making online therapy especially valuable, joint family culture in specific Karachi communities, etc.)
- `therapy-lahore.html`: **2,118 words** — mentions DHA and Gulberg once. Similar issue. No Lahore-specific context (no reference to Lahore's cultural identity, rishta culture, academic pressure from top universities, joint family norms in old Lahori families, etc.)

Both pages have the structure right but lack the *local depth* that differentiates them from generic therapy pages. The competitor city pages in Pakistan almost certainly have nothing like this — which means adding this depth would be a clear ranking advantage.

**Action:** Expand both city pages with a 400–600 word "Mental Health in [City]" section covering: city-specific stressors, why online therapy is particularly valuable in that city (e.g., Karachi traffic/safety), neighbourhood references beyond DHA/Clifton, and city-specific FAQ questions.

---

## Phase 6 — Sub-Agents ✅ N/A

This is a workflow execution step, not a file or content deliverable. No gaps applicable.

---

## Phase 7 — Page Speed ⚠️ NEEDS VERIFICATION

**What was confirmed from the codebase:**
- `hero.jpg` (201KB original) → `hero.webp` (96KB) ✅ — compressed and served as webp
- `logo1.png` (171KB original) → `logo1.webp` (9KB) ✅ — heavily compressed
- All blog images (burnout, anxiety, rishta, etc.) have webp versions ✅
- All HTML pages reference `.webp` files only — no jpg/png references in any live page ✅

**GAP — Actual PageSpeed score unverified:**
The PageSpeed Insights link provided (`https://pagespeed.web.dev/analysis/...`) returned a JavaScript-rendered page that couldn't be read without a live browser. The page noted "insufficient real-world speed data" from Chrome UX Report — expected for a relatively new site with limited traffic.

The lab scores (Lighthouse) on that report need to be checked manually. Key things to look for:
- Mobile score (most important — Google uses mobile-first indexing)
- Largest Contentful Paint (LCP) — should be under 2.5 seconds
- Total Blocking Time (TBT)
- Cumulative Layout Shift (CLS)

**Action:** Open `https://pagespeed.web.dev` and test `https://www.healingwithattia.com` directly. Copy any red/orange flagged issues and bring them here to fix with Claude Code.

---

## Phase 8 — Google Business Profile ❓ CANNOT VERIFY

**What was confirmed from codebase:**
- NAP is consistent across all pages: phone number `923285694209` appears in WhatsApp links throughout all pages
- Business name "Healing with Attia" appears consistently
- No conflicting information found in the HTML

**Cannot verify:** Whether a Google Business Profile actually exists and is verified, whether GBP categories match the site's services, and whether the GBP description matches the site's messaging.

**Action:** Manually check https://business.google.com — confirm the profile exists, is verified, and that the business name, phone number, description, and service categories match the website exactly.

---

## Phase 9 — Internal Linking ✅ COMPLETE

Internal linking is thorough across the site. Key findings:

| Page | Linked From |
|---|---|
| blog-relationships-therapy.html | index, about, blog, services, therapy-karachi, therapy-lahore, blog-rishta-stress, blog-joint-family, blog-postnatal, blog-relationships-therapy (self) |
| therapy-karachi.html | Every single HTML page on the site |
| therapy-lahore.html | Every single HTML page on the site |
| online-therapy-uk.html | Every single HTML page on the site |

No orphan pages detected. The marriage counseling page (the primary pillar) is well-supported by internal links from high-authority pages (index, about, services).

**No gaps found.**

---

## Phase 10 — llms.txt ❌ MISSING

**Confirmed missing** from the site root. The file `llms.txt` does not exist anywhere in the folder.

This is a simple one-time file that tells AI crawlers (ChatGPT, Perplexity, Gemini, etc.) they are explicitly welcome to index the site. Given that the site targets mental health services in Pakistan — a topic where people increasingly ask AI assistants — this is worth adding.

**Action:** Create `llms.txt` in the site root. Content should be:

```
# llms.txt — AI Crawler Access
# healingwithattia.com

User-agent: *
Allow: /

# About this site
This site provides online therapy and counseling services in Pakistan.
Therapist: Attia Altaf, Integrative Psychotherapist (CPCAB UK certified)
Services: Anxiety, depression, OCD, trauma, marriage counseling, couples therapy
Languages: Urdu, English, Punjabi
Serving: Pakistan (Islamabad, Lahore, Karachi) and UK diaspora
Contact: https://wa.me/923285694209
```

---

## Phase 11 — Backlinks & Reviews ❓ CANNOT VERIFY FROM CODEBASE

These are off-site signals that cannot be verified from the local files. They require external tools (Ahrefs, Google Search Console, direct GBP check).

**What to check manually:**
1. **Google Reviews** — Does the GBP have any reviews? Even 3–5 real reviews can be decisive in Pakistan's thin therapy market
2. **Backlinks** — Is the site listed in any Pakistani mental health directories, psychology bodies, or general Pakistani business directories?
3. **Google Search Console** — Check the "Links" report to see what external sites link to healingwithattia.com

---

## Priority Action List

Ranked by impact vs. effort:

### 🔴 High Impact, Low Effort (Do First)
1. **Create `llms.txt`** — 5 minutes, zero risk, future-proofs AI search visibility
2. **Run PageSpeed Insights mobile test** — manual, takes 2 minutes; if red issues appear, bring the output here and Claude Code fixes them

### 🟠 High Impact, Medium Effort (Do Next)
3. **Create `therapy-islamabad.html`** — follows the Karachi/Lahore template exactly; Islamabad is the home city, highest-priority missing page
4. **Expand therapy-karachi.html** — add 400–600 words of Karachi-specific mental health context, landmarks, stressors
5. **Expand therapy-lahore.html** — same treatment as Karachi

### 🟡 Medium Impact, Medium Effort (Do After)
6. **Create `blog-muslim-marriage-counseling.html`** — targets "islamic marriage counseling", "muslim marriage counseling", "premarital counseling islam"
7. **Create `blog-premarital-counseling.html`** — targets "premarital counseling pakistan", "before nikah counseling"

### 🔵 Ongoing (No Single Fix)
8. **Google Business Profile** — verify it's set up, NAP matches, categories correct
9. **Google Reviews** — ask satisfied clients to leave reviews
10. **Backlinks** — list on mental health directories, psychology associations, Pakistani business directories

---

*Audit completed May 28, 2026 | No changes were made to any site files during this audit*
