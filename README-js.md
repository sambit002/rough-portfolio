# Manga Cover Generator (Node.js)

This small tool generates a stylized manga cover PNG named `manga_cover.png` in the same folder.

Prerequisites:
- Node.js (14+)
- On Windows, installing `sharp` may require build tools; using the prebuilt binaries via npm usually works.

Install and run:

```bash
npm install
npm run generate
```

The script `generate_cover.js` creates an SVG and uses `sharp` to render it to PNG.
