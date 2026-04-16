Feature: Organization Management

  Scenario: Navigate to Organization section
    Given User Login and Navigate to Admin Page
    When User clicks on Organization menu
    Then User should see Organization submenu options

  Scenario: View Organization Structure
    Given User Login and Navigate to Admin Page
    When User clicks on Organization menu
    And User clicks on Structure submenu
    Then Organization Structure page should be displayed

  Scenario: View Locations
    Given User Login and Navigate to Admin Page
    When User clicks on Organization menu
    And User clicks on Locations submenu
    Then Locations page should be displayed
