const cucumber = require('cypress-cucumber-preprocessor').default
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'bebkhx',
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
    //  baseUrl: "http://demo.automationtesting.in/",
    //  baseUrl: "https://demo.realworld.io/",
     baseUrl: "https://www.automationpractice.pl",
     specPattern: "cypress/e2e/features/*.{feature,features}",
     video: true,
     videoCompression: 15,
     videosFolder:"cypress/reports/videos",
     screenshotsFolder:"cypress/reports/screenshots",
     watchForFileChanges: true,
    //  experimentalSourceRewriting: true,
     reporter: "cypress-multi-reporters",
     chromeWebSecurity: false,
     reporterOptions: {
       configFile: "reporter-config.json"
     }
  },
});
