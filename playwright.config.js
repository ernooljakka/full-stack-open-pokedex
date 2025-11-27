// @ts-check
import { defineConfig, devices } from '@playwright/test'

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './e2e-tests',

  timeout: 6000,

  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: 1,
  reporter: 'html',

  use: {
    baseURL: 'http://localhost:8080', // your app URL
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],

  /* Start the development server automatically before tests */
  webServer: {
    command: 'npm start',       // command to start your frontend
    url: 'http://localhost:8080', // the URL Playwright will wait for
    reuseExistingServer: true,    // if server is already running, reuse it
    timeout: 120 * 1000           // max wait 2 minutes for server to start
  },
})