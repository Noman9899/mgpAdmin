const { defineConfig } = require("cypress");

module.exports = defineConfig({
  //viewportHeight: 1080,
  //viewportWidth: 1920, 

  reporter: 'mochawesome', // Set Mocha reporter
  reporterOptions: {
    reportDir: 'cypress/reports', // Directory to save reports
    overwrite: false,
    html: true,
    json: true,
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://admin-test.mygatepass.com/",
    chromeWebSecurity: false,
  },
});
