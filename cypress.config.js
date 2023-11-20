const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      specPattern: "**/*.feature";
      reporter: "cypress-multi-reporters"
    },
  },
});
