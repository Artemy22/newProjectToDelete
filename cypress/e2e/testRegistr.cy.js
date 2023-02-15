
///<reference types="cypress"/>


import * as user from '../fixtures/user.json'
import { faker } from '@faker-js/faker'

describe('Registr and Auth', () => {
    user.password = faker.internet.password(20)
    user.firstName = faker.name.firstName('male')
    user.lastName = faker.internet.userName()
    user.address = faker.address.streetAddress()
    user.email = faker.internet.email()
    user.city = faker.address.city()
    user.postCode = faker.address.zipCode()
    user.name = faker.internet.userName()

    it('Registration flow', () => {
        cy.visit('https://automationteststore.com/')
        cy.get('#customer_menu_top').click()
        cy.get('[title="Continue"]').click()
        cy.get('[name="firstname"]').type(user.firstName).should('have.value', user.firstName)
        cy.get('[name="lastname"]').type(user.lastName).should('have.value', user.lastName)
        cy.get('[id="AccountFrm_email"]').type(user.email).should('have.value', user.email)
        cy.get('[id="AccountFrm_address_1"]').type(user.address).should('have.value', user.address)
        cy.get('[id="AccountFrm_city"]').type(user.city).should('have.value', user.city)
        cy.get('[id="AccountFrm_country_id"]').select('220').should('have.value', '220')
        cy.get('[id="AccountFrm_zone_id"]').select('3490').should('have.value', '3490')
        cy.get('[id="AccountFrm_postcode"]').type(user.postCode).should('have.value', user.postCode)
        cy.get('[id="AccountFrm_loginname"]').type(user.name).should('have.value', user.name)
        cy.get('[id="AccountFrm_password"]').type(user.password)
        cy.get('[id="AccountFrm_confirm"]').type(user.password)
        cy.get('[id="AccountFrm_confirm"]')
            .invoke('val')
            .then((val1) => {cy.log(val1)})
        cy.get('[id="AccountFrm_newsletter0"]').check()
        cy.get('[id="AccountFrm_agree"]').check()
        cy.get('[title="Continue"]').click()
        cy.url().should('include', 'rt=account/success')
        cy.url().should('eq', 'https://automationteststore.com/index.php?rt=account/success')
        cy.contains('Congratulations! Your new account has been successfully created!')    
    })

    it('Sign In flow', () => {
        cy.visit('https://automationteststore.com/')
        cy.get('#customer_menu_top').click()
        cy.get('[id="loginFrm_loginname"]').type(user.name)
        cy.get('[id="loginFrm_password"]').type(user.password)
        cy.get('[title="Login"]').click()
        cy.get('.menu_text').should('contain', `Welcome back ${user.firstName}`)
    })
})