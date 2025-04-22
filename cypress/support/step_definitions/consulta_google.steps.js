import {
    Given,
    Then,
    When
} from "@badeball/cypress-cucumber-preprocessor";
import { dictionary } from "../selectors/index";

// Paso Dado
Given('que estoy en la pagina {string}', (url) => {
    cy.visit(url);
});

Then('ingreso {string} en el campo {string} de la pantalla {string}', function (cadena, campo, pantalla) {
    cy.get(dictionary[pantalla][campo]).type(cadena);
});

Then('doy click en el boton {string} de la pantalla {string}', function (boton, pantalla) {
    cy.get(dictionary[pantalla][boton]).click();
});

Then('doy click en el primer producto {string} de la pantalla {string}', function (boton, pantalla) {
    cy.get(dictionary[pantalla][boton]).eq(0).click();
});

Then('doy click en el tercer producto {string} de la pantalla {string}', function (boton, pantalla) {
    cy.get(dictionary[pantalla][boton]).eq(2).click();
});

Then('valido que los productos sean los seleccionados', function () {
    cy.get(dictionary['Productos']['producto']).eq(0).should('have.text', 'Sauce Labs Backpack');
    cy.get(dictionary['Productos']['producto']).eq(1).should('have.text', 'Sauce Labs Bolt T-Shirt');
    
});

