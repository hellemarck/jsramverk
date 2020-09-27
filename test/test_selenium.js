/**
 * Test for getting started with Selenium.
 * could also run i chrome, dsnt matter
 */

"use strict";

const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/firefox');
const chromedriver = require('chromedriver');

var browser = new webdriver.Builder().
    withCapabilities(webdriver.Capabilities.firefox())
    .build();

browser.get("http://localhost:3000/reports/week/1");

// Way 2
browser.getTitle().then(function( title ) {
    console.log(title);
});

browser.quit();
