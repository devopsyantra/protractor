// angularHomePage page instance
//import AngularHomePage from "../pages/angularHomePage";
// import { Then } from "cucumber";

 var AngularHomePage = require('../pages/angularHomePage');
var { Then } = require('cucumber');

const angularHomePage = new AngularHomePage();

Then(/^I clear search textbox$/, () => {
    return angularHomePage.searchTextBox.clear();
});

Then(/^I scroll to bottom of the page$/, () => {
    return browser.executeScript('window.scrollTo(0,10000);', angularHomePage.backToTopBtn);
});

Then(/^I click back to top button$/, () => {
    return angularHomePage.backToTopBtn.click();
});

