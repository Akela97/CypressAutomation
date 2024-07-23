/// <reference types="Cypress" />

import Homepage from "../POM classes/Homepage";
import Productpage from "../POM classes/Productpage";
import Checkoutpage from "../POM classes/Checkoutpage";
 
describe('Start firts automation', () => {
    //Hook methodn
    let testData;
    before(function () {
        // root-level hook runs once before all tests
        cy.fixture('example').then(function (data) {
            // this.data=data
            testData = data;
        })

    })

    it('Hook function', () => {
        const homepage = new Homepage
        const productpage = new Productpage
        const checkoutpage = new Checkoutpage

        cy.visit(Cypress.env('url')+'/angularpractice/')
        homepage.getEditbox().type(testData.name)
        homepage.getgender().select(testData.Gender)
        homepage.getTowaydata().should('have.value', testData.name)
        homepage.getenterpriniorbutton().should('be.enabled')

        homepage.getshoptab().click()

        //how to get multiple data from array
        testData.Productname.forEach(function (element) {
            cy.selectproduct(element)
        })
        productpage.getcheckout().click();
        var sum = 0
        checkoutpage.productprice().each(($e1, index, $list) => {
            // cy.log ($e1.text())
            const amount = $e1.text()
            var spiltamount = amount.split(" ")
            spiltamount = spiltamount[1].trim()
            // cy.log(spiltamount)
            sum = Number(sum) + Number(spiltamount)

        }).then(function () {
            cy.log(sum)
        })
        checkoutpage.totalprice().then(function (element) {
            const amount = element.text()
            var total = amount.split(" ")
            total = total[1].trim()
            expect(Number(total)).to.equal(sum)
        })
        // cy.pause()

        checkoutpage.clickcheckout().click();
        checkoutpage.entertext().type(testData.country)

        // Cypress.config('defaultCommandTimeout',12000)
        checkoutpage.dropdownselect().should('be.visible').click()
        checkoutpage.checkboxcheck().click({ force: true })
        checkoutpage.clickpurchase().click()
        //checkoutpage.showalert().should('have.text','Success! Thank you! Your order will be delivered in next few weeks:-)')
        checkoutpage.showalert().then(function (element) {
            const text = element.text()
            expect(text.includes('Success')).to.be.true
        })






    })
})
