/// <reference types="Cypress" />
import Homepage from "../POM classes/Homepage";

describe('Start firts automation', () => {
    //Hook method
    let testData;
    before(function () {
        // root-level hook runs once before all tests
        cy.fixture('example').then(function (data) {
            // this.data=data
            testData = data;
        })

    })

    it('Hook function', () => {

        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.get('input[name="name"]:nth-child(2)').type(testData.name)
        cy.get('select').select(testData.Gender)
        cy.get('input[name="name"]:nth-child(1)').should('have.value', testData.name)
        cy.get('#inlineRadio1').should('be.enabled')
        //Use debuging
    //    ----- cy.pause();
        cy.get(':nth-child(2) > .nav-link').click()
        //shop(custom commnad method)
        // cy.selectproduct('iphone X')
        // // assertion
        // cy.get('h4.media-heading > a').then(function(price) {

        //     const textprice = price.text()
        //     expect(textprice).to.be.equal('iphone X')

        //   })


        //how to get multiple data from array
        testData.Productname.forEach(function (element) {
            cy.selectproduct(element)
        })
        





    })




})