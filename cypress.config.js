const cucumber = require('cypress-cucumber-preprocessor').default
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'bebkhx',
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
     baseUrl: "http://demo.automationtesting.in/",
     specPattern: "**/*.{feature,features}",
     video: true,
     watchForFileChanges: false,
     experimentalSourceRewriting: true,
     reporter: "cypress-multi-reporters",
     reporterOptions: {
       configFile: "reporter-config.json"
     }
  },
});
