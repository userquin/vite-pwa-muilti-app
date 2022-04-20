import { resolve } from 'path'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import pwaConfiguration from './scripts/pwa-configuration'

export default defineConfig({
  root: './frontend',
  plugins: [
    VitePWA(pwaConfiguration)
  ],
  build: {
    minify: false,
    target: 'esnext',
    outDir: resolve(__dirname, './build/frontend'),
    emptyOutDir: true,
    manifest: true,
    rollupOptions: {
      input: {
        sub1: resolve(__dirname, 'frontend/sub1/index.html'),
        sub2: resolve(__dirname, 'frontend/sub2/index.html'),
        sub3: resolve(__dirname, 'frontend/sub3/index.html')
      }
    }
  }
})
