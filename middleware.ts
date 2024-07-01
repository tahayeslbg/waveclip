import createMiddleware from 'next-intl/middleware'

import { localePrefix, locales, pathnames } from '@/config/navigation'

export default createMiddleware({
    locales,
    defaultLocale: 'en',
    localePrefix,
    pathnames,
    localeDetection: true,
})

export const config = {
    matcher: ['/', '/(tr|en|de|es)/:path*'],
}
