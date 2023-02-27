
class AccountPage {
    visit() {
        cy.log('Open a website account page')
        cy.visit('/index.php?rt=account/account')        
    }

    verifyUserName(user) {
        cy.get('.menu_text').should('contain', user.firstName)
    }
}

export default new AccountPage()
