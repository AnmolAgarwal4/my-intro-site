// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// If your repo name is "my-intro-site", keep this base:
export default defineConfig({
  plugins: [react()],
  base: '/my-intro-site/',
})
