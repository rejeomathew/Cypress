describe('Test Suite', () => {
  it.skip('Google Search', () => {
    cy.visit('https://www.google.com');
    cy.get('.gLFyf').type('Automation{Enter}');
  });

  it('Script 2', () => {
    cy.log('Script 2');
  });

  before('Script 2', () => {
    cy.log('Before Execeuted');
  });

  beforeEach('Script 2', () => {
    cy.log('BeforeEach Executed');
  });

  afterEach('Script 2', () => {
    cy.log('After Each');
  });

  after('Script 2', () => {
    cy.log('After executed');
  });
});
