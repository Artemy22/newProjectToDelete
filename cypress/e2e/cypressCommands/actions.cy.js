///<reference types="cypress"/>

it('one more commands to find the text', () => {
    cy.visit('http://localhost:8080/commands/actions')

    const drawer = (startPoint) => {
        let xMove = startPoint;
        let yMove = startPoint;
        let startLoopCount = 15;
        //loopForFirstSection
        let iteratorFirst = 1;
        let iteratorSecond = 2;
        /*
        for (let i = 0; i < 10 * iteratorFirst; i++) {
            cy.get('#action-canvas')
                .click(xMove, yMove - 1)
            yMove = yMove - 1;
        }

        for (let i = 0; i < 10 * iteratorFirst; i++) {
            cy.get('#action-canvas')
                .click(xMove + 1, yMove)
            xMove = xMove + 1;
        }
        cy.log("iterator before: ", iteratorFirst)
        iteratorFirst += 1;
        cy.log("iterator after: ", iteratorFirst)


        for (let i = 0; i < 10 * iteratorSecond; i++) {
            cy.get('#action-canvas')
                .click(xMove, yMove + 1)
            yMove = yMove + 1;
        }

        for (let i = 0; i < 10 * iteratorSecond; i++) {
            cy.get('#action-canvas')
                .click(xMove - 1, yMove)
            xMove = xMove - 1;
        }
        cy.log("SECOND iterator before: ", iteratorSecond)
        iteratorSecond += 1;
        cy.log(" SECOND iterator before: ", iteratorSecond)
*/
    

        for (let j = 0; j < 10; j++) {
            for (let i = 0; i < (startLoopCount)* iteratorFirst; i++) {
                cy.get('#action-canvas')
                    .click(xMove, yMove - 1)
                yMove = yMove - 1;
            }

            for (let i = 0; i < (startLoopCount) * iteratorFirst; i++) {
                cy.get('#action-canvas')
                    .click(xMove + 1, yMove)
                xMove = xMove + 1;
            }
            cy.log("loop count: ", j)
            cy.log("iterator before: ", iteratorFirst)
            iteratorFirst++;
            cy.log("iterator after: ", iteratorFirst)


            for (let i = 0; i < startLoopCount * iteratorSecond; i++) {
                cy.get('#action-canvas')
                    .click(xMove, yMove + 1)
                yMove = yMove + 1;
            }

            for (let i = 0; i < startLoopCount * iteratorSecond; i++) {
                cy.get('#action-canvas')
                    .click(xMove - 1, yMove)
                xMove = xMove - 1;
            }
            cy.log("SECOND iterator before: ", iteratorSecond)
            iteratorSecond ++;
            cy.log(" SECOND iterator before: ", iteratorSecond)

        }
    }



    drawer(125)








})