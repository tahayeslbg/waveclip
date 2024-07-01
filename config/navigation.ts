import { createLocalizedPathnamesNavigation } from 'next-intl/navigation'
import type { Pathnames } from 'next-intl/routing'

export const locales = ['tr', 'en', 'de', 'es'] as const
export const localePrefix = 'always'

export const pathnames = {
    '/': '/',
    '/sign-in': {
        tr: '/giris-yap',
        en: '/sign-in',
        de: '/einloggen',
        es: '/entrada',
    },
    '/sign-up': {
        tr: '/kayit-ol',
        en: '/sign-up',
        de: '/registrieren',
        es: '/registro',
    },
    '/movies': {
        tr: '/filmler',
        en: '/movies',
        de: '/filme',
        es: '/peliculas',
    },
    '/movies/[movieId]': {
        tr: '/filmler/[movieId]',
        en: '/movies/[movieId]',
        de: '/filme/[movieId]',
        es: '/peliculas/[movieId]',
    },
    '/tv-series': {
        tr: '/tv-dizileri',
        en: '/tv-series',
        de: '/fernsehserie',
        es: '/series-de-tv',
    },
    '/tv-series/[serieId]': {
        tr: '/tv-dizileri/[serieId]',
        en: '/tv-series/[serieId]',
        de: '/fernsehserie/[serieId]',
        es: '/series-de-tv/[serieId]',
    },
} satisfies Pathnames<typeof locales>

export const publicRoutes = []

export type LinkHrefType =
    typeof Link extends React.ComponentType<{
        href: infer H
    }>
        ? H
        : never

export const { Link, redirect, usePathname, useRouter, getPathname } =
    createLocalizedPathnamesNavigation({
        locales,
        localePrefix,
        pathnames: pathnames as typeof pathnames & Record<string & {}, string>,
    })
