import { useTranslations } from 'next-intl'

export default function Page() {
    const t = useTranslations('HelloWorld')
    return (
        <main className="flex items-center gap-2 py-5">
            <h1> {t('Label')}</h1>
        </main>
    )
}
