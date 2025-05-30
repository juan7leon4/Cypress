describe("PruebaInteractions", () => {
  it("tests PruebaInteractions", () => {
    cy.viewport(1362, 911);
    cy.visit("https://demoqa.com/");
    cy.get("div:nth-of-type(5) h5").click();
    cy.get("div:nth-of-type(4) div.header-text").click();
    cy.get("div:nth-of-type(5) > span > div").click();
    cy.get("div:nth-of-type(5) li:nth-of-type(3) > span").click();
    cy.get("#resizableBoxWithRestriction").click();
    cy.get("div.constraint-area span").click();
    cy.get("div:nth-of-type(5) li:nth-of-type(5)").click();
    cy.get("#draggableExample-tab-axisRestriction").click();
    cy.get("#draggableExample-tab-containerRestriction").click();
    cy.get("#draggableExample-tab-cursorStyle").click();
    cy.get("#cursorTopLeft").click();
    cy.get("#cursorCenter").dblclick();
    cy.get("#draggableExample-tabpane-cursorStyle > div").click();
    cy.get("#draggableExample-tabpane-cursorStyle > div").click();
    cy.get("div:nth-of-type(5) li:nth-of-type(1)").click();
    cy.get("#demo-tabpane-list > div").click();
    cy.get("#demo-tabpane-list > div").click();
    cy.get("#demo-tabpane-list > div").click();
    cy.get("#demo-tabpane-list > div").click();
    cy.get("#demo-tabpane-list > div").click();
    cy.get("#demo-tabpane-list > div").click();
    cy.get("#demo-tabpane-list > div").click();
    cy.get("#demo-tab-grid").click();
    cy.get("#demo-tabpane-grid > div > div").click();
    cy.get("#demo-tabpane-grid > div > div").click();
    cy.get("#demo-tabpane-grid > div > div").click();
  });
});
