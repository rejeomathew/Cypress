/// <reference types = "cypress"/>

describe('Get API User Test', () => {
  let accessToken =
    'e592801de14e48c6c4fe14051a96193b1681e189f08c14e003780372412cf86f';

  it('Get Users', () => {
    cy.request({
      method: 'get',
      url: 'https://gorest.co.in/public/v2/users',
      headers: {
        authorization: 'Bearer ' + accessToken,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});
