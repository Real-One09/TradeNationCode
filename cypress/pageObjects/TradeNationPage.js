class TradeNationPage{


    // visit() {
    //       cy.visit('https://tradenation.com/en-gb/markets/#forex');
    //     }


  getPageNationLogo() {

    return cy.get('.css-1juv1zg > img');
    
  }


  
  getPageTitle() {
    return cy.title();
  }


  enterEmail() {
   return cy.get('#email');
  }



  enterPassword() {
    return cy.get('#password');
  }


  getEmailError() {
    return cy.get('.MuiCollapse-wrapperInner');
  }


  getPasswordError() {
    return cy.get('body > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(6) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)');
    }








}

export default new TradeNationPage();

//export default TradeNationPage;