import { test, expect } from '@playwright/test';

test.beforeAll(async () => {

  console.log('Before All Tests');

});

test.beforeEach(async ({ page }) => {

  console.log('Before Each Test');

  await page.goto('https://www.saucedemo.com'
  );

});

test.afterEach(async () => {

  console.log('After Each Test');

});

test.afterAll(async () => {

  console.log('After All Tests');

});

test('Test 1', async ({ page }) => {

  await expect(page).toHaveTitle(/Swag Labs/);

});

test('Test 2', async ({ page }) => {

  await expect(page.locator('#login-button')).toBeVisible();

});