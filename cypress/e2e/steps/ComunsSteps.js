// steps comuns a mais de uma feature

Given(/^que acesso o site$/, () => {
  // cy.intercept()
  //   // routes
  // cy.route('POST', '**/api/1/databases/userdetails/collections/newtable?**')
  //   .as('postNewTable')

  // cy.route('POST', '**/api/1/databases/userdetails/collections/usertable?**')
  //   .as('postUserTable')

  // cy.route('GET', '**/api/1/databases/userdetails/collections/newtable?**')
  //   .as('getNewTable')
  cy.visit('Register.html')
})