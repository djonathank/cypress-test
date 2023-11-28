/// <reference types="Cypress" />

import LoginElement from '../elements/LoginElement'
const loginElement = new LoginElement

class LoginPage {
    preenchodUsuario(usuario) {
        cy.get(loginElement.inputUsuario()).should('be.be.visible');
        cy.get(loginElement.inputUsuario()).clear().type(usuario);
    }

    preenchodSenha(senha) {
        cy.get(loginElement.inputSenha()).should('be.be.visible');
        cy.get(loginElement.inputSenha()).clear().type(senha);
    }

    clicoAcessar() {
        cy.get(loginElement.buttonAcessar()).should('be.be.visible');
        cy.get(loginElement.buttonAcessar()).click();
    }

    validoLoginSucesso() {
        cy.get(loginElement.divAccount()).should('be.be.visible');
        cy.get(loginElement.divAccount()).should('have.text', 'Teste Novo Teste')
        cy.get(loginElement.divAccount()).invoke('text').then((textoDoElemento) => {
            expect(textoDoElemento).to.eql('Teste Novo Teste');
          });

    }
}

export default LoginPage;
