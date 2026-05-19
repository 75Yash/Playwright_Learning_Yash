const base = require('@playwright/test');

exports.test = base.test.extend({

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