
///<reference types="cypress"/>


import user from '../fixtures/user.json'
import loginPage from '../support/pages/LoginPage'
import accountPage from '../support/pages/AccountPage'
import createAccountPage from '../support/pages/CreateAccountPage'
import { faker } from '@faker-js/faker'


user.email = faker.internet.email()
user.name = faker.internet.userName()

describe(' Auth', () => {
    it('Sign In happy flow flow', () => {
        loginPage.visit()
        loginPage.submitLoginForm(user)
        accountPage.verifyUserName(user)
    })

    it.skip('Sign up', () => {
        loginPage.visit()
        createAccountPage.signUpFlow(user)
        cy.log(user.name, user.password)
    })
})