import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

// ==================== COMMON STEPS ====================
Given('User Login and Navigate to Admin Page', async function () {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/');
    await this.loginPage.login('Admin', 'admin123');
    // Wait for navigation to complete
    await this.page.waitForLoadState('networkidle');
    await this.adminPage.navigateToAdmin();
    await this.page.waitForLoadState('networkidle');

});

Then('Validate the Admin Menu Options', async function () {
    const expectedMenus = [
        'User Management',
        'Job',
        'Organization',
        'Qualifications',
        'Nationalities',
        'Corporate Branding',
        'Configuration'
    ];

    await this.adminPage.validateMenuOptions(expectedMenus);
});

// ==================== USER MANAGEMENT STEPS ====================
When('User clicks on User Management menu', async function () {
    await this.userManagementPage.clickUserManagementMenu();
    await this.page.waitForTimeout(1000);
});

Then('User should see User Management submenu options', async function () {
    const isUsersVisible = await this.userManagementPage.usersSubmenu.isVisible();
    const isUserRolesVisible = await this.userManagementPage.userRolesSubmenu.isVisible();
    expect(isUsersVisible).toBeTruthy();
    expect(isUserRolesVisible).toBeTruthy();
});

When('User clicks on Users submenu', async function () {
    await this.userManagementPage.clickUsersSubmenu();
    await this.page.waitForLoadState('networkidle');
});

Then('Users page should be displayed with user list', async function () {
    const isUsersPageVisible = await this.userManagementPage.isUsersPageVisible();
    expect(isUsersPageVisible).toBeTruthy();
    
    const isAddButtonVisible = await this.userManagementPage.isAddUserButtonVisible();
    expect(isAddButtonVisible).toBeTruthy();
});

// ==================== JOB MANAGEMENT STEPS ====================
When('User clicks on Job menu', async function () {
    await this.jobPage.clickJobMenu();
    await this.page.waitForTimeout(1000);
});

Then('User should see Job submenu options', async function () {
    const isJobTitlesVisible = await this.jobPage.jobTitlesSubmenu.isVisible();
    const isEmploymentStatusVisible = await this.jobPage.employmentStatusSubmenu.isVisible();
    expect(isJobTitlesVisible).toBeTruthy();
    expect(isEmploymentStatusVisible).toBeTruthy();
});

When('User clicks on Job Titles submenu', async function () {
    await this.jobPage.clickJobTitlesSubmenu();
    await this.page.waitForLoadState('networkidle');
});

Then('Job Titles page should be displayed', async function () {
    const isJobTitlesPageVisible = await this.jobPage.isJobTitlesPageVisible();
    expect(isJobTitlesPageVisible).toBeTruthy();
});

When('User clicks on Employment Status submenu', async function () {
    await this.jobPage.clickEmploymentStatusSubmenu();
    await this.page.waitForLoadState('networkidle');
});

Then('Employment Status page should be displayed', async function () {
    const isEmploymentStatusPageVisible = await this.jobPage.isEmploymentStatusPageVisible();
    expect(isEmploymentStatusPageVisible).toBeTruthy();
});

// ==================== ORGANIZATION STEPS ====================
When('User clicks on Organization menu', async function () {
    await this.organizationPage.clickOrganizationMenu();
    await this.page.waitForTimeout(1000);
});

Then('User should see Organization submenu options', async function () {
    const isStructureVisible = await this.organizationPage.structureSubmenu.isVisible();
    const isLocationsVisible = await this.organizationPage.locationsSubmenu.isVisible();
    expect(isStructureVisible).toBeTruthy();
    expect(isLocationsVisible).toBeTruthy();
});

When('User clicks on Structure submenu', async function () {
    await this.organizationPage.clickStructureSubmenu();
    await this.page.waitForLoadState('networkidle');
});

Then('Organization Structure page should be displayed', async function () {
    const isStructurePageVisible = await this.organizationPage.isStructurePageVisible();
    expect(isStructurePageVisible).toBeTruthy();
});

When('User clicks on Locations submenu', async function () {
    await this.organizationPage.clickLocationsSubmenu();
    await this.page.waitForLoadState('networkidle');
});

Then('Locations page should be displayed', async function () {
    const isLocationsPageVisible = await this.organizationPage.isLocationsPageVisible();
    expect(isLocationsPageVisible).toBeTruthy();
});

// ==================== QUALIFICATIONS STEPS ====================
When('User clicks on Qualifications menu', async function () {
    await this.qualificationsPage.clickQualificationsMenu();
    await this.page.waitForTimeout(1000);
});

Then('User should see Qualifications submenu options', async function () {
    const isEducationVisible = await this.qualificationsPage.educationSubmenu.isVisible();
    const isSkillsVisible = await this.qualificationsPage.skillsSubmenu.isVisible();
    expect(isEducationVisible).toBeTruthy();
    expect(isSkillsVisible).toBeTruthy();
});

When('User clicks on Education submenu', async function () {
    await this.qualificationsPage.clickEducationSubmenu();
    await this.page.waitForLoadState('networkidle');
});

Then('Education page should be displayed', async function () {
    const isEducationPageVisible = await this.qualificationsPage.isEducationPageVisible();
    expect(isEducationPageVisible).toBeTruthy();
});

When('User clicks on Skills submenu', async function () {
    await this.qualificationsPage.clickSkillsSubmenu();
    await this.page.waitForLoadState('networkidle');
});

Then('Skills page should be displayed', async function () {
    const isSkillsPageVisible = await this.qualificationsPage.isSkillsPageVisible();
    expect(isSkillsPageVisible).toBeTruthy();
});

// ==================== NATIONALITIES STEPS ====================
When('User clicks on Nationalities menu', async function () {
    await this.nationalitiesPage.clickNationalitiesMenu();
    await this.page.waitForLoadState('networkidle');
});

Then('Nationalities page should be displayed', async function () {
    const isNationalitiesPageVisible = await this.nationalitiesPage.isNationalitiesPageVisible();
    expect(isNationalitiesPageVisible).toBeTruthy();
});

Then('User should see list of nationalities', async function () {
    const isNationalitiesTableVisible = await this.nationalitiesPage.isNationalitiesTableVisible();
    expect(isNationalitiesTableVisible).toBeTruthy();
});

// ==================== CORPORATE BRANDING STEPS ====================
When('User clicks on Corporate Branding menu', async function () {
    await this.corporateBrandingPage.clickCorporateBrandingMenu();
    await this.page.waitForLoadState('networkidle');
});

Then('Corporate Branding page should be displayed', async function () {
    const isCorporateBrandingPageVisible = await this.corporateBrandingPage.isCorporateBrandingPageVisible();
    expect(isCorporateBrandingPageVisible).toBeTruthy();
});

Then('User should see branding configuration options', async function () {
    const isBrandLogoVisible = await this.corporateBrandingPage.isBrandLogoSectionVisible();
    const isThemeColorVisible = await this.corporateBrandingPage.isThemeColorSectionVisible();
    expect(isBrandLogoVisible).toBeTruthy();
    expect(isThemeColorVisible).toBeTruthy();
});

// ==================== CONFIGURATION STEPS ====================
When('User clicks on Configuration menu', async function () {
    await this.configurationPage.clickConfigurationMenu();
    await this.page.waitForTimeout(1000);
});

Then('User should see Configuration submenu options', async function () {
    const isEmailConfigVisible = await this.configurationPage.emailConfigurationSubmenu.isVisible();
    const isLocalizationVisible = await this.configurationPage.localizationSubmenu.isVisible();
    expect(isEmailConfigVisible).toBeTruthy();
    expect(isLocalizationVisible).toBeTruthy();
});

When('User clicks on Email Configuration submenu', async function () {
    await this.configurationPage.clickEmailConfigurationSubmenu();
    await this.page.waitForLoadState('networkidle');
});

Then('Email Configuration page should be displayed', async function () {
    const isEmailConfigPageVisible = await this.configurationPage.isEmailConfigPageVisible();
    expect(isEmailConfigPageVisible).toBeTruthy();
});

When('User clicks on Localization submenu', async function () {
    await this.configurationPage.clickLocalizationSubmenu();
    await this.page.waitForLoadState('networkidle');
});

Then('Localization page should be displayed', async function () {
    const isLocalizationPageVisible = await this.configurationPage.isLocalizationPageVisible();
    expect(isLocalizationPageVisible).toBeTruthy();
});
