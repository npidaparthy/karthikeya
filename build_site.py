#!/usr/bin/env python3
"""
build_site.py
─────────────
Reads all content/[lang]/[section].json files, merges them,
and embeds the data into index.html as the ALL constant.

Run this after editing any content JSON file:
  python3 build_site.py

The script replaces the line:
  const ALL = {...};
in index.html with fresh data from all JSON files.
"""

import json, os, re, sys

LANGS = ["en", "te", "sa"]
SECTIONS = [
    "nav", "hero", "about", "profile", "credits", "events",
    "parayana", "support", "testimonials", "youtube", "contact", "footer", "settings", "wisdom"
]

def load_all():
    all_data = {}
    missing = []
    for lang in LANGS:
        all_data[lang] = {}
        for sec in SECTIONS:
            path = f"content/{lang}/{sec}.json"
            if os.path.exists(path):
                with open(path, encoding="utf-8") as f:
                    all_data[lang][sec] = json.load(f)
            else:
                missing.append(path)
    if missing:
        print(f"  ⚠  Missing files ({len(missing)}):")
        for m in missing:
            print(f"     {m}")
    return all_data

def build():
    script_dir = os.path.dirname(os.path.abspath(__file__))
    os.chdir(script_dir)

    print("📦 Loading content files...")
    data = load_all()

    for lang in LANGS:
        sections_found = list(data[lang].keys())
        print(f"  {lang}: {len(sections_found)} sections — {sections_found}")

    js_blob = json.dumps(data, ensure_ascii=False, separators=(',', ':'))

    html_path = "index.html"
    if not os.path.exists(html_path):
        print(f"❌ {html_path} not found. Cannot build.")
        sys.exit(1)

    with open(html_path, encoding="utf-8") as f:
        html = f.read()

    # Replace const ALL = {...}; with fresh data
    pattern = r'const ALL\s*=\s*\{.*?\};'
    new_val = f'const ALL = {js_blob};'
    new_html, n = re.subn(pattern, lambda m: new_val, html, flags=re.DOTALL)

    if n == 0:
        print("❌ Could not find 'const ALL = {...};' in index.html")
        print("   Make sure index.html contains this JS line.")
        sys.exit(1)

    with open(html_path, "w", encoding="utf-8") as f:
        f.write(new_html)

    kb = len(new_html.encode()) // 1024
    print(f"\n✅ Built index.html ({kb} KB, replaced {n} occurrence(s))")
    print(f"\nTo auto-translate new EN content into TE and SA, run:")
    print(f"  python3 auto_translate.py [section]")

if __name__ == "__main__":
    build()

# ── Gallery note ──────────────────────────────────────────────────────────────
# To add a new photo to the hero gallery, use add_photo.py:
#   python3 add_photo.py path/to/photo.jpg \
#       --title-en "Your Title" --title-te "మీ శీర్షిక" --title-sa "शीर्षकम्" \
#       --desc-en  "Description" --desc-te "వివరణ" --desc-sa "वर्णनम्"
# Then commit and push. GitHub Actions will rebuild and deploy automatically.
