import { test, expect } from '@playwright/test';
import { Logger } from '../utils/logger';

test('Handle Multiple Tabs', async ({ page }) => {

    // Open initial page
    await page.goto('https://the-internet.herokuapp.com/windows');

    // Wait for new tab

    const [newPage] = await Promise.all([

        page.waitForEvent('popup'),

        page.click('a[href="/windows/new"]')
      ]);

    // New Tab Handling

    await newPage.waitForLoadState();

    Logger.info('New Tab Opened');

    // Validate text in new tab
    await expect(newPage.locator('h3')).toHaveText('New Window');

    // Get title
    Logger.info(await newPage.title());

    // Switch Back to Parent Tab

    await page.bringToFront();

    Logger.info('Switched Back To Parent');

    // Validate parent page
    await expect(page.locator('h3')).toHaveText('Opening a new window');

    // Close New Tab

    await newPage.close();

    Logger.info('New Tab Closed');
  });
