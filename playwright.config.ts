import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  expect: { timeout: 5000 },
  retries: 1,
  workers: 2,
  fullyParallel: true,
  reporter: [ ['html'], ['list'], ['github']],
  use: {
    baseURL: 'https://www.saucedemo.com',
    headless: false,
    viewport: { width: 1280, height: 720 },
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
    ignoreHTTPSErrors: true
  },
  projects: [
    { name: 'chromium', use: { browserName: 'chromium' } }
    
    // { name: 'firefox', use: { browserName: 'firefox' } }
  ]
});
