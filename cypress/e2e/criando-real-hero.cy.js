import 'cypress-file-upload'

describe('Heroes', () => {
  it.only('Criando Real Hero', () => {
    cy.visit('http://localhost:3000')
    cy.contains('Login').click()
    cy.get('[data-cy="email"]').type('admin@test.com')
    cy.get('[data-cy="password"]').type('test123456')
    cy.get('button[type="submit"]').click()
    cy.contains('Cypress Heroes').should('be.visible')
    cy.contains('Create New').click()
    cy.get('[data-cy="nameInput"]').type('Naruto')
    cy.get('[data-cy="priceInput"]').type('100')
    cy.get('[data-cy="fansInput"]').type('90')
    cy.get('[data-cy="savesInput"]').type('25')
    cy.get('[data-cy="powersSelect"]').select(['Flying', 'Super Strength', 'Super Speed'])
    cy.get('input[type=file]').attachFile('naruto.png')
    cy.contains('button', 'Save').click()
    cy.contains('Naruto').should('be.visible')
    cy.location('pathname').should('eq', '/heroes')
  })
})