# 🤝 Conexão Anjo

**Conexão Anjo** é um web aplicativo desenvolvido em **Next.js** com o propósito de conectar pessoas que precisam de ajuda com aquelas que desejam doar. O projeto é responsivo e foi especialmente otimizado para dispositivos móveis, com **ênfase na resolução 360x800**, garantindo acessibilidade e usabilidade.

A plataforma facilita o encontro entre doadores e necessitados, permitindo o cadastro de pedidos de ajuda, ofertas de doações e promovendo ações solidárias de forma simples, direta e segura.

---

## 🌐 Links

- 🔗 **Repositório GitHub**: [https://github.com/csclementino/conexao-anjo-vercell]
- 🚀 **Site (Vercel)**: [https://conexao-anjo-vercell.vercel.app/]
- 🎥 **Vídeo demonstrativo no YouTube**: [https://youtu.be/E8nyVyWrAwM]

---

## 👥 Participantes do projeto

- Arthur Ribeiro Algate  RM: 560109  Turma: 1TDSZ
- Carlos Santiago Clementino  RM: 561187
- Rafael Nonato  RM: 560634

---

## 📁 Estrutura do Projeto

```
/Projeto
│
├── public/                # Imagens, ícones e arquivos estáticos
│   ├── fonts/             # Contém todas as fontes utilizadas no projeto
├── src/
│   ├── app/               # Páginas da aplicação (rotas Next.js)
│   ├── components/        # Componentes reutilizáveis da interface          
│   ├── data/              # Informações a serem consultadas
├── package.json           # Dependências e scripts
└── README.md              # Documentação do projeto
```

---

## 📡 API - Endpoints

Base URL:  
`https://conexao-anjo-cdeabacdbngvghed.brazilsouth-01.azurewebsites.net`

| Método | Endpoint                                                  | Descrição                          |
|--------|-----------------------------------------------------------|------------------------------------|
| POST   | `/api/login-usuario`                                      | Efetua a validação de login        |
| POST   | `/api/cadastrar-usuario`                                  | Cadastra um novo usuário           |
| GET    | `/api/buscar-usuario/{id_login}`                          | Traz as informações do usuario     |

---

## 💻 Como Executar Localmente

1. Clone o repositório:

```bash
git clone [https://github.com/csclementino/conexao-anjo-vercell]
```

2. Instale as dependências:

```bash
npm install
```

3. Execute o projeto:

```bash
npm run dev
```

4. Acesse no navegador:

```
http://localhost:3000
```

---

## 🧪 Conta de Teste

Para facilitar os testes da aplicação, utilize a conta abaixo:

- **Email:** daniel.user@exemplo.com  
- **Senha:** user123

> Observação: Essa conta é apenas para fins de demonstração. Há integração com o cadastro caso queira testar a funcionalidade também!


---

## ✨ Tecnologias Utilizadas

- Next.js
- React
- Axios
- CSS Modules / Tailwind (se aplicável)
- API RESTful (Backend em Azure)

---

## 📲 Design Responsivo

O layout foi otimizado especialmente para smartphones com resolução **360x800**, garantindo boa legibilidade, navegação simples e uso prático em movimento.

---

> Desenvolvido com 💙 para aproximar quem precisa de ajuda de quem quer fazer o bem.
