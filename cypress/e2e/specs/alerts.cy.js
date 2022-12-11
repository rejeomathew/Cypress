describe("Alerts to test", () => {
  // Cypress automatically closes the alert but if you need to
  // validate text / have a control over an alert / click cancel we better use cypress events
  it("Js alert which has text and an 'OK' button", () => {
    cy.visit("http://the-internet.herokuapp.com/javascript_alerts");
    cy.get("button[onclick='jsAlert()']").click();
    cy.on("window:alert", (t) => {
      expect(t).to.contains("I am a JS Alert");
    });
    //alert window automatically closed by cypress
    cy.get("#result").should("have.text", "You successfully clicked an alert");
  });

  it("Js alert which has text and an 'OK' and 'Cancel' buttons", () => {
    cy.visit("http://the-internet.herokuapp.com/javascript_alerts");
    cy.get("button[onclick='jsConfirm()']").click();
    cy.on("window:confirm", (t) => {
      expect(t).to.contains("I am a JS Confirm");
    });
    cy.get("#result").should("have.text", "You clicked: Ok");
  });

  it("Js prompt box with a text box for user input along with 'OK'", () => {
    cy.visit("http://the-internet.herokuapp.com/javascript_alerts");
    cy.window().then((window) => {
      cy.stub(window, "prompt").returns("Hello, Input Text");
    });
    cy.get("button[onclick='jsPrompt()']").click();
    cy.get("#result").should("have.text", "You entered: Hello, Input Text");
  });

  it.only("Authenticated alert with two approaches", () => {
    // Approach-1 where params are passed along with the URL
    cy.visit("https://the-internet.herokuapp.com/basic_auth", {
      auth: {
        username: "admin",
        password: "admin",
      },
    });
    cy.get("div.example>p").should("have.contain", "Congratulations");
    // Approach-2 where the username and password are appended along with the URL
    cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth");
    cy.get("div.example>p").should("have.contain", "Congratulations");
  });
});
