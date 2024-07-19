/// <reference types="Cypress" />

describe('Verify add to cart',function()
{
it('add vegitable',function()
{
    //URL launch
cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
   //enter text
cy.get('.search-keyword').type('ca');
//wait function
cy.wait(2000);
//Using alias
cy.get('.products').as('productlocatar');
//Parent child method
cy.get('@productlocatar').find('.product').each(($el, index, $list) =>
{

    const textveg=$el.find('h4.product-name').text()
   if(textveg.includes('Cashews')) {

    cy.wrap ($el).contains('ADD TO CART').click();
   }
})
cy.get('.cart-icon > img').click();
cy.contains('PROCEED TO CHECKOUT').click();
cy.contains('Place Order').click()











})

})