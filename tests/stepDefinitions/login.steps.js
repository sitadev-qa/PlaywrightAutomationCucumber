import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';


Given('user launches the application', async function () {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/');
});

When('user enters username {string} and password {string}', async function (username, password) {
    await this.loginPage.login(username, password);
});

When('clicks on login button', async function () {
    // Already handled in login method (best practice: avoid duplicate steps)
});

Then('user should be navigated to dashboard', async function () {
    const isVisible = await this.loginPage.isDashboardVisible();
    await expect(this.loginPage.dashboardHeader).toBeVisible();
});

Then('user should see an error message {string}', async function(expectedMessage){
    const currentErrorMessage = await this.loginPage.getErrorMessage();
    expect(currentErrorMessage.trim()).toBe(expectedMessage);

})