import { test, expect } from '@playwright/test';
import { Logger } from '../utils/logger';

test.describe('Forms & Inputs Handling', () => {

  test('Handle Various Inputs',async ({ page }) => {

    await page.goto('/');

    // =========================
    // fill()
    // =========================

    await page.fill('#user-name','standard_user');

    // =========================
    // type()
    // =========================

    await page.locator('#password').type('secret_sauce');

    // =========================
    // click()
    // =========================

    await page.click('#login-button');

    // Validate Login
    await expect(page).toHaveURL(/inventory/);

    Logger.info('Login Successful');

  });


test('Checkbox Handling',async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/checkboxes');

  const checkbox = page.locator('input[type="checkbox"]').first();

  // Check checkbox
  await checkbox.check();

  // Validate checked
  await expect(checkbox).toBeChecked();

  Logger.info('Checkbox Checked'
  );

});

test('Radio Button Handling',async ({ page }) => {

  await page.goto('https://demoqa.com/radio-button');

  // Click Radio Button
  await page.click('label[for="yesRadio"]');

  // Validation
  await expect(page.locator('.text-success')).toHaveText('Yes');

  Logger.info('Radio Button Selected');

});

test('Dropdown Handling',async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/dropdown');

  // Select by value
  await page.selectOption('#dropdown','1');

  // Validate selected value
  await expect(page.locator('#dropdown')).toHaveValue('1');

  // Select by label
  await page.selectOption('#dropdown',{label: 'Option 2'}
  );

  Logger.info('Dropdown Option Selected');
});

});
