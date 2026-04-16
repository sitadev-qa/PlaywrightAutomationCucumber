Feature: Qualifications Management

  Scenario: Navigate to Qualifications section
    Given User Login and Navigate to Admin Page
    When User clicks on Qualifications menu
    Then User should see Qualifications submenu options

  Scenario: View Education
    Given User Login and Navigate to Admin Page
    When User clicks on Qualifications menu
    And User clicks on Education submenu
    Then Education page should be displayed

  Scenario: View Skills
    Given User Login and Navigate to Admin Page
    When User clicks on Qualifications menu
    And User clicks on Skills submenu
    Then Skills page should be displayed
