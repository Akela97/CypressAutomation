Feature: End to end Ecommerce validation

#   Application Regression

  Scenario: Ecommerce products delivery
    Given I open Ecommerce page
    When I add items to cart
    And I validate the total prices
    Then I select the country and verify thank you message

  Scenario: Filling the form to setup
    Given I open Ecommerce page
    When I fill the form details
    Then I validate the form behaviour
    And I select the shop page