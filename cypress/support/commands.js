import { CadastroDeUsuarioPage } from '../pages/cadastroDeUsuarioPage'
import { LoginPage } from '../pages/loginPage'
import { Home } from '../pages/home'
import { CadastroDeProdutosPage } from '../pages/cadastroDeProdutosPage'
import { faker } from '@faker-js/faker'

Cypress.Commands.add('interceptarReqCadastroUsuario', () => {
    cy.intercept('POST', '**/usuarios').as('postUsuarios')
    cy.intercept('POST', '**/login').as('postLogin')
    cy.intercept('GET', '**/usuarios').as('getUsuarios')
    cy.intercept('GET', '**/produtos').as('getProdutos')
});

Cypress.Commands.add('interceptarReqCadastroUsuarioAdm', () => {
    cy.intercept('POST', '**/usuarios').as('postUsuarios')
    cy.intercept('POST', '**/login').as('postLogin')
    cy.intercept('GET', '**/usuarios').as('getUsuarios')
});

Cypress.Commands.add('interceptarReqCadastroProduto', () => {
    cy.intercept('POST', '**/produtos').as('postProdutos')
    cy.intercept('GET', '**/produtos').as('getProdutos')
});

Cypress.Commands.add('esperarReqCadastroUsuario', () => {
    cy.wait('@postUsuarios')
    cy.wait('@postLogin')
    cy.wait('@getUsuarios')
    cy.wait('@getProdutos')
});

Cypress.Commands.add('esperarReqCadastroUsuarioAdm', () => {
    cy.wait('@postUsuarios')
    cy.wait('@postLogin')
    cy.wait('@getUsuarios')
});

Cypress.Commands.add('esperarReqCadastroProduto', () => {
    cy.wait('@getProdutos')
    cy.wait('@postProdutos')
});

Cypress.Commands.add('cadastrarUsuario', (nome, email, senha, adm = true) => {
    const cadastroDeUsuarioPage = new CadastroDeUsuarioPage()
    if (adm) {
        cy.interceptarReqCadastroUsuarioAdm()
    } else {
        cy.interceptarReqCadastroUsuario()
    }

    cadastroDeUsuarioPage.visitarPaginaDeCadastro()
    cadastroDeUsuarioPage.preencherFormularioDeCadastro(nome, email, senha, adm)
    cadastroDeUsuarioPage.submeterCadastro()
})

Cypress.Commands.add('irParaLoginDoCadastro', () => {
    const cadastroDeUsuarioPage = new CadastroDeUsuarioPage()
    cadastroDeUsuarioPage.irParaLogin()
})

Cypress.Commands.add('irParaCadastroUsuario', (nome, email, senha) => {
    const cadastroDeUsuarioPage = new CadastroDeUsuarioPage()

    cadastroDeUsuarioPage.visitarPaginaDeCadastro()
})

Cypress.Commands.add('fazerLogin', (email, senha) => {
    const loginPage = new LoginPage()
    cy.intercept('POST', '**/usuarios').as('postUsuarios')
    cy.intercept('POST', '**/login').as('postLogin')
    cy.intercept('GET', '**/usuarios').as('getUsuarios')
    cy.intercept('GET', '**/produtos').as('getProdutos')

    loginPage.preencherCredenciaisLogin(email, senha)
    loginPage.submeterLogin()
    cy.wait('@postUsuarios')
    cy.wait('@postLogin')
    cy.wait('@getUsuarios')
    cy.wait('@getProdutos')
})

Cypress.Commands.add('irParaCadastroDeProduto', () => {
    const home = new Home()

    home.cadastrarProdutoBotao()
})

Cypress.Commands.add('irParaHome', () => {
    const home = new Home()

    home.irparaHome()
})

Cypress.Commands.add('cadastrarProduto', (nome, preco, descricao, quantidade, imagem) => {
    const cadastroDeProdutosPage = new CadastroDeProdutosPage()
    cy.interceptarReqCadastroProduto()

    cadastroDeProdutosPage.preencherDescricao(descricao)
    cadastroDeProdutosPage.fazerUploadImagem(imagem)
    cadastroDeProdutosPage.preencherNome(nome)
    cadastroDeProdutosPage.preencherPreco(preco)
    cadastroDeProdutosPage.preencherQuantidade(quantidade)
    cadastroDeProdutosPage.submeterFormulario()
})

Cypress.Commands.add('cadastrar2Produtos', () => {
    const usuarioAdm = {
        nome: faker.person.fullName(),
        email: faker.internet.email(),
        senha: 'Teste123'
    }
    cy.fixture('produtos').then((produtos) => {
        const produtoBase = produtos[0]
        const produto = {
          ...produtoBase,
          nome: `${produtoBase.nome} - ${faker.string.alphanumeric(3)}`
        }
        const produto2 = {
          ...produtoBase,
          nome: `${produtoBase.nome} - ${faker.string.alphanumeric(3)}`
        }
    
        cy.cadastrarUsuario(usuarioAdm.nome, usuarioAdm.email, usuarioAdm.senha).then(() => {
          cy.esperarReqCadastroUsuarioAdm()
        })

        cy.irParaCadastroDeProduto()
        cy.cadastrarProduto(produto.nome, produto.preco, produto.descricao, produto.quantidade, produto.imagem).then(() => {
          cy.esperarReqCadastroProduto()
        })
        
        cy.irParaHome()
        cy.irParaCadastroDeProduto()
        cy.cadastrarProduto(produto2.nome, produto2.preco, produto2.descricao, produto2.quantidade, produto2.imagem).then(() => {
          cy.esperarReqCadastroProduto()
        })
        
        //logout
        cy.get('[data-testid="logout"]').click()
      })
    })