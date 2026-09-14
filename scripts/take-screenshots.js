const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const projects = [
  { slug: 'sabortak', url: 'https://www.sabortk.com/ar' },
  { slug: 'carehub', url: 'https://carehub.eg/ar' },
  { slug: 'elamwal', url: 'https://www.elamwal.com/' },
  { slug: 'work-brand', url: 'https://www.workbrand.org/' },
];

const publicDir = path.join(__dirname, '..', 'public', 'images', 'projects');

async function delay(time) {
  return new Promise(function(resolve) { 
      setTimeout(resolve, time)
  });
}

async function takeScreenshots() {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  await page.setViewport({ width: 1920, height: 1080 });

  for (const project of projects) {
    console.log(`Processing ${project.slug}...`);
    try {
      const projectDir = path.join(publicDir, project.slug);
      if (!fs.existsSync(projectDir)) {
        fs.mkdirSync(projectDir, { recursive: true });
      }

      await page.goto(project.url, { waitUntil: 'networkidle2', timeout: 60000 });
      // Wait an extra 3 seconds for animations/fonts to load
      await delay(3000);
      
      const coverPath = path.join(projectDir, 'cover.webp');
      await page.screenshot({ path: coverPath, type: 'webp', quality: 80 });
      console.log(`Saved cover screenshot for ${project.slug}`);

      // Scroll down one viewport for 01.webp
      await page.evaluate(() => window.scrollBy(0, window.innerHeight));
      await delay(2000); // wait for lazy loading / animations
      const gallery1Path = path.join(projectDir, '01.webp');
      await page.screenshot({ path: gallery1Path, type: 'webp', quality: 80 });
      console.log(`Saved 01.webp for ${project.slug}`);

      // Scroll down another viewport for 02.webp
      await page.evaluate(() => window.scrollBy(0, window.innerHeight));
      await delay(2000);
      const gallery2Path = path.join(projectDir, '02.webp');
      await page.screenshot({ path: gallery2Path, type: 'webp', quality: 80 });
      console.log(`Saved 02.webp for ${project.slug}`);
      
    } catch (err) {
      console.error(`Failed to capture ${project.slug}:`, err);
    }
  }

  await browser.close();
  console.log('Finished capturing screenshots.');
}

takeScreenshots().catch(console.error);
