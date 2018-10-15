//import AngularHomePage from '../pages/angularHomePage';
//import Globals from '../support/Globals';
//import { browser } from 'protractor';
//import { When, Then } from "cucumber";

// Chai
/*const globals = new Globals();
const expect = globals.expect;*/
var AngularHomePage = require('../pages/angularHomePage');
var { When,Then } = require('cucumber');
// AngularHomePage page instance
const angularHomePage = new AngularHomePage();

When(/^I type "(.*?)"$/, (text) => {
    angularHomePage.searchTextBox.sendKeys(text);
    return browser.sleep(3000);
});

Then(/^I am greeted as "([^"]*)"$/, (text) => {
    //Here performing keyboard enter as google's search button keeps on changing
    //return expect(angularHomePage.greeting.getText()).to.eventually.equal(text);
});
