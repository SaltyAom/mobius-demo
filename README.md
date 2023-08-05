# Mobius Demo
Using Mobius to acheive End-to-end type safety, for GraphQL with TypeScript, **no codegen** for sharing type both client and server

## Prerequisted
- Node.js
- [Bun](https://bun.sh): For running Elysia backend for serving GraphQL Yoga server

## Setup
Open 2 terminal, then run dev command
```bash
cd frontend && bun run dev
cd backend && bun run dev
```

Open [localhost:3000](http://localhost:3000), you should be greet with music list search allowing you to prompt for music which use GraphQL to query

## How this works
Made possible by:
- [Nextjs](https://nextjs.org): serve frontend
- [Elysia](https://elysiajs.com): serve backend and GraphQL Yoga
- [Mobius](https://github.com/saltyaom/mobius): Parse GraphQL string to TypeScript

Mobius allow us to parse GraphQL string to TypeScript type without relying on code generation, resulting an immediate experience of type update like tRPC.

Mobius also ships with simple query engine using Prisma-like syntax for querying GraphQL query

Once type is defined from Mobius, you get type safety for defining resolvers and query function you can export type reference from server to client via `import type` on monorepo.

Passing template literal type to client, allowing you to infers type without exposing GraphQL schema or adding additional code to your frontend.

Once Mobius client is initiated, you can query GraphQL using Prisma-like syntax with full type safety for querying and response, resulting in End-to-end type safety for GraphQL without relying on code generation at all.
