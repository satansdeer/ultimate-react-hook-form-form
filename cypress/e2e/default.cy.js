describe('ultimate form', () => {
  it('submits successfully', () => {
    cy.visit('/')

    cy.get('h2').should('contain', 'Step 1')
    cy.get('#firstName').type('Maria')
    cy.get('#lastName').type('Sanchez')
    cy.get('button').click()

    cy.url().should('contain', '/step2')
    cy.get('h2').should('contain', 'Step 2')
    cy.get('#email').type('maria@example.com')
    cy.get('input[name=hasPhone]').check()
    cy.get('#phoneNumber').type('555-555-5555')
    cy.get('button').click()

    cy.url().should('contain', '/step3')
    cy.get('h2').should('contain', 'Step 3')
    // Skip upload for now.
    cy.get('button').click()

    cy.url().should('contain', '/result')
    cy.get('h2').should('contain', 'Form Values')
    cy.get('table').within(() => {
      cy.contains('td', 'Maria').should('exist')
      cy.contains('td', 'Sanchez').should('exist')
      cy.contains('td', 'maria@example.com').should('exist')
      cy.contains('td', '555-555-5555').should('exist')
    })
    cy.get('button').click()

    cy.get('[role=dialog]').within(() => {
      cy.get('h2').should('contain', 'Great job!')
      cy.contains('button', 'OK').click()
    })
  })
})
