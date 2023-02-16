export const loginViaUI = (user) => {
    cy.visit('/')
    cy.get('#customer_menu_top').click()
    cy.get('[id="loginFrm_loginname"]').type(user.name)
    cy.get('[id="loginFrm_password"]').type(user.password)
    cy.get('[title="Login"]').click()
    cy.get('.menu_text').should('contain', `Welcome back ${user.firstName}`)
}

export const loginSilent = ((user) => {
    let csrfToken;
    let csrfInstance;
    cy.request('GET', '/index.php?rt=account/login')
        .then(responce => {
            let htmlResponse = document.createElement('html')
            // console.log(htmlResponse)
            htmlResponse.innerHTML = responce.body
            csrfToken = htmlResponse.querySelector('#loginFrm [name="csrftoken"]').getAttribute('value')
            csrfInstance = htmlResponse.querySelector('#loginFrm [name="csrfinstance"]').getAttribute('value')
        })
        .then(() => {
            cy.request({
                method: 'POST',
                url: '/index.php?rt=account/login',
                body: {
                    csrftoken: csrfToken,
                    csrfinstance: csrfInstance,
                    loginname: user.name,
                    password: user.password
                },
                form: true
            })
        })
})

export const loginSilentBetter = () => {
    let token;
    cy.request({
        method: 'POST',
        url: '/index.php?rt=account/login',
        body: {
            csrftoken: csrfToken,
            csrfinstance: csrfInstance,
            loginname: user.name,
            password: user.password
        },
        form: true
    }).then(response => {
        token = response.body.token
        cy.setCookie('token', token)
        window.localStorage.setItem('token', token)
        window.sessionStorage.setItem('token', token)
    })
}

export const productFinder = (productTitleToFind) => {
    for (let i = 1; i < 5; i++) {

        cy.get(".prdocutname").then(($a) => {
            console.log($a.text())
            if ($a.text().includes(`${productTitleToFind}`)) {
                cy.get(`[title="${productTitleToFind}"]`).click()
            } else {
                cy.visit(`https://automationteststore.com/index.php?rt=product/search&keyword=e%20&category_id=0&sort=date_modified-ASC&limit=20&page=${i+1}`)
            }
        })
    }
}