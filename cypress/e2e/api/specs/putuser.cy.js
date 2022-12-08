/// <reference types = "cypress"/>
const payloadJSON = require('../../../fixtures/createuser.json');

describe('Update username using post API User ', () => {
  let accessToken =
    'e592801de14e48c6c4fe14051a96193b1681e189f08c14e003780372412cf86f';
  const randomStr = Math.random().toString(36).substr(2, 5);
  const emailId = `email_${randomStr}@gmail.com`;
  it('Put Users', () => {
    cy.request({
      method: 'POST',
      url: 'https://gorest.co.in/public/v2/users',
      headers: {
        authorization: 'Bearer ' + accessToken,
      },
      body: {
        name: payloadJSON.name,
        gender: payloadJSON.gender,
        email: emailId,
        status: payloadJSON.status,
      },
    }).then((response) => {
      const userId = response.body.id;
      cy.log('UserID is ' + userId);
      cy.request({
        method: 'PUT',
        url: 'https://gorest.co.in/public/v2/users/' + userId,
        headers: {
          authorization: 'Bearer ' + accessToken,
        },
        body: {
          name: 'Joe Williams',
          status: 'inactive',
        },
      }).then((response) => {
        const userId = response.body.id;
        cy.log('UserID is ' + userId);
        cy.request({
          method: 'GET',
          url: 'https://gorest.co.in/public/v2/users/' + userId,
          headers: {
            authorization: 'Bearer ' + accessToken,
          },
        }).then((response) => {
          expect(response.body.name).eq('Joe Williams');
          expect(response.body.status).eq('inactive');
          expect(response.body).has.property('gender', payloadJSON.gender);
          expect(response.body).has.property('email', emailId);
        });
      });
    });
  });
});
