import '@/styles/global.css'

import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'

import { montreal } from '@/lib/fonts'

import { ThemeProvider } from '@/components/theme-provider'

export const metadata = {
    title: 'WaveClip',
}

const LocaleLayout = async ({
    children,
    params: { locale },
}: {
    children: React.ReactNode
    params: { locale: string }
}) => {
    const messages = await getMessages()

    return (
        <html
            lang={locale}
            className={montreal.variable}
            suppressHydrationWarning
        >
            <body>
                <NextIntlClientProvider messages={messages}>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                        disableTransitionOnChange
                    >
                        {children}
                    </ThemeProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    )
}

export default LocaleLayout
