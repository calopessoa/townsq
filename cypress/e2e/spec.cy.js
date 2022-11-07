/* eslint-disable no-undef */
describe('Townsq front-page tests', () => {
  it('should correctly visit and render the main page', () => {
    cy.visit('https://townsq.com.br/')
  });

  it('should click on `Conheça o App`', () => {
    cy.xpath('//*[@id="post-5017"]/div/div/div/div/section[1]/div/div/div[1]/div/div/div[3]/div/div/a/span/span').click();
  });

  // it('should click on `Materiais para Download` and redirect to a page with its contents', () => {
  //   cy.xpath('//*[@id="page"]/div[2]/div/section[1]/div/div/div[2]/div/div/div[2]/div/div/p/a[3]').click();
  // });
});

describe('Test functionality to request a budget', () => {
  it('should visit /gestao-condominios', () => {
    cy.visit('https://townsq.com.br/gestao-condominios/')
  });

  it('should click on `Ver Planos`', () => {
    cy.xpath('//*[@id="post-1912"]/div/div/div/div/section[12]/div/div/div/div/div/div/div/div/a/span/span').click();
  });

  it('should click on `Saiba Mais` or `Fale com um Consultor`', () => {
    cy.xpath('//*[@id="post-2282"]/div/div/div/div/section[3]/div/div/div[1]/div/div/section/div/div/div/div/div/div/div/div/a/span/span').click();
  });

  it('tests if it`s possible to fill the budget-form', () => {
    cy.xpath('//*[@id="rd-text_field-qxZCGuVDJeZc1Z50Ql9sMA"]').type('Cliente T ownsq');
    cy.xpath('//*[@id="rd-select_field-AnRsrlMh_CKJccK-DJ9Izw"]').select('Quero ser síndico');
    cy.xpath('//*[@id="rd-email_field-Gyqg33gCvIhRtkCRYwxdSw"]').type('clientetown@email.com');
    cy.xpath('//*[@id="rd-phone_field-Os3LgjND9xnwPJiBCBSdvQ"]').type('83988880000');
    cy.xpath('//*[@id="rd-select_field-oe7nFgKtOERC5WT1p88ldA"]').select('De 50 a 100 unidades');
    cy.xpath('//*[@id="rd-select_field-QNTPdeUA8Ra4XtuGeGBM_Q"]').select('Nenhum');
    cy.xpath('//*[@id="rd-select_field-sYDHH89deG7MhjstflkKNw"]').select('TownSq Essencial');
  });

  it('clicks on `Quero Conhecer` to send the forms` info', () => {
    cy.xpath('//*[@id="rd-button-kmc4u0hv"]').should('not.be.disabled').click();
  });
});