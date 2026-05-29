const {Given, When, Then} = require('@cucumber/cucumber');

const { expect } = require('@playwright/test');

const LoginPage = require('../../pages/LoginPage');

let loginPage;

Given('user launches SauceDemo website', async function () {

  loginPage = new LoginPage(this.page);

  await loginPage.gotoLoginPage();
});

When('user enters username {string}', async function (username) {

  await loginPage.enterUsername(username);
});

When('user enters password {string}', async function (password) {

  await loginPage.enterPassword(password);
});

When('user clicks login button', async function () {

  await loginPage.clickLogin();
});

Then('user should navigate to inventory page', async function () {

  await expect(this.page).toHaveURL(/inventory/);
});

Then('error message should be displayed', async function () {

  await expect(this.page.locator('[data-test="error"]')
  ).toBeVisible();
});