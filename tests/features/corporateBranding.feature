Feature: Corporate Branding

  Scenario: Navigate to Corporate Branding section
    Given User Login and Navigate to Admin Page
    When User clicks on Corporate Branding menu
    Then Corporate Branding page should be displayed

  Scenario: View Branding Settings
    Given User Login and Navigate to Admin Page
    When User clicks on Corporate Branding menu
    Then User should see branding configuration options
