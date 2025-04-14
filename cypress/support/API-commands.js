Cypress.Commands.add('criarUsuarioAPI', (nome, email, password, administrador = true) => {
    return cy.request({
        method: 'POST',
        url: 'https://serverest.dev/usuarios',
        headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: {
            nome,
            email,
            password,
            administrador: administrador.toString(),
        },
        failOnStatusCode: false,
    })
})

Cypress.Commands.add('loginAPI', (email, password) => {
    cy.request({
        method: 'POST',
        url: 'https://serverest.dev/login',
        headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: {
            email,
            password,
        },
        failOnStatusCode: false
    }).as('loginAPIResponse')
})

Cypress.Commands.add('validarHeadersSeguros', (headers) => {
    expect(headers).to.have.property('content-type', 'application/json; charset=utf-8')
    expect(headers).to.have.property('x-frame-options', 'SAMEORIGIN')
    expect(headers).to.have.property('x-xss-protection', '1; mode=block')
    expect(headers).to.have.property('x-content-type-options', 'nosniff')
})
