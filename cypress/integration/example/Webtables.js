/// <reference types="Cypress" />


describe('Get data from Webtable', () => {
  it('fetch data from table', () => {

    cy.visit('https://rahulshettyacademy.com/AutomationPractice')

    cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {
      //Use nth-chlid css seletcor method/sibling found using .next method
      const listvalue = $e1.text()
      if (listvalue.includes('Python')) {
        //eq method call index value
        //cypress command to nocpress commnad firstly reslove promise
        cy.get('tr td:nth-child(2)').eq(index).next().then(function(price) {

          const textprice = price.text()
          expect(textprice).to.be.equal('25')
        })

      }

    })






  })
})