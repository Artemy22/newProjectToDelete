const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');


module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1980,
  watchForFileChanges: false,
  e2e: {
    baseUrl: 'https://automationteststore.com',
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
      },
  },
});