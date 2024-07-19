class Checkoutpage {

    productprice() {
        return cy.get('tr td:nth-child(4) strong')
    }
    totalprice(){
        return cy.get('.text-right > h3')
    }

    clickcheckout() {
        return cy.get('.btn-success')
    }
    entertext() {
        return cy.get('#country')
    }
    dropdownselect() {
        return cy.get('.suggestions > ul > li > a', { timeout: 12000 })
    }
    checkboxcheck() {
        return cy.get('#checkbox2')
    }
    clickpurchase() {
        return cy.get('.btn-success')
    }
    showalert() {
        return cy.get('.alert')
    }






}
export default Checkoutpage;