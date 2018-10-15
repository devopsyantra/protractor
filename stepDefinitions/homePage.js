//import Globals from '../support/Globals';
//import { browser } from 'protractor';
//import { Given,Then } from "cucumber";

// Chai
/*const globals = new Globals();
const expect = globals.expect;*/
var AngularHomePage = require('../pages/angularHomePage');
var {Given, Then } = require('cucumber');

Given(/^I am on Angular page with title "(.*?)"$/, (title) => {
    return expect(browser.getTitle()).to.eventually.equal(title);
});

Then(/^I am on Tutorial page with title "(.*?)"$/, (title) => {
    return expect(browser.getTitle()).to.eventually.equal(title);
});

Then(/^I am on Developer Guide page with title "(.*?)"$/, (title) => {
    return expect(browser.getTitle()).to.eventually.equal(title);
});
