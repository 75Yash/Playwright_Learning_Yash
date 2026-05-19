const { test, expect } = require('@playwright/test');

test('Playwright Wait Examples', async ({ page }) => {

  await page.goto('https://www.saucedemo.com');

  // =========================
  // waitForSelector()
  // =========================

  await page.waitForSelector('#user-name');

  // Fill username
  await page.fill('#user-name','standard_user');

  // =========================
  // waitForLoadState()
  // =========================

  await page.waitForLoadState('domcontentloaded');

  // Fill password
  await page.fill('#password','secret_sauce');

  // Click login
  await page.click('#login-button');

  // =========================
  // waitForLoadState(networkidle)
  // =========================

  await page.waitForLoadState('networkidle');

  // =========================
  // expect(locator).toBeVisible()
  // =========================

  await expect(page.locator('.inventory_list')).toBeVisible();

  // =========================
  // Wait for URL
  // =========================

  await expect(page).toHaveURL(/inventory/);

  // =========================
  // Wait for Text
  // =========================

  await expect(page.locator('.title')).toHaveText('Products');

  console.log('All Waits Executed Successfully');

});