import { test } from '@playwright/test';

test('Handle Alert', async ({ page }) => {

  page.on('dialog', async dialog => {

    console.log(dialog.message());

    await dialog.accept();

  });

  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

  await page.click('button[onclick="jsAlert()"]');

});