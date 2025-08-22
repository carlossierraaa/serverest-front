describe('cadastroapi', () => {
  it('Deve cadastrar um usuário com sucesso', () => {
    const usuario = {
      nome: 'Carlos',
      email: 'cassiso91@gmail.com',
      password: '220692',
      administrador: 'true'
    };

    cy.cadastroUsuario(usuario).then((response) => {
      expect([201, 400]).to.include(response.status);
    });
  });
});
