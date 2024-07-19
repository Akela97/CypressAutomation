/// <reference types="Cypress" />

describe ('My first test suite',function()

  {
  it ('first test Test case',function(){

 cy.visit ('https://rahulshettyacademy.com/seleniumPractise/#/');
 //input keyword
 cy.get('.search-keyword').type('ca');
 //condition wait
 cy.wait(2000);
 cy.get('.product:visible').should('have.length',4);
 //parent child chaining
 cy.wait(2000);
 //Alias command use
 cy.get('.products').as('productlocatar')
 
 cy.get('@productlocatar').find('.product').should('have.length',4)
 cy.get('@productlocatar').find('.product').eq(2).contains('ADD TO CART').click();

 cy.get('@productlocatar').find('.product').each(($el, index, $list) =>  {
const textveg=$el.find('h4.product-name').text();
if(textveg.includes('Cashews')){

 cy.wrap ($el).contains('ADD TO CART').click();
}
});
//Assert if logo text is correctly displayed
cy.get('.brand').should('have.text','GREENKART');

//this is to print log 
cy.get('.brand').then(function(logoelement)
{
cy.log(logoelement.text())

})



});
});



  
