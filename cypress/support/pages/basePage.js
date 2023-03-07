
class BasePage {
    constructor() {
        this.inputSearchKeyword = '#filter_keyword'
    }

    checkIfTopNavHaveUserName(user) {
        return  cy.get('#customer_menu_top').should('contain', `Welcome back ${user.firstName}`)
    }


    //test 
    
    findNeededValue(e) {
        cy.get( this.inputSearchKeyword).type(e)
        cy.get( this.inputSearchKeyword).type('{enter}')
    }
}

export default new BasePage()
