describe('cadastroapi', () => {
  it('Deve cadastrar um usuário com sucesso', () => {
    const usuario = {
      nome: 'Carlos',
      email: 'cassiso911518@gmail.com',
      password: '220692',
      administrador: 'true'
    };

    cy.cadastroUsuario(usuario).then((response) => {
      expect(response.status).to.eq(201);
    });
  });
});
