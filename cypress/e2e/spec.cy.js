/* eslint-disable no-undef */
describe('Townsq front-page tests', () => {
  it('should correctly visit and render the main page', () => {
    // cy.visit('https://www.uol.com.br/')
    cy.visit('https://townsq.com.br/')
  });

  it('should click on `Conheça o App`', () => {
    // cy.visit('https://www.uol.com.br/')
    cy.xpath('//*[@id="post-5017"]/div/div/div/div/section[1]/div/div/div[1]/div/div/div[3]/div/div/a/span/span').click();
  });

  it('should click on `Materiais para Download` and redirect to a page with its contents', () => {
    cy.xpath('//*[@id="page"]/div[2]/div/section[1]/div/div/div[2]/div/div/div[2]/div/div/p/a[3]').click();
  })

});