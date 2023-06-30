///<reference types="cypress" />

export default {
    doLogin(user, password) {
        //Deve abrir a página com sucesso 
        cy.visit('https://saucedemo.com/')
        // Verifica se o título da página contém o texto desejado
        cy.title().should("include", "Swag Labs");
        //Deve realizar login com sucesso  
        cy.get('#user-name').type(user)
        cy.get('#password').type(password)
        cy.get('#login-button').click()
        //Verifica se o elemento com a classe ".title" contém o texto "Products"
        cy.get(".title").should("have.text", "Products");
        
    },
    
    checkErrorMessage(message) {
        //Verifica se uma mensagem de erro está sendo exibida durante o processo de login
        cy.get('.invalid_input').should('have.text', message);
    }
}