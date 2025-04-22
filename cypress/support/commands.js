Cypress.Commands.add('captureAndAttachScreenshot', (name) => {
    cy.screenshot(name).then((screenshotData) => {
      cy.allure().attachment(name, screenshotData, 'image/png');
    });
});