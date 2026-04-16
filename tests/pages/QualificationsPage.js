import { expect } from '@playwright/test';

export default class QualificationsPage {
    constructor(page) {
        this.page = page;
        
        // Qualifications menu
        this.qualificationsMenu = page.getByText('Qualifications');
        
        // Submenu items
        this.educationSubmenu = page.getByText('Education');
        this.skillsSubmenu = page.getByText('Skills');
        this.licensesSubmenu = page.getByText('Licenses');
        this.languagesSubmenu = page.getByText('Languages');
        
        // Education page elements
        this.educationPageHeader = page.locator('h6:has-text("Education Types")');
        this.addEducationButton = page.getByRole('button', { name: 'Add' });
        
        // Skills page elements
        this.skillsPageHeader = page.locator('h6:has-text("Skills")');
    }

    async clickQualificationsMenu() {
        await this.qualificationsMenu.click();
    }

    async clickEducationSubmenu() {
        await this.educationSubmenu.click();
    }

    async clickSkillsSubmenu() {
        await this.skillsSubmenu.click();
    }

    async clickLicensesSubmenu() {
        await this.licensesSubmenu.click();
    }

    async clickLanguagesSubmenu() {
        await this.languagesSubmenu.click();
    }

    async isEducationPageVisible() {
        return await this.educationPageHeader.isVisible();
    }

    async isSkillsPageVisible() {
        return await this.skillsPageHeader.isVisible();
    }

    async isAddEducationButtonVisible() {
        return await this.addEducationButton.isVisible();
    }
}
