/// <reference types="cypress" />

import produto from "../../fixtures/produtos.json"

class AdicionarCarrinho {

    get #btnCategorias() {return cy.get('#primary-menu > .menu-item-629 > a')}
    get #btnOrdenacao() {return cy.get('.orderby')}
    get #Produto1() {return cy.get('.post-3680 > .product-block > .caption > .meta > .infor > .name > a')}
    get #Produto2() {return cy.get('.post-4104 > .product-block > .caption > .meta > .infor > .name > a')}
    get #Produto3() {return cy.get('.post-3528 > .product-block > .caption > .meta > .infor > .name > a')}
    get #Produto4() {return cy.get('.post-3964 > .product-block > .caption > .meta > .infor > .name > a')}
    get #tituloProduto() {return cy.get('.product_title')}
    get #tamanhoProdutoS() {return cy.get('.button-variable-item-S')}
    get #tamanhoProdutoL() {return cy.get('.button-variable-item-L')}
    get #tamanhoProduto2() {return cy.get('.button-variable-item-33')}
    get #corProduto1() {return cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item')}
    get #corProduto2() {return cy.get('.button-variable-item-Orange')}
    get #corProduto3() {return cy.get('.button-variable-item-Blue')}
    get #corProduto4() {return cy.get('.button-variable-item-Purple')}    
    get #Estoque() {return cy.get('.stock')}
    get #btnAddCarrinho() {return cy.get('.single_add_to_cart_button')}
    get #btnAddCarrinhoDesabilitado() {return  cy.get('[class="single_add_to_cart_button button alt disabled wc-variation-is-unavailable"]')}
    get #mensagemSucesso() {return cy.get('.woocommerce-message')}

    visitar() {
        cy.visit('minha-conta')
    }

    addProdutoDisponivel1(){
        this.#btnCategorias.click()
        this.#btnOrdenacao.select('Ordenar por popularidade')
        this.#Produto1.click()
        this.#tituloProduto.should('have.text', produto[0].nome)
        this.#tamanhoProdutoS.click()
        this.#corProduto1.click()
        this.#Estoque.should('contain', 'em estoque')
        this.#btnAddCarrinho.should('not.be.disabled')
        .click()
        this.#mensagemSucesso.should('be.visible')
        .and('contain', `“${produto[0].nome}” foi adicionado no seu carrinho.`)
    
    }

    addProdutoDisponivel2(){
        this.#btnCategorias.click()
        this.#btnOrdenacao.select('Ordenar por popularidade')
        this.#Produto2.click()
        this.#tituloProduto.should('have.text', produto[1].nome)
        this.#tamanhoProdutoS.click()
        this.#corProduto2.click()
        this.#Estoque.should('contain', 'em estoque')
        this.#btnAddCarrinho.should('not.be.disabled')
        .click()
        this.#mensagemSucesso.should('be.visible')
        .and('contain', `“${produto[1].nome}” foi adicionado no seu carrinho.`)
    
    }

    addProdutoDisponivel3(){
        this.#btnCategorias.click()
        this.#btnOrdenacao.select('Ordenar por popularidade')
        this.#Produto3.click()
        this.#tituloProduto.should('have.text', produto[2].nome)
        this.#tamanhoProduto2.click()
        this.#corProduto3.click()
        this.#Estoque.should('contain', 'em estoque')
        this.#btnAddCarrinho.should('not.be.disabled')
        .click()
        this.#mensagemSucesso.should('be.visible')
        .and('contain', `“${produto[2].nome}” foi adicionado no seu carrinho.`)
    
    }

    addProdutoIndisponivel(){
        this.#btnCategorias.click()
        this.#Produto4.click()
        this.#tituloProduto.should('have.text', produto[3].nome)
        this.#tamanhoProdutoL.click()
        this.#corProduto4.click()
        this.#Estoque.should('contain', 'Fora de estoque')
        this.#btnAddCarrinho.should('not.be.disabled')
        .click()
        this.#btnAddCarrinhoDesabilitado.should('exist')
    
    }    
}

module.exports = new AdicionarCarrinho()