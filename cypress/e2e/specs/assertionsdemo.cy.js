describe("empty spec", () => {
  it("Assertions Demo", () => {
    cy.visit("https://example.cypress.io");
    cy.contains("get").click();

    cy.get("#query-btn")
      .should("contain", "Button")
      .and("have.class", "query-btn")
      .and("be.visible")
      .and("be.enabled");

    expect(true).to.be.true;
  });
});
