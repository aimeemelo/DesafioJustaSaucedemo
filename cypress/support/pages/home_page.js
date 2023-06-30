///<reference types="cypress" />

export default {
    addToCart(item) {
        //Adiciona itens ao carrinho de compras
        if(item == 'camisa vermelha') {
            cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click()
        }

        if(item == 'bolsa') {
            cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        }

        if(item == 'camisa preta') {
            cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
        }

        if(item == 'roupa de bebe') {
            cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click()
        }

        if(item == 'lanterna') {
            cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
        
        }
    },
    
    checkCartQuantity() {
        // Verifica se o carrinho foi atualizado com um item ou mais
            cy.get('span.shopping_cart_badge').then($badge => {
            const itemCount = parseInt($badge.text());
            if (itemCount === 1) {
            // Se o carrinho tiver 1 item, execute esta ação
            cy.get('span.shopping_cart_badge').should('have.text', '1');
          } else if (itemCount === 2) {
            // Se o carrinho tiver 2 itens, execute esta ação
            cy.get('span.shopping_cart_badge').should('have.text', '2');
          }
      });
    },
            
    orderLessToMore() {
        //Ordena os produtos do valor mais baixo para o mais caro
        cy.get('.product_sort_container').select('Price (low to high)')
        // Verifica se os itens estão ordenados corretamente
        cy.get('.inventory_item_price')
            .then($prices => {
                const prices = $prices.map((index, element) => parseFloat(element.innerText.replace('$', ''))).get();
                const sortedPrices = [...prices].sort((a, b) => a - b);
                expect(prices).to.deep.equal(sortedPrices);
            });
        }
    }
