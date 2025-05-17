describe("PruebaAlerts", () => {
  it("tests PruebaAlerts", () => {
    cy.viewport(1362, 911);
    cy.visit("https://demoqa.com/");
    cy.get("div:nth-of-type(3) div.card-up").click();
    cy.get("div:nth-of-type(3) li:nth-of-type(1)").click();
    cy.get("#tabButton").click();
    cy.get("#windowButton").click();
    cy.get("#messageWindowButton").click();
    cy.get("div:nth-of-type(3) li:nth-of-type(3)").click();
    cy.get("#sampleHeading").click();
    cy.get("div:nth-of-type(3) li:nth-of-type(5) > span").click();
  });
});
