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

    it('"Zaloguj przez Facebook" redirects to Facebook authorization page', () => {
        cy.get('.facebookLogin').click();
        cy.url().should('contain', 'https://www.facebook.com/v3.2/dialog/oauth?client_id');
    })

    it('"Zaloguj przez GitHub" redirects to Facebook authorization page', () => {
        cy.get('.githubLogin').click();
        cy.url().should('contain', 'https://github.com/login?client_id');
    })
})