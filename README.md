# 🕉 Karthikeya Pidaparthy — Samskruti

Personal website for **Karthikeya Pidaparthy**, 10-year-old Sanskrit scholar from Sydney, Australia.

🌐 **Live site:** `https://<your-username>.github.io/<repo-name>/`

---

## ✨ Features

| Feature | Details |
|---|---|
| **3 Languages** | English, Telugu (తెలుగు), Sanskrit (संस्कृतम्) — instant switching |
| **Language pill** | Always-visible 3-button EN / తె / सं in the nav bar |
| **Correct fonts** | Cormorant Garamond (EN) · Noto Sans Telugu (TE) · Noto Sans Devanagari (SA) |
| **Font size slider** | 14–22px, preserved across sessions |
| **6 accent colours** | Gold · Amber · Maroon · Forest · Navy · Violet |
| **Sanskrit 3 scripts** | Every verse shown in Telugu, Devanāgarī, IAST — tabbed |
| **Photo placeholders** | 8 slots in Profile + per-event placeholders (ready for your images) |
| **Exam record table** | Āyanam → Sāriṇī → Saralā → Sugamā → Sarasā with scores |
| **Timeline** | All events with photo placeholders |
| **GitHub Pages** | Auto-deploys on every push to `main` |
| **Modular content** | Each section is a separate JSON file — easy to edit |

---

## 📁 File Structure

```
karthikeya-site/
├── index.html              ← Full website (all 3 languages embedded, no server needed)
├── assets/
│   └── logo.svg            ← Om logo (top-left nav)
├── content/
│   ├── en/                 ← English content (source of truth)
│   │   ├── nav.json
│   │   ├── hero.json
│   │   ├── about.json
│   │   ├── profile.json    ← Achievements, exam table, journey narrative
│   │   ├── credits.json
│   │   ├── events.json
│   │   ├── parayana.json   ← Sanskrit stotras in 3 scripts
│   │   ├── support.json
│   │   ├── testimonials.json
│   │   ├── youtube.json
│   │   ├── contact.json
│   │   ├── footer.json
│   │   └── settings.json
│   ├── te/                 ← Telugu translations (same files)
│   └── sa/                 ← Sanskrit translations (same files)
├── build_site.py           ← Rebuilds index.html from JSON files
├── auto_translate.py       ← Auto-translates EN → TE + SA via Claude API
└── .github/workflows/
    └── deploy.yml          ← GitHub Actions: validate + build + deploy
```

---

## ✏️ How to Update Content

**Always edit the JSON files, never edit index.html directly for content.**

### 1. Add a new achievement
Open `content/en/profile.json`, find `"achievements"`, add:
```json
{
  "icon": "🏆",
  "title": "Your Achievement Title",
  "desc": "Description of the achievement.",
  "year": "Organisation · Year",
  "tag": "gold"
}
```
Tags: `gold` | `olympiad` | `parayana` | `scholar` | `competition` | `discourse`

Do the same in `content/te/profile.json` and `content/sa/profile.json`,
**or** run the auto-translator (see below).

### 2. Add a new event
In `content/en/events.json`, find `"list"`, add:
```json
{
  "date": "Month / Venue",
  "title": "Event Title",
  "desc": "What happened.",
  "has_photo": true
}
```
Set `"has_photo": true` to show a photo placeholder slot.

### 3. Add a testimonial
In `content/en/testimonials.json`:
```json
{
  "text": "What they said.",
  "by": "Person Name",
  "role": "Their title / occasion"
}
```

### 4. Add a photo
Replace any `cert-ph` placeholder div in index.html with:
```html
<img src="assets/photos/your-photo.jpg" style="width:100%;height:100%;object-fit:cover;border-radius:8px"/>
```
Put photos in `assets/photos/`.

---

## 🔄 Rebuild index.html After Editing JSON

After editing any content file, run:
```bash
python3 build_site.py
```
This embeds all 3 languages into `index.html` so it works without a server.

---

## 🤖 Auto-Translate (Claude API)

Set your API key, then run:
```bash
export ANTHROPIC_API_KEY="sk-ant-..."

# Translate all sections
python3 auto_translate.py

# Translate only one section
python3 auto_translate.py profile

# Translate one section to one language
python3 auto_translate.py profile te

# Force overwrite existing translations
python3 auto_translate.py --force
```

After auto-translating, always run:
```bash
python3 build_site.py
```

---

## 🚀 Deploy to GitHub Pages

### First time:
```bash
git init
git add .
git commit -m "Initial commit — Karthikeya Pidaparthy Samskruti website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

Then on GitHub: **Settings → Pages → Source → GitHub Actions**

### After any update:
```bash
# Edit JSON files, then:
python3 build_site.py
git add -A
git commit -m "Update: describe what changed"
git push
```

GitHub Actions automatically: validates JSON → rebuilds index.html → deploys. ~60 seconds.

---

## 📸 Adding Karthikeya's Photos

1. Put photos in `assets/photos/` folder
2. For the hero avatar, replace the SVG in `index.html`:
   ```html
   <div class="avatar-ring">
     <img src="assets/photos/karthikeya-main.jpg" alt="Karthikeya Pidaparthy"/>
   </div>
   ```
3. For certificate placeholders, replace `.cert-ph` divs with `<img>` tags
4. For event photos, replace `.tl-ph` divs with `<img>` tags
5. Run `git add assets/photos/ && git commit -m "Add photos" && git push`

---

## 📸 Hero Gallery — Auto-Scrolling Photo Slideshow

The hero section shows a circular photo gallery that:
- **Auto-scrolls** every 4.5 seconds
- **Pauses on hover**
- Shows a **caption with title + description** on hover
- Supports **← → keyboard navigation** and **touch swipe** on mobile
- Captions update automatically when you **switch language**

### Adding a new photo

**Method 1 — Helper script (recommended):**
```bash
python3 add_photo.py photos/gold-medal.jpg \
    --title-en "Gold Medal — Mysore Datta Peetham" \
    --title-te "స్వర్ణపతకం — మైసూర్ దత్త పీఠం" \
    --title-sa "स्वर्णपदकम् — मैसूरु-दत्तपीठम्" \
    --desc-en  "Receiving the Gold Medal for memorising all 700 Bhagavad Gītā verses." \
    --desc-te  "భగవద్గీత 700 శ్లోకాలకు స్వర్ణపతకం అందుకుంటున్న సందర్భం." \
    --desc-sa  "सप्तशतश्लोकान् कण्ठस्थीकृत्य स्वर्णपदकं प्राप्नोति।"

git add -A && git commit -m "Add: Gold Medal photo" && git push
```

**Method 2 — Manual edit:**

1. Copy your photo to `assets/cover-page-image/`
2. Open `index.html`, find `const GALLERY_SLIDES = [`
3. Add a new entry before `// More slides will be added here...`:

```javascript
{
  src: "assets/cover-page-image/your-photo.jpg",
  title_en: "Your Title in English",
  title_te: "మీ శీర్షిక తెలుగులో",
  title_sa: "संस्कृतभाषायां शीर्षकम्",
  desc_en: "Description in English.",
  desc_te: "తెలుగులో వివరణ.",
  desc_sa: "संस्कृते वर्णनम्।"
},
```

4. `git add -A && git commit -m "Add photo" && git push`

### Photo tips
- **Size:** 600×600px or larger, square crops work best (the gallery is circular)
- **Format:** JPG or PNG
- **Location:** `assets/cover-page-image/`
- **Filenames:** Use hyphens, no spaces (e.g. `gold-medal-2024.jpg`)

### Current photos in gallery
| File | Title |
|------|-------|
| `karthikeya-default.jpg` | Default avatar (embedded, always shown) |

*(Add more rows as you add photos)*


---

## 🎨 Customising Colours

Open `index.html` in a text editor, find `:root {` and change:
- `--gold`: main accent colour
- `--mar`: maroon accent (hero text, timeline)

Or use the **Settings ⚙** panel on the live site — 6 preset colour themes.

---

*Built with love for Karthikeya Pidaparthy — may his journey in dharma, vidyā and bhakti inspire many.*

---

## ✏️ Fixing Typos & Editing Content

All text lives in `content/[lang]/[section].json`. There are 3 ways to fix typos:

### Method 1 — Direct JSON edit (simplest)

Open the file in any text editor, fix the typo, save:
```
content/te/profile.json     ← Telugu profile text
content/sa/hero.json        ← Sanskrit hero text
content/en/events.json      ← English events
```
Then rebuild and deploy:
```bash
python3 build_site.py
git add content/ index.html
git commit -m "Fix typos in Telugu profile"
git push
```

### Method 2 — edit_content.py helper

```bash
# See all sections and their status
python3 edit_content.py

# View Telugu content for a section (to spot typos)
python3 edit_content.py profile te
python3 edit_content.py events te
python3 edit_content.py about sa

# Open all 3 language files for a section in your text editor
python3 edit_content.py profile --edit
python3 edit_content.py nav --edit

# Check which keys differ between languages
python3 edit_content.py --diff profile

# Validate all JSON + rebuild HTML in one step
python3 edit_content.py --fix
```

Set your preferred editor before using `--edit`:
```bash
export EDITOR=nano       # terminal editor
export EDITOR=vim
export EDITOR="code --wait"  # VS Code (waits for you to close)
```

### Method 3 — Quick fix from Python

```python
from edit_content import cd, load, save
cd()

# Fix a single value
data = load("te", "profile")
data["achievements"][0]["title"] = "స్వర్ణపతకం — భగవద్గీత"  # corrected
save("te", "profile", data)

# Then rebuild
import subprocess, sys
subprocess.run([sys.executable, "build_site.py"])
```

### Checking all languages at once

```bash
# Show the full nav section in all 3 languages to compare
python3 edit_content.py nav

# Show hero in Telugu only
python3 edit_content.py hero te

# Validate every file and rebuild
python3 edit_content.py --fix
```

### Files to check for Telugu (తెలుగు) typos

| File | What it controls |
|------|-----------------|
| `content/te/nav.json` | Nav bar labels |
| `content/te/hero.json` | Hero section title, description, badges |
| `content/te/about.json` | About section paragraphs, cards |
| `content/te/profile.json` | Journey text, achievement titles & descriptions |
| `content/te/events.json` | Event titles and descriptions |
| `content/te/parayana.json` | Stotra titles and attributions |
| `content/te/credits.json` | Credit names and roles |
| `content/te/testimonials.json` | Testimonial text |
| `content/te/contact.json` | Contact form labels |
| `content/te/footer.json` | Footer text |

