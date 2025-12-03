import 'cypress-file-upload'

describe('Heroes - Lista', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.contains('Login').click()
    cy.get('[data-cy="email"]').type('admin@test.com')
    cy.get('[data-cy="password"]').type('test123456')
    cy.get('button[type="submit"]').click()
    cy.contains('Cypress Heroes').should('be.visible')
  })

  it.only('Listar os heróis cadastrados', () => {
    cy.contains('Goku').should('be.visible')
    cy.get('article').should('have.length.at.least', 1)
  })
})