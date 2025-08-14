describe(
    'Cadastro de Usuário',
    { env: { snapshotOnly: true } },
    () => {
        beforeEach(() => {
            // Intercepta o login antes de executá-lo
            cy.intercept('POST', '/login').as('esperarLogin');
            cy.login();
            cy.wait('@esperarLogin').its('response.statusCode').should('eq', 200);
        });

        it('Cadastro de Usuário', () => {
            // Intercepta a requisição de cadastro

            cy.visit('/admin/cadastrarusuarios');
            cy.get('[data-testid="nome"]').type('Teste');
            cy.get('[data-testid="email"]').type('tes11t@cypress.io');
            cy.get('[data-testid="password"]').type('1234561');
            cy.get('[data-testid="cadastrarUsuario"]').click();

        });
    }
);
