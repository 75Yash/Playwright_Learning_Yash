import { test, expect } from '@playwright/test';

test.describe('Single File Upload', () => {

  test('Single File Upload', async ({ page }) => {

    await page.goto(
      'https://the-internet.herokuapp.com/upload'
    );

    // Upload File
    await page.setInputFiles(
      '#file-upload',
      'test-data/users.csv'
    );

    await page.click('#file-submit');

    await expect(page.locator('#uploaded-files')).toHaveText('sample.txt');
  });

});


test('Multiple File Upload', async ({ page }) => {

  await page.goto('https://example.com/upload');

  await page.setInputFiles('#upload',
    [
      'test-data/users.csv',
      'test-data/users.json'
    ]
  );
});