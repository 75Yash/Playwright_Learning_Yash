import { test, expect } from '@playwright/test';
import { Logger } from '../utils/logger';

// Run tests in parallel
test.describe.configure({

  mode: 'parallel'

});

test('Parallel Test 1',
async ({ page }) => {

  await page.goto(
    'https://www.saucedemo.com'
  );

  Logger.info('Test 1 Running');

});

test('Parallel Test 2',
async ({ page }) => {

  await page.goto(
    'https://playwright.dev'
  );

  Logger.info('Test 2 Running');

});

test('Parallel Test 3',
async ({ page }) => {

  await page.goto(
    'https://example.com'
  );

  Logger.info('Test 3 Running');

});



