# 🧪 Desafio Cypress - QA

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Arquitetura do Projeto](#arquitetura-do-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalacao)
- [Como Usar](#como-usar)
- [Testes](#testes)
- [GitHub Action](#github-action)
- [Contribuindo](#contribuindo)
- [Licença](#licenca)
- [Autor](#autor)

<a id="sobre-o-projeto"></a>  
## 📖 Sobre o Projeto

Este projeto tem como foco a automação de testes para a aplicação web e API da [ServeRest](https://serverest.dev/), utilizando o framework [Cypress](https://www.cypress.io/). Desenvolvido como parte de um processo seletivo para a posição de Quality Assurance (QA), com o objetivo de demonstrar habilidades práticas em testes automatizados. Serão avaliados os seguintes critérios:

- Adoção de boas práticas de desenvolvimento
- Qualidade na construção do código
- Aplicação de padrões de projeto
- Adequação e clareza das assertivas nos testes
- Escrita e organização dos cenários de teste
- Qualidade e clareza nos commits

<a id="arquitetura-do-projeto"></a>
## 🧱 Arquitetura do Projeto

A arquitetura do projeto segue o padrão Page Object Model (POM) com adaptações para melhor organização dos recursos, garantindo:
- **Manutenibilidade**: Separação clara entre lógica de teste e elementos da página
- **Reusabilidade**: Componentes compartilhados entre diferentes fluxos de teste
- **Rastreabilidade**: Organização clara das evidências de teste

```bash
├── github/                  # Pasta destinada a configuração de uma CI
├── cypress/                 # Arquivos relacionado ao Cypress
│   ├── downloads/           # Arquivos baixados durante os testes
│   ├── e2e/                 # Arquivos de teste
│   │   ├── API/             # Testes da API
│   │   ├── UI/              # Testes da User Interface (UI)
│   ├── evidencias/          # Evidencias visuais dos testes que falharam (imagens)
│   ├── fixtures/            # Dados estáticos para mock
│   ├── pages/               # Page Objects
│   ├── support/             # Comandos personalizados e configurações
│   │   ├── API-commands.js  # Comandos customizados do Cypress destinados aos testes da API
│   │   ├── commands.js      # Comandos customizados do Cypress estinados aos testes da UI
│   │   └── e2e.js           # Configurações globais para os testes
│   └── videos               # Evidencias visuais dos testes (vídeos)
├── cypress.config.js        # Configuração principal do Cypress
└── README.md                # Este arquivo
```

<a id="tecnologias-utilizadas"></a>
## 🛠️ Tecnologias Utilizadas

As seguintes ferramentas e tecnologias foram utilizadas no desenvolvimento do projeto:

- **[Cypress](https://www.cypress.io/)**: Framework de testes end-to-end para aplicações web.
- **JavaScript**: Linguagem de programação utilizada para escrever os testes.
- **Node.js**: Ambiente de execução para o JavaScript.
- **Allure Reports**: Ferramenta para geração de relatórios de testes.
- **[GitHub Actions](https://docs.github.com/pt/actions)**: Plataforma de Integração Contínua (CI) usada para automatizar a execução dos testes.

<a id="pré-requisitos"></a>
## ⚙️ Pré-requisitos

Antes de iniciar, certifique-se de ter instalado em sua máquina:

- **[Node.js](https://nodejs.org/en/)**: Versão recomendada 14.x ou superior.
- **[npm](https://www.npmjs.com/)**: Gerenciador de pacotes do Node.js.
- **[Git](https://git-scm.com/)**: Para clonar o repositório.

<a id="instalacao"></a>
## 🧰 Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/analuizanasc/desafio-cypress-QA.git
   ```

2. Acesse o diretório do projeto:

    ```bash
    cd desafio-cypress-QA
    ```

3. Instale as dependências:

    ```bash
    npm install
    ```
    
<a id="como-usar"></a>
## 🚀 Como Usar

Após a instalação das dependências, você pode executar os testes utilizando o Cypress. Para abrir a interface gráfica do Cypress, utilize:

```bash
npx cypress open
```
Caso deseje rodar pelo terminal, então utiliza:

```bash
npm run test
```
Dessa forma, ao final poderá ver seus testes da seguinte forma:

![npm run test](https://github.com/user-attachments/assets/cf5e8af7-3fe9-4d6b-a025-346a1639e46f)

<a id="testes"></a>
## 🧪 Testes

Os testes foram desenvolvidos utilizando o Cypress e estão localizados no diretório `cypress/e2e`. Eles cobrem alguns fluxos da aplicação - UI e API. No diretório `cypress/videos` é possível encontrar os videos dos testes sendo executados, como abaixo:

https://github.com/user-attachments/assets/1398dffa-6ce5-44d2-ba3e-0a1938b43e47

Durante a execução dos testes também foi identificado um possível Bug. O projeto está configurado para evidenciar sempre que o teste falhar, sendo possível encontrar a evidência no diretório `cypress/evidencias`, como exemplificado abaixo:

![Cadastro de produto -- deve cadastrar produto após correção de nome de produto existente (failed)](https://github.com/user-attachments/assets/a4d96b51-9fbe-4aa9-af8d-d08b4674a77a)

Para gerar relatórios dos testes com o Allure, siga os passos abaixo:

- ANTES DO TESTE:
1. limpe a pasta allure-results:
   
    ```bash
    npm run allure:pretest
    
- DEPOIS DO TESTE:
2. Gere os resultados:

    ```bash
    npm run test:allure
    ```

3. Gere o relatório Allure:

    ```bash
    npm run allure:generate
    ```
4. Abra o relatório em seu navegador:

    ```bash
    npm run allure:open
    ```

<a id="github-action"></a>
## ⚙️ GitHub Actions - Integração Contínua (CI)

Este repositório utiliza **GitHub Actions** para automatizar a execução dos testes E2E com **Cypress** a cada push ou pull request na branch `main`.
O workflow está localizado em `.github/workflows/` e realiza as seguintes etapas:

- Faz o checkout do repositório.
- Configura o ambiente com Node.js.
- Instala as dependências do projeto.
- Executa os testes automatizados com Cypress.

<a id="contribuindo"></a>
## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Se você deseja contribuir com este projeto, siga os passos abaixo:

1. Fork o projeto

2. Crie uma branch para sua feature:

    ```bash
    git checkout -b minha-nova-feature
    ```
3. Faça suas alterações e commit:

    ```bash
    git commit -m 'Adicionando nova feature'
    ```

4. Envie para o branch original:

    ```bash
    git push origin minha-nova-feature
    ```
5. Abra um Pull Request

<a id="licenca"></a>
## 📄 Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo [LICENSE](LICENSE) para obter mais informações.

<a id="autor"></a>
## 👩‍💻 Autor

- **Ana Luiza Nascimento**  
  [LinkedIn](https://www.linkedin.com/in/analuizanasc/) | [GitHub](https://github.com/analuizanasc)
