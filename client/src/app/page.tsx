import { Fragment } from 'react'

import { Mobius } from 'graphql-mobius'
import type { TypeDefs } from 'server'

const mobius = new Mobius<TypeDefs>({
    url: 'http://127.0.0.1:3001/graphql'
})

export default async function Page({
    searchParams: { search = '' }
}: {
    searchParams: { search: string }
}) {
    const data = await mobius.query({
        songs: {
            select: {
                name: true,
                localized: true,
                cover: true,
                composer: {
                    name: true
                }
            },
            where: {
                search
            }
        }
    })

    return (
        <main className="flex flex-col justify-center items-center max-w-sm w-full mx-auto py-12">
            <form className="flex-col mb-6 w-full">
                <input
                    autoFocus
                    name="search"
                    placeholder="Find your music"
                    className="text-xl text-gray-700 w-full px-4 py-3 border-0 rounded-lg bg-gray-100"
                />
            </form>
            <section className="flex flex-col w-full">
                {!data || !data.songs.length ? (
                    <article className="flex flex-col justify-center items-center gap-4 text-center w-full max-w-[28ch] mx-auto py-8">
                        <img
                            src="/ely.webp"
                            alt="Elysia searching computer"
                            className="w-36 h-36 rounded-lg"
                        />
                        <h1 className="text-3xl text-gray-700">Not found</h1>
                        <p className="text text-gray-500">
                            Seems like Elysia couldn&apos;t find what
                            you&apos;re looking for
                        </p>
                        <p className="text-lg text-gray-500">
                            Try another keyword like Yoasobi, Honkai World Diva
                        </p>
                    </article>
                ) : (
                    data.songs.map(({ name, localized, cover, composer }, i) => (
                        <Fragment key={name}>
                            {!i || <hr className="h-0" />}
                            <article className="flex gap-4 p-2 rounded">
                                <img
                                    className="w-24 h-24 bg-gray-100 rounded-lg"
                                    src={cover}
                                    alt={name}
                                />
                                <header className="flex flex-col">
                                    <h2 className="text-xl font-medium text-gray-700">
                                        {name}
                                    </h2>
                                    <small className="text-base text-gray-500">
                                        {localized}
                                    </small>
                                    <small className="text-base text-gray-500">
                                        {composer.name}
                                    </small>
                                </header>
                            </article>
                        </Fragment>
                    ))
                )}
            </section>
        </main>
    )
}
