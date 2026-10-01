import puppeteer from 'puppeteer';
import path from 'path';
import fs from 'fs';
import { spawn } from 'child_process';

async function run() {
  const artifactsDir = path.resolve('artifacts');
  if (!fs.existsSync(artifactsDir)) {
    fs.mkdirSync(artifactsDir, { recursive: true });
  }

  // Start vite preview
  console.log('Starting vite preview server...');
  const preview = spawn('npx', ['vite', 'preview', '--port', '4173'], {
    shell: true,
    stdio: 'pipe'
  });

  // Wait for preview server to be ready
  await new Promise((resolve) => setTimeout(resolve, 3000));

  try {
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();

    // 1. Desktop Navbar at top (1440x900)
    console.log('Capturing Desktop Navbar at top...');
    await page.setViewport({ width: 1440, height: 900 });
    await page.goto('http://localhost:4173/', { waitUntil: 'networkidle0' });
    await new Promise((r) => setTimeout(r, 1000));

    const navElement = await page.$('header');
    if (navElement) {
      await navElement.screenshot({ path: path.join(artifactsDir, 'navbar_desktop_top.png') });
      console.log('✓ navbar_desktop_top.png captured');
    }

    // 2. Desktop Navbar when scrolled
    console.log('Capturing Desktop Navbar when scrolled...');
    await page.evaluate(() => window.scrollTo(0, 300));
    await new Promise((r) => setTimeout(r, 600));
    if (navElement) {
      await navElement.screenshot({ path: path.join(artifactsDir, 'navbar_desktop_scrolled.png') });
      console.log('✓ navbar_desktop_scrolled.png captured');
    }

    // 3. Desktop Footer
    console.log('Capturing Desktop Footer...');
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await new Promise((r) => setTimeout(r, 600));
    const footerElement = await page.$('footer');
    if (footerElement) {
      await footerElement.screenshot({ path: path.join(artifactsDir, 'footer_desktop.png') });
      console.log('✓ footer_desktop.png captured');
    }

    // 4. Mobile Navbar (390x844)
    console.log('Capturing Mobile Navbar...');
    await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });
    await page.goto('http://localhost:4173/', { waitUntil: 'networkidle0' });
    await new Promise((r) => setTimeout(r, 1000));
    const mobileNav = await page.$('header');
    if (mobileNav) {
      await mobileNav.screenshot({ path: path.join(artifactsDir, 'navbar_mobile.png') });
      console.log('✓ navbar_mobile.png captured');
    }

    await browser.close();
    console.log('All captures done!');
  } finally {
    preview.kill();
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
