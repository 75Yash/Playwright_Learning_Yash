import { test, expect } from '@playwright/test';
import { Logger } from '../utils/logger';

test.describe('Frames & iFrames Handling', () => {

  test('Handle iFrame', async ({ page }) => {

      await page.goto('https://the-internet.herokuapp.com/iframe');

      // =========================
      // frameLocator()
      // =========================

      const frame = page.frameLocator('#mce_0_ifr');

      // =========================
      // Clear Existing Text
      // =========================

      const frameText = await frame.locator('body').innerText();
      
      Logger.info('Existing Text Inside Frame:', frameText);


      // // =========================
      // // Enter Text Inside Frame
      // // =========================

      // await frame.locator('body').fill('Hello Playwright Frame');

      // // =========================
      // // Validation
      // // =========================

      // await expect(frame.locator('body')).toContainText(
      //   'Hello Playwright Frame'
      // );

    });

});
