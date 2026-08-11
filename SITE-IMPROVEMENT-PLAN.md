# Healing with Attia — site improvement plan

Audit of the live site plus current research, August 2026.
Ordered by impact against effort. Items 1–4 matter most.

The July 2026 SEO audit is largely executed — depression, Dubai/UAE and Saudi
pages all shipped. This picks up what remains and what the earlier audit
didn't cover: trust, conversion, and AI-answer visibility.

---

## Where the site already stands

Worth stating, because it changes what's worth doing next:

- Schema markup is genuinely thorough — Service, FAQPage, BreadcrumbList,
  LocalBusiness, Person across nearly every page. Better than most therapy sites.
- `llms.txt` exists. Very few practices have this.
- Performance-conscious: deferred GA, preloaded fonts, WebP images,
  width/height on all 16 images, alt text everywhere.
- 18 blog posts, 1,200–4,700 words, culturally specific in a way competitors aren't.
- 37 URLs, clean sitemap, one H1 per page, no missing meta descriptions.

The on-page SEO work is close to done. **The gaps now are trust, conversion,
and distribution — not markup.**

---

# TIER 1 — Trust and credibility

Google classifies therapy as YMYL ("Your Money or Your Life") and applies its
strictest quality standards. Reporting suggests health sites without clear
E-E-A-T signals lost significant visibility through the 2024–2026 core updates.
This is also simply what makes a stranger book.

### 1. The About page is the weakest page on the site — and it shouldn't be

At **945 words** it is the second-thinnest page, ahead of only the contact page.
Every service page is roughly twice its length. For a solo practice, the
therapist *is* the product, and this is the page that decides whether someone
books.

Add:

- What a first session actually looks like, minute by minute
- Why she became a therapist, in more depth — the current version is three sentences
- Who she works best with, and who she doesn't (refusing to be for everyone is
  a trust signal, not a loss)
- What "integrative" means in practice, with a concrete example
- An anonymised, composite case illustration — the "Experience" in E-E-A-T
- A short intro video (see item 7)

### 2. Fix how the PhD is presented ⚠️

Under **"Academic & Professional Qualifications"**, the first entry is:

> PhD in Media and Communication Sciences

Followed by the CPCAB Level 3 & 4 Diploma. `llms.txt` similarly lists
"CPCAB UK certified, Level 3 & 4 Diploma; PhD".

The problem: a visitor scanning a psychotherapy page sees "PhD" directly above
"Psychotherapist" and will reasonably assume a doctorate in psychology. AI
systems summarising the site will make the same inference. The qualification is
real and worth listing — it just isn't a clinical one, and the current ordering
implies otherwise.

Suggested restructure:

- **Clinical qualifications** — CPCAB Level 3 & 4 Diploma in Integrative
  Psychotherapy & Counselling (UK); Level 5 in progress; specialist training in
  CBT, DBT, trauma, Hara therapy
- **Other academic qualifications** — PhD, Media and Communication Sciences

Same content, honest hierarchy. This protects her rather than costing her.

### 3. Add the standard therapist trust signals — all currently missing

Not one of these appears anywhere on the site:

- **Professional body membership.** CPCAB is an *awarding body* — it issues
  qualifications, it is not a register. UK-trained counsellors normally hold
  BACP or NCPS membership. If Attia holds one, it belongs in the header of the
  About page and in the footer. If not, joining one is the single highest-value
  credibility investment available.
- **Professional indemnity insurance** — one line is enough.
- **Clinical supervision** — that she is in regular supervision. Clients rarely
  know to ask; those who do, care a great deal.
- **Confidentiality and its limits** — briefly, in plain language. Currently
  only in the terms page.

### 4. Get real Google reviews — and don't add review schema

Three pages carry testimonials, but they're unattributed ("I was hesitant about
online therapy...") with no name, city or date. Unattributed praise reads as
copywriting.

Do:

- Set up / verify the **Google Business Profile** as a service-area business
  (no walk-in address — the schema currently declares an Islamabad
  `PostalAddress` while the contact page says there's no physical clinic; that
  inconsistency should be resolved)
- Ask settled clients for Google reviews. Research indicates reviews from the
  last 90 days weigh most, and GBP is the primary source AI search uses to
  describe a local business
- Attribute on-site testimonials at least as "A., Lahore — marriage counselling"

Don't add `AggregateRating` / `Review` schema for self-hosted testimonials.
Google ignores self-serving review markup on your own site and it can trigger a
manual action.

---

# TIER 2 — Conversion

The traffic problem is being solved. This is now the bigger leak.

### 5. WhatsApp is the only way to book — 157 links, no alternative

The contact form on `contact.html` is **commented out entirely** (its button
still says "This is a demo"). There is no calendar, no email capture, no
enquiry form. Four `mailto:` links across the whole site.

Who this loses:

- Anyone unwilling to hand a therapist their personal phone number as step one —
  a real barrier in a culture where stigma is the main obstacle
- People browsing at work who won't open WhatsApp
- Diaspora clients in UK/Gulf timezones who'd rather send a message than start a chat
- Anyone who wants to think it over rather than begin a live conversation

Research on private-practice sites consistently favours **multiple parallel
paths** — scheduling, form, and messaging — because visitors convert at
different readiness levels. Keep WhatsApp as primary; it clearly suits the
audience. Add alternatives beside it.

### 6. Add real booking

**Cal.com** or **Calendly** free tier works fine on a static GitHub Pages site —
it's an embed or a link, no backend. Benefits: removes the back-and-forth of
agreeing a time across timezones, shows genuine availability (reinforcing the
"no waiting list" claim), and can collect intake details up front.

### 7. Add a short intro video

Five video references exist sitewide but no actual embed. For therapy, seeing
and hearing the therapist is the single strongest conversion element — clients
are choosing a person, not a service. A 60–90 second phone-recorded clip on the
About page and homepage, in Urdu and English, would likely outperform every
copy change on this list.

### 8. Offer a free intro call — competitors do

"Free consultation" appears on exactly **one** page (`anxiety-treatment-pakistan.html`).
Pakistani competitors — ReliveNow, Umeed, The Psychology Square and others —
advertise free trial consultations, with market rates spanning roughly
PKR 850–6,000. At PKR 5,000, Attia sits at the premium end with no
risk-reducer.

A free 10–15 minute call is standard practice and converts well. If it's already
offered, it needs to be on every page. If not, it's worth testing.

### 9. The contact page is 490 words — the thinnest on the site

Add: what happens after you message, realistic response time, what the first
session costs and includes, cancellation policy, what to do in a crisis
(currently absent from this page), and whether sessions can be in Urdu.

### 10. Add an email capture with something worth downloading

No newsletter or lead magnet anywhere. Most visitors aren't ready to book today.
A genuinely useful download — "What to expect from your first therapy session",
or an Urdu-language guide to explaining therapy to family — captures people at
the stage where they're still deciding, which is where most of the audience is.

---

# TIER 3 — Content gaps

### 11. `online-therapy-pakistan.html` still doesn't exist

This was **item 2 in the July 2026 audit** — the core term sat at position ~50
because the homepage spreads across too many intents. Depression, Dubai and
Saudi pages have all shipped since; this one hasn't. Still the largest single
keyword gap.

### 12. Build the Urdu landing page

Flagged in the July audit as "low priority, high uniqueness". Given GSC already
shows Urdu-language queries and translated-result appearances, and **no
competitor offers Urdu-language pages**, this looks underrated. Attia already
works in Urdu — this is packaging, not new capability.

### 13. Add a crisis resources page

Helpline mentions are scattered across 14 pages with no single destination.
A proper page — Umang, Rozan, emergency numbers, plus UK/UAE/Saudi equivalents
for diaspora readers — is genuinely useful, is the kind of page other sites
and universities link to, and demonstrates duty of care to both readers and
Google.

### 14. Strengthen the weak blog posts

Lowest inbound internal links and thinnest content:

| Post | Words | Inbound links |
|---|---|---|
| `blog-parents-therapy.html` | 1,313 | 5 |
| `blog-exam-stress.html` | 1,239 | 6 |
| `blog-financial-anxiety.html` | 1,223 | 6 |

Either deepen them or link to them more from related pages. The exam-stress post
in particular is the natural hook for university outreach (item 18).

---

# TIER 4 — AI and answer-engine visibility

### 15. Answer-first opening paragraphs

Current guidance for AI Overview citation is to open each page with a direct
50–60 word answer to its primary query before the narrative begins. Most service
pages currently open with scene-setting prose. A small edit with outsized effect
on whether AI systems can lift a clean answer.

### 16. Update `llms.txt`

It's good and ahead of the field, but: apply the same credential restructure as
item 2, and add the newer pages (Dubai/UAE, Saudi, depression) which aren't
listed.

### 17. Resolve the LocalBusiness address inconsistency

`index.html` declares a `PostalAddress` in Islamabad; `contact.html` states
there is no physical clinic. For an online-only practice, the correct setup is a
service-area business with no street address. Contradictory signals hurt both
local ranking and AI-generated descriptions.

---

# TIER 5 — Technical odds and ends

### 18. No `404.html`

GitHub Pages serves a generic 404. A branded one with links to main services
recovers visitors from dead links and typos. Ten minutes' work.

### 19. Lazy-loading on only 2 of 33 content pages

`loading="lazy"` appears in two files. Applying it to below-fold images
sitewide is a straightforward Core Web Vitals win.

### 20. No RSS feed

Cheap to generate for a blog this size, and it's how several aggregators and AI
crawlers discover new posts.

### 21. `therapists.html` — no H1, no meta description

It's an intentional redirect stub and correctly `noindex`, so this is harmless.
Noted only so it isn't mistaken for a bug later.

---

# The part that isn't on the website

The July audit's own conclusion was that rankings are now **an authority
problem, not an on-page problem**. That still holds, and none of the backlink
plan appears to have been executed:

- **Tier 1 directories** — TherapyRoute, oladoc, Marham, International
  Therapist Directory, Bing Places. An evening each.
- **Pakistani media** — Dawn Images, Tribune Life & Style and ProPakistani run
  mental-health pieces constantly and quote therapists. Attia's blog topics
  (rishta stress, joint families, workplace burnout) are literally their beat.
  One Dawn link outweighs fifty directory listings.
- **University counselling pages** — NUST, QAU, COMSATS publish student mental
  health resources. `.edu.pk` links are rare and powerful; the exam-stress post
  is the natural offer.

---

# Suggested order

**This month**
1. Restructure the credentials block (item 2) — quick, and it's a risk
2. Expand the About page (item 1)
3. Add a booking calendar and restore a working contact form (items 5, 6)
4. Google Business Profile + start requesting reviews (item 4)

**Next**
5. Record the intro video (item 7)
6. Build `online-therapy-pakistan.html` (item 11)
7. Tier 1 directory listings
8. Decide on the free intro call (item 8)

**Then**
9. Urdu landing page (item 12)
10. Crisis resources page (item 13)
11. Answer-first rewrites + `llms.txt` update (items 15, 16)
12. Media outreach (one pitch a week is enough)

---

## Sources

- Google AI Mode and local search, 2026 — https://thevalleymarketinggroup.com/blog/google-ai-mode-local-seo-service-businesses-2026/
- Getting cited in AI search, local business guide — https://thevalleymarketinggroup.com/blog/local-service-business-ai-search-2026/
- E-E-A-T for YMYL healthcare and therapy sites — https://thinkshaw.com/e-e-a-t-for-ymyl-sites-what-healthcare-finance-legal-brands-must-prove/
- What therapists need to know about YMYL and E-E-A-T — https://crownsvillemedia.com/therapist-ymyl-and-e-e-a-t
- Therapy practice conversion rate optimisation — https://alwaysopen.design/therapy-practices-cro-wins/
- Website conversion for mental health professionals — https://therapeiawebdesign.com/blog/website-conversion-optimization-for-mental-health-professionals-turning-visitors-into-booked-clients/
- Free discovery calls in private practice — https://www.goodtherapy.org/for-professionals/marketing/customer-experience/article/should-you-offer-free-initial-consultation
- Online therapy platforms in Pakistan — https://therapyhelpers.com/blog/online-therapy-pakistan/
- Health and wellness SEO statistics 2026 — https://www.webtonic.io/blog/health-wellness-seo-statistics
