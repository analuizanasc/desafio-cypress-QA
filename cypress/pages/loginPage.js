export class LoginPage {
    visitarPaginaLogin() {
      cy.visit('/login')
    }
  
    preencherCredenciaisLogin(email, senha) {
      cy.get('input[data-testid="email"]').type(email)
      cy.get('input[data-testid="senha"]').type(senha, { log: false })
    }
  
    submeterLogin() {
      cy.get('button[data-testid="entrar"]').click()
    }
  }
  