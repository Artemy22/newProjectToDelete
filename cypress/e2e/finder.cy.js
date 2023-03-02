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
        basePage.checkIfTopNavHaveUserName(user)
        basePage.findNeededValue('e')

        productFinder('ck one Summer 3.4 oz')

        productPage.clickAddToCartButton()
        productPage.checkIfOnePosition()
        productPage.checkPriceOfGoods()
        productPage.clickCartCheckout()
        productPage.clickCartCheckoutButton()
        productPage.checkIfBought()
    })
})