describe('login', () => {
  
  
  
  it('passes', () => {
    cy.visit('/')

    const email = Cypress.env('email')
    const senha = Cypress.env('senha')

    cy.login(email, senha)

   cy.get('h1,[data-testid="logout"]').should('be.visible')
  })
})