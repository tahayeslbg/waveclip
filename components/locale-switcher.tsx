'use client'

import React from 'react'
import { Check, Globe } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'

import { locales, usePathname, useRouter } from '@/config/navigation'

import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import Icons from '@/components/ui/icons'

const LocaleSwitcher = () => {
    const t = useTranslations()
    const activeLocale = useLocale()
    const router = useRouter()
    const pathname = usePathname()

    const localeItems = locales.map((locale) => {
        const flagMap = {
            tr: Icons.TR,
            en: Icons.EN,
            de: Icons.DE,
            es: Icons.ES,
        }
        return {
            flag: flagMap[locale] || null,
            localeName: t(`Locales.${locale}`),
            locale,
        }
    })

    const handleLocale = (locale: (typeof locales)[number]) => {
        router.push({ pathname }, { locale })
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon-sm">
                    <Globe size={16} />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-40 space-y-0.5">
                {localeItems.map((item, i) => (
                    <DropdownMenuItem
                        key={i}
                        className="justify-between"
                        onClick={() => handleLocale(item.locale)}
                    >
                        <div className="flex items-center space-x-2">
                            <item.flag />
                            <span>{item.localeName}</span>
                        </div>
                        {activeLocale === item.locale && <Check size={14} />}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default LocaleSwitcher
