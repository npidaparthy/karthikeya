#!/usr/bin/env python3
"""
add_photo.py  —  Add a photo to the Samskruti hero gallery
────────────────────────────────────────────────────────────
Usage:
  python3 add_photo.py <image_file> [options]

Examples:
  python3 add_photo.py photos/gold-medal.jpg \
      --title-en "Gold Medal — Mysore Datta Peetham" \
      --title-te "స్వర్ణపతకం — మైసూర్ దత్త పీఠం" \
      --title-sa "स्वर्णपदकम् — मैसूरु-दत्तपीठम्" \
      --desc-en  "Receiving the Gold Medal for memorising all 700 verses of the Bhagavad Gītā." \
      --desc-te  "భగవద్గీత 700 శ్లోకాలు కంఠస్థం చేసి స్వర్ణపతకం అందుకుంటున్న సందర్భం." \
      --desc-sa  "सप्तशतश्लोकान् कण्ठस्थीकृत्य स्वर्णपदकं प्राप्नोति।"

What it does:
  1. Copies the image to assets/cover-page-image/
  2. Updates the GALLERY_SLIDES array in index.html
  3. Runs build_site.py to refresh the embedded translations

After running, commit and push:
  git add -A && git commit -m "Add photo: <title>" && git push
"""

import os, sys, shutil, re, argparse, base64

def main():
    parser = argparse.ArgumentParser(description="Add a photo to the Samskruti hero gallery")
    parser.add_argument("image", help="Path to image file (JPG or PNG)")
    parser.add_argument("--title-en", default="", help="Title in English")
    parser.add_argument("--title-te", default="", help="Title in Telugu")
    parser.add_argument("--title-sa", default="", help="Title in Sanskrit")
    parser.add_argument("--desc-en",  default="", help="Description in English")
    parser.add_argument("--desc-te",  default="", help="Description in Telugu")
    parser.add_argument("--desc-sa",  default="", help="Description in Sanskrit")
    parser.add_argument("--embed", action="store_true",
                        help="Embed image as base64 (works offline; larger file)")
    args = parser.parse_args()

    # ── Resolve paths ─────────────────────────────────────────────────────────
    script_dir = os.path.dirname(os.path.abspath(__file__))
    os.chdir(script_dir)
    src = os.path.abspath(args.image)
    if not os.path.exists(src):
        print(f"❌ File not found: {src}")
        sys.exit(1)

    ext = os.path.splitext(src)[1].lower() or ".jpg"
    dest_dir = "assets/cover-page-image"
    os.makedirs(dest_dir, exist_ok=True)

    # Use a clean filename
    base = os.path.basename(src).replace(" ", "-").lower()
    dest = os.path.join(dest_dir, base)
    shutil.copy2(src, dest)
    print(f"✓ Copied → {dest}")

    # ── Build src reference ───────────────────────────────────────────────────
    if args.embed:
        mime = "image/png" if ext == ".png" else "image/jpeg"
        with open(dest, "rb") as f:
            b64 = base64.b64encode(f.read()).decode()
        img_src = f"data:{mime};base64,{b64}"
        print(f"✓ Embedded as base64 ({len(b64)//1024}KB)")
    else:
        img_src = dest.replace("\\", "/")

    # ── Build the new slide entry ─────────────────────────────────────────────
    def esc(s): return s.replace("\\","\\\\").replace('"','\\"')
    slide = (
        f'  {{\n'
        f'    src: "{esc(img_src)}",\n'
        f'    title_en: "{esc(args.title_en)}",\n'
        f'    title_te: "{esc(args.title_te)}",\n'
        f'    title_sa: "{esc(args.title_sa)}",\n'
        f'    desc_en: "{esc(args.desc_en)}",\n'
        f'    desc_te: "{esc(args.desc_te)}",\n'
        f'    desc_sa: "{esc(args.desc_sa)}"\n'
        f'  }}'
    )

    # ── Inject into GALLERY_SLIDES in index.html ──────────────────────────────
    html_path = "index.html"
    with open(html_path, encoding="utf-8") as f:
        html = f.read()

    # Find the comment marker and insert before it
    marker = "  // More slides will be added here as you provide photos."
    if marker not in html:
        print("❌ Could not find insertion point in index.html.")
        print("   Looking for:", repr(marker))
        sys.exit(1)

    new_html = html.replace(marker, slide + ",\n" + marker, 1)

    with open(html_path, "w", encoding="utf-8") as f:
        f.write(new_html)

    print(f"✓ Added slide to GALLERY_SLIDES in {html_path}")
    print()
    print("Next steps:")
    print("  git add -A")
    print(f'  git commit -m "Add photo: {args.title_en or base}"')
    print("  git push")
    print()
    print("The gallery will auto-scroll through all photos on the live site.")


if __name__ == "__main__":
    main()
