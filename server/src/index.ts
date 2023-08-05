import { Elysia } from 'elysia'

import { yoga } from '@elysiajs/graphql-yoga'
import { filterSongs } from './datasource'
import { staticPlugin } from '@elysiajs/static'

const typeDefs = /* GraphQL */ `
    type Song {
        name: String!
        localized: String!
        cover: String!
        composer: Composer!
    }

    type Composer {
        name: String!
    }

    type Query {
        songs(search: String!): [Song!]!
    }
`

const app = new Elysia()
    .use(staticPlugin())
    .use(
        yoga({
            typeDefs,
            resolvers: {
                Query: {
                    songs: (_, { search }) => filterSongs(search)
                }
            }
        })
    )
    .get('/', () => 'Hello Elysia')
    .listen(3001)

export type TypeDefs = typeof typeDefs

console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)
