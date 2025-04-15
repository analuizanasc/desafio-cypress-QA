import { faker } from '@faker-js/faker'

describe('Lista de compras', () => {
    const usuario = {
        nome: faker.person.fullName(),
        email: faker.internet.email(),
        senha: 'Teste123'
    }

    it('deve add vários produtos na lista de compras', function () {
        cy.cadastrar2Produtos()
        cy.cadastrarUsuario(usuario.nome, usuario.email, usuario.senha, false)
        cy.esperarReqCadastroUsuario()
        cy.get('section > div').eq(1).find('[data-testid="adicionarNaLista"]').click()
        cy.get('[data-testid="paginaInicial"]').click()
        cy.get('section > div').eq(2).find('[data-testid="adicionarNaLista"]').click()

        cy.url().should('include', '/minhaListaDeProdutos')
        cy.get('.card-body').should('have.length', 2)
    });
});