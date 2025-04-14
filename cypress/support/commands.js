import { CadastroDeUsuarioPage } from '../pages/cadastroDeUsuarioPage'
import { LoginPage } from '../pages/loginPage'
import { Home } from '../pages/home'
import { CadastroDeProdutosPage } from '../pages/cadastroDeProdutosPage'

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

    cadastroDeProdutosPage.preencherDescricao(descricao)
    cadastroDeProdutosPage.fazerUploadImagem(imagem)
    cadastroDeProdutosPage.preencherNome(nome)
    cadastroDeProdutosPage.preencherPreco(preco)
    cadastroDeProdutosPage.preencherQuantidade(quantidade)
    cadastroDeProdutosPage.submeterFormulario()
})