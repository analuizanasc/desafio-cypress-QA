import { CadastroPage } from '../../pages/cadastroPage'
import { faker } from '@faker-js/faker'


describe('Fluxo de compra completo no Serverest', () => {
  const cadastroPage = new CadastroPage()

  const usuario = {
    nome: faker.person.fullName(),
    email: faker.internet.email(),
    senha: '123456'
  }

  it('deve cadastrar, logar e realizar uma compra com sucesso', () => {
    // Cadastro
    cadastroPage.visitarPaginaDeCadastro()
    cadastroPage.preencherFormularioDeCadastro(usuario.nome, usuario.email, usuario.senha)
    cadastroPage.selecionarPerfilAdmin()
    cadastroPage.submeterCadastro()
    cy.contains('Cadastro realizado com sucesso').should('be.visible')

  })
})
