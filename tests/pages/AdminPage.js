import { expect } from '@playwright/test';

export default class AdminPage {
    constructor(page) {
        this.page = page;

        // Top menu options in Admin section
        this.menuOptions = page.locator('.oxd-topbar-body-nav-tab-item');

        // Specific menu items (optional explicit locators)
        this.userManagement = page.getByText('User Management');
        this.job = page.getByText('Job');
        this.organization = page.getByText('Organization');
        this.qualifications = page.getByText('Qualifications');
        this.nationalities = page.getByText('Nationalities');
        this.corporateBranding = page.getByText('Corporate Branding');
        this.configuration = page.getByText('Configuration');
    }

    async navigateToAdmin() {
        await this.page.locator('a[href*="admin"]').click();
    }

    async getMenuTexts() {
        return await this.menuOptions.allTextContents();
    }

    async validateMenuOptions(expectedMenus) {
        const actualMenus = await this.getMenuTexts();

        for (const menu of expectedMenus) {
            expect(actualMenus).toContain(menu);
        }
    }
}