# SEO Missing Pieces — GSC Analysis (Apr–Jul 2026)

Data: 83 clicks, ~2,025 impressions, trending up strongly (April ~5 impressions/day → July ~50/day). The foundation work is paying off. Below are the gaps.

## 1. Fixed already: corrupted therapy-islamabad.html
The file contained 18 NUL (\x00) bytes after `</html>` — I removed them. Redeploy the file. Islamabad is your worst-performing city page (avg position 17.8 vs Lahore 11.3), so worth watching after the fix.

## 2. Biggest content gap: no "Online Therapy Pakistan" landing page
"online therapy pakistan" shows at **position 49.75** — effectively invisible — even though it's your core service and your homepage title targets it. The homepage is spread across too many intents. Build a dedicated `online-therapy-pakistan.html` service page (mirroring the city-page template: research stats, FAQ schema, pricing, testimonial-style copy) and internally link it from every city page and the nav/footer.

## 3. Depression cluster is served by a blog post, not a service page
"depression therapy in pakistan" (41 impressions, pos 35), "depression treatment pakistan" (pos 23), "depression therapist" (pos 84). Your only asset is `blog-depression-therapy.html` (100 impressions, 0 clicks, pos 26.9). Informational blog posts rarely win service-intent queries. Create `depression-therapy-pakistan.html` as a service/landing page and have the blog post link to it. Same logic applies later to anxiety ("anxiety treatment pakistan", pos 21).

## 4. Striking-distance keywords (page 2–3, zero clicks)
These have impressions and just need a push — internal links, content depth, and backlinks (see below):

| Query | Impressions | Position | Page responsible |
|---|---|---|---|
| marriage counseling karachi | 26 | 30.5 | therapy-karachi.html |
| marriage counseling islamabad | 8 | 27.9 | therapy-islamabad.html |
| marriage counseling lahore | 18 | 11.8 | therapy-lahore.html |
| couples therapy pakistan | 11 | 23.4 | (no clear page) |
| marriage counseling pakistan | 7 | 14.0 | blog-relationships-therapy.html |
| online therapy for pakistanis in uk | 2 | 34.5 | online-therapy-uk.html (new, still settling) |

Karachi's page underperforms Lahore's badly (pos 20.6 vs 11.3 page-wide). Compare the two — Karachi likely needs more unique local depth or more internal links pointing at it. ~~"Couples therapy" suggestion retracted~~ — the practice offers marriage counseling only, so "couples therapy" is not a target term.

## 5. Your #1 impression page has a CTR problem
`blog-relationships-therapy.html`: 700 impressions, 2.29% CTR at position 7. It ranks — people don't click. Also note the US: 642 impressions, 0.62% CTR (Americans searching generic "marriage counseling near me" see you and skip — unavoidable noise, don't optimize for it). For the Pakistan audience, test a title with a stronger hook: price and language are your differentiators, e.g. "Online Marriage Counseling in Pakistan — Urdu & English, PKR 5,000 | Healing with Attia".

## 6. Gulf page was planned but never built
`GULF-SEO-STRATEGY-BRIEF.md` sits in your folder, but there's no UAE/Gulf page. Meanwhile GSC shows UAE at **15.8% CTR** and Saudi at **14.3% CTR** — your highest-converting audiences per impression. The UK diaspora page exists; the Gulf one is the obvious next build (`online-therapy-uae.html` or a combined Gulf page targeting "pakistani therapist dubai", "urdu speaking therapist uae").

## 7. Smaller items
- Desktop CTR is 1.42% vs mobile 7.95%. Partly query mix, but check your desktop SERP snippet (favicon, sitename) renders correctly.
- og:title on the Islamabad page says "Online Therapy & Marriage Counseling Islamabad" while `<title>` omits "Online" — harmless, but align them.
- Queries like "reiki therapy near me" and "somatic therapy near me" rank position 1–10 with tiny volume. If Attia actually offers Hara/energy work, one blog post could own that niche in Pakistan.
- "Translated results" appearance + Urdu queries appearing ("جی ہاں") — a single Urdu-language landing page would be a genuine differentiator no competitor has. Low priority, high uniqueness.

---

# Backlink Plan

Reality check: this site's rankings (page 2–3 for city+service queries) are mostly an authority problem now — on-page is largely done. Links are the highest-leverage remaining work.

## Tier 1 — Directory/profile links (do these first, ~1 evening each)
These are the standard, safe base layer for a therapist:

| Directory | Notes |
|---|---|
| [TherapyRoute](https://www.therapyroute.com/therapists/pakistan) | Clinician-led, lists Pakistan therapists, profile link to site |
| [oladoc](https://oladoc.com/pakistan/video-consultation/counselor) | Largest PK platform; get listed under counselor/psychologist, Islamabad + video consultation |
| [Marham](https://www.marham.pk/) | #2 PK platform, same approach |
| [International Therapist Directory](https://internationaltherapistdirectory.com/online-listings/) | Built for expat/diaspora clients — perfect for the UK/Gulf audience |
| [It's Complicated](https://complicated.life/) | International online-therapy directory |
| [Location Independent Therapists](https://locationindependenttherapists.com/find-a-therapist/) | Online-only therapists directory |
| [GoodTherapy](https://www.goodtherapy.org/) | International listing (paid, evaluate) |

Also: Bing Places (free, 2 min), and ensure the Google Business Profile links to the site and posts monthly.

## Tier 2 — Pakistani media & content links (highest value)
- **Expert commentary**: Pakistani outlets (Dawn Images, Tribune Life & Style, Mashable Pakistan, ProPakistani) regularly run mental-health pieces and quote therapists. Email lifestyle editors offering commentary on rishta stress, joint-family dynamics, workplace burnout — your blog topics are literally their beat. One Dawn link outweighs 50 directories.
- **Guest posts**: pitch diaspora-focused blogs and Muslim mental-health platforms (e.g., sites covering Muslim marriage, desi parenting, expat life in UAE/UK) with the culturally specific angles you already write about.
- **University counseling pages**: NUST, QAU, COMSATS etc. publish student mental-health resources. A free "exam stress" resource or webinar offer can earn .edu.pk links — rare and powerful.
- **Podcast/YouTube interviews**: Pakistani mental-health and women-focused podcasts link guests in show notes. 30 minutes of talking = 1 link + referral traffic.

## Tier 3 — Ongoing
- Journalist request platforms (Qwoted, Featured/Terkel, SourceBottle) — respond to psychology/relationship queries; each pickup is a media link.
- A yearly "State of mental health help-seeking in Pakistan" stat roundup post — linkable asset journalists cite.
- Partner cross-links: any wellness centers, gyms, nikah services, or wedding planners Attia knows — a genuine "recommended therapist" mention.

## What to avoid
Fiverr/cheap link packages, PBNs, comment spam, and mass "web 2.0" links. At this site's size, a penalty is fatal and Google ignores most of that anyway. Ten real links beat a thousand fake ones.

---

## Priority order
1. Redeploy fixed therapy-islamabad.html (done locally — push it)
2. Tier 1 directory listings (this week)
3. Build `online-therapy-pakistan.html` service page
4. Build the Gulf/UAE page (brief already written)
5. Build `depression-therapy-pakistan.html` service page
6. Retitle blog-relationships-therapy.html for CTR
7. Start Tier 2 outreach (one pitch/week is enough)
