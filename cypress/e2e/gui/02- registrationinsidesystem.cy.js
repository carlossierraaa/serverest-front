describe(
    'User Registration',
    { env: { snapshotOnly: true } },
    () => {
        beforeEach(() => {
            // Intercept login before executing it
            cy.intercept('POST', '/login').as('waitForLogin');
            cy.login();
            cy.wait('@waitForLogin').its('response.statusCode').should('eq', 200);
        });

        it('User Registration', () => {
            // Intercept registration request

            cy.visit('/admin/cadastrarusuarios');
            cy.get('[data-testid="nome"]').type('Test');
            cy.get('[data-testid="email"]').type('tes114t@cypress.io');
            cy.get('[data-testid="password"]').type('1234561');
            cy.get('[data-testid="cadastrarUsuario"]').click();

        });
    }
);
