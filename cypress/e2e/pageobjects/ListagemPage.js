/// <reference types="Cypress" />

import ListagemElement from '../elements/ListagemElement'
const listagemElement = new ListagemElement

class ListagemPage {
    verificaListaVazia() {
        cy.get(listagemElement.divLinha()).should('have.length', 1)
    }
}

export default ListagemPage;
