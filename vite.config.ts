import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
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
    sourcemap: false, // تعطيل sourcemap للـ production
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          ui: ['framer-motion', 'lucide-react'],
        },
      },
    },
  },
  base: '/',
  define: {
    'import.meta.env.VITE_API_BASE_URL': JSON.stringify('https://profile-fhvk.vercel.app/api')
  },
  preview: {
    port: 4173,
    host: true,
  }
})
