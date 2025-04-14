const { defineConfig } = require("cypress")
const { allureCypress } = require('allure-cypress/reporter')

module.exports = defineConfig({
  screenshotOnRunFailure: true,
  screenshotsFolder: 'cypress/evidencias',
  e2e: {
    baseUrl: 'https://front.serverest.dev',
    setupNodeEvents(on, config) {
      allureCypress(on, config);
      return config;
    },
  },
});
