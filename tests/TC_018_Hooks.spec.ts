import { test, expect } from '@playwright/test';
import { Logger } from '../utils/logger';

test.beforeAll(async () => {

  Logger.info('Before All Tests');

});

test.beforeEach(async ({ page }) => {

  Logger.info('Before Each Test');

  await page.goto('https://www.saucedemo.com'
  );

});

test.afterEach(async () => {

  Logger.info('After Each Test');

});

test.afterAll(async () => {

  Logger.info('After All Tests');

});

test('Test 1', async ({ page }) => {

  await expect(page).toHaveTitle(/Swag Labs/);

});

test('Test 2', async ({ page }) => {

  await expect(page.locator('#login-button')).toBeVisible();

});