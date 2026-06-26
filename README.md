<div align="center">

# 🛡️ ShieldAI

### Segurança inteligente para APIs de IA

Landing page de produto desenvolvida com **HTML, CSS e JavaScript puro** — dark mode moderno com gradientes vibrantes, totalmente responsiva.

[🔗 Ver site ao vivo](https://felipe-moya.github.io/ShieldAI/)

</div>

---

> ⚠️ **Projeto fictício.** O ShieldAI **não é um produto real** — foi criado como peça de portfólio para demonstrar habilidades de desenvolvimento frontend (design, responsividade, animações e organização de código). Nenhum serviço, preço ou funcionalidade descrita existe de fato.

---

## 📖 Sobre o projeto

O **ShieldAI** simula a landing page de uma plataforma SaaS de segurança para APIs de Inteligência Artificial. A proposta do produto fictício é monitorar, filtrar e bloquear em tempo real prompts maliciosos, tentativas de *jailbreak* e acessos não autorizados a modelos de linguagem.

O tema foi escolhido por unir duas áreas: **segurança da informação** e **desenvolvimento web** — refletindo meu perfil acadêmico e profissional.

---

## ✨ Funcionalidades

- 🎨 **Design dark moderno** com gradientes (ciano → roxo → pink)
- 📱 **Totalmente responsivo** — desktop, tablet e mobile
- 🍔 **Menu mobile fullscreen** com animação
- 💻 **Terminal animado** no hero simulando logs de segurança em tempo real
- 🎬 **Animações ao scroll** com `IntersectionObserver`
- 📝 **Formulário de contato** com validação em tempo real
- 🧭 **Navegação suave** entre seções (smooth scroll) sem poluir a URL
- ⚡ **Performance** — sem frameworks, apenas tecnologias nativas

---

## 🛠️ Tecnologias

| Tecnologia | Uso |
|------------|-----|
| **HTML5** | Estrutura semântica |
| **CSS3** | Estilização, grid, flexbox, animações, variáveis CSS |
| **JavaScript (ES Modules)** | Interatividade, validação, animações |
| **Google Fonts** | Syne, DM Sans, JetBrains Mono |

Sem bibliotecas ou frameworks externos. Tudo construído do zero.

---

## 📂 Estrutura do projeto

```
ShieldAI/
├── index.html
└── assets/
    ├── css/
    │   ├── reset.css         # Reset de estilos
    │   ├── variables.css     # Design tokens (cores, fontes, espaçamentos)
    │   ├── global.css        # Estilos globais e classes utilitárias
    │   ├── animations.css    # Animações e transições
    │   ├── nav.css           # Navbar + menu mobile
    │   ├── hero.css          # Seção hero + terminal
    │   ├── features.css      # Seção de recursos
    │   ├── pricing.css       # Seção de preços
    │   ├── form.css          # Formulário de contato
    │   └── footer.css        # Rodapé
    ├── js/
    │   ├── main.js           # Ponto de entrada
    │   ├── animations.js     # Animações ao scroll
    │   └── components/       # Lógica de cada seção
    │       ├── navbar.js
    │       ├── hero.js
    │       ├── features.js
    │       ├── pricing.js
    │       ├── form.js
    │       └── footer.js
    └── images/               # Ícones e logo
```

A **arquitetura modular** separa cada seção em seu próprio arquivo CSS e JS, facilitando a manutenção e a leitura do código.

---

## 🚀 Como executar localmente

Como o projeto utiliza **ES Modules** (`import`/`export`), ele precisa ser servido por um servidor local — não funciona abrindo o arquivo diretamente no navegador.

**Opção 1 — Live Server (VS Code):**
1. Instale a extensão **Live Server**
2. Clique com o botão direito no `index.html`
3. Selecione **"Open with Live Server"**

**Opção 2 — Python:**
```bash
# Na pasta do projeto
python -m http.server 8000
```
Depois acesse `http://localhost:8000`

---

## 📱 Seções da página

1. **Hero** — chamada principal com terminal animado e estatísticas
2. **Recursos** — 5 pilares de segurança do produto
3. **Preços** — 3 planos (Starter, Pro, Enterprise)
4. **Contato** — formulário com validação
5. **Footer** — links e informações

---

## 👤 Autor

**Felipe Moya Figueiredo**

Estudante de Segurança da Informação (Fatec São Caetano do Sul) e desenvolvedor web com foco em segurança.

- 🌐 [Portfólio](https://felipe-moya.github.io/portfolio/)
- 💼 [GitHub](https://github.com/Felipe-Moya)

---

<div align="center">

⭐ Se você gostou deste projeto, considere deixar uma estrela!

</div>
