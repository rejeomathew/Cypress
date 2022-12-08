/// <reference types = "cypress"/>

it("Google Search", () => {
  cy.visit("https://www.google.com");
  cy.get(".gLFyf").type("Automation{Enter}");
});
