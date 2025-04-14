import { faker } from '@faker-js/faker'

function gerarUsuario() {
    return {
        nome: faker.person.fullName(),
        email: faker.internet.email(),
        senha: 'Teste123'
    }
}

describe('Cadastro de usuário', () => {
    beforeEach(() => {
        cy.irParaCadastroUsuario()
    });

    it('deve estar na tela de cadastro', () => {
        cy.url().should('include', '/cadastrarusuarios')
    });

    it('deve cadastrar usuário Adm com sucesso', () => {
        const usuario = gerarUsuario()

        cy.cadastrarUsuario(usuario.nome, usuario.email, usuario.senha)

        cy.get('.alert')
            .should('be.visible')
            .invoke('text')
            .should('include', 'Cadastro realizado com sucesso')
    });

    it('deve cadastrar usuário com sucesso', () => {
        const usuario = gerarUsuario()

        cy.cadastrarUsuario(usuario.nome, usuario.email, usuario.senha, false)

        cy.get('.alert')
            .should('be.visible')
            .invoke('text')
            .should('include', 'Cadastro realizado com sucesso')
    });

    it('deve cadastrar usuário com mesmos dados', () => {
        const usuario = gerarUsuario()

        cy.cadastrarUsuario(usuario.nome, usuario.email, usuario.senha)
        cy.esperarReqCadastroUsuarioAdm()
        cy.irParaCadastroUsuario()
        cy.cadastrarUsuario(usuario.nome, usuario.email, usuario.senha)

        cy.get('.alert')
            .should('be.visible')
            .invoke('text')
            .should('include', 'Este email já está sendo usado')
    });

    it('deve cadastrar usuário sem email', () => {
        const usuario = gerarUsuario()
        const email = ' '

        cy.cadastrarUsuario(usuario.nome, email, usuario.senha)

        cy.get('.alert')
            .should('be.visible')
            .invoke('text')
            .should('include', 'Email é obrigatório')
    })

    it('deve cadastrar usuário sem nome', () => {
        const usuario = gerarUsuario()
        const nome = ' '

        cy.cadastrarUsuario(nome, usuario.email, usuario.senha)

        cy.get('.alert')
            .should('be.visible')
            .invoke('text')
            .should('include', 'Cadastro realizado com sucesso')
    })

    it('deve direcionar usuário cadastrado para Home', () => {
        const usuario = gerarUsuario()
        cy.interceptarReqCadastroUsuario()

        cy.cadastrarUsuario(usuario.nome, usuario.email, usuario.senha, false)
        cy.esperarReqCadastroUsuario()

        cy.url().should('include', '/home')
    })

    it('deve direcionar usuário Adm cadastrado para Home', () => {
        const usuario = gerarUsuario()
        cy.interceptarReqCadastroUsuario()

        cy.cadastrarUsuario(usuario.nome, usuario.email, usuario.senha)
        cy.esperarReqCadastroUsuarioAdm()

        cy.url().should('include', '/home')
    })
});