describe('cadastroapi', () => {
  it('Deve cadastrar um usuário com sucesso', () => {
    cy.api({
      method: 'POST',
      url: 'https://serverest.dev/usuarios',
      body: {
        nome: 'Carlos',
        email: 'cassiso918@gmail.com',
        password: '220692',
        administrador: 'true'
      }
    }).then((response) => {
      expect(response.status).to.eq(201);

    });
  });
});
