import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";

import login_page from "../pages/login_page";

Given("que estou logado no sistema", () => {
    login_page.doLogin('standard_user', "secret_sauce")
 
});
