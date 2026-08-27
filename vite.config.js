import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'
import { resolve } from 'path'

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
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        login: resolve(__dirname, 'login.html'),
        admin: resolve(__dirname, 'admin.html'),
        adminMap: resolve(__dirname, 'admin-map.html'),
        adminGaleri: resolve(__dirname, 'admin-galeri.html'),
        formPengungsi: resolve(__dirname, 'form-pengungsi.html'),
        formAnggota: resolve(__dirname, 'form-anggota.html'),
        formLogistik: resolve(__dirname, 'form-logistik.html'),
        formFoto: resolve(__dirname, 'form-foto.html'),
        profil: resolve(__dirname, 'profil.html'),
        riwayat: resolve(__dirname, 'riwayat.html'),
        adminLogistik: resolve(__dirname, 'admin-logistik.html'),
        adminPengungsi: resolve(__dirname, 'admin-pengungsi.html')
      }
    }
  }
})
