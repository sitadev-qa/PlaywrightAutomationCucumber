import { expect } from '@playwright/test';

export default class ConfigurationPage {
    constructor(page) {
        this.page = page;
        
        // Configuration menu
        this.configurationMenu = page.getByText('Configuration');
        
        // Submenu items
        this.emailConfigurationSubmenu = page.getByText('Email Configuration');
        this.localizationSubmenu = page.getByText('Localization');
        this.securitySubmenu = page.getByText('Security');
        this.sessionTimeoutSubmenu = page.getByText('Session Timeout');
        
        // Email Configuration page elements
        this.emailConfigPageHeader = page.locator('h6:has-text("Email Configuration")');
        
        // Localization page elements
        this.localizationPageHeader = page.locator('h6:has-text("Localization")');
    }

    async clickConfigurationMenu() {
        await this.configurationMenu.click();
    }

    async clickEmailConfigurationSubmenu() {
        await this.emailConfigurationSubmenu.click();
    }

    async clickLocalizationSubmenu() {
        await this.localizationSubmenu.click();
    }

    async clickSecuritySubmenu() {
        await this.securitySubmenu.click();
    }

    async clickSessionTimeoutSubmenu() {
        await this.sessionTimeoutSubmenu.click();
    }

    async isEmailConfigPageVisible() {
        return await this.emailConfigPageHeader.isVisible();
    }

    async isLocalizationPageVisible() {
        return await this.localizationPageHeader.isVisible();
    }
}
