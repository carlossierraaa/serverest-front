Cypress.Commands.add('login', (  
email = Cypress.env('email'),
senha = Cypress.env('senha')
) => {

  cy.visit('/')
  cy.get('input[data-testid="email"]').type(email)
  cy.get('input[data-testid="senha"]').type(senha)
  cy.get('[data-testid="entrar"]').click()
})

Cypress.Commands.add('logout', () => {
  cy.get('[data-testid="logout"]').click()
})