
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate', // automatically updates service worker
      manifest: {
        name: 'My React PWA',
        short_name: 'ReactPWA',
        description: 'A Progressive Web App built with React and Vite',
        theme_color: '#000000',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: 'a5de96496-a931-4912-99a0-43230c86ede6.jfif',
            type: 'image/png',
            sizes: '192x192'
          },
          {
            src: 'a6b4b2065-2ebb-4745-9cf5-c6e47b377e84.jfif',
            type: 'image/png',
            sizes: '512x512'
          }
        ]
      }
    })
  ]
});

