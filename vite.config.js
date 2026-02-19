import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// For GitHub Pages: use '/' if using custom domain (CNAME), or '/zincsoda.github.com/' for *.github.io
export default defineConfig({
  plugins: [react()],
  base: '/',
})
