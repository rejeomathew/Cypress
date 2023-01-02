const loginPage = require('../pages/loginPage');

describe('pom', () => {
  //Approach without POM
  it('LoginTest', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/');
    cy.get("input[placeholder='Username']").type('Admin');
    cy.get("input[placeholder='Password']").type('admin123');
    cy.get("button[type='submit']").click();
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should(
      'have.text',
      'Dashboard'
    );
  });

  //using pom
  it.only('LoginTest', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/');
    loginPage.setUserName('Admin');
    loginPage.setPassword('admin123');
    loginPage.clickSubmit();
    loginPage.verifyLogin();
  });
});
