/// <reference types="cypress" />

import {Given} from 'cypress-cucumber-preprocessor/steps'

Given(/^que acesso o site$/, () => {
  cy.visit('Register.html')
})