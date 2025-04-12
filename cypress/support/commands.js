import { CadastroDeUsuarioPage } from '../pages/cadastroDeUsuarioPage'
import { LoginPage } from '../pages/loginPage'
import { Home } from '../pages/home'
import { CadastroDeProdutosPage } from '../pages/cadastroDeProdutosPage'

Cypress.Commands.add('cadastrarUsuario', (nome, email, senha, adm) => {
    const cadastroDeUsuarioPage = new CadastroDeUsuarioPage()

    cadastroDeUsuarioPage.visitarPaginaDeCadastro()
    cadastroDeUsuarioPage.preencherFormularioDeCadastro(nome, email, senha)
    //cadastroDeUsuarioPage.selecionarPerfilAdmin()
    cadastroDeUsuarioPage.submeterCadastro()
    cadastroDeUsuarioPage.irParaLogin()
})

Cypress.Commands.add('fazerLogin', (email, senha) => {
    const loginPage = new LoginPage()

    loginPage.preencherCredenciaisLogin(email, senha)
    loginPage.submeterLogin()
})

Cypress.Commands.add('irParaCadastroDeProduto', () => {
    const home = new Home()

    home.cadastrarProdutoBotao()
})

Cypress.Commands.add('cadastrarProduto', (nome, preco, descricao, quantidade, imagem) => {
    const cadastroDeProdutosPage = new CadastroDeProdutosPage()

    cadastroDeProdutosPage.preencherNome(nome)
    cadastroDeProdutosPage.preencherPreco(preco)
    cadastroDeProdutosPage.preencherDescricao(descricao)
    cadastroDeProdutosPage.fazerUploadImagem(imagem)
    cadastroDeProdutosPage.preencherQuantidade(quantidade)
    cadastroDeProdutosPage.submeterFormulario()

})