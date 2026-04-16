Feature: Nationalities Management

  Scenario: Navigate to Nationalities section
    Given User Login and Navigate to Admin Page
    When User clicks on Nationalities menu
    Then Nationalities page should be displayed

  Scenario: View Nationalities list
    Given User Login and Navigate to Admin Page
    When User clicks on Nationalities menu
    Then User should see list of nationalities
