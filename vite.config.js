import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      external: ['react-router-dom'],
      input: 'index.html'
    },
      outDir: 'dist',
      target: 'esnext',
    },  
  plugins: [react()],
})
