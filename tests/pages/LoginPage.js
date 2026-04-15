export default class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameInput = page.locator('input[name="username"]');
        this.passwordInput = page.locator('input[name="password"]');
        this.loginBtn = page.locator('button[type="submit"]');
        this.dashboardHeader = page.locator('h6:has-text("Dashboard")');
        this.errorMessage = page.locator('[class="oxd-alert-content oxd-alert-content--error"]')
    }

    async navigate(url) {
        await this.page.goto(url);
    }

    async login(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginBtn.click();
    }

    async isDashboardVisible() {
        return await this.dashboardHeader.isVisible();
    }

    async getErrorMessage(){
        return await this.errorMessage.textContent();
    }
}
