/// <reference types="cypress" />

describe('US-0003 - API de cupons - GET', () => {

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
      }

    it('Deve listar os cupons disponíveis', () => {
        cy.request({
            method: 'GET',
            url: 'wp-json/wc/v3/coupons',
            headers: { 
                authorization: 'Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy'
            }
        }).should((response) => {
            expect(response.status).equal(200)
        })        
    });

    it('Deve listar cupom por id', () => {
        
        let id = getRandomInt(19,30)

        cy.request({
            method: 'GET',
            url: `wp-json/wc/v3/coupons/77${id}`,
            headers: { 
                authorization: 'Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy'
            }
        }).should((response) => {
            expect(response.status).equal(200)
        })        
    });
});