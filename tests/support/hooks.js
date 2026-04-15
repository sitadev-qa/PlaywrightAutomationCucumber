import { setDefaultTimeout, Before, After } from '@cucumber/cucumber';
import { chromium } from '@playwright/test';
import LoginPage from '../pages/LoginPage.js';

setDefaultTimeout(60000);

let browser;
let context;
let page;
let loginPage;

Before(async function () {
    browser = await chromium.launch({ headless: false });
    context = await browser.newContext();
    page = await context.newPage();
    loginPage = new LoginPage(page);
    
    // Attach to Cucumber world
    this.page = page;
    this.loginPage = loginPage;
});

After(async function () {
    if (browser) {
        await browser.close();
    }
});
