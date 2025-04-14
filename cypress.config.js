const { defineConfig } = require("cypress")
const { allureCypress } = require('allure-cypress/reporter')

module.exports = defineConfig({
  screenshotOnRunFailure: true,
  screenshotsFolder: 'cypress/evidencias',
  video: true,
  videosFolder: 'cypress/videos',
  viewportWidth: 1280,
  viewportHeight: 800,
  e2e: {
    baseUrl: 'https://front.serverest.dev',
    setupNodeEvents(on, config) {
      allureCypress(on, config);
      return config;
    },
  },
});
