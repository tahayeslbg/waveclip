import React, { ReactElement } from 'react'
import messages from '@/translations/en.json'
import { render, RenderOptions, RenderResult } from '@testing-library/react'
import { NextIntlClientProvider } from 'next-intl'

import { ThemeProvider } from '@/components/theme-provider'

interface TestProviderOptions {
    theme?: string
}

interface CustomOptions extends RenderOptions, TestProviderOptions {}

const createTestProviders = ({
    theme = 'dark',
}: TestProviderOptions): React.FC => {
    const ProviderWrapper: React.FC = ({
        children,
    }: React.PropsWithChildren<{}>) => (
        <NextIntlClientProvider locale="en" messages={messages}>
            <ThemeProvider
                defaultTheme={theme}
                enableSystem={false}
                attribute="class"
            >
                {children}
            </ThemeProvider>
        </NextIntlClientProvider>
    )

    ProviderWrapper.displayName = 'TestProviders'

    return ProviderWrapper
}

const customRender = (
    ui: ReactElement,
    { theme, ...options }: CustomOptions = {},
): RenderResult =>
    render(ui, { wrapper: createTestProviders({ theme }), ...options })

export * from '@testing-library/react'

export { customRender as render }
