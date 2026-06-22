import { test, expect } from '@playwright/test';

test('Geolocation Mocking',async ({ browser }) => {

  // Create browser context
  const context =
    await browser.newContext({

      // Grant permission
      permissions: ['geolocation'],

      // Mock location
      geolocation: {

        latitude: 28.6139,

        longitude: 77.2090
      }
    });

  // Create page
  const page = await context.newPage();

  await page.goto(
    'https://maps.google.com'
  );

});



// grantPermissions() Alternate Approach

// await context.grantPermissions([
//   'geolocation'
// ]);



// Dynamic Location Change
// await context.setGeolocation({

//   latitude: 19.0760,

//   longitude: 72.8777

// });