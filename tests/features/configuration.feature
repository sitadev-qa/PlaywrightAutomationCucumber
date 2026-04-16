Feature: Configuration Management

  @smoke
  Scenario: Navigate to Configuration section
    Given User Login and Navigate to Admin Page
    When User clicks on Configuration menu
    Then User should see Configuration submenu options

  @smoke
  Scenario: View Email Configuration
    Given User Login and Navigate to Admin Page
    When User clicks on Configuration menu
    And User clicks on Email Configuration submenu
    Then Email Configuration page should be displayed

  @smoke
  Scenario: View Localization
    Given User Login and Navigate to Admin Page
    When User clicks on Configuration menu
    And User clicks on Localization submenu
    Then Localization page should be displayed

# To Run the configuration.feature file, use the following command in the terminal using npx
# npx cucumber-js tests/features/configuration.feature