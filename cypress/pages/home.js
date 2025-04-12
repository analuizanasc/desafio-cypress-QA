export class Home {
    cadastrarProdutoBotao() {
        cy.get('[data-testid="cadastrarProdutos"]').click()
    }
}