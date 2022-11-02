/// <reference types="cypress" />

import produto from "../../fixtures/produtos.json"
import user from "../../fixtures/login.json"

describe('US-0001 - Adicionar item ao carrinho', () => {
    
    beforeEach(() => {

        cy.visit('minha-conta')
        cy.login(user.email, user.senha, user.usuario)
      
    });

    it('TC 01 - Adicionar 1º produto disponível no carrinho', () => {
        
        cy.get('#primary-menu > .menu-item-629 > a').click() //visitar página de produtos
        cy.get('.orderby').select('Ordenar por popularidade')
        cy.get('.post-3680 > .product-block > .caption > .meta > .infor > .name > a').click()
        cy.get('.product_title').should('have.text', produto[0].nome)
        cy.get('.button-variable-item-S').click()
        cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item').click()
        cy.get('.stock').should('contain', 'em estoque')
        cy.get('.single_add_to_cart_button')
            .should('not.be.disabled')
            .click()
        cy.get('.woocommerce-message')
            .should('be.visible')
            .and('contain', `“${produto[0].nome}” foi adicionado no seu carrinho.`)           
        
    });

    it('TC 02 - Adicionar 2º produto disponível no carrinho', () => {

        cy.get('#primary-menu > .menu-item-629 > a').click() //visitar página de produtos
        cy.get('.orderby').select('Ordenar por popularidade')
        cy.get('.post-4104 > .product-block > .caption > .meta > .infor > .name > a').click()
        cy.get('.product_title').should('have.text', produto[1].nome)
        cy.get('.button-variable-item-S').click()
        cy.get('.button-variable-item-Orange').click()
        cy.get('.stock').should('contain', 'em estoque')
        cy.get('.single_add_to_cart_button')
            .should('not.be.disabled')
            .click()
        cy.get('.woocommerce-message')
            .should('be.visible')
            .and('contain', `“${produto[1].nome}” foi adicionado no seu carrinho.`)           
        
    });

    it('TC 03 - Adicionar 3º produto disponível no carrinho', () => {

        cy.get('#primary-menu > .menu-item-629 > a').click() //visitar página de produtos
        cy.get('.post-3528 > .product-block > .caption > .meta > .infor > .name > a').click()
        cy.get('.product_title').should('have.text', produto[2].nome)
        cy.get('.button-variable-item-33').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.stock').should('contain', 'em estoque')
        cy.get('.single_add_to_cart_button')
            .should('not.be.disabled')
            .click()
        cy.get('.woocommerce-message')
            .should('be.visible')
            .and('contain', `“${produto[2].nome}” foi adicionado no seu carrinho.`)           
        
    });

    it('TC 04 - Adicionar produto indisponível no carrinho', () => {
        cy.get('#primary-menu > .menu-item-629 > a').click() //visitar página de produtos
        cy.get('.post-3964 > .product-block > .caption > .meta > .infor > .name > a').click()
        cy.get('.product_title').should('have.text', produto[3].nome)
        cy.get('.button-variable-item-L').click()
        cy.get('.button-variable-item-Purple').click()
        cy.get('.stock').should('contain', 'Fora de estoque')
        cy.get('[class="single_add_to_cart_button button alt disabled wc-variation-is-unavailable"]').should('exist')//be.disabled não está pegando 
    });

});


