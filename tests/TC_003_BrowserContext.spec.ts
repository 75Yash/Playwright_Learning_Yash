import { test, expect } from '@playwright/test';
import { Logger } from '../utils/logger';

  test('Multiple Browser Contexts',async ({ browser }) => {

    // Context 1

    const context1 = await browser.newContext();

    const page1 = await context1.newPage();

    await page1.goto('https://www.saucedemo.com');

    await page1.fill(
      '#user-name',
      'standard_user'
    );

    await page1.fill(
      '#password',
      'secret_sauce'
    );

    await page1.click(
      '#login-button'
    );

    await expect(page1).toHaveURL(/inventory/);

    Logger.info('User 1 Logged In');

    // Context 2

    const context2 = await browser.newContext();

    const page2 = await context2.newPage();

    await page2.goto('https://www.saucedemo.com');

    // Validate user is NOT logged in
    await expect(page2.locator('#login-button')).toBeVisible();

    Logger.info('User 2 Fresh Session');

    // Cleanup
    await context1.close();

    await context2.close();

  });
