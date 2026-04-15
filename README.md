# Playwright + Cucumber BDD Automation Framework

A modern test automation framework combining Playwright for browser automation and Cucumber for BDD-style testing.

## Project Structure

```
tests/
├── features/           # Gherkin feature files
│   └── login.feature
├── stepDefinitions/    # Step definition implementations
│   └── login.steps.js
├── pages/              # Page Object Model classes
│   └── LoginPage.js
└── support/            # Support files (hooks, helpers)
    ├── hooks.js        # Before/After hooks for browser setup
    └── playwrightManager.js  # Browser management utilities
```

## Key Components

### 1. Feature Files (`tests/features/`)
- Contains Gherkin scenarios describing test cases
- Example: `login.feature`

### 2. Step Definitions (`tests/stepDefinitions/`)
- Maps Gherkin steps to actual code
- Uses `this.page` and `this.loginPage` from hooks
- Example: `login.steps.js`

### 3. Page Objects (`tests/pages/`)
- Encapsulates page locators and interactions
- Follows Page Object Model pattern
- Example: `LoginPage.js`

### 4. Hooks (`tests/support/hooks.js`)
- **Before Hook**: Launches browser, creates context/page, initializes page objects
- **After Hook**: Closes browser after each scenario
- Shares `page` and `loginPage` via Cucumber World

## Data Flow

```
Feature File (login.feature)
    ↓ (maps to steps)
Step Definitions (login.steps.js)
    ↓ (uses this.page, this.loginPage)
Hooks (hooks.js) → Provides page instances
    ↓ (interacts with)
Page Objects (LoginPage.js)
    ↓ (controls)
Browser (Playwright)
```

## Installation

```bash
npm install
```

## Running Tests

```bash
# Run all tests
npm test

# Run in headless mode
npm run test:headless
```

## Configuration

### cucumber.config.js
- Feature file paths
- Step definition and support file locations
- Report output format

### playwright.config.js
- Playwright-specific settings (if using Playwright test runner)

## Best Practices

1. **Page Object Model**: All locators and page interactions are in page classes
2. **World Context**: Use `this.page` and `this.loginPage` in step definitions (provided by hooks)
3. **Assertions**: Use Playwright's `expect()` for assertions
4. **Hooks**: Browser lifecycle managed in hooks.js
5. **No Duplicate Steps**: Avoid redundant steps (e.g., "clicks login button" when already in login method)

## Adding New Tests

1. Create feature file in `tests/features/`
2. Add step definitions in `tests/stepDefinitions/`
3. Create page object in `tests/pages/` if new page
4. Hooks automatically provide browser/page instances

## Example: Adding a New Feature

**feature/new-feature.feature:**
```gherkin
Feature: New Feature
  Scenario: Do something
    Given user is on the page
    When user performs action
    Then something should happen
```

**stepDefinitions/new-feature.steps.js:**
```javascript
import { Given, When, Then } from '@cucumber/cucumber';

Given('user is on the page', async function () {
    await this.page.goto('https://example.com');
});

When('user performs action', async function () {
    // Use this.page or custom page objects
});

Then('something should happen', async function () {
    await expect(this.page.locator('selector')).toBeVisible();
});
```
