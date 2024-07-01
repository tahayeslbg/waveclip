'use client'

import * as React from 'react'
import { Check, Moon, Sun, TvMinimal } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const ThemeSwitcher = () => {
    const { theme: activeTheme, setTheme, themes } = useTheme()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon-sm">
                    <Sun
                        size={16}
                        className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                    />
                    <Moon
                        size={16}
                        className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                    />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="space-y-0.5">
                {themes.map((theme, i) => (
                    <DropdownMenuItem
                        key={i}
                        onClick={() => setTheme(theme)}
                        className="justify-between"
                    >
                        <div className="flex items-center gap-1.5 capitalize">
                            {theme === 'dark' && <Moon size={14} />}
                            {theme === 'light' && <Sun size={14} />}
                            {theme === 'system' && <TvMinimal size={14} />}
                            <span>{theme}</span>
                        </div>
                        {activeTheme === theme && <Check size={14} />}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default ThemeSwitcher
