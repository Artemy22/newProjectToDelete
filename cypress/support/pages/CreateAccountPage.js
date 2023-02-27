import { inputFiller } from "../helper"
import { faker } from "@faker-js/faker"
import { user } from "../../fixtures/user.json"

class CreateAccountPage {

    constructor() {
        this.buttonStartSignUp = '[title="Continue"]',
        this.firstName = '[name="firstname"]'
        this.lastName = '[name="lastname"]'
        this.email = '[id="AccountFrm_email"]'
        this.address = '[id="AccountFrm_address_1"]'
        this.city = '[id="AccountFrm_city"]'
        this.country_id = '[id="AccountFrm_country_id"]'
        this.zone_id = '[id="AccountFrm_zone_id"]'
        this.postcode = '[id="AccountFrm_postcode"]'
        this.loginName = '[id="AccountFrm_loginname"]'
        this.password = '[id="AccountFrm_password"]'
        this.confirmPassword = '[id="AccountFrm_confirm"]'
        this.newsLetterChecker = '[id="AccountFrm_newsletter0"]'
        this.agreeChecker = '[id="AccountFrm_agree"]'
        this.finishSignUpButton = '[title="Continue"]'
        this.successSignUpText = 'Congratulations! Your new account has been successfully created!'
    }

    signUpFlow(user) {
        cy.get(this.buttonStartSignUp).click()

        inputFiller(this.firstName, user.firstName)
        inputFiller(this.lastName, user.lastName)
        inputFiller(this.email, user.email)
        inputFiller(this.address, user.address)

        cy.get(this.country_id).select(user.country_id).should('have.value', user.country_id)
        cy.get(this.zone_id).select(user.zone_id).should('have.value', user.zone_id)   

        inputFiller(this.city, user.city)
        inputFiller(this.postcode, user.postCode)
        inputFiller(this.loginName, user.name)
        inputFiller(this.password, user.password)
        inputFiller(this.confirmPassword, user.password)

        cy.get(this.newsLetterChecker).check()
        cy.get(this.agreeChecker).check()
        cy.get(this.finishSignUpButton).click()

        cy.url().should('include', 'rt=account/success')
        cy.url().should('eq', 'https://automationteststore.com/index.php?rt=account/success')

        cy.contains(this.successSignUpText)
    }

/*

enterFirstName(user) {
    this.firstName().type(user.firstName)
}
enterLastName(user) {
    this.lastName().type(user.lastName)
}
enterEmail(user) {
    this.email().type(user.email)
}
enterAddress(user) {
    this.address().type(user.address)
}
enterCity(user) {
    this.city().type(user.city)
}
enterCountryId(user) {
    this.country_id().type(user.country_id)
}

enterZoneId(user) {
    this.zone_id().type(user.zone_id)
}

enterPostcode(user) {
    this.postcode().type(user.postCode)
}

enterPassword(user) {
    this.password().type(user.password)
}

enterConfirmPassword(user) {
    this.confirmPassword().type(user.password)
}
*/
}

export default new CreateAccountPage()