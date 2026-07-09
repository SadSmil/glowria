///<reference types="cypress" />

describe('authentification', () => {
    beforeEach("setup",()=>{
        cy.visit('https://glowria.com/')
    });
    const email = `Amal_${Date.now()}`
    it('inscription',{tags:'@inscription'}, () => {
        cy.intercept('POST','**/signup').as('signup')
        cy.get('.modal__form').click();
        cy.get('#newEmail').type(`${email}@gmail.com`)
        cy.contains('.btn.btn-black.margin__large.btn-size-large', 'Inscription').click()
        cy.url().should('include','/signup')
        cy.get('#customer_firstName').type('Amal')
        cy.get('#customer_lastName').type('Amal')
        cy.get('#customer_emailConfirm').type(`${email}@gmail.com`)
        cy.get('#customer_password').type('Password123!')
        cy.get('#customer_birthday').type('05051995',{force:true})
        cy.get('#legalmentions').click()
        cy.get('#submitBtn').click()
        cy.get('#menu-button-open').click()
        cy.contains('.nav-link', 'acheter').click()
        cy.get('.btn.btn-red.btn-size-small.text__semi-bold.color__white.btn-annual.add-to-cart ').click()
        cy.get('#user_input_autocomplete_address').type('10 Rue de Rivoli, Paris')
        cy.contains('Paris').should('be.visible').click()
        cy.get('#subscription_deliveryContact_phoneNumber').type('12345678910')
        cy.get('#submit-creation-form').click()
        cy.url().should('include','/order/personal/validation/')
        cy.get('.remember-me.paragraph.txt-line-h').click()
        cy.get('#submit-validation-form').click()
                
    });
    
     
});