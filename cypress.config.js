const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    excludeSpecPattern: 'cypress/e2e/examples/**',
    baseUrl: 'http://localhost:3000/',
  },
});
