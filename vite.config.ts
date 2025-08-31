import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { copy } from 'fs-extra'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-public-files',
      writeBundle() {
        // Copy favicon and other public files to dist
        copy('public/favicon-32x32.png', 'dist/favicon-32x32.png');
        copy('public/og-image.jpeg', 'dist/og-image.jpeg');
      }
    }
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 5173,
    host: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
  define: {
    'import.meta.env.VITE_API_BASE_URL': JSON.stringify('https://profile-fhvk.vercel.app/api')
  },
  // إعدادات إضافية للـ deployment
  base: '/',
  preview: {
    port: 4173,
    host: true,
  }
})
