import { test, expect, Page, Dialog } from '@playwright/test';

test.describe('Alert, Confirm & Prompt Handling', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto(
      'https://the-internet.herokuapp.com/javascript_alerts'
    );
  });

  test('Handle JavaScript Alert', async ({ page }) => {

    page.once('dialog', async (dialog: Dialog) => {

      console.log('Type:', dialog.type());
      console.log('Message:', dialog.message());

      await dialog.accept();

    });

    await page.click('button[onclick="jsAlert()"]');

    await expect(page.locator('#result')).toHaveText(
      'You successfully clicked an alert'
    );

  });

  test('Handle JavaScript Confirm - Accept', async ({ page }) => {

    page.once('dialog', async (dialog: Dialog) => {

      console.log('Type:', dialog.type());
      console.log('Message:', dialog.message());

      await dialog.accept();

    });

    await page.click('button[onclick="jsConfirm()"]');

    await expect(page.locator('#result')).toHaveText(
      'You clicked: Ok'
    );

  });

  test('Handle JavaScript Confirm - Dismiss', async ({ page }) => {

    page.once('dialog', async (dialog: Dialog) => {

      console.log('Type:', dialog.type());
      console.log('Message:', dialog.message());

      await dialog.dismiss();

    });

    await page.click('button[onclick="jsConfirm()"]');

    await expect(page.locator('#result')).toHaveText(
      'You clicked: Cancel'
    );

  });

  test('Handle JavaScript Prompt - Accept with Text', async ({ page }) => {

    page.once('dialog', async (dialog: Dialog) => {

      console.log('Type:', dialog.type());
      console.log('Message:', dialog.message());

      await dialog.accept('Playwright Learning');

    });

    await page.click('button[onclick="jsPrompt()"]');

    await expect(page.locator('#result')).toHaveText(
      'You entered: Playwright Learning'
    );

  });

  test('Handle JavaScript Prompt - Dismiss', async ({ page }) => {

    page.once('dialog', async (dialog: Dialog) => {

      console.log('Type:', dialog.type());
      console.log('Message:', dialog.message());

      await dialog.dismiss();

    });

    await page.click('button[onclick="jsPrompt()"]');

    await expect(page.locator('#result')).toHaveText(
      'You entered: null'
    );

  });

});