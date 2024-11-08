import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      external: ['react-router-dom']
    },
      outDir: 'dist',
      target: 'esnext',
      rollupOptions: {
        input: 'src/index.html'
      }
    },  
  plugins: [react()],
})
