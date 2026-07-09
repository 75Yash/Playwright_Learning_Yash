import { test } from '../fixtures/CustomFixture';
import { Logger } from '../utils/logger';

test.describe('Data Fixture',() => {

  test('Use Shared Test Data',async ({ page, testData }) => {

    await page.goto('/');

    // Use fixture data
    await page.fill('#user-name',
      testData.username
    );

    await page.fill('#password',
      testData.password
    );

    await page.click(
      '#login-button'
    );

    Logger.info(`Logged in using:${testData.username}`
    );

  });

});
