import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true, // ✅ Важно: разрешаем внешние подключения
    hmr: {
      host: 'localhost', // ✅ Для hot reload
    },
    cors: true, // ✅ Разрешаем CORS
  },
  build: {
    outDir: 'dist',
    sourcemap: false
  }
})