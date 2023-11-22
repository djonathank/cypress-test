var reporter = require('cucumber-html-reporter');

var options = {
  theme: 'bootstrap',
  jsonDir: 'cypress/reports/cucumber-json',
  output: 'cypress/reports/html/index.html',
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: true,
  metadata: {
    "App Version":"Demo automation",
    "Test Environment": "STAGING",
    "Browser": "Electron",
    "Platform": "Linux Ubuntu",
    "Executed": "Local"
  },
  failedSummaryReport: true,
};

reporter.generate(options);
