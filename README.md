# Mobius Demo
Using Mobius to acheive End-to-end type safety, for GraphQL with TypeScript, **no codegen** for sharing type both client and server

## Prerequisted
- Node.js
- [Bun](https://bun.sh): For running Elysia backend for serving GraphQL Yoga server

## How this works
Made possible by:
- [Nextjs](https://nextjs.org): serve frontend
- [Elysia](https://elysiajs.com): serve backend and GraphQL Yoga
- [Mobius](https://github.com/saltyaom/mobius): Parse GraphQL string to TypeScript

Mobius allow us to parse GraphQL string to TypeScript type without relying on code generation, resulting an immediate experience of type update like tRPC

## Setup
Open 2 terminal, then run dev command
```bash
cd frontend && bun run dev
cd backend && bun run dev
```

Open [localhost:3000](http://localhost:3000), you should be greet with music list search allowing you to prompt for music which use GraphQL to query

