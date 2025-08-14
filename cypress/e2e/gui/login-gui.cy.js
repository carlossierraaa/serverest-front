

describe('login', () => {
  
  
  
  it('passes', () => {
    



    cy.login()

   cy.get('[data-testid="logout"]').should('be.visible')
  })
})