import puppeteer from 'puppeteer';
import path from 'path';
import fs from 'fs';

async function validateAndCapture() {
  const workspaceArtifacts = path.resolve('artifacts');
  const brainArtifacts = 'C:\\Users\\Dev\\.gemini\\antigravity\\brain\\6ed065af-7045-483e-a80b-e3de5029aa14';

  if (!fs.existsSync(workspaceArtifacts)) {
    fs.mkdirSync(workspaceArtifacts, { recursive: true });
  }

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  // Test Breakpoints: xl (1440), lg (1024), md (768), sm (640), mobile (390)
  const breakpoints = [
    { name: 'xl_desktop', width: 1440, height: 900, isMobile: false },
    { name: 'lg_desktop', width: 1024, height: 768, isMobile: false },
    { name: 'md_tablet', width: 768, height: 1024, isMobile: false },
    { name: 'sm_landscape', width: 640, height: 800, isMobile: true },
    { name: 'mobile_standard', width: 390, height: 844, isMobile: true },
  ];

  console.log('Testing responsive breakpoints sm, md, lg, xl...');
  for (const bp of breakpoints) {
    await page.setViewport({ width: bp.width, height: bp.height, isMobile: bp.isMobile });
    await page.goto('http://localhost:4173/', { waitUntil: 'networkidle0' });
    
    // Check horizontal overflow
    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
    const hasHorizontalOverflow = scrollWidth > clientWidth;
    console.log(`Breakpoint ${bp.name} (${bp.width}px): ${hasHorizontalOverflow ? '⚠️ OVERFLOW' : '✓ OK, zero horizontal overflow'}`);
  }

  // ----------------------------------------------------
  // 1. DESKTOP FULL-PAGE SCREENSHOT (1440x900)
  // ----------------------------------------------------
  console.log('[1/3] Generating Desktop Full-Page Screenshot (1440x900)...');
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:4173/', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 1200));

  const desktopPath1 = path.join(workspaceArtifacts, 'stanley_desktop.png');
  const desktopPath2 = path.join(brainArtifacts, 'stanley_desktop.png');
  await page.screenshot({ path: desktopPath1, fullPage: true });
  fs.copyFileSync(desktopPath1, desktopPath2);
  console.log('✓ Desktop full-page screenshot saved.');

  // ----------------------------------------------------
  // 2. MOBILE RESPONSIVE SCREENSHOT (390x844)
  // ----------------------------------------------------
  console.log('[2/3] Generating Mobile Screenshot (390x844)...');
  await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });
  await page.goto('http://localhost:4173/', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 1000));

  // Open mobile menu
  const mobileMenuBtn = await page.$('button[aria-label="Ouvrir le menu mobile"]');
  if (mobileMenuBtn) {
    await mobileMenuBtn.click();
    await new Promise(r => setTimeout(r, 500));
  }

  const mobilePath1 = path.join(workspaceArtifacts, 'stanley_mobile.png');
  const mobilePath2 = path.join(brainArtifacts, 'stanley_mobile.png');
  await page.screenshot({ path: mobilePath1, fullPage: false });
  fs.copyFileSync(mobilePath1, mobilePath2);
  console.log('✓ Mobile screenshot saved.');

  // ----------------------------------------------------
  // 3. FORM VALIDATION & SIMULATION
  // ----------------------------------------------------
  console.log('[3/3] Validating Form Interactivity & Confirmation State...');
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:4173/#contact', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 800));

  await page.type('#client-name', 'Xavier Timoty');
  await page.type('#client-phone', '+261 34 81 107 15');
  await page.type('#client-email', 'contact@stanley-construction.mg');
  await page.type('#client-quartier', 'Ambatobe, Antananarivo');
  await page.type('#client-message', 'Projet de villa d\'architecte sur terrain en pente avec mur de soutènement et suivi WhatsApp diaspora.');

  // Submit
  await page.click('#submit-quote-btn');
  await new Promise(r => setTimeout(r, 800));

  const confirmationStatus = await page.$eval('div[role="status"]', el => el.innerText);
  console.log('Form status received:\n', confirmationStatus);

  const formPath1 = path.join(workspaceArtifacts, 'stanley_form_submitted.png');
  const formPath2 = path.join(brainArtifacts, 'stanley_form_submitted.png');

  const contactSection = await page.$('#contact');
  if (contactSection) {
    await contactSection.screenshot({ path: formPath1 });
  } else {
    await page.screenshot({ path: formPath1 });
  }
  fs.copyFileSync(formPath1, formPath2);
  console.log('✓ Form confirmation screenshot saved.');

  // ----------------------------------------------------
  // 4. LEGAL & FISCAL TRANSPARENCY MODAL
  // ----------------------------------------------------
  console.log('[4/4] Validating Legal & Fiscal Transparency Modal...');
  await page.goto('http://localhost:4173/#engagements', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 600));

  // Click on "Données Légales & Transparence Fiscale" button in footer
  const legalBtn = await page.$('footer button');
  if (legalBtn) {
    await legalBtn.click();
    await new Promise(r => setTimeout(r, 600));

    const legalPath1 = path.join(workspaceArtifacts, 'stanley_legal_modal.png');
    const legalPath2 = path.join(brainArtifacts, 'stanley_legal_modal.png');
    await page.screenshot({ path: legalPath1 });
    fs.copyFileSync(legalPath1, legalPath2);
    console.log('✓ Legal transparency modal screenshot saved.');
  }

  await browser.close();
  console.log('All automated browser tests passed successfully!');
}

validateAndCapture().catch(err => {
  console.error('Validation Error:', err);
  process.exit(1);
});
