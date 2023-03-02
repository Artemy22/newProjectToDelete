
class AccountPage {
    visit() {
        cy.log('Open a website account page')
        cy.visit('/index.php?rt=account/account')        
    }

    verifyUserName(user) {
        cy.get('.menu_text').should('contain', user.firstNameForLogin)
    }
}

export default new AccountPage()
