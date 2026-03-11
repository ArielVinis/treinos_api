# treinos_api

API de treinos com Fastify, Prisma, PostgreSQL e autenticação (better-auth).

## Pré-requisitos

- [Bun](https://bun.sh) ou Node.js
- PostgreSQL (ou use o Docker Compose)

## Instalação

```bash
bun install
```

## Variáveis de ambiente

Crie um `.env` na raiz do projeto. Exemplo:

```env
PORT=3000
WEB_APP_BASE_URL="http://localhost:3000"
API_BASE_URL="http://localhost:3000"
BETTER_AUTH_SECRET=secret-aqui
DATABASE_URL="postgresql://postgres:password@localhost:5432/bootcamp-treinos-api"
```

Para subir apenas o Postgres:

```bash
docker compose up -d
```

## Scripts

| Comando         | Descrição                      |
| --------------- | ------------------------------ |
| `bun run dev`   | Desenvolvimento com hot reload |
| `bun run build` | Compila TypeScript             |
| `bun run start` | Roda a build em produção       |

## Documentação da API

Com o servidor rodando: **[http://localhost:3000/docs](http://localhost:3000/docs)** (Scalar).

## Migrations (Prisma)

```bash
bunx prisma migrate dev
```
