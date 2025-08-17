
Cypress.Commands.add('login_api_global', (usuario) => {
    cy.request({
        method: 'POST',
        url: 'https://serverest.dev/login',
        body: usuario,
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('authorization');
        Cypress.env('authorization', response.body.authorization);
        return response.body;
    });
});

Cypress.Commands.add('login_api', (usuario) => {
    cy.request({
        method: 'POST',
        url: 'https://serverest.dev/login',
        body: usuario,
        headers: {
            'Content-Type': 'application/json',
            'Content-Type: application/json': 'application/json'    
        }
    }).then((response) => {
        // Validação básica para garantir que o comando foi bem-sucedido
        expect(response.status).to.eq(200);
        return response.body;
    });
});


Cypress.Commands.add('cadastroUsuario', (usuario) => {
    cy.request({
        method: 'POST',
        url: 'https://serverest.dev/usuarios',
        body: usuario,
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response) => {
        // Validação básica para garantir que o comando foi bem-sucedido
        expect(response.status).to.eq(201);
        return response;
    });
});
