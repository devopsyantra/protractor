//import AngularHomePage from '../pages/angularHomePage';
//import Globals from '../support/Globals';
//import { browser } from 'protractor';
//import { Given,When, Then } from "cucumber";

// Chai
/*const globals = new Globals();
const expect = globals.expect;*/
var AngularHomePage = require('../pages/angularHomePage');
var { When,Then } = require('cucumber');

// AngularHomePage page instance
const angularHomePage = new AngularHomePage();


When(/^I click learn dropdown$/, () => {
    angularHomePage.learn.click();
    return browser.waitForAngular();
});

Then(/^I click Tutorial option$/, () => {
    angularHomePage.tutorial.click();
    return browser.waitForAngular();
});

When(/^I click develop dropdown$/, () => {
    return angularHomePage.develop.click();
});

Then(/^I click Developer Guide option$/, () => {
    return angularHomePage.developerGuide.click();
});