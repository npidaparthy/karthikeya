# Karthikeya Pidaparthy — Samskruti

Personal website for **Karthikeya Pidaparthy**, 10-year-old Sanskrit scholar from Sydney, Australia.

**Live site:** https://nagendra-pb.github.io/karthikeya/

---

## How it works

- `index.html` is the **single production file** — all CSS, JS, and trilingual content are embedded in it.
- All text lives in `content/[lang]/[section].json` (14 sections × 3 languages).
- After editing any JSON file, run `python3 build_site.py` to rebuild `index.html`.
- Pushing to `main` triggers GitHub Actions, which rebuilds and deploys automatically (~60 s).

---

## File structure

```
karthikeya/
├── index.html                    ← Production file — do not edit content here directly
├── build_site.py                 ← Embeds all JSON into index.html (run after every JSON edit)
├── auto_translate.py             ← Translates EN → TE + SA via Claude API
├── add_photo.py                  ← Adds a new photo to the hero gallery
├── content/
│   ├── en/                       ← English (source of truth — edit these)
│   │   ├── nav.json              ← Nav labels
│   │   ├── hero.json             ← Hero title, description, badges
│   │   ├── about.json            ← About paragraphs, quote, cards
│   │   ├── profile.json          ← Achievements, exam table, journey narrative
│   │   ├── credits.json          ← Guru & family credits
│   │   ├── events.json           ← Timeline of events
│   │   ├── parayana.json         ← Stotra/recitation list (3 scripts per verse)
│   │   ├── support.json          ← Sponsor/support section
│   │   ├── testimonials.json     ← Quotes from scholars and elders
│   │   ├── youtube.json          ← YouTube channel + video cards
│   │   ├── contact.json          ← Contact form labels
│   │   ├── footer.json           ← Footer copyright + Sanskrit quote
│   │   ├── settings.json         ← Settings panel labels
│   │   └── wisdom.json           ← Daily wisdom / rotating quotes
│   ├── te/                       ← Telugu translations (same filenames)
│   └── sa/                       ← Sanskrit translations (same filenames)
├── assets/
│   ├── logo.svg                  ← Om logo (nav top-left)
│   └── cover-page-image/         ← Hero gallery photos
│       ├── manifest.json         ← Documentation of gallery photos (not read at runtime)
│       └── karthikeya-*.jpg
├── _archive/                     ← Old files kept for reference, not used
├── .github/workflows/
│   └── deploy.yml                ← CI: validate JSON → build → deploy to GitHub Pages
└── Contact_Form_Setup.md         ← How the Google Sheets contact form is wired
```

---

## Standard workflow

```bash
# 1. Edit one or more content/en/*.json files
# 2. Optionally auto-translate to Telugu and Sanskrit
python3 auto_translate.py [section]   # e.g. python3 auto_translate.py profile

# 3. Rebuild index.html
python3 build_site.py

# 4. Commit and push
git add content/ index.html
git commit -m "Update: describe what changed"
git push
```

GitHub Actions does the rest — live in ~60 seconds.

---

## HOWTO — each section

### Home (hero)

The full-screen landing section with the rotating photo gallery, name, description, and badges.

**Files:** `content/en/hero.json`, `content/te/hero.json`, `content/sa/hero.json`

**Edit the description or badges:**
```json
{
  "description": "Updated description text here.",
  "badges": ["🏅 Badge one", "🥇 Badge two", "📖 Badge three"]
}
```

**Add a photo to the gallery:**
```bash
# Copy photo to assets/cover-page-image/ first, then:
python3 add_photo.py assets/cover-page-image/your-photo.jpg \
    --title-en "Title in English" \
    --title-te "శీర్షిక తెలుగులో" \
    --title-sa "संस्कृतभाషायां शीर्षकम्" \
    --desc-en  "Description in English." \
    --desc-te  "తెలుగులో వివరణ." \
    --desc-sa  "संस्कृते वर्णनम्।"
```
Photo tips: JPG/PNG, 600×600 px minimum, square crops work best, hyphens not spaces in filename.

**Or add manually:** open `index.html`, find `const GALLERY_SLIDES = [` and insert:
```javascript
{
  src: "assets/cover-page-image/your-photo.jpg",
  title_en: "Title", title_te: "శీర్షిక", title_sa: "शीर्षकम्",
  desc_en: "Description.", desc_te: "వివరణ.", desc_sa: "वर्णनम्।"
},
```
No rebuild needed for gallery changes — `GALLERY_SLIDES` lives outside the `const ALL` blob.

**Control the crop position** (optional `pos` field — useful for portrait photos):
```javascript
{
  src: "assets/cover-page-image/your-photo.jpg",
  pos: "center 15%",   // shifts image up so face shows; omit for default center
  title_en: "Title", title_te: "శీర్షిక", title_sa: "शीर्षकम्",
  desc_en: "Description.", desc_te: "వివరణ.", desc_sa: "वर्णनम्।"
},
```
`pos` values: `"center top"` (face at top), `"center 10%"` (slightly down), `"center center"` (default, good for landscape/group shots).

**Remove a slide entirely:** open `index.html`, find `const GALLERY_SLIDES = [` and delete the entire `{ … },` block for that slide. Example — to remove the logo/default slide, delete:
```javascript
  {
    src: "assets/logo.svg",
    title_en: "Karthikeya Pidaparthy",
    ...
  },
```
Save the file — the gallery updates immediately with no rebuild needed.

---

### About

Overview of Karthikeya with two paragraphs, a Sanskrit quote, and three cards (Languages, Pārāyaṇa, Achievements).

**Files:** `content/en/about.json`, `content/te/about.json`, `content/sa/about.json`

**Edit paragraphs or quote:**
```json
{
  "para1": "First paragraph text.",
  "para2": "Second paragraph text.",
  "quote_sa": "विद्या ददाति विनयम् ।",
  "quote_iast": "vidyā dadāti vinayam",
  "quote_te": "విద్య వినయమిస్తుంది.",
  "quote_en": "Knowledge bestows humility."
}
```

**Edit the three cards:** find `"cards"` in the JSON — each card has `title` and `body`.

---

### Profile

Detailed achievements list, exam score table, and narrative biography.

**Files:** `content/en/profile.json`, `content/te/profile.json`, `content/sa/profile.json`

**Add an achievement:**
```json
{
  "icon": "🏆",
  "title": "Achievement Title",
  "desc": "What was achieved.",
  "year": "Organisation · Year",
  "tag": "gold"
}
```
Available tags: `gold` · `olympiad` · `parayana` · `scholar` · `competition` · `discourse`

**Add a row to the exam table:** find `"exam_rows"` and add:
```json
{ "level": "Level Name", "work": "Work recited", "score": "Score/Result", "year": "Year" }
```

**Edit the journey narrative:** find `"journey"` — it's a long string with `\n` for line breaks.

**Add a profile photo:** photos go in `assets/photos/`. Reference them in the `"photos"` array in `profile.json`.

---

### Credits

Acknowledges Karthikeya's guru, parents, and other supporters.

**Files:** `content/en/credits.json`, `content/te/credits.json`, `content/sa/credits.json`

**Add a credit entry:** find `"list"` and add:
```json
{
  "icon": "🙏",
  "name": "Person or Organisation Name",
  "role": "Their role or relationship",
  "desc": "A sentence about their contribution."
}
```

---

### Events

A timeline of performances, competitions, and milestones.

**Files:** `content/en/events.json`, `content/te/events.json`, `content/sa/events.json`

**Add an event:**
```json
{
  "date": "Month Year · Venue",
  "title": "Event Title",
  "desc": "What happened at this event.",
  "has_photo": false
}
```
Set `"has_photo": true` to show a photo placeholder. Replace the placeholder with a real image by editing `index.html` after building:
```html
<img src="assets/photos/event-name.jpg" alt="Event description" style="width:100%;height:100%;object-fit:cover;border-radius:8px"/>
```

---

### Pārāyaṇa

Lists all stotras and works that Karthikeya has memorised or regularly recites, with verses shown in three scripts (Telugu, Devanāgarī, IAST).

**Files:** `content/en/parayana.json`, `content/te/parayana.json`, `content/sa/parayana.json`

**Add a stotra:**
```json
{
  "title": "Stotra Name",
  "desc": "Brief description — what it is, how many verses.",
  "verses_te": "verse line in Telugu script",
  "verses_dev": "verse line in Devanāgarī",
  "verses_iast": "verse line in IAST"
}
```

---

### Sponsor (Support)

Invites well-wishers to support Karthikeya's journey.

**Files:** `content/en/support.json`, `content/te/support.json`, `content/sa/support.json`

**Edit the message or UPI/bank details:** open `support.json` and update the relevant fields.
The section intentionally has no payment gateway — details are shown as text for manual bank transfer or UPI.

---

### Testimonials

Rotating quotes from scholars, elders, and community members.

**Files:** `content/en/testimonials.json`, `content/te/testimonials.json`, `content/sa/testimonials.json`

**Add a testimonial:**
```json
{
  "text": "What they said about Karthikeya.",
  "by": "Person's Name",
  "role": "Their title, organisation, or occasion"
}
```

---

### YouTube

Showcases the Samskruti YouTube channel with three video/playlist cards.

**Files:** `content/en/youtube.json`, `content/te/youtube.json`, `content/sa/youtube.json`

**Update the channel URL or name:** edit `channel_url` and `channel_name`.

**Update a video card:**
```json
{
  "title": "Card Title",
  "meta": "Subtitle · Additional info",
  "url": "https://youtu.be/VIDEO_ID"
}
```
Cards with a direct video URL (`youtu.be/VIDEO_ID` or `?v=VIDEO_ID`) automatically show the YouTube thumbnail.
Cards linking to playlists show a gradient placeholder — add a `"thumb"` field with a thumbnail URL to override:
```json
{
  "title": "Playlist Name",
  "meta": "Description",
  "url": "https://www.youtube.com/playlist?list=...",
  "thumb": "https://img.youtube.com/vi/SOME_VIDEO_ID/hqdefault.jpg"
}
```

After editing any `youtube.json`, rebuild:
```bash
python3 build_site.py
```

---

### Contact

Contact form that saves submissions to a Google Sheet via Google Apps Script.

**Files:** `content/en/contact.json`, `content/te/contact.json`, `content/sa/contact.json`

**Edit labels or the intro text:** update `intro`, `location_city`, `location_country` in the JSON.

**The form endpoint** is hardcoded in `index.html` (search for `APPS_SCRIPT_URL`). See `Contact_Form_Setup.md` for full setup instructions.

---

## Favicon

The site picks one of **70 SVG favicons randomly** on every page load (no flicker — runs before paint).

All favicons live in `favicons/`. Full reference: [`favicons/favicon.md`](favicons/favicon.md)

> ⚠️ **Critical rule:** every name listed in the `favs` array inside `index.html` must have a matching `.svg` file in the `favicons/` folder. If the file is missing the browser gets a 404 and shows a blank tab icon.

**Add a favicon:**
1. Drop your file in `favicons/` — e.g. `favicons/fav-71-my-new.svg` (use `viewBox="0 0 32 32"`)
2. Open `index.html`, search for `fav-01-om-gold` — add `"fav-71-my-new"` to the `favs` array
3. Add a row to `favicons/favicon.md` for reference

**Remove a favicon — always two steps together:**
1. Delete the `.svg` file from `favicons/`
2. Remove the matching name from the `favs` array in `index.html` (search for the filename)

Skipping step 2 = blank tab icon on the visits that randomly land on that entry.

**Hide a favicon without deleting the file:**
Remove it from the `favs` array only — file stays in `favicons/` as backup, just never gets picked.

**Pin one favicon permanently (stop random):**
Replace the `<link rel="icon"> … </script>` block in `index.html` with just:
```html
<link rel="icon" href="favicons/fav-07-om-squircle-gold.svg" type="image/svg+xml"/>
```

---

## Settings panel (gear icon ⚙)

Users can adjust these preferences — all saved to `localStorage`, restored on next visit:

| Setting | Options |
|---|---|
| Language | EN / తె / सं |
| Font size | 14–22 px slider |
| Accent colour | Gold · Amber · Maroon · Forest · Navy · Violet |
| Footer pin | Fixed to bottom (default) or scrolls with page |

**To change the default accent colour or font size:** edit the fallback values in the JS block of `index.html` (search for `kp-theme`, `kp-font`, `kp-accent`).

---

## Footer

Three-column layout: name (left) · Sanskrit quote (centre) · YouTube link (right). Stacks on mobile.

**Files:** `content/en/footer.json`, `content/te/footer.json`, `content/sa/footer.json`

**Edit the Sanskrit quote or copyright name:** update `quote_sa`, `quote_iast`, `name` in the JSON.

---

## Wisdom (rotating daily quote)

A subtle rotating quote block (if enabled in the site). Draws from a pool of Sanskrit/Telugu wisdom sayings.

**Files:** `content/en/wisdom.json`, `content/te/wisdom.json`, `content/sa/wisdom.json`

**Add a wisdom quote:** find `"quotes"` and add:
```json
{
  "sa": "संस्कृतश्लोकः",
  "iast": "saṃskṛta-śloka",
  "te": "తెలుగు అనువాదం",
  "en": "English translation.",
  "source": "Source text or author"
}
```

---

## Auto-translate (Claude API)

After editing English content, auto-generate Telugu and Sanskrit translations:

```bash
export ANTHROPIC_API_KEY="sk-ant-..."

python3 auto_translate.py              # Translate all sections
python3 auto_translate.py profile      # Translate one section
python3 auto_translate.py profile te   # Translate one section, one language
python3 auto_translate.py --force      # Overwrite existing translations
```

Always run `python3 build_site.py` after translating.

---

## Deploy to GitHub Pages

**First-time setup:**
```bash
git init
git add .
git commit -m "Initial commit — Samskruti website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```
On GitHub: **Settings → Pages → Source → GitHub Actions**

**Ongoing updates:**
```bash
python3 build_site.py
git add content/ index.html
git commit -m "Update: what changed"
git push
```

---

*Built for Karthikeya Pidaparthy — may his journey in dharma, vidyā and bhakti inspire many.*
