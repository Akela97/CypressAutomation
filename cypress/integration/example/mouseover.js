/// <reference types="Cypress" />


describe('Mousehover action perform', () => {
  it('action perform', () => {

    cy.visit('https://rahulshettyacademy.com/AutomationPractice')
    //Using j query method mouse hover action perfrom(cypress not support mouse hover action)
    //invoke('show') mthode show hiiden elements
    // cy.get('div.mouse-hover-content').invoke('show')
    //Force fully click elemnet using force:true method
    cy.contains('Top').click({force:true})
    cy.url().should('include','top')


  })
})