export class Home {
    cadastrarProdutoBotao() {
        cy.get('[data-testid="cadastrarProdutos"]').click()
    }

    irparaHome() {
        cy.visit('https://front.serverest.dev/admin/home')
    }
}