#!/usr/bin/env python3
"""
auto_translate.py
─────────────────
Usage:
  python3 auto_translate.py              # translate all EN files → TE + SA
  python3 auto_translate.py profile      # translate only profile.json
  python3 auto_translate.py profile te   # translate only profile.json to Telugu

Requirements:
  pip install anthropic

Set your API key:
  export ANTHROPIC_API_KEY="sk-ant-..."

How it works:
  1. Reads content/en/<section>.json
  2. Sends to Claude Sonnet with a rich prompt
  3. Saves translated JSON to content/te/ and content/sa/
  4. Preserves all JSON keys; only translates string values
  5. Skips keys that should stay unchanged (URLs, ids, icons, scores, years, tags)
"""

import json
import os
import sys
import anthropic

# Keys whose values should NEVER be translated
SKIP_KEYS = {
    "channel_url", "bharatam_url", "id", "tag", "icon", "grade",
    "quote_sa", "quote_iast", "sa", "iast", "te", "dev",
    "has_photo", "score", "year"
}

LANG_NAMES = {
    "te": "Telugu (తెలుగు) — use the Telugu script (not Roman/IAST). Use authentic classical Telugu vocabulary appropriate for a devotional/cultural context.",
    "sa": "Sanskrit (संस्कृतम्) — use Devanāgarī script. Use classical Sanskrit prose, appropriate to a devotional/biographical context. Maintain Sanskrit grammar and sandhi correctly."
}

SECTIONS = [
    "nav", "hero", "about", "profile", "credits",
    "events", "parayana", "support", "testimonials",
    "youtube", "contact", "footer", "settings"
]

def should_skip(key, value):
    if key in SKIP_KEYS:
        return True
    if isinstance(value, (bool, int, float)):
        return True
    if isinstance(value, str):
        # skip URLs, emojis-only, single chars, IAST-heavy strings
        if value.startswith("http"):
            return True
        if value.startswith("@"):
            return True
        if len(value.strip()) <= 2:
            return True
        # skip if all non-alpha (emojis, punctuation)
        stripped = ''.join(c for c in value if c.isalpha())
        if len(stripped) == 0:
            return True
    return False


def translate_value(client, value, target_lang, context_key, section):
    """Translate a single string value."""
    lang_instruction = LANG_NAMES[target_lang]
    prompt = f"""You are translating content for the personal website of Karthikeya Pidaparthy, a 10-year-old Sanskrit scholar from Sydney, Australia.

Target language: {lang_instruction}

Section: {section}
Key: {context_key}

Translate the following text. Return ONLY the translated text with no explanation, no quotes, no preamble:

{value}"""

    msg = client.messages.create(
        model="claude-sonnet-4-20250514",
        max_tokens=1000,
        messages=[{"role": "user", "content": prompt}]
    )
    return msg.content[0].text.strip()


def translate_object(client, obj, target_lang, section, path=""):
    """Recursively translate all translatable strings in a JSON object."""
    if isinstance(obj, dict):
        result = {}
        for key, value in obj.items():
            current_path = f"{path}.{key}" if path else key
            if should_skip(key, value):
                result[key] = value
                print(f"  ⏭  {current_path} (skipped)")
            elif isinstance(value, str) and value.strip():
                print(f"  🔄 {current_path}", end=" ... ", flush=True)
                result[key] = translate_value(client, value, target_lang, key, section)
                print("✓")
            elif isinstance(value, (dict, list)):
                result[key] = translate_object(client, value, target_lang, section, current_path)
            else:
                result[key] = value
        return result
    elif isinstance(obj, list):
        return [translate_object(client, item, target_lang, section, f"{path}[{i}]")
                for i, item in enumerate(obj)]
    else:
        return obj


def translate_section(client, section, target_langs):
    en_path = f"content/en/{section}.json"
    if not os.path.exists(en_path):
        print(f"⚠  {en_path} not found, skipping.")
        return

    with open(en_path, encoding="utf-8") as f:
        en_data = json.load(f)

    for lang in target_langs:
        out_path = f"content/{lang}/{section}.json"
        # Don't overwrite existing files unless forced
        if os.path.exists(out_path) and "--force" not in sys.argv:
            print(f"⏭  {out_path} already exists (use --force to overwrite)")
            continue

        print(f"\n{'='*60}")
        print(f"  Translating {section}.json → {lang}")
        print(f"{'='*60}")

        translated = translate_object(client, en_data, lang, section)

        os.makedirs(f"content/{lang}", exist_ok=True)
        with open(out_path, "w", encoding="utf-8") as f:
            json.dump(translated, f, ensure_ascii=False, indent=2)

        print(f"  ✅ Saved {out_path}")


def main():
    api_key = os.environ.get("ANTHROPIC_API_KEY")
    if not api_key:
        print("❌ Please set ANTHROPIC_API_KEY environment variable")
        print("   export ANTHROPIC_API_KEY='sk-ant-...'")
        sys.exit(1)

    client = anthropic.Anthropic(api_key=api_key)

    # Parse arguments
    args = [a for a in sys.argv[1:] if not a.startswith("--")]

    if len(args) == 0:
        sections = SECTIONS
        target_langs = ["te", "sa"]
    elif len(args) == 1:
        sections = [args[0]]
        target_langs = ["te", "sa"]
    elif len(args) == 2:
        sections = [args[0]]
        target_langs = [args[1]]
    else:
        print("Usage: python3 auto_translate.py [section] [lang]")
        sys.exit(1)

    print(f"\n🕉  Samskruti Auto-Translator")
    print(f"   Sections : {sections}")
    print(f"   Languages: {target_langs}")
    print(f"   Force    : {'--force' in sys.argv}")

    for section in sections:
        translate_section(client, section, target_langs)

    print(f"\n✅ All done!")
    print(f"\nNext step: run build_site.py to embed translations into index.html")


if __name__ == "__main__":
    main()
