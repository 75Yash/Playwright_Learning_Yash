import { test as base } from '@playwright/test';

export const test = base.extend({

  testData: async ({}, use) => {

    const user = {

      username:
      'standard_user',

      password:
      'secret_sauce'

    };

    await use(user);

  }
});
