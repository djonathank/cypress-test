/// <reference types="cypress" />
// import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'
// import CadastroPage from '../pageobjects/CadastroPage'
// const cadastroPage = new CadastroPage

// import { faker } from '@faker-js/faker/locale/pt_BR';

import { fakerPT_BR as faker } from '@faker-js/faker'

Given(/^clico no link sign up$/, () => {
  cy.contains('.nav-link', 'Sign up').click();
})

When(/^preencho o email de um usuário$/, () => {
  cy.get("input[ng-model*=username]").type(faker.person.fullName());
})

When(/^preencho a senha de um usuário$/, () => {

})

