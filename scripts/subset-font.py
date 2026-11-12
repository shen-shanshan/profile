#!/usr/bin/env python3
"""Build a small woff2 subset of the Yozai font containing only the glyphs used on this site.

The full Yozai-Regular.ttf (SIL OFL 1.1) is ~13 MB, far too heavy for a web page,
so we keep every character that appears in src/ and index.html plus printable ASCII.
Re-run after editing any text:  npm run subset-font
Requires: pip install fonttools brotli
"""

import pathlib
import urllib.request

from fontTools import subset

ROOT = pathlib.Path(__file__).resolve().parent.parent
FONT_URL = "https://shen-shanshan.github.io/font/Yozai-Regular.ttf"
SOURCE_FONT = ROOT / ".font-cache" / "Yozai-Regular.ttf"
OUTPUT_FONT = ROOT / "src" / "assets" / "fonts" / "yozai-subset.woff2"
TEXT_SOURCES = [ROOT / "index.html", *sorted((ROOT / "src").rglob("*.ts")), *sorted((ROOT / "src").rglob("*.vue"))]


def collect_text() -> str:
    chars = {chr(c) for c in range(0x20, 0x7F)}
    # Common full-width punctuation that may come from translated strings.
    chars.update("，。、；：？！“”‘’（）《》【】—…·")
    for path in TEXT_SOURCES:
        chars.update(path.read_text(encoding="utf-8"))
    return "".join(sorted(c for c in chars if c.isprintable()))


def main() -> None:
    if not SOURCE_FONT.exists():
        SOURCE_FONT.parent.mkdir(parents=True, exist_ok=True)
        print(f"Downloading {FONT_URL} ...")
        urllib.request.urlretrieve(FONT_URL, SOURCE_FONT)

    text = collect_text()
    OUTPUT_FONT.parent.mkdir(parents=True, exist_ok=True)
    subset.main([
        str(SOURCE_FONT),
        f"--text={text}",
        f"--output-file={OUTPUT_FONT}",
        "--flavor=woff2",
        "--layout-features=*",
        "--name-IDs=*",
        "--name-legacy",
    ])
    print(f"{len(text)} characters -> {OUTPUT_FONT.relative_to(ROOT)} ({OUTPUT_FONT.stat().st_size // 1024} KB)")


if __name__ == "__main__":
    main()
