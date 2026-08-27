import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true // Supaya bisa ditest saat dev server jalan
      },
      manifest: {
        name: 'Relawan Gempa Flores',
        short_name: 'Relawan App',
        description: 'Aplikasi Pendataan Pengungsi & Logistik Darurat Bencana',
        theme_color: '#2563eb',
        background_color: '#f8fafc',
        display: 'standalone',
        orientation: 'portrait',
        icons: [
          {
            src: 'https://cdn.iconscout.com/icon/free/png-256/free-tent-icon-download-in-svg-png-gif-file-formats--camp-nature-trip-pack-holidays-icons-1502660.png?f=webp',
            sizes: '256x256',
            type: 'image/png'
          }
        ]
      },
      workbox: {
        // Caching semua aset statis agar bisa offline 100%
        globPatterns: ['**/*.{js,css,html,ico,png,svg,json}']
      }
    })
  ],
  server: {
    port: 3000,
    open: true
  }
})
