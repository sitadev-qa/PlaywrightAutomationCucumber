import { setDefaultTimeout, Before, After } from '@cucumber/cucumber';
import { chromium } from '@playwright/test';
import LoginPage from '../pages/LoginPage.js';
import AdminPage from '../pages/AdminPage.js';
import UserManagementPage from '../pages/UserManagementPage.js';
import JobPage from '../pages/JobPage.js';
import OrganizationPage from '../pages/OrganizationPage.js';
import QualificationsPage from '../pages/QualificationsPage.js';
import NationalitiesPage from '../pages/NationalitiesPage.js';
import CorporateBrandingPage from '../pages/CorporateBrandingPage.js';
import ConfigurationPage from '../pages/ConfigurationPage.js';

setDefaultTimeout(60000);

let browser;
let context;
let page;
let loginPage;
let adminPage;
let userManagementPage;
let jobPage;
let organizationPage;
let qualificationsPage;
let nationalitiesPage;
let corporateBrandingPage;
let configurationPage;

Before(async function () {
    browser = await chromium.launch({ headless: false });
    context = await browser.newContext();
    page = await context.newPage();
    loginPage = new LoginPage(page);
    adminPage = new AdminPage(page);
    userManagementPage = new UserManagementPage(page);
    jobPage = new JobPage(page);
    organizationPage = new OrganizationPage(page);
    qualificationsPage = new QualificationsPage(page);
    nationalitiesPage = new NationalitiesPage(page);
    corporateBrandingPage = new CorporateBrandingPage(page);
    configurationPage = new ConfigurationPage(page);
    
    // Attach to Cucumber world
    this.page = page;
    this.loginPage = loginPage;
    this.adminPage = adminPage;
    this.userManagementPage = userManagementPage;
    this.jobPage = jobPage;
    this.organizationPage = organizationPage;
    this.qualificationsPage = qualificationsPage;
    this.nationalitiesPage = nationalitiesPage;
    this.corporateBrandingPage = corporateBrandingPage;
    this.configurationPage = configurationPage;

});

After(async function () {
    if (browser) {
        await browser.close();
    }
});
