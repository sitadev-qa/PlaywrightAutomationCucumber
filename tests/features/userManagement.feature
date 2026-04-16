Feature: User Management

  Scenario: Navigate to User Management section
    Given User Login and Navigate to Admin Page
    When User clicks on User Management menu
    Then User should see User Management submenu options

  Scenario: View Users list
    Given User Login and Navigate to Admin Page
    When User clicks on User Management menu
    And User clicks on Users submenu
    Then Users page should be displayed with user list
