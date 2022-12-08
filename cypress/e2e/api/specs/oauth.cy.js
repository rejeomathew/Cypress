///<reference types = 'Cypress'/>

describe('OAUTH Verification Test', () => {
  let accessToken = '';
  let userid = '';

  beforeEach('Token Generation', () => {
    cy.request({
      method: 'POST',
      url: 'http://coop.apps.symfonycasts.com/token',
      form: true,
      body: {
        client_id: 'CypressDemo123',
        client_secret: 'd1b4793fce91ff918638d6f36c0d8e18',
        grant_type: 'client_credentials',
      },
    }).then((response) => {
      accessToken = response.body.access_token;
      cy.log('Access Token is ' + accessToken);
      cy.request({
        method: 'GET',
        url: 'http://coop.apps.symfonycasts.com/api/me',
        headers: {
          authorization: 'Bearer ' + accessToken,
        },
      }).then((response) => {
        userid = response.body.id;
      });
    });
  });

  it('Unlock Barn Test', () => {
    cy.request({
      method: 'POST',
      url: 'http://coop.apps.symfonycasts.com/api/' + userid + '/barn-unlock',
      headers: {
        authorization: 'Bearer ' + accessToken,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it('Collect Eggs', () => {
    cy.request({
      method: 'POST',
      url: 'http://coop.apps.symfonycasts.com/api/' + userid + '/eggs-collect',
      headers: {
        authorization: 'Bearer ' + accessToken,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it('Collected Eggs Count Today', () => {
    cy.request({
      method: 'POST',
      url: 'http://coop.apps.symfonycasts.com/api/' + userid + '/eggs-count',
      headers: {
        authorization: 'Bearer ' + accessToken,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});
