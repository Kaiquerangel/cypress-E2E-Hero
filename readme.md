# 🦸‍♂️ Cypress Heroes - Automação de Testes (E2E)

Este projeto contém a resolução do exercício prático do módulo de Automação de Testes com Cypress. O objetivo foi criar testes end-to-end (E2E) para a aplicação *Cypress Heroes*

## 🛠️ Tecnologias Utilizadas

* **Cypress:** Automação de testes.
* **JavaScript:** Linguagem utilizada nos scripts.
* **Node.js & NPM:** 

---

## 📋 Cenários Automatizados

O projeto cobre as operações fundamentais (CRUD) da aplicação:

| Funcionalidade | Descrição do Teste | Status |
| :--- | :--- | :---: |
| **Login** | Autenticação via `beforeEach` antes de todos os testes. | ✅ |
| **Create (Criar)** | Cadastro de um novo herói (ex: Goku) com upload de imagem e múltiplos poderes. | ✅ |
| **Read (Listar)** | Validação da listagem de heróis na Dashboard. | ✅ |
| **Update (Editar)** | Edição de dados (Preço) de um herói existente. | ✅ |
| **Delete (Excluir)** | Remoção de um herói com confirmação em modal. | ✅ |

---

## 🚀 Como Executar o Projeto

### 1. Pré-requisitos
 **Node.js** e **Git**

### 2. Configuração do Ambiente (Aplicação)
Siga os passos abaixo para rodar a aplicação *Cypress Heroes* localmente:

```bash
# Clone o repositório
git clone [https://github.com/cypress-io/cypress-heroes.git](https://github.com/cypress-io/cypress-heroes.git)

# Entre na pasta
cd cypress-heroes

# Instale as dependências
npm install

# Configure o banco de dados
npm run setup

# Inicie a aplicação (Front e Back)
npm run dev# cypress-E2E-Hero
