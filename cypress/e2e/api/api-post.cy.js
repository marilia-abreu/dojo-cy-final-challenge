/// <reference types="cypress" />

describe('US-0003 - API de cupons - POST', () => {

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
      }

    it('Deve cadastrar o cupom com os campos obrigatórios', () => {

        let random = getRandomInt(0,100)

        cy.request({
            method: 'POST',
            url: 'wp-json/wc/v3/coupons',
            headers: { 
                authorization: 'Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy'
            },
            body: {
                "code": `cupomTesteM${random}`,
                "amount": `${random}`,
                "discount_type": "fixed_product",
                "description": "Cupom de desconto de teste"
            }

        }).then((response) => {
            expect(response.status).to.equal(201)
            expect(response.body).to.have.property('id')

        })

    })
})