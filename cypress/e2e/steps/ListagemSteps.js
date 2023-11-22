/// <reference types="cypress" />
import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'
import ListagemPage from '../pageobjects/ListagemPage'
const listagemPage = new ListagemPage

Given(/^que o site não possui registros$/, () => {
})

When(/^acessar a listagem$/, () => {
  cy.visit('WebTable.html')
})

Then(/^devo visualizar a listagem vazia$/, () => {
  listagemPage.verificaListaVazia();
})

Given(/^que o site possui apenas um registro$/, () => {

})

Then(/^devo visualizar apenas um registro$/, () => {

})
