/// <reference types="Cypress" />


describe('Popup halndle', () => {
  it('Alert popup accept ', () => {

    cy.visit('https://rahulshettyacademy.com/AutomationPractice')
    //Alert handle automaticaly by cypress
    cy.get('#alertbtn').click()
    cy.get('#confirmbtn').click()
// Window: alert/confirm(On method to fire event alert its recived to argument )
cy.on('window:alert',(str)=>
  {
   //mocha
   expect(str).to.equal('Hello , share this practice page and share your knowledge')

  })

  cy.on('window:confirm',(str)=>
    {
     //mocha
     expect(str).to.equal('Hello , Are you sure you want to confirm?')
  
    })











  })
})