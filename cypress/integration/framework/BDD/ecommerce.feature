Feature: End to end Ecommerce validation

    application Regression

    Scenario: Ecommerce products delivery
    Given I open Ecommerce page
    When I add items to cart
    And validate the total prices
    Then select the country and verify thankyou
    
