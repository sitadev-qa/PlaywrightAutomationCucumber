Feature: OrangeHRM Login

  Scenario: Successful login with valid credentials
    Given user launches the application
    When user enters username "Admin" and password "admin123"
    And clicks on login button
    Then user should be navigated to dashboard

  Scenario: Unsuccessful login with invalid credentials
    Given user launches the application
    When user enters username "Admin" and password "wrongpassword"
    And clicks on login button
    Then user should see an error message "Invalid credentials"
  
  
    