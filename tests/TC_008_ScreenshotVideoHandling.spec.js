const { test, expect } = require('@playwright/test');

test('Capture Screenshot', async ({ page }) => {

    await page.goto('/');

    // =========================
    // Full Page Screenshot
    // =========================

    await page.screenshot({path:'screenshots/fullpage.png',
      fullPage: true
    });

    console.log('Full Page Screenshot Captured');

    // =========================
    // Element Screenshot
    // =========================

    await page.locator('#login-button').screenshot({
      path:'screenshots/login-button.png'
    });

    console.log('Element Screenshot Captured');

  });


test('Manual Trace', async ({ browser }) => {

  const context = await browser.newContext();

  await context.tracing.start({

    screenshots: true,

    snapshots: true

  });

  const page = await context.newPage();

  await page.goto('https://playwright.dev');

  await context.tracing.stop({
    path:'traces/trace.zip'
  });

});