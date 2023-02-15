///<reference types="cypress"/>
/*
describe('quering', () => {
    it.skip('Quering elements', () => {
        cy.visit('http://localhost:8080/commands/querying')
        cy.get('#query-btn').should('contain', 'Button')

        cy.get('li:contains("bananas")').should('contain', 'bananas')
        cy.contains('bananas').should('contain', 'bananas')
        cy.contains('li.third', 'bananas').should('contain', 'bananas')
        cy.get('#querying').contains('bananas').should('have.class', 'third')

        cy.get('.query-form').within(() => { // find only through the block query-form
            cy.get('#inputEmail').should('have.attr', 'placeholder', 'Email')
            cy.get('#inputPassword').should('have.attr', 'placeholder', 'Password')
            cy.get('#inputName').should('not.exist')
        })

        cy.root().should('contain', 'bananas')



    })
})
*/

it('one more commands to find the text', () => {
    cy.visit('http://localhost:8080/commands/traversal')
    cy.get('.traversal-breadcrumb.breadcrumb')
        .children('li')
        .eq(0)
        .should('contain', 'Home')

    cy.get('.traversal-breadcrumb.breadcrumb')
        .children('.active')
        .eq(0)
        .should('contain', 'Data')

    cy.get('.traversal-badge')
        .closest('ul')
        .should('have.class', 'list-group')

    cy.contains('John')
        .closest('table')
        .should('have.class', 'traversal-table')
        .and('contain', 'Doe')

    cy.get('.traversal-table td')
        .first()
        .should('contain', 1)
        .next() // after the 'next' it goes only through this row
        .should('contain', 'Jane')
        .next()
        .should('contain', 'Lane')


    cy.get('.traversal-mark')
        .parent()
        .should('contain', 'porta')


    cy.contains('.active', 'About')
        .parent()
        .should('contain', 'Services')


    cy.get('.traversal-cite')
        .parents()
        .should('contain', 'Lorem')


    cy.get('.traversal-cite')
    .parents('blockquote')
    .should('contain', 'ipsum')

    cy.get('.pagination.traversal-pagination')
    .find('span')
    .last()
    .should('contain', '»')

    cy.get('.foods-list')
    .find('#nuts')
    .should('contain', 'Nuts')
})