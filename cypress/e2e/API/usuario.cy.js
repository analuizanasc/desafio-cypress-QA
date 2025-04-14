import { faker } from '@faker-js/faker'

function gerarUsuario() {
    return {
        nome: faker.person.fullName(),
        email: faker.internet.email(),
        senha: 'Teste123'
    }
}

describe('Usuário - API', () => {

    it('deve cadastrar um usuário com sucesso', () => {
        const usuario = gerarUsuario()

        cy.criarUsuarioAPI(usuario.nome, usuario.email, usuario.senha, false).then((res) => {
            const atributosBody = ['message', '_id']

            cy.validarHeadersSeguros(res.headers)
            expect(res.status).to.eq(201)
            expect(res.body.message).to.equal('Cadastro realizado com sucesso')
            atributosBody.forEach((atributo) => {
                expect(res.body).to.have.property(atributo)
                    .and.to.be.a('string')
                    .and.not.be.empty
            })
        })
    })

    it('deve fazer login com sucesso', () => {
        const usuario = gerarUsuario()

        cy.criarUsuarioAPI(usuario.nome, usuario.email, usuario.senha)
        cy.loginAPI(usuario.email, usuario.senha)

        cy.get('@loginAPIResponse').then((res) => {
            expect(res.status).to.eq(200);
            expect(res.body).to.have.property('message', 'Login realizado com sucesso');
            expect(res.body).to.have.property('authorization')
                .and.to.be.a('string');
        })
    })
})