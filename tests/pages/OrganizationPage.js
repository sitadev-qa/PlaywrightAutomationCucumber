import { expect } from '@playwright/test';

export default class OrganizationPage {
    constructor(page) {
        this.page = page;
        
        // Organization menu
        this.organizationMenu = page.getByText('Organization');
        
        // Submenu items
        this.structureSubmenu = page.getByText('Structure');
        this.locationsSubmenu = page.getByText('Locations');
        this.divisionsSubmenu = page.getByText('Divisions');
        this.departmentsSubmenu = page.getByText('Departments');
        this.subUnitsSubmenu = page.getByText('Sub Units');
        
        // Structure page elements
        this.structurePageHeader = page.locator('h6:has-text("Organization Structure")');
        
        // Locations page elements
        this.locationsPageHeader = page.locator('h6:has-text("Locations")');
        this.addLocationButton = page.getByRole('button', { name: 'Add' });
    }

    async clickOrganizationMenu() {
        await this.organizationMenu.click();
    }

    async clickStructureSubmenu() {
        await this.structureSubmenu.click();
    }

    async clickLocationsSubmenu() {
        await this.locationsSubmenu.click();
    }

    async clickDivisionsSubmenu() {
        await this.divisionsSubmenu.click();
    }

    async clickDepartmentsSubmenu() {
        await this.departmentsSubmenu.click();
    }

    async clickSubUnitsSubmenu() {
        await this.subUnitsSubmenu.click();
    }

    async isStructurePageVisible() {
        return await this.structurePageHeader.isVisible();
    }

    async isLocationsPageVisible() {
        return await this.locationsPageHeader.isVisible();
    }

    async isAddLocationButtonVisible() {
        return await this.addLocationButton.isVisible();
    }
}
