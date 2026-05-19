import { test, expect } from '@playwright/test';

// Run tests in parallel
test.describe.configure({

  mode: 'parallel'

});

test('Parallel Test 1',
async ({ page }) => {

  await page.goto(
    'https://www.saucedemo.com'
  );

  console.log('Test 1 Running');

});

test('Parallel Test 2',
async ({ page }) => {

  await page.goto(
    'https://playwright.dev'
  );

  console.log('Test 2 Running');

});

test('Parallel Test 3',
async ({ page }) => {

  await page.goto(
    'https://example.com'
  );

  console.log('Test 3 Running');

});



