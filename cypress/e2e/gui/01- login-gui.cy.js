

describe('login', () => {
  it('Login Successfully', () => {
    cy.login()

    cy.get('[data-testid="logout"]').should('be.visible')
  })
})