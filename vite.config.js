import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path' // para resolver rutas

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: { // hacemos esto para no usar rutas relativas
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
