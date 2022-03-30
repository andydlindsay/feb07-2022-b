describe('tests for Cypress', () => {

  it('works?', () => {
    expect(true).equal(true);
  });

  it('can visit the homepage', () => {
    cy.visit('http://localhost:8765');
  });

});
