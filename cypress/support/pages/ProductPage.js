class ProductPage {

    addToCartButton() {
        return cy.get('.mt20 .productpagecart')
    }

    onePositionInCart() {
        return cy.get('.block_7 .dropdown.hover .font14')
    }

    priceInCart() {
        return cy.get('.block_7 .dropdown.hover .cart_total')
    }

    cartCheckout() {
        return cy.get('#cart_checkout1')
    }

    checkoutButton() {
        return cy.get('#checkout_btn')
    }

    clickAddToCartButton(){
        this.addToCartButton().click()
    }

    checkIfOnePosition() {
        this.onePositionInCart().should('contain', '1')
    }

    checkPriceOfGoods() {
        this.priceInCart().should('contain', '$27.00')
    }

    clickCartCheckout() {
        this.cartCheckout().click()
    }

    clickCartCheckoutButton() {
        cy.log('BEFORE CLICKING')
        this.checkoutButton().click()
    }

    checkIfBought() {
        cy.contains(' Your Order Has Been Processed!')
        cy.url().should('eq', 'https://automationteststore.com/index.php?rt=checkout/success')
    }

}

export default new ProductPage()
