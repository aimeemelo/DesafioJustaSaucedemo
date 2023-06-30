import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import cart_page from "../pages/cart_page";

When("faço o checkout da compra no valor de {string}", (valor) => {
    cart_page.goToCheckout()
    cart_page.doCheckout()
    cart_page.finishOrder(valor) 
    
});

