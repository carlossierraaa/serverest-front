describe('Logout', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.login()
        
    });

    it('should log out successfully', () => {
        cy.logout()
        
        cy.get('.font-robot').should('be.visible');

        });
    });

