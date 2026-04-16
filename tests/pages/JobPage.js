import { expect } from '@playwright/test';

export default class JobPage {
    constructor(page) {
        this.page = page;
        
        // Job menu
        this.jobMenu = page.getByText('Job');
        
        // Submenu items
        this.jobTitlesSubmenu = page.getByText('Job Titles');
        this.employmentStatusSubmenu = page.getByText('Employment Status');
        this.jobCategoriesSubmenu = page.getByText('Job Categories');
        
        // Job Titles page elements
        this.jobTitlesPageHeader = page.locator('h6:has-text("Job Titles")');
        this.addJobTitleButton = page.getByRole('button', { name: 'Add' });
        
        // Employment Status page elements
        this.employmentStatusPageHeader = page.locator('h6:has-text("Employment Status")');
    }

    async clickJobMenu() {
        await this.jobMenu.click();
    }

    async clickJobTitlesSubmenu() {
        await this.jobTitlesSubmenu.click();
    }

    async clickEmploymentStatusSubmenu() {
        await this.employmentStatusSubmenu.click();
    }

    async clickJobCategoriesSubmenu() {
        await this.jobCategoriesSubmenu.click();
    }

    async isJobTitlesPageVisible() {
        return await this.jobTitlesPageHeader.isVisible();
    }

    async isEmploymentStatusPageVisible() {
        return await this.employmentStatusPageHeader.isVisible();
    }

    async isAddJobTitleButtonVisible() {
        return await this.addJobTitleButton.isVisible();
    }
}
