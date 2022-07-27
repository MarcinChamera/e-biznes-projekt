describe('Stripe Payment', function () {
    beforeEach(() => {
        cy.visit('https://namelessshop.azurewebsites.net');
        sessionStorage.clear();
        cy.reload();
        cy.get('.addToBasketButton').eq(0).click();
        cy.get('.cartButton').click();
        
    })

    it('Price is valid on the payment page', () => {
        let totalAmountToPay = 0;
        cy.get('.shoppingCartSummary').then(($shoppingCartSummary) => {
            totalAmountToPay = $shoppingCartSummary.text().split(' ')[2];
            cy.get('.goToDeliveryButton').click();
            cy.get('.input').then($inputs => $inputs[0]).type("Bracka");
            cy.get('.input').then($inputs => $inputs[1]).type("1");
            cy.get('.input').then($inputs => $inputs[2]).type("11111");
            cy.get('.input').then($inputs => $inputs[3]).type("Kraków");
            cy.get('.submitButton').click();
            cy.get('.paymentAmountHeader').should('have.text', 'Do zapłaty: ' + totalAmountToPay + ' PLN');
        });
    })

    it('Payment succeeded', () => {
        cy.get('.goToDeliveryButton').click();
        cy.get('.input').then($inputs => $inputs[0]).type("Bracka");
        cy.get('.input').then($inputs => $inputs[1]).type("1");
        cy.get('.input').then($inputs => $inputs[2]).type("11111");
        cy.get('.input').then($inputs => $inputs[3]).type("Kraków");
        cy.get('.submitButton').click();
    
        cy.fillElementsInput('cardNumber', '378282246310005');
        cy.fillElementsInput('cardExpiry', '1025');
        cy.fillElementsInput('cardCvc', '123');
        cy.fillElementsInput('postalCode', '90210');
        cy.get('.submitPaymentButton').click();
        cy.get('.categoriesCombobox > label').should('have.text', "Kategorie");
    })

    it('Payment didn\'t succeed - no postal code entered', () => {
        cy.get('.goToDeliveryButton').click();
        cy.get('.input').then($inputs => $inputs[0]).type("Bracka");
        cy.get('.input').then($inputs => $inputs[1]).type("1");
        cy.get('.input').then($inputs => $inputs[2]).type("11111");
        cy.get('.input').then($inputs => $inputs[3]).type("Kraków");
        cy.get('.submitButton').click();
        cy.fillElementsInput('cardNumber', '378282246310005');
        cy.fillElementsInput('cardExpiry', '1025');
        cy.fillElementsInput('cardCvc', '123');
        cy.get('.submitPaymentButton').click();  
        cy.wait(3000);
        cy.url().should('eq', 'https://namelessshop.azurewebsites.net/payment/stripe')
    })

    it('Payment didn\'t succeed - no CVC entered', () => {
        cy.get('.goToDeliveryButton').click();
        cy.get('.input').then($inputs => $inputs[0]).type("Bracka");
        cy.get('.input').then($inputs => $inputs[1]).type("1");
        cy.get('.input').then($inputs => $inputs[2]).type("11111");
        cy.get('.input').then($inputs => $inputs[3]).type("Kraków");
        cy.get('.submitButton').click();
        cy.fillElementsInput('cardNumber', '378282246310005');
        cy.fillElementsInput('cardExpiry', '1025');
        cy.fillElementsInput('postalCode', '90210');
        cy.get('.submitPaymentButton').click();  
        cy.wait(3000);
        cy.url().should('eq', 'https://namelessshop.azurewebsites.net/payment/stripe')
    })

    it('Payment didn\'t succeed - no card expiry entered', () => {
        cy.get('.goToDeliveryButton').click();
        cy.get('.input').then($inputs => $inputs[0]).type("Bracka");
        cy.get('.input').then($inputs => $inputs[1]).type("1");
        cy.get('.input').then($inputs => $inputs[2]).type("11111");
        cy.get('.input').then($inputs => $inputs[3]).type("Kraków");
        cy.get('.submitButton').click();
        cy.fillElementsInput('cardNumber', '378282246310005');
        cy.fillElementsInput('cardCvc', '123');
        cy.fillElementsInput('postalCode', '90210');
        cy.get('.submitPaymentButton').click();  
        cy.wait(3000);
        cy.url().should('eq', 'https://namelessshop.azurewebsites.net/payment/stripe')
    })
})