# Claude Code SEO Workflow — Full Playbook
### Based on: "How Claude Code Ranked Me FIRST on Google (It's OVER for SEO Agencies)"
### Adapted for: healingwithattia.com

---

## The Core Idea (Why This Works)

The person in this video — James, "The Boring Marketer" — partnered with a friend who ran a small trucking company and needed a mechanic service. In under 4 hours of work on a weekend, using Claude Code alone, he:

- Built a complete website from a Figma design
- Researched and implemented keywords
- Created 50+ optimized pages (location pages + service pages)
- Fixed all technical SEO issues
- Ranked in the **top 3 organic Google results** AND the **Maps pack** for competitive local keywords
- Generated **thousands of dollars** in phone call revenue **within 24 hours**

The key insight: **local and niche markets are not technically sophisticated.** The competing websites are old, slow, and poorly structured. That's the arbitrage. A modern, fast, well-structured site built with AI leapfrogs years of neglect in a matter of hours.

For healingwithattia.com, the same logic applies. Mental health therapy in Pakistan is not a crowded digital space. The competitors haven't optimized anything. This playbook is a direct match for the opportunity.

---

## The Full Workflow — Step by Step

---

### PHASE 1: Keyword Research

**What:** Find the search terms your potential clients are actually typing into Google.

**How (exactly):**
1. Open ChatGPT (GPT-4o/o3) or Claude
2. Give it your website URL and a plain-English description of the business
3. Prompt: *"Here's my website: [URL]. Here's what I do: [description]. Give me a list of 25–50 keywords I should optimize my website around for local/niche search."*
4. That's it. Do not over-complicate it with volume tools, competition scores, or keyword planners — especially at the start.

**Why this works:**
For niche and local markets, you don't need expensive tools like Ahrefs or SEMrush to get started. AI has enough contextual understanding to give you a solid seed list in seconds. Analysis paralysis kills momentum. Get the list, move forward.

**Keyword Categories to Look For:**
James found the AI naturally bucketed keywords into four useful categories:
- **Emergency keywords** — someone in crisis needing help RIGHT NOW (e.g., "emergency diesel mechanic Charlotte")
- **Service keywords** — specific services offered (e.g., "diesel truck repair")
- **Problem keywords** — what a customer would search when experiencing the issue (e.g., "truck broke down on highway")
- **Local keywords** — geography-specific (e.g., "mobile mechanic Charlotte NC")

**For healingwithattia.com**, map these same buckets:
- **Urgency:** "online therapist pakistan right now", "need therapist urgently"
- **Service:** "marriage counseling pakistan", "trauma therapy online", "CBT therapy online"
- **Problem:** "anxiety treatment pakistan", "feeling depressed pakistan", "relationship problems help"
- **Local:** "therapist islamabad", "marriage counseling karachi", "therapy lahore"

**Search Intent Filter:**
After getting the list, analyze each keyword for **buying intent vs. information intent**:
- **High intent / transactional** = person is ready to book, call, or pay (PRIORITIZE THESE)
- **Informational** = person is just researching, not ready to act

You want to build pages and rank for transactional keywords first. These bring in revenue. Informational content (blog posts) is valuable for topical authority but is a secondary priority.

---

### PHASE 2: Keyword-to-Page Mapping (Demand → Supply)

**The Core SEO Mental Model:**
> SEO = Demand (what people search for) matched with Supply (pages on your website)

Every keyword cluster you want to rank for needs a **dedicated page**. One page cannot rank well for everything. James built:
- A dedicated page for each **service** the business offered
- A dedicated **location page** for every city/area they serve
- Each page targeted one primary keyword + related semantic variants

**How to apply to healingwithattia.com:**

| Keyword Cluster | Page to Create/Optimize |
|---|---|
| marriage counseling pakistan | blog-relationships-therapy.html → rebuild as full service page |
| online marriage counseling | Same page + homepage mention |
| couples therapy pakistan | Same page |
| marriage counseling karachi | therapy-karachi.html → add marriage counseling section |
| marriage counseling lahore | therapy-lahore.html → add marriage counseling section |
| muslim marriage counseling | New blog/article page |
| islamabad therapist | New city landing page (therapy-islamabad.html) |
| anxiety therapist pakistan | services.html + potentially new page |
| trauma therapy pakistan | services.html + potentially new page |

The rule: **one primary keyword per page, supported by semantic variants.**

---

### PHASE 3: Build / Optimize the Website with Claude Code

**If building from scratch (for future reference):**
- Hire a designer to create a Figma file (do NOT skip this — vibe-coded sites look the same)
- Use the **Anima plugin** in Figma to convert designs into React components
- Drop those React components into Claude Code
- Claude Code assembles the site to ~95% completion
- Minor vibe-coding adjustments for the final 5%

**For an existing site like healingwithattia.com:**
- Open Claude Code in the terminal in the site's folder
- Give Claude Code context: *"This is a static HTML website for [business description]. Here's what I want to achieve."*

---

### PHASE 4: Technical SEO Audit with Claude Code

**What:** Have Claude Code crawl your own codebase and find every technical SEO issue hiding inside.

**The Exact Prompt James Used:**
> *"Go through this website in extreme detail. Ultra think about this. Go deep and do deep research. Find all the technical and on-page SEO issues and opportunities that we can fix together so I can dominate [my target market]."*

**Power move:** Add `ultrathink` to your Claude Code prompt to make it spend longer reasoning through the problem before acting. Use the Opus model for this audit step if possible — it goes deeper.

**What Claude Code will find and fix automatically:**

| Issue | What It Means | Why It Matters |
|---|---|---|
| Missing robots.txt | Google doesn't know what to crawl | Core indexing signal |
| Missing/broken XML sitemap | Google can't discover all your pages | Faster indexing |
| Missing schema markup | Google can't understand your content type | Rich results + LLM visibility |
| Slow page speed | Pages take too long to load | Google ranking factor |
| Large unoptimized images | Makes site slow | Speed + Core Web Vitals |
| Non-webp image formats | Old formats are larger | Speed optimization |
| Missing meta descriptions | Search results look incomplete | CTR improvement |
| Missing alt text | Images invisible to Google | Accessibility + SEO |
| Broken internal links | Dead ends for crawlers | Crawl efficiency |
| URL structure issues | Confusing URLs hurt rankings | Crawlability |
| Missing or wrong canonical tags | Google sees duplicate content | Prevents ranking dilution |

**The beautiful part:** You don't need to understand any of this. Claude Code finds it AND fixes it. Just say: *"Fix them."*

**James's quote:** *"You just have to have that initial prompt. Claude will find it and Claude will do it."*

---

### PHASE 5: Content Depth — Location and Service Pages

**What separates a ranking page from a useless page:**

James didn't just create a page called "Diesel Services in Charlotte." He created a page that included:
- Local landmarks in Charlotte
- Common trucking problems specific to the Charlotte area
- FAQs about diesel repair in Charlotte
- References to local industries (NASCAR, shipping routes)
- Frequently asked questions

This depth signals to Google (and LLMs) that this is a **genuinely useful, authoritative resource** — not a thin page stuffed with keywords.

**For healingwithattia.com, this means every location/service page should include:**
- What therapy is like in that city (cultural context — very relevant for Pakistan)
- Common mental health challenges specific to that city or demographic
- How sessions work (online vs. in-person)
- FAQ section (schema-marked up)
- References to Attia's qualifications as they relate to that service
- Internal links to related services and city pages

**Example — "Marriage Counseling in Karachi" section on therapy-karachi.html:**
- What marriage counseling looks like in a Karachi cultural context
- Common relationship challenges in Karachi families
- How online sessions work for Karachi clients
- Why Attia's integrative approach is suited to Pakistani couples
- FAQ: "Is marriage counseling halal?", "Can we do couples therapy online?", etc.

The competitors are NOT doing this. That's the gap to fill.

---

### PHASE 6: Sub-Agents for Parallel SEO Work

**What:** Claude Code can spin up multiple AI agents working simultaneously on different tasks, so you don't have to wait for one job to finish before starting the next.

**Example prompts James used:**
- *"Launch three agents: one to find missing alt text, one to identify pages under X words, one to audit for missing meta descriptions."*
- *"Launch three agents: one to find content opportunities, one to analyze my competitors, one to identify all other SEO fixes on this website."*

**Why this matters:** While you're actively working on one part of the site, three other agents are researching what else needs to be done. You come back and have a full prioritized list of next actions waiting for you.

**For healingwithattia.com use case:**
- Agent 1: Find all pages missing schema markup
- Agent 2: Analyze competitor therapy websites in Pakistan and identify content gaps
- Agent 3: Audit all internal links and identify pages that have none pointing to them

---

### PHASE 7: Page Speed Optimization

**Tool:** Google PageSpeed Insights — free, at pagespeed.web.dev

**Process:**
1. Go to PageSpeed Insights and enter your URL
2. Read the scores for Mobile and Desktop
3. Scroll down to see specific errors and diagnostics
4. Copy the error details and paste them into Claude Code
5. Claude Code knows exactly what to fix

**James's hack:** *"Everyone's done a little bit of vibe debugging — you found some errors in the code, you copy and paste back to the agent to go fix it. You can do the same thing for this."*

**What Claude Code will fix:**
- Convert images to WebP format (smaller, faster)
- Compress image file sizes
- Fix render-blocking resources
- Improve Largest Contentful Paint (LCP)
- Fix Cumulative Layout Shift (CLS) issues

**Why this matters more in niche/local markets:**
James ranked quickly partly because his competitors' sites were old and slow. A fast, modern site immediately looks more trustworthy to Google. In Pakistan's therapy market, this is almost certainly a significant edge.

**Stretch tool:** SEMrush (paid) does a deeper technical audit. The process is the same — run the audit, copy the results, paste into Claude Code, let it prioritize and fix.

---

### PHASE 8: Google Business Profile + NAP Consistency

**What:** Set up and optimize your Google Business Profile (GBP), and make sure all business information is identical across your website AND your GBP.

**Why:** For local and niche searches, the Google Maps/local pack results (the 3 businesses that appear in a box at the top of results) are extremely high-value. They drive phone calls directly. James showed up in the Maps pack within 24 hours of making his changes.

**NAP = Name, Address, Phone Number.** Google penalizes inconsistencies. If your website says one phone number and your GBP says another, that hurts rankings.

**How James used Claude Code for this:**
- Had Claude Code go back and forth between the website and the GBP information
- Claude checked every instance of the business name, address, and phone number for consistency
- Fixed any mismatches

**For healingwithattia.com:**
- Business name must be identical everywhere: "Healing with Attia" (or the exact registered name)
- Phone number must match: WhatsApp +923285694209 (or a primary contact number)
- Description, categories, and services in GBP should mirror the website language
- If GBP isn't set up yet — set it up. It's free and essential.

---

### PHASE 9: Internal Linking

**What:** Links between pages on your own website that help Google understand which pages are related and how they connect.

**Why it matters:**
- Internal links pass "authority" from one page to another
- They help Google discover pages it might have missed
- They tell Google which pages are most important
- They keep users navigating deeper into the site

**What Claude Code did without being asked:**
James noted that Claude Code automatically discovered his internal linking needs and created them without explicit instructions. It linked related location pages to each other, and related service pages to each other.

**For healingwithattia.com — key internal links needed:**
- Every blog post should link to the relevant service page (e.g., a blog about anxiety → services.html + therapy page)
- City pages (Karachi, Lahore) should link to each other and to the marriage counseling page
- The marriage counseling page should link to the Islamic/Muslim marriage counseling article
- The homepage should link to the top 3–4 most important service/landing pages
- blog-rishta-stress.html should link to the marriage counseling page

Claude Code prompt: *"Review all the pages on this website and create a comprehensive internal linking strategy. Link related pages to each other naturally. Prioritize pages about [marriage counseling / anxiety / trauma]. Make sure no page is an orphan with zero internal links pointing to it."*

---

### PHASE 10: LLM Visibility (GEO / AI Search)

**The question:** If AI tools like ChatGPT and Perplexity are becoming how people find things, how do you show up there?

**James's answer (and it's the right one):** Do good foundational SEO. That's it.

There's no secret "GEO" strategy that's different from SEO. LLMs pull from the same high-quality, authoritative sources that Google ranks highly. If you rank well on Google, you'll appear in AI answers. The principles overlap almost entirely:

- Clean technical foundation (fast, crawlable site)
- Correct meta tags and structured data (schema markup)
- Natural keyword integration — no stuffing
- Topical authority (enough content around your topic that you're the go-to source)
- Backlinks (other websites linking to yours)
- Reviews (Google Reviews for local credibility)

**One tactical add-on:**
Add an `llms.txt` file to your website root. This is an "allow list" that explicitly tells AI crawlers they're welcome to index your site. Claude Code can create this in 30 seconds.

Prompt: *"Create an llms.txt file for this website that allows all major AI crawlers to access and index the content."*

---

### PHASE 11: Backlinks and Reviews

These are mentioned briefly but are essential long-term signals:

**Backlinks:**
- Other websites linking to yours is the single strongest authority signal in SEO
- Local directories (Pakistani business directories), mental health directories, guest articles
- Getting listed on any professional psychology/therapy body websites is extremely valuable for healingwithattia.com given the E-E-A-T requirements for YMYL (health) content

**Reviews:**
- Google Reviews cannot be faked, gamed, or AI-generated — they're a genuine trust signal
- For local/niche, they're irreplaceable
- Strategy: ask satisfied clients (who consent to doing so) to leave a Google Review
- Even 5–10 genuine reviews can be decisive in a thin market

---

## Summary: The Exact Sequence to Run

Here is the distilled order of operations, start to finish:

```
1. Keyword Research       → Ask AI for 25–50 keywords → categorize by intent
2. Page Mapping           → Match each keyword cluster to a page (create if missing)
3. Technical SEO Audit    → Claude Code: "ultrathink, find all SEO issues, fix them"
4. Content Depth          → Each page: landmarks, FAQs, local context, schema
5. Sub-Agent Sweep        → Launch 3 agents: content gaps, competitor analysis, link audit
6. Page Speed Fix         → PageSpeed Insights → copy errors → Claude Code fixes
7. Google Business Profile → Set up + NAP consistency check with Claude Code
8. Internal Linking       → Claude Code builds linking map across all pages
9. llms.txt               → One-line addition to welcome AI crawlers
10. Backlinks + Reviews   → Manual ongoing effort — no shortcut
```

---

## Tools Referenced in the Video

| Tool | Cost | Purpose |
|---|---|---|
| Claude Code | ~$20/mo (Claude Pro) | All code, SEO audit, content, fixes |
| ChatGPT (GPT-o3) | Varies | Initial keyword research |
| Figma | Free/Paid | Design mockups before coding |
| Anima (Figma plugin) | Paid | Convert Figma → React components |
| GitHub | Free | Version control + rollback |
| Vercel | Free tier | Deploy and host the website |
| Google PageSpeed Insights | Free | Speed audit |
| SEMrush | Paid | Deep technical SEO audit |
| Google Business Profile | Free | Local Maps ranking |
| Google Search Console | Free | Track impressions, clicks, keyword positions |

---

## The Philosophy Behind All of This

James made one observation that's worth internalizing:

> *"The biggest gap I see with AI is people don't know the question to ask. That's where the vertical expertise comes in. That's really the gap — and the opportunity."*

The AI does the execution. Your job is to know what to ask. For healingwithattia.com, the vertical expertise is: understanding that Pakistani families search for therapists in Urdu, that "marriage counseling" is exploding in Pakistan, that the UK diaspora has high buying intent, and that E-E-A-T (Expertise, Experience, Authoritativeness, Trustworthiness) matters enormously for mental health content.

Claude Code is the engine. The SEO strategy is the steering wheel. You need both.

---

*Document prepared May 2026 — based on "The Boring Marketer" podcast episode on Claude Code SEO*
