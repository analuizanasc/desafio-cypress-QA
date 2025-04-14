describe('Usuário - API', () => {
    beforeEach(() => {
        cy.fixture('produtos').as('produtos')
    })

    it('deve cadastrar produto com sucesso', () => { 
        cy.tokenAdm()
        cy.get('@tokenAdm').then((token) => {
            cy.cadastrarProdutoAPI(token).then((res) => {
                expect(res.status).to.eq(201);
                expect(res.body.message).to.equal('Cadastro realizado com sucesso')
                expect(res.body).to.have.property('_id')
                .and.to.be.a('string')
                .and.not.be.empty
                cy.validarHeadersSeguros(res.headers)
            })
        })
    })
})