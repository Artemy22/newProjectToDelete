///<reference types="cypress"/>

describe('template spec', () => {
  it('Implicit assertions', () => {
    cy.visit('http://localhost:8080/commands/assertions')
    /*
      expect('text').to.be.equal('text') // что с чем сравниваем
      */

    cy.get('.table.table-bordered.assertion-table tr').eq(3).then(element => { // в момент появления елемента сразу все проверки прооходят, а не как шулд - в виде цепочки
      expect(element).to.have.class('success')
      expect(element).to.have.attr('class')
      expect(element.attr('class')).to.eq('success')
      expect(element.attr('class')).to.eql('success')   // deeply equal
      expect(element.attr('class')).to.eqls('success')  // deeply equal
      expect(element.attr('class')).to.equal('success')
      expect(element.attr('class')).to.equals('success')

      const obj1 = {
        key: 'Art',
        keyObj: {
          key2: 'QA'
        }
      }


      const obj2 = {
        key: 'Art',
        keyObj: {
          key2: 'QA'
        }
      }
      /*
            expect(obj1).to.eq(obj2)
            expect(obj1).to.eql(obj2)
            expect(obj1).to.eqls(obj2)
            expect(obj1).to.equal(obj2)
            expect(obj1).to.equals(obj2)
            const obj3 = obj1
            expect(obj1).to.eq(obj3)
            expect(obj1).to.eql(obj3)
            expect(obj1).to.eqls(obj3)
            expect(obj1).to.equal(obj3)
            expect(obj1).to.equals(obj3)
      */

      cy.get('.table.table-bordered.assertion-table tr td')
        .eq(3)
        .then(element => {
          expect(element).to.have.text('Column content');
          expect(element).to.have.html('Column content');
          expect(element).to.contain('Column content');

          // expect(element).to.contains('Column content');
          // expect(element).to.include('Column content');

          expect(element.text()).to.contains('Column content');
          expect(element.text()).to.include('Column content');
          expect(element.text()).to.include('content');

          expect(element.text()).not.to.include('qweqwe');


          cy.visit('http://localhost:8080/commands/querying')

          cy.get('#inputName')
            .type('Hello')
            .then(el => {
              expect(el.val()).to.be.eq('Hello');
            })
        })
    })
  })
})