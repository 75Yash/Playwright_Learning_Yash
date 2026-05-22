const { defineConfig, devices } =
require('@playwright/test');

module.exports = defineConfig({

  // Test folder
  testDir: './tests',

  // Global timeout
  timeout: 30000,

  // Assertion timeout
  expect: {

    timeout: 5000

  },

  // Retry failed tests
  retries: 1,

  // Parallel workers
  workers: 2,

  // Fully parallel
  fullyParallel: true,

  // Reports
  reporter: [

    ['html'],

    ['list'],

    ['github']
  ],

  // Shared browser settings
  use: {

    // Base URL
    baseURL:
    'https://www.saucedemo.com',

    // Headless mode
    headless: false,

    // Browser viewport
    viewport: {

      width: 1280,
      height: 720

    },

    // Screenshot config
    screenshot:
    'only-on-failure',

    // Video config
    video:
    'retain-on-failure',

    // Trace config
    trace:
    'retain-on-failure',

    // HTTPS ignore
    ignoreHTTPSErrors: true
  },

  // Browser Projects
  projects: [

    {
      name: 'chromium',

      use: {

        browserName:
        'chromium'

      }
    },

    {
      name: 'firefox',

      use: {

        browserName:
        'firefox'

      }
    },

    {
      name: 'mobile-chrome',

      use: {

        ...devices['Pixel 5']

      }
    }
  ]
});