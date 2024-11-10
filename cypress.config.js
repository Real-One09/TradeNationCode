const { defineConfig } = require("cypress");

module.exports = defineConfig({
   
  defaultCommandTimeout: 7000,

  reporter: 'cypress-mochawesome-reporter',

  env: {

   url : "https://tradenation.com",
    
  },

  
    projectId: "hf8zaq",
    // ...rest of the Cypress project config
 
  
  e2e: {
    setupNodeEvents(on, config) {

      require('cypress-mochawesome-reporter/plugin')(on)
      
    },

    

    specPattern: 'cypress/integration/examples/*.js'
    
      
  },

  
  viewportHeight: 800,
  viewportWidth: 1200,



});
