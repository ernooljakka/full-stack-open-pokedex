const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    // Folder where your tests live
    specPattern: 'cypress/e2e/**/*.cy.js',

    // Base URL to make `cy.visit('/')` work
    baseUrl: 'http://localhost:5000',

    // Optional: increase timeout if needed
    defaultCommandTimeout: 6000,
    supportFile: false,

    // Video/screenshots on CI
    video: false,
    screenshotOnRunFailure: true
  }
})
