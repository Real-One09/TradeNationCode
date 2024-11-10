
/// <reference types="cypress" />
import TradeNationPage from "../../pageObjects/TradeNationPage";


describe('Trade Nation Page Title Test', function () {

before(function () {
    
    cy.visit(Cypress.env('url')+'/en-gb/markets/#forex/');
    cy.get('#onetrust-accept-btn-handler').click();
    })




  it('Verify the current page title after clicking on the Trade Nation logo', function () {

   
   TradeNationPage.getPageNationLogo().click({timeout:20000});
   TradeNationPage.getPageTitle().should('includes','Trade Nation UK' )
  });
});


