describe('cadastroapi', () => {
  it('Deve cadastrar um usuário com sucesso', () => {
    const usuario = {
      nome: 'Carlos',
      email: 'cassiso91@gmail.com',
      password: '220692',
      administrador: 'true'
    };

    cy.cadastroUsuario(usuario).then((response) => {
      if (response.status === 201) {
        expect(response.status).to.eq(201);
      } else {
        expect(false).to.be.true;
      }
    });
  });
});
