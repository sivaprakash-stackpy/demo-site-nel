import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/demo-site-nel/',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
})
