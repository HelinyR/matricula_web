# 📘 M4tr1cul4 - API de Gerenciamento de Matrículas

Este projeto tem como objetivo facilitar o gerenciamento de matrículas, supervisores, atendentes e candidatos em uma instituição de ensino. A API fornece endpoints para login com autenticação, além de preparar a base para funcionalidades como relatórios e indicadores de desempenho.

## ✅ Funcionalidades Implementadas

- Login de usuários (supervisor/atendente) com email e senha
- Senhas criptografadas com `bcrypt`
- Geração de token de autenticação com `JWT`
- Estrutura básica para gerenciamento de usuários (CRUD em desenvolvimento)
- Conexão com banco de dados MySQL (Railway)

## 🛠️ Tecnologias Utilizadas

- **Node.js** com **Express**
- **MySQL2** para conexão com banco de dados
- **bcrypt** para criptografia de senha
- **jsonwebtoken (JWT)** para autenticação
- **HTML/CSS/JS puro** para o frontend de login

## ▶️ Como Executar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/m4tr1cul4.git
   ```/

2. Acesse a pasta do projeto:
   ```bash
   cd m4tr1cul4
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Execute o servidor:
   ```bash
   node src/server.js
   ```

5. Abra o `public/login.html` no navegador para testar a tela de login.

## 📂 Estrutura Resumida

```
m4tr1cul4/
├── public/          # Frontend (formulário de login)
├── src/             # Backend (API)
│   ├── db.js        # Conexão com banco MySQL
│   └── server.js    # Servidor Express
└── package.json     # Dependências do projeto
```

## 👤 Autor

Desenvolvido por HelinyR e benevds

---
