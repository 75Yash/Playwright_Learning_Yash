import { test as base } from '@playwright/test';

type TestFixtures = {
  testData: {
    username: string;
    password: string;
  };
};

export const test = base.extend<TestFixtures>({

  testData: async ({}, use) => {

    const user = {
      username: 'standard_user',
      password: 'secret_sauce'
    };

    await use(user);

  }

});