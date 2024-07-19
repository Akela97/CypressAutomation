/// <reference types="Cypress" />

describe('validate static dropdown', () => {
  it('select static dropdown list', () => {

    cy.visit('https://rahulshettyacademy.com/AutomationPractice')

    //Using select method to static dropdown
    cy.get('#dropdown-class-example').select('Option2').should('have.value','option2')

    //------------------Dynamic dropdown validation

    cy.get('#autocomplete').type('ind')
// itrating multiple item through each method
cy.get('.ui-menu-item div').each(($e1, index, $list) => {


  if ($e1.text().trim() === "India") {

    cy.wrap($e1).click()

  }
    })
    cy.get('#autocomplete').should('have.value','India')

//------------------------------------visible or not visible
//handle with chai assertion 
cy.get('#displayed-text').should('be.visible')
cy.get('#hide-textbox').click()
cy.get('#displayed-text').should('not.be.visible')
cy.get('#show-textbox').click()
cy.get('#displayed-text').should('be.visible')



//------------------------------------------------------------radio button clcik
cy.get('[value="radio2"]').check().should('be.checked')








  })
})