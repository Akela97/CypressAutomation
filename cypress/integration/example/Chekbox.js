/// <reference types="Cypress" />

describe('verify to checkbox',function(){

  it('click chekbox',function(){

cy.visit('https://rahulshettyacademy.com/AutomationPractice')
// validate behaviour use be keyword and () keyword use more then one validation
cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
//Uncheck 
cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
//Multiple chekcbox(check methoad accepted value property)
// cy.get('input[type="checkbox"]').check(['Option2','Option3'])
cy.get('input[type="checkbox"]').check(['option1','option2','option3'])


})


})