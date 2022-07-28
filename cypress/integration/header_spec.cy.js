describe('Header', function () {
    beforeEach(() => {
        cy.visit('https://namelessshop.azurewebsites.net');
        sessionStorage.clear();
        cy.reload();
    })

    it('header should exist', () => {
        cy.get('header').should("exist");
    })

    it('shop name is visible', () => {
        cy.get('.shopName').should("have.text", "Nameless Shop");
    })

    it('cart button is visible', () => {
        cy.get('.cartButton').should("be.visible");
    })

    it('login is visible - not logged in', () => {
        cy.get('.loginLink').should("have.text", "Login");
    })

    it('logout is not visible - not logged in', () => {
        cy.get('.logoutLink').should("not.exist");
    })

    it('logout link is visible - logged in', () => {
        sessionStorage.setItem("token", "randomTokenValue");
        cy.reload();
        cy.get('.logoutLink').should("have.text", "Logout");
    })

    it('login is not visible - logged in', () => {
        sessionStorage.setItem("token", "randomTokenValue");
        cy.reload();
        cy.get('.loginLink').should("not.exist");
    })

    it('account email and oauth service are visible - logged in', () => {
        sessionStorage.setItem("token", "randomTokenValue");
        cy.reload();
        cy.get('.emailLoggedIn').contains(/Konto:/).contains(/serwis:/).should('be.visible');
    })

    it('shopping cart icon navigates to shopping-cart url', () => {
        cy.get('.cartButton').click();
        cy.get('.shoppingCartHeader').should('be.visible');
    })

    it('shop name link navigates to the products page', () => {
        cy.get('.shopName').click();
        cy.url().should('eq', 'https://namelessshop.azurewebsites.net/products');
    })

    it('login changes to logout after token is provided', () => {
        cy.get('.loginLink').should("have.text", "Login");
        sessionStorage.setItem("token", "randomTokenValue");
        cy.reload();
        cy.get('.logoutLink').should("have.text", "Logout");
    })

    it('successful logout displays specific text', () => {
        sessionStorage.setItem("token", "randomTokenValue");
        cy.reload();
        cy.get('.logoutLink').click();
        cy.get('.logoutText').should('have.text', "Pomyślnie wylogowano. Następuje przekierowanie...");
    })

    it('logout changes to login after token is removed', () => {
        sessionStorage.setItem("token", "randomTokenValue");
        cy.reload();
        sessionStorage.removeItem("token");
        cy.reload();
        cy.get('.loginLink').should("have.text", "Login");
    })
})