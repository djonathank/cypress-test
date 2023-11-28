/// <reference types="cypress" />
import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'
import LoginPage from '../pageobjects/LoginPage'
const loginPage = new LoginPage

Given('que o estou na tela de login do site', () => {
  cy.visit('/index.php?controller=authentication&back=my-account')
})

When('preencher dados de login', (dataTable) => {
  const data = dataTable.rowsHash(); 
  loginPage.preenchodUsuario(data.usuario);
  loginPage.preenchodSenha(data.senha);
  loginPage.clicoAcessar();
});

Then('verifico que login foi realizado com sucesso', () => {
  loginPage.validoLoginSucesso();
})

And('verifico que mensagem de login inválido é apresentada', (map) => {
  const additionalInfo = map.rowsHash();
  cy.log(map.mensagem)
  cy.log(map)
  cy.log(additionalInfo)
});

And('verifico que mensagem de login inválido é {string}', (mensagem) => {
  cy.log(mensagem)
});
