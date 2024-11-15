import TradeNationPage from '../../pageObjects/TradeNationPage'

describe('Invalid Signup', function () {

    beforeEach(function () {

        cy.fixture('example').then(function(data){
            this.data=data
        })
       cy.visit(Cypress.env('url')+'/signup/welcome/');
       cy.get('#onetrust-accept-btn-handler').click();
       
       })
    
    
         
      it('should show an error for an invalid email address', function () {
     
       TradeNationPage.enterEmail().type(this.data.InValidemail);
       TradeNationPage.getEmailError().should('be.visible').and('contain', 'Wrong email format');

      })
       

       it('should show password requirement errors for an invalid password', function() {
        TradeNationPage.enterEmail().type(this.data.Validemail)
        TradeNationPage.enterPassword().type(this.data.InvalidPassword);
        TradeNationPage.getPasswordError().should('be.visible').and('contain','Must have at least 8 characters');


       })
        
   
       
  
})

