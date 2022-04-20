/// <reference types="vite-plugin-pwa/client" />
import { registerSW } from 'virtual:pwa-register'
registerSW({
    immediate: true,
    onRegistered(r) {
        console.log(`SW registered: ${r}`)
    }
})
console.log('ohey, app1')
