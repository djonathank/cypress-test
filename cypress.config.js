const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
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
