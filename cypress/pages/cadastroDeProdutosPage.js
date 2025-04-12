export class CadastroDeProdutosPage {
    visitarPaginaCadastroDeProdutos() {
        cy.visit('/admin/cadastrarprodutos')
    }

    preencherNome(nome) {
        cy.get('input[data-testid="nome"]').type(nome);
    }

    preencherPreco(preco) {
        cy.get('input[data-testid="preco"]').type(preco);
    }

    preencherDescricao(descricao) {
        cy.get('textarea[data-testid="descricao"]').type(descricao);
    }

    preencherQuantidade(quantidade) {
        cy.get('input[data-testid="quantity"]').type(quantidade);
    }

    fazerUploadImagem(imagem) {
        cy.get('input[type="file"]').selectFile(`cypress/fixtures/${imagem}`);
    }

    submeterFormulario() {
        cy.get('button[data-testid="cadastarProdutos"]').click();
    }

}