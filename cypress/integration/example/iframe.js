/// <reference types="Cypress" />
/// <reference types="Cypress-iframe" />
import 'cypress-iframe'

describe('iframe handle', () => {


  it('verify iframe click ', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice')
    //iframe handle frameloaded method
    cy.frameLoaded("#courses-iframe")
    //switch to iframe mode
    cy.iframe().find('a[href="mentorship"]').eq(0).click()
    cy.iframe().find('ha[class="pricing-title "]').should('have.length', 2)



  })
})