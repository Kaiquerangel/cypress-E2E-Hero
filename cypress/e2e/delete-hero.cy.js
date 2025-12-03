import 'cypress-file-upload'

describe('Heroes - Delete', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.contains('Login').click()
    cy.get('[data-cy="email"]').type('admin@test.com')
    cy.get('[data-cy="password"]').type('test123456')
    cy.get('button[type="submit"]').click()
    cy.contains('Cypress Heroes').should('be.visible')
  })

  it('Excluir o herói', () => {

    cy.contains('Pante Negra').should('be.visible')
    cy.contains('Pantera Negra').closest('.card').find('[data-cy="trash"]').click()
    cy.contains('button', 'Yes').click() 
    cy.contains('Pantera Negra').should('not.exist')
  })
})