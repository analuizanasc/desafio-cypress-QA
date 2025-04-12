import { faker } from '@faker-js/faker'
import { CadastroDeProdutosPage } from '../../pages/cadastroDeProdutosPage'

describe('Cadastro de produto', () => {
  beforeEach(() => {
    cy.fixture('produtos').as('produtos');
  });

  const cadastroDeProdutosPage = new CadastroDeProdutosPage()

  const usuario = {
    nome: faker.person.fullName(),
    email: faker.internet.email(),
    senha: '123456'
  }

  it('deve cadastrar produto com sucesso', function () {

    cy.cadastrarUsuario(usuario.nome, usuario.email, usuario.senha)
    cy.fazerLogin(usuario.email, usuario.senha)
    cy.irParaCadastroDeProduto()

    // Cadastrar produto
    const produtoBase = this.produtos[0]
    const produto = {
      ...produtoBase,
      nome: `${produtoBase.nome} - ${faker.string.alphanumeric(3)}`
    }

    cy.cadastrarProduto(produto.nome, produto.preco, produto.descricao, produto.quantidade, produto.imagem)
    cy.wait(5000)

    //validação
    cy.location('pathname', { timeout: 15000 }).should('eq', '/admin/listarprodutos');
    cy.contains('table tbody tr', produto.nome).within(() => {
      cy.contains(produto.preco);
      cy.contains(produto.descricao);
      cy.contains(produto.quantidade);
      cy.contains(produto.imagem);
    });
  })
})
