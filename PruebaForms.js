describe("PruebaForms", () => {
  it("tests PruebaForms", () => {
    cy.viewport(1362, 911);
    cy.visit("https://demoqa.com/");
    cy.get("div.home-body > div > div:nth-of-type(2) path").click();
    cy.get("div.col-md-6 > div:nth-of-type(2)").click();
    cy.get("div.col-md-6 > div:nth-of-type(2)").click();
    cy.get("div.col-md-6 > div:nth-of-type(2)").click();
    cy.get("div.col-md-6").click();
    cy.get("div.col-md-6").click();
    cy.get("div.col-md-6 > div:nth-of-type(2)").click();
    cy.get("div.col-md-6").click();
    cy.get("div.col-md-6").click();
    cy.get("div > div:nth-of-type(2) > div span").click();
    cy.get("#firstName").click();
    cy.get("#firstName").type("Juan David");
    cy.get("#lastName").type("Angel");
    cy.get("#userNumber").type("3138050461");
    cy.get("#currentAddress").type("cr 8c N81-51 sur");
    cy.get("#react-select-3-input").type("Soltero(a)");
    cy.get("#userEmail").click();
    cy.get("#genterWrapper > div.col-md-9 > div:nth-of-type(2)").click();
    cy.get("#hobbiesWrapper > div.col-md-9 > div:nth-of-type(1)").click();
    cy.get("#hobbiesWrapper > div.col-md-9 > div:nth-of-type(1) > label").click();
    cy.get("#uploadPicture").click();
    cy.get("#submit").click();
  });
});
