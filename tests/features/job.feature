Feature: Job Management

  Scenario: Navigate to Job section
    Given User Login and Navigate to Admin Page
    When User clicks on Job menu
    Then User should see Job submenu options

  Scenario: View Job Titles
    Given User Login and Navigate to Admin Page
    When User clicks on Job menu
    And User clicks on Job Titles submenu
    Then Job Titles page should be displayed

  Scenario: View Employment Status
    Given User Login and Navigate to Admin Page
    When User clicks on Job menu
    And User clicks on Employment Status submenu
    Then Employment Status page should be displayed
