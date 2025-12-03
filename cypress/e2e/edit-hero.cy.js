import 'cypress-file-upload'

describe('Heroes - Edição', () => {
  
  // Mantemos o login no beforeEach para limpar o código
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.contains('Login').click()
    cy.get('[data-cy="email"]').type('admin@test.com')
    cy.get('[data-cy="password"]').type('test123456')
    cy.get('button[type="submit"]').click()
    cy.contains('Cypress Heroes').should('be.visible')
  })

  it('Deve editar o preço do herói', () => {
    // 1. Clicar no Lápis (Edit) do Chapolin
    cy.contains('Pantera Negra').closest('div') .find('[data-cy="pencil"]').click()
    cy.get('[data-cy="priceInput"]').should('be.visible').clear().type('100')
    cy.contains('button', 'Save').click()
    cy.contains('Pantera Negra').closest('div').should('contain', '100') 
  })
})