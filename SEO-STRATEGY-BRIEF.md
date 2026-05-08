# Healing with Attia — SEO Strategy Brief
**Last updated: 8 May 2026 | Handoff document for next session**

---

## The Site
- **URL**: healingwithattia.com
- **Business**: Online therapy practice, Pakistan-based, run by Attia Altaf
- **Therapist**: Attia Altaf — Integrative Psychotherapist, CPCAB Level 3 & 4 (UK-certified), PhD in Media & Communication, 8+ years experience
- **Languages**: Urdu, English, Punjabi
- **Specialties confirmed**: Anxiety, depression, trauma, OCD, relationships, burnout, **marriage counseling / couples therapy (confirmed active service)**
- **Booking**: WhatsApp +923285694209
- **Tech**: Static HTML site, no CMS. Files in healingwithtia/ folder.

---

## GSC Baseline (90-day snapshot, loaded at session start)
- 615 impressions, 13 clicks, 2.1% CTR
- Site ranks **#1 for 3 queries but gets 0 clicks** (title/meta copy problem — now fixed)
- UK traffic has 19% CTR vs 2% Pakistan average → diaspora is high-value segment
- Top existing queries: "female muslim psychologist", "islamic psychologist near me"

---

## What Has Been Completed (do not redo)

### Priority #1 — Title & Meta Optimisation ✅
- All 16 pages audited and fixed: titles ≤65 chars, metas ≤160 chars
- Emotional hooks added, Pakistan + Urdu signals included

### Priority #2 — Structural / Schema Fixes ✅
- BreadcrumbList schema added to all 15 non-homepage pages
- BlogPosting schema author name fixed ("Dr. Attia Altaf" → "Attia Altaf") across 8 blog posts
- sitemap.xml rewritten — 21 URLs including all new pages
- Privacy Policy (privacy-policy.html) and Terms of Service (terms.html) created
- Footer updated across all pages with Privacy Policy + Terms links

### Priority #3 — City Landing Pages ✅
- `/therapy-lahore.html` — Lahore-specific landing page with LocalBusiness schema, FAQPage, WhatsApp CTA
- `/therapy-karachi.html` — Karachi-specific, same structure
- `/online-therapy-uk.html` — UK diaspora page, GBP pricing, GMT session times, waswasa + rishta content
- All 3 pages added to sitemap, linked from homepage "Areas We Serve" section, and added to footer "Locations" column across all 22 pages

### Internal Linking ✅
- "Areas We Serve" section added to index.html (above footer) with 3 cards linking to city pages
- "Locations" footer column added to all 22 HTML pages
- City pages previously orphaned — now fully linked

### Content Calendar ✅ (but now superseded — see below)
- `/content-calendar-90day.html` — 12-post calendar created but based on assumptions, not volume data

---

## Keyword Research Findings (8 May 2026)

### What KWP showed (Pakistan, April 2025–March 2026):

**High volume — confirmed demand:**

All 6 keywords below at 5,000/month are semantic variations of the same intent. A single well-optimised page will rank for all of them — they are not 6 separate articles, they are 1 topic cluster worth ~30,000 combined searches/month.

| Keyword | Vol/mo | Competition | Trend |
|---|---|---|---|
| marriage counseling | 5,000 | LOW | +900% YoY |
| marriage and relationship counseling | 5,000 | LOW | +900% |
| marriage and couples counseling | 5,000 | LOW | +900% |
| marriage relationship counseling | 5,000 | LOW | +900% |
| marital relationship counseling | 5,000 | LOW | +900% |
| marriage and counseling | 5,000 | LOW | +900% |
| couples therapy | 500 | LOW | +900% |
| couples counseling | 500 | LOW | +900% |
| relationship counselor | 500 | LOW | +900% |
| marriage counseling near me | 500 | LOW | stable |
| couples therapy karachi | 50 | Medium | +900% |
| couples therapy lahore | 50 | Medium | stable |
| marriage counseling lahore | 50 | Medium | stable |
| muslim marriage counseling | 50 | LOW | stable |
| islamic marriage counseling | 50 | LOW | stable |
| husband wife counselling | 50 | Medium | new |
| premarital counseling islam | 50 | LOW | stable |
| muslim couple counselling | 50 | LOW | new |

**Zero/unmeasurable volume (do not write):**
- therapy cost pakistan, pakistani therapist uk, urdu therapist online, premarital counseling pakistan, couples therapy pakistan (generic), depression vs sadness pakistan, british pakistani therapist online

**Note on 5,000/month**: KWP currency set to PKR, location Pakistan. 900% YoY growth across all marriage counseling variants = category is exploding and unclaimed (Low competition). This is the #1 opportunity.

### GSC-confirmed queries (rank #1, 0 clicks — still need articles):
- "female muslim psychologist near me" — real demand, competitors are US/UK platforms
- "islamic psychologist near me" — real demand, no Pakistan-based practice dominates

---

## Strategic Decision Made This Session

**The original 12-post content calendar is scrapped.** Most of those keywords had <10 searches/month.

**New strategy: Marriage counseling is the primary content pillar.**

Rationale:
- 5,000/month, LOW competition, 900% YoY growth
- Attia actively does couples/marriage counseling (confirmed)
- No single Pakistani practice has claimed this keyword cluster
- City-specific variants (karachi, lahore) growing at 900% — whoever publishes now owns it

---

## Next Session — Immediate Actions (in priority order)

### 1. Rebuild blog-relationships-therapy.html as a marriage counseling landing page
- Current file is a generic blog post, wasting the highest-value URL on the site
- New target: "marriage counseling pakistan", "online marriage counseling", "couples therapy pakistan"
- Should function as a service page + long-form article hybrid

### 2. Add marriage counseling section to city pages
- therapy-karachi.html → add "Marriage Counseling in Karachi" section + target "couples therapy karachi"
- therapy-lahore.html → add "Marriage Counseling in Lahore" section + target "couples therapy lahore" / "marriage counseling lahore"

### 3. ~~Write the 2 GSC-confirmed articles~~ — REMOVED
- Rationale for removal: GSC shows ~10–20 impressions for these queries over 90 days. KWP confirms "--" (under 10 searches/month). Site ranking #1 with 0 clicks is simply because almost nobody searches these terms — not a copy problem. Writing full articles for 2 clicks/month is not worth a slot when the marriage counseling cluster has 30,000/month unclaimed. If volume grows in future GSC data, revisit.

### 4. Write Muslim/Islamic marriage counseling article
- Targets: "muslim marriage counseling", "islamic marriage counseling", "premarital counseling islam"
- LOW competition, perfect credential fit for Attia
- Cross-links to therapy-lahore, therapy-karachi, services.html

### 5. Review existing pages for marriage counseling keyword opportunities
- services.html — does it mention marriage counseling prominently? If not, add it
- blog-rishta-stress.html — likely already adjacent to this topic, check for internal link opportunities
- blog-relationships-therapy.html — see #1 above

---

## Files Reference

| File | Purpose |
|---|---|
| index.html | Homepage — has "Areas We Serve" section linking to city pages |
| about.html | About Attia — credentials, qualifications |
| services.html | Services & pricing |
| blog.html | Blog index |
| blog-relationships-therapy.html | **To be rebuilt as marriage counseling page** |
| blog-rishta-stress.html | Rishta/relationship content — cross-link opportunity |
| therapy-lahore.html | Lahore landing page — needs marriage counseling section |
| therapy-karachi.html | Karachi landing page — needs marriage counseling section |
| online-therapy-uk.html | UK diaspora page |
| sitemap.xml | 21 URLs, all pages included |
| keyword-research-brief.html | Full keyword research analysis (viewable in browser) |
| content-calendar-90day.html | Old calendar — superseded, keep for reference |
| SEO-STRATEGY-BRIEF.md | This file |

---

## Do Not Touch
- All footer changes are done — do not re-run footer scripts
- Sitemap is complete — only add if creating new pages
- BreadcrumbList schemas are all in place
- Author name fix is done across all blog posts

---

## Attia's Credentials (for E-E-A-T accuracy in all content)
- PhD in Media and Communication Sciences
- Level 3 & 4 Diploma in Integrative Psychotherapy Counselling (CPCAB, UK)
- Level 5 Diploma (in progress)
- Trained in: Hara Therapy, Trauma Management, CBT, DBT
- **Title to use**: "Integrative Psychotherapist" (NOT "psychologist", NOT "Dr.")
- Based in Islamabad, serves all Pakistan + UK diaspora online
