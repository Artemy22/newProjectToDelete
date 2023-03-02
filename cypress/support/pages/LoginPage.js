class LoginPage { 

    visit() {
        cy.log('Open a website login page')
        cy.visit('/')
        cy.get('#customer_menu_top').click()
    }

    getLoginField() {
        return cy.get('[id="loginFrm_loginname"]');
    }

    getPasswordField() {
        return  cy.get('[id="loginFrm_password"]');
    }

    getSubmitButton() {
        return cy.get('[title="Login"]');
    }


    getContinueSignUpButton() {
        return cy.get('[title="Continue"]');
    }

    assertUserUnauthorized() {
        cy.log('Verify user is unathorized')
        cy.getCookie('customer').should('be.null')
        cy.log('User is anauthorized 🪓')
    }

    submitLoginForm(user){
        console.log(user.firstName)
        this.getLoginField().type(user.userNameStatic);
        this.getPasswordField().type(user.userPasswordStatic);
        this.getSubmitButton().click();
    }
}

export default new LoginPage()
