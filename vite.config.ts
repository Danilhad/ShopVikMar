import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true,
    open: true // ✅ Автоматически открывать браузер
  },
  build: {
    outDir: 'dist',
    sourcemap: false
  }
})