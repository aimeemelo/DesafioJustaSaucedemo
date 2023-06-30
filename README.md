# 🚀Desafio Justa QA - Saucedemo

Project using Cypress to setup a test automation framework with Cucumber, to run E2E test on the SauceDemo website. SauceDemo is a free eCommerce website provided by Saucelabs and is used to practice test automation.

## 📌Lists of test scenarios

Since it is an eCommerce application, the test scenarios will be the following:

* Check Login Functionality;
* Check product can be added to cart;
* Check purchase items;
* Check user can checkout successfuly.

## 🛠️Pre-requirements

It is required to have Node.js and npm installed to run this project.

> I used versions `v18.16.0` and `9.5.1` of Node.js and npm, respectively. I suggest you use the same or later versions.
> Make sure you have Google chrome installed on your computer.
> Open terminal.
> Create a directory and clone this project into the created directory.

## ⚙️Installation

* Run `npm init -y` to install the dependencies;
* Run `npm install cypress` to install cypress and start the project, with this command the package.json file will be created;
* Run  `cypress-cucumber-preprocessor plugin.` and `npm i @bahmutov/cypress-esbuild-preprocessor`. Required plugins to perform cucumber in cypress;
* Configure cypress.config.js file. Configure specPattern with "**/*.feature" and setupNodeEvents added this setting:
```
const { defineConfig } = require("cypress");

const createBundler = require("@bahmutov/cypress-esbuild-preprocessor")
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor")
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild")

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    specPattern: "cypress/e2e/features/*.feature",
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);
      on(     
        "file:preprocessor",
         createBundler({
            plugins: [createEsbuildPlugin(config)],
         })
      );

    return config;
  },
 },
});
```

## 📋Tests

Run `npx cypress open` to open Cypress.
Run `npx cypress run` to run the test in headless mode

## ❤️Support this project

If you want to support this project, leave a ⭐...

___
