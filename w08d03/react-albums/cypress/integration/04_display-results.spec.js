describe('display results tests', () => {

  it('can display results from an api call', () => {
    // visit the app
    cy.visit('/');

    // tell cypress to intercept GET requests and respond with our hard-coded data
    cy.intercept('GET', '**/search*', { fixture: 'itunes' })
      .as('loadResults');

    // type into the input field
    cy.get('.search__form')
      .find('input')
      .type('Daft Punk')
      .should('have.value', 'Daft Punk');

    // see if the spinner is visible
    cy.get('.spinner')
      .should('be.visible');

    // wait... for the GET request results to load
    cy.wait('@loadResults');

    // check to see if a particular album exists on the page
    cy.get('article.album')
      .contains('Discovery')
      .should('be.visible');

    // uncheck the explicit checkbox
    cy.get('#Explicit')
      .uncheck();
    
    // check to see that a particular album does not exist on the page
    cy.get('article.album')
      .should('not.contain', 'Daft Club');
  });

});
