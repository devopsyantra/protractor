const path = require("path");
const jsonReports = process.cwd() + "/reports/json";
const Reporter = require("../support/reporter");

exports.config = {
  directConnect:true,
  baseUrl: "https://angularjs.org/",
  capabilities: {
  browserName: process.env.TEST_BROWSER_NAME || "chrome",
  //Below argument (no-sandbox) required to run in Docker container
  'chromeOptions': {
      'args': ['no-sandbox']
  } 
  },
  framework: "custom",
  frameworkPath: require.resolve("protractor-cucumber-framework"),
  specs: ["../features/*.feature"],
  exclude: "../features/database.feature",
  // resultJsonOutputFile: "./reports/json/protractor_report.json",
  onPrepare: function() {
    browser.ignoreSynchronization = false;
    //browser.manage().window().maximize();
    require('babel-register');
    //Reporter.createDirectory(jsonReports);
  },
  cucumberOpts: {
    strict: true,
    format: 'json:./reports/json/cucumber_report.json',
    require: ["../stepDefinitions/*.js", "../support/*.js"],
    tags: "(@AngularScenario or @DevelopScenario or @LearnScenario) and (not @DatabaseTest)" // @DatabaseTest scenario can be included when the username & password of DB have been configured in Support/database.js
  },
  onComplete: function () {
    Reporter.createHTMLReport();
  }
};
