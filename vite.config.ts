import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src', // This maps "@" to the "src" directory
    },
  },
  base: '/protect-me-from-what-i-want/'
})
