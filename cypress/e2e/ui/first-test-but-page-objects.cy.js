/// <reference types="cypress" />

import user from "../../fixtures/login.json"
import AdicionarCarrinho from "../../support/pages/first-test.page"

describe('US-0001 - Adicionar item ao carrinho', () => {
    
    beforeEach(() => {

        AdicionarCarrinho.visitar()
        cy.login(user.email, user.senha, user.usuario)
      
    });

    it('TC 01 - Adicionar 1º produto disponível no carrinho', () => {
        AdicionarCarrinho.addProdutoDisponivel1() 
    });

    it('TC 02 - Adicionar 2º produto disponível no carrinho', () => {
        AdicionarCarrinho.addProdutoDisponivel2()  
    });

    it('TC 03 - Adicionar 3º produto disponível no carrinho', () => {
        AdicionarCarrinho.addProdutoDisponivel3()   
        
    });

    it('TC 04 - Adicionar produto indisponível no carrinho', () => {
        AdicionarCarrinho.addProdutoIndisponivel()
    });

});