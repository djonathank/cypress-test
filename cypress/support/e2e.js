// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

beforeEach(() => {
  cy.log("TESTE INICIADO.")
  cy.log("CENARIO: ", Cypress.currentTest.title)
  // cy.visit('/')
})

afterEach(() => {
 cy.log("TESTE FINALIZADO.")
 cy.log("STATUS: ", Cypress.mocha.getRunner().suite.ctx.currentTest.state)
})
