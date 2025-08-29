import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL('./src', import.meta.url)),
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
    'process.env.VITE_API_BASE_URL': JSON.stringify('https://profile-fhvk.vercel.app/api')
  },
  // إعدادات إضافية للـ deployment
  base: '/',
  preview: {
    port: 4173,
    host: true,
  }
})
