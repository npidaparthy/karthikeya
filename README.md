# Karthikeya Pidaparthy — Samskruti Website

Personal website for Karthikeya Pidaparthy, young Sanskrit scholar from Sydney, Australia.

## 🌐 Live Site
Once deployed: `https://<your-github-username>.github.io/<repo-name>/`

---

## 📁 Structure

```
├── index.html                  ← Main website (all sections, loads content from JSON)
├── content/
│   ├── en/strings.json         ← English content
│   ├── te/strings.json         ← Telugu content (తెలుగు)
│   └── sa/strings.json         ← Sanskrit content (संस्कृतम्)
└── .github/
    └── workflows/
        └── deploy.yml          ← Auto-deploy to GitHub Pages on every push
```

---

## ✏️ How to Update Content

All website text lives in the JSON files under `content/`. You **never** need to touch `index.html` for content changes.

### To add a new achievement:
Open `content/en/strings.json`, find `"profile" → "achievements"`, and add a new object:
```json
{
  "icon": "🏆",
  "title": "Your Achievement Title",
  "desc": "Description of the achievement.",
  "year": "Organiser / Year"
}
```
Then do the same in `content/te/strings.json` (Telugu) and `content/sa/strings.json` (Sanskrit).

### To add a new event:
Open `content/en/strings.json`, find `"events" → "list"`, and add:
```json
{
  "date": "Month / Venue",
  "title": "Event Title",
  "desc": "Description of what happened."
}
```

### To add a testimonial:
Open `content/en/strings.json`, find `"testimonials" → "list"`, and add:
```json
{
  "text": "What they said.",
  "by": "Name of the person",
  "role": "Their title / occasion"
}
```

### To add a pārāyaṇa stotra:
Find `"parayana" → "stotras"` and add:
```json
{
  "id": "unique_id",
  "title": "Stotra Name",
  "te": "Telugu script verse",
  "dev": "Devanāgarī verse",
  "iast": "IAST transliteration",
  "attribution": "Source / context"
}
```

---

## 🚀 Deploy to GitHub Pages

### First-time setup:
1. Create a new GitHub repository (e.g. `samskruti` or `karthikeya`)
2. Push this folder to the `main` branch:
   ```bash
   git init
   git add .
   git commit -m "Initial commit — Karthikeya Pidaparthy website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```
3. Go to your repo on GitHub → **Settings** → **Pages**
4. Under **Source**, select **GitHub Actions**
5. The workflow will automatically deploy on every push!

### After updating content:
```bash
git add content/
git commit -m "Update: added new achievement / event / etc."
git push
```
GitHub Actions will automatically rebuild and redeploy the site within ~60 seconds.

---

## ⚙️ Site Features

| Feature | Description |
|---------|-------------|
| **i18n** | Full English, Telugu, Sanskrit — switch via nav button or settings panel |
| **Dark / Light mode** | Toggle in settings, preference saved in browser |
| **Font size** | Adjustable 13–22px slider in settings |
| **Accent colour** | 6 colour schemes: Gold, Amber, Maroon, Forest, Navy, Violet |
| **Sanskrit scripts** | Each verse shown in Telugu, Devanāgarī, and Roman IAST |
| **Responsive** | Works on mobile, tablet, desktop |
| **Preferences saved** | Theme, font, language remembered across visits |

---

## 📋 Sections (in order)

1. **Home** — Hero with name, badges, CTA
2. **About** — Bio, languages, scriptural knowledge
3. **Profile** — Achievement cards
4. **Credits** — Gratitude to scholars and organisations
5. **Events** — Timeline of milestones
6. **Pārāyaṇa** — Stotra verses in 3 scripts
7. **Support / Sponsor** — How to help
8. **Testimonials** — Words from scholars and temples
9. **Contact** — Message form + location
10. **YouTube** — Channel link + Bhāratam Laghu Prasaṅgālu playlist

---

*Built with love for Karthikeya Pidaparthy — may his journey in dharma, vidyā, and bhakti continue to inspire many.*
