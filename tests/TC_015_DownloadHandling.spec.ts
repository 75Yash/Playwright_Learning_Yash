import { test, expect } from '@playwright/test';

test('File Download', async ({ page }) => {

  await page.goto(
    'https://the-internet.herokuapp.com/download'
  );

  // Wait for download event
  const downloadPromise =
    page.waitForEvent('download');

  // Trigger download
  await page.locator('a').first().click();

  // Capture download object
  const download = await downloadPromise;

  // Get downloaded filename
  console.log(await download.suggestedFilename()
  );

  // Save file locally
  await download.saveAs(
    `downloads/${
      await download.suggestedFilename()
    }`
  );

  const failure = await download.failure();

  expect(failure).toBeNull();

});