# 🧪 Desafio Cypress - QA

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Arquitetura do Projeto](#-arquitetura-do-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Como Usar](#como-usar)
- [Testes](#testes)
- [Contribuindo](#contribuindo)
- [Licença](#licença)
- [Autor](#autor)

## 📖 Sobre o Projeto

Este projeto tem como foco a automação de testes para a aplicação web e API da [ServeRest](https://serverest.dev/), utilizando o framework [Cypress](https://www.cypress.io/). Desenvolvido como parte de um processo seletivo para a posição de Quality Assurance (QA), com o objetivo de demonstrar habilidades práticas em testes automatizados. Serão avaliados os seguintes critérios:

- Adoção de boas práticas de desenvolvimento
- Qualidade na construção do código
- Aplicação de padrões de projeto
- Adequação e clareza das assertivas nos testes
- Escrita e organização dos cenários de teste
- Qualidade e clareza nos commits

## 🧱 Arquitetura do Projeto

A arquitetura do projeto segue o padrão Page Object Model (POM) com adaptações para melhor organização dos recursos, garantindo:
- **Manutenibilidade**: Separação clara entre lógica de teste e elementos da página
- **Reusabilidade**: Componentes compartilhados entre diferentes fluxos de teste
- **Rastreabilidade**: Organização clara das evidências de teste

```bash
├── cypress/
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

## 🛠️ Tecnologias Utilizadas

As seguintes ferramentas e tecnologias foram utilizadas no desenvolvimento do projeto:

- **[Cypress](https://www.cypress.io/)**: Framework de testes end-to-end para aplicações web.
- **JavaScript**: Linguagem de programação utilizada para escrever os testes.
- **Node.js**: Ambiente de execução para o JavaScript.
- **Allure Reports**: Ferramenta para geração de relatórios de testes.

## ⚙️ Pré-requisitos

Antes de iniciar, certifique-se de ter instalado em sua máquina:

- **[Node.js](https://nodejs.org/en/)**: Versão recomendada 14.x ou superior.
- **[npm](https://www.npmjs.com/)**: Gerenciador de pacotes do Node.js.
- **[Git](https://git-scm.com/)**: Para clonar o repositório.

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

## 🚀 Como Usar

Após a instalação das dependências, você pode executar os testes utilizando o Cypress. Para abrir a interface gráfica do Cypress, utilize:

```bash
npx cypress open
```

## 🧪 Testes

Os testes foram desenvolvidos utilizando o Cypress e estão localizados no diretório `cypress/e2e`. Eles cobrem alguns fluxos da aplicação - UI e API.

Para gerar relatórios dos testes com o Allure, siga os passos abaixo:

1. Execute os testes e gere os resultados:

    ```bash
    npm run test:allure
    ```

2. Gere o relatório Allure:

    ```bash
    npm run allure:generate
    ```
3. Abra o relatório em seu navegador:

    ```bash
    npm run allure:open
    ```

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

## 📄 Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo [LICENSE](LICENSE) para obter mais informações.

## 👩‍💻 Autor

- **Ana Luiza Nascimento**  
  [LinkedIn](https://www.linkedin.com/in/analuizanasc/) | [GitHub](https://github.com/analuizanasc)
