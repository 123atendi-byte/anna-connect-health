# PROJECT STATUS - Anna Connect Health

> Última atualização: 15 de outubro de 2025

## Índice

- [Status Atual do Projeto](#status-atual-do-projeto)
- [Estrutura do Código](#estrutura-do-código)
- [Stack Tecnológica](#stack-tecnológica)
- [Páginas Implementadas](#páginas-implementadas)
- [Funcionalidades Principais](#funcionalidades-principais)
- [Últimas Mudanças](#últimas-mudanças)
- [Como Rodar Localmente](#como-rodar-localmente)
- [Como Fazer Deploy](#como-fazer-deploy)
- [Próximos Passos](#próximos-passos)
- [Links Importantes](#links-importantes)
- [Configurações Importantes](#configurações-importantes)

---

## Status Atual do Projeto

**Anna Connect Health** é uma landing page institucional totalmente funcional para apresentar a Anna, uma assistente de IA para atendimento médico desenvolvida pela 123atendi.

### O que está funcionando:
- ✅ Landing page completa e responsiva
- ✅ Sistema de navegação com navbar
- ✅ Páginas legais (Termos de Uso e Políticas de Privacidade)
- ✅ Formulário de contato funcional
- ✅ Animações e interações com Framer Motion
- ✅ Integração com WhatsApp para conversão
- ✅ Facebook Pixel configurado para rastreamento
- ✅ Build Docker otimizado (multi-stage)
- ✅ CI/CD com GitHub Actions
- ✅ Deploy automatizado via Docker Swarm + Traefik
- ✅ HTTPS configurado com Let's Encrypt
- ✅ Site em produção: [anna.123atendi.com.br](https://anna.123atendi.com.br)

### Status do Git:
- Branch: `main`
- Working tree: limpo
- Sincronizado com remote: ✅

---

## Estrutura do Código

```
anna-connect-health/
├── .github/
│   └── workflows/
│       └── docker-build.yml          # CI/CD pipeline
├── src/
│   ├── App.tsx                       # Configuração principal (Router, QueryClient)
│   ├── main.tsx                      # Entry point
│   ├── pages/                        # Páginas/rotas
│   │   ├── Index.tsx                 # Landing page principal
│   │   ├── FormularioContato.tsx     # Formulário de contato
│   │   ├── TermosDeUso.tsx           # Termos de uso
│   │   ├── PoliticasPrivacidade.tsx  # Política de privacidade
│   │   └── NotFound.tsx              # Página 404
│   ├── components/                   # Componentes customizados
│   │   ├── Navbar.tsx                # Navegação principal
│   │   ├── TypewriterText.tsx        # Efeito de texto digitado
│   │   ├── FloatingElements.tsx      # Elementos flutuantes animados
│   │   └── ui/                       # Componentes shadcn/ui (gerados)
│   ├── hooks/                        # React hooks customizados
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   ├── lib/                          # Utilitários
│   │   └── utils.ts
│   ├── assets/                       # Imagens e recursos estáticos
│   └── index.css                     # Estilos globais e variáveis CSS
├── Dockerfile                        # Multi-stage build (Node + Nginx)
├── docker-compose.yml                # Configuração Docker Swarm
├── package.json                      # Dependências e scripts
├── vite.config.ts                    # Configuração Vite
├── tsconfig.json                     # Configuração TypeScript
├── tailwind.config.ts                # Configuração Tailwind
├── README.md                         # Documentação básica
└── CLAUDE.md                         # Orientações para Claude Code
```

### Convenções de Código:

- **Path alias**: `@/` aponta para `src/` (ex: `import { Button } from "@/components/ui/button"`)
- **Componentes shadcn/ui**: Não editar diretamente (em `src/components/ui/`)
- **TypeScript**: Configuração permissiva para prototipagem rápida
- **Estilos**: Tailwind CSS com variáveis CSS customizadas
- **Animações**: Framer Motion para transições e interações

---

## Stack Tecnológica

### Frontend:
- **React 18** - Biblioteca UI
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e dev server (super rápido)
- **React Router DOM v6** - Roteamento client-side

### UI/UX:
- **Tailwind CSS** - Framework de estilos utilitários
- **shadcn/ui** - Componentes UI baseados em Radix UI
- **Framer Motion** - Animações e transições
- **Lucide React** - Ícones

### Formulários e Validação:
- **React Hook Form** - Gerenciamento de formulários
- **Zod** - Schema validation

### Estado e Dados:
- **TanStack Query (React Query)** - Gerenciamento de estado assíncrono
- **next-themes** - Suporte a dark mode (preparado mas não ativo)

### Analytics:
- **React Facebook Pixel** - Rastreamento de conversões

### DevOps:
- **Docker** - Containerização (multi-stage build)
- **Nginx Alpine** - Web server para produção
- **GitHub Actions** - CI/CD pipeline
- **Docker Swarm** - Orquestração de containers
- **Traefik** - Reverse proxy e gerenciamento SSL

---

## Páginas Implementadas

| Rota | Arquivo | Descrição |
|------|---------|-----------|
| `/` | `Index.tsx` | Landing page principal com todas as seções |
| `/formulario-contato` | `FormularioContato.tsx` | Formulário de contato |
| `/termos-de-uso` | `TermosDeUso.tsx` | Termos de uso do serviço |
| `/politicas-privacidade` | `PoliticasPrivacidade.tsx` | Política de privacidade |
| `*` | `NotFound.tsx` | Página 404 para rotas não encontradas |

### Seções da Landing Page (Index.tsx):

1. **Hero Section**: Título com efeito typewriter, badges animados, gradientes interativos
2. **Como Funciona**: Grid de cards explicando funcionalidades
3. **Benefícios**: Seção com imagem + cards de benefícios
4. **Funcionalidades Principais**: Grid de 3 colunas com features detalhadas
5. **CTA Section**: Call-to-action com mockup do WhatsApp
6. **Depoimentos**: Carousel de depoimentos de médicos
7. **CTA Final**: Seção hero dark com último call-to-action
8. **Footer**: Informações de contato e links

---

## Funcionalidades Principais

### Para os Visitantes:
- ✅ Visualização de todas as funcionalidades da Anna
- ✅ Leitura de termos e políticas
- ✅ Envio de mensagem via formulário de contato
- ✅ Direcionamento direto para WhatsApp da 123atendi
- ✅ Experiência responsiva em todos os dispositivos
- ✅ Animações suaves e interativas

### Para a Empresa:
- ✅ Rastreamento de conversões via Facebook Pixel
- ✅ Múltiplos CTAs estrategicamente posicionados
- ✅ SEO otimizado (single page com conteúdo rico)
- ✅ Deploy automatizado via push para main
- ✅ Escalabilidade via Docker Swarm

### Integrações:
- **WhatsApp Business**: `https://api.whatsapp.com/send/?phone=555121609890`
- **Facebook Pixel**: Rastreamento de PageView e eventos customizados

---

## Últimas Mudanças

Últimos 10 commits (do mais recente ao mais antigo):

1. `5b02d33` - **feat**: Adicionar Facebook Pixel com rastreamento completo
2. `5a2e3da` - **fix**: Alterar npm ci para npm install no Dockerfile para resolver erro de build
3. `5710aa0` - **feat**: Implementação completa do site Anna Connect Health
4. `b6af895` - Refactor verified badge
5. `a75a368` - Refactor verified badge
6. `1a55634` - Update verified badge style
7. `dc1c70e` - Refactor form page
8. `8858f19` - Fix: Add checkmark to select input
9. `f34e0d7` - Refactor: Improve verified checkmark
10. `c7bc346` - Refactor: Darken hero background slightly

### Principais Features Recentes:
- Facebook Pixel integrado para rastreamento de conversões
- Formulário de contato implementado
- Páginas legais (Termos e Políticas) criadas
- Sistema de badges verificados adicionado
- Design e UX refinados

---

## Como Rodar Localmente

### Pré-requisitos:
- Node.js 18+ e npm
- Git

### Comandos:

```bash
# 1. Clone o repositório (se ainda não tiver)
git clone https://github.com/123atendi-byte/anna-connect-health.git
cd anna-connect-health

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev
# Acesse: http://localhost:8080

# 4. Build para produção (minificado)
npm run build

# 5. Build em modo desenvolvimento (não minificado, para debug)
npm run build:dev

# 6. Preview do build localmente
npm run preview

# 7. Executar linter
npm run lint
```

### Docker (Local):

```bash
# Build da imagem
docker build -t anna-connect-health .

# Run do container na porta 8080
docker run -p 8080:8080 anna-connect-health

# Acesse: http://localhost:8080
```

---

## Como Fazer Deploy

### Deploy Automatizado (Recomendado):

O projeto tem CI/CD configurado com GitHub Actions. Para fazer deploy:

```bash
# 1. Faça suas alterações
git add .
git commit -m "feat: descrição da mudança"

# 2. Push para a branch main
git push origin main

# 3. GitHub Actions será acionado automaticamente e vai:
#    - Buildar a imagem Docker
#    - Fazer push para Docker Hub com tags :latest e :${sha}
#    - A imagem estará disponível para deploy
```

### Deploy Manual no Servidor:

```bash
# No servidor com Docker Swarm configurado:

# 1. Pull da imagem mais recente
docker pull 123atendi/anna-connect-health:latest

# 2. Deploy usando docker-compose.yml
docker stack deploy -c docker-compose.yml anna

# 3. Verificar status
docker service ls | grep anna
docker service logs anna_anna-site
```

### Rollback:

```bash
# Usar uma versão específica (commit SHA)
docker service update --image 123atendi/anna-connect-health:${SHA} anna_anna-site

# Ou voltar para a última versão estável
docker service update --image 123atendi/anna-connect-health:latest anna_anna-site
```

---

## Próximos Passos

### Sugestões de Melhorias:

#### SEO e Performance:
- [ ] Adicionar meta tags Open Graph e Twitter Cards
- [ ] Implementar sitemap.xml
- [ ] Adicionar Schema.org markup (organizações, reviews)
- [ ] Otimizar imagens (WebP, lazy loading)
- [ ] Implementar Service Worker para PWA

#### Funcionalidades:
- [ ] Blog/notícias sobre IA em saúde
- [ ] Calculadora de ROI para clínicas
- [ ] Página de cases de sucesso detalhados
- [ ] FAQ com busca
- [ ] Chat ao vivo ou chatbot de demonstração
- [ ] Área de login para clientes (dashboard)

#### Analytics e Marketing:
- [ ] Google Analytics 4
- [ ] Hotjar ou Microsoft Clarity para heatmaps
- [ ] A/B testing de CTAs
- [ ] Lead magnet (e-book, webinar)

#### Técnicas:
- [ ] Testes unitários (Vitest + React Testing Library)
- [ ] Testes E2E (Playwright ou Cypress)
- [ ] Storybook para documentação de componentes
- [ ] Monitoramento de erros (Sentry)
- [ ] Melhorar TypeScript strictness

---

## Links Importantes

### Produção:
- **Site ao vivo**: [https://anna.123atendi.com.br](https://anna.123atendi.com.br)
- **WhatsApp**: [https://api.whatsapp.com/send/?phone=555121609890](https://api.whatsapp.com/send/?phone=555121609890)

### Repositórios:
- **GitHub**: [https://github.com/123atendi-byte/anna-connect-health](https://github.com/123atendi-byte/anna-connect-health)
- **Docker Hub**: [https://hub.docker.com/r/123atendi/anna-connect-health](https://hub.docker.com/r/123atendi/anna-connect-health)

### Documentação:
- **shadcn/ui**: [https://ui.shadcn.com/](https://ui.shadcn.com/)
- **Tailwind CSS**: [https://tailwindcss.com/docs](https://tailwindcss.com/docs)
- **Framer Motion**: [https://www.framer.com/motion/](https://www.framer.com/motion/)
- **React Router**: [https://reactrouter.com/](https://reactrouter.com/)
- **Vite**: [https://vite.dev/](https://vite.dev/)

---

## Configurações Importantes

### GitHub Secrets (necessários para CI/CD):

```
DOCKERHUB_USERNAME=123atendi
DOCKERHUB_TOKEN=<token-de-acesso>
```

### Variáveis de Ambiente:

**Não há variáveis de ambiente necessárias** no momento. O projeto é estático e todas as configurações estão hard-coded.

#### Para adicionar variáveis de ambiente no futuro:

1. Criar arquivo `.env` na raiz (não commitar!)
2. Adicionar variáveis com prefixo `VITE_`:
   ```
   VITE_API_URL=https://api.example.com
   VITE_FB_PIXEL_ID=123456789
   ```
3. Acessar no código: `import.meta.env.VITE_API_URL`
4. Adicionar ao `.gitignore`: `.env`, `.env.local`

### Configuração Docker Swarm:

- **Network**: `externa` (network externa do Swarm)
- **Replicas**: 1
- **Placement**: Node manager
- **Porta interna**: 80 (Nginx)
- **Traefik**:
  - Entrypoint: `websecure` (HTTPS)
  - Host: `anna.123atendi.com.br`
  - TLS: Let's Encrypt (`le` resolver)

### Configuração Nginx (dentro do container):

- Serve arquivos estáticos de `/usr/share/nginx/html`
- Fallback para `index.html` (suporte para React Router)
- Porta: 80

---

## Notas de Desenvolvimento

### Padrões de Commit:

Use conventional commits para manter histórico limpo:

- `feat:` - Nova funcionalidade
- `fix:` - Correção de bug
- `docs:` - Alterações em documentação
- `style:` - Formatação, ponto e vírgula, etc.
- `refactor:` - Refatoração sem mudança de funcionalidade
- `test:` - Adição de testes
- `chore:` - Manutenção, deps, build, etc.

Exemplo: `feat: adicionar seção de FAQ com busca`

### Workflow de Desenvolvimento:

1. Pull das últimas mudanças: `git pull origin main`
2. Criar branch para features grandes: `git checkout -b feature/nome-da-feature`
3. Desenvolver e testar localmente
4. Commit com mensagem descritiva
5. Push para GitHub
6. Criar Pull Request (para features) ou merge direto (para fixes pequenos)

### Troubleshooting Comum:

**Build falha no Docker:**
- Verificar se `npm install` está funcionando localmente
- Limpar cache do Docker: `docker system prune -a`

**Site não carrega em produção:**
- Verificar logs: `docker service logs anna_anna-site`
- Verificar se Traefik está roteando: `docker service ls`

**Animações com lag:**
- Reduzir complexidade das animações Framer Motion
- Usar `will-change` CSS para propriedades animadas
- Verificar performance com React DevTools Profiler

---

## Contato e Suporte

Para questões sobre o projeto:
- **Empresa**: 123atendi
- **GitHub Issues**: [Issues do repositório](https://github.com/123atendi-byte/anna-connect-health/issues)

---

**Última sincronização**: 15/10/2025 - Branch `main` - Commit `5b02d33`
