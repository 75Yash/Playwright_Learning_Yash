import { test, expect } from '@playwright/test';
import { Logger } from '../utils/logger';

test('File Download', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/download');

  // Wait for download event
  const downloadPromise = page.waitForEvent('download');

  // Trigger download
  await page.locator('a').nth(1).click();

  // Capture download object
  const download = await downloadPromise;

  // Get downloaded filename
  Logger.info(await download.suggestedFilename());

  // Save file locally
  await download.saveAs(
    `downloads/${
      await download.suggestedFilename()
    }`
  );

  const failure = await download.failure();

  expect(failure).toBeNull();

});