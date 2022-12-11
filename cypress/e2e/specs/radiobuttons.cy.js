describe("Check UI Elements", () => {
  it("Checking Radio Buttons", () => {
    cy.visit("https://itera-qa.azurewebsites.net/home/automation");
    //visibility of radio buttons
    cy.get("input#male").should("be.visible");
    cy.get("input#female").should("be.visible");
    //selecting radio buttons
    cy.get("input#male").check().should("be.checked");
  });

  it("Checking Check boxes", () => {
    cy.visit("https://itera-qa.azurewebsites.net/home/automation");
    //Visibility of the element
    cy.get("input#monday").should("be.visible");
    //Selecting single check box - monday
    cy.get("input#monday").check().should("be.checked");
    //Unselecting checkbox
    cy.get("input#monday").uncheck().should("not.be.checked");
    //Selecting all the checkboxes
    cy.get("input.form-check-input[type='checkbox']")
      .check()
      .should("be.checked");
    //Selecting first checkbox
    cy.get("input.form-check-input[type='checkbox']").first().check();
  });
});
