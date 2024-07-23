import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";


import Homepage from "../../../POM classes/Homepage";
import Productpage from "../../../POM classes/Productpage";
import Checkoutpage from "../../../POM classes/Checkoutpage";

const homepage = new Homepage();
const productpage = new Productpage();
const checkoutpage = new Checkoutpage();
let sum = 0;  // Initialize sum variable
let testData; 
before(() => {
    cy.fixture('example').then((data) => {
      testData = data;
    });
  });

// Given I open Ecommerce page
Given('I open Ecommerce page', () => {
  cy.visit(Cypress.env('url') + '/angularpractice/');
});

// When I add items to cart
When('I add items to cart', () => {
  homepage.getshoptab().click();
  testData.Productname.forEach((element) => {
    cy.selectproduct(element);
  });
  productpage.getcheckout().click();
});

// And validate the total prices
Then('I validate the total prices', () => {
  checkoutpage.productprice().each(($e1, index, $list) => {
    const amount = $e1.text();
    var splitamount = amount.split(" ");
    splitamount = splitamount[1].trim();
    sum = Number(sum) + Number(splitamount);
  }).then(() => {
    cy.log(sum);
  });

  checkoutpage.totalprice().then((element) => {
    const amount = element.text();
    var total = amount.split(" ");
    total = total[1].trim();
    expect(Number(total)).to.equal(sum);
  });
});

// Then select the country and verify thankyou

Then('I select the country and verify thank you message', () => {
    checkoutpage.clickcheckout().click();
    checkoutpage.entertext().type(testData.country);
    checkoutpage.dropdownselect().should('be.visible').click();
    checkoutpage.checkboxcheck().click({ force: true });
    checkoutpage.clickpurchase().click();
    checkoutpage.showalert().then((element) => {
      const text = element.text();
      expect(text.includes('Success')).to.be.true;
    });
  });

// When I fill the form details
When('I fill the form details', () => {
  homepage.getEditbox().type(testData.name);
  homepage.getgender().select(testData.Gender);
});

// Then validate the form behaviour
Then('I validate the form behaviour', () => {
  homepage.getTowaydata().should('have.value', testData.name);
  homepage.getenterpriniorbutton().should('be.enabled');
});

// And select the shop page
Then('I select the shop page', () => {
  homepage.getshoptab().click();
});



