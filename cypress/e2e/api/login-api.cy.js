describe("Login API", () => {
  it("should log in with valid credentials", () => {
    cy.request({
      method: "POST",
      url: "https://serverest.dev/login", // endpoint relativo ao baseUrl
      body: {
        email: Cypress.env("email"),
        password: Cypress.env("senha"),
      },
      
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("authorization");
      // Captura o token do campo 'authorization' e armazena no env
      Cypress.env('TOKEN', response.body.authorization);
    });
  });


});