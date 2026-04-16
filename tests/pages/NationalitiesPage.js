import { expect } from '@playwright/test';

export default class NationalitiesPage {
    constructor(page) {
        this.page = page;
        
        // Nationalities menu
        this.nationalitiesMenu = page.getByText('Nationalities');
        
        // Nationalities page elements
        this.nationalitiesPageHeader = page.locator('h6:has-text("Nationalities")');
        this.addNationalityButton = page.getByRole('button', { name: 'Add' });
        this.nationalitiesTable = page.locator('.oxd-table');
    }

    async clickNationalitiesMenu() {
        await this.nationalitiesMenu.click();
    }

    async isNationalitiesPageVisible() {
        return await this.nationalitiesPageHeader.isVisible();
    }

    async isAddNationalityButtonVisible() {
        return await this.addNationalityButton.isVisible();
    }

    async isNationalitiesTableVisible() {
        return await this.nationalitiesTable.isVisible();
    }
}
