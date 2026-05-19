const { test, expect } = require('@playwright/test');

  test('Playwright Assertions Demo',
  async ({ page }) => {

    await page.goto('/');

    // =========================
    // toHaveTitle
    // =========================

    await expect(page).toHaveTitle(/Swag Labs/);

    // =========================
    // toBeVisible
    // =========================

    await expect(page.locator('#login-button')).toBeVisible();

    // =========================
    // toHaveValue
    // =========================

    await page.fill('#user-name','standard_user');

    await expect(page.locator('#user-name')).toHaveValue('standard_user');

    // =========================
    // Login
    // =========================

    await page.fill('#password','secret_sauce');

    await page.click('#login-button');

    // =========================
    // toHaveURL
    // =========================

    await expect(page).toHaveURL(/inventory/);

    // =========================
    // toContainText
    // =========================

    await expect(page.locator('.title')).toContainText('Products');

    // =========================
    // toHaveText
    // =========================

    await expect(page.locator('.title')).toHaveText('Products');

    // =========================
    // Visibility Check
    // =========================

    await expect(page.locator('.inventory_list')).toBeVisible();

    // =========================
    // Count Assertion
    // =========================

    await expect(page.locator('.inventory_item')).toHaveCount(6);

    console.log('Assertions Executed Successfully');

  });