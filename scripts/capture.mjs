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
  const brainArtifacts = process.env.BRAIN_ARTIFACTS_DIR || null;

  if (!fs.existsSync(workspaceArtifacts)) {
    fs.mkdirSync(workspaceArtifacts, { recursive: true });
  }

  const copyToBrain = (src, destFileName) => {
    if (brainArtifacts && fs.existsSync(brainArtifacts)) {
      try {
        fs.copyFileSync(src, path.join(brainArtifacts, destFileName));
      } catch (e) {
        console.warn('Could not copy to brain artifacts:', e.message);
      }
    }
  };

  // 1. Hero viewport screenshot
  const heroPath1 = path.join(workspaceArtifacts, 'stanley_hero.png');
  await page.screenshot({ path: heroPath1 });
  copyToBrain(heroPath1, 'stanley_hero.png');
  console.log('Hero screenshot saved:', heroPath1);

  // 2. Full page screenshot
  const fullPath1 = path.join(workspaceArtifacts, 'stanley_full_page.png');
  await page.screenshot({ path: fullPath1, fullPage: true });
  copyToBrain(fullPath1, 'stanley_full_page.png');
  console.log('Full page screenshot saved:', fullPath1);

  await browser.close();
  console.log('Capture completed successfully!');
}

capture().catch(err => {
  console.error('Error during capture:', err);
  process.exit(1);
});
