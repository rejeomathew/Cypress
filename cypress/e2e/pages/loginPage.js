const txtUserName = "input[placeholder='Username']";
const txtPassword = "input[placeholder='Password']";
const btnSubmit = "button[type = 'submit']";
const lblmsg = '.oxd-topbar-header-breadcrumb > .oxd-text';
const loginPage = {
  setUserName(username) {
    cy.get(txtUserName).type(username);
  },
  setPassword(password) {
    cy.get(txtPassword).type(password);
  },
  clickSubmit() {
    cy.get(btnSubmit).click();
  },
  //   getLabelMessage() {
  //     let message = '';
  //     cy.get(lblmsg).then(($ele) => {
  //       message = $ele.text();
  //     });
  //     return message;
  //   },

  verifyLogin() {
    cy.get(lblmsg).should('have.text', 'Dashboard');
  },
};

export default loginPage;
