export class CadastroDeUsuarioPage {
    visitarPaginaDeCadastro() {
      cy.visit('/cadastrarusuarios')
    }
  
    preencherFormularioDeCadastro(nome, email, senha, checkboxAdm = true) {
      cy.get('input[data-testid="nome"]').type(nome)
      cy.get('input[data-testid="email"]').type(email)
      cy.get('input[data-testid="password"]').type(senha, { log: false })

      if(checkboxAdm) {
        cy.get('input[data-testid="checkbox"]').check()
      }
    }  
  
    submeterCadastro() {
      cy.get('button[data-testid="cadastrar"]').click()
    }

    irParaLogin() {
      cy.get('[data-testid="entrar"]').click()
    }
  }