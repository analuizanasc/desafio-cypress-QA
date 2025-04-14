import { faker } from '@faker-js/faker'

describe('Cadastro de produto', () => {
  const usuario = {
    nome: faker.person.fullName(),
    email: faker.internet.email(),
    senha: 'Teste123'
  }

  before(() => {
    cy.cadastrarUsuario(usuario.nome, usuario.email, usuario.senha)
    cy.esperarReqCadastroUsuarioAdm()
  })

  beforeEach(() => {
    cy.fixture('produtos').as('produtos')
  })

  it('deve cadastrar produto com sucesso', function () {
    const produtoBase = this.produtos[0]
    const produto = {
      ...produtoBase,
      nome: `${produtoBase.nome} - ${faker.string.alphanumeric(3)}`
    }

    cy.irParaCadastroDeProduto()
    cy.cadastrarProduto(produto.nome, produto.preco, produto.descricao, produto.quantidade, produto.imagem)

    cy.location('pathname', { timeout: 15000 }).should('eq', '/admin/listarprodutos');
    cy.contains('table tbody tr', produto.nome).within(() => {
      cy.contains(produto.preco);
      cy.contains(produto.descricao);
      cy.contains(produto.quantidade);
      cy.contains(produto.imagem);
    });
  })
})

