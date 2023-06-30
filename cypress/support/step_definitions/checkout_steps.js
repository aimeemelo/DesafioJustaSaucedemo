import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import checkout_page from "../pages/checkout_page";

Then("compro o item escolhido com sucesso", () => {
        checkout_page.checkOrderSuccess()
});

Then("compro os dois itens com sucesso", () => {
        checkout_page.checkOrderSuccess()
});
