# profile

English | [简体中文](README.zh-CN.md)

My personal homepage, available at [shen-shanshan.github.io/profile](https://shen-shanshan.github.io/profile/).

Built with Vue 3 + Vuetify, based on the homepage template by [interestingLSY](https://github.com/interestingLSY/interestingLSY.github.io) (GPL-3.0).

## Features

- **Sections**: overview, experience (most recent first), open source contributions, and my projects.
- **Light / dark mode**: toggle in the top-right corner. It follows the system setting until a theme is picked, and the choice is remembered.
- **Bilingual**: English by default, with a toggle to switch to Chinese (中文). The choice is remembered.
- **Live GitHub stats**: project cards fetch star and fork counts from the GitHub API at runtime and hide them if the request fails (e.g. rate limited).
- **Blog font**: uses the same font as [my blog](https://shen-shanshan.github.io/), subset to keep the page light.
- **Responsive**: the navigation bar collapses to name + toggles on small screens.

## Development

```bash
npm install
npm run dev        # http://localhost:3000/profile/
npm run build      # output in dist/
npm run preview    # preview the production build
```

## Project structure

```text
.
├── .github/workflows/deploy.yml   # Build and publish to GitHub Pages
├── index.html                     # Page title, meta, early theme script
├── public/                        # Static files (photo, logos, QR codes, resume)
├── scripts/subset-font.py         # Generates the Yozai font subset
├── src/
│   ├── assets/                    # Global styles and the font subset
│   ├── components/                # Top navigation bar
│   ├── composables/               # Locale and light/dark theme logic
│   ├── data/                      # Page content (experience, contributions, projects, links)
│   ├── locales/                   # English and Chinese UI text
│   ├── router/
│   ├── utils/
│   └── views/HomeView.vue         # The homepage
└── vite.config.mts                # base is set to /profile/
```

## Editing content

| What | Where |
| --- | --- |
| Bio, section titles, footer (EN / 中文) | `src/locales/en.ts`, `src/locales/zh.ts` |
| Experience | `src/data/experiences.ts` |
| Open source contributions | `src/data/contributions.ts` |
| My projects | `src/data/projects.ts` |
| Email and top links | `src/data/links.ts` |
| Photo, logos | `public/images/` |
| WeChat QR code | `public/wechat-qrcode.png` (placeholder) |
| WeChat Official Account QR code | `public/wechat-official-account-qrcode.png` (placeholder) |
| Resume | `public/resume.pdf` (placeholder) |

Images under `public/` are referenced without a leading slash (e.g. `images/logos/amd.png`) and resolved against the `/profile/` base at runtime.

## Font

The site uses [Yozai (悠哉字体)](https://github.com/lxgw/yozai-font) (SIL OFL 1.1), the same font as my blog.
The full font is ~13 MB, so only the glyphs actually used are kept in `src/assets/fonts/yozai-subset.woff2` (~70 KB).
The deploy workflow regenerates it automatically; to refresh it locally after editing text:

```bash
pip install fonttools brotli
npm run subset-font
```

The script downloads the full font from the blog into `.font-cache/` (git-ignored) on first run.

## Deployment

Pushing to `master` triggers `.github/workflows/deploy.yml`, which subsets the font, builds the site, and publishes it to GitHub Pages.
In the repo settings, set **Settings → Pages → Build and deployment → Source** to **GitHub Actions**.

## License

[GPL-3.0](LICENSE), inherited from the original template.

---

🤖 Generated with [Claude Code](https://claude.com/claude-code)
