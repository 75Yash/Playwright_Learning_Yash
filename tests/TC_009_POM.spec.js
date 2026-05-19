const { test, expect } = require('@playwright/test');

const LoginPage = require('../pages/LoginPage');

const InventoryPage = require('../pages/InventoryPage');

test.describe('POM Login Flow', () => {

  test('Login Using POM',async ({ page }) => {

    // =========================
    // Create Page Objects
    // =========================

    const loginPage = new LoginPage(page);

    const inventoryPage = new InventoryPage(page);

    // =========================
    // Navigate
    // =========================

    await loginPage.gotoLoginPage();

    // =========================
    // Login
    // =========================

    await loginPage.login('standard_user','secret_sauce');

    // =========================
    // Validation
    // =========================

    await expect(page).toHaveURL(/inventory/);

    // =========================
    // Add Product
    // =========================

    await inventoryPage.addBackpackToCart();

    console.log(
      'POM Flow Executed Successfully'
    );

  });

});