import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import home_page from "../pages/home_page";

Given("adiciono {string} no carrinho", (item) => {
    home_page.addToCart(item)
    home_page.checkCartQuantity()
});

Given("ordeno do mais barato para mais caro", () => {
    home_page.orderLessToMore()
});