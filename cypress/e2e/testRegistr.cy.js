
///<reference types="cypress"/>

/*
1. Додати необхідні тести на логін (позитивний та тести для перевірки еррор месседжів)
2. Написати тест для замовлення товару з головної сторінки

*/
import * as user from '../fixtures/user.json'
import { faker } from '@faker-js/faker'
import { loginViaUI } from '../support/helper'
import { loginSilent } from '../support/helper'
import { productFinder } from '../support/helper'




const testData =
{
    password: `${faker.internet.password(20)}`,
    firstName: `${faker.name.firstName('male')}`,
    lastName: `${faker.internet.userName()}`,
    address: `${faker.address.streetAddress()}`,
    email: `${faker.internet.email()}`,
    city: `${faker.address.city()}`,
    postCode: `${faker.address.zipCode()}`,
    name: `${faker.internet.userName()}`,
    expectedError: "Error: Incorrect login or password provided."
}

describe('Registr and Auth', () => {

    it.skip('Registration flow', () => {
        cy.visit('/')
        cy.get('#customer_menu_top').click()
        cy.get('[title="Continue"]').click()
        cy.get('[name="firstname"]').type(testData.firstName).should('have.value', testData.firstName)
        cy.get('[name="lastname"]').type(testData.lastName).should('have.value', testData.lastName)
        cy.get('[id="AccountFrm_email"]').type(testData.email).should('have.value', testData.email)
        cy.get('[id="AccountFrm_address_1"]').type(testData.address).should('have.value', testData.address)
        cy.get('[id="AccountFrm_city"]').type(testData.city).should('have.value', testData.city)
        cy.get('[id="AccountFrm_country_id"]').select('220').should('have.value', '220')
        cy.get('[id="AccountFrm_zone_id"]').select('3490').should('have.value', '3490')
        cy.get('[id="AccountFrm_postcode"]').type(testData.postCode).should('have.value', testData.postCode)
        cy.get('[id="AccountFrm_loginname"]').type(testData.name).should('have.value', testData.name)
        cy.get('[id="AccountFrm_password"]').type(testData.password)
        cy.get('[id="AccountFrm_confirm"]').type(testData.password)
        cy.get('[id="AccountFrm_confirm"]')
            .invoke('val')
            .then((val1) => { cy.log('**LOG**' + val1) })
        cy.get('[id="AccountFrm_newsletter0"]').check()
        cy.get('[id="AccountFrm_agree"]').check()
        cy.get('[title="Continue"]', { timeout: 20000 }).click()
        cy.url().should('include', 'rt=account/success')
        cy.url().should('eq', 'https://automationteststore.com/index.php?rt=account/success')
        cy.contains('Congratulations! Your new account has been successfully created!')
    })

    it.skip('Sign In happy flow flow', () => {
        cy.visit('/')
        cy.get('#customer_menu_top').click()
        cy.get('[id="loginFrm_loginname"]').type(testData.name)
        cy.get('[id="loginFrm_password"]').type(testData.password)
        cy.get('[title="Login"]').click()
        cy.get('.menu_text').should('contain', `Welcome back ${testData.firstName}`)
    })

    it.skip('Wrong User Name', () => {
        cy.visit('/')
        cy.get('#customer_menu_top').click()
        cy.get('[id="loginFrm_loginname"]').type(testData.name + "1")
        cy.get('[id="loginFrm_password"]').type(testData.password)
        cy.get('[title="Login"]').click()
        cy.get('.alert.alert-error.alert-danger').should('contain', testData.expectedError)
    })

    it.skip('Wrong Email', () => {
        cy.visit('/')
        cy.get('#customer_menu_top').click()
        cy.get('[id="loginFrm_loginname"]').type(testData.name)
        cy.get('[id="loginFrm_password"]').type(testData.password + "123")
        cy.get('[title="Login"]').click()
        cy.get('.alert.alert-error.alert-danger').should('contain', testData.expectedError)
    })

    it.skip('Empty creds', () => {
        cy.visit('/')
        cy.get('#customer_menu_top').click()
        cy.get('[id="loginFrm_loginname"]').type(" ")
        cy.get('[id="loginFrm_password"]').type(" ")
        cy.get('[title="Login"]').click()
        cy.get('.alert.alert-error.alert-danger').should('contain', testData.expectedError)
    })
})
/*
describe('Buy goods', () => {
    it.skip('Something to buy', () => {

        loginViaUI(user)

        cy.get('.nav-pills > :nth-child(6)').click()
        cy.get('[title="Men+Care Clean Comfort Deodorant"]').click()
        cy.get('.productpagecart .cart').click()
        cy.get('.block_7 .dropdown.hover .font14').should('contain', '1')
        cy.get('.block_7 .dropdown.hover .cart_total').should('contain', '$7.20')
        cy.get('#cart_checkout1').click()
        cy.get('#checkout_btn').click()
        cy.contains(' Your Order Has Been Processed!')
        cy.url().should('eq', 'https://automationteststore.com/index.php?rt=checkout/success')
    }),

        it('Open account page using silent login for auth', () => {
            loginSilent(user)
            cy.visit('/index.php?rt=account/account')
            cy.get('.menu_text').should('contain', `Welcome back ${user.firstName}`)
        }),
        it('Open account history using silent login for auth', () => {
            loginSilent(user)
            cy.visit('/index.php?rt=account/history')
            cy.get('.menu_text').should('contain', `Welcome back ${user.firstName}`)
        })
})

*/
describe('Fine Finder', () => {
    it('Find my French Ease', () => {

        loginSilent(user)

        cy.visit('/index.php?rt=account/account')
        cy.get('.menu_text').should('contain', `Welcome back ${user.firstName}`)
        cy.get('#filter_keyword').type('e {ENTER}')

        productFinder('ck one Summer 3.4 oz')

        cy.get('.productpagecart .cart').click()
        cy.get('.block_7 .dropdown.hover .font14').should('contain', '1')
        cy.get('.block_7 .dropdown.hover .cart_total').should('contain', '$27.00')
        cy.get('#cart_checkout1').click()
        cy.get('#checkout_btn').click()
        cy.contains(' Your Order Has Been Processed!')
        cy.url().should('eq', 'https://automationteststore.com/index.php?rt=checkout/success')
    })
})
