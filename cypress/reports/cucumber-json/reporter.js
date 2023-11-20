const reporter = require('cucumber-html-reporter')

const options = {
  theme: 'bootstrap',
  jsonDir: 'cypress/reports/cucumber-json',
  output: 'cypress/reports/cucumber_report.html',
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: true,
  metadata: {
      "App Name":"Automation Test",
      "Test Environment": "HOMOLOG",
      "Browser": "Electron",
      "Platform": "Windows 11",
      "Executed": "Local"
  }
};

reporter.generate(options)