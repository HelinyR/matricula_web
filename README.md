# **matricula_web**

Frontend web para o sistema M4tr1cul4: gerenciamento de matrículas, metas, desempenho de atendentes e auditoria de acessos para universidades.

---

##  ****Visão do Projeto****

O M4tr1cul4 é uma solução web para automatizar e organizar o processo de matrícula de candidatos, acompanhamento de desempenho de atendentes, cálculo de comissões e geração de relatórios para supervisores. O frontend deste repositório consome a [API RESTful do M4tr1cul4](__https://github.com/HelinyR/matricula-web-API__) e oferece uma interface moderna e responsiva para os papéis de atendente e supervisor.

---

##  ****Sumário****
- [Visão Geral](__#visão-do-projeto__)
- [Como rodar o projeto](__#como-rodar-o-projeto__)
- [Configuração](__#configuração__)
- [Estrutura do projeto](__#estrutura-do-projeto__)
- [Papéis e responsabilidades](__#papéis-e-responsabilidades__)
- [Funcionalidades principais](__#funcionalidades-principais__)
- [Observações](__#observações__)

---

##  ****Como rodar o projeto****

1. ****Clone o repositório:****
   ```sh
   git clone https://github.com/HelinyR/matricula_web.git
   cd matricula_web
   ```

2. ****Configure a URL da API:****
   - No arquivo `js/config.js`, ajuste a constante `API_BASE_URL` para o endereço da sua API backend (por padrão: `http://localhost:3000`).

3. ****Abra o frontend:****
   - Recomenda-se servir os arquivos com um servidor local (ex: [Live Server](__https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer__) no VSCode) ou qualquer servidor estático.
   - Acesse `loginAtendente.html` ou `loginSupervisor.html` para iniciar a autenticação.

---

##  ****Configuração****

- O frontend depende da API backend do M4tr1cul4 para funcionar corretamente.
- O login gera um token JWT salvo no `localStorage`, utilizado para autenticação nas rotas protegidas.
- O tipo de usuário é validado em cada dashboard (atendente ou supervisor).

---

##  ****Estrutura do projeto****

```
matricula_web/
│
├── index.html
├── loginAtendente.html
├── loginSupervisor.html
│
├── js/
│   ├── config.js
│   ├── api.js
│   ├── auth.js
│   ├── dashboardAtendente.js
│   ├── dashboardSupervisor.js
│   └── relatorios.js
│
├── css/
│   ├── styles.css
│   └── dashboard.css
│
└── img/
    ├── logo.png
    └── user.png
```

- `index.html`: Página inicial do sistema.
- `loginAtendente.html`/`loginSupervisor.html`: Telas de login para atendentes e supervisores.
- `js/`: Pasta contendo os arquivos JavaScript responsáveis pela lógica do frontend.
- `css/`: Pasta com os arquivos de estilo CSS.
- `img/`: Imagens utilizadas no sistema.

---

##  ****Papéis e responsabilidades****

- ****Atendente:****
  - Realiza o login e é redirecionado para o dashboardAtendente.
  - Acessa informações e relatórios pertinentes às suas atividades.
  - Deve cumprir metas de atendimento e matrículas.

- ****Supervisor:****
  - Realiza o login e é redirecionado para o dashboardSupervisor.
  - Acompanha o desempenho dos atendentes sob sua supervisão.
  - Recebe relatórios gerenciais e pode ajustar metas.

---

##  ****Funcionalidades principais****

- ****Autenticação:****
  - Login e logout para atendentes e supervisores.
  - Armazenamento seguro do token JWT.

- ****Dashboard:****
  - Visão geral das atividades (matrículas, atendimentos, metas).
  - Gráficos e relatórios de desempenho.

- ****Gestão de Metas:****
  - Definição e acompanhamento de metas individuais e por equipe.
  - Alertas para metas não atingidas.

- ****Relatórios:****
  - Geração de relatórios detalhados por período.
  - Exportação de relatórios em formatos comuns (PDF, CSV).

---

##  ****Observações****

- Este repositório é apenas uma parte do sistema M4tr1cul4. Para o funcionamento completo, é necessário ter a API backend devidamente configurada e em funcionamento.
- A documentação da API pode ser encontrada no repositório da [API RESTful do M4tr1cul4](__https://github.com/HelinyR/matricula-web-API__).
- Qualquer dúvida ou problema, favor consultar a documentação da API ou entrar em contato com o suporte técnico.

---

##  ****Tecnologias utilizadas****

- HTML5
- CSS3
- JavaScript (ES6+)
- [Axios](__https://github.com/axios/axios__) para requisições HTTP
- [Chart.js](__https://www.chartjs.org/__) para gráficos
- [jQuery](__https://jquery.com/__) (opcional, se utilizado em alguma parte do projeto)

---

##  ****Contato****

- ****Desenvolvedor:**** Heliny Ramos Oliveira
- ****E-mail:**** oliveira.heliny@gmail.com
- ****LinkedIn:**** www.linkedin.com/in/heliny-oliveira-2639782ba

---
