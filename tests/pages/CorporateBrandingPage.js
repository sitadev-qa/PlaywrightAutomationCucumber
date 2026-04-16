import { expect } from '@playwright/test';

export default class CorporateBrandingPage {
    constructor(page) {
        this.page = page;
        
        // Corporate Branding menu
        this.corporateBrandingMenu = page.getByText('Corporate Branding');
        
        // Corporate Branding page elements
        this.corporateBrandingPageHeader = page.locator('h6:has-text("Corporate Branding")');
        this.brandLogoSection = page.locator('[class*="branding"]');
        this.themeColorSection = page.locator('[class*="theme"]');
    }

    async clickCorporateBrandingMenu() {
        await this.corporateBrandingMenu.click();
    }

    async isCorporateBrandingPageVisible() {
        return await this.corporateBrandingPageHeader.isVisible();
    }

    async isBrandLogoSectionVisible() {
        return await this.brandLogoSection.isVisible();
    }

    async isThemeColorSectionVisible() {
        return await this.themeColorSection.isVisible();
    }
}
