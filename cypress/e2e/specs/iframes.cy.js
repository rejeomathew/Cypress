require("cypress-iframe");
describe("Handle Iframes with different approaches", () => {
  it("Approach 1: Go the frame and wrap the iframe", () => {
    cy.visit("http://the-internet.herokuapp.com/iframe");
    const iframe = cy
      .get("#mce_0_ifr")
      .its("0.contentDocument.body")
      .should("be.visible")
      .then(cy.wrap);
    iframe.clear().type("Welcome {cmd+a}");
    // cy.get("[aria-label='Bold']").click();
  });

  it("Approach 2: By using cypress-iframe plugin", () => {
    cy.visit("http://the-internet.herokuapp.com/iframe");
    cy.frameLoaded("#mce_0_ifr"); // Load the frame
    cy.iframe("#mce_0_ifr").clear().type("Welcome"); //Interact with the frame
  });
});
