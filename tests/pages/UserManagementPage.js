import { expect } from '@playwright/test';

export default class UserManagementPage {
    constructor(page) {
        this.page = page;
        
        // User Management menu
        this.userManagementMenu = page.getByText('User Management');
        
        // Submenu items
        this.usersSubmenu = page.getByText('Users', { exact: true });
        this.userRolesSubmenu = page.getByText('User Roles');
        
        // Users page elements
        this.usersPageHeader = page.locator('h6:has-text("Users")');
        this.addUserButton = page.getByRole('button', { name: 'Add' });
        this.usersTable = page.locator('.oxd-table');
    }

    async clickUserManagementMenu() {
        await this.userManagementMenu.click();
    }

    async clickUsersSubmenu() {
        await this.usersSubmenu.click();
    }

    async clickUserRolesSubmenu() {
        await this.userRolesSubmenu.click();
    }

    async isUsersPageVisible() {
        return await this.usersPageHeader.isVisible();
    }

    async isAddUserButtonVisible() {
        return await this.addUserButton.isVisible();
    }

    async isUsersTableVisible() {
        return await this.usersTable.isVisible();
    }
}
