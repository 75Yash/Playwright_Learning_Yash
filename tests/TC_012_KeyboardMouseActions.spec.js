const { test, expect } = require('@playwright/test');

test.describe('Keyboard & Mouse Actions',() => {

  test('Keyboard Actions Demo', async ({ page }) => {

    await page.goto('/');

    // =========================
    // keyboard.type()
    // =========================

    await page.click('#user-name');

    await page.keyboard.type('standard_user');

    // =========================
    // keyboard.press()
    // =========================

    await page.click('#password');

    await page.keyboard.type('secret_sauce');

    // Press TAB
    await page.keyboard.press('Tab');

    // Press ENTER
    await page.keyboard.press('Enter');

    console.log('Keyboard Actions Successful');

  });

  // =========================
  // Mouse Actions
  // =========================

  test('Mouse Actions Demo',async ({ page }) => {

    await page.goto('/');

    // =========================
    // Hover
    // =========================

    await page.hover('#login-button');

    console.log('Mouse Hover Performed');

    // =========================
    // Double Click
    // =========================

    await page.dblclick('#login-button');

    console.log('Double Click Performed');

    // =========================
    // Right Click
    // =========================

    await page.click('#login-button',{
        button: 'right'
      }

    );

    console.log('Right Click Performed');

  });

});