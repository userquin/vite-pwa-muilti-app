export default {
  outDir: '../build/frontend/sub1',
  base: '/sub1/',
  scope: '/sub1/',
  registerType: 'autoUpdate',
  manifest: {
    id: '/sub1/',
    scope: '/sub1/',
    start_url: '/sub1/',
    name: 'Vite Plugin PWA',
    short_name: 'PWA for Vite',
    display: 'standalone',
    description: 'Zero-config PWA for Vite',
    theme_color: '#ffffff',
    icons: [
      {
        src: 'pwa-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: 'pwa-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  },
  workbox: {
    // will use process.cwd(): it is the root folder
    globDirectory: './build/frontend/sub1/',
    globPatterns: ['**/*.{js,css,html,ico,png,svg,webmanifest}'],
    globIgnores: ['**/sw*', '**/workbox-*'],
  },
}
