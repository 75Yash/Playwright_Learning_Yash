Feature: SauceDemo Login Functionality

  As a user
  I want to login into SauceDemo Application
  So that I can access products page

  @smoke
  Scenario: Successful Login

    Given user launches SauceDemo website

    When user enters username "standard_user"

    And user enters password "secret_sauce"

    And user clicks login button

    Then user should navigate to inventory page

  @regression
  Scenario: Invalid Login

    Given user launches SauceDemo website

    When user enters username "locked_out_user"

    And user enters password "secret_sauce"
    
    And user clicks login button

    Then error message should be displayed