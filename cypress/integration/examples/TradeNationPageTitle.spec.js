
/// <reference types="cypress" />
import TradeNationPage from "../../pageObjects/TradeNationPage";


describe('Trade Nation Page Title Test', function () {

before(function () {
    // runs once before all tests in the block
    //cy.viewport(1280, 800); 
    cy.visit(Cypress.env('url')+'/en-gb/markets/#forex/');
    //cy.wait(2000)
    cy.get('#onetrust-accept-btn-handler').click();
    })




  it('Verify the current page title after clicking on the Trade Nation logo', function () {

   //const tradeNationPage = new TradeNationPage()
   TradeNationPage.getPageNationLogo().click();
   TradeNationPage.getPageTitle().should('includes','Trade Nation UK – Low-Cost Spread Betting' )
  });
});


