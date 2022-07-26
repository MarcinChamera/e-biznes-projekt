describe('Login', function () {
    beforeEach(() => {
        cy.visit('https://namelessshop.azurewebsites.net/login');
    });

    it('Login page header info text is visible', () => {
        cy.get('.loginHeaderInfo').should('have.text', "Wybierz w jaki sposób chcesz się zalogować");
    })

    it('Google login text is visible', () => {
        cy.get('.googleLogin').should('have.text', "Zaloguj przez Google");
    })
    
    it('Google login image is visible', () => {
        cy.get('.googleLogin > img').eq(0).should("be.visible").and(($img) => {
            expect($img[0].naturalWidth).to.be.greaterThan(0);
        });
    })

    it('Github login text is visible', () => {
        cy.get('.githubLogin').should('have.text', "Zaloguj przez Github");
    })
    
    it('Github login image is visible', () => {
        cy.get('.githubLogin > img').eq(0).should("be.visible").and(($img) => {
            expect($img[0].naturalWidth).to.be.greaterThan(0);
        });
    })

    it('Facebook login text is visible', () => {
        cy.get('.facebookLogin').should('have.text', "Zaloguj przez Facebook");
    })
    
    it('Facebook login image is visible', () => {
        cy.get('.facebookLogin > img').eq(0).should("be.visible").and(($img) => {
            expect($img[0].naturalWidth).to.be.greaterThan(0);
        });
    })

    // it('Google OAuth provider page is opened', () => {
    //     cy.get('.googleLogin').click();
    //     cy.get('span').contains('Przejdź do aplikacji').get('button').should('have.text', 'Nameless shop');
    // })
})