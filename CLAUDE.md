# CLAUDE.md

Este arquivo fornece orientação ao Claude Code (claude.ai/code) ao trabalhar com código neste repositório.

## Sobre o Projeto

Anna Connect Health é uma landing page/site institucional para apresentar a Anna, uma assistente de IA para atendimento médico desenvolvida pela 123atendi. O sistema permite que clínicas médicas automatizem agendamentos, confirmações e atendimento 24/7 pelo WhatsApp.

## Stack Tecnológico

- **React 18** com TypeScript
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Framework de estilos utilitários
- **shadcn/ui** - Biblioteca de componentes UI baseada em Radix UI
- **React Router DOM** - Roteamento client-side
- **TanStack Query** - Gerenciamento de estado e cache de requisições
- **Framer Motion** - Animações e transições
- **React Hook Form + Zod** - Gerenciamento de formulários e validação

## Comandos de Desenvolvimento

```bash
# Desenvolvimento local
npm run dev          # Inicia servidor em localhost:8080

# Build
npm run build        # Build de produção (minificado)
npm run build:dev    # Build em modo desenvolvimento (não minificado)

# Qualidade de código
npm run lint         # Executa ESLint

# Preview
npm run preview      # Preview do build localmente
```

## Docker

```bash
# Build local
docker build -t anna-connect-health .

# Run local (porta 8080)
docker run -p 8080:8080 anna-connect-health

# Deploy com Docker Swarm (usando docker-compose.yml)
docker stack deploy -c docker-compose.yml anna
```

O projeto usa Docker multi-stage build:
1. **Estágio 1 (builder)**: Compila a aplicação React com Node.js
2. **Estágio 2 (nginx)**: Serve os arquivos estáticos com Nginx Alpine

## Arquitetura do Projeto

### Estrutura de Diretórios

```
src/
├── App.tsx              # Configuração principal (Router, QueryClient, Providers)
├── main.tsx            # Entry point da aplicação
├── pages/              # Páginas/rotas
│   ├── Index.tsx       # Página principal (landing page)
│   └── NotFound.tsx    # Página 404
├── components/         # Componentes customizados
│   ├── Navbar.tsx              # Navegação
│   ├── TypewriterText.tsx      # Efeito de texto digitado
│   ├── FloatingElements.tsx    # Elementos flutuantes animados
│   └── ui/                     # Componentes shadcn/ui (não editar diretamente)
├── hooks/             # React hooks customizados
│   ├── use-mobile.tsx
│   └── use-toast.ts
├── lib/               # Utilitários
└── assets/           # Imagens e recursos estáticos
```

### Configuração de Path Alias

O projeto usa `@/` como alias para a pasta `src/`:
- Configurado em `vite.config.ts` e `tsconfig.json`
- Exemplo: `import { Button } from "@/components/ui/button"`

### Componentes shadcn/ui

Os componentes em `src/components/ui/` são gerados pelo shadcn/ui CLI:
- **Não edite estes arquivos diretamente** a menos que necessário
- Para adicionar novos componentes: use o CLI do shadcn/ui ou consulte a documentação
- Componentes são baseados em Radix UI com estilização Tailwind

### Sistema de Temas

O projeto usa CSS variables para temas (definidas em `src/index.css`):
- Variáveis HSL customizadas: `--primary`, `--background`, `--foreground`, etc.
- Variáveis específicas do hero: `--hero-bg`, `--hero-bg-end`
- Suporte a dark mode (classe `dark` no elemento root)

### Página Principal (Index.tsx)

A landing page é uma single-page com várias seções:
1. **Hero Section**: Título com efeito typewriter, badges animados, gradientes interativos
2. **Como Funciona**: Grid de cards com ícones explicando funcionalidades
3. **Benefícios**: Seção com imagem + cards de benefícios
4. **Funcionalidades Principais**: Grid 3 colunas de features detalhadas
5. **CTA Section**: Call-to-action com mockup do WhatsApp
6. **Depoimentos**: Carousel de depoimentos de médicos
7. **CTA Final**: Seção hero dark com último call-to-action
8. **Footer**: Informações de contato e links

Todos os CTAs direcionam para WhatsApp: `https://api.whatsapp.com/send/?phone=555121609890`

### Animações

- **Framer Motion** é usado extensivamente para animações
- Padrões comuns:
  - `initial={{ opacity: 0, y: 30 }}` + `whileInView={{ opacity: 1, y: 0 }}`
  - `viewport={{ once: true, margin: "-100px" }}` para trigger de animação
  - `whileHover={{ scale: 1.1 }}` para interações
  - Mouse follower gradient no hero (tracking `mousePosition`)

### Roteamento

- Apenas 2 rotas: `/` (Index) e `*` (NotFound)
- Adicione novas rotas ANTES da rota catch-all `*` em `App.tsx`

## CI/CD

O projeto usa GitHub Actions (`.github/workflows/docker-build.yml`):
- **Trigger**: Push na branch `main` ou manualmente
- **Processo**:
  1. Build da imagem Docker
  2. Push para Docker Hub com tags `:latest` e `:${github.sha}`
  3. Cache de build layers para otimização

**Secrets necessários**:
- `DOCKERHUB_USERNAME`
- `DOCKERHUB_TOKEN`

## Deploy

O projeto é deployado via Docker Swarm usando Traefik como reverse proxy:
- **Domínio**: `anna.123atendi.com.br`
- **TLS**: Let's Encrypt (via Traefik)
- **Rede**: `externa` (network externa do Swarm)
- **Porta interna**: 80 (Nginx)

## TypeScript

Configuração TypeScript é permissiva para prototipagem rápida:
- `noImplicitAny: false`
- `strictNullChecks: false`
- `noUnusedLocals: false`

Se for necessário maior rigor de tipos, ajuste `tsconfig.json`.

## Estilização

- **Tailwind CSS**: Utilitários para layout e responsividade
- **Responsive breakpoints**: `sm:`, `md:`, `lg:`, `xl:`, `2xl:`
- **Plugins**: `tailwindcss-animate`, `@tailwindcss/typography`
- Classes utilitárias customizadas em `src/index.css`

## Boas Práticas

- Mantenha componentes customizados em `src/components/` (não em `/ui`)
- Use `framer-motion` para animações complexas
- Prefira componentes shadcn/ui para UI consistente
- Imagens devem estar em `src/assets/` e importadas como módulos
- Mantenha a landing page em uma única página (Index.tsx) para melhor SEO
