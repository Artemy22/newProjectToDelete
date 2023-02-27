///<reference types="cypress"/>

import * as user from '../fixtures/user.json'
import { loginSilent } from '../support/helper'
import { productFinder } from '../support/helper'
import productPage from '../support/pages/ProductPage'
import basePage from '../support/pages/BasePage'

describe('Fine Finder', () => {
    it('Find my goods', () => {


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
/*
        loginSilent(user)
        cy.visit('/index.php?rt=account/account')
        basePage.checkIfTopNavHaveUserName(user)
        basePage.findNeededValue('e')


        productFinder('ck one Summer 3.4 oz')


        productPage.clickAddToCartButton()
        productPage.checkIfOnePosition()
        productPage.checkPriceOfGoods()
        productPage.clickCartCheckout()
        productPage.clickAddToCartButton()
        productPage.checkIfBought()
        */
    })
})