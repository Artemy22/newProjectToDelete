///<reference types="cypress"/>

describe('locations', () => {
  it('explicit assertions', () => {
    cy.visit('http://localhost:8080/commands/assertions')

    cy.location()
      .should(location => {
        expect(location.href).to.eq('http://localhost:8080/commands/assertions')
        expect(location.host).to.eq('localhost:8080')
        expect(location.hostname).to.eq('localhost')
        expect(location.hash).to.be.empty
        expect(location.origin).to.eq('http://localhost:8080')
        expect(location.port).to.eq('8080')
        expect(location.protocol).to.eq('http:')
      })

    cy.url().should('eq', 'http://localhost:8080/commands/assertions');
  })
})
