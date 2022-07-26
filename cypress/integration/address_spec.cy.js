describe('Address', function () {
    beforeEach(() => {
        cy.visit('https://namelessshop.azurewebsites.net');
        sessionStorage.clear();
        cy.reload();
        cy.get('.addToBasketButton').eq(0).click();
        cy.get('.cartButton').click();
        cy.get('.goToDeliveryButton').click();
    })

    it('Address page header is visible', () => {
        cy.get('.addressPageHeader').should('have.text', 'Dostawa pod adres:');
    })

    it('Address page "Ulica" textbox header is visible', () => {
        cy.get('.streetLabel').should('have.text', 'Ulica:');
    })

    it('Address page "Numer domu" textbox header is visible', () => {
        cy.get('.houseNumberLabel').should('have.text', 'Numer domu:');
    })

    it('Address page "Kod pocztowy" textbox header is visible', () => {
        cy.get('.postalCodeLabel').should('have.text', "Kod pocztowy:");
    })
    
    it('Address page "Miasto" textbox header is visible', () => {
        cy.get('.cityLabel').should('have.text', "Miasto:");
    })

    it('Address page "Przejdź do płatności" button is visible', () => {
        cy.get('.submitButton').should('have.text', "Przejdź do płatności");
    })

    it('All textfields are required', () => {
        cy.get('.submitButton').click();
        cy.get('.error').should('have.length', 4);
    })

    it('"Ulica" textfield is required', () => {
        cy.get('.input').then($inputs => $inputs[1]).type("1");
        cy.get('.input').then($inputs => $inputs[2]).type("11111");
        cy.get('.input').then($inputs => $inputs[3]).type("Kraków");
        cy.get('.submitButton').click();
        cy.get('.error').should('have.length', 1);
    })

    it('"Numer domu" textfield is required', () => {
        cy.get('.input').then($inputs => $inputs[0]).type("Bracka");
        cy.get('.input').then($inputs => $inputs[2]).type("11111");
        cy.get('.input').then($inputs => $inputs[3]).type("Kraków");
        cy.get('.submitButton').click();
        cy.get('.error').should('have.length', 1);
    })
    
    it('"Kod pocztowy" textfield is required', () => {
        cy.get('.input').then($inputs => $inputs[0]).type("Bracka");
        cy.get('.input').then($inputs => $inputs[1]).type("1");
        cy.get('.input').then($inputs => $inputs[3]).type("Kraków");
        cy.get('.submitButton').click();
        cy.get('.error').should('have.length', 1);
    })

        it('"Miasto" textfield is required', () => {
        cy.get('.input').then($inputs => $inputs[0]).type("Bracka");
        cy.get('.input').then($inputs => $inputs[1]).type("1");
        cy.get('.input').then($inputs => $inputs[3]).type("Kraków");
        cy.get('.submitButton').click();
        cy.get('.error').should('have.length', 1);
    })

    it('Address can be filled correctly', () => {
        cy.get('.input').then($inputs => $inputs[0]).type("Bracka");
        cy.get('.input').then($inputs => $inputs[1]).type("1");
        cy.get('.input').then($inputs => $inputs[2]).type("11111");
        cy.get('.input').then($inputs => $inputs[3]).type("Kraków");
        cy.get('.submitButton').click();
        cy.url().should('eq', 'https://namelessshop.azurewebsites.net/payment/stripe')
    })

    it('"Numer domu" can take integer only', () => {
        cy.get('.input').then($inputs => $inputs[1]).type("a");
        cy.get('input').then($inputs => $inputs[1]).invoke('val').should('be.empty')
    })

    it('"Kod pocztowy" can take integer only', () => {
        cy.get('.input').then($inputs => $inputs[2]).type("a");
        cy.get('input').then($inputs => $inputs[2]).invoke('val').should('be.empty')
    })
})        