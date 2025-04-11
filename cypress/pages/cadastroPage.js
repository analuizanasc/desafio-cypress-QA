export class CadastroPage {
    visitarPaginaDeCadastro() {
      cy.visit('/cadastrarusuarios')
    }
  
    preencherFormularioDeCadastro(nome, email, senha) {
      cy.get('input[data-testid="nome"]').type(nome)
      cy.get('input[data-testid="email"]').type(email)
      cy.get('input[data-testid="password"]').type(senha)
    }
  
    selecionarPerfilAdmin() {
      cy.get('input[data-testid="checkbox"]').check()
    }
  
    submeterCadastro() {
      cy.get('button[data-testid="cadastrar"]').click()
    }
  
/*     validarCadastroComSucesso() {
      
    } */
  }