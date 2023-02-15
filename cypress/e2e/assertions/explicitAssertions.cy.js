///<reference types="cypress"/>

describe('template spec', () => {
  it('Explicit assertions', () => {
    cy.visit('http://localhost:8080/commands/assertions')

    cy.get('.table.table-bordered.assertion-table tr')
      .eq(3)
      .should('have.class', 'success')

    cy.get('.table.table-bordered.assertion-table tr')
      .eq(3)
      .should('have.attr', 'class')

    cy.get('.table.table-bordered.assertion-table tr td')
      .eq(3)
      .should('have.text', 'Column content')


    cy.get('.table.table-bordered.assertion-table tr td')
      .eq(3)
      .should('contain', 'Column content')

    cy.get('.table.table-bordered.assertion-table tr td')
      .eq(3)
      .should('have.html', 'Column content')

    cy.get('.table.table-bordered.assertion-table tr td')
      .eq(3)
      .should('include.text', 'content')

    cy.get('.table.table-bordered.assertion-table tr td')
      .eq(3)
      .should('not.contain', 'hello')

    cy.get('.table.table-bordered.assertion-table tr th')
      .eq(5)  // it returns element
      .invoke('text') // it returns value 
      .then(parseFloat)
      .should('be.greaterThan', 2)

    cy.visit('http://localhost:8080/commands/querying')

    cy.get('#inputName')
      .type('Hello')
      .should('have.value', 'Hello')

    /*
    cy.get('#inputName')
    .type('Hello')
    .should('have.text', 'Hello') // FAIL because the value text is in properties and not is a part of dom 
     */

    cy.get('#query-btn')
      .should('be.enabled')

    cy.visit('http://localhost:8080/commands/traversal')
    cy.get('.traversal-disabled .btn.btn-default ')
      .eq(0)
      .should('be.disabled')

    cy.visit('http://localhost:8080/commands/assertions');
    cy.get('.table.table-bordered.assertion-table th')
      .eq(5)
      .should('have.css', 'background-color')
      .and('eq', 'rgb(223, 240, 216)'); //rgd value converted from hex # value

    cy.get('.navbar-brand')
    .should('have.class', 'navbar-brand')
    .and('be.visible')
    .and('have.attr', 'href')
    .and('include', '/') //    slash it is a value of attribute href in this case

    cy.get('[data-toggle="dropdown"]')
    .click()
    .get('.dropdown-menu li')
    .should('have.length', 17)    
  })
}) 