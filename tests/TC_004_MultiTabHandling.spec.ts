import { test, expect } from '@playwright/test';

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

    console.log('New Tab Opened');

    // Validate text in new tab
    await expect(newPage.locator('h3')).toHaveText('New Window');

    // Get title
    console.log(await newPage.title());

    // Switch Back to Parent Tab

    await page.bringToFront();

    console.log('Switched Back To Parent');

    // Validate parent page
    await expect(page.locator('h3')).toHaveText('Opening a new window');

    // Close New Tab

    await newPage.close();

    console.log('New Tab Closed');
  });
