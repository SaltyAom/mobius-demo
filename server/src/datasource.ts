import type { CreateMobius } from 'graphql-mobius'
import type { TypeDefs } from '.'

type Schema = CreateMobius<TypeDefs>

export const songs = [
    {
        name: 'Reburn',
        localized: 'Reburn',
        cover: 'http://localhost:3001/public/honkai.webp',
        composer: {
            name: 'Hoyomix'
        }
    },
    {
        name: '祝福',
        localized: 'The blessing',
        cover: 'http://localhost:3001/public/the-blessing.webp',
        composer: {
            name: 'YOASOBI'
        }
    },
    {
        name: '大地の閾を探して',
        localized: 'Looking for the edge of ground',
        cover: 'http://localhost:3001/public/uufo.webp',
        composer: {
            name: 'Camellia'
        }
    },
    {
        name: '月夜の音楽会',
        localized: 'Moonlit Night Concert',
        cover: 'http://localhost:3001/public/moonlit-night-concert.webp',
        composer: {
            name: 'Akiko Shikata'
        }
    },
    {
        name: 'Radiant',
        localized: 'Radiant',
        cover: 'http://localhost:3001/public/radiant.webp',
        composer: {
            name: 'Monster Siren Record'
        }
    }
] satisfies Schema['Song'][]

export const filterSongs = (search: string) =>
    songs.filter(
        (x) =>
            x.composer.name.toLowerCase().includes(search.toLowerCase()) ||
            x.name.toLowerCase().includes(search.toLowerCase()) ||
            x.localized.toLowerCase().includes(search.toLowerCase())
    )
