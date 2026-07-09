import { test, expect } from '@playwright/test';
import users from '../test-data/users.json';
import readCSV from '../utils/csvReader';
import { Logger } from '../utils/logger';

test.describe('JSON Data Driven Testing',() => {
users.forEach((data) => {

  test(`Login Test ${data.username}`,
  async ({ page }) => {

    await page.goto('/');

    await page.fill('#user-name', data.username);

    await page.fill('#password', data.password);

    await page.click('#login-button');

  });

});

});


test.describe('CSV Data Driven Testing',() => {

  let csvUsers: Array<Record<string, string>>;

  test.beforeAll(async () => {

    csvUsers = await readCSV('test-data/users.csv');

  });

  test('Login Using CSV Data', async ({ page }) => {

    for (const user of csvUsers) {

      await page.goto('/');

      // Login
      await page.fill('#user-name',user.username
      );

      await page.fill('#password',user.password);

      await page.click('#login-button');

      // Validation
      await expect(page).toHaveURL(/inventory/);

      Logger.info(`CSV Login Success: ${user.username}`);

      // Logout for next iteration
      await page.goto('https://www.saucedemo.com');
    }

  });

});
