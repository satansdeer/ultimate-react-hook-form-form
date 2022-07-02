describe('ultimate form', () => {
  it('submits successfully', () => {
    cy.visit('/')

    // STEP 1
    cy.get('h2').should('contain', 'Step 1')

    cy.get('#firstName-helper-text').should('not.exist')
    cy.get('#firstName').focus().blur()
    cy.get('#firstName-helper-text').should('exist')

    cy.get('#lastName-helper-text').should('not.exist')
    cy.get('#lastName').focus().blur()
    cy.get('#lastName-helper-text').should('exist')

    // Submit shouldn't work.
    cy.get('button').click()
    cy.get('h2').should('contain', 'Step 1')

    cy.get('#firstName').type('Maria').blur()
    cy.get('#firstName-helper-text').should('not.exist')

    // Submit shouldn't work.
    cy.get('button').click()
    cy.get('h2').should('contain', 'Step 1')

    cy.get('#lastName').type('Sanchez').blur()
    cy.get('#lastName-helper-text').should('not.exist')
    cy.get('button').click()

    // STEP 2
    cy.url().should('contain', '/step2')
    cy.get('h2').should('contain', 'Step 2')

    cy.get('#email-helper-text').should('not.exist')
    cy.get('#email').focus().blur()
    cy.get('#email-helper-text').should('exist')

    cy.get('#email').type('maria@example.com').blur()
    cy.get('#email-helper-text').should('not.exist')

    cy.get('#phoneNumber').should('not.exist')
    cy.get('input[name=hasPhone]').check()
    cy.get('#phoneNumber').should('exist')
    cy.get('#phoneNumber').type('555-555-5555')
    cy.get('button').click()

    // STEP 3
    cy.url().should('contain', '/step3')
    cy.get('h2').should('contain', 'Step 3')
    // Skip upload for now.
    cy.get('button').click()

    // RESULTS
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
