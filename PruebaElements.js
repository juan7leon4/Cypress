describe("PruebaElements", () => {
  it("tests PruebaElements", () => {
    cy.viewport(1362, 911);
    cy.visit("https://demoqa.com/");
    cy.get("div.home-body > div > div:nth-of-type(1) div.card-up").click();
    cy.get("#app > div > div > div > div:nth-of-type(1) > div > div > div:nth-of-type(1) li:nth-of-type(1) > span").click();
    cy.get("#userName").click();
    cy.get("#userName").type("juan");
    cy.get("#userEmail").type("juan7leon4@gmail.com");
    cy.get("#userEmail").type("juan7leon44@gmail.com");
    cy.get("#currentAddress").type("hola");
    cy.get("#permanentAddress").type("hola");
    cy.get("#submit").click();
  });
});
