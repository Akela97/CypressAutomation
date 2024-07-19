
/// <reference types="Cypress" />



describe('child window handle', () => {
  it('action perfrom on child window', () => {


    cy.visit('https://rahulshettyacademy.com/AutomationPractice ')
    //Target:blank always open new window(we remove tagret:blank )
    cy.get('#opentab').invoke('removeAttr', 'target').click()

    cy.origin('https://www.qaclickacademy.com/', () => {
      //show error due to naviagte to other url not allowed sequerty purpose(using origin method)
      cy.get('#navbarSupportedContent a[href="about.html"]').click();
      cy.get('.col-lg-5 > .section-title > h2').should('contain','QAClick Academy')
    })








  })
})