import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: 'index.html' // if the HTML file is in the root
    }
    },  
  plugins: [react()],
})
