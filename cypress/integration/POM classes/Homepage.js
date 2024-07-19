class Homepage {
    getEditbox() {
        return cy.get('input[name="name"]:nth-child(2)')
    }
    getTowaydata() {

        return cy.get('input[name="name"]:nth-child(1)')
    }
    getgender() {

        return cy.get('select')
    }
    getenterpriniorbutton() {
        return cy.get('#inlineRadio1')
    }
    getshoptab(){
        return cy.get(':nth-child(2) > .nav-link')
    }

}
export default Homepage; 