import { LocaleWrapper } from '@/__mocks__/wrappers/locale-wrapper'
import { render, screen } from '@testing-library/react'

import Page from './page'

it('Button Rendered', () => {
    render(<Page />, { wrapper: LocaleWrapper })
    expect(screen.getByText('Hello World')).toBeDefined()
})
