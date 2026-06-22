import { chromium } from '@playwright/test';

(async () => {

  // =========================
  // Launch Browser
  // =========================

  const browser = await chromium.launch({
      headless: false
    });

  // =========================
  // Create Context
  // =========================

  const context = await browser.newContext();

  const page = await context.newPage();

  await page.goto('https://www.saucedemo.com');

  // Login

  await page.fill('#user-name','standard_user');

  await page.fill('#password','secret_sauce');

  await page.click('#login-button');

  // Wait for Login

  await page.waitForURL('**/inventory.html');
 
  // Save Session
  await context.storageState({
    path:'utils/user-session.json'
  });

  await browser.close();
})();
