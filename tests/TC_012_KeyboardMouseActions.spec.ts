import { test, expect } from '@playwright/test';

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

    // =========================
    // Double Click
    // =========================

    await page.dblclick('#login-button');

    // =========================
    // Right Click
    // =========================

    await page.click('#login-button',{
        button: 'right'
      }

    );

  });

  test('Drag and Drop Demo', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/drag_and_drop');

    const source = page.locator('#column-a');
    const target = page.locator('#column-b');

    // =========================
    // Drag and Drop
    // =========================

    await source.dragTo(target);

    // =========================
    // Validation
    // =========================

    await expect(page.locator('#column-a header')).toHaveText('B');

    await expect(page.locator('#column-b header')).toHaveText('A');

  });

}); 
