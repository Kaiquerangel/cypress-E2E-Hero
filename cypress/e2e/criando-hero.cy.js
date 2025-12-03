import 'cypress-file-upload'

describe('Heroes - Criação', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.contains('Login').click() 
    
    cy.get('[data-cy="email"]').type('admin@test.com')
    cy.get('[data-cy="password"]').type('test123456')
    cy.get('button[type="submit"]').click()
    cy.contains('Cypress Heroes').should('be.visible')
  })

  it('Criar um novo herói com sucesso', () => {
    cy.contains('Create New').click()
    cy.get('[data-cy="nameInput"]').type('Pantera Negra')
    cy.get('[data-cy="priceInput"]').type('80')
    cy.get('[data-cy="fansInput"]').type('90')
    cy.get('[data-cy="savesInput"]').type('17') 
    cy.get('[data-cy="powersSelect"]').select('Super Strength') 
    cy.get('input[type="file"]').attachFile('panteranegra.jpg')
    cy.contains('button', 'Save').click()
    cy.contains('Pantera Negra').should('be.visible')
    cy.contains('70').should('be.visible')
  })
})