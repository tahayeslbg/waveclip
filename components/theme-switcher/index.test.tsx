// components/ThemeToggle.test.tsx
import React from 'react'
import { render } from '@/__mocks__/test-utils'
import userEvent from '@testing-library/user-event'
import { useTheme } from 'next-themes'

import ThemeSwitcher from '.'

const ThemeSpy: React.FC = () => {
    const { theme } = useTheme()
    return <span data-testid="theme-spy">{theme}</span>
}

describe('ThemeSwitcher', () => {
    it('Light Theme', async () => {
        const { getByTestId } = render(
            <>
                <ThemeSwitcher />
                <ThemeSpy />
            </>,
            { theme: 'dark' },
        )
        const themeButton = getByTestId('theme_button')
        expect(themeButton).toBeInTheDocument()

        await userEvent.click(themeButton)

        const lightThemeOption = getByTestId('light-option')
        expect(lightThemeOption).toBeInTheDocument()

        await userEvent.click(lightThemeOption)

        const spy = getByTestId('theme-spy')

        expect(spy).toHaveTextContent('light')
    })

    it('Dark Theme', async () => {
        const { getByTestId } = render(
            <>
                <ThemeSwitcher />
                <ThemeSpy />
            </>,
            { theme: 'light' },
        )
        const themeButton = getByTestId('theme_button')
        expect(themeButton).toBeInTheDocument()

        await userEvent.click(themeButton)

        const lightThemeOption = getByTestId('dark-option')
        expect(lightThemeOption).toBeInTheDocument()

        await userEvent.click(lightThemeOption)

        const spy = getByTestId('theme-spy')

        expect(spy).toHaveTextContent('dark')
    })
})
