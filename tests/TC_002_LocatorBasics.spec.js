import { test } from '@playwright/test';

test('Locator Basics', async ({ page }) => {

  await page.goto('/');

  // Basic Locators

  // ID Locator
  await page.locator('#user-name').fill('standard_user');

  // CSS Locator
  await page.locator('.input_error').nth(1).fill('secret_sauce');

  // Text Locator
  await page.getByText('Login').click();

  // Tag Locator
  await page.locator('input').first().fill('standard_user');

  // Attribute Locator
  await page.locator('[data-test="login-button"]')
  .click();

  // Placeholder Locator
  await page.getByPlaceholder('Username').fill('standard_user');

  // Special Locators

  // getByRole
  await page.getByRole('button', {
    name: 'Login'
  }).click();

  // getByLabel
  await page.getByLabel('Username').fill('test');

  // getByAltText
  await page.getByAltText('Company Logo');

  // getByTitle
  await page.getByTitle('Close');

  // getByTestId
  await page.getByTestId('login-btn');

  // Advanced Locators

  // nth()
  await page.locator('.input_error').nth(0).fill('standard_user');

  // first()
  await page.locator('input').first().fill('standard_user');

  // last()
  await page.locator('input').last().fill('secret_sauce');

  // filter()
  const inventoryItem = page
    .locator('.inventory_item')
    .filter({
      hasText: 'Sauce Labs Backpack'
    });

  // has()
  const addToCartButton = page
    .locator('.inventory_item')
    .filter({
      has: page.locator('button')
    });

  // X-Path Locator
  await page.locator('//input[@id="user-name"]').fill('standard_user');
});