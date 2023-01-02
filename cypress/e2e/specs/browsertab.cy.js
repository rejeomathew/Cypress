describe('Handle browser child tabs with different approaches', () => {
  it.only('Approach 1: Remove the target attribute from the element and click the link', () => {
    cy.visit('https://the-internet.herokuapp.com/windows'); // parent tab
    cy.get('.example >a').invoke('removeAttr', 'target').click(); // clicking on link
    // This opens the link on the same tab
    cy.url().should(
      'include',
      'https://the-internet.herokuapp.com/windows/new'
    );
    // Navigate back to the parent tab
    cy.go('back');
  });

  it('Approach 2 : Fetch the href attribute from the element and visit the url', () => {
    cy.visit('https://the-internet.herokuapp.com/windows'); // parent tab
    cy.get('.example >a').then((e) => {
      let url = e.prop('href');
      cy.visit(url);
    });
    // This approach works only when the link in new tab is of same domain
    // For Ex: Here the domain is https://the-internet.herokuapp.com/windows and the new link is /new, hence it works
    cy.url().should(
      'include',
      'https://the-internet.herokuapp.com/windows/new'
    );
    // back to parent tab
    cy.go('back');
  });
});
