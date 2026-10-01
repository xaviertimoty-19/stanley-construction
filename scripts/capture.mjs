import puppeteer from 'puppeteer';
import path from 'path';
import fs from 'fs';

async function capture() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  console.log('Navigating to http://localhost:4173/ ...');
  await page.goto('http://localhost:4173/', { waitUntil: 'networkidle0' });

  // Wait 1.5s for fonts and layouts to settle
  await new Promise(r => setTimeout(r, 1500));

  const workspaceArtifacts = path.resolve('artifacts');
  const brainArtifacts = 'C:\\Users\\Dev\\.gemini\\antigravity\\brain\\6ed065af-7045-483e-a80b-e3de5029aa14';

  if (!fs.existsSync(workspaceArtifacts)) {
    fs.mkdirSync(workspaceArtifacts, { recursive: true });
  }

  // 1. Hero viewport screenshot
  const heroPath1 = path.join(workspaceArtifacts, 'stanley_hero.png');
  const heroPath2 = path.join(brainArtifacts, 'stanley_hero.png');
  await page.screenshot({ path: heroPath1 });
  fs.copyFileSync(heroPath1, heroPath2);
  console.log('Hero screenshot saved:', heroPath1);

  // 2. Full page screenshot
  const fullPath1 = path.join(workspaceArtifacts, 'stanley_full_page.png');
  const fullPath2 = path.join(brainArtifacts, 'stanley_full_page.png');
  await page.screenshot({ path: fullPath1, fullPage: true });
  fs.copyFileSync(fullPath1, fullPath2);
  console.log('Full page screenshot saved:', fullPath1);

  await browser.close();
  console.log('Capture completed successfully!');
}

capture().catch(err => {
  console.error('Error during capture:', err);
  process.exit(1);
});
