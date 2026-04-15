import { chromium } from '@playwright/test';

export default class PlaywrightManager {
    static async launchBrowser() {
        this.browser = await chromium.launch({ headless: false });
        this.context = await this.browser.newContext();
        this.page = await this.context.newPage();
        return this.page;
    }

    static async closeBrowser() {
        if (this.browser) {
            await this.browser.close();
        }
    }
}

