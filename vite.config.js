import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      // Remove the 'external' property here
      input: 'index.html'
    },
    outDir: 'dist',
    target: 'esnext',
  },
  plugins: [react()],
})
