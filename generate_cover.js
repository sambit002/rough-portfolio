const sharp = require('sharp');
const path = require('path');

const W = 1600;
const H = 2560;

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#230040"/>
      <stop offset="100%" stop-color="#dc1969"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#g)" />
  <rect x="60" y="60" width="${W-120}" height="${H-120}" fill="none" stroke="white" stroke-width="6" rx="20"/>
  <!-- shadow -->
  <ellipse cx="${W/2-20}" cy="${H/2-200-20}" rx="280" ry="280" fill="#120018"/>
  <!-- head -->
  <circle cx="${W/2}" cy="${H/2-200}" r="260" fill="#FAF0E6"/>
  <!-- hair spikes -->
  <polygon points="${W/2-240},${H/2-200} ${W/2-160},${H/2-360} ${W/2-120},${H/2-200}" fill="#0A0A0A"/>
  <polygon points="${W/2-160},${H/2-200} ${W/2-80},${H/2-380} ${W/2-40},${H/2-200}" fill="#0A0A0A"/>
  <polygon points="${W/2-80},${H/2-200} ${W/2},${H/2-420} ${W/2+40},${H/2-200}" fill="#0A0A0A"/>
  <polygon points="${W/2+40},${H/2-200} ${W/2+120},${H/2-360} ${W/2+180},${H/2-200}" fill="#0A0A0A"/>
  <!-- body -->
  <rect x="${W/2-210}" y="${H/2+60}" width="420" height="850" fill="#282858" rx="40"/>
  <!-- eyes -->
  <ellipse cx="${W/2-130}" cy="${H/2-230}" rx="45" ry="30" fill="#000"/>
  <ellipse cx="${W/2+130}" cy="${H/2-230}" rx="45" ry="30" fill="#000"/>
  <circle cx="${W/2-145}" cy="${H/2-245}" r="8" fill="#fff"/>
  <circle cx="${W/2+115}" cy="${H/2-245}" r="8" fill="#fff"/>
  <!-- title box -->
  <rect x="80" y="${H-400}" width="${W-160}" height="320" fill="#000" opacity="0.6" rx="20"/>
  <text x="50%" y="${H-240}" font-family="Georgia, serif" font-size="120" fill="#FFD83C" text-anchor="middle">MOONLIGHT SWORD</text>
  <text x="50%" y="${H-150}" font-family="Georgia, serif" font-size="40" fill="#E6E6E6" text-anchor="middle">a one-shot</text>
</svg>
`;

const outPath = path.join(__dirname, 'manga_cover.png');

sharp(Buffer.from(svg))
  .png()
  .toFile(outPath)
  .then(() => console.log('Saved:', outPath))
  .catch(err => {
    console.error('Error generating cover:', err);
    process.exit(1);
  });
