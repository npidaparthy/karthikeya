#!/usr/bin/env python3
"""
edit_content.py  —  Edit & verify content files, then rebuild index.html
───────────────────────────────────────────────────────────────────────────
Usage:
  python3 edit_content.py                   # list all sections
  python3 edit_content.py profile           # show profile content for all langs
  python3 edit_content.py profile --edit    # open all 3 profile files in editor
  python3 edit_content.py profile te        # show only Telugu profile
  python3 edit_content.py --fix             # validate JSON + rebuild HTML
  python3 edit_content.py --diff profile    # show diff between EN and TE/SA keys

Set your preferred editor:
  export EDITOR=nano       # (default)
  export EDITOR=vim
  export EDITOR=code       # VS Code
"""

import json, os, sys, subprocess

LANGS    = ["en", "te", "sa"]
LANG_NAMES = {"en": "English", "te": "Telugu (తెలుగు)", "sa": "Sanskrit (संस्कृतम्)"}
SECTIONS = [
    "nav", "hero", "about", "profile", "credits", "events",
    "parayana", "support", "testimonials", "youtube", "contact", "footer", "settings"
]

def cd():
    os.chdir(os.path.dirname(os.path.abspath(__file__)))

def load(lang, sec):
    p = f"content/{lang}/{sec}.json"
    if not os.path.exists(p): return None
    with open(p, encoding="utf-8") as f:
        return json.load(f)

def save(lang, sec, data):
    p = f"content/{lang}/{sec}.json"
    with open(p, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    print(f"  ✓ Saved {p}")

def validate_all():
    """Validate every JSON file."""
    print("Validating JSON files...")
    errors = []
    for lang in LANGS:
        for sec in SECTIONS:
            p = f"content/{lang}/{sec}.json"
            if not os.path.exists(p):
                print(f"  ⚠  Missing: {p}")
                continue
            try:
                with open(p, encoding="utf-8") as f:
                    json.load(f)
                print(f"  ✓ {p}")
            except json.JSONDecodeError as e:
                print(f"  ✗ INVALID: {p}")
                print(f"    Error: {e}")
                errors.append(p)
    if errors:
        print(f"\n❌ {len(errors)} invalid file(s). Fix them, then run again.")
        return False
    print("\n✅ All JSON valid")
    return True

def rebuild():
    """Call build_site.py to embed content into index.html."""
    print("\nRebuilding index.html...")
    result = subprocess.run([sys.executable, "build_site.py"], capture_output=True, text=True)
    print(result.stdout)
    if result.returncode != 0:
        print("❌ Build failed:", result.stderr)
        return False
    return True

def show_section(sec, lang=None):
    """Pretty-print a section's content."""
    langs_to_show = [lang] if lang else LANGS
    for l in langs_to_show:
        data = load(l, sec)
        if data is None:
            print(f"  ⚠  Missing: content/{l}/{sec}.json")
            continue
        print(f"\n{'═'*60}")
        print(f"  {LANG_NAMES[l]}  —  content/{l}/{sec}.json")
        print(f"{'═'*60}")
        print(json.dumps(data, ensure_ascii=False, indent=2))

def open_in_editor(sec):
    """Open all 3 language files for a section in the system editor."""
    editor = os.environ.get("EDITOR", "nano")
    files = []
    for lang in LANGS:
        p = f"content/{lang}/{sec}.json"
        if os.path.exists(p):
            files.append(p)
        else:
            print(f"  ⚠  Missing: {p}")

    if not files:
        print("No files to edit.")
        return

    print(f"Opening {len(files)} files in '{editor}'...")
    print("Files:")
    for f in files: print(f"  {f}")
    print()
    subprocess.run([editor] + files)

    # After editing, validate
    print("\nValidating edited files...")
    ok = True
    for f in files:
        try:
            with open(f, encoding="utf-8") as fp:
                json.load(fp)
            print(f"  ✓ {f}")
        except json.JSONDecodeError as e:
            print(f"  ✗ INVALID: {f}")
            print(f"    {e}")
            ok = False

    if ok:
        print("\nAll valid ✓")
        ans = input("Rebuild index.html now? [Y/n]: ").strip().lower()
        if ans != "n":
            rebuild()
            print("\nDone! Commit and push:")
            print(f"  git add content/ index.html")
            print(f"  git commit -m 'Fix content: {sec}'")
            print(f"  git push")

def diff_section(sec):
    """Show keys that exist in EN but might be missing or different in TE/SA."""
    en = load("en", sec)
    if not en:
        print(f"No EN content for '{sec}'")
        return

    print(f"\n{'═'*60}")
    print(f"  Key comparison for: {sec}")
    print(f"{'═'*60}")

    def get_keys(obj, prefix=""):
        keys = []
        if isinstance(obj, dict):
            for k, v in obj.items():
                full = f"{prefix}.{k}" if prefix else k
                if isinstance(v, (dict, list)):
                    keys.extend(get_keys(v, full))
                else:
                    keys.append(full)
        elif isinstance(obj, list):
            for i, item in enumerate(obj):
                keys.extend(get_keys(item, f"{prefix}[{i}]"))
        return keys

    en_keys = set(get_keys(en))
    print(f"\n  EN has {len(en_keys)} leaf keys")

    for lang in ["te", "sa"]:
        data = load(lang, sec)
        if not data:
            print(f"\n  ⚠  {LANG_NAMES[lang]}: file missing")
            continue
        lang_keys = set(get_keys(data))
        missing = en_keys - lang_keys
        extra   = lang_keys - en_keys
        print(f"\n  {LANG_NAMES[lang]}:")
        print(f"    Keys: {len(lang_keys)} (EN: {len(en_keys)})")
        if missing: print(f"    Missing: {sorted(missing)}")
        if extra:   print(f"    Extra:   {sorted(extra)}")
        if not missing and not extra: print(f"    ✓ All keys match")

def quick_fix(sec, lang, key_path, new_value):
    """
    Quick fix a single value without opening an editor.
    key_path can be dot-separated, e.g. "hero.name" or "achievements[0].title"

    Usage from Python:
      from edit_content import cd, load, save
      cd(); data = load("te","profile")
      data["achievements"][0]["title"] = "corrected title"
      save("te","profile",data)
    """
    data = load(lang, sec)
    if data is None:
        print(f"Section not found: {lang}/{sec}")
        return

    # Navigate to parent key
    parts = key_path.replace("[", ".").replace("]", "").split(".")
    obj = data
    for p in parts[:-1]:
        if p.isdigit():
            obj = obj[int(p)]
        else:
            obj = obj[p]

    last = parts[-1]
    old  = obj[int(last)] if last.isdigit() else obj[last]
    print(f"  Was: {repr(old)}")
    print(f"  Now: {repr(new_value)}")
    if last.isdigit():
        obj[int(last)] = new_value
    else:
        obj[last] = new_value

    save(lang, sec, data)

def main():
    cd()
    args = sys.argv[1:]

    if not args:
        print("Samskruti Content Editor")
        print()
        print("Sections:")
        for sec in SECTIONS:
            parts = []
            for lang in LANGS:
                p = f"content/{lang}/{sec}.json"
                parts.append(f"{'✓' if os.path.exists(p) else '✗'} {lang}")
            print(f"  {sec:20s}  {' | '.join(parts)}")
        print()
        print("Commands:")
        print("  python3 edit_content.py profile           -- show profile content")
        print("  python3 edit_content.py profile --edit    -- open in editor")
        print("  python3 edit_content.py profile te        -- show only Telugu")
        print("  python3 edit_content.py --diff profile    -- compare keys across langs")
        print("  python3 edit_content.py --fix             -- validate + rebuild HTML")
        return

    if "--fix" in args:
        if validate_all():
            rebuild()
        return

    if "--diff" in args:
        idx = args.index("--diff")
        sec = args[idx+1] if idx+1 < len(args) else None
        if not sec:
            for s in SECTIONS: diff_section(s)
        else:
            diff_section(sec)
        return

    sec  = args[0] if args else None
    lang = args[1] if len(args) > 1 and args[1] in LANGS else None
    edit = "--edit" in args

    if sec and sec not in SECTIONS:
        print(f"Unknown section: '{sec}'")
        print(f"Available: {', '.join(SECTIONS)}")
        return

    if sec and edit:
        open_in_editor(sec)
    elif sec:
        show_section(sec, lang)
    else:
        for s in SECTIONS:
            show_section(s, lang)

if __name__ == "__main__":
    main()
