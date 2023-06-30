///<reference types="cypress" />

export default {
    checkOrderSuccess() {
        //Valida se a compra foi realizada com sucesso. 
        cy.get('.complete-header').should('have.text', 'Thank you for your order!')
    }
}      