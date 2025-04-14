import { faker } from '@faker-js/faker'

describe('Lista de compras', () => {
    const usuario = {
        nome: faker.person.fullName(),
        email: faker.internet.email(),
        senha: 'Teste123'
    }

    before(() => {
        cy.cadastrarUsuario(usuario.nome, usuario.email, usuario.senha, false)
        cy.esperarReqCadastroUsuario()
    })

    beforeEach(() => {
        cy.fixture('produtos').as('produtos')
      })

    it('deve add vários produtos na lista de compras', function () {
        const produtoBase = this.produtos[0]
        const produto = {
            ...produtoBase,
            nome: `${produtoBase.nome} - ${faker.string.alphanumeric(3)}`
        }
        const produto2 = {
            ...produtoBase,
            nome: `${produtoBase.nome} - ${faker.string.alphanumeric(3)}`
        }

        //logar com adm
        cy.irParaCadastroDeProduto()
        cy.cadastrarProduto(produto.nome, produto.preco, produto.descricao, produto.quantidade, produto.imagem)
        cy.irParaCadastroDeProduto()
        cy.cadastrarProduto(produto2.nome, produto2.preco, produto2.descricao, produto2.quantidade, produto2.imagem)

        //logas user normal
        cy.get('section > div').eq(1).find('[data-testid="adicionarNaLista"]').click()
        cy.get('[data-testid="paginaInicial"]').click()
        cy.get('section > div').eq(2).find('[data-testid="adicionarNaLista"]').click()

        //validar url
        cy.get('.card-body').should('have.length', 2)
    });
});