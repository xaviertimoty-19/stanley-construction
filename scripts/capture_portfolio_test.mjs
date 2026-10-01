import puppeteer from 'puppeteer';
import path from 'path';
import fs from 'fs';
import { spawn } from 'child_process';

async function run() {
  const artifactsDir = path.resolve('artifacts');
  if (!fs.existsSync(artifactsDir)) {
    fs.mkdirSync(artifactsDir, { recursive: true });
  }

  console.log('Starting preview server...');
  const preview = spawn('npx', ['vite', 'preview', '--port', '4173'], {
    shell: true,
    stdio: 'pipe'
  });

  await new Promise((r) => setTimeout(r, 3000));

  try {
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900 });

    console.log('Navigating to #portfolio...');
    await page.goto('http://localhost:4173/#portfolio', { waitUntil: 'networkidle0' });
    await new Promise((r) => setTimeout(r, 1200));

    // Capture Portfolio section
    const portfolioSec = await page.$('#portfolio');
    if (portfolioSec) {
      await portfolioSec.screenshot({ path: path.join(artifactsDir, 'portfolio_desktop_all.png') });
      console.log('✓ portfolio_desktop_all.png captured');
    }

    // Click on "⚡ Chantier en cours (Atsimondrano)" filter
    await page.evaluate(() => {
      const btns = Array.from(document.querySelectorAll('#portfolio button'));
      const btn = btns.find(b => b.textContent.includes('Chantier en cours') || b.textContent.includes('Atsimondrano'));
      if (btn) btn.click();
    });
    await new Promise((r) => setTimeout(r, 600));
    if (portfolioSec) {
      await portfolioSec.screenshot({ path: path.join(artifactsDir, 'portfolio_desktop_en_cours.png') });
      console.log('✓ portfolio_desktop_en_cours.png captured');
    }

    // Click to open Lightbox on the first card
    const firstCardImg = await page.$('#portfolio figure');
    if (firstCardImg) {
      await firstCardImg.click();
      await new Promise((r) => setTimeout(r, 800));
      await page.screenshot({ path: path.join(artifactsDir, 'portfolio_lightbox_modal.png') });
      console.log('✓ portfolio_lightbox_modal.png captured');
    }

    // Mobile viewport
    console.log('Testing mobile viewport 390px...');
    await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });
    await page.goto('http://localhost:4173/#portfolio', { waitUntil: 'networkidle0' });
    await new Promise((r) => setTimeout(r, 1000));
    const mobileSec = await page.$('#portfolio');
    if (mobileSec) {
      await mobileSec.screenshot({ path: path.join(artifactsDir, 'portfolio_mobile.png') });
      console.log('✓ portfolio_mobile.png captured');
    }

    await browser.close();
    console.log('All tests completed successfully!');
  } finally {
    preview.kill();
  }
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
