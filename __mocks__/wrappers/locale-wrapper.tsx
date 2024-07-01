import { ReactNode } from 'react'
import { NextIntlClientProvider } from 'next-intl'

import messages from '../../translations/en.json'

interface Props {
    children: ReactNode
}

export const LocaleWrapper = ({ children }: Props) => {
    return (
        <NextIntlClientProvider messages={messages} locale="en">
            {children}
        </NextIntlClientProvider>
    )
}
