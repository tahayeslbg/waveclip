import localFont from 'next/font/local'

export const montreal = localFont({
    src: [
        {
            path: '../public/fonts/NeueMontreal-Light.woff2',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../public/fonts/NeueMontreal-LightItalic.woff2',
            weight: '300',
            style: 'italic',
        },
        {
            path: '../public/fonts/NeueMontreal-Regular.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../public/fonts/NeueMontreal-Italic.woff2',
            weight: '400',
            style: 'italic',
        },
        {
            path: '../public/fonts/NeueMontreal-Medium.woff2',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../public/fonts/NeueMontreal-MediumItalic.woff2',
            weight: '500',
            style: 'italic',
        },
        {
            path: '../public/fonts/NeueMontreal-Bold.woff2',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../public/fonts/NeueMontreal-BoldItalic.woff2',
            weight: '700',
            style: 'italic',
        },
    ],
    display: 'swap',
    variable: '--font-montreal',
    preload: true,
})
