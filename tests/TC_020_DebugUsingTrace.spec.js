const { test, expect } = require('@playwright/test');

test.describe('Trace Viewer Debug Demo', () => {

  test('Intentional Failure For Debugging', async ({ page }) => {

    await page.goto('/');

    console.log('Website Opened');

    // =========================
    // Fill Username
    // =========================

    await page.fill('#user-name','standard_user');

    console.log('Username Entered');

    // =========================
    // Fill Wrong Password
    // Intentionally wrong
    // =========================

    await page.fill('#password','wrong_password');

    console.log('Wrong Password Entered');

    // =========================
    // Click Login
    // =========================

    await page.click('#login-button');

    console.log('Login Button Clicked');

    // =========================
    // Wait for Error Message
    // =========================

    await expect(page.locator(
        '[data-test="error"]'
      )).toBeVisible();

    console.log('Error Message Visible');

    // =========================
    // Intentional Failure
    // =========================

    // Actual URL remains login page
    // This assertion FAILS intentionally

    await expect(page   ).toHaveURL(/inventory/);

    // This line never executes
    console.log('This Will Not Print');

  });

});