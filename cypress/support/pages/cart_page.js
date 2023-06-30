///<reference types="cypress" />

export default {
    goToCheckout() {
        // clicar em carrinho
        cy.get('.shopping_cart_link').click()
        //clicar em checkout
        cy.get('#checkout').click()
            
    },
    
    doCheckout() {
        //Realiza passos do checkout
        cy.get('#first-name').type('Aimee')
        cy.get('#last-name').type('Melo')
        cy.get('#postal-code').type('55555')
        cy.get('#continue').click()
            
    },

    finishOrder(valor) { 
        //Verifica se os valores do carrinho estão corretos de acordo com os itens e taxas
        cy.get('.summary_total_label')
            .should('have.text', `Total: ${valor}`)
        cy.get('#finish').click()

    }
}