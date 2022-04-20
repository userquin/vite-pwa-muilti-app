import { resolveConfig } from 'vite'
import { copyFileSync, unlinkSync } from 'fs'
import { resolve } from 'path'

const destinations = [
    ['../frontend/sub1/favicon.svg', '../build/frontend/sub1/favicon.svg'],
    ['../frontend/sub1/pwa-192x192.png', '../build/frontend/sub1/pwa-192x192.png'],
    ['../frontend/sub1/pwa-512x512.png', '../build/frontend/sub1/pwa-512x512.png'],
]

const buildPWA = async () => {

    destinations.forEach(([src, dest]) => {
        // console.log(`${resolve(__dirname, src)} => ${resolve(__dirname, dest)}`)
        copyFileSync(resolve(__dirname, src), resolve(__dirname, dest))
    })

    const config = await resolveConfig(
{},
'build',
'production'
    )
    // when `vite-plugin-pwa` is presented, use it to regenerate SW after rendering
    const pwaPlugin = config.plugins.find(i => i.name === 'vite-plugin-pwa')?.api
    if (pwaPlugin?.generateSW) {
        console.log('Generating PWA...')
        await pwaPlugin.generateSW()
    }

    // console.log(`${resolve(__dirname, '../build/frontend/manifest.webmanifest')} => ${resolve(__dirname, '../build/frontend/sub1/manifest.webmanifest')}`)

    // copy manifest.webmanifest to sub1 folder
    copyFileSync(
        resolve(__dirname, '../build/frontend/manifest.webmanifest'),
        resolve(__dirname, '../build/frontend/sub1/manifest.webmanifest'),
    )
    // delete manifest.webmanifest from frontend folder
    unlinkSync(resolve(__dirname, '../build/frontend/manifest.webmanifest'))
}

buildPWA()
