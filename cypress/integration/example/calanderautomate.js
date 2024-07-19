/// <reference types="Cypress" />



describe('Calander automate', () => {
  it('Get date', () => {

    const month = "6"
    const date = "15"
    const year = "2024"
    const epectedlist = [month, date, year]
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
    // cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/offers')

    cy.get('[href="#/offers"]').invoke('removeAttr', 'target').click()

    cy.get('div[class="react-date-picker__inputGroup"]').click()

    cy.get('.react-calendar__navigation__label').click()
    cy.get('.react-calendar__navigation__label').click()
    cy.contains('button', year).click()
    cy.get('.react-calendar__tile').eq(Number(month) - 1).click()
    cy.contains('abbr', Number(date)).click()

    //ASasasertion


    cy.get('.react-date-picker__inputGroup__input').each(($e1, index,$list) => {

      cy.wrap($e1).invoke('val').should('eq', epectedlist[index])

    })











  })
})