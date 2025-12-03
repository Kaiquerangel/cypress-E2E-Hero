# 🧪 Casos de Teste – Cypress Heroes (cy.heroes)

## 📋 Visão Geral
O **cy.heroes** é uma aplicação para gerenciamento de heróis, permitindo criar, editar, excluir e listar personagens, além de atribuir poderes, preço de venda e quantidade de fãs.

**Objetivo:** Verificar se as funcionalidades principais operam conforme esperado (Caminho Feliz), validar o comportamento do sistema diante de entradas inválidas e analisar a responsividade da interface (UI/UX).

---

## 🚀 Casos de Teste Funcionais

| ID | Título do Caso de Teste | Pré-condições | Passos para Execução | Resultado Esperado | Status |
|:---:|:---|:---|:---|:---|:---:|
| **CT-001** | **Criar herói com sucesso e com um poder** | App aberto na tela de cadastro (Login realizado, se aplicável) | 1. Preencher Nome com "Pantera Negra"<br>2. Preencher Preço com "50"<br>3. Preencher Fãs com "90"<br>4. Selecionar poder "Super Força"<br>5. Clicar em "Salvar" | Mensagem de sucesso exibida e o herói "Pantera Negra" listado na tabela. | ⬜ |
| **CT-002** | **Editar herói existente** | Herói "Pantera Negra" já cadastrado na lista | 1. Localizar "Pantera Negra" na lista<br>2. Clicar no botão "Editar"<br>3. Alterar o campo Preço para "90"<br>4. Clicar em "Salvar" | O sistema deve atualizar o registro e exibir o novo preço na lista. | ⬜ |
| **CT-003** | **Excluir herói** | Herói "Pantera Negra" já cadastrado na lista | 1. Localizar "Pantera Negra" na lista<br>2. Clicar no botão "Excluir"<br>3. Confirmar a ação no modal/alerta | O herói deve ser removido da lista e não deve mais aparecer na busca. | ⬜ |
| **CT-004** | **Selecionar mais de um poder** | App aberto na tela de cadastro | 1. Preencher Nome com "Naruto"<br>2. Preencher Preço com "120"<br>3. Preencher Fãs com "80"<br>4. Selecionar múltiplos poderes (ex: "Voar", "Super Força", "Velocidade")<br>5. Clicar em "Salvar" | Herói criado com sucesso e todos os poderes selecionados devem estar visíveis nos detalhes. | ⬜ |
| **CT-005** | **Listar todos os heróis** | Pelo menos 1 herói cadastrado no sistema | 1. Acessar a página inicial (Dashboard/Lista) | A lista deve exibir todos os heróis cadastrados corretamente. | ⬜ |

---

## 📝 Observações
* **Ferramentas:** Os testes serão automatizados utilizando **Cypress**.

---