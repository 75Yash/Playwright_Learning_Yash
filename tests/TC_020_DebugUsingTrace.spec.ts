import { test, expect } from '@playwright/test';
import { Logger } from '../utils/logger';

test.describe('Trace Viewer Debug Demo', () => {

  test('Intentional Failure For Debugging', async ({ page }) => {

    await page.goto('/');

    Logger.info('Website Opened');

    // =========================
    // Fill Username
    // =========================

    await page.fill('#user-name','standard_user');

    Logger.info('Username Entered');

    // =========================
    // Fill Wrong Password
    // Intentionally wrong
    // =========================

    await page.fill('#password','wrong_password');

    Logger.info('Wrong Password Entered');

    // =========================
    // Click Login
    // =========================

    await page.click('#login-button');

    Logger.info('Login Button Clicked');

    // =========================
    // Wait for Error Message
    // =========================

    await expect(page.locator(
        '[data-test="error"]'
      )).toBeVisible();

    Logger.info('Error Message Visible');

    // =========================
    // Intentional Failure
    // =========================

    // Actual URL remains login page
    // This assertion FAILS intentionally

    await expect(page   ).toHaveURL(/inventory/);

    // This line never executes
    Logger.info('This Will Not Print');

  });

});
