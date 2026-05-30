#!/usr/bin/env python3
"""
build_site.py
─────────────
Reads all content/[lang]/[section].json files and embeds them
into index.html as a single JS object, so the site works
without a web server (file://, GitHub Pages, Claude preview, etc.)

Usage:
  python3 build_site.py

Output: index.html (updated in-place)
"""

import json, os, re

LANGS     = ["en", "te", "sa"]
SECTIONS  = ["nav","hero","about","profile","credits","events",
             "parayana","support","testimonials","youtube","contact","footer","settings"]

def load_all():
    all_data = {}
    for lang in LANGS:
        all_data[lang] = {}
        for sec in SECTIONS:
            path = f"content/{lang}/{sec}.json"
            if os.path.exists(path):
                with open(path, encoding="utf-8") as f:
                    all_data[lang][sec] = json.load(f)
            else:
                print(f"  ⚠  Missing: {path}")
    return all_data

def build():
    print("📦 Loading content files...")
    data = load_all()
    js_blob = json.dumps(data, ensure_ascii=False)

    template = "index_template.html"
    if not os.path.exists(template):
        template = "index.html"

    with open(template, encoding="utf-8") as f:
        html = f.read()

    # Replace the ALL = {...} block
    new_assignment = f"const ALL = {js_blob};"
    html = re.sub(r"const ALL\s*=\s*\{.*?\};", new_assignment, html, flags=re.DOTALL)

    with open("index.html", "w", encoding="utf-8") as f:
        f.write(html)

    kb = len(html.encode()) // 1024
    print(f"✅ Built index.html ({kb} KB)")
    print(f"   Languages: {LANGS}")
    print(f"   Sections : {SECTIONS}")

if __name__ == "__main__":
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    build()
